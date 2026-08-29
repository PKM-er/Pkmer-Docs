---
uid: 1786577079453006
title: 'Obsidian 插件：Lazy Cursor'
tags: ['移动端优化', '界面优化', '效率工具', '编辑工具', 'obsidian插件']
description: '打开笔记时，在你点击编辑器之前，光标会自动隐藏。支持移动端使用。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lazy Cursor

> [!Note] 插件名片
> - 插件名称：Lazy Cursor
> - 插件作者：AQiong 阿琼
> - 插件说明：打开笔记时，在你点击编辑器之前，光标会自动隐藏。支持移动端使用。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['移动端优化', '界面优化', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/agarcabin/obsidian-lazy-cursor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lazy-cursor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/agarcabin/obsidian-lazy-cursor/master/README.md)



## 概述

### Lazy Cursor 插件总结
1. **主要功能**：打开 Obsidian 笔记时，光标自动失焦，点击编辑器后可开始输入。
2. **适用场景**：适用于使用 Obsidian 进行笔记记录的场景，尤其在移动端使用时优势明显。
3. **核心特色**：
    - 相比 cursor - goaway 插件，失焦策略更优，仅单次 `rAF` 后执行 `blur()`，打开后 CPU 零开销，无键盘监听、内存泄漏风险和内部 API 访问，支持所有文件，代码量少，原生支持移动端。
    - 相比原版，支持移动端，用 `requestAnimationFrame` 包裹确保 DOM 就绪。
4. **使用建议**：可手动安装，下载 `main.js` 和 `manifest.json` 放入 `<vault>/.obsidian/plugins/lazy-cursor/` 后在设置中启用；也可从源码构建，依次执行 `npm ci`、`npm run build`、`npm run verify` 命令。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


