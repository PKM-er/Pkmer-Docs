---
uid: 20230901084916
title: Obsidian 插件：【Readme】Syncthing Integration
tags: ['obsidian插件', 'readme']
description: Obsidian中的Syncthing集成。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Syncthing Integration

> [!Note] 插件名片
> - 插件名称：Syncthing Integration
> - 插件作者：LBF38
> - 插件说明：Obsidian 中的 Syncthing 集成。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/LBF38/obsidian-syncthing-integration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?syncthing-integration)

## 概述

Obsidian 中的 Syncthing 集成。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/LBF38/obsidian-syncthing-integration/master/README.md)

---

## Readme(翻译）

下面是 [[syncthing-integration]] 插件的自述翻译

<p align=center>
 <a href="https://github.com/lbf38/obsidian-syncthing-integration">
  <img src="assets/syncthing-logo-horizontal.svg" height=100>
  <img src="assets/obsidian-logo-gradient.svg" height=100>
 </a>
 <h1 align=center>Obsidian Syncthing集成</h1>
</p>

该插件允许您使用 [Syncthing](https://syncthing.net/) 将 Obsidian vault 与远程设备同步。

## :label: 徽章

<!-- 忽略下面的 markdownlint 规则 -->
<!-- markdownlint-disable MD051 -->

[![所有贡献者](https://img.shields.io/github/all-contributors/lbf38/obsidian-syncthing-integration?color=ee8449&style=flat-square)](#✨-contributors)

[![GitHub 最新版本发布 (latest SemVer)](https://img.shields.io/github/v/release/lbf38/obsidian-syncthing-integration?logo=github&color=ee8449&style=flat-square)](https://github.com/LBF38/obsidian-syncthing-integration/releases/latest)

[![Obsidian 插件发布](https://img.shields.io/badge/Obsidian%20plugin%20release-purple?logo=obsidian&style=flat-square)](https://obsidian.md/plugins?id=syncthing-integration)

[![加入社区：GitHub Discussions 徽章](https://img.shields.io/badge/Join%20the%20community-on%20GitHub%20Discussions-blue?style=flat-square)][discussions]

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release&style=flat-square)](https://github.com/semantic-release/semantic-release)

## :link: 有用的链接

### 相关软件

- [Syncthing](https://syncthing.net/)
- [Obsidian](https://obsidian.md/)

### 插件相关链接

- [路线图](docs/ROADMAP.md)
- [GH 讨论][discussions]

## :arrow_down: 安装

您可以使用以下方式安装插件：

- 从 Obsidian 的社区插件选项卡中安装
- 从 GitHub 的 [发布页面](https://github.com/lbf38/obsidian-syncthing-integration/releases) 安装
- 从源代码安装，请参阅 [开发部分](#🛠️-开发)
- 使用 [Obsidian42 BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装

### 指南

安装插件的最佳方法是通过 Obsidian 社区插件选项卡。您可以在 [这里](https://help.obsidian.md/Extending+Obsidian/Community+plugins) 找到如何操作的指南。

否则，您可以从 GitHub 的 [发布页面](https://github.com/lbf38/obsidian-syncthing-integration/releases) 下载最新版本。然后，您可以通过下载 `main.js`、`manifest.json` 和 `styles.css` 文件并将它们放置在您的 vault 的 `.obsidian/plugins/obsidian-syncthing-integration` 文件夹中手动安装插件。

如果您想从源代码安装插件，请参阅 [开发部分](#🛠️-development)。

最后，您可以使用 [Obsidian42 BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装插件，并提供 GitHub 存储库的 URL。请参阅 [BRAT文档](https://tfthacker.com/Obsidian+Plugins+by+TfTHacker/BRAT+-+Beta+Reviewer's+Auto-update+Tool/Quick+guide+for+using+BRAT)。

## :wrench: 配置

:construction: 此插件仍在开发中。配置可能尚未完全可用。:construction:

> **警告**
> 请备份您的保险库并明智地使用此插件。某些功能可能会修改您的保险库中的文件，因此请始终记得在不同位置备份您的保险库。

该插件应该可以直接使用，但您可以通过进入插件设置来进行配置。该插件的主要目标是在 Obsidian 应用程序中提供 SyncThing 功能的完整集成。因此，您不必依赖其他应用程序来同步您的保险库。您只需在要同步的设备上打开 Obsidian 应用程序，插件将负责其余的工作。

集成将使用 CLI 或 REST API 与 Syncthing 进行交互。主要目标是从 Obsidian 应用程序处理所有保险库同步过程。因此，您不必在设备上打开 Syncthing 应用程序来同步您的保险库。

但是，它不旨在管理与 Syncthing 同步的多个文件夹。想要通过 Syncthing 同步其他文件夹，请随意进行同步，但插件只会管理保险库文件夹。所有插件功能仅适用于保险库文件夹（用于冲突/差异模态和设置）。

> **警告**
> 同步是实时进行的，使用点对点连接。因此，您要同步的所有设备必须同时连接。

## :heart: 贡献

要为这个插件做贡献，您可以在 GitHub 上创建 [问题] 和 [拉取请求]。此外，您可以在 [讨论标签][讨论] 中讨论任何新的想法或建议。

在为该项目做贡献时，请遵守 [行为准则](.github/CODE_OF_CONDUCT.md) 并阅读 [贡献指南](.github/CONTRIBUTION.md)。

## :hammer_and_wrench: 开发

如果您想在本地开发此插件，请按照以下说明进行操作。

1. 克隆存储库
2. 使用 `pnpm install` 安装依赖项
3. 使用 `pnpm dev` 构建插件
4. （可选）在 Obsidian 中使用 [hot-reload 插件](https://github.com/pjeby/hot-reload) 在您进行更改时自动重新加载插件

> **注意**
> 使用热重载插件时，您必须将此插件克隆到您的保险库的 `.obsidian/plugins` 文件夹中。
> 并且插件的文件应位于文件夹的根目录下（`main.js`、`manifest.json` 和 `styles.css`）。
> 它应该会自动设置好。

## :clap: 鸣谢

以下是本插件的一些灵感来源：

- [Obsidian版本历史差异 by kometenstaub](https://github.com/kometenstaub/obsidian-version-history-diff) - 鸣谢：
  - [`styles.scss`](src/styles.scss) 文件，
  - 相应的 [`esbuild` SCSS/CSS 配置](esbuild.config.mjs)，
  - 以及解决文件冲突时差异模态框布局的整体灵感。
- [Obsidian测试库 by pedersen](https://github.com/pedersen/obsidian-testing-vault) - 鸣谢：
  - 插件的开发模式功能。我添加了一个开发模式模态框，以便轻松生成带有 syncthing 冲突格式的测试文件。

## :busts_in_silhouette: 作者

- [@LBF38](https://github.com/lbf38)

## :sparkles: 贡献者

<!-- ALL-CONTRIBUTORS-LIST:START - 请勿删除或修改本节 -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><br /> </td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## :memo: 许可证

本项目使用 MIT 许可证。有关更多信息，请参阅 [`LICENSE`](LICENSE)。

[问题]: <https://github.com/lbf38/obsidian-syncthing-integration/issues/new/choose>
[拉取请求]: <https://github.com/lbf38/obsidian-syncthing-integration/compare>
[讨论]: <https://github.com/lbf38/obsidian-syncthing-integration/discussions>



