---
uid: 1791709365635000
title: 'Obsidian 插件：BiliNote Sync'
tags: ['第三方工具集成', '图片与PDF', '文件管理', '效率工具', 'obsidian插件']
description: 'Import selected local BiliNote notes and screenshots, with optional automatic import and shared image storage. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：BiliNote Sync

> [!Note] 插件名片
> - 插件名称：BiliNote Sync
> - 插件作者：Rui-0221
> - 插件说明：Import selected local BiliNote notes and screenshots, with optional automatic import and shared image storage. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rui-0221/bilinote-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bilinote-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rui-0221/bilinote-sync/master/README.md)



## 概述

**BiliNote Sync** 是一款专为 Obsidian 桌面端设计的导入插件，主要功能是将本地 BiliNote 生成的笔记及截图同步至 Obsidian 库中。

**适用场景**：适用于已部署本地 BiliNote（测试版为 2.4.5）的用户，需使用 Obsidian 1.13.7+ 桌面版。目前主要在 Windows 平台测试，不支持移动端及纯远程服务器环境。

**核心特色**：
1. **选择性导入**：通过命令面板或设置界面，手动勾选需要导入的笔记，避免全量覆盖。
2. **数据保护**：采用追加模式，若源文件变更则生成新文件，绝不覆盖用户已编辑的现有笔记。
3. **完整性校验**：若截图缺失，将延迟整个导入过程直至资源齐全，确保笔记完整性。
4. **本地化支持**：界面为中文，命令前缀为“BiliNote Sync”，图片采用相对链接存储。

**使用建议**：
1. 先在设置中正确配置 BiliNote 的安装目录（需包含 `note_results` 文件夹）。
2. 在 BiliNote 中成功生成笔记后，通过命令面板执行“选择导入 BiliNote 笔记”。
3. 仔细勾选目标笔记后点击导入，默认保存至 `BiliNote笔记` 文件夹。
4. 注意该插件为独立第三方工具，非官方产品，且不涉及视频转录或 AI 调用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


