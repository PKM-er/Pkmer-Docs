---
uid: 20231220115812
title: Obsidian 插件：【Readme】Epub Importer
tags: ['obsidian插件', 'readme']
description: 将EPUB文件导入为Markdown格式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Epub Importer

> [!Note] 插件名片
> - 插件名称：Epub Importer
> - 插件作者：aoout
> - 插件说明：将 EPUB 文件导入为 Markdown 格式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aoout/obsidian-epub-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?epub-importer)

## 概述

将 EPUB 文件导入为 Markdown 格式。

![Epub Importer](https://cdn.pkmer.cn/covers/epub-importer.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aoout/obsidian-epub-importer/master/README.md)

---

## Readme(翻译）

下面是 [[epub-importer]] 插件的自述翻译

# Epub 导入器

将.epub 文件作为 Markdown 笔记导入到您的保险库中。

使用方法

运行 `Epub Importer: Import epub to your vault` 命令，

并输入您要将.epub 文件导入到的 Obsidian vault 的绝对路径。

然后，.epub 文件将被转换为一个文件夹和一些笔记，

这样您就可以直接在 Obsidian 中阅读书籍，并进行一些标记、链接和笔记。

![](https://cdn.pkmer.cn/covers/epub-importer_2_0.gif)

### 属性模板

所有可用的变量：

```
- {{bookName}}
- {{title}}
- {{author}}
- {{publisher}}
- {{language}}
```

示例：

```
title: {{bookName}}
author: {{author}}
publisher: {{publisher}}
status: false
```

### 资源路径模板

所有可用的变量：

```
- {{savePath}}
- {{bookName}}
```

示例：

```
{{savePath}}/{{bookName}}/images
```

# 平台

该函数是在 Windows 系统上进行测试的。我没有苹果电脑。
