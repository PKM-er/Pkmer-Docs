---
uid: 20230803212008
title: Obsidian 插件：【Readme】Avatar
tags: ['obsidian插件', 'readme']
description: 在你的笔记中显示一个头像图片。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Avatar

> [!Note] 插件名片
> - 插件名称：Avatar
> - 插件作者：froehlichA
> - 插件说明：在你的笔记中显示一个头像图片。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/froehlichA/obsidian-avatar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?avatar)

## 概述

在你的笔记中显示一个头像图片。

![Avatar](https://cdn.pkmer.cn/covers/avatar.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/froehlichA/obsidian-avatar/master/README.md)
> 

---

## Readme(翻译）

下面是 [[avatar]] 插件的自述翻译



# 黑曜石头像

该插件为您提供了一个组件，它将显示一个带有一些附带文本的小图像。就是这样。

![预览模式](./docs/avatar_preview.PNG)

要使用，请将以下代码片段插入到您的Markdown中。

````
```avatar
```
````

## 编辑图片/描述

**在源代码模式下**，您可以直接编辑代码块：

````
```avatar
image: your-image-here.png
description: This will be displayed as the description!
```
````

**在实时预览模式下**，点击图片以更改它（然后从您的库中选择一个，或者粘贴一个在线图片的URL），或者点击描述进行编辑（不要忘记点击保存更改的按钮！）

![编辑模式](./docs/avatar_edit.PNG)

描述编辑器支持Obsidian的所有Markdown功能。

安装

### 使用 Obsidian

1. 打开 Obsidian
2. 打开 `设置` -> `社区插件`
3. 如果提示，请点击 `启用社区插件`
4. 点击 `浏览`，并搜索 `Avatar`
6. 安装并启用插件

### 手动安装

1. 从此 Github 仓库的 `Releases` 部分下载最新版本的 .zip 文件
2. 将 .zip 文件解压到你的 vault 的插件文件夹中：`<vault>/.obsidian/plugins`
3. 重新加载 Obsidian



