---
uid: 20231220112631
title: Obsidian 插件：【Readme】Personal Assistant
tags: ['obsidian插件', 'readme']
description: 通过一个命令在Obsidian中简化工作流程，管理备忘录、格式化记录、引用、前置内容、本地图、主题和插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Personal Assistant

> [!Note] 插件名片
> - 插件名称：Personal Assistant
> - 插件作者：edony
> - 插件说明：通过一个命令在 Obsidian 中简化工作流程，管理备忘录、格式化记录、引用、前置内容、本地图、主题和插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/edonyzpc/personal-assistant)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?personal-assistant)

## 概述

通过一个命令在 Obsidian 中简化工作流程，管理备忘录、格式化记录、引用、前置内容、本地图、主题和插件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/edonyzpc/personal-assistant/master/README.md)

---

## Readme(翻译）

下面是 [[personal-assistant]] 插件的自述翻译

# Obsidian 个人助手

<p align="center">
    <span>一个帮助您自动管理Obsidian的插件。</span>
    <br/>

    ·
    
    <br/>
    <img alt="Tag" src="https://img.shields.io/github/v/tag/edonyzpc/personal-assistant?color=%23000000&label=版本&logo=tga&logoColor=%23008cff&sort=semver&style=social" />
    <img alt="Downloads" src="https://img.shields.io/github/downloads/edonyzpc/personal-assistant/total?logo=obsidian&logoColor=%23b300ff&style=social" />
</p>

<p align="center">

</p>

> ***注意***：新功能：配置的记录笔记支持在一个视图中预览

<div align="center">
<img src="./docs/personal-assistant-v1.2.4.gif" alt="使用视频"/>
</div>

> ***注意***：列表标注

<div align="center">
<img src="./docs/personal-assistant-v1.2.2.gif" alt="使用视频"/>
</div>

> ***更新元数据***

<div align="center">
<img src="./docs/personal-assistant-v1.2.0.gif" alt="使用视频"/>
</div>

> ***更新插件和主题***

<div align="center">
<img src="./docs/personal-assistant-v1.1.6.gif" alt="使用视频"/>
</div>

> ***基本用法***

<div align="center">
<img src="./docs/personal-assistant-v1.1.1.gif" alt="使用视频"/>
</div>

## 特点

> ***注意***：目前支持的特点都是基于我的个人需求，欢迎通过提交问题来提出功能请求。

1. 自动在指定目录中创建带有配置文件名的笔记
2. 自动打开当前笔记相关的图形视图
3. 自动打开类似于 macOS 中的快速笔记的备忘录
4. 在命令面板中开启/关闭插件
5. 通过一个命令自动更新插件
6. 通过一个命令自动更新主题
7. 自动设置图形视图的颜色
8. 列出所有批注的 CSS 配置，以便快速插入

开发

请参考 [这里](./DEVELOPEMENT.md)。

## 安装

现在个人助手插件可以在 [插件市场](https://obsidian.md/plugins?search=personal%20assistant#) 中找到，您可以直接在 Obsidian 应用程序中安装此插件，请查看此 [手册](https://help.obsidian.md/Extending+Obsidian/Community+plugins#Install+a+community+plugin) 以获取更多详细信息。

![使用插件市场安装](https://cdn.pkmer.cn/covers/personal-assistant_2_0.png!pkmer)

### 安装

- 从发布中下载

### 使用 BRAT 安装

- 从 Obsidian 的 Community Plugins 中安装 BRAT
- 打开命令面板，运行命令 BRAT: Add a beta plugin for testing
- 将 `https://github.com/edonyzpc/personal-assistant` 复制到打开的模态框中
- 点击 Add Plugin -- 等待几秒钟，BRAT 会告诉你正在发生什么
- 在 BRAT 确认安装后，进入设置，转到**Community plugins**选项卡。
- 刷新插件列表
- 找到刚刚安装的 beta 插件并启用它。

### 手动安装

- 使用命令行构建：`yarn install && yarn build`，或者从 [发布页面](https://github.com/edonyzpc/personal-assistant/releases) 下载
- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `{VaultFolder}/.obsidian/plugins/personal-assistant/`。

使用

### 1. 在指定目录中创建笔记

- 打开命令面板并找到命令
![command 1](https://cdn.pkmer.cn/covers/personal-assistant_2_1.png!pkmer)
- 创建新的笔记并开始记录
- [***推荐***] 使用插件 [Templater](https://github.com/SilentVoid13/Templater) 的 `Folder Templates` 来格式化上述命令创建的笔记，示例如下
![folder templates](https://cdn.pkmer.cn/covers/personal-assistant_2_2.png!pkmer)

### 2. 在悬停编辑器中打开备忘录

- 打开命令面板并找到命令
![command 2](https://cdn.pkmer.cn/covers/personal-assistant_2_3.png!pkmer)
- 在备忘录中进行任何你喜欢的操作

### 3. 打开当前笔记的图形视图

- 打开命令面板并找到命令
![command 3](https://cdn.pkmer.cn/covers/personal-assistant_2_4.png!pkmer)
- 打开设置选项卡以进行更多自定义
- 使用反向链接和外向链接导航当前笔记的图形视图
- 配置图形视图的颜色

### 4. 通过一个命令启用/禁用 Obsidian 插件

- 打开命令面板并找到该命令
![command 5](https://cdn.pkmer.cn/covers/personal-assistant_2_5.png!pkmer)
- 选择建议以启用/禁用插件（或者可以通过插件名称搜索插件）
- [***注意***] 在建议选项卡中，绿色复选框表示插件已启用，红色未选中框表示插件已禁用

### 5. 用一个命令更新 Obsidian 插件

- 打开命令面板并找到命令
![command 6](https://cdn.pkmer.cn/covers/personal-assistant_2_6.png!pkmer)
- 触发命令以更新插件
- 查看在右上角显示的更新结果

## 归属

- 感谢项目 [obsidian-advanced-new-file](https://github.com/vanadium23/obsidian-advanced-new-file) 提供的 `createNote` 和 `createDirectory` 代码
- 感谢项目 [obsidian-callout-manager](https://github.com/eth-p/obsidian-callout-manager) 提供的 `class CalloutPreviewComponent` 和 `color.ts`

## 联系方式

如果您有任何反馈或问题，请随时通过 [GitHub issues](https://github.com/edonyzpc/personal-assistant/issues) 联系我们。
