---
uid: 20240115111138
title: Thino 微信内容发送到 Thino
tags:
  - Obsidian
  - Obsidian插件
  - Thino
  - 同步
  - 微信
description: Thino 微信内容发送到 Thino
author: Bon,PKMer,OS
type: other
draft: false
editable: false
modified: 20240505011252
id: 0ad80ec603ac5a5a
---

# Thino 微信内容发送到 Thino

## 概述

> [!note] 功能信息
> - 此功能在 Thino 2.2 版本上线，之前版本不支持
> - 此功能需要以来 Thino Web 服务

通过关注指定的微信订阅号，将文本消息和图片消息发送到指定服务号

## 效果&特性

![1705291411492.png|650](https://cdn.pkmer.cn/images/1705291411492.png!pkmer)

## 使用

### 激活和绑定

1. 购买 Web 服务
	1. Web 服务包含：未来的 Thino Web 和 同步服务，以及微信同步。
	2. 早鸟购买的用户，在购买的当天，一般会获得同步获得 Thino Web 和 微信同步的内测的权限
	3. 注意：
		1. 23年底已经开始内测，社区在公布同步价格后，不会以任何形式去追讨之前的使用费用
		2. 对于23年底就已经开始免费试用的早鸟用户，这算是一种福利，但社区并无法承诺无论你是什么时候购买，都享受这种长时间的福利
2. 安装激活 Thino Pro：【如果已完成激活，可跳过】
	- [[04_Thino Installation and Pro Activation|Thino 的安装与 Pro 激活]]
3. 激活同步功能：【如果已完成激活，可跳过】
	- 进入 PKMer 个人中心，激活 Thino 同步功能，参见 [[Thino Sync#如何激活同步功能]]
1. 绑定微信，有两种方式
![image.png](https://cdn.pkmer.cn/images/20240322202213.png!pkmer)
- 进入个人中心
	- 方案 1：在个人中心 - > Thino Web 服务 - > 点击 `绑定 Thino 公众号`
	- 并扫描弹出的二维码
	  ![image.png|200](https://cdn.pkmer.cn/images/20240115120729.png!pkmer)
	- 方案 2：绑定 Thino 助手
		- 关注企业微信 Thino 助手

> [!Note] Thino 助手 和 Thino 公众号方式的区别
> - 支持微信内部的转发：Thino 助手支持从微信内直接转发消息和图片到 Thino 本地
> - 转发速度：Thino 助手虽然支持微信转发功能，但是同步速度不如微信公众号及时

> [!Warning] 注意
> - 对于微信同步能力，依赖 Thino Web 服务，目前 Web 服务对早鸟用户是免费试用的
> - PKMer 公布价格后，不要您补交之前是使用费用
> - 同理，请您务必关注您的 Web 服务付费状态

### 微信中使用

- 每条你发送的图片和文本信息，系统会提示你是否保存成功
- 如果遇到没有保存成功的，可以尝试再次发送来解决

> [!Note] 两种方式有何不同
> - 绑定助手方式，使用更丝滑，因为可以直接在日常聊天记录中转发到 thino 助手这个微信号即可，但会有 10s 左右的同步延迟。
> - 绑定公众号方式，更加迅速，虽然无法支持，转发，但是这个方式同步速度几乎是实时的。
> - 以上这些都是基于微信生态限制导致的，并非我们故意为之。

### 微信同步到 Thino 后的存储

- 因为 [[Thino Sync|Thino 同步]] 在 2.2.4 之后引入了日记模式的支持
- 所以现在微信的同步，支持写入到日记和单文件两种模式，具体存储在哪里取决于你在 Thino 设置中选定的同步存储方式