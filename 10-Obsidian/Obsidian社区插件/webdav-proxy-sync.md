---
uid: 1791709371028000
title: 'Obsidian 插件：WebDAV Proxy Sync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Bidirectional WebDAV sync with HTTP, HTTPS and SOCKS proxy support. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WebDAV Proxy Sync

> [!Note] 插件名片
> - 插件名称：WebDAV Proxy Sync
> - 插件作者：liushm
> - 插件说明：Bidirectional WebDAV sync with HTTP, HTTPS and SOCKS proxy support. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/liushm/obsidian-webdav-proxy-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?webdav-proxy-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/liushm/obsidian-webdav-proxy-sync/master/README.md)



## 概述

**WebDAV Proxy Sync** 是一款跨平台 Obsidian 同步插件，核心功能是实现笔记与附件的**双向同步**。它特别适用于需要通过 HTTP、HTTPS 或 SOCKS5 代理访问 WebDAV 服务器的用户，尤其是国内网络环境下需借助代理进行数据备份或同步的场景。

其核心特色在于桌面端对多种代理协议的深度支持，同时兼容移动端系统网络。插件具备高可靠性，支持并发下载、指数退避重试及冲突副本保留机制，能有效处理 OpenList 等存储驱动的特殊错误。此外，它提供手动、启动及定时同步模式，并默认不传播删除操作，极大降低了误删风险。

使用建议：鉴于该插件目前为 Beta 版本，**首次同步前务必备份整个仓库**。配置时请准确填写 WebDAV URL、凭据及远程文件夹路径，并根据网络状况设置合适的代理地址。建议开启排除规则以优化同步效率，并定期检查诊断日志以确保同步稳定。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


