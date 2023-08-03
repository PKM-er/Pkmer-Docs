---
uid: 20230803212502
title: Obsidian 插件：【Readme】Google Keep Import
tags: ['obsidian插件', 'readme']
description: 允许导入Google Keep备份的json文件及其附件。也可以用于导入其他文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Google Keep Import

> [!Note] 插件名片
> - 插件名称：Google Keep Import
> - 插件作者：Dale de Silva
> - 插件说明：允许导入Google Keep备份的json文件及其附件。也可以用于导入其他文件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/daledesilva/obsidian_google-keep-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?google-keep-import)

## 概述

允许导入Google Keep备份的json文件及其附件。也可以用于导入其他文件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/daledesilva/obsidian_google-keep-import/main/README.md)
> 

---

## Readme(翻译）

下面是 [[google-keep-import]] 插件的自述翻译



# Google Keep 导入插件

Google Keep 导入插件是为 [Obsidian](https://obsidian.md) 设计的插件，可以轻松导入从 Google Keep 导出的备份笔记和相关附件。

<div>
  <image src="docs/media/start-import-modal.png" width="43%" alt="插件的文件导入对话框的截图。"/>
  <image src="docs/media/progress-preview.gif" width="56%" alt="进度对话框和错误日志的预览。"/>
</div>

## 🖥️ 要求
- 最低 Obsidian 版本：**1.1.10**（*2023年1月13日之后下载的任何版本*）

<blockquote style="background-color: #f7f7f7; color: #333; padding: 10px; font-size:0.9em">
  <strong>注意：</strong>该插件可能在较旧的 Obsidian 版本上工作，但这些版本尚未经过测试。如果您有某种原因不更新 Obsidian，并且无法安装插件，请自行编辑此插件或考虑通过下方的支持部分与我联系。
</blockquote>

## 🛠️ 使用方法
1. 从Obsidian的设置中的社区插件部分安装此插件。
2. 要从Google Keep导出文件，请打开[Google Takeout](https://takeout.google.com/)并仅选择Google Keep文件（根据笔记和附件的数量，可能需要一些时间）。
3. 一旦你有了导出的压缩包，解压缩它，使得所有文件分开。
4. 在Obsidian中，按下`CMD+P`并选择`Google Keep Import`操作。
5. 在打开的模态框中，拖入所有解压缩的文件，并按照说明导入文件。

## 🎉 特性

### 错误日志
该插件将始终提供实时日志，记录无法导入或不支持的文件，以便您在需要时立即取消导入，或稍后找到文件进行编辑或转换。

### 不论笔记是否保留，都可以导入二进制文件
该插件可以导入任何二进制文件，如图片，即使没有相应的Keep笔记。这意味着如果需要，您可以将该插件用作批量导入来自非Keep的文件夹的文件。

### 不支持的文件
该插件可以导入任何文件，无论是来自Keep还是Obsidian，它都可以支持。如果需要，您可以在设置中打开此功能，但默认情况下是关闭的，并且会告知您跳过了哪些文件。

## ⚙️ 可自定义的设置
该插件提供了一个设置页面，可以在导入过程中访问。这使您可以根据需要自定义导入的内容以及如何处理来自Keep文件的日期、颜色、标签等信息。

### 设置：
<image src="docs/media/settings_basics.jpg" width="500px" alt="插件设置的截图。有关说明，请参见下文。"/>
<image src="docs/media/settings_inclusions.jpg" width="500px" alt="插件设置的截图。有关说明，请参见下文。"/>
<image src="docs/media/settings_tags.jpg" width="500px" alt="插件设置的截图。有关说明，请参见下文。"/>
<image src="docs/media/settings_problem-characters.jpg" width="500px" alt="插件设置的截图。有关说明，请参见下文。"/>
<image src="docs/media/settings_invalid-characters.jpg" width="500px" alt="插件设置的截图。有关说明，请参见下文。"/>

<details>
  <summary>展开以阅读设置的详细说明</summary>
  
  #### 基本设置
  - **笔记导入文件夹**：定义 Obsidian 中将导入笔记的文件夹。
  - **附件导入文件夹**：定义 Obsidian 中将导入附件的文件夹。
  - **不支持的附件导入文件夹**：定义 Obsidian 中将导入不受 Obsidian 支持的附件的文件夹。
  - **笔记创建日期**：定义每个新的 Obsidian 笔记的“创建于”日期；使用 Obsidian 导入的日期还是原始 Google Keep 创建日期。
  #### 包含项
  是否导入特定类型的笔记或忽略它们。
  - **导入已归档的笔记**
  - **导入已删除的笔记**
  - **导入不支持的文件**：
    - **导入 HTML 文件**：
    默认情况下不导入不支持的（和 HTML）文件，因为它们在 Obsidian 中通常是不可见的。来自 Google Takeout 导出的 HTML 文件也是其他文件的副本，因此不需要导入。
  #### 标签
  是否在 Obsidian 中应用标签以表示原始 Google Keep 笔记的这些属性。
  - **添加标签标签**
  - **添加颜色标签**
  - **添加固定标签**
  - **添加附件标签**
  - **添加已归档标签**
  - **添加已删除标签**
  #### 字符映射
  允许将标题中的任何字符映射为用于笔记文件名的有效字符。默认情况下，此设置使文件在所有操作系统上都有效。
  - **问题字符**
  这些字符可能不会破坏导入，但会在 Obsidian 的某些位置降低功能。
  - **无效字符**
  导入的笔记标题中的这些字符可能会阻止在某些操作系统上进行导入。

</details>

## ❤️ 支持
如果你发现这个插件节省了你的时间或以某种方式帮助了你，请考虑支持我开发插件和其他免费社区资料的工作。一个简单的方法是在Twitter上关注并给我发消息，我的Twitter账号是[@daledesilva](https://twitter.com/daledesilva)，或者在Mastodon上关注我，我的Mastodon账号是[indieweb.social/@daledesilva](https://indieweb.social/@daledesilva)，你也可以通过以下方式进行捐赠支持。

<p>
  <a href="https://twitter.com/daledesilva" target="_blank_">
    <img src="docs/media/twitter-btn.svg" height="40px" alt="Dale de Silva在Twitter上的账号">
  </a>
  <a href="https://indieweb.social/@daledesilva" target="_blank">
    <img src="docs/media/mastodon-btn.svg" height="40px" alt="Dale de Silva在Mastodon上的账号">
  </a>
  <a href="https://ko-fi.com/N4N3JLUCW" target="_blank">
    <img src="docs/media/support-btn.svg" height="40px" alt="在Ko-fi上支持我">
  </a>
</p>

## 🤖 我的其他作品
您可以在[designdebt.club](https://designdebt.club)上找到我其他项目的链接，我在那里写博客关于设计和开发，并发布像这样的其他插件。您还可以在[falterinresolute.com](https://falterinresolute.com)上找到我的文章，我在那里结合哲学和动画。

<p>
  <a href="https://designdebt.club" target="_blank">
    <img src="docs/media/design-debt-club-btn.svg" height="50px" alt="Design Debt Club">
  </a>
  <a href="https://falterinresolute.com" target="_blank">
    <img src="docs/media/falter-in-resolute-btn.svg" height="50px" alt="Falter In Resolute Blog">
  </a>
</p>

---

## 👨‍💻 技术细节

<!-- ## 代码导览
虽然有些人具备阅读插件代码的技术能力，但并非所有人都具备这种能力。因此，我创建了一个视频导览，其中我描述了插件的构建方式，以满足对插件感兴趣或希望适应插件的任何人的需求。

>插入代码导览视频 -->

### 手动安装插件
该插件在Obsidian安装中的Community Plugins中列出，但是，如果出于某种原因，您希望手动安装它，您需要按照下面的How to Contribute部分的步骤构建插件，然后将dist文件夹复制到您的Obsidian vault的plugins文件夹中。

### 如何贡献
- 克隆这个仓库。
- 运行 `npm i` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。
- 将 `dist` 文件夹复制到你的 vault 的插件文件夹中，或者阅读 `src/static/.hotreload/` 中的说明。



