---
uid: 20240115151806
title: 插件教程 zotero 和 obsidian 如何联动
tags: [Zotero, Zotero插件]
description: 插件教程 zotero 和 obsidian 如何联动
author: wang
type: other
draft: false
editable: false
modified: 20240513000955
---

# 插件教程 zotero 和 obsidian 如何联动

>本期主要介绍如何设置 zotero 和 obsidian 的联动
>将 zotero 的注释笔记导入 ob 库，并实现双链跳转

## 联动效果

### 功能介绍

- 将 zotero 条目**注释导入 obsidian 笔记**，带注释链接及跳转
- 在 zotero 里将有笔**记链接的条目添加彩色标签**
- **从 zotero 直接跳转到 obsidian 对应链接**
- Zotero7 兼容

### 功能展示

![3064o.gif](https://cdn.pkmer.cn/images/3064o.gif!pkmer)

## 插件准备

### zotero 准备

- 安装**zotero-markdb-connect**插件：(<https://github.com/daeh/zotero-markdb-connect>)
- 安装**Better BibTex for Zotero**插件：(<https://github.com/retorquere/zotero-better-bibtex>)

### obsidian 准备

- 安装**Zotero Integration**插件
	- 可直接在官方商店安装
	- 国内安装：[Obsidian 插件集市 (pkmer.cn)](https://pkmer.cn/products/plugin/pluginMarket/)
	- ![ocl1g.png](https://cdn.pkmer.cn/images/ocl1g.png!pkmer)

## 插件配置

### obsidian 配置

#### 配置项

- Note Import Location
	- 设置笔记路径，最好新建一个文件夹专门放 zotero 同步的注释文件
	- ![76m50.png](https://cdn.pkmer.cn/images/76m50.png!pkmer)
- Import Formats
	- 设置**导入笔记的笔记名**
	- 导入**笔记的图片附件路径**
	- ![7hbk4.png](https://cdn.pkmer.cn/images/7hbk4.png!pkmer)
- 设置笔记模板和笔记名模板
	- 笔记的**模板需要自己新建**，并将路径粘贴到 Template File 项里
	- ![9kudb.png](https://cdn.pkmer.cn/images/9kudb.png!pkmer)
	- ![4rbhs.png](https://cdn.pkmer.cn/images/4rbhs.png!pkmer)tg

#### 配置预览

![tga7r.png](https://cdn.pkmer.cn/images/tga7r.png!pkmer)

### zotero 配置

#### 配置项

- 设置同步文件夹路径
	- ![2hbl3.png](https://cdn.pkmer.cn/images/2hbl3.png!pkmer)
- 设置默认的文件过滤器,根据我的修改就好
	- ![v62ea.png](https://cdn.pkmer.cn/images/v62ea.png!pkmer)
- 联动使用 bbtx**的 keyword：citekey**来识别
	- ![uudhb.png](https://cdn.pkmer.cn/images/uudhb.png!pkmer)
- 填写自己的**obsidian 库名**
	- ![nh0g6.png](https://cdn.pkmer.cn/images/nh0g6.png!pkmer)

#### 配置预览

- ![aoefg.png](https://cdn.pkmer.cn/images/aoefg.png!pkmer)

## 联动使用

### 导入 zotero 注释到 obsidian 库

- 在 obsidian 页面点击**crtl+p**，选择导入笔记（这是之前自己自定义的名称）
- 选择需要导入的条目
- ![2wdoo.png](https://cdn.pkmer.cn/images/2wdoo.png!pkmer)

### 在 zotero 中同步标签

- 首次打开 zotero 会**自动同步条目**
- 也可以**手动同步条目**
	- ![t7k5b.png](https://cdn.pkmer.cn/images/t7k5b.png!pkmer)
- 为同步条目的**自动标签添加颜色来辨识**
	- ![4sfra.png](https://cdn.pkmer.cn/images/4sfra.png!pkmer)

### zotero 跳转 obsidian

- 右键条目
- 选择**open note in obsidian 跳转**
	- ![c4r62.png](https://cdn.pkmer.cn/images/c4r62.png!pkmer)

## 其它注意事项

### 为 obsidian 不同颜色的注释添加颜色

- 使用 CSS，并**在 obsidian 启用**。直接将 CSS 移动到图示路径，并启用
	- ![miqld.png](https://cdn.pkmer.cn/images/miqld.png!pkmer)
- CSS 获取。公众号后台回复 "**同步**"，可获取 CSS 文件
- **CSS**的修改
	- ![30892.png](https://cdn.pkmer.cn/images/30892.png!pkmer)

### 将 callout 修改为默认的收缩状态

- 将 callout 的默认修改为**收缩状态**
	- ![d0l41.png](https://cdn.pkmer.cn/images/d0l41.png!pkmer)

### 修改不同注释颜色的 call out 标题

- 将#的十六制颜色换为自己的常用注释颜色
- 修改标题，图示为修改#f9e196 颜色为 Important 标题
![ja31n.png](https://cdn.pkmer.cn/images/ja31n.png!pkmer)
![4samz.png](https://cdn.pkmer.cn/images/4samz.png!pkmer)
