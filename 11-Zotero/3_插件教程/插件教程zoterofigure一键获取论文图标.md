---
uid: 20240115151802
title: 插件教程|一键获取 zotero 论文图表，为科研助力
tags: [Zotero,Zotero插件]
description: 插件教程|一键获取 zotero 论文图表，为科研助力
author: wang
type: other
draft: false
editable: false
modified: 20240115154052
---

# 插件教程|一键获取 zotero 论文图表，为科研助力

> 本期介绍 MuiseDestiny 大佬的又一精品插件 **zotero-figure**
> 插件的作用是实现 当前论文**图表的一键抓取和添加笔记**
> 虽然使用人数相对较少，但功能丝毫不差

## 效果展示

- 图表截取
- ![h3f11.png](https://cdn.pkmer.cn/images/h3f11.png!pkmer)
- 笔记预览（结合 zotero-style 插件）
- ![q7mea.png](https://cdn.pkmer.cn/images/q7mea.png!pkmer)

## 插件安装

- 安装网址： MuiseDestiny/zotero-figure (<https://github.com/MuiseDestiny/zotero-figure/releases>)
	- 下载 xpi 文件（图示为 zotero7 版本）
	- ![90wm4.png](https://cdn.pkmer.cn/images/90wm4.png!pkmer)
	- 注意：**github 部分区域需要稳定网络访问**
	- 在线访问： [Zotero 插件集市 (pkmer.cn)](https://pkmer.cn/products/zotero/zoteroMarket/)
- 进入 zotero- 工具 - 附加组件 -**Install Add-on From Files**- 选择下载的 xpi 文件进行安装

## 插件配置

### 下载 pdffigures2.jar 组件，移至数据文件夹

- 如何下载 pdffigures2.jar
	- ![maqlo.png](https://cdn.pkmer.cn/images/maqlo.png!pkmer)
- 将 pdffigures2.jar 移动至数据文件夹
	- 将第一步获取的 pdffigures2.jar 文件移动到数据文件夹内
	- ![cji3q.png](https://cdn.pkmer.cn/images/cji3q.png!pkmer)

### 安装 java 应用并配置到设置中

- 安装网址：Java Archive Downloads - Java SE 18 (oracle.com)(<https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html>)
- 安装后**获取 java.exe 启动路径**
	- 路径参考
	- ![2nsx0.png](https://cdn.pkmer.cn/images/2nsx0.png!pkmer)
- 将 java.exe 添加到 zotero 编辑器的 path.java 项中
	- ![kz818.png](https://cdn.pkmer.cn/images/kz818.png!pkmer)

### 撒花，配置好啦，大家可以享受 zotero-figure 带来的便捷

- 单击图片，复制图片到剪贴板，配合 [Snipaste](https://www.snipaste.com/) 粘贴到屏幕
- 双击图片，独立窗口预览，需要安装 [Zotero Better Notes](https://github.com/windingwind/zotero-better-notes) 插件
- 单击图注跳转到 PDF 对应图位置

## 其它注意

- 注意：图片获取根据论文质量有关，部分论文**无法获取完全**，可尝试重新获取
- 插件图片调用其它项目，故插件本身很难修 bug，**一般更新也比较少**
- 所以如果部分论文图标无法完全获取放过就好