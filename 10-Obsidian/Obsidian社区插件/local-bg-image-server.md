---
uid: 1786577079625007
title: 'Obsidian 插件：Local Background Image Server'
tags: ['样式与美化', '界面优化', '图片与PDF', '效率工具', 'obsidian插件']
description: '本地背景图片服务器——将本地文件夹映射到 HTTP 服务，以解决 Obsidian 壁纸仅支持在线 URL 的限制——此插件尚未经过 Obsidian 官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Background Image Server

> [!Note] 插件名片
> - 插件名称：Local Background Image Server
> - 插件作者：Coldhan258
> - 插件说明：本地背景图片服务器——将本地文件夹映射到 HTTP 服务，以解决 Obsidian 壁纸仅支持在线 URL 的限制——此插件尚未经过 Obsidian 官方人员的手动审核。
> - 插件分类：['样式与美化', '界面优化', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/coldhan258/obsidian-local-bg-image-server)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-bg-image-server)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/coldhan258/obsidian-local-bg-image-server/master/README.md)



## 概述

### 总结
1. **主要功能**：为 Obsidian 桌面端提供本地背景图片服务器功能，将本地文件夹映射为 Web 服务，生成 `http://` 格式 URL，解决 Obsidian 壁纸仅支持线上 URL 的问题。
2. **适用场景**：适用于希望在 Obsidian 中使用本地图片作为壁纸，又受限于其壁纸功能仅支持线上 URL 的用户。
3. **核心特色**：纯本地运行，零网络上传，保护隐私；零额外依赖，使用 Node.js 内置 `http` 模块；即开即用，插件启动自动运行，关闭自动停止；图片预览，设置页可分页展示图片并一键复制 URL；端口冲突自恢复，端口被占时自动递增尝试。
4. **使用建议**：插件会在本地启动 HTTP 服务器（默认 `localhost:8989`），仅本地回环地址运行。默认使用 vault 内 `.bg/` 文件夹，也可在设置中配置绝对路径读取外部文件。安装可通过社区插件市场搜索或使用 BRAT 方法。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


