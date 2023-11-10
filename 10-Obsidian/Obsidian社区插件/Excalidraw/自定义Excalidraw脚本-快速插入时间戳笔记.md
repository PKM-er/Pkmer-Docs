---
uid: 20231110155136
title: 自定义 Excalidraw 脚本 - 快速插入时间戳笔记
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20231110155159
---

# 自定义 Excalidraw 脚本 - 快速插入时间戳笔记

## 脚本设置

![Pasted image 20231110152901](https://cdn.pkmer.cn/images/Pasted%20image%2020231110152901.png!pkmer)

## 快速添加时间戳笔记

![Pasted image 20231110153740](https://cdn.pkmer.cn/images/Pasted%20image%2020231110153740.png!pkmer)

> 按时间戳形式命名，利用 quickaddApi.date.now("YYYY-MM-DD") 等命名建立的，根据需求来设置

![Pasted image 20231110153706](https://cdn.pkmer.cn/images/Pasted%20image%2020231110153706.png!pkmer)

配置好路径后，可以设置笔记名

输入框中添加笔记别名为 `20231110153740_别名.md`，不输入则为：`20231110153740.md`

## 不同模式下的嵌入形式

![Pasted image 20231110154454](https://cdn.pkmer.cn/images/Pasted%20image%2020231110154454.png!pkmer)

Card(图标类型卡片)、Frame(嵌入式 Frame)、Link(笔记链接)、Image(SVG 图片)

> Card 模式下会嵌入图标 (配置路径下的图标)
> 无：ESC 或回车退出，其他类型则直接创建

### 设置 Card 模式下图标

![Pasted image 20231110154422](https://cdn.pkmer.cn/images/Pasted%20image%2020231110154422.png!pkmer)

## 快速删除本地笔记

选择或框选笔记后，再次运行脚本就可以删除本地笔记和画板元素了。
