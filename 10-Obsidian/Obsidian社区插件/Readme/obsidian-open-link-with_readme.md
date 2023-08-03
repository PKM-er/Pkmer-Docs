---
uid: 20230803231105
title: Obsidian 插件：Open Link With
tags: ['链接处理', 'obsidian插件', 'readme']
description: 在 Obsidian 中可以选择外部链接用什么浏览器打开。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232459
---

# Obsidian 插件：Open Link With

> [!Note] 插件名片
> - 插件名称：Open Link With
> - 插件作者：MamoruDS
> - 插件说明：在 Obsidian 中可以选择外部链接用什么浏览器打开。
> - 插件分类：[' 链接处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MamoruDS/obsidian-open-link-with)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-open-link-with)

## 概述

在 Obsidian 中可以选择外部链接用什么浏览器打开。

![Open Link With](https://cdn.pkmer.cn/covers/obsidian-open-link-with.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MamoruDS/obsidian-open-link-with/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-open-link-with]] 插件的自述翻译

# obsidian-open-link-with

[![所有下载量](https://img.shields.io/github/downloads/mamoruds/obsidian-open-link-with/total?style=flat-square)](https://github.com/MamoruDS/obsidian-open-link-with)

[![最新版本](https://img.shields.io/github/v/release/mamoruds/obsidian-open-link-with?style=flat-square)](https://github.com/MamoruDS/obsidian-open-link-with/releases/latest)

选择您自己的方式打开外部链接。

安装

### 手动安装

从 [发布页面](https://github.com/MamoruDS/obsidian-open-link-with/releases) 下载 zip 压缩包。将压缩包解压到 `<你的vault>/.obsidian/plugins` 文件夹中。

在 `设置 > 社区插件 > 已安装插件` 下启用 `Open Link With` 插件。

## 使用方法

在插件的设置菜单中选择您想要使用的浏览器来打开外部链接。

<p align="center">
<img src="https://github.com/MamoruDS/obsidian-open-link-with/raw/main/assets/screenshot_00.png" style="width: 650px; max-width: 100%;">
</p>

### 自定义

将您的自定义配置文件放在插件的设置菜单中。配置文件应包含 `name(string): commands(string[])`，如下所示：

_PS._ 如果用户定义的配置文件中的名称与预设名称相同，则会被 _ 忽略 _。

示例：

<details><summary>对于MacOS</summary>

```json
{
    "waterfox": [
        "/Applications/Waterfox.app/Contents/MacOS/waterfox"
    ],
    "waterfox-private": [
        "/Applications/Waterfox.app/Contents/MacOS/waterfox",
        "--private-window"
    ]
}
```

</details>

<details><summary>对于Windows</summary>

```json
{
    "opera": [
        "c:/Users/mamoru/AppData/Local/Programs/Opera/launcher.exe"
    ],
    "opera-private": [
        "c:/Users/mamoru/AppData/Local/Programs/Opera/launcher.exe",
        "--private"
    ]
}
```

</details>

### 修改键绑定

插件在版本 `0.1.5` 之后支持通过绑定修改键来打开多个设置。您可以通过插件的设置菜单设置修改键绑定以符合个人偏好。

默认情况下，任何修改键和任何鼠标按钮（左键或中键）的点击将使用“全局”浏览器，即在设置中选择的浏览器配置文件。您可以通过点击“New”按钮并设置绑定是否仅由中键点击触发来创建自定义的修改键绑定。您可以创建多个绑定以个性化插件的行为，并且绑定将从上到下进行匹配。

例如，在上述设置中，当按下**shift**键并点击**中键**时，链接将在 chrome 中打开；当按下**shift**键并点击**左键**时，链接将在 safari 中打开；在其他情况下，链接将在全局浏览器 firefox 中打开。

## 更新日志

[链接](./CHANGELOG.md) 到更新日志。
