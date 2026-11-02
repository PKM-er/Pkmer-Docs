---
uid: 1793625606202000
title: "Obsidian 插件：Atmos"
tags: ["地图与位置", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Search for a location and insert current weather into your note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Atmos

> [!Note] 插件名片
> - 插件名称：Atmos
> - 插件作者：Alben Lumenix
> - 插件说明：Search for a location and insert current weather into your note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['地图与位置', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alben-lumenix/obsidian-atmos)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?atmos)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alben-lumenix/obsidian-atmos/master/README.md)



## 概述

Atmos 是一款专为 Obsidian 设计的天气查询插件，核心功能是将指定地点的实时天气数据以 Markdown 格式插入到笔记光标处。它通过调用和风天气（QWeather）API，获取当前天气状况、温度，并在 API 支持时补充体感温度和湿度信息。插件界面及生成的天气文本均为中文，旨在帮助用户快速在文档中记录或引用特定地点的气象数据，无需手动复制粘贴网页内容。

典型使用场景包括旅行日志记录或户外活动策划。例如，当你计划前往北京出差时，可以在笔记中搜索“北京”，选择对应城市后点击插入，笔记中便会立即出现当前的天气摘要。另一个场景是记录特定坐标的气象数据，你可以直接输入经纬度并保存，随后在需要时一键插入该地点的实时天气，方便对比不同地点的气候差异或记录特定时刻的环境状态。

相比其他天气插件，Atmos 的特色在于其轻量级和定制化能力。它允许用户配置专属的 API Host 和 Key，确保数据请求的稳定性与合规性。插件仅支持中国大陆地区的城市搜索，但允许手动输入全球任意经纬度，这为记录海外特定地点提供了灵活性。此外，它严格遵循隐私原则，仅发送必要的坐标和搜索词，不会上传笔记内容，且生成的文本包含来源归属，适合对数据透明度有要求的用户。

使用前需注意，该插件目前仅支持手动搜索和插入，不具备自动定位、定时更新或天气预报功能，不适合需要自动化气象监控的用户。API Key 以明文形式存储在本地配置文件中，若使用 Vault 同步功能，请务必避免共享或提交该文件至代码仓库。此外，插件尚未在移动端验证，建议主要在桌面端使用，且需确保网络能正常访问配置的和风天气 API 域名。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


