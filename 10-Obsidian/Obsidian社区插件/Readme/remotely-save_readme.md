---
uid: 20231206000637
title: Obsidian 插件：Remotely Save
tags: ['第三方工具集成', '文件管理', '效率', 'obsidian插件', 'readme']
description: 非官方同步插件，允许用户在本地设备和云服务（S3，Dropbox，WebDAV，OneDrive）之间同步笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20231217234731
---

# Obsidian 插件：Remotely Save

> [!Note] 插件名片
> - 插件名称：Remotely Save
> - 插件作者：fyears
> - 插件说明：非官方同步插件，允许用户在本地设备和云服务（S3，Dropbox，WebDAV，OneDrive）之间同步笔记。
> - 插件分类：[' 第三方工具集成 ', ' 文件管理 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/remotely-save/remotely-save)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remotely-save)

## 概述

非官方同步插件，允许用户在本地设备和云服务（S3，Dropbox，WebDAV，OneDrive）之间同步笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/remotely-save/remotely-save/master/README.md)

---

## Readme(翻译）

下面是 [[remotely-save]] 插件的自述翻译

# 远程保存

这是另一个非官方的 Obsidian 同步插件。如果你喜欢它或发现它有用，请考虑在 Github 上给它一个 [星标 ![GitHub Repo stars](https://img.shields.io/github/stars/fyears/remotely-save?style=social)](https://github.com/fyears/remotely-save)。

[![BuildCI](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml/badge.svg)](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml)

[![最新版本的下载次数](https://img.shields.io/github/downloads-pre/remotely-save/remotely-save/latest/main.js?sort=semver)](https://github.com/fyears/remotely-save/releases)

## 免责声明

- **这不是 Obsidian 官方提供的 [同步服务](https://obsidian.md/sync)。**

## !!!警告

**在使用此插件之前，**请**始终备份您的保险库。**

## 特点

- 支持以下服务：
  - Amazon S3 或兼容的 S3
  - Dropbox
  - 个人版 OneDrive
  - Webdav
  - [这里](./docs/services_connectable_or_not.md) 详细展示了更多可连接（或不可连接）的服务。
- **支持 Obsidian 移动端。** 可以通过云服务在移动设备和桌面设备之间同步 Vault。
- **支持端到端加密**。如果用户指定密码，文件将在发送到云端之前使用 openssl 格式进行加密。
- **支持定时自动同步**。您还可以使用侧边栏的功能按钮手动触发同步，或者使用命令面板中的命令（甚至将热键组合绑定到命令，然后按下热键组合）。
- **[最小干扰设计](./docs/minimal_intrusive_design.md)。**
- **完全开源，遵循 [Apache-2.0 许可证](./LICENSE)。**
- **[同步算法开放](./docs/sync_algorithm_v2.md) 供讨论。**

## 限制

- **为了支持删除同步，还需要上传额外的元数据。**请参阅 [最小侵入性设计](./docs/minimal_intrusive_design.md)。
- **没有冲突解决。没有内容差异和补丁算法。**所有文件和文件夹都使用它们的本地和远程“最后修改时间”进行比较，以后者为准。
- **云服务会花费你的钱。**始终注意成本和定价。具体而言，所有操作，包括但不限于下载、上传、列出所有文件、调用任何 API、存储大小，可能会花费你的钱。
- **浏览器环境的一些限制。**更多技术细节请参阅 [文档](./docs/browser_env.md)。
- **你应该保护你的 `data.json` 文件。**该文件包含敏感信息。
  - 强烈建议**不要**将你的 `data.json` 文件分享给任何人。
  - 通常**不是**一个好主意将该文件提交到版本控制中。默认情况下，插件会尝试在插件目录中创建一个 `.gitignore` 文件，用于在 `git` 版本控制中忽略 `data.json`。如果你确切地知道它的含义并希望删除该设置，请修改 `.gitignore` 文件或将其设置为空。

问题、建议或错误报告

非常欢迎您提出问题、发表任何建议或报告任何错误！该项目主要在 GitHub 上维护：

- 问题：[GitHub存储库讨论](https://github.com/fyears/remotely-save/discussions)
- 建议：也在 [GitHub存储库讨论](https://github.com/fyears/remotely-save/discussions)
- 错误：[GitHub存储库问题](https://github.com/fyears/remotely-save/issues)（不是讨论）

此外，插件作者偶尔会访问 Obsidian 官方论坛和官方 Discord 服务器，并关注与该插件相关的信息。

## 下载和安装

- 选项 #1：在官方的“社区插件列表”中搜索，或访问此链接：[https://obsidian.md/plugins?id=remotely-save](https://obsidian.md/plugins?id=remotely-save)（应该会将您重定向到 Obsidian 应用程序），然后安装插件。
- 选项 #2：您还可以使用 [Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat) 来安装此插件。在 BRAT 的配置中输入 `fyears/remotely-save`。
- 选项 #3：[![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/fyears/remotely-save/latest/main.js?sort=semver)](https://github.com/fyears/remotely-save/releases) 从最新版本中手动下载资源文件（`main.js`、`manifest.json`、`styles.css`）。
- 选项 #4：[![BuildCI](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml/badge.svg)](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml) 所有构建产物都放置在每个成功构建的“Summary”下。它是由每次提交自动生成的，可能会出现问题。

使用方法

### S3

- 准备您的 S3（兼容）服务信息：[终端点，区域](https://docs.aws.amazon.com/general/latest/gr/s3.html)，[访问密钥ID，秘密访问密钥](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html)，存储桶名称。存储桶应为空，并且仅用于同步保险库。
- 关于 CORS：
  - 如果您使用的是 Obsidian 桌面版本>= 0.13.25 或移动版本>= 1.1.1，则可以跳过此 CORS 部分。
  - 如果您使用的是 Obsidian 桌面版本< 0.13.25 或移动版本< 1.1.1，则需要为来自 `app://obsidian.md`、`capacitor://localhost` 和 `http://localhost` 的请求配置（启用）[CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html)，并将至少 `ETag` 添加到公开标头中。完整示例在 [此处](./docs/s3_cors_configure.md)。不幸的是，这是必需的，因为插件从类似浏览器的环境中发送请求。这些地址在桌面、iOS 和 Android 上经过测试和验证。
- 下载并启用此插件。
- 在此插件的设置中输入您的信息。
- 如果要启用端到端加密，请在设置中设置密码。如果不指定密码，则文件和文件夹将以明文、原始内容同步到云端。
- 单击侧边栏（左侧边栏）上的新的“圆形箭头”图标，**每次**您想要在本地和远程之间同步保险库时。（或者，您可以在设置面板中配置自动同步（见下一章）。）在同步过程中，图标变为“两个半圆箭头”。除了在侧边栏上单击图标外，您还可以在命令面板中激活相应的命令。
- **在同步过程中要耐心等待。**特别是在首次同步时。

### Dropbox

- **此插件不是 Dropbox 的官方产品。**该插件仅使用 Dropbox 的公共 API。
- 授权后，插件可以读取您的姓名和电子邮件（无法在 Dropbox API 上取消选择），并读取和写入您 Dropbox 的 `/Apps/remotely-save` 文件夹中的文件。
- 如果您决定授权此插件连接到 Dropbox，请转到插件的设置，并选择 Dropbox，然后按照说明操作。[更多信息请参见屏幕截图](./docs/dropbox_review_material/README.md)。
- 还支持基于密码的端到端加密。但请注意，**保险库名称本身不加密**。

### 个人版 OneDrive

- **此插件不是官方的微软/OneDrive 产品。**该插件只是使用了微软的 [OneDrive公共API](https://docs.microsoft.com/en-us/onedrive/developer/rest-api)。
- 此插件仅适用于 " 个人版 OneDrive"，不适用于 " 商业版 OneDrive"（目前还不支持）。详细信息请参见 [#11](https://github.com/fyears/remotely-save/issues/11)。
- 授权后，插件可以读取您的姓名和电子邮件，并读取和写入您的 OneDrive 的 `/Apps/remotely-save` 文件夹中的文件。
- 如果您决定授权此插件连接到 OneDrive，请转到插件的设置，并选择 OneDrive，然后按照说明操作。
- 还支持基于密码的端到端加密。但请注意，**保险库名称本身并没有加密**。

### webdav

- 关于 CORS：
  - 如果您使用的是 Obsidian 桌面版>= 0.13.25 或 iOS >= 1.1.1，则可以跳过此 CORS 部分。
  - 如果您使用的是 Obsidian 桌面版< 0.13.25 或 iOS < 1.1.1 或任何 Android 版本：
    - webdav 服务器必须为来自 `app://obsidian.md`、`capacitor://localhost` 和 `http://localhost` 的请求启用 CORS，**以及**所有 webdav HTTP 方法，**以及**所有 webdav 头部。这些是必需的，因为 Obsidian 移动版的工作方式类似于浏览器，移动插件受到 CORS 策略的限制，除非使用升级后的 Obsidian 版本。
    - 流行的软件 NextCloud、OwnCloud、`rclone serve webdav` 默认**不启用**CORS。如果您使用其中任何一个，请在使用此插件之前评估风险，并找到一种方法来启用 CORS，或者使用升级后的 Obsidian 版本。
      - **非官方**解决方法：NextCloud 用户可以**自行评估风险**，如果决定接受风险，可以安装 [WebAppPassword](https://apps.nextcloud.com/apps/webapppassword) 应用，并将 `app://obsidian.md`、`capacitor://localhost`、`http://localhost` 添加到 `Allowed origins`
      - **非官方**解决方法：OwnCloud 用户可以**自行评估风险**，如果决定接受风险，可以下载上述 `WebAppPassword` 的 `.tar.gz` 文件，并在其实例上手动安装和配置。
    - 该插件已经成功测试过，使用的是 python 包 [`wsgidav`（版本4.0）](https://github.com/mar10/wsgidav)。有关详细信息，请参见 [此问题](https://github.com/mar10/wsgidav/issues/239)。
- 您的数据将同步到您的 webdav 服务器上的 `${vaultName}` 子文件夹中。
- 还支持基于密码的端到端加密。但请注意，**保险库名称本身不会被加密**。

## 定时自动同步

- 您可以在设置中配置每隔 N 分钟自动同步一次。
- 在自动同步模式下，如果发生任何错误，插件将**静默失败**。
- 自动同步仅在 Obsidian 被打开时生效。由于插件仅在 Obsidian 提供的浏览器环境中运行，因此在 Obsidian 后台自动同步是**技术上不可能的**。

如何处理隐藏文件或文件夹

**默认情况下，以 `.`（点）或 `_`（下划线）开头的所有文件或文件夹都被视为隐藏文件，并且不会被同步。** 如果您有一些文件只保留在本地，这是很有用的。但是这种策略也意味着此插件的主题/其他插件/设置也不会被同步。

在最新版本中，您可以更改设置，允许同步 `_` 文件或文件夹，以及 `.obsidian` 特殊配置文件夹（但不包括其他 `.` 文件或文件夹）。

如何调试

更多详细信息请参见 [这里](./docs/how_to_debug/README.md)。

## 额外：通过二维码导入和导出非 Oauth2 插件设置

有关更多详细信息，请参见 [此处](./docs/import_export_some_settings.md)。

## 视频教程

<iframe src="https://player.bilibili.com/player.html?aid=282340197&bvid=BV13c411y7dm&cid=1367205501&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>
