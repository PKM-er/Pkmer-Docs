---
uid: 1786577080888001
title: 'Obsidian 插件：New Tab Here'
tags: ['界面优化', '快捷键', '自定义命令', '效率工具', 'obsidian插件']
description: '通过命令面板或者你设置的快捷键打开新标签页时，新标签页会直接显示在当前活动标签页旁边，而不是显示在标签栏的末尾。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：New Tab Here

> [!Note] 插件名片
> - 插件名称：New Tab Here
> - 插件作者：Ash RuDral
> - 插件说明：通过命令面板或者你设置的快捷键打开新标签页时，新标签页会直接显示在当前活动标签页旁边，而不是显示在标签栏的末尾。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['界面优化', '快捷键', '自定义命令', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ashrudral/new-tab-here)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?new-tab-here)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ashrudral/new-tab-here/master/README.md)



## 概述

### New Tab Here 插件总结
1. **主要功能**：让通过“+”按钮、命令面板或自定义热键打开的新标签页，直接在活动标签页旁边打开，而非标签栏末尾。
2. **适用场景**：适用于在 Obsidian 中频繁打开新标签页，希望新标签页按操作逻辑排列，方便查找和管理的用户。
3. **核心特色**：有两条独立拦截路径确保功能稳定。一是命令补丁，覆盖命令面板、功能区“+”按钮等调用“新建标签页”命令的情况；二是热键拦截，在 Obsidian 自身按键处理前触发，能读取用户实际配置的热键。两条路径调用相同的放置逻辑，利用 Obsidian 公开 API 插入新标签页。
4. **使用建议**：安装时，在保险库的 `.obsidian/plugins/` 目录下创建 `new-tab-here` 文件夹，将 `manifest.json` 和 `main.js` 复制进去，在 Obsidian 设置中开启该插件。无需构建步骤，`main.js` 可被直接加载。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


