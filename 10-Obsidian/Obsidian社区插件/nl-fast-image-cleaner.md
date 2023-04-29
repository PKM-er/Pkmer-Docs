---
uid: 20230329145808
title: nl-fast-image-cleaner
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
---

# nl-fast-image-cleaner

## 概述

这个插件可以允许你快速的删除文档中的图片附件文件以及引用链接

1. 插件演示视频：<https://www.bilibili.com/video/BV1U8411T7VH/?vd_source=bc02b194f06ee6c081a8d33ad7b3824d>
2. 插件下载链接：
    1. Github: <https://github.com/martinniee/Obsidian-fast-image-cleaner>
    2. Gitee: <https://gitee.com/martinniee/obsidian-fast-image-cleaner>
3. 插件介绍：
    1. 删除图片附件文件及其引用链接
    2. 当同一个图片被引用多次（包含下面给出的两种情况），则会弹出提示窗口，不会直接删除，避免图片被错误删除。弹出窗口有当前引用图片的文档和其他文档引用该图片的文档路径信息，下方有 close 按钮和 remove link 按钮，点击 remove link 按钮可以继续移除当前文档中的图片引用链接
        1. 情况 1：在用一个文档引用同一个多次
        2. 情况 2：在多个文档同时引用同一个图片
    3. 支持 markdown 和 wiki 链接风格的链接
    4. 支持 三种不同格式的内部链接类型 （详情）
        1. 尽可能简短的形式
        2. 基于当前笔记的相对路径
        3. 基于仓库根目录的绝对路径
    5. 支持的图片类型：jpg, jpeg, png, gif, svg, bmp
    6. 支持设置图片删除后处理方式：① 移动到系统回收站 ； ② 移动到 obsidian trash ; ③ 永久删除