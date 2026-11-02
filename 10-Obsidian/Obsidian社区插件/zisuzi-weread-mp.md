---
uid: 1793625624989000
title: "Obsidian 插件：Zisuzi-Weread-MP"
tags: ["第三方工具集成", "文件管理", "自动化与AI", "效率工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Zisuzi-Weread-MP

> [!Note] 插件名片
> - 插件名称：Zisuzi-Weread-MP
> - 插件作者：紫苏子ACG
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pixelxzen/Zisuzi-Weread-MP)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zisuzi-weread-mp)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pixelxzen/Zisuzi-Weread-MP/master/README.md)



## 概述

Zisuzi-Weread-MP 旨在解决微信读书中订阅公众号文章“读完即散”、链接易失效的痛点。该插件的核心功能是自动抓取你书架里已订阅的公众号更新，将每篇文章的正文、图片及音视频完整归档为本地 Markdown 笔记。它通过一次扫码登录即可维持会话，无需手动复制 Cookie，且所有数据均直连你的微信读书账号，不经过任何第三方服务器中转，确保隐私安全。

典型使用场景包括日常自动留存与历史文章批量整理。例如，你可以设定插件每 4 小时轮询一次，自动将新发布的深度长文连同高清图片存入 Obsidian，避免手动复制时遗漏资源；或者当你想回顾某个行业大 V 过去半年的观点时，利用“单号全量归档”功能，从新到旧整批抓取历史文章，即使原链接失效，你手中的笔记依然完整可用。

相比同类工具，该插件的特色在于对私有接口的精细化风控与本地化 AI 增强。它内置了保守的请求节奏、每日预算及指数退避机制，有效防止因过度请求导致账号被限流。此外，插件支持接入任意 OpenAI 兼容端点或本地 CLI Agent，可对归档文章进行摘要、金句提炼或评论生成，且这些 AI 处理默认关闭，需显式开启，兼顾了自动化效率与数据主权。

使用前需注意，该插件仅支持桌面端，且依赖微信读书的私有接口，存在被限流的风险。若账号触发风控（如显示琥珀色状态点），请勿重新扫码，而应通过手机 App 验证或等待冷却。它不适合需要实时抓取、高频监控或希望完全脱离微信读书生态的用户，也不适用于移动端同步需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


