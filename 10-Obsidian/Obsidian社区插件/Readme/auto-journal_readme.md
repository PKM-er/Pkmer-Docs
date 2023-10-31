---
uid: 2023102611072158
title: Obsidian 插件：【Readme】Auto Journal
tags: ['obsidian插件', 'readme']
description: 像日常笔记一样的有主见的日志自动化，但可以为Obsidian未打开的那些日子进行补充。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Journal

> [!Note] 插件名片
> - 插件名称：Auto Journal
> - 插件作者：Evan Bonsignori
> - 插件说明：像日常笔记一样的有主见的日志自动化，但可以为 Obsidian 未打开的那些日子进行补充。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Ebonsignori/obsidian-auto-journal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-journal)

## 概述

像日常笔记一样的有主见的日志自动化，但可以为 Obsidian 未打开的那些日子进行补充。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Ebonsignori/obsidian-auto-journal/main/README.md)
>

---

## Readme(翻译）

下面是 [[auto-journal]] 插件的自述翻译

# 自动日志

Obsidian 的核心 [每日笔记](https://help.obsidian.md/Plugins/Daily+notes) 插件在 Obsidian 未打开的日子里不会填充笔记。而这个插件可以。

它使用了一个不可配置的主观文件夹结构：

- **每日笔记**：`ROOT / YEAR / MONTH / DAY -`
- **每月笔记**：`ROOT / YEAR / {custom-name} / MONTH -`

你可以自定义 `YEAR`、`MONTH`、`DAY` 的日期格式，或者设置/删除 `ROOT`，但是这个插件依赖于按照 `YEAR`/`MONTH`/`DAY` 来组织文件系统。

每个文件夹中的文件名基础部分不应该被改变，例如每日笔记的 `DAY -` 或每月笔记的 `MONTH -`。

例如，默认情况下每日笔记将会被创建如下：

`Journal/2023/August/11 -`

你可以在标题后面添加任何你想要的内容，

`Journal/2023/August/11 - 工作，遛狗，和朋友一起攀岩并晚餐`

但是请确保不要改变标题中的日期部分，`11 -`。

回填

启用后，回填将为您在插件未打开的前几天创建笔记。

对于每日笔记：

- `对于年份` 回填将为今天之前的每个月创建一个文件夹，并创建一个以日期前缀（例如 `11 -`）命名的笔记，以表示该月的每一天。
- `对于月份` 回填将为今天之前的每一天创建一个以日期前缀（例如 `11 -`）命名的笔记。

对于每月笔记：

- `对于年份` 回填将为今天之前的每个月创建一个以月份前缀（例如 `January -`）命名的笔记，以表示今年之前的每个月份。
在回填中，您可以在模板中包含一个可配置的令牌，该令牌将被替换为文件在回填中创建的日期。

默认情况下，模板文件中的令牌 `<$date-from-auto-journal$>` 将被替换为格式为 `YYYY-MM-DD` 的日期。如果您将日期添加到模板的属性/前言中，例如 `date: <$date-from-auto-journal$>`，您可以在其他插件中使用该日期。

## 适合日常日记的插件

- [自定义文件浏览器排序](https://github.com/SebastianMC/obsidian-custom-sort)：由于每个日记的默认名称是月份的全名，例如 `January`，将以下 `sortspec` 文件放置在日记的根文件夹中，可以在文件系统中正确地组织它们的顺序。
    - <details>
        <summary>
        点击查看sortspec
        </summary>

        ```
        ---
        sorting-spec: |
         target-folder: /*
         README
         Check-Ins
         January...
         February...
         March...
         April...
         May...
         June...
         July...
         August...
         September...
         October...
         November...
         December...
         ...
         < a-z
         assets
        ---
        ```

        </details>

- [Templater](https://github.com/SilentVoid13/Templater)：用于将日期和其他属性插入到日记条目模板中。
    - **必需：**您必须启用 _" 在创建新文件时触发 Templater"_ 设置，以便 Templater 与 Auto Journal 一起使用
    - <details>
        <summary>
        点击查看日记模板
        </summary>

        ```
        ---
        date: <$date-from-auto-journal$>
        tag: journal
        ---

        # <% moment(tp.frontmatter.date).format("dddd, MMMM DD, YYYY") %> 📆

        ## People 👤
        -

        ## Grateful For 💙


        ## Photos 📸

        ```

        通过 Auto Journal 令牌设置的 frontmatter 日期可以在 Templater 的其他函数中使用，例如 `<% moment(tp.frontmatter.date).format("dddd, MMMM DD, YYYY") %>`

        </details>

- [Reminder](https://github.com/uphy/obsidian-reminder)：可以与 Templater 结合使用，以在需要填写每月检查时收到提醒。
    - <details>
        <summary>
        点击查看检查模板
        </summary>

        ```
        ---
        date: <$date-from-auto-journal$>
        tag: check-in
        ---
        # **<% moment(tp.frontmatter.date).format("MMMM, YYYY") %>  Check In** 📆

        - [ ] 填写检查表  📆 <% moment(tp.frontmatter.date).format("YYYY-MM-DD") %>

        ### 1. 你好吗？这个月过得怎么样？


        ### 2. 这个月你优先考虑了什么？


        ### 3. 你在1、3和5年后的计划是什么？你的长期愿景有变化吗？


        ### 4. 你的习惯和目标是否与当前愿景一致？如果是，为了实现它们，需要做出什么改变？


        ### 5. 你的生活中是否有什么遗漏的东西？


        ### 6. 回顾这个月。你取得了什么进展？你为什么感激？


        ### 7. 你期待下个月的什么？
        ```

        上面的示例使用了 Tasks 插件的日期格式，必须在 Reminder 的设置中设置。

        </details>

- [@符号链接](https://github.com/Ebonsignori/obsidian-at-symbol-linking)：我在日记的顶部保留了一个 `People` 目录，我经常使用 `@` 符号链接到该目录。您可以配置此插件，在键入 `@` 时仅在该目录中查找链接。
- [Google Photos](https://github.com/alangrainger/obsidian-google-photos)：在每个条目中包含照片的有用方式，同时将它们存储在单独的应用程序中。此插件将创建缩略图，因此您仍然可以看到照片，但它们将由 Google 托管，不会占用您的存储空间。
安装

首选方法是通过 Obsidian 中的 [内置社区插件浏览器](https://help.obsidian.md/Extending+Obsidian/Community+plugins) 添加此插件。

### 手动安装

1. 在你的 vault 中创建一个新文件夹，名为 `.obsidian/plugins/auto-journal`
2. 从 [Releases 页面](https://github.com/Ebonsignori/obsidian-auto-journal/releases) 下载并移动最新版本的文件到新文件夹 `.obsidian/plugins/obsidian-auto-journal`
3. 在 Obsidian 中打开 `Settings -> Community Plugins`
4. 如果尚未启用社区插件，请启用它们，然后勾选 `Auto Journal` 复选框。

## 贡献

请通过 [开启一个问题](https://github.com/Ebonsignori/obsidian-auto-journal/issues/new) 来提出任何建议或错误报告。

或者，您也可以随意 fork 并开启一个 PR :heart:

### 本地开发

1. 将此文件移动到您不介意搞乱的 `.obsidian/plugins` 目录中的一个存储库中。
2. 运行 `npm i`。
3. 运行 `npm run dev`。
4. 将 [hot-reload](https://github.com/pjeby/hot-reload) 添加到相同的 `.obsidian/plugins` 目录中，并在 Obsidian 中启用它以便于开发。

### 发布

一旦更改已经在 `main` 分支中，添加一个反映新的语义版本号的标签（不包括 `v` 前缀），并将标签推送到仓库。

例如：

```
git tag 1.0.0
git push origin 1.0.0
```

[Release.yml](./.github/workflows/release.yml) 将处理版本升级并发布一个发布到 [发布页面](https://github.com/Ebonsignori/obsidian-auto-journal/releases)。

请记得使用任何相关更改更新 [最新发布](https://github.com/Ebonsignori/obsidian-auto-journal/releases) 的说明。

## 致谢

[Obsidian团队](https://obsidian.md/about) 为创建了一款出色的产品 :purple_heart:

该实现借鉴了以下内容：

- [suggest.ts](./src/utils/suggest.ts)、[file-suggest.ts](./src/settings/file-suggest.ts) 和 [folder-suggest.ts](./src/settings/folder-suggest.ts) 的实现是 [Liam Cain](https://github.com/liamcain) 的版权作品，来自 [obsidian-periodic-notes](https://github.com/liamcain/obsidian-periodic-notes)。



