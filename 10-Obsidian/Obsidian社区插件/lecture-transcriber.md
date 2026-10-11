---
uid: 1791709370527000
title: 'Obsidian 插件：Transcriber and Summary for Idiots'
tags: ['自动化与AI', '学习与教育', '多媒体', 'obsidian插件']
description: 'Transcribe lecture recordings locally with Whisper and summarise them with a local model. Works offline; nothing is uploaded. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Transcriber and Summary for Idiots

> [!Note] 插件名片
> - 插件名称：Transcriber and Summary for Idiots
> - 插件作者：William/Tripp Hinch
> - 插件说明：Transcribe lecture recordings locally with Whisper and summarise them with a local model. Works offline; nothing is uploaded. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '学习与教育', '多媒体', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/abysslotus/obsidian-lecture-transcriber)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lecture-transcriber)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/abysslotus/obsidian-lecture-transcriber/master/README.md)



## 概述

**主要功能**
该插件利用本地运行的 Whisper 模型将讲座录音转录为文字，并通过 Ollama 本地大模型生成标题、摘要及关键要点。所有处理均在用户电脑离线完成，无需联网、注册或 API 密钥，确保数据隐私。

**适用场景**
适合需要整理课程录音、会议记录或播客内容的用户。特别适用于对数据隐私敏感、希望避免将音频上传至云端服务，或处于离线环境下的知识工作者与学生。

**核心特色**
1. **完全本地化**：零上传、零订阅，无账户依赖，彻底保护隐私。
2. **自动化笔记生成**：自动将转录文本、摘要和关键点写入已关联录音的笔记中，实现“录音进，笔记出”。
3. **友好安装流程**：提供图形化设置窗口，自动检测并安装缺失组件（如 Whisper 依赖），无需手动操作终端（Mac 需预装 Homebrew）。
4. **灵活配置**：转录功能独立可用；摘要功能可选，支持不同大小的模型（如 qwen3:4b）以平衡性能与资源占用。

**使用建议**
1. 首次使用请跟随插件内置的“Setup”窗口指引，依次安装 Whisper 依赖（约 1.1GB）和 Ollama 软件。
2. Mac 用户需先安装 Homebrew 才能自动配置 Whisper 环境。
3. 若仅需转录，可跳过 Ollama 安装步骤；若需摘要，建议从较小的模型（如 2.6GB 级别）开始测试，根据电脑性能调整。
4. 确保录音文件已正确链接到笔记中，以便插件自动填充内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


