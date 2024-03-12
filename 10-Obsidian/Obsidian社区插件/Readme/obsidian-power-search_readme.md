---
uid: 20230817224054
title: Obsidian 插件：Power Search
tags: ['obsidian插件', 'readme']
description: 根据当前行搜索笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Power Search

> [!Note] 插件名片
> - 插件名称：Power Search
> - 插件作者：Aviral Batra
> - 插件说明：根据当前行搜索笔记
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aviral-batra/obsidian-power-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-power-search)

## 概述

根据当前行搜索笔记

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aviral-batra/obsidian-power-search/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-power-search]] 插件的自述翻译

# Obsidian 强大搜索

Obsidian 搜索是一个插件，允许你在输入时搜索你的笔记（目前可以搜索 Obsidian 笔记和 Anki 笔记）。这有一些好处：

- 当你看到相似的笔记文本时，可以帮助你更好地链接你的想法，以便链接相似的信息
- 可以防止冗余，因为你可以看到之前是否已经写过类似的内容
- 更容易维护笔记，因为你可以在看到想要更改的内容时随时更新它们

## 通用设置

1. 从社区插件中安装插件
2. 选择您的去抖刷新超时时间，并通过启用其切换按钮来激活您想要搜索的索引
3. 搜索会自动进行！

设置内置索引

### 黑曜石

自动化 - 只需在设置中激活！

### Anki

1. 如果您尚未安装 ankiconnect，请在 Anki 中安装它
2. 转到工具 -> 插件 -> AnkiConnect -> 配置，并将 ```app://obsidian.md``` 添加到 ```webCorsOriginList``` 中，如果您以前没有更改过配置，则应该是这样的

```JSON
{
    "apiKey": null,
    "apiLogPath": null,
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOrigin": "http://localhost",
    "webCorsOriginList": [
        "http://localhost",
        "app://obsidian.md"
    ]
}
```

1. 重新启动 Anki 以应用更改
2. 在 Anki 后台运行的情况下运行插件
3. 在设置中激活 Anki 索引

激活索引

您可以在 Obsidian 的“Power Search”设置选项卡中切换索引设置。切换索引开关以将特定类型的笔记添加到要搜索的内容中（并在窗格中呈现）。

设置外部索引

待办事项

使用

Obsidian Power Search 是一个自动插件 - 您不需要以任何方式激活搜索，只需配置并开始使用！当您输入时，它将搜索您的 Anki 笔记（将来将添加更多可搜索的内容类型，包括自定义类型）以查找您正在编写的行或文本块（由空格包围），并提供最佳结果。如果搜索结果窗格被关闭，Obsidian 有一个命令可以重新打开它。

## 配置

待办事项

与其他插件集成

待办事项

## API

待办事项

## TODO

**现在**

- 高亮显示结果

**未来**

- 仅使用更改的笔记/卡片更新 flexsearch 索引 + 保留显示等存储，以便在卡片未更改时使用
- 错误 - 使用已加载的笔记获取 id，如果笔记未加载（删除索引时）/无论问题是什么 - 当无法加载 anki 索引时，id 未定义
- 索引特定设置，例如 obsidian 索引从渲染结果中删除当前文件
- 受 readme 中 siac 部分启发
- 使卡片阴影变暗
- 将搜索查询历史记录添加到撤消搜索历史记录
- 缓存搜索结果
- 使 UI 与主题融合
- 在小部件顶部添加搜索栏
- 不同的列显示不同类型的笔记
- 固定搜索
- 分页结果并允许页面限制配置
- 处理无法连接到 anki 的错误
- 搜索块与行选项
- 除 anki 外的其他来源（通过 api 注册“来源”）
- 允许索引和搜索自定义
- 高亮显示搜索中的单词
- 将剥离和高亮显示部分作为切换，然后将原始 HTML 作为切换下的展开内容
- 允许拼写错误？
- 允许选择搜索结果本身以搜索更多笔记（参见其他 siac 功能）
- 修复图像错误控制台
- 通过 api 使用通用索引创建器，以允许其他人将自己的可搜索内容添加到索引中
- anki 笔记的 css（覆盖插件的 css？+ 将其作为选项？）
- 使用 svelte 组件？
- 与 obsidian 集成到 anki？即使用 id 查找笔记（由于 obsidian 链接而不是必需的？）
- 刷新索引命令？+ 选项以不防抖刷新索引在每次搜索时
- 将最小搜索防抖超时设置为等于一个任意大的搜索 + 渲染时间向上取整到最接近的百分之一百加 100，以便在上一个搜索正在渲染/添加时不启动另一个搜索/添加一个变量，指示搜索仍在进行中，如果此变量为 true，则不允许启动新的搜索



