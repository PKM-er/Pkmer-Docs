---
uid: 2023082011355363
title: Obsidian 插件：【Readme】Invio
tags: ['obsidian插件', 'readme']
description: 将文档导出为网站并部署到AWS S3或兼容的COS。Invio简化了发布过程，使用户能够轻松地在线共享他们的工作。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Invio

> [!Note] 插件名片
> - 插件名称：Invio
> - 插件作者：frontend-engineering
> - 插件说明：将文档导出为网站并部署到 AWS S3 或兼容的 COS。Invio 简化了发布过程，使用户能够轻松地在线共享他们的工作。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/frontend-engineering/Invio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?invio)

## 概述

将文档导出为网站并部署到 AWS S3 或兼容的 COS。Invio 简化了发布过程，使用户能够轻松地在线共享他们的工作。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/frontend-engineering/Invio/main/README.md)
>

---

## Readme(翻译）

下面是 [[invio]] 插件的自述翻译

# Invio

Invio 会自动将您的 Obsidian 文档转换为 HTML 网页，并将它们同步到 AWS S3 或类似腾讯云对象存储的 COS 兼容存储中。如果您觉得它有用，请给它一个星星。[star ![GitHub Repo stars](https://img.shields.io/github/stars/frontend-engineering/Invio)](https://github.com/frontend-engineering/Invio)

[![BuildCI](https://github.com/frontend-engineering/Invio/actions/workflows/auto-build.yml/badge.svg)](https://github.com/frontend-engineering/Invio/actions/workflows/auto-build.yml)

[![最新版本的下载量](https://img.shields.io/github/downloads-pre/frontend-engineering/Invio/latest/total?style=social)](https://github.com/frontend-engineering/Invio/releases)

## 特点

- 将您的文档自动发布到 HTML 网页，同时保留所有样式。受到 [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export) 的启发。
- COS 支持：亚马逊 S3 或与腾讯云兼容的 COS
- **支持定时自动同步。**您还可以使用侧边栏的功能按钮手动触发同步。
- 自动将本地文档的编辑与远程发布的 HTML 同步。**[同步算法开放](https://github.com/remotely-save/remotely-save/blob/master/docs/sync_algorithm_v2.md) 受到这个 [项目](https://github.com/remotely-save/remotely-save) 的启发。**
- **完全开源，遵循 [Apache-2.0许可证](./LICENSE)。**

<p align="center">
   <img width="100%" src="./assets/demo.gif" />
</p>

## 文档

Invio 正在积极开发中。您可以在官方文档中找到路线图和更多功能。

<p align="center">
   <img width="100%" src="./assets/roadmap.png" />
</p>

阅读 [Invio官方文档](https://docs.webinfra.cloud/Invio/Roadmap.html)

## 下载和安装

- 选项 #1：在官方的“社区插件列表”中搜索 **Invio**，或访问此链接：<https://obsidian.md/plugins?id=invio（应该会将您重定向到> Obsidian 应用程序），然后安装插件。
- 选项 #2：您还可以使用 Obsidian42 - BRAT 来安装此插件。在 BRAT 的配置中输入 frontend-engineering/Invio。
- 选项 #3：[![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/frontend-engineering/Invio/latest/total?style=social)](https://github.com/frontend-engineering/Invio/releases) 从最新的发布中手动下载资源文件（`main.js`、`manifest.json`、`styles.css`）。
- 选项 #4：[![BuildCI](https://github.com/frontend-engineering/Invio/actions/workflows/auto-build.yml/badge.svg)](https://github.com/frontend-engineering/Invio/actions/workflows/auto-build.yml) 所有构建的结果都放在每个成功构建的“摘要”下。它是由每次提交自动生成的，可能会导致某些问题。
使用方法

### S3

1. 准备您的 COS（兼容）服务信息：[终端节点，区域](https://docs.aws.amazon.com/general/latest/gr/s3.html)，[访问密钥ID，秘密访问密钥](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html)，存储桶名称。存储桶应为空，并且仅用于发布网页。
2. 下载并启用此插件。
3. 在此插件的设置中输入您的信息。

    1.1 在设置中选择要发布的本地目录。

    2.2 输入上述准备的 COS 存储桶信息和数据。

    完成后，您将在左侧文件树列表中找到您选择的目录上带有绿色图标的标记。

4. 单击功能区（左侧边栏）上的新图标，**每次**您想要将文档发布到远程时都要这样做。（或者，您可以在设置面板中配置自动同步）在发布过程中，图标会变成“两个半圆箭头”。

---
- **在发布过程中要耐心等待。**特别是第一次发布时。
- 您甚至可以与您的团队共享上述所有配置。您可以在设置中找到**导出/导入**。这样，您的团队成员就不必输入如此复杂的密钥或秘密字符串了。

### 腾讯云（COS）

> 如果您正在使用腾讯云（COS），并且您的存储桶区域是 ap-shanghai，您的设置应该如下：

- **Endpoint**	cos.ap-shanghai.myqcloud.com
- **Region**	ap-shanghai
- **AccessKeyID**	YourSercretId
- **SecretAccessKey**	YourAccessKey
- **BucketName**	obsidian-123456789

要测试您的设置，您可以在设置中点击按钮**检查**以测试您的 COS 连接性。

## 限制

- **没有内容差异和补丁算法。** 所有文件和文件夹都是通过它们的本地和远程“最后修改时间”进行比较的，具有较晚“最后修改时间”的文件将获胜。例如：如果一个文件最近被编辑过，它将被完全重新上传。
- **云服务会花费你的金钱。** 尽管 COS 服务更易于维护和使用，但始终要注意与不同操作相关的费用和定价。这包括但不限于下载、上传、列出文件、进行 API 调用和存储大小。这些操作可能会产生费用，因此必须考虑它们。
- 您的 Obsidian 桌面版本应该 >= 0.13.25
问题、建议或错误报告

非常欢迎您提出问题、发表任何建议或报告任何错误！该项目主要在 GitHub 上进行维护：

- 问题：[GitHub存储库讨论](https://github.com/frontend-engineering/Invio/discussions)
- 建议：也可以在 [GitHub存储库讨论](https://github.com/frontend-engineering/Invio/discussions) 中提出
- 错误：[GitHub存储库问题](https://github.com/frontend-engineering/Invio/issues)（不是讨论）
保持最新状态

Invio 正在积极开发中。

通过在 Twitter 上关注我们，获取关于我们产品的最新消息和更新：

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/webinfra111450.svg?style=social&label=Follow%20%40webinfra111450)](https://twitter.com/webinfra111450)
