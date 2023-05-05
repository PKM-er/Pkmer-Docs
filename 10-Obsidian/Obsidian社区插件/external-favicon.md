---
uid: 20230505234604
title: Obsidian 插件：External Favicon 为笔记中的网页链接增加网站图标
description: 
author: 
type: other
draft: false
editable: false
modified: 20230506002038
---

# Obsidian 插件：External Favicon 为笔记中的网页链接增加网站图标

## 概述

有时候我们的笔记中会记录、收藏一些网站链接，又或是援引一些文献参考链接。但是这些链接，往往不是以单纯的网址记录，而是以标题 + 链接的形式（`[网页标题](网页链接)`）。只看标题无法快速知道网页所属网站。

有了 Link Favicons 这个插件，你可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标（Favicons）。

> [!Note] 插件名片
> - 插件名称：External Favicon
> - 插件作者：ordidxzero
> - 插件说明：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标。
> - 插件项目地址：[点我跳转](https://github.com/ordidxzero/obsidian-external-favicon)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230505234729.png)

## 使用

- 该插件没有插件设置选项
- 自动检测当前笔记中链接内容，获取网站图标（Favicons）
- 如果网站没有设置网站图标，则会使用默认图标代替
- 支持针对两种格式链接的
	- 链接形式 1：`[Obsidian](https://obsidian.md/)`
	- 链接形式 2：`https://obsidian.md/`
- 网站图标仅被添加到网页链接前方

>[!Tip] 提示
>- 这是一个新插件，若有问题请给予谅解
>- 该插件仅支持阅读模式，实时阅览模式尚存在一点问题

>[!Tip] 提示
>- 类似插件还有：[[link-favicon]]
