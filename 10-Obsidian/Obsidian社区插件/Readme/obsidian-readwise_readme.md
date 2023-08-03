---
uid: 2023080322254273
title: Obsidian 插件：【Readme】Readwise Community
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 将Readwise突出显示同步到您的笔记中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Readwise Community

> [!Note] 插件名片
> - 插件名称：Readwise Community
> - 插件作者：renehernandez
> - 插件说明：将Readwise突出显示同步到您的笔记中
> - 插件分类：['第三方工具集成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/renehernandez/obsidian-readwise)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-readwise)

## 概述

将Readwise突出显示同步到您的笔记中



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/renehernandez/obsidian-readwise/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-readwise]] 插件的自述翻译


# Obsidian Readwise（社区插件）

**Obsidian Readwise（社区插件）**是一个非官方插件，用于将[Readwise](https://readwise.io)的高亮同步到你的Obsidian Vault中。

**注意：**此插件需要与Readwise订阅配合使用，Readwise是一项付费服务，可以将你的所有阅读数据聚合和审阅到一个地方。

## 一览功能

- Obsidian启动时同步高亮
- 使用新的高亮更新现有笔记
- 通过模板自定义笔记标题和高亮
- 作者映射

## 用法

安装后，它会要求输入一个[API令牌](https://readwise.io/access_token)。这是为了从Readwise中将亮点拉入您的保险库而必需的。

如果您在安装时没有配置API令牌，您始终可以在设置部分进行配置。

**注意：**令牌是使用[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)存储的，如果同一个保险库在两个不同的窗口中打开，可能会发生冲突。

### 命令

`Readwise: 同步高亮`: 将会从上次同步以来的Readwise中获取任何新的高亮。

### 模板化

该插件支持对笔记的标题和每个单独的高亮进行模板化。模板只在创建笔记和添加新的高亮时进行评估。

所使用的模板系统是[Nunjucks](https://mozilla.github.io/nunjucks/)。

#### 头部模板

默认的头部模板如下：

```markdown
- **URL:** {{ source_url }}
- **作者:** {{ author }}
- **标签:** #{{ category }}
- **日期:** [[{{ updated }}]]
---
```

可以通过配置`Custom Header Template Path`设置为不同模板的路径来覆盖默认的头部模板。自定义头部模板的可用参数包括：

- `title`
- `source_url`
- `author`
- `category`
- `updated`
- `num_highlights`
- `id`
- `highlights_url`

你可以在[Readwise API文档](https://readwise.io/api_deets)的`Books LIST`部分找到这些字段的详细信息。

#### 高亮模板

默认的高亮模板如下：

```markdown
{{ text }} %% highlight_id: {{ id }} %%
{%- if note %}
Note: {{ note }}
{%- endif %}
```

可以通过配置“Custom Highlight Template Path”设置为不同模板的路径来覆盖默认的高亮模板。自定义高亮模板的可用参数包括：

- `text`
- `note`
- `id`
- `location`
- `book_id`
- `url`
- `location`
- `updated`

您可以在[Readwise API文档](https://readwise.io/api_deets)的“Highlight DETAIL”部分找到这些字段的详细信息。

如果自定义的高亮模板不包含`highlight_id: <id>`，则会在渲染内容的末尾附加为`%% highlight_id: <id> %%`（<id>将被实际高亮的id替换）。

**注意：**您可以在[tests/data](./tests/data)文件夹下找到自定义模板的示例。

### 作者映射

在插件加载时，将在`obsidian-readwise`插件文件夹（`.obsidian/plugins/obsidian-readwise`）下创建一个`authors.json`文件（如果不存在）。在这里，您可以定义Readwise作者字段值的映射。**这仅适用于创建新笔记的过程中**。

示例映射：

```json
{
   "perell.com": "David Perell",
   "charity.wtf": "Charity Majors",
   "@david_perell on Twitter": "David Perell",
   "@mipsytipsy on Twitter": "Charity Majors"
}
```

上述映射将在同步过程中应用于来自新来源（例如新文章、书籍、推文）的亮点。

### 设置

- `Readwise API Token`：添加/更新您的Readwise API令牌。
- `启动时同步`：如果启用，将在Obsidian启动时从Readwise同步亮点。
- `定时同步`：如果配置了大于0的值，将每隔`X`小时从Readwise同步亮点。适用于一直保持打开Obsidian应用程序的人。
- `亮点存储路径`：新亮点/笔记存储的位置路径。
- `自定义标题模板路径`：覆盖笔记标题编写方式的模板笔记路径。
- `自定义亮点模板路径`：覆盖亮点编写方式的模板笔记路径。
- `禁用通知`：弹出通知的切换开关。

同步过程的工作原理

插件将仅同步自上次执行（或安装）以来的新亮点。该过程的工作方式如下：

1. 检查是否存在具有相同名称的文件（仅检查存储库顶层的笔记。问题[#22](https://github.com/renehernandez/obsidian-readwise/issues/22)跟踪扩展自定义位置的支持。
   1. 如果不存在，则使用`Custom Note Header Template`或默认模板创建一个新文件。
2. 读取笔记的内容，并在未找到时添加亮点。插件搜索亮点是基于Readwise的`highlight_id`而不是亮点的文本。插件寻找的确切匹配形式为`highlight_id: <id>`，其中<id>是当前正在呈现的亮点的实际ID。

### 替代方案

除了这个插件之外，Obsidian还有另一个名为**Readwise Mirror**的Readwise社区插件，可以在以下链接找到：[https://github.com/jsonMartin/readwise-mirror](https://github.com/jsonMartin/readwise-mirror)。这两个插件存在于不同的使用场景中，请阅读以下内容以确定哪个最适合您的需求。

- 如果您想将整个Readwise图书馆镜像到Obsidian，并同步修改之前的高亮，请下载**Readwise Mirror**插件。
- 如果您想导入高亮（目前仅支持新的高亮）到您的图书馆，并完全控制修改和格式化笔记的能力，请下载这个插件。

## 路线图

您可以在[此处](https://github.com/renehernandez/obsidian-readwise/projects/1)查看项目的路线图。

## 安装

### 从Obsidian内部

您可以从“设置>社区插件>Readwise”中安装此插件。

### 手动安装

从GitHub的发布页面下载zip压缩包。将压缩包解压到`<vault>/.obsidian/plugins`目录中。

### 限制

* 它只能从Readwise中获取最近的1000个亮点（应该在解决此问题的实施过程中最终解决：[issues/7](https://github.com/renehernandez/obsidian-readwise/issues/7)

### 兼容性

要检查不同版本的兼容性，请查看 [versions.json](https://github.com/renehernandez/obsidian-readwise/blob/main/versions.json)。所有在 `versions.json` 文件中指定的最高版本之后发布的插件版本应与相同的 Obsidian 版本及更高版本兼容。



