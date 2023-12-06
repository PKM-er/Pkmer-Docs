---
uid: 2023120522271299
title: Obsidian 插件：【Readme】sync-to-xlog
tags: ['obsidian插件', 'readme']
description: 将笔记推送到xlog.app的方法。简单快捷灵活。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】sync-to-xlog

> [!Note] 插件名片
> - 插件名称：sync-to-xlog
> - 插件作者：Otto_J
> - 插件说明：将笔记推送到 xlog.app 的方法。简单快捷灵活。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Otto-J/sync-to-xlog)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-to-xlog)

## 概述

将笔记推送到 xlog.app 的方法。简单快捷灵活。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Otto-J/sync-to-xlog/master/README.md)
>

---

## Readme(翻译）

下面是 [[sync-to-xlog]] 插件的自述翻译

# 同步到 Xlog

一个 Obsidian 插件，将笔记同步到 xlog.app。

# 相关截图

上传弹窗

![](./assets/Snipaste_2023-10-16_23-17-44.png)

设置截图

![](./assets/Snipaste_2023-10-17_11-36-19.png)

## Installation

Currently, this plugin has not been officially released on Obsidian. You can install it through BRAT (similar to iOS TestFlight) or manually install it.

### Installation via BRAT (Recommended)

Open Settings - Third-Party Plugins - Browse - Search for brat, download, install, and enable it.

<img width="548" alt="image" src="https://github.com/whitewatercn/sync-to-xlog/assets/58654928/c8f30a7e-0472-4ab9-b8f0-35b30495b0db">

Open BRAT Settings

<img width="868" alt="image" src="https://github.com/whitewatercn/sync-to-xlog/assets/58654928/b30ae21f-acb3-4e5a-abba-86469a4f999e">

Click on Add Beta plugin

A popup will appear, enter this URL

![](./assets/20231019_224319.png)

```text
https://github.com/Otto-J/sync-to-xlog
```

Click on `Add Plugin`

<img width="589" alt="image" src="https://github.com/whitewatercn/sync-to-xlog/assets/58654928/a8675b17-715e-40ed-9d8d-1c21ea177253">

<img width="874" alt="image" src="https://github.com/whitewatercn/sync-to-xlog/assets/58654928/29f7ae91-cec5-47a7-979b-66d12ce90d92">

### Manual Installation (No Longer Recommended)

Visit <https://github.com/Otto-J/sync-to-xlog/releases> to download the latest dist.zip folder and place it in the plugin directory.

Go to Settings - Third-party Plugins - Installed Plugins, and on the right side of the plugin, there is a folder icon. Unzip the folder and place it there.

![](./assets/20231019_114353.png)

## 使用教程

### 视频教程

见 B 站 [《介绍我开发的 Obsidian-sync-xlog 插件：轻松帮你同步 obsidian 内容到 xlog 上》](https://www.bilibili.com/video/BV1rQ4y1s7Fa/)

### 文字教程

启用插件后，[获取 token](https://blog.ijust.cc/play-xlog-02) 并连接测试成功

选择发布内容的账号（同一 token 可绑定多个账号）

<img width="866" alt="image" src="https://github.com/whitewatercn/sync-to-xlog/assets/58654928/3e8fa137-5a44-4cb8-b938-8910096d4f0b">

在 Obsidian 中右键文件，选择 `上传此文件到xlog`

<img width="351" alt="image" src="https://github.com/whitewatercn/sync-to-xlog/assets/58654928/a2928d32-f8c6-4454-aad8-17aba29c54d5">

编辑相关设置后，点击 `上传`

<img width="589" alt="image" src="https://github.com/whitewatercn/sync-to-xlog/assets/58654928/96f7469a-5b9d-4eae-9321-4c6a7038b2b3">

当前进展

等待 obsidian 官方上线本插件

项目背景和程序设计可以访问 <https://blog.ijust.cc/play-xlog-03>

目前已实现功能：

- [x] 完成设置面板
- [x] 完成上传提示
- [x] 完成新增和更新功能
- [x] 更新信息同步回填到 frontMatter 中
- [x] md 中的 图片处理为 ipfs

未来可能会和 xlog/CrossBell 官方建立联系，也说不定。

## 目前已知问题

主流程已通，目前存在以下问题，如果你有空闲可以提 PR 帮我修改，感谢。

- ~~obsidian 内置的图片不会读取，也就是 `![[图片.jpg]]` 不知道如何读取，会导致读取失败~~
- ~~不确定图片里包含空格等关键字是否影响上传~~
- 打印的日志比较凌乱，不规整
- ~~页面正文不能包含 `![]()` 和 `![[]]` 脆弱的正则没有处理好~~
- 发包靠手打，不太会搞命令行

```bash
git clone
pnpm i
```

# 开发

npm run dev

# 构建

npm run build

```
版权

MIT



