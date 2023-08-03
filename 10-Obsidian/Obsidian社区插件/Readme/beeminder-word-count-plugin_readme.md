---
uid: 20230803203529
title: Obsidian 插件：【Readme】Beeminder Word Count Plugin
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 从Obsidian MD文件直接发布字数到Beeminder。
author: Yuta Miyama
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Beeminder Word Count Plugin

> [!Note] 插件名片
> - 插件名称：Beeminder Word Count Plugin
> - 插件作者：Yuta Miyama
> - 插件说明：从Obsidian MD文件直接发布字数到Beeminder。
> - 插件分类：['第三方工具集成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kenzan100/beeminder-obsidian-word-count)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?beeminder-word-count-plugin)

## 概述

从Obsidian MD文件直接发布字数到Beeminder。

![Beeminder Word Count Plugin](https://cdn.pkmer.cn/covers/beeminder-word-count-plugin.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kenzan100/beeminder-obsidian-word-count/main/README.md)
> 

---

## Readme(翻译）

下面是 [[beeminder-word-count-plugin]] 插件的自述翻译


## Obsidian插件 - Beeminder字数统计

这是一个用于Obsidian -> Beeminder字数统计集成的小插件。
- Obsidian https://obsidian.md
- Beeminder https://www.beeminder.com

## 它是做什么的

![4135afb222d7d94892f57f29fd17dbb5](https://user-images.githubusercontent.com/570263/116797588-4518fc80-aab5-11eb-9f9f-12efb5260307.gif)

1. 安装后，它将注册一个名为“发送字数到Beeminder”的命令。
2. 当选择该命令时，它将计算当前编辑文件中的字数。**它只会计算活动选择的区域。**
3. 然后将该值发送到Beeminder的终端。

*对于我的用例，当我在多天内编辑同一文件时，我不希望过多报告字数。*

## 设置

- 安装插件将在插件选项卡中注册新的设置。
- 转到该选项卡，输入以下3个值：
  - 您的Beeminder账户的用户名
  - 要将字数发布到的目标名称，以及
  - 由http://api.beeminder.com/#personal-authentication-token指定的auth_token。

插件的维护

### 发布新版本

- 使用新的版本号作为“标签版本”创建新的GitHub发布。使用确切的版本号，不要包含前缀`v`。参考这里的示例：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将文件`manifest.json`、`main.js`、`styles.css`作为二进制附件上传。
- 发布发布。

### 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/your-plugin-id/` 目录下。

### API文档

请参阅https://github.com/obsidianmd/obsidian-api



