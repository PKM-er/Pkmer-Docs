---
uid: 2023080322222850
title: Obsidian 插件：【Readme】Metadata Extractor
tags: ['obsidian插件', 'readme']
description: 定期导出元数据以与第三方应用程序（如启动器或图形分析软件）集成。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Metadata Extractor

> [!Note] 插件名片
> - 插件名称：Metadata Extractor
> - 插件作者：kometenstaub
> - 插件说明：定期导出元数据以与第三方应用程序（如启动器或图形分析软件）集成。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kometenstaub/metadata-extractor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?metadata-extractor)

## 概述

定期导出元数据以与第三方应用程序（如启动器或图形分析软件）集成。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kometenstaub/metadata-extractor/main/README.md)
> 

---

## Readme(翻译）

下面是 [[metadata-extractor]] 插件的自述翻译


# 元数据提取器 Obsidian 插件

该插件允许您将仅通过插件访问的 Obsidian 保险库元数据写入硬盘。这使得第三方应用程序能够访问它们通常无法访问的 Obsidian 元数据。示例用例包括启动器应用程序（如 Alfred、Ulauncher）或图形分析软件。

有关通过第三方应用程序控制 Obsidian 的更多信息，请参阅[此指南](https://github.com/kometenstaub/metadata-extractor/blob/main/docs/Guide%20-%20Controlling%20Obsidian%20via%20Third-Party-App.md)。

有四个JSON导出文件

它们可以按计划执行。

### 标签导出

将每个标签及其对应的文件路径写入磁盘中的JSON文件。

示例：

```json
[
	{
		"tag": "css-themes",
		"tagCount": 5,
		"relativePaths": ["Advanced topics/Contributing to Obsidian.md"]
	},
	{
		"tag": "insider-build",
		"tagCount": 3,
		"relativePaths": ["Advanced topics/Insider builds.md"]
	},
	{
		"tag": "anothertag",
		"tagCount": 2,
		"relativePaths": [
			"Plugins/Zettelkasten prefixer.md",
			"Advanced topics/Using obsidian URI.md"
		]
	}
]
```


TypeScript接口：

```ts
/**
 * JSON导出：tagToFile[]
 */
interface tagToFile {
	tag: string;
	tagCount: number;
	relativePaths: string[] | string;
};
```

### Markdown笔记元数据导出

第二个函数将每个文件名的元数据写入磁盘中的JSON文件。以下是JSON结构作为TypeScript接口的示例。

```ts
/**
 * JSON导出：Metadata[]
 */
import {extendedFrontMatterCache} from "./interfaces";

interface Metadata {
	fileName: string;
	relativePath: string;
	tags?: string[];
	headings?: { heading: string; level: number }[];
	aliases?: string[];
	links?: links[];
	backlinks?: backlinks[];
	frontmatter?: extendedFrontMatterCache;
}

interface links {
	link: string;
	relativePath?: string;
	cleanLink?: string;
	displayText?: string;
}

interface backlinks {
	fileName: string;
	link: string;
	relativePath: string;
	cleanLink?: string;
	displayText?: string;
}

interface extendedFrontMatterCache {
	cssclass?: string;
	publish?: boolean;
	position: Pos; // Pos is from the Obsidian API
	[key: string]: any;
}
```

导出的数组包含一个JSON数组，其中包含`Metadata`对象，每个对象对应您的存储库中的一个Markdown文件。

所有对象都有`fileName`和`relativePath`属性。`fileName`不包含`.md`扩展名，`relativePath`是从存储库根目录开始的路径。

如果文件有标签，则对象具有一个`tags`属性，其中包含标签的数组。标签都是小写的，如果文件中的标签出现多次，则在`tags`中只会出现一次。如果文件有任何frontmatter，则包含在`frontmatter`中。对象的结构取决于您的frontmatter。

`aliases`，`links`和`backlinks`也只在文件中存在时才会出现。

#### `links` 接口

`links` 包含对现有和不存在的文件的链接。如果文件不存在，则 `links` 不会有 `relativePath`。

`link` 是完整的链接，不包括 `|` 之后的任何内容，因此如果没有设置别名，它还包含 `#` 或 `#^`（如果存在标题或块引用）。如果是这种情况，还有 `cleanLink` 属性，它只提供链接的文件名（省略了 `.md` 扩展名）。

`displayText` 是 Obsidian 在预览模式下显示的内容。它可以是别名，也可以是文件名（如果存在标题或块引用）。如果它是对同一文件的标题链接或块引用，则不包括 `#`，就像 Obsidian 在预览模式下一样。

如果是普通链接，则不存在 `cleanLink` 和 `displayText`。

#### `backlinks` 接口

`backlinks` 接口始终具有 `relativePath` 属性，因为链接到当前文件（对象）的文件需要存在。

`fileName` 和 `relativePath` 是包含反向链接的文件。

`link`、`cleanLink` 和 `displayText` 的行为与 [链接接口](#links-interface) 相同。

### 非Markdown文件元数据导出

第三个函数会生成一个包含所有文件夹和非Markdown文件的JSON文件。其结构如下所示。

```ts
/**
 * JSON导出
 */
interface exceptMd {
	folders: folder[];
	nonMdFiles?: file[];
}

interface folder {
	name: string;
	relativePath: string;
}

interface file {
	name: string;
	basename: string;
	relativePath: string;
}
```

#### `file` 接口

`name` 是包括扩展名的文件名，`basename` 则不包括扩展名。`relativePath` 是从 vault 根目录开始的路径。

### 画布元数据导出

第四个导出将`name`、`basename`和`relativePath`作为对象以数组的形式写入一个JSON文件。

```json
[
  {
    "name": "my-canvas.canvas",
    "basename": "my-canvas",
    "relativePath": "Inbox/my-canvas.canvas"
  },
  {
    "name": "visualisation.canvas",
    "basename": "visualisation",
    "relativePath": "visualisation.canvas"
  }
]
```

## 配置

如果您不更改任何设置，文件将保存到插件文件夹中。您可以在设置中配置它们的名称。

但是，您也可以为每个文件指定绝对路径。在这种情况下，路径需要包括文件名和扩展名。上面的设置将不起作用。

您还可以设置写入JSON文件的频率（以分钟为单位，默认设置为0，因此未启用），以及是否在启动时写入JSON文件（默认设置为false）。



