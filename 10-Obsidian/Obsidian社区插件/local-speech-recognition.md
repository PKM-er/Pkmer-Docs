---
uid: 1791709368202000
title: 'Obsidian 插件：Local Speech Recognition'
tags: ['自动化与AI', '多媒体', '效率工具', 'obsidian插件']
description: 'Use the locally deployed sherpa-onnx service to realize offline speech recognition in your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Speech Recognition

> [!Note] 插件名片
> - 插件名称：Local Speech Recognition
> - 插件作者：Alfred Clark
> - 插件说明：Use the locally deployed sherpa-onnx service to realize offline speech recognition in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '多媒体', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alfredclark/obsidian-local-speech-recognition)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-speech-recognition)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alfredclark/obsidian-local-speech-recognition/master/README.md)



## 概述

**主要功能**
基于本地部署的 sherpa-onnx 服务，实现 Obsidian 笔记的离线语音转文字。支持通过热键触发录音，将识别结果直接插入光标处或复制至剪贴板。

**适用场景**
适用于桌面端（不支持移动端），特别适合需要保护隐私、无网络环境或希望避免云端 API 费用及密钥管理的用户。

**核心特色**
1. **完全离线**：数据本地处理，无需联网。
2. **中文优化**：内置词汇表功能，支持从编辑器添加词条，提供同音字替换及模糊拼音匹配，提升中文识别准确率。
3. **灵活配置**：支持 SenseVoice、FunASR 等多种模型及不同精度版本；提供“按住说话”和“开关切换”两种录音模式。
4. **服务管理**：侧边栏可一键启动/停止服务，支持自动启动及连接测试。

**使用建议**
1. 需先安装并配置 `sherpa-onnx-offline-websocket-server` 本地服务。
2. 插件默认无热键，请在“设置 → 快捷键”中自行分配录音触发键。
3. 建议利用词汇表功能添加专业术语或常用词，以优化识别效果。
4. 确保 Obsidian 版本在 1.13.1 以上，并仅使用桌面端。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


