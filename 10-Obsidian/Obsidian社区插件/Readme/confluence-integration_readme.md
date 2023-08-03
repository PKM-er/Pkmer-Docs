---
uid: 2023080322162414
title: Obsidian 插件：【Readme】Confluence Integration
tags: ['obsidian插件', 'readme']
description: 将Obsidian中的Markdown内容发布到Atlassian Confluence。它支持一些Obsidian的Markdown扩展，以实现更丰富的内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Confluence Integration

> [!Note] 插件名片
> - 插件名称：Confluence Integration
> - 插件作者：andymac4182
> - 插件说明：将Obsidian中的Markdown内容发布到Atlassian Confluence。它支持一些Obsidian的Markdown扩展，以实现更丰富的内容。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/markdown-confluence/obsidian-integration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?confluence-integration)

## 概述

将Obsidian中的Markdown内容发布到Atlassian Confluence。它支持一些Obsidian的Markdown扩展，以实现更丰富的内容。

![Confluence Integration](https://cdn.pkmer.cn/covers/confluence-integration.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/markdown-confluence/obsidian-integration/main/README.md)
> 

---

## Readme(翻译）

下面是 [[confluence-integration]] 插件的自述翻译


# Obsidian Confluence 集成插件

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/markdown-confluence/markdown-confluence/badge)](https://api.securityscorecards.dev/projects/github.com/markdown-confluence/markdown-confluence)

版权所有 (c) 2022 Atlassian Pty Ltd

版权所有 (c) 2022 Atlassian US, Inc.

`Obsidian Confluence 集成插件` 是一个开源插件，用于在 [Obsidian.md](https://obsidian.md/) 中将 markdown 内容发布到 [Atlassian Confluence](https://www.atlassian.com/software/confluence)。它支持 [Obsidian markdown 扩展](https://help.obsidian.md/How+to/Format+your+notes) 以实现更丰富的内容，并包含一个命令行界面 (CLI) 用于从命令行推送 markdown 文件。目前，该插件仅支持 Atlassian Cloud 实例。

## 特点

- 将Obsidian笔记发布到Atlassian Confluence
- 支持Obsidian的markdown扩展
- 通过命令行界面从磁盘推送markdown文件
- 提供命令和功能区图标，方便访问

问题
请将问题记录到https://github.com/markdown-confluence/markdown-confluence/issues，因为这是代码正在开发的地方。

## 入门指南

1. 从Obsidian的社区插件浏览器中安装`confluence-integration`插件。
2. 打开插件设置并配置以下字段：

- `Confluence基本URL`：您的Atlassian Confluence实例的基本URL（例如，`https://your-domain.atlassian.net`）
- `Confluence父页面ID`：您的笔记将作为子页面发布的Confluence页面ID
- `Atlassian用户名`：您的Atlassian帐户的电子邮件地址
- `Atlassian API令牌`：您的Atlassian API令牌。您可以从[Atlassian帐户设置](https://id.atlassian.com/manage-profile/security/api-tokens)中生成一个。
- `要发布的文件夹`：Obsidian中包含您要发布的笔记的文件夹的名称（默认为“Confluence Pages”）

![设置](./docs/screenshots/settings.png)

使用方法

### Ribbon图标

单击Ribbon中的云图标，将配置文件夹中的笔记发布到Confluence。

![Ribbon图标](./docs/screenshots/ribbon.png)

### 命令

使用命令面板（`Ctrl/Cmd + P`）执行“发布所有到Confluence”命令，将配置文件夹中的所有笔记发布到Confluence。

![命令](./docs/screenshots/commands.png)

### connie-publish 前置元数据

要在 `folderToPublish` 之外发布页面，请将 `connie-publish` YAML 前置元数据添加到您的笔记中：

```yaml
---
connie-publish: true
---
```

### 示例工作流程
1. 安装并配置`confluence-integration`插件。
2. 在Obsidian保险库中创建一个名为"Confluence Pages"的文件夹（或者您在设置中指定的文件夹名称）。
3. 将笔记添加到此文件夹中，或者将connie-publish前置数据添加到其他笔记中。
4. 单击工具栏中的云图标，或使用"全部发布到Confluence"命令将您的笔记发布到Confluence。

### 贡献
欢迎贡献！如果您有功能请求、错误报告或者想要改进插件，请在GitHub存储库上打开一个问题或提交一个拉取请求。

### 许可证
本项目使用[Apache 2.0](https://github.com/markdown-confluence/markdown-confluence/blob/main/LICENSE)许可证。

免责声明：
Apache许可证仅适用于Obsidian Confluence Integration（“Integration”），不适用于此Integration可能使您能够连接的任何第三方服务、网站、内容或平台。换句话说，上述授权人未授予您访问任何第三方服务、网站、内容或平台的许可。您应自行负责从这些第三方获取许可以使用和访问其服务，并遵守其许可条款。请勿在您对此Obsidian Confluence Integration项目的贡献中向任何第三方服务披露任何密码、凭据或令牌。”



