---
uid: 2023080322141379
title: Obsidian 插件：ArchiveBox
tags: ['obsidian插件', 'readme']
description: ArchiveBox.io支持外部Obsidian链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：ArchiveBox

> [!Note] 插件名片
> - 插件名称：ArchiveBox
> - 插件作者：invariant
> - 插件说明：ArchiveBox.io 支持外部 Obsidian 链接
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/invariant/obsidian-archivebox-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-archivebox-plugin)

## 概述

ArchiveBox.io 支持外部 Obsidian 链接

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/invariant/obsidian-archivebox-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-archivebox-plugin]] 插件的自述翻译

# Obsidian ArchiveBox 插件

该插件会搜索 Obsidian 的帖子中的互联网链接，并将它们存档到一个自托管的 [ArchiveBox](https://archivebox.io) 实例中。如果你在第二大脑中链接到外部内容，你肯定不希望它们消失。

不幸的是，由于 ArchiveBox 没有稳定的 API，这个插件只能在桌面上使用，因为我们无法对其使用 XHR - 相反，我们必须回退到 Node.js 网络。该插件通过最小化实现登录到私有 ArchiveBox 实例并提交 URL 的所需功能来工作。这个插件的编写方式使得一旦 ArchiveBox 有了真正的 REST API，它应该能够很快地适应所有 Obsidian 客户端的使用。

已在 Obsidian 1.0.3 上进行测试。

## 假设和限制

- 您正在运行 [ArchiveBox](https://archivebox.io) [**v0.6.3**](https://github.com/ArchiveBox/ArchiveBox/pull/721) 或更高版本。
- 已为 ArchiveBox / Obsidian 创建了一个用户/超级用户，并且该用户用于提交。
- 您可以选择在 `/public` 前使用 HTTP 基本身份验证，也可以选择不使用。
- 您希望归档完全合格的 URI（例如 `https://google.com/`，而不是 `google.com` 或 `./some/path`）。

### ArchiveBox 很脆弱

如上所述，**ArchiveBox 没有稳定的 REST API**，因此该插件试图最小化地模拟浏览器以完成任务。ArchiveBox 的 `master` 分支目前处于 v0.6.2 版本，因此**无法工作**。目前，`archivebox/archivebox:latest` 可以从 Docker Hub 工作，或者如果你敢冒险，可以运行 `dev` 分支。我当前的 ArchiveBox 的 `docker-compose.yml` 引用如下：

````docker-compose
archivebox:
  image: archivebox/archivebox:latest
  volumes:
    - ./data:/data
  environment:
    - SAVE_ARCHIVE_DOT_ORG=False
    - CHECK_SSL_VALIDITY=False
````

在 ArchiveBox API 稳定之前，这个插件很有可能在未来出现故障，所以如果你发现它对你不起作用，请提交一个 pull request。

使用方法

安装 ArchiveBox 插件并加载它，然后在设置面板中配置信息。

### 设置

- **ArchiveBox URI** - 将其设置为您的 ArchiveBox 实例可访问的 URL，例如 `https://archivebox.example.com/`。
- **ArchiveBox 用户名** - 具有提交权限的帐户的用户名。
- **ArchiveBox 密码** - 具有提交权限的帐户的密码。
- **忽略 RFC1918 地址** - 忽略包含私有地址的链接。默认情况下，不会保存指向 RFC1918 地址的 URI。
- **忽略的域名** - 忽略存在于逗号分隔的域名黑名单中的链接（例如 `google.com,duckduckgo.com`）。
- **使用基本身份验证** - 在 ArchiveBox 之前使用 [HTTP基本身份验证](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) 进行用户名/密码验证。有时在希望保持 `/public` 私有时使用。
- **基本身份验证用户名** - HTTP 基本身份验证的用户名。
- **基本身份验证密码** - HTTP 基本身份验证的密码。
- **自动提交** - 实时监视文件修改并自动提交到 ArchiveBox。默认情况下，这可能会产生大量的通信。
- **最小批量提交时间** - 在发送另一个自动提交之前至少等待这么多秒。
- **缓存 URI** - 如果选择了此选项，插件将不会重新提交之前已经见过的 URI 到 ArchiveBox。ArchiveBox 自己会进行去重，但这可以减少不必要的请求带宽。
- **调试模式** - 在 Obsidian 开发者控制台中添加详细日志记录。如果有贡献者要求打开，或者您想提交问题时打开。

## 许可证

[GNU GPL-3.0](./LICENSE).

个人软件是为人们而不是为公司盈利。
