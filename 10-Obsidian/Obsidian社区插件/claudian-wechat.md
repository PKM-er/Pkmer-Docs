---
uid: 1791709366051000
title: 'Obsidian 插件：Claudian WeChat Bridge'
tags: ['第三方工具集成', '自动化与AI', '移动端优化', 'obsidian插件']
description: 'Drive your Obsidian Claudian AI coding agent from WeChat. Chat, send images, switch sessions, run slash commands, and mirror desktop turns to mobile. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claudian WeChat Bridge

> [!Note] 插件名片
> - 插件名称：Claudian WeChat Bridge
> - 插件作者：xsvm
> - 插件说明：Drive your Obsidian Claudian AI coding agent from WeChat. Chat, send images, switch sessions, run slash commands, and mirror desktop turns to mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xsvm/obsidian-claudian-wechat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claudian-wechat)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xsvm/obsidian-claudian-wechat/master/README.md)



## 概述

**1. 主要功能**
该插件通过微信官方 ClawBot 接口，实现从微信远程操控 Obsidian 中的 Claudian AI 编码代理。支持在微信中发送文本和图片、切换会话、执行斜杠命令，并将桌面端 AI 的响应实时同步回微信，实现移动端与桌面端的无缝协作。

**2. 适用场景**
适合需要随时随地处理代码任务或文档编辑的用户。当你离开电脑但急需使用 Obsidian 中的 AI 助手时，可直接通过微信下达指令，无需打开电脑即可获取 AI 反馈或进行简单交互。

**3. 核心特色**
*   **全自动管理**：插件自动检测系统 Python，首次运行自动创建虚拟环境并安装依赖，无需手动配置。
*   **无缝集成**：内置 QR 登录弹窗，自动启动并管理 `relay.py` 子进程，插件禁用或 Obsidian 关闭时自动清理进程。
*   **双向同步**：基于长轮询 HTTP API，确保微信消息与 Obsidian 会话间的实时双向通信。

**4. 使用建议**
*   确保系统已安装 Python 环境。
*   首次使用时，请留意 Obsidian 内弹出的二维码，用微信扫码完成 ClawBot 登录。
*   注意该插件尚未经过 Obsidian 官方人工审查，建议备份数据后再使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


