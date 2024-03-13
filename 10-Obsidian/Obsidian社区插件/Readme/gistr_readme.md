---
uid: 2024031219312009
title: Obsidian 插件：【Readme】Gistr
tags: ['obsidian插件', 'readme']
description: Integrate OpenGist and Github gist snippets in your notes.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Gistr

> [!Note] 插件名片
> - 插件名称：Gistr
> - 插件作者：Aetherinox
> - 插件说明：Integrate OpenGist and Github gist snippets in your notes.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Aetherinox/obsidian-gistr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gistr)

## 概述

Integrate OpenGist and Github gist snippets in your notes.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Aetherinox/obsidian-gistr/main/README.md)

---

## Readme(翻译）

下面是 [[gistr]] 插件的自述翻译

<p align="center"><img src="https://raw.githubusercontent.com/Aetherinox/obsidian-gistr/main/Docs/images/banner.png" width="860"></p>
<h1 align="center"><b>Obsidian: Gistr</b></h1>

<div align="center">

![Version](https://img.shields.io/github/v/tag/Aetherinox/obsidian-gistr?logo=GitHub&label=version&color=ba5225) ![Downloads](https://img.shields.io/github/downloads/Aetherinox/obsidian-gistr/total) ![Repo Size](https://img.shields.io/github/repo-size/Aetherinox/obsidian-gistr?label=size&color=59702a) ![Last Commit)](https://img.shields.io/github/last-commit/Aetherinox/obsidian-gistr?color=b43bcc)

</div>

---

<br />

- [About](#about)
- [Usage](#usage)
  - [OpenGist](#opengist)
  - [Github Gist](#github-gist)
- [Install](#install)
  - [Manual](#manual)
  - [BRAT Plugin Manager](#brat-plugin-manager)
- [Build](#build)
- [OpenGist - How It Works](#opengist---how-it-works)
- [Shoutouts](#shoutouts)


<br />

---

# 关于

Gistr 允许您嵌入从两个不同服务创建的 gists：

- [OpenGist](https://github.com/thomiceli/opengist)（自托管）
- [Github Gist](https://gist.github.com)

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="Docs/images/1.png"></p>

<br />

要使用此插件，您必须：

- 下载并安装 [Obsidian.md](obsidian.md/)
- 利用 Github 存储 [gists](https://gist.github.com)，或者;
- 配置一个新的或使用现有的 [OpenGist](https://github.com/thomiceli/opengist) 服务器

<br />

<div align="center">

[![OG-Demo](https://img.shields.io/badge/%20-%20尝试%20OpenGist%20演示-%20%236c2368?style=for-the-badge&logo=github&logoColor=FFFFFF)](https://demo.opengist.io/all)

[![OG-Download](https://img.shields.io/badge/%20-%20下载%20OpenGist-%20%23de2343?style=for-the-badge&logo=github&logoColor=FFFFFF)](https://github.com/thomiceli/opengist/releases)

[![OG-Docs](https://img.shields.io/badge/%20-%20查看%20OpenGist%20文档-%20%23296ca7?style=for-the-badge&logo=github&logoColor=FFFFFF)](https://github.com/thomiceli/opengist/blob/master/docs/index.md)

</div>

<br />

---

<br />

# 用法

要嵌入一个 OpenGist 或 Github Gist 片段，请添加一个新的代码块：

<br />

## OpenGist

````shell
```gistr
https://gist.yourdomain.com/username/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
gist.yourdomain.com/username/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
````

## Github Gist

````shell
```gistr
https://gist.github.com/username/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
gist.github.com/username/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
````

<br />

此插件还可以获取包含多个笔记的 Gist，这些笔记在单个 Gist 集合中：

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="Docs/images/2.png"></p>

<br />

要定位 Gist 中的特定笔记，请在您的 Gist 网址末尾添加 `#filename`：

````shell
```gistr
https://gist.github.com/Aetherinox/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#file1
```
````

<br />

---

<br />

# 安装

以下说明解释了如何为 Obsidian 安装此插件。

<br />

## 手册

- 安装 [Obsidian.md](obsidian.md/)
- 转到此 Github 仓库的 [Releases](https://github.com/Aetherinox/obsidian-gistr/releases) 选项卡，并下载相关文件：
  - `main.js`
  - `manifest.json`
  - `styles.css`
  - <small>所有版本还包括上述文件的 `.zip` 文件。</small>
- 找到 Obsidian 插件文件夹 `X:\.obsidian\plugins`
- 在 **Plugins** 文件夹中创建一个名为 `gistr` 的新文件夹
- 在新文件夹中，粘贴从此 Github 仓库下载的文件。

```
📂 .obsidian
   📂 plugins
      📂 gistr
         📄 main.js
         📄 manifest.json
         📄 styles.css
```

- 启动 Obsidian 并点击设置齿轮图标 `⚙️`
- 在左侧，选择 **Community Plugins**
- 找到 `Gistr` 并启用它。 <img src="https://raw.githubusercontent.com/Aetherinox/obsidian-opengist/main/Docs/images/ui/obsidian-enable.png" data-canonical-src="https://raw.githubusercontent.com/Aetherinox/obsidian-opengist/main/Docs/images/ui/obsidian-enable.png" height=20px />

<br />
<br />

## BRAT 插件管理器

插件也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件安装。

- 使用 Obsidian 插件管理器安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)
- 在左侧的 Obsidian 设置中，选择**BRAT**。
- 在 BRAT 设置中，点击**添加 Beta 插件**按钮
- 在文本框中，提供此存储库的 URL
  - `https://github.com/Aetherinox/obsidian-gistr`
- 安装完 Gistr 后，在 Obsidian 设置中激活它。<img src="https://raw.githubusercontent.com/Aetherinox/obsidian-opengist/main/Docs/images/ui/obsidian-enable.png" data-canonical-src="https://raw.githubusercontent.com/Aetherinox/obsidian-opengist/main/Docs/images/ui/obsidian-enable.png" height=20px />

<br />

---

<br />

# 构建

有关如何下载此插件的源文件并编译您自己版本的详细说明，请查看下面的 wiki 链接：

- [如何构建Gistr](https://github.com/Aetherinox/obsidian-gistr/wiki/3.-Build)

# OpenGist - 工作原理

以下解释了此插件和 OpenGist 背后的过程。

截至 v1.6.0，[OpenGist](https://github.com/thomiceli/opengist) 包括一个类似 Github 的功能。每次您将新的 gist 上传到您的 OpenGist 网站时，您可以通过访问关联的链接来正常查看该 gist：

```
https://gist.yourdomain.com/username/000abcdef1234567abcdef1234567abc
```

<br />

使用 OpenGist，您现在可以获取有关 gist 的 `JSON` 信息，并将您的 gist 包含在外部程序中，例如 Obsidian.md。

<br />

要手动查看每个 OpenGist 的 JSON、HTML、Javascript 和 CSS 源，只需在 URL 末尾添加 `.json`：

```
https://gist.yourdomain.com/username/000abcdef1234567abcdef1234567abc.json
```

<br />

您将看到定义与您创建的 gist 相关联的值的 JSON：

```json
{
  "created_at": "2023-09-24T00:00:000",
  "description": "Opengist Demo Paste",
  "embed": {
    "css": "https://gist.domain.com/assets/embed-abcde123.css",
    "html": "<div class=\"opengist-embed\" id=\"000abcdef1234567abcdef1234567abc\">\n    <div class=\"html \">\n    \n        <div class=\"rounded-md border-1 border-gray-100 dark:border-gray-800 overflow-auto mb-4\">\n            <div class=\"border-b-1 border-gray-100 dark:border-gray-700 text-xs p-2 pl-4 bg-gray-50 dark:bg-gray-800 text-gray-400\">\n                \n                <span class=\"float-right\"> · <span class=\"text-gray-700 dark:text-gray-200 font-bold\"></span></span>\n            </div>\n            \n            \n            \n            <div class=\"code dark:bg-gray-900\">\n            \n            \n                <table class=\"chroma table-code w-full whitespace-pre\" data-filename-slug=\"demo\" data-filename=\"demo\" style=\"font-size: 0.8em; border-spacing: 0; border-collapse: collapse;\">\n                    <tbody>\n                        \n                        \n                        <tr><td id=\"file-demo-1\" class=\"select-none line-num px-4\">1</td><td class=\"line-code\">Opengist Demo Paste\n</td></tr>\n                    </tbody>\n                </table>\n            \n            </div>\n            \n\n        </div>\n    \n    </div>\n</div>\n",
    "js": "https://gist.domain.com/Username/000abcdef1234567abcdef1234567abc.js",
    "js_dark": "https://gist.domain.com/Username/000abcdef1234567abcdef1234567abc.js?dark"
  },
  "files": [
    {
      "filename": "demo",
      "size": 743,
      "human_size": "145 B",
      "content": "Opengist Demo Paste",
      "truncated": false,
      "type": "Text"
    }
  ],
  "id": "000abcdef1234567abcdef1234567abc",
  "owner": "Username",
  "title": "Opengist Demo Paste",
  "uuid": "000abcdef1234567abcdef1234567abc",
  "visibility": "unlisted"
}
```

<br />

---

<br />

# 致谢

- [thomiceli](https://github.com/thomiceli) 在 [OpenGist](https://github.com/thomiceli/opengist) 实现了 JSON 功能请求。
- [linjunpop](https://github.com/linjunpop) 开发了第一个 Obsidian [Gist](https://github.com/linjunpop/obsidian-gist) 插件。它是我使用的插件列表中的首选之一。



