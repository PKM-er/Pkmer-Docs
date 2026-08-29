---
uid: 1786577083126005
title: 'Obsidian 插件：TeXcore'
tags: ['编辑工具', '图表与可视化', '学习与教育', '白板学术与科研', 'obsidian插件']
description: '为Obsidian.md实现自动公式编号、Tex图表渲染等功能。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TeXcore

> [!Note] 插件名片
> - 插件名称：TeXcore
> - 插件作者：Jovi Koikkara
> - 插件说明：为Obsidian.md实现自动公式编号、Tex图表渲染等功能。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编辑工具', '图表与可视化', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/youfoundjk/TeXcore)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?texcore)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/youfoundjk/TeXcore/master/README.md)



## 概述

### TeXcore插件总结
1. **主要功能**：为Obsidian提供自动公式编号与引用、异步编译TikZ代码块生成图表、支持高度可配置的单笔记或批量文件夹PDF导出。
2. **适用场景**：适用于在Obsidian中进行科学写作、学习的场景，能将笔记库打造成科学起草和学习的生态系统。
3. **核心特色**：
    - 公式编号可自定义ID，通过`\eqref`提供基于搜索的模糊自动补全建议。
    - 采用Web Worker异步编译TikZ代码块，按需下载并缓存资源，轻量无冗余。
    - 利用WebAssembly引擎，无需安装本地LaTeX发行版即可渲染图表，保证UI流畅。
4. **使用建议**：初次使用TikZ图表时，插件会从CDN下载相关资源并本地缓存。若需详细操作指导，可查阅[完整文档与指南](https://youfoundjk.github.io/TeXcore/) 。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


