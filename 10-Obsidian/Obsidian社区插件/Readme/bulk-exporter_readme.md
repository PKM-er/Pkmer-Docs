---
uid: 20231220112631
title: Obsidian 插件：【Readme】Bulk Exporter
tags: ['obsidian插件', 'readme']
description: 使用元数据从您的保险库中筛选和导出笔记，以创建一个可自定义的新结构。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Bulk Exporter

> [!Note] 插件名片
> - 插件名称：Bulk Exporter
> - 插件作者：symunona
> - 插件说明：使用元数据从您的保险库中筛选和导出笔记，以创建一个可自定义的新结构。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/symunona/obsidian-bulk-exporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bulk-exporter)

## 概述

使用元数据从您的保险库中筛选和导出笔记，以创建一个可自定义的新结构。

![Bulk Exporter](https://cdn.pkmer.cn/covers/bulk-exporter.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/symunona/obsidian-bulk-exporter/main/README.md)

---

## Readme(翻译）

下面是 [[bulk-exporter]] 插件的自述翻译

# 批量导出插件

这是一个为 Obsidian（<<https://obsidian.md>）设计的插件。>

# 错误和功能请求

请使用 [GitHub的问题跟踪器](https://github.com/symunona/obsidian-bulk-exporter/issues)！

# 它是做什么的

根据元数据输出和重组您的笔记！

简单来说：

![mspaint](https://cdn.pkmer.cn/covers/bulk-exporter_2_0.png!pkmer)

所以从您的随机结构，像这样：

```
- root
  - projects
    - some active project
      - note 1 i want to publish [*] -> tech blog
      - another side topic that belongs here but not ready
    - another active project
      - pacal recepie to publish [*] -> recepies
      - some private note
  - areas
   - photo stream
      - collection of photos [*] -> photo blog
  - archive
    - old recepies
      - soup recepie [*] -> recepies
      - ...
```

生成像这样的内容：

```
- blogs（输出文件夹在驱动器上的任何位置）
  - recepies
    - pacal-recepie-to-publish.md
    - soup-recepie.md
    - ...
  - tech
    - note-1-i-want-to-publish.md
    - another-archived-tech-blog-entry.md
  - photo-blog
    - collection-of-photos.md
  - ...
```

...这样您就可以在您的笔记子集上运行自定义静态站点生成器，如 11ty、Hugo、Jekyll...

使用强大的 [Obsidian Dataview插件的](https://github.com/blacksmithgu/obsidian-dataview) 语言来查找要导出的文件。

在侧边栏中显示最新导出文件的状态。

![](https://cdn.pkmer.cn/covers/bulk-exporter_2_1.png!pkmer)

为什么？

我在我的博客中使用静态生成器（11ty），它们是我思想的出口。

我正在处理的一些博客文章是一个更大主题的一部分，我希望将它们保留在它们各自的**PARA 项目文件夹**中（构建第二大脑）。我需要一个与文件夹无关的结构。一个真实的来源：无论文件在哪里，独立于它在结构化输出格式中的位置。

### 过滤器

该插件使用完整的 [DataView查询](https://blacksmithgu.github.io/obsidian-dataview/queries/data-commands/)，当然不包括结果类型，因为它始终是一个表格。

选择所有包含 `tech` 标签的笔记：

`FROM #tech`

上周修改的笔记：

`file.ctime > date(today) - dur(1 week)`

选择所有具有 `publishDate` 元数据键的笔记：

`publishDate`

选择所有具有 `publishDate` 或 `blog` 元数据键的笔记：

`publishDate OR blog`

### 输出文件路径和名称

这是一个标准的 JS 字符串字面量，它将文件元数据和一些额外的内容放入其上下文中。

这对于**分组**输出文件非常有用：您可以创建条件排序参数，任何您想要的文件夹结构。

以下是一个示例：

如果文件元数据如下所示：

```js
{
  blog: 'diary',
  publishDate: '...'
  title: 'Another day at the office',
  tags: ['running', 'some']
}
```

它将被扩展为以下内容：

```js
{
  created: {
    // moment样式的对象，具有以下键：
    YYYY: '2023',
    MM: '05',
    ...
    date: '2023-05-14',
    time: '17-54'
  },
  modified { ... } // 与上述日期相同

  fileName: 'Another Day At The Office'

  // 如果设置了slug属性，则使用该属性，如果没有，则回退到标题属性的规范化版本，如果再次不存在，则回退到文件名的规范化版本。
  slug: 'another-day-at-the-office'

  d: function (dateLikeParam){
    // 使用方法如下：${d(someDateMetaData).date} // 将返回解析和重新格式化的日期值。
   }
   norm: function(string){
    // 将从字符串中删除任何特殊字符，并用破折号(-)替换空格和分隔符，使其在URL中安全。
   }
}
```

想要为不同的博客创建单独的文件夹吗？

`${blog}/${created.date}-${slug}`

想要将不同的年份分组到不同的文件夹中吗？

`${blog}/${created.YYYY}/${created.MM}-${created.DD}-${slug}`

想要保留原始文件名并将所有内容放在一个平面结构中吗？

`${fileName}`

将任何字段转换为日期：

`${d(date_published).date}`

在输出名称中使用自定义元数据字段作为格式化日期：

`${blog}/${d(date_published).date}-${slug}`

条件和三元运算符

对于文件的条件放置，您可以使用 [三元运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

以下代码将把所有具有相同 `blogname/post/some-entry` 元值的值放入同一个文件夹中，除非文件具有 `index` 键，否则它将进入 `blogname/indexslug`：

`${blog}/${index?'':'posts/'}${slug}`

### 资源和内部链接

如果一个文档引用了你的 vault 中的图片，它将被导出到一个与 markdown 文件相对应的 assets 文件夹中！如果 Obsidian 显示它，它将被复制。

```
- assets/
   - attachment1.jpg
   - image.webp
   - pic.gif
- markdown.md <- 在内容或元数据中引用！
```

此外，该插件解析指向其他笔记的内部链接。如果被引用的 Obsidian 文件在导出过程中被导出，链接将被重新指向适当的输出文件名。

如果链接指向一个未导出的笔记，则会被删除（文本保留）。

### 魔术元数据键 `copy`

如果您希望将其他文件与您的 markdown 一起导出，只需添加一个 `copy` 元数据参数。

它会使用相对路径与您的 markdown 文件进行比较，并接受您提供的任何 [glob](https://www.npmjs.com/package/glob) 格式的正则表达式。

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-bulk-exporter/` 中。
- 或者使用符号链接 `ln -s /path/to/your/dev/folder/ /path/to/your/vault/.obsidian/plugins/obsidian-bulk-exporter/` 进行链接。

### 开发

1. 在任何地方检出代码库（或直接检出到你的 `.obsidian/plugins/` 文件夹）
2. 你可以将该文件夹链接到你的保险库的 `.obsidian/plugins/obsidian-bulk-export` 文件夹中
3. 运行 `pnpm run dev`。
4. 推荐使用 [热重载插件](https://github.com/pjeby/hot-reload) 进行开发（这样当你修改任何内容时，它将在 Obsidian 中自动重新加载）

### 错误和功能请求

在 [github 上开一个问题](https://github.com/symunona/obsidian-bulk-exporter/issues)，或者添加一个 PR！

### 感谢

[Obsidian团队](https://obsidian.md/about) 为这个令人惊叹的工具！

[Marcus Olson](https://marcus.se.net/) 为 Dataview 插件和 [开发者文档](https://marcus.se.net/obsidian-plugin-docs/)！

[jspaint.app](https://jspaint.app/) - 我童年时期缺少的软件。
