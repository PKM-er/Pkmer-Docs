---
uid: 1786577083126003
title: 'Obsidian 插件：Termux Terminal'
tags: ['移动端优化', '第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
description: '在安卓系统的Obsidian里有一个真正可互动的Termux终端。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Termux Terminal

> [!Note] 插件名片
> - 插件名称：Termux Terminal
> - 插件作者：Harry Lee
> - 插件说明：在安卓系统的Obsidian里有一个真正可互动的Termux终端。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['移动端优化', '第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/glaysia/termux-terminal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?termux-terminal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/glaysia/termux-terminal/master/README.md)



## 概述

### Termux Terminal插件总结
1. **主要功能**：在安卓版Obsidian内使用真正的原生Termux shell，在Obsidian标签页渲染终端，由本地Rust桥管理PTY、shell和进程生命周期。
2. **适用场景**：适用于安卓系统下开启社区插件的Obsidian用户，需搭配aarch64架构的原生Termux及硬件键盘。
3. **核心特色**：
    - 本地设备运行，非SSH客户端、远程shell服务器或代码服务器替代品。
    - 安全性高，桥仅监听127.0.0.1，连接需安装令牌，令牌半年过期，默认不记录终端数据等。
4. **使用建议**：
    - 安装：先在原生Termux运行脚本安装桥，再在Obsidian社区插件中安装本插件，粘贴桥令牌。
    - 启动：每个终端标签开启新的交互式Bash会话，桥管理的Bash仅加载`~/.obsidianrc`，可按需取消注释其中的`source ~/.bashrc`。
    - 运维：可在Termux检查桥服务状态，更新桥后重启。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


