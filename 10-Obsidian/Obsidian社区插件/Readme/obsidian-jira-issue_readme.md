---
uid: 2023080322204738
title: Obsidian 插件：Jira Issue
tags: ['obsidian插件', 'readme']
description: 在Obsidian笔记中跟踪Atlassian Jira问题的进展。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Jira Issue

> [!Note] 插件名片
> - 插件名称：Jira Issue
> - 插件作者：marc0l92
> - 插件说明：在 Obsidian 笔记中跟踪 Atlassian Jira 问题的进展。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/marc0l92/obsidian-jira-issue)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-jira-issue)

## 概述

在 Obsidian 笔记中跟踪 Atlassian Jira 问题的进展。

![Jira Issue](https://cdn.pkmer.cn/covers/obsidian-jira-issue.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/marc0l92/obsidian-jira-issue/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-jira-issue]] 插件的自述翻译

# Obsidian jira-issue

![测试状态](https://github.com/marc0l92/obsidian-jira-issue/actions/workflows/ci.yaml/badge.svg)

该插件允许您从 [Obsidian.md](https://obsidian.md/) 笔记中跟踪 [Atlassian Jira](https://www.atlassian.com/software/jira) 问题的进展。

![问题](./assets/issues.png)

![搜索结果](./assets/searchResults2.png)

## 文档

查看完整的 [文档](https://marc0l92.github.io/obsidian-jira-issue) 以开始使用 Jira-Issue。

## 安装

从 Obsidian 应用程序中，转到 `设置 > 第三方插件 > 社区插件 > 浏览`，然后搜索 `jira-issue`。

[阅读更多...](https://marc0l92.github.io/obsidian-jira-issue/docs/get-started/installation)

## 配置

使用插件选项来配置与您的 Atlassian Jira 服务器的连接：主机、用户名和密码。

[阅读更多...](https://marc0l92.github.io/obsidian-jira-issue/docs/get-started/basic-authentication)

## Markdown 语法

该插件支持以下组件：

### 📃`jira-issue`

- [文档](https://marc0l92.github.io/obsidian-jira-issue/docs/components/jira-issue)
- 示例:

````
```jira-issue
AAA-111
AAA-222
https://my.jira-server.com/browse/BBB-333
```

# 这是一个注释
```
````

### 🔎`jira-search`

- [文档](https://marc0l92.github.io/obsidian-jira-issue/docs/components/jira-search)
- 简单示例:

````
```jira-search
resolution = Unresolved AND assignee = currentUser() AND status = 'In Progress' order by priority DESC
    ```
````

- 高级示例:

````
```jira-search
type: TABLE
query: status = 'In Progress' order by priority DESC
limit: 15
columns: KEY, SUMMARY, -ASSIGNEE, -REPORTER, STATUS, NOTES
```
````

### 🔢`jira-count`

- [文档](https://marc0l92.github.io/obsidian-jira-issue/docs/components/jira-count)
- 示例:

````
```jira-count
project = REF AND status changed to (Done, "Won't Fix", Archived, "Can't Reproduce", "PM Validated") after -14d
```
````

### 🏷️内联问题

- [文档](https://marc0l92.github.io/obsidian-jira-issue/docs/components/inline-issue)
- 示例：

```
使用内联问题，您可以在文本中插入像JIRA:OPEN-351这样的问题。
插件将检测到像https://jira.secondlife.com/browse/OPEN-352这样的URL，并将问题渲染为标签。
- [ ] 问题可以扩展为JIRA:OPEN-353与摘要
- [x] 或者紧凑的JIRA:-OPEN-354没有摘要
- [ ] JIRA:-OPEN-355在问题关键字之前使用`-`符号使其紧凑
```

插件会在笔记中搜索这些模式并替换它们

JIRA:-OPEN-356

```
```

![内联问题](./assets/inlineIssues.png)

贡献和反馈

欢迎通过开启一个 GitHub 问题来分享您的经验、反馈和建议。

欢迎提交拉取请求。

## 许可证

Jira-Issue 在 GNU AGPLv3 许可下发布。有关更多信息，请参阅 [LICENSE](https://github.com/marc0l92/obsidian-jira-issue/blob/master/LICENSE)。
