---
uid: 20230803204113
title: Obsidian 插件：【Readme】Hide Folders
tags: ['obsidian插件', 'readme']
description: 根据配置的名称，快速切换文件导航器中特定文件夹的可见性。对于隐藏附件文件夹非常有用。
author: JonasDoesThings
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Hide Folders

> [!Note] 插件名片
> - 插件名称：Hide Folders
> - 插件作者：JonasDoesThings
> - 插件说明：根据配置的名称，快速切换文件导航器中特定文件夹的可见性。对于隐藏附件文件夹非常有用。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/JonasDoesThings/obsidian-hide-folders)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hide-folders)

## 概述

根据配置的名称，快速切换文件导航器中特定文件夹的可见性。对于隐藏附件文件夹非常有用。

![Hide Folders](https://cdn.pkmer.cn/covers/hide-folders.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/JonasDoesThings/obsidian-hide-folders/master/README.md)
> 

---

## Readme(翻译）

下面是 [[hide-folders]] 插件的自述翻译


# obsidian-hide-folders

一个简单的插件，用于隐藏已配置的文件夹，并具有切换它们可见性的功能。
当您不需要它们时，可以用于隐藏附件文件夹。

## 配置
在设置菜单中输入要隐藏的文件夹名称列表，**每行一个文件夹**。

![Obsidian.md中插件设置屏幕截图](./docs/assets/settings-screenshot.png)

您还可以使用侧边栏按钮快速切换可见性，而无需进入设置菜单：
![Obsidian.md中插件的侧边栏按钮截图](docs/assets/sidebar-screenshot.png)

还支持使用命令面板：
![Obsidian.md中插件的命令面板操作截图](docs/assets/command-palette-screenshot.png)

## 开发

### 设置
- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run dev` 以启动编译并进入监视模式。

### 构建
- 运行 `npm run build` 来进行一次性构建项目，该构建会生成用于手动安装插件所需的文件。

### 手动安装插件
- 将`dist/`文件夹中输出的`main.js`和`manifest.json`复制到您的Vault文件夹下的`VaultFolder/.obsidian/plugins/obsidian-hide-folders/`目录中。  
-> 注意！您不能直接复制原始的*main.**ts***文件。您需要先运行构建，然后再复制生成的*main.**js***文件。

## 许可证
MIT许可证，参见[LICENSE.md](./LICENSE.md)。



