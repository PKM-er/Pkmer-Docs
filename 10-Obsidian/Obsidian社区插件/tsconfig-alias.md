---
uid: 1786577083427005
title: 'Obsidian 插件：Tsconfig Alias Image Resolver'
tags: ['编程与脚本', '图片与PDF', '第三方工具集成', '效率工具', 'obsidian插件']
description: '读取 `tsconfig.json` 里的 `compilerOptions.paths` 配置，实时解析 `@/…` 格式的图片路径，这样图片就能在 Obsidian 里正常显示啦。——这款插件还没经过 Obsidian 官方人员的人工审核哦。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tsconfig Alias Image Resolver

> [!Note] 插件名片
> - 插件名称：Tsconfig Alias Image Resolver
> - 插件作者：CMSZ
> - 插件说明：读取 `tsconfig.json` 里的 `compilerOptions.paths` 配置，实时解析 `@/…` 格式的图片路径，这样图片就能在 Obsidian 里正常显示啦。——这款插件还没经过 Obsidian 官方人员的人工审核哦。
> - 插件分类：['编程与脚本', '图片与PDF', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cmsz001/obsidian-tsconfig-alias)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tsconfig-alias)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cmsz001/obsidian-tsconfig-alias/master/README.md)



## 概述

### Tsconfig Alias Image Resolver插件总结
1. **主要功能**：实时解析`tsconfig.json`里`compilerOptions.paths`的`@/…`样式路径别名图片引用，让图片在Obsidian阅读视图和实时预览中正常显示，且不修改磁盘上的笔记文件。
2. **适用场景**：适用于Astro、Vite项目（如Astro Paper），这类项目使用`@`别名引用图片，而Obsidian无法识别该别名，导致图片显示“文件未找到”。
3. **核心特色**：读取库根目录下`tsconfig.json`的路径配置；实时重写渲染的`<img>`元素和Obsidian的`internal - embed`占位符；仅在渲染层处理，不修改磁盘笔记；`tsconfig.json`变化时自动重载，也有手动重载命令；尝试将Obsidian无法解析的非别名相对路径作为库根路径处理。
4. **使用建议**：需Obsidian v1.0+版本且库根目录有含`compilerOptions.paths`的`tsconfig.json`。按步骤构建插件，复制相关文件到指定目录，在社区插件中启用（必要时禁用受限模式）。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


