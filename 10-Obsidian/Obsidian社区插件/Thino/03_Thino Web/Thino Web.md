---
uid: 20240524093802
title: Thino Web
tags: [[Obsidian, Obsidian插件, Thino, Thino web]]
description: Thino Web 简易使用说明
author: Bon,PKMer,OS
type: other
draft: false
editable: false
modified: 20240524095112
---

# Thino Web

Thino Web 的使用大体于 Thino 本地版趋同，地址： <https://thino.pkmer.cn>

## Thino 为什么会有独立 Web 版本

- 考虑在本地插件版本内测和公测期间，很多用户的反馈，反馈独立启动 Obsidian 作为宿主，启动速度过慢，希望更加轻便
- 考虑了有些用户可能会脱离 Obsidian，使用其他笔记软件，Web 版能更好的内嵌入其他软件
- 考虑了 Web 在你更换手机，或者使用临时设备时候更加方便

## 设计理念

1. 趋同：尽可能在功能边界和使用上保持两个不同版本的使用
2. 不同：受制于端和 Web 是两种截然不同载体，可能在技术实现层面，我们采用了不同方式
3. 尝试：面对一些本地版尚不成熟的体验，我们可能不会选择让 Web 版第一时间就去跟进，或者做成一样，反而会等待更多用户反馈和测试，再做决定

## 实现

1. 代码层面 Web 版采用 usememos 的项目的部分代码，并得到了 usememos 项目组的授权。另 PKMer 也是 usememos 的捐助者
2. 对于编辑器、渲染器以及用户数据存储，写入等核心内容，包括 Thino 才有的体验，都是由 PKMer 以及联合作者们共同完成的，此点已经和 usememos 产生代码层的分离

## 使用

1. 基本上所有功能都跟本地版，我们做了一致操作体验处理
2. 个别计数规则和展示排版样式可能略有不同，包括一些美化的元素
3. 你完全可以参考 Thino 本地版一些使用体验，来使用 Web 版