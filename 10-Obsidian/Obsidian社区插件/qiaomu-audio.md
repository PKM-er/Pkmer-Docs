---
uid: 1793625620404000
title: "Obsidian 插件：Qiaomu Audio"
tags: ["多媒体", "文字处理", "自动化与AI", "obsidian插件"]
description: "Export notes as audio or subtitled video, read aloud from your cursor, and dictate into notes with system, local or cloud speech. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Qiaomu Audio

> [!Note] 插件名片
> - 插件名称：Qiaomu Audio
> - 插件作者：向阳乔木
> - 插件说明：Export notes as audio or subtitled video, read aloud from your cursor, and dictate into notes with system, local or cloud speech. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['多媒体', '文字处理', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/joeseesun/qiaomu-audio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?qiaomu-audio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joeseesun/qiaomu-audio/master/README.md)



## 概述

Qiaomu Audio 旨在解决笔记内容难以通过听觉消费或分享的问题，核心功能涵盖朗读、导出与语音输入。它允许用户将 Markdown 笔记转换为 MP3 音频或带字幕的 MP4 视频，支持从光标处开始朗读、选中特定文本朗读，甚至直接通过麦克风将语音转写为文字插入笔记。无论是系统语音、本地模型还是云端服务，该插件都提供了统一的交互界面，让静态的文字笔记变得“有声有色”。

典型场景包括制作个人播客或知识分享视频。例如，你可以选中一段复杂的教程笔记，一键导出为带有逐字高亮字幕的竖屏 MP4 视频，直接发布到社交媒体；或者在通勤路上，点击朗读按钮，让笔记以你选择的音色和语速播放，当前句子会在编辑器中自动高亮跟随。此外，在会议记录中，你可以直接开启听写功能，将口述内容实时转化为文字，无需手动打字，极大提升了记录效率。

相比同类插件，Qiaomu Audio 的特色在于其强大的导出定制能力与隐私保护机制。它支持生成包含频谱、波形等视觉效果的 MP4 视频，并自动添加片头片尾及作者信息，无需额外剪辑软件。在隐私方面，它明确区分了本地与云端处理：系统语音和本地模型推理完全离线，不上传任何数据；而使用云端服务时，API 密钥存储在 Obsidian 的安全存储中，且测试连接时会明确提示可能产生的微小费用，确保用户对数据流向有清晰掌控。

使用前需注意，移动端仅支持系统语音和云端服务，Edge TTS 和本地高级模型仅限桌面端使用。若你主要依赖浏览器系统语音，则无法导出音频文件，需切换至其他语音源。此外，云端语音服务按字符计费，导出前会显示字符数供确认。如果你只需要简单的文本转语音，且对视频导出、精细的朗读控制（如句子级跳转、高亮跟随）没有需求，或者希望完全避免任何网络请求（包括本地模型下载），那么此插件可能略显复杂，简单的 TTS 插件或许更合适。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


