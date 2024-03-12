---
uid: 20231220112631
title: Obsidian 插件：【Readme】Tistory
tags: ['obsidian插件', 'readme']
description: 在Tistory博客平台上创建和编辑帖子。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tistory

> [!Note] 插件名片
> - 插件名称：Tistory
> - 插件作者：anpigon
> - 插件说明：在 Tistory 博客平台上创建和编辑帖子。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/anpigon/obsidian-tistory-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tistory)

## 概述

在 Tistory 博客平台上创建和编辑帖子。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/anpigon/obsidian-tistory-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[tistory]] 插件的自述翻译

# Obsidian Tistory 插件（非官方）

![GitHub工作流状态](https://img.shields.io/github/actions/workflow/status/anpigon/obsidian-tistory-plugin/release.yml?style=flat-square&logo=github)

![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/anpigon/obsidian-tistory-plugin?style=flat-square&sort=semver)

![GitHub所有发布下载量](https://img.shields.io/github/downloads/anpigon/obsidian-tistory-plugin/total?style=flat-square&sort=semver)

![许可证](https://img.shields.io/github/license/anpigon/obsidian-tistory-plugin?style=flat-square)

![点击量](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fanpigon%2Fobsidian-tistory-plugin&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)

您可以从 Obsidian 编辑器中创建和编辑 Tistory 上的帖子。

<br>此应用程序仍在开发中。如果您有任何错误或改进意见，请在 [Issues](https://github.com/anpigon/obsidian-tistory-plugin/issues) 中留言。

## ☕️ 赞助

您可以用一杯咖啡的价格来支持开发。

<br>您可以支持开发，只需支付一杯咖啡的价格。

<br>


<br>

## 📍 更新日志

### v0.8.4

- 修复了一些插入元标记的错误
- 其他代码改进

### v0.7.2

- 添加博客页脚选项功能

### v0.6.2

- 代码块改进

### v0.5.0

- Improved to convert internal links to Tistory links if possible
- Fixed a bug where a blank line was continuously inserted at the beginning of each published post

### v0.4.0

- 添加了文章预定发布功能

### v0.3.0

- 添加了文章标签输入功能
- 改进了用户界面并修复了一些错误

## 🚀 安装

- 方法 #1: 使用 [OBSIDIAN42 - BRAT](https://obsidian.md/plugins?id=obsidian42-brat) 插件进行安装。点击 "Add Beta Plugin" 按钮，输入 `anpigon/obsidian-tistory-plugin`。
- 方法 #2: 从最新的发布版本中下载 Assets (`main.js`, `manifest.json`, `styles.css`)，点击 [![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/anpigon/obsidian-tistory-plugin/latest/main.js?sort=semver)](https://github.com/anpigon/obsidian-tistory-plugin/releases)。然后在 Obsidian 的 `.obsidian/plugins` 路径下创建一个 `tistory` 文件夹，并将下载的三个文件放入其中。

## ⚙️ 设置 Tistory 插件

在 Obsidian 设置中，选择第三方插件>Tistory，然后点击 " 认证 " 按钮。

<img width="600" alt="" src="https://user-images.githubusercontent.com/3969643/193976342-0bc1b81b-90f7-40e5-9178-2b215fc94341.png">

<br>成功认证后，选择要发布文章的 Tistory 博客。

<img width="600" alt="" src="https://user-images.githubusercontent.com/3969643/193976338-15217f03-0f1a-4467-8f43-3affceef7d83.png">

<br>

## ✍️ 在 Tistory 上发布文章的方法

在编辑器窗口中，执行命令面板（`Cmd + P`），然后选择“Tistory: Publish to Tistory”。

<img width="600" alt="" src="https://user-images.githubusercontent.com/3969643/193435836-72ba5abd-821d-403c-ac99-f049f129067e.png">

> 如果您想更方便地使用 Tistory 发布文章，请为该命令指定快捷键。
> 如何指定快捷键的方法在 [指定快捷键](#指定快捷键) 中有说明。

<br>然后，在出现“Tistory 发布文章”模态弹出窗口时，确认属性并选择“发布”按钮。

<img width="600" alt="" src="https://user-images.githubusercontent.com/3969643/193435877-6066154d-5d13-4220-a8da-570f8ce4983c.png">

成功上传到 Tistory 后，元数据将自动添加到前置元数据（Frontmatter）中。

<img width="600" alt="" src="https://user-images.githubusercontent.com/3969643/193435956-07421a59-37d7-44df-ae8e-0e3074eb5c2a.png">

自动添加的前置元数据是用于编辑文章时使用的数据，绝对不要删除。

<br>有关添加到前置元数据的数据属性的说明，请参见下文。

### 🗄️ Frontmatter 속성

| 속성              | 설명                                           |
| ----------------- | ---------------------------------------------- |
| tistoryBlogName   | 블로그 이름                                    |
| tistoryTitle      | 글 제목                                        |
| tistoryTags       | 태그 (쉼표로 구분)                              |
| tistoryVisibility | 발행상태 (0: 비공개, 3: 발행)                  |
| tistoryCategory   | 글 카테고리 ID                                 |
| tistoryPostId     | 글 Post ID (글 수정시 필요)                    |
| tistoryPostUrl    | 글 URL                                         |
| tistoryPublished  | 발행 예약일 (yyyy-MM-ddTHH:mm)                 |
| tistorySkipModal  | 다음 발행부터 모달창 띄우지 않기 (true, false) |

### ⌘ 指定快捷键

如果想要指定快捷键，请在 Obsidian 设置>快捷键中找到 "Tistory: Publish to Tistory" 并设置所需的快捷键。

<img width="600" alt="" src="https://user-images.githubusercontent.com/3969643/193435868-522a8c0b-a61d-4647-83a3-0371d5c5fc0d.png">

<br>

## 🤝 Additional Information

- Currently, the Tistory plugin includes internal images in the note as `Base64 encoded data` in the uploaded blog content.
- As mentioned in the issue <https://github.com/anpigon/obsidian-tistory-plugin/issues/2,> publishing a post with large images results in a "character limit exceeded" error.
- We plan to resolve this issue. In the meantime, we recommend using the [Obsidian Imgur plugin](https://obsidian.md/plugins?id=obsidian-imgur-plugin) for image uploads.

## 📆 计划功能

- Tistory 图片上传功能
- 获取和搜索 Tistory 博客列表
- 支持其他插件的渲染



