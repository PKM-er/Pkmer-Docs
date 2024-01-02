---
uid: 2023120719255977
title: Obsidian 插件：【Readme】Custom Attachment Location
tags: ['附件', '文件管理', '文件', 'obsidian插件', 'readme']
description: 使用变量（$filename，$data等）自定义附件位置，就像Typora一样。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Custom Attachment Location

> [!Note] 插件名片
> - 插件名称：Custom Attachment Location
> - 插件作者：RainCat1998
> - 插件说明：使用变量（$filename，$data 等）自定义附件位置，就像 Typora 一样。
> - 插件分类：[' 附件 ', ' 文件管理 ', ' 文件 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RainCat1998/obsidian-custom-attachment-location)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-custom-attachment-location)

## 概述

使用变量（$filename，$data 等）自定义附件位置，就像 Typora 一样。

![Custom Attachment Location](https://cdn.pkmer.cn/covers/obsidian-custom-attachment-location.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RainCat1998/obsidian-custom-attachment-location/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-custom-attachment-location]] 插件的自述翻译

# Obsidian 自定义附件位置

像 Typora 一样，使用变量（$filename，$data 等）自定义附件位置。

## 特性

* 修改附件文件夹的位置。
* 修改**粘贴的图片**的文件名。

⚠️ **重要提示：** 当插件被禁用时，该插件将覆盖以下**两个设置**并恢复它们。

* 用于生成 md 链接的**“文件和链接 ->新链接格式 ->文件的相对路径”**。
* 用于自定义附件文件夹的**“文件和链接 ->新附件的默认位置”**。

如何使用

### 插件管理器

* 通过第三方插件设置安装。搜索 **自定义附件位置**。
* 在设置中激活插件。

### 手动安装

* 在 [最新版本发布页面](https://github.com/RainCat1998/obsidian-custom-attachment-location-plugin/releases/latest) 下载 `main.js` 和 `manifest.json`。
* 将 `main.js` 和 `manifest.json` 复制到你的 vault 文件夹下的 `.obsidian/plugins/obsidian-custom-attachment-location/` 目录中。
* 在 Obsidian 设置中启用插件。

### 设置

* **新附件的位置**
  * 与“文件和链接 -> 新附件的默认位置”相同。
  * `${filename}` 代表当前笔记的文件名。
  * 如果要使用相对路径，请在路径前面加上“./”。
  * 示例：**`assets/${filename}`, `./assets/${filename}`**
  * **不要以“/”开头或以“/”结尾**
  * （错误示例：`/assets/${filename}/`）
* **粘贴的图片名称**
  * `${filename}` 代表当前笔记的文件名。`${date}` 代表自定义日期格式的当前日期时间。
  * 示例：**`image-${date}`, `${filename}-img-${date}`**
  * Obsidian 默认值：“Pasted image YYYYMMDDHHmmss”
  * **注意**：此设置仅更改从剪贴板复制的图像文件名。如果您的附件是从资源管理器中复制的，则 Obsidian 只会将原始文件复制到附件文件夹中而不进行重命名。
* **日期格式**
  * moment.js 的日期格式字符串。
  * 更多信息：[格式](https://momentjs.com/docs/#/displaying/format/)
  * 示例：“YYYYMMDDHHmmssSSS”。
* **自动重命名附件文件夹**
  * 如果“新附件的位置”包含 `${filename}`，则自动更新附件文件夹名称。
* **自动重命名附件文件 [实验性]**
  * 如果“粘贴的图片名称”包含 `${filename}`，则自动更新目标 md 文件中的附件文件。
  * 只需简单地替换附件文件名中的 `${filename}` 字符串。因此，如果多个文件共享相同的前缀，可能会有危险。

## 截图

![image](https://cdn.pkmer.cn/covers/obsidian-custom-attachment-location_1_0.png!pkmer)

![image](https://cdn.pkmer.cn/covers/obsidian-custom-attachment-location_1_1.png!pkmer)
