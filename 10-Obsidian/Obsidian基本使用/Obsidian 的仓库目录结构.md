---
uid: 20240429173620
title: Obsidian 的仓库目录结构
tags: []
description: 
author: OS
type: other
draft: false
editable: false
modified: 20240429173718
---

# Obsidian 的仓库目录结构

如果你在系统的资源管理器中，打开 Obsidian 的库

除了你平时放的笔记，还会发现一个.obsidian 的文件夹

- .trash
- .obsidian
	- plugins（文件夹）
	- snippests（文件夹）
	- themes（文件夹）
当然还有很多文件，但是当前的版本下，你最需要认识这三个文件夹。

## .trash

如果在删除笔记设置中，开启了移至软件回收站，那么你删除的笔记会存放在这里。详见 [[笔记删除文件]]

## plugins

存放了你安装的所有插件，注意这里的插件特指社区插件，核心插件不在这里。

## themes

存放了你所有 [[01、Obsidian 的主题]]

## snippests

存放你所有的样式修改片段，社区或者一些小的样式修改，或别人好看的样式，是通过这里实现的。