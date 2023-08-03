---
uid: 2023080322275671
title: Obsidian 插件：【Readme】Telegram Sync
tags: ['obsidian插件', 'readme']
description: 将Telegram中的消息和文件转移到Obsidian。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Telegram Sync

> [!Note] 插件名片
> - 插件名称：Telegram Sync
> - 插件作者：soberhacker
> - 插件说明：将Telegram中的消息和文件转移到Obsidian。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/soberhacker/obsidian-telegram-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?telegram-sync)

## 概述

将Telegram中的消息和文件转移到Obsidian。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/soberhacker/obsidian-telegram-sync/main/README.md)
> 

---

## Readme(翻译）

下面是 [[telegram-sync]] 插件的自述翻译


# Obsidian的Telegram同步
<a href="https://github.com/soberhacker/obsidian-telegram-sync/releases/latest">
<img src="https://img.shields.io/github/v/release/soberhacker/obsidian-telegram-sync?display_name=tag">
</a>&nbsp;<a href="https://github.com/soberhacker/obsidian-telegram-sync/releases/latest">
<img src="https://img.shields.io/github/release-date/soberhacker/obsidian-telegram-sync">
</a>&nbsp;<a href="https://github.com/soberhacker/obsidian-telegram-sync">
<img src="https://img.shields.io/github/downloads/soberhacker/obsidian-telegram-sync/total">
</a>&nbsp;<a href="https://github.com/soberhacker/obsidian-telegram-sync">
<img src="https://img.shields.io/tokei/lines/github/soberhacker/obsidian-telegram-sync">
</a><br><br>

将Telegram中的消息和文件传输到Obsidian vault。您可以轻松地将Telegram聊天中的文本、语音转录、图像和其他文件保存到Obsidian中进行进一步处理和组织。

📮 [在Telegram中提问](https://t.me/ObsidianTelegramSync)&nbsp;&nbsp;&nbsp;&nbsp;🐛 [报告问题](https://github.com/soberhacker/obsidian-telegram-sync/issues)

---

## 目录

- [特性](#features)
- [安装](#installation)
- [手动安装](#manual-installation)
- [使用](#usage)
- [提示](#tips)
- [支持者和捐赠](#supporters--donations)
- [贡献](#contributing)

## 特点

- 同步文本消息和文件
- 将消息保存为单独的笔记或追加到现有笔记中
- 转录语音和视频笔记（仅适用于Telegram高级订阅用户）
- 使用可自定义的模板创建新的笔记
- 为新的笔记和文件设置文件夹
- 自动使用Markdown格式化文本消息
- 从Telegram中删除已处理的消息

## 安装

1. 打开 Obsidian 并导航到 设置 > 第三方插件
2. 确保安全模式已关闭
3. 点击浏览按钮打开社区插件窗口
4. 在搜索栏中搜索 **Telegram Sync**
5. 点击安装按钮，然后通过切换开关启用插件

## 手动安装

1. 从[最新版本](https://github.com/soberhacker/obsidian-telegram-sync/releases//latest)下载 main.js、styles.css 和 manifest.json 文件。
2. 将下载的文件复制到 <pathToYourVault>/.obsidian/plugins/telegram-sync/ 目录下。
3. 重新启动 Obsidian，并在“Community plugins”选项卡中启用**Telegram Sync**插件。

## 使用方法

1. 通过与[@botFather](https://t.me/botfather)对话，在Telegram上创建一个新的机器人
2. 复制@botFather提供的机器人令牌
3. 打开Obsidian设置，导航到**Telegram Sync**设置选项卡
4. 将您的机器人令牌粘贴到**Bot > Connect > Bot Token**字段中
5. 根据您的偏好配置其余设置
6. 开始向您的Telegram机器人发送消息和文件
7. 当Obsidian应用程序在您的笔记本电脑或个人电脑上运行时，它会同步所有您的消息
8. 您可以选择将您的机器人添加到您想要同步的任何聊天中（机器人需要管理员权限）

## 提示

1. 如果要在不同设备之间同步笔记，可以使用 Obsidian Sync、Syncthing、iCloud、Google Drive 等工具。
2. 如果只在手机上使用 Obsidian，请使用“分享”功能在移动应用之间传输数据。

## 支持者和捐赠

非常感谢已经支持这个项目的每个人 - 你们太棒了！

- maauso
- knopki
- Fabio Scarsi
- 匿名赞助者

---

<div align="center">
如果你喜欢这个插件并考虑捐赠 🌠 以支持持续开发，请使用下面的按钮。<br><br>

<a href="https://boosty.to/soberhacker/donate">
<img src="https://img.buymeacoffee.com/button-api/?text=boosty&emoji=💰&slug=soberhacker&button_colour=f17d1e&font_colour=000000&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00" width=155 height=91>
</a>&nbsp;&nbsp;<a href="https://www.buymeacoffee.com/soberhacker">
<img src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=%E2%98%95&slug=soberhacker&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFFFFF"  width=235 height=91>
</a><br>
<a href="https://ko-fi.com/soberhacker">
<img src="https://storage.ko-fi.com/cdn/brandasset/logo_white_stroke.png?" width=140 height=40>
</a>&nbsp;&nbsp;<a href="https://www.paypal.com/donate/?hosted_button_id=VYSCUZX8MYGCU">
<img src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" width=140 height=40>
</a>
</div>

---

## 贡献

如果您考虑要做贡献，请先查看[贡献指南](./CONTRIBUTING.md)。对于已经做出贡献的每个人，衷心感谢您的帮助 - 我们非常感激！
<br>

<div align="center">
<a href="https://github.com/soberhacker/obsidian-telegram-sync/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=soberhacker/obsidian-telegram-sync" />
</a>
</div>



