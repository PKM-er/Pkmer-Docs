---
uid: 1791709371025000
title: "Obsidian 插件：Web Viewer UA Override"
tags: ['第三方工具集成', '安全与隐私', '效率工具', 'obsidian插件']
description: "Routes Obsidian's web views through a clean Electron session with a real Chrome user agent, so Google and other embedded-browser-hostile sign-ins work. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Web Viewer UA Override

> [!Note] 插件名片
> - 插件名称：Web Viewer UA Override
> - 插件作者：Ian Monroe
> - 插件说明：Routes Obsidian's web views through a clean Electron session with a real Chrome user agent, so Google and other embedded-browser-hostile sign-ins work. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/imonroe/obsidian-webview-ua-override)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?webview-ua-override)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/imonroe/obsidian-webview-ua-override/master/README.md)



## 概述

**1. 主要功能**
该插件通过创建一个干净的 Electron 会话，并注入真实的 Chrome 用户代理（User Agent），解决 Obsidian 内置 Web Viewer 在访问 Google 等服务时因浏览器指纹识别问题导致的登录失败（如 401 错误或“不支持的浏览器”提示）。

**2. 适用场景**
适用于需要在 Obsidian 内直接访问 Google Docs、Gmail 或其他对嵌入式浏览器限制严格的第三方 Web 服务的场景，特别是当标准 Web Viewer 无法完成身份验证时。

**3. 核心特色**
- **精准伪装**：通过重写 HTTP 请求头，移除 Obsidian/Electron 标识，模拟真实 Chrome 浏览器环境。
- **兼容性强**：专门针对 Google 账户登录接口优化，绕过其对非标准浏览器的拦截。
- **轻量集成**：无需外部浏览器，直接在 Obsidian 内部解决兼容性问题。

**4. 使用建议**
- 安装后若仍遇登录问题，建议清除 Obsidian 缓存或重启应用以重置会话。
- 注意该插件主要解决登录认证问题，若网站有复杂的反爬虫机制，效果可能有限。
- 由于插件未经过官方人工审查，建议仅在信任来源的情况下使用，并关注后续版本更新以适配 Obsidian 新版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
