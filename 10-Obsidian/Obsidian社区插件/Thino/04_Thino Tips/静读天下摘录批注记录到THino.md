---
uid: 20240322180345
title: 静读天下摘录批注记录，可联动 Thino
tags: [Obsidian, Obsidian插件, Thino, memos]
description: 静读天下摘录批注记录
author: windilycloud
type: other
draft: false
editable: false
modified: 20240816233543
id: c1adc63734ee621c
---

# 静读天下摘录批注记录，可联动 Thino

## 前提

- 静读天下 APP 专业版
- 已开通配置好 Thino 的同步服务，参考：[[Thino Sync]]

## 记录效果

在静读天下 APP 内的任何划线和批注，都会同步到 Thino 中，无需切换 APP 导入导出。

![andy-mode.gif](https://cdn.pkmer.cn/images/202403221257434.gif)

## 操作步骤

**获取 PKMer token**

[PKMer 个人中心](https://pkmer.cn/products/UserProfile/) 处获取 token：

![image.png](https://cdn.pkmer.cn/images/202403221226008.png!pkmer)

**将 Token 配置到静读天下中**

1. 随意找到一本电子书，找到书签页，进入设置

![image.png](https://cdn.pkmer.cn/images/202403221230023.png!pkmer)

1. 点击设置，会出现一个框，点击自动分享新的高亮和标注到 Readwise 右侧的⚙️，进入设置

![image.png|400](https://cdn.pkmer.cn/images/202403221232310.png!pkmer)

1. 输入复制的 PKMer token 和 Url ，点击确定即可。其中 Url 为 `https://api.pkmer.cn/api/v1/wechatmp/moonreader/highlight`

![image.png|400](https://cdn.pkmer.cn/images/202403221233508.png!pkmer)

至此，配置成功。