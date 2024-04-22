---
uid: 2024022117281058
title: Obsidian 插件：【Readme】GitHub Link
tags: ['obsidian插件', 'readme']
description: Enrich your notes with issue and pull request content from GitHub.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】GitHub Link

> [!Note] 插件名片
> - 插件名称：GitHub Link
> - 插件作者：Nathonius
> - 插件说明：Enrich your notes with issue and pull request content from GitHub.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nathonius/obsidian-github-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-link)

## 概述

Enrich your notes with issue and pull request content from GitHub.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nathonius/obsidian-github-link/main/README.md)

---

## Readme(翻译）

下面是 [[github-link]] 插件的自述翻译

【机翻】

# GitHub 链接

**Obsidian + GitHub ❤️**

将笔记中无聊的 GitHub 链接转换为带有丰富内容的标签，并在笔记中查询问题和拉取请求。

## 使用

### 链接

Github 链接会自动转换为标签。例如，将 `https://github.com/nathonius/obsidian-github-link/issues/1` 粘贴到一个笔记中会变成：

![ExampleTag](https://cdn.pkmer.cn/covers/github-link_2_0.png!pkmer)

### 表格

您还可以使用 `github-query` 代码块包含来自搜索查询的结果表格。例如：

````
```github-query
outputType: table
queryType: pull-request
query: "is:pr repo:nathonius/obsidian-github-link"
columns: [number, title, author, status]
```
````

这将生成一个在打开笔记时刷新的结果表格。

![示例表格](https://cdn.pkmer.cn/covers/github-link_2_1.png!pkmer)

代码块必须是有效的 YAML。目前支持以下选项：

| 选项         | 值                                | 描述                                                                                                                                                                                             |
| ------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `outputType` | `table`                           | 必需的。目前仅支持表格。                                                                                                                                                                          |
| `queryType`  | `issue`, `pull-request`           | 必需的。                                                                                                                                                                                         |
| `columns`    | 请参阅下面的支持列列表。            | 必需的。应该是一个值数组。                                                                                                                                                                          |
| `query`      | 有效的 GitHub 搜索查询。           | 对于自定义查询是必需的，会覆盖其他参数。查看 [GitHub 文档](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests) 获取更多信息。 |

其他参数将取决于查询的类型。如果提供了 `query` 参数，则将忽略其他参数。每个部分描述了特定查询配置文件的一组参数。

#### 列出我的分配的问题

**注意：** 这需要一个有效的令牌。

| 选项        | 值                                                              | 描述                                                                                             |
| ----------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `org`       | 用户或组织的名称。                                               | 如果未提供，将使用令牌作为默认帐户。                                                            |
| `filter`    | `assigned`, `created`, `mentioned`, `subscribed`, `repos`, `all` | 要返回的问题类型。`all` 和 `repos` 返回所有问题，不考虑参与情况。                                |
| `state`     | `open`, `closed`, `all`                                          |                                                                                                  |
| `labels`    | 标签或问题标签数组。                                            | 只有匹配的问题将被包括在内。                                                                    |
| `sort`      | `created`, `updated`, `comments`                                 |                                                                                                  |
| `direction` | `desc`, `asc`                                                    |                                                                                                  |
| `since`     | `YYYY-MM-DDTHH:MM:SSZ`                                           | 最小更新日期，完整的 ISO 格式。                                                                 |
| `per_page`  | 整数。                                                          | 每页返回的项目数。                                                                              |
| `page`      | 整数。                                                          | 要使用的结果页。                                                                               |

| 选项        | 值                                              | 描述                              |
| ----------- | ----------------------------------------------- | ---------------------------------------- |
| `org`       | 用户或组织的名称。                               | 必需。                                |
| `repo`      | 仓库名称。                                    | 必需。                                |
| `milestone` | 问题里程碑，里程碑编号，`*`，`none`。           |                                          |
| `state`     | `open`，`closed`，`all`                         |                                          |
| `assignee`  | 用户的名称，`*`，`none`。                       |                                          |
| `creator`   | 用户的名称。                                  |                                          |
| `mentioned` | 用户的名称。                                  |                                          |
| `labels`    | 标签或问题标签数组。                           | 只包括匹配的问题。                     |
| `sort`      | `created`，`updated`，`comments`                |                                          |
| `direction` | `desc`，`asc`                                   |                                          |
| `since`     | `YYYY-MM-DDTHH:MM:SSZ`                          | 最小更新日期，完整的 ISO 格式。         |
| `per_page`  | 整数。                                        | 每页返回的项目数。                    |
| `page`      | 整数。                                        | 要使用的结果页。                      |

| 选项       | 值                                                 | 描述                                      |
| ----------- | -------------------------------------------------- | ---------------------------------------- |
| `org`       | 用户或组织的名称。                                  | 必需。                                    |
| `repo`      | 仓库名称。                                       | 必需。                                    |
| `state`     | `open`, `closed`, `all`                            |                                           |
| `head`      | `user:ref-name` 或 `org:ref-name`.                 | 过滤到具有分支名称的头用户或组织。       |
| `base`      | `branch-name-base`                                 | 按基本分支名称过滤。                     |
| `sort`      | `created`, `updated`, `popularity`, `long-running` |                                           |
| `direction` | `desc`, `asc`                                      |                                           |
| `per_page`  | 整数。                                             | 每页返回的项目数。                        |
| `page`      | 整数。                                             | 要使用的结果页。

|

#### 支持的列

如果未在下面列出的任何列仍然可以在 API 响应中包含时使用。可以通过给定 json 对象表示字符串来使用嵌套值引用该值。例如，`user.login` 将从 API 查询响应中获取用户名的原始值。

| 列名                           | 类型            | 描述                                                         |
| ------------------------------ | -------------- | -------------------------------------------------------------- |
| `number`                       | `pull-request` | PR 编号和指向 PR 的链接。                                         |
| `repo`                         | `pull-request` | 指向存储库的链接。                                            |
| `author`                       | `pull-request` | 创建 PR 的用户以及一个小头像。                                   |
| `status`                       | `pull-request` | PR 的当前状态。                                                |
| `created`, `updated`, `closed` | `pull-request` | 创建、最后更新和关闭日期的格式化版本。                        |

## 设置

对于公共存储库，不需要额外配置。对于私人存储库，您需要通过 GitHub 登录。

### 认证

> ⚠️ **警告**: 令牌将以明文形式存储。请自行承担风险。

认证仅需要一个 GitHub 账户。在 GitHub Link 插件设置中，添加一个新账户。给账户取一个名称。

该插件支持自动认证流程，或者您可以 [生成自己的令牌](https://github.com/settings/tokens)。要使用自动流程，请选择“生成令牌”。在弹出的模态框中，复制代码并打开认证链接。在粘贴认证链接后，您将被提示允许访问 GitHub Link 插件。一旦接受，您可以返回 Obsidian，令牌将自动保存。

## 插件兼容性

有其他插件提供一些类似的功能：

- [GitHub Embeds](https://github.com/MrGVSV/obsidian-github-embeds)
- [GitHub Issue Augmentation](https://github.com/samprintz/obsidian-issue-augmentation-plugin)

这些插件和 GitHub Link 可能不兼容，目前不应该同时使用。
