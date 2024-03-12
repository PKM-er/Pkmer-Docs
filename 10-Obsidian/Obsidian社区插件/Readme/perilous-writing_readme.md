---
uid: 20230817224055
title: Obsidian 插件：Perilous Writing
tags: ['obsidian插件', 'readme']
description: 持续写作，否则将失去所有进展。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Perilous Writing

> [!Note] 插件名片
> - 插件名称：Perilous Writing
> - 插件作者：Sameer Ismail
> - 插件说明：持续写作，否则将失去所有进展。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sameersismail/obsidian-perilous-writing)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?perilous-writing)

## 概述

持续写作，否则将失去所有进展。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sameersismail/obsidian-perilous-writing/master/README.md)

---

## Readme(翻译）

下面是 [[perilous-writing]] 插件的自述翻译

# 危险的写作

这是一个 [Obsidian](https://obsidian.md) 插件，它会以威胁你正在进行的工作的方式，要求你输出写作内容。它模拟了 [Manu Ebert](https://github.com/maebert) 的优秀作品 [The Most Dangerous Writing App](https://github.com/maebert/themostdangerouswritingapp)。

# 用法

> **警告：**如果会话未成功完成，则会**无法恢复地删除**您在会话中的工作。买方自负。

1. 安装插件。请参阅下文。
2. 打开命令面板，选择短会话（默认为五分钟）或长会话（默认为十分钟）。 （可以在设置选项卡中更改各自的持续时间。）

    <img width="766" alt="image" src="https://user-images.githubusercontent.com/38896593/217981517-36095944-53b3-4159-b3bb-fd98d1e35fd4.png">

3. 编辑器顶部将出现一个浅灰色的条形，表示会话的进度。会话将在下一次按键后开始。

    <img width="774" alt="image" src="https://user-images.githubusercontent.com/38896593/217981773-92d3b6ae-a31a-4f2d-89f1-e975b2abe570.png">

4. 开始编写。如果您停止写作五秒钟，您在会话中添加的内容将被**删除**。在不活动两秒后，您将收到警告。

    <img width="774" alt="Screenshot 2023-02-10 at 12 17 04 pm" src="https://user-images.githubusercontent.com/38896593/217983533-238ea697-2b8d-4ade-8ff6-1fab3b66080d.png">

    <img width="774" alt="image" src="https://user-images.githubusercontent.com/38896593/217984424-80af97e6-7266-4905-a956-3db5caac2883.png">

    <img width="774" alt="image" src="https://user-images.githubusercontent.com/38896593/217983938-b4cddfed-2c5a-4a00-b142-bb4800e959ae.png">

5. 只有新字符会重置计时器，退格键不会。在 Vim 仿真下，正常模式操作也不会重置计时器。

# 安装

目前正在等待在社区插件目录中提供。

## 手册

下载最新版本，并将 `main.js` 和 `manifest.json` 文件复制到一个新的插件目录中，如下所示的 (4) 和 (5)。

## 从源格式

1. 克隆存储库。
2. 在根目录中通过 `yarn` 或 `npm install` 安装依赖项。
3. 使用 `yarn build` 或 `npm run build` 构建插件。这将生成一个 `main.js` 文件。
4. 在您的 vault 目录中创建一个插件目录。

    ```sh
    mkdir -p $VAULT_SOURCE/.obsidian/plugins/obsidian-perilous-writing
    ```

5. 将 `main.js` 和 `manifest.json` 文件复制到该目录中。

    ```sh
    cp main.js manifest.json $VAULT_SOURCE/.obsidian/obsidian-perilous-writing
    ```

6. 在 Obsidian 的设置选项卡中启用插件。

# 致谢

受到 [Manu Ebert](https://github.com/maebert) 的 [The Most Dangerous Writing App](https://github.com/maebert/themostdangerouswritingapp) 的启发。
