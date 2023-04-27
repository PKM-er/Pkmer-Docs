---
uid: 20230329145808
title: Obsidian 插件：Weread
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230427191024
public: yes
---

# Obsidian 插件：Weread

## 概述

Obsidian 微信读书插件是一个社区插件，用来同步微信读书中书籍 `元信息`、`高亮标注`，`划线感想`、`书评` 等，并将这些信息转换为 markdown 格式保存到 Obsidian 的文件夹中，初次使用，如果笔记数量较多，更新会比较慢，后面再去更新的时候只会更新 `划线数量` 或者 `笔记数量` 有变化的书籍，一般速度很快。

## 功能

- 同步书籍元数据例如：书籍封面，作者、出版社、ISBN，出版时间等
- 同步微信读书的高亮划线
- 读书笔记分为 `划线笔记`，`页面笔记`， `章节笔记`，`书籍书评`
- 支持微信扫码登录，理论上可以和浏览器一样保持长时间不掉线。
- 校验 Cookie 有效期自动刷新 Cookie
- 自定义笔记生成模板 template
- 文件名支持多种格式设置
- 自定义 FrontMatter，可在头部 yaml 文件中增加自己需要的字段，比如标签，阅读状态等
- 公众号划线和笔记归类同步
- 支持移动端同步，可以在手机和平板上使用本插件
- 支持 Daily Notes,将当日读书笔记同步至 Daily Notes 中，已经在 [0.4.0](https://github.com/zhaohongxuan/obsidian-weread-plugin/releases/tag/0.4.0) 中支持
- 同步热门划线到笔记中（TBD）

## 使用

参考 [[Obsidian 与微信读书]]
