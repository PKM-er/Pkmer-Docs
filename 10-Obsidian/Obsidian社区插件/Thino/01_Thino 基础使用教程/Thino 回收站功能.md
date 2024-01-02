---
uid: 20231109234559
title: Thino 回收站功能
tags: []
description: Thino 回收站功能
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20231215231311
---

# Thino 回收站功能

Thino 自带了回收站功能，当你使用回收站功能的时候，会在原文加上 `[deleted:true]` 的标记，该标记会作为 Thino 索引其时判断为存在于回收站的唯一标准，当其在 CANVAS 或者多文件时，会在元数据中插入 `deleted:true`。

你可以随时到回收站中彻底删除某个 Thino，相应的，它也会从源页面彻底删除，这个操作不会有任何的恢复余地。

当你点击删除时，会让你二次确认，同时你也可以随时到 Thino 回收站中恢复某个 Thino，==注意，如果你是在归档中删除某个 Thino，那么它会被恢复至回收站中==。