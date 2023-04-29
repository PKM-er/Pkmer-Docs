---
uid: 20230329145856
title: Obsidian 设置
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230414210153
public: yes
---

# Obsidian 设置

## 认识设置界面

在界面点击左下角的「齿轮」图标，可开启 Obsidian 的 Settings 界面。

![Pasted image 20230126212524](https://cdn.pkmer.cn/images/24d80d3798850df359f0e20a3af91693_MD5.png)

你可以把 Obsidian 的设置（ Settings）看成主要由 2 大部分组成：

- Obsidian 自带的设置选项
- 插件选项选项
  - 核心插件选项（官方出品并维护）
  - 社区插件选项（来自开源社区贡献）

![Pasted image 20230126212816](https://cdn.pkmer.cn/images/a636257def179221cf4a96ba616807e6_MD5.png)

## 自带设置选项

Obsidian 软件的主要设置，可分成 8 个设置模块：

- Editor（编辑器）
- Files & Links（档案&连接）
- Appearance（界面外观）
- Hotkeys（快捷键）
- About（关于）
- Account（帐户）
- Core plugins（核心插件）
- Community plugins（第三方插件）

### 自带设置选项的详细说明

由于可调整的选项非常多，下面说明

#### 编辑器 (Editor)

1. Readable line length：若开启，编辑区域集中在屏幕中间。开启/关闭 Readable line length
2. Strict line breaks：开启后会保留单字强制换行，对英文单字有效。
3. Auto pair brackets：自动补齐括号，例如输入 `[[` 时软件会自动补齐成 `[[]]`。
4. Auto pair Markdown syntax：自动补齐 Markdown 输入，例如使用粗体时 Markdown 格式为 *想要粗体的文字*，输入 * Obsidian 会自动补齐后面的 *。
5. Smart indent lists：智慧型缩排，在排版时非常好用。
6. Use tabs：可使用 tab 进行缩排。
7. Line wrap：当一段文字太长时，会将文字自动往下排版，不需要左右移动屏幕的卷轴。左边是关闭的画面、右边是开启的画面。

![Pasted image 20230221094953](https://cdn.pkmer.cn/images/e42a944a7083680c4239837926f1d7cf_MD5.png)

![Pasted image 20230221095002](https://cdn.pkmer.cn/images/acaf5de0f7579d211e9dce9e8c62cb45_MD5.png)

#### Files & Links (文件&连接)

1. Confirm file deletion：删除档案前，询问是否删除。这个可依据个人喜好设定。
2. Default location for new notes：新建立的笔记要储存在哪里。

> [!不成熟的建议]
> 建议选择「in the folder specified below（下方指定的文件夹）」，这样方便，在后续笔记多的时候，快速去整理。

1. Use Wikilinks：设定 Obsidian 的连接格式。此项设定属于 Obsidian 专属的格式，若不设定将以传统 Markdown 格式呈现。
   下方图片中

   - A 是开启 Wikilinks 的格式；
   - B 是传统的 Markdown 连接格式。

   ![Pasted image 20230126213643](https://cdn.pkmer.cn/images/a73d25a09a624bfea9bf34ec64cb4e3f_MD5.png)

![Pasted image 20230221095014](https://cdn.pkmer.cn/images/17366436160e81a9996243cdccf49a7a_MD5.png)

![Pasted image 20230221095019](https://cdn.pkmer.cn/images/17366436160e81a9996243cdccf49a7a_MD5.png)

#### 外观 (Appearance)

设定 Obsidian 的界面样式，参看 [[Obsidian外观]]。

#### Hotkeys (快捷鍵)

设定 Obsidian 的指令快捷键，参看 [[快捷键]]

#### 关于（About）

![Pasted image 20230221095034](https://cdn.pkmer.cn/images/feeac939e5c0016bb92aae813284a008_MD5.png)

1. Automatic updates：自动检查是否有新版本，建议开启。
2. Language：调整语言设定，支持切换为「简体中文」。
3. 授权（License）

输入授权码。Obsidian 基本上是可以免费使用的，但官网提供 2 个支持开发者的方案—Catalyst、Commercial。

购买方案后，官方会寄送授权码给你，输入后即可升等。升级后的好处为优先体验新功能、官方专人协助…等。

可依据个人意愿决定是否要购买。

#### 账户（Account）

![Pasted image 20230126214303](https://cdn.pkmer.cn/images/f85120a976dc301fb8d527f0d24aca83_MD5.png)

Obsidian 是一款优秀的免费软件，基于本地化设计，可以在不连上网路的情况使用。

官方推出了 Obsidian Publish 和 Obsidian Sync 两个付费功能，需要申办帐号并联网使用。

Obsidian Publish：快速发布 Obsidian 笔记到网络上，共享给别人阅读。

Obsidian Sync：官方提供的 Obsidian 笔记同步服务。

## Core plugins (官方插件)

Obsidian 官方提供的插件服务。以下稍微介绍每个插件的功能。

- Tag pane：显示「标签面板」。
![](https://cdn.pkmer.cn/images/5942abc424bdeaf08216ec89f79f3d4f_MD5.png)

标签面板

- Page preview：对着  `[[连接笔记]]`  按下 cmd/ctrl 时，可以用浮动视窗预览该笔记的文字。

![](https://cdn.pkmer.cn/images/657150f1cd609052baddea31528e7d5e_MD5.gif)

Page Preview

- Starred：可将笔记加入到「星标」面板。

![](https://cdn.pkmer.cn/images/c677a6c34ddfd362e0abdb1e3ba17d51_MD5.png)

- Daily notes：可使用「每日笔记」，后续将专文介绍。
- Templates：可使用「笔记模板」快速插入内容，后续将专文介绍。
- Outline：显示此则笔记的大纲。
- Workspaces：可储存目前的面板布局设置，可储存多套不同的界面布局，以适应不同工作使用需求。

![](https://cdn.pkmer.cn/images/0d8b762186b628c83225a05c83b08f4b_MD5.png)

## 社区插件 (Community plugins)

社区插件是 Obsidian 这款软件之所以强大的原因，有非常多厉害的大神开发出好用的插件功能，让 Obsidian 越来越强大。

此功能默认是关闭的，因为使用非官方的插件有可能会造成笔记档案的遗失，或者功能还处于测试阶段。但别想得太可怕，只要确保使用前自己已经有备份笔记的习惯。
