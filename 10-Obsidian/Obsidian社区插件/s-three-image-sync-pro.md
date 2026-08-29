---
uid: 1786577082375003
title: 'Obsidian 插件：S3 Image Sync Pro'
tags: ['第三方工具集成', '图片与PDF', '自动化与AI', '效率工具', 'obsidian插件']
description: '能将图片上传到S3/R2存储，支持按笔记路径匹配、WebP WASM 压缩，还能自动删除同步。——此插件尚未经过Obsidian官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：S3 Image Sync Pro

> [!Note] 插件名片
> - 插件名称：S3 Image Sync Pro
> - 插件作者：hailan
> - 插件说明：能将图片上传到S3/R2存储，支持按笔记路径匹配、WebP WASM 压缩，还能自动删除同步。——此插件尚未经过Obsidian官方人员手动审核。
> - 插件分类：['第三方工具集成', '图片与PDF', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hailanbb/s3-image-sync-pro)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?s-three-image-sync-pro)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hailanbb/s3-image-sync-pro/master/README.md)



## 概述

### S3 Image Sync Pro 插件总结
1. **主要功能**：将 Obsidian 笔记中的图片上传至 Cloudflare R2、AWS S3、MinIO 等 S3 兼容存储，同时在 Vault 内保留本地镜像；自动改写笔记链接，支持云端与本地链接双向切换，还能从云端批量补齐本地镜像。
2. **适用场景**：适用于需要管理图片存储，希望笔记可在云端和本地灵活切换使用图片链接的用户，如新设备或离线使用场景。
3. **核心特色**：实现云端对象、本地镜像和笔记链接的统一管理，遵循“云端 S3 对象键 = 本地镜像目录下的相对路径”规则，即使默认使用云端链接，也会保存本地镜像。
4. **使用建议**：初次使用可从名词解释开始，按文档顺序完成安装、配置和首次上传。若遇到问题，可参考排错指南。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


