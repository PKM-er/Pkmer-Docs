---
uid: 2023080322273631
title: Obsidian 插件：Sync Google Calendar
tags: ['obsidian插件', 'readme']
description: 将Google日历中的事件同步，并像任务一样管理它们。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Sync Google Calendar

> [!Note] 插件名片
> - 插件名称：Sync Google Calendar
> - 插件作者：Dexin Qi
> - 插件说明：将 Google 日历中的事件同步，并像任务一样管理它们。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dexin-qi/obsidian-sync-calendar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-google-calendar)

## 概述

将 Google 日历中的事件同步，并像任务一样管理它们。

![Sync Google Calendar](https://cdn.pkmer.cn/covers/sync-google-calendar_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dexin-qi/obsidian-sync-calendar/main/README.md)
>

---

## Readme(翻译）

下面是 [[sync-google-calendar]] 插件的自述翻译

# Obsidian x Google Calendar 插件

[中文](./docs/README.zh-Ch.md)

一个 [Obsidian](https://obsidian.md/) 插件，用于同步 [Google 日历](https://calendar.google.com/) 中的事件，并将其管理为任务。

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dustinksi/obsidian-sync-calendar/release.yml?style=shield) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/dustinksi/obsidian-sync-calendar?display_name=tag)

**注意**：

1. 请注意，**此插件依赖于 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件**，以列出特定日期范围内的任务。**在使用此插件之前，请确保已安装 Dataview 插件**。
2. 我们的任务格式借鉴了任务，但**目前不支持重复任务**。
3. 要将任务从 Obsidian 同步到日历，您需要为任务附加一个开始时间元素（即 🛫 YYYY-MM-DD），然后单击同步图标或调用“Sync with Calendar”命令。
4. 我们的任务同步**以日历事件为中心**，这意味着在将任务从 Obsidian 同步到日历后，在 Obsidian 中对任务进行的修改不会同步到日历中。要进一步修改日程安排，您需要直接在日历中进行修改。在日历中进行的更改将在稍后自动同步回 Obsidian。
5. 此插件仍处于早期测试阶段，随时可能发生变化！

![RELEASE DEMO](./docs/README_DEMO.gif)

安装和使用

### 首先

- 您需要一个 Google 日历凭据文件。您可以自己申请：
    - 参考 [创建项目指南](https://developers.google.com/workspace/guides/create-project) 创建一个 Google Cloud 项目
    - 参考 [启用API指南](https://developers.google.com/workspace/guides/enable-apis) 启用您的 Google 日历 API。
    - [配置OA屏幕](https://console.cloud.google.com/apis/credentials/consent?)
    - [准备获取您的OA凭据](https://console.cloud.google.com/apis/credentials/oauthclient)
      - 选择 " 桌面应用程序 "
      - 为此 OA 应用程序输入一个名称。
      - 下载 OAClient 凭据文件。
- 将凭据文件放置在 `VaultFolder/.obsidian/calendar.sync.credentials.json` 中。

### 手动安装插件

- 从 [发布页面](https://github.com/dustinksi/obsidian-sync-calendar/releases) 下载 `main.js`、`styles.css` 和 `manifest.json`。
- 将下载的文件复制到 `VaultFolder/.obsidian/plugins/your-plugin-id/`。

**注意**：您也可以自己编译此插件：

- 克隆此存储库。
- 运行 `npm i` 或 `yarn` 以安装依赖项。
- 运行 `npm run dev` 以启动监视模式下的编译。

### 从 Obsidian 社区插件浏览器中安装（目前不可用）

- 通过 Obsidian 的社区插件浏览器安装插件。
- 在 Obsidian 中启用插件。

### 使用此插件

- 在任何笔记中放置一个类似以下代码块的代码：

````markdown
   ```sync-calendar
   name: "{numberTodos} todos @ Apr. 21"
   timeMin: "2023-04-21"
   timeMax: "2023-04-22"
   ```
````

- 切换到预览模式，插件应该会用实际结果替换这个代码块。

> 如果您正在同步您的存储库，出于安全原因，我建议明确忽略 `VaultFolder/.obsidian/calendar.sync.token.json` 文件，如果可能的话。

## 输入

| 名称 | 类型 | 描述 | 默认值 |
| ------------- | ---- | -------- | ------- |
| `name`        | string        | 查询的标题。您可以使用 `{numberTodos}` 模板，该模板将被查询返回的待办事项数量替换。        | {numberTodos}个待办事项在日历中         |
| `timeMin`      |      string   | 符合 moment.js 格式的字符串，事件的最小时间（包括 `timeMin`）。     |      当前时间的一周前   |
| `timeMax` |      string    |  符合 moment.js 格式的字符串，事件的最大时间（不包括 `timeMax`）。   | null    |
| `refreshInterval` | number | 自动刷新的间隔时间（以秒为单位）。设置为 `-1` 以禁用自动刷新。  | 10 |

**注意**：`timeMin` 和 `timeMax` 将由 [moment.js](https://momentjs.com/docs/#/parsing/) 解析。理想情况下，任何满足 moment.js 的字符串都可以被解析，例如：

- "2023-04-21"
- "2023-04-21 16:00"
- "2023-04-21T08:00:00.000Z"

**注意**：关于获取间隔的说明：例如，如果有一个时间跨度为 "2023-04-21 14:00" - "2023-04-21 16:00" 的事件，如果您不希望在爬取过程中显示此事件，您应该指定 `timeMin: "2023-04-21 16:00"`。

**注意**：`sort`、`filter` 和 `group` 是下一个版本将发布的功能。欢迎贡献！

## 命令

目前，只支持一个命令，用于手动触发从 Obsidian 到 Calendar 的任务同步。

`与日历同步`：

此命令将获取 Obsidian 中具有 startDate（即🛫 YYYY-MM-DD）的任务。

感谢以下出色的插件：

[obsidian-todoist](https://github.com/jamiebrynes7/obsidian-todoist-plugin)

[obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)

[obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview)

这个插件从以上插件中借鉴了很多宝贵的经验。

我还要感谢王嘉宇在这个插件的构思、设计和开发过程中的陪伴。

支持

您是否发现 obsidian-sync-calendar 插件有帮助并希望支持它？我接受捐赠，这些捐赠将用于未来的开发工作。通常情况下，我不接受漏洞赏金/功能请求的付款，因为财务激励会增加压力/期望，而我希望避免这种情况发生在一个业余项目上！
