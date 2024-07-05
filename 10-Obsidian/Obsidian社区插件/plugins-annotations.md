---
uid: 2024070516091774
title: Obsidian 插件：Plugins Annotations
tags: ['编辑工具', '自定义命令', '效率工具', 'obsidian插件']
description: 允许为每个已安装的插件添加个人评论。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plugins Annotations

> [!Note] 插件名片
> - 插件名称：Plugins Annotations
> - 插件作者：Andrea Alberti
> - 插件说明：允许为每个已安装的插件添加个人评论。
> - 插件分类：['编辑工具', '自定义命令', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alberti42/obsidian-plugins-annotations)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugins-annotations)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alberti42/obsidian-plugins-annotations/main/README.md)



## 概述

Obsidian插件Annotations是Obsidian的一个插件，允许用户为每个已安装的插件添加个人注释。这对于跟踪为什么安装某些插件以及它们的具体用途非常有用。

该插件的主要功能包括：
- 在设置面板中为任何已安装的插件添加个人注释。
- 注释会被持久保存，并可随时进行编辑。
- 注释会直接显示在插件信息下方。

安装步骤如下：
1. 从[Releases](https://github.com/alberti42/obsidian-plugins-annotations/releases)页面下载最新版本。
2. 解压下载的文件，并将以下文件复制到Obsidian插件文件夹`<vault>/.obsidian/plugins/plugins-annotations`中：
   - `main.js`
   - `styles.css`
   - `manifest.json`
3. 在"Community plugins"设置面板中启用该插件。

使用方法如下：
1. 打开"Community plugins"设置面板。
2. 您将在每个已安装插件下方看到一个文本区域，您可以在其中添加个人注释。
3. 注释会自动保存，并在您打开设置面板时显示出来。

插件的截图如下：
![设置面板的截图，显示用户添加的插件注释](docs/images/screenshot.jpg)

如果您想为该插件的开发做出贡献，请按照以下步骤进行：
1. 在GitHub上fork该仓库。
2. 在本地机器上的某个位置克隆您fork的仓库：
   ```sh
   git clone https://github.com/your-username/obsidian-plugins-annotations.git
   ```
3. 进入克隆的仓库目录：
   ```sh
   cd obsidian-plugins-annotations
   ```
4. 安装依赖项：
   ```sh
   npm install
   ```
5. 构建插件：
   ```sh
   npm run build
   ```
6. 在Obsidian插件目录中创建一个名为`plugins-annotations`的文件夹：
   ```sh
   mkdir -p <vault>/.obsidian/plugins/plugins-annotations
   ```
7. 将编译后的文件从`dist`文件夹复制或软链接到`plugins-annotations`文件夹中：
   ```sh
   # 复制文件
   cp -r dist/* <vault>/.obsidian/plugins/plugins-annotations/
   
   # 或者创建软链接（在基于Unix的系统上）
   ln -s <path-to-cloned-repo>/dist <vault>/.obsidian/plugins/plugins-annotations
   ```
8. 在Obsidian中启用该插件并开始开发！

如果您愿意支持该插件的开发，可以通过捐赠来表达您的感谢。您可以在[这里](https://buymeacoffee.com/alberti)找到捐赠方式。

该插件的作者是Andrea Alberti，您可以在[alberti42的GitHub个人资料](https://github.com/alberti42)上找到更多信息。如果您想为该插件的开发做出贡献或报告任何问题，请访问[GitHub仓库](https://github.com/alberti42/obsidian-plugins-annotations/issues)。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



