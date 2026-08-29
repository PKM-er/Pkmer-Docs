---
uid: 1786577080998003
title: 'Obsidian 插件：NotePic OSS'
tags: ['图片与PDF', '第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
description: '把当前笔记里引用的图片上传到阿里云对象存储服务（OSS），先对图片进行压缩，然后直接重写链接。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NotePic OSS

> [!Note] 插件名片
> - 插件名称：NotePic OSS
> - 插件作者：Luhui Dev
> - 插件说明：把当前笔记里引用的图片上传到阿里云对象存储服务（OSS），先对图片进行压缩，然后直接重写链接。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['图片与PDF', '第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/luhui-dev/NotePic-OSS-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notepic-oss)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/luhui-dev/NotePic-OSS-Obsidian/master/README.md)



## 概述

### NotePic OSS
1. **主要功能**：扫描当前 Obsidian 笔记中的图片引用，对图片进行压缩、去重处理后，上传到阿里云 OSS，并将笔记内的图片链接原地替换为公网 URL。
2. **适用场景**：适用于需要将 Obsidian 笔记中的图片批量上传到阿里云 OSS 的场景，方便图片管理和分享。
3. **核心特色**：
    - 支持多种图片引用格式识别，如 `![[wiki 链接.png]]` 等。
    - 提供两种上传入口，可全量或选择性上传。
    - 图片面板功能丰富，支持缩略图、过滤和多选。
    - 不同格式图片采用不同压缩方式，部分格式保持原样。
    - 利用哈希避免重复上传，上传时考虑笔记内容漂移。
    - 支持根据界面语言显示中文或英文。
4. **使用建议**：可在 Obsidian 社区插件目录搜索安装该插件，安装后在设置里填写 OSS 配置并进行连接测试；也可手动从 GitHub 下载文件安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


