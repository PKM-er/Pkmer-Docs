---
uid: 2023120719291562
title: Obsidian 插件：【Readme】Fountain Editor
tags: ['obsidian插件', 'readme']
description: 在编辑器中进行剧本（Fountain）语法的语法高亮显示。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Fountain Editor

> [!Note] 插件名片
> - 插件名称：Fountain Editor
> - 插件作者：Chuang Caleb
> - 插件说明：在编辑器中进行剧本（Fountain）语法的语法高亮显示。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chuangcaleb/obsidian-fountain-editor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fountain-editor)

## 概述

在编辑器中进行剧本（Fountain）语法的语法高亮显示。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chuangcaleb/obsidian-fountain-editor/master/README.md)
>

---

## Readme(翻译）

下面是 [[fountain-editor]] 插件的自述翻译

<img align="left" width="130ch" style='margin-right:1em' src="./docs/assets/obsidian-fountain-editor-logo.svg"/>

# Fountain 编辑器 - Obsidian 插件

| **[Obsidian](https://obsidian.md) 插件，用于在编辑器中对 [Fountain](https://fountain.io)（剧本）语法进行语法高亮。** |
| :----------------------------------------------------------------------------------------------------------------------------- |

[![banner](https://cdn.pkmer.cn/covers/fountain-editor_2_0.png!pkmer)](https://youtu.be/GORryaw32sI "Obsidian Fountain - 实时编辑器（插件展示）")

> 📺 **Youtube 演示**: [Obsidian Fountain - 实时编辑器（插件展示）](https://youtu.be/GORryaw32sI)

---

## 常见问题解答

- 什么是 Obsidian？
- 什么是 Markdown？
- 什么是 Fountain？
- 为什么要使用这个插件？
-->

## 🔨 使用方法

### 🏁 快速入门

1. 📥 [点击此处在 Obsidian 中打开安装页面](https://obsidian.md/plugins?id=fountain-editor)。
    1. 通用安装说明 [链接 →](https://help.obsidian.md/Extending+Obsidian/Community+plugins)
    2. 手动安装 [链接 →](#-manual-installation)
2. 📄 创建一个新文件，并在元数据属性的前置元数据中添加 `cssclasses: fountain`。
3. 🎨 您将根据 [Fountain 语法规则](https://fountain.io/syntax/) 获得**自动语法高亮/样式化**！

```markdown
---
cssclasses:
  - fountain
---
# 开场钩子

> 臭臭链接 <

淡出：

外景：公共洗手间 - 白天

一名警察走进一个肮脏的洗手间。她皱了皱眉。

警察（旁白）
我*闻到*了一只老鼠...

= 使用 Fountain 的概要转到[[常规的markdown]]！ #太酷了
```

<!-- 文档：从哪里开始 -->

### 💿 手动安装

1. 🆕 您可以使用此存储库的链接（`https://github.com/chuangcaleb/obsidian-fountain-editor`）直接在 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 上安装。
2. 📤 您还可以转到存储库的 [最新发布](https://github.com/chuangcaleb/obsidian-fountain-editor/releases/latest/) 页面，手动下载 `obsidian-fountain-editor-[version].zip` 文件，然后将其解压到您的 `.obsidian/plugin` 目录中！

### 📢 通知

1. 🎉 我们已经超过了功能性 MVP `v1.0.0`！您可以开始专业而安全地使用此插件。只需记住，仍有待优化和未完成的功能。
2. 🛟 也就是说，此插件只应扩展您的视图，绝不应修改任何本地文件！最坏的情况是，如果出现问题，只需强制重新启动 Obsidian 或手动从 `community-plugins.json` 列表中删除此插件。

## 🎯 目标

| 📍  | <h3>使 Obsidian 成为 Fountain 写作编辑器中的一个有竞争力的选择。</h3>                                                                                                                                                                                                                                                                                                                                                                                                           |
| --- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔗  | 主要卖点是能够通过允许使用 Markdown 链接/标签/扩展语法，**直接将辅助笔记与剧本连接/链接/注释**到引用位置。                                                                                                                                                                                                                                                                                                                                                                                                      |
| 🤞  | 第二个卖点是将 Fountain 剧本写作流程与 Obsidian 的整个生态系统**集成**在一起，这有助于**探索思想**和**知识管理**（而且，嘘，它是**免费的**）。                                                                                                                                                                                                                                                                                                                                             |
| 🧩  | 同样地，某些**Obsidian 插件可以为您的 Fountain 剧本写作流程添加一些非常重要的功能**。我最困扰的主要缺失拼图是 [Fountain要求将所有内容放在一个文件中](https://github.com/chuangcaleb/ffluent#purpose)——当您有 120 多页时，这可能会变得乏味。有一个 [Obsidian插件解决方案](https://github.com/kevboh/longform)，以及 [可能有其他问题的解决方案](#-synergistic-tools)。 |
| 🔎  | 竞争并不意味着缺乏合作！正如我们在 [范围设计原则](/docs/basic/design-guidelines.md#🔬-scoped) 中解释的那样，**如果可能的话，该插件将尽量避免重复工作**，并尝试将功能外包/移交给其他 [协同工具](#-synergistic-tools)！                                                                                                                                                                                  |

## ✨ 特性

- 🎨 在编辑视图中（源代码模式或实时预览）中**获得 Fountain 语法高亮**！
- ✅ 使用 `cssclasses: fountain` 在 frontmatter 中**指定哪些个别笔记使用 Fountain 样式**（选择加入的基础上，可能会有变化）
- 🛁 尽可能地**享受扩展的 Obsidian 语法**- 使用您常规的 Obsidian markdown、工具、插件和工作流程！
  - 🧰 利用 Obsidian!Markdown：使用链接、标签、嵌入式笔记/图片/音频、图表...
  - 🛏️ **感觉像家一样**：Fountain 的 [Section](https://fountain.io/syntax/#sections-synopses) 和 [Emphasis](https://fountain.io/syntax/#emphasis) 语法不会添加新的样式 - 这意味着它们看起来像熟悉的 Obsidian [Headings](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Headings) 和 [inline text styles](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling+text)！
  - 🪓 使用 Fountain 的 [Synopsis](https://fountain.io/syntax/#sections-synopses) 标记**退出**到常规的 Obsidian!Markdown 语法高亮！
- 🤝 与您喜爱的 Obsidian 社区插件（如 [Longform](https://github.com/kevboh/longform)）**结合使用**！
- 🔧 使用格式为 `--fountain--*` 的 CSS 变量**微调样式**，请参阅 [base.css](src/styles/base.css) 中的公开 CSS 变量！

> 📖 请参阅 [设计指南](docs/basic/design-guidelines.md) 以了解我们的实现！

## 🤝 协同工具

- **[kevboh/longform](https://github.com/kevboh/longform): _ 一个用于 Obsidian 的插件，帮助您编写和编辑小说、剧本和其他长篇项目。_**
- [Better Fountain - Visual Studio Code 扩展](https://marketplace.visualstudio.com/items?itemName=piersdeseilligny.betterfountain): _Fountain 自动补全、语法高亮和导出为 PDF_
- [MeepTech/obsidian-custom-file-extensions-plugin](https://github.com/MeepTech/obsidian-custom-file-extensions-plugin): _一个 Obsidian 插件，允许您以模块化的方式注册和查看不同的文件扩展名。_
- [deathau/cm-typewriter-scroll-obsidian](https://github.com/deathau/cm-typewriter-scroll-obsidian): _Typewriter Scroll Obsidian 插件_

> 📖 详细了解 [协同工具](docs/basic/synergistic-tools.md)，以了解它们如何与此插件一起使用！

## 💝 贡献

### 👀 概览

😎 不知道如何编码？你也可以做出贡献

- 🪲 在 [问题标签页](https://github.com/chuangcaleb/obsidian-fountain-editor/issues/new?assignees=&labels=%F0%9F%AA%B2+a/bug&projects=chuangcaleb/2&template=bug_report.md) 上**报告错误**！
- 📣 在 _ 论坛 _ 和 _ 频道 _ 以及与 _ 朋友 _ 分享**（链接至）此插件**！
  - 🌟 **点赞**此存储库以接收更新并提高知名度 - 如果这个项目对你来说值得点击一个按钮！
- 🗣️ 在 [讨论](https://github.com/chuangcaleb/obsidian-fountain-editor/discussions) 标签页与他人**互动**！
  - 💡 [提出想法](https://github.com/chuangcaleb/obsidian-fountain-editor/discussions/categories/ideas) / 功能请求！
  - 🙏 [回答社区的问题](https://github.com/chuangcaleb/obsidian-fountain-editor/discussions/categories/q-a)！
  - 🛠️ [分享帮助你的技巧和窍门](https://github.com/chuangcaleb/obsidian-fountain-editor/discussions/categories/tips-tricks)！
  - 🤩 [送上鼓励的话](https://github.com/chuangcaleb/obsidian-fountain-editor/discussions/categories/general) - 它们对我来说真的有影响！:D
  - 👥 所有这些都证明了有一群对此感兴趣的人！
- ✍🏼 使用此插件**创建一个剧本项目**！
  - 📸 **[展示你的作品](https://github.com/chuangcaleb/obsidian-fountain-editor/discussions/categories/showcase)**，展示你如何充分利用 Fountain + Obsidian 的优势。然后我可以在推广中重复使用你的示例，也许还能获得新功能的灵感！呵呵

#### 🤓 会编程吗？你也可以做出贡献

- 🔀 **发起一个拉取请求！** _首先关注关键的错误和优先功能。_
- 🪲 **报告一个错误** — 但请附上你的 _专业技术诊断_！
- 🫱 **给些建议！** 不仅是第一次开发 Obsidian 插件，也是我第一个公共社区项目。

> 💝 请查看 [贡献指南](/contributing.md) 以获取正确的技术细节！

### 🤙 联系方式

[General - Discussions](https://github.com/chuangcaleb/obsidian-fountain-editor/discussions/categories/general) 标签是一个很好的地方，你可以直接在里面标记我，因为你也可以邀请社区中的任何人加入对话！这样也更好地将上下文限定在这个项目/仓库内。

如果你想要更私人的直接消息（或者只是发送一封私人感谢的便条！），你可以在 Discord 上联系我 [#chuangcaleb](https://discordapp.com/users/199882835685801984)！你也可以通过电子邮件联系我 [dev@chuangcaleb.com](mailto:dev@chuangcaleb.com)！

## 🔃 相关项目

- [Darakah/obsidian-fountain](https://github.com/Darakah/obsidian-fountain): _Obsidian 插件，用于编辑、编写和渲染剧本和脚本的 Fountain 写作语法_
  - 与此插件一样，格式化 Fountain 语法
  - 但仅适用于预览模式，并且必须包含在代码块中
  - 项目已有 2.5 年以上历史
- [chuangcaleb/ffluent](https://github.com/chuangcaleb/ffluent): 用于打包 Fountain 剧本文件的 CLI 工具
  - 我尝试复制 `longform`，但针对 Fountain 文件，作为 CLI 工具。
  - 使用每个文件夹目录中的 json/yaml 文件来配置自定义序列！因此，您可以拥有复杂的文件夹组织结构
  - 该项目已被标记为废弃，但可能对您有兴趣！
- [Highland 2](https://www.highland2.app/)
  - 由 Fountain 的创作者制作。
  - 具有自己的文本编辑器应用程序、所见即所得、" 修订模式 " 和分析工具。
  - 由于一切都包装得很好，如果您不是技术人员，这可能是最好的 Fountain 写作应用程序。



