---
uid: 1786577078505000
title: 'Obsidian 插件：Hexo Send'
tags: ['第三方工具集成', '自动化与AI', '发布工具', '效率工具', 'obsidian插件']
description: '为Hexo准备Obsidian笔记，创建本地提交，确认后再推送。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hexo Send

> [!Note] 插件名片
> - 插件名称：Hexo Send
> - 插件作者：BeckChan
> - 插件说明：为Hexo准备Obsidian笔记，创建本地提交，确认后再推送。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '自动化与AI', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fountainchan/obsidian-hexo-send)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hexo-send)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fountainchan/obsidian-hexo-send/master/README.md)



## 概述

### Hexo Send 插件总结
1. **主要功能**：将 Obsidian 中选定的 Markdown 文件、文件夹或多文件选择预发布到本地 Hexo 仓库，组织图片、验证生成的站点并创建一个本地 Git 提交，需手动确认后才会推送。
2. **适用场景**：适用于在 Obsidian 中写作，希望将文章发布到 Hexo 博客的用户，可减少准备文章发布的重复工作。
3. **核心特色**：支持多种文件选择方式预发布；可提前确认分类、编辑标签等元数据；自动复制本地图片并填充封面和置顶图片元数据；能检测 Hexo、Node.js 等环境；可选择通过 OpenAI 兼容端点获取元数据建议；进行两次 Hexo 验证，仅暂存计划的文章和图片路径；成功后显示“已提交，未推送”，保障推送安全性。
4. **使用建议**：需使用桌面版 Obsidian 1.13.0 及以上，有已安装依赖的本地 Hexo Git 仓库，本地有 Hexo CLI 和配置好的 `hexo - abbrlink` 包，系统有 Node.js 和 Git。若本地 CLI 缺失，需手动安装仓库依赖。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


