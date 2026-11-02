---
uid: 1793625616744000
title: "Obsidian 插件：Midad Arabic Sources"
tags: ["zotero", "学术与科研", "文字处理", "数据处理", "obsidian插件"]
description: "Import classical Arabic sources (tafsīrs, Qur'ān translations, ḥadīth, riwāyāt) into the vault, transliterate Arabic, and export references to Zotero. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Midad Arabic Sources

> [!Note] 插件名片
> - 插件名称：Midad Arabic Sources
> - 插件作者：Joseph Hill
> - 插件说明：Import classical Arabic sources (tafsīrs, Qur'ān translations, ḥadīth, riwāyāt) into the vault, transliterate Arabic, and export references to Zotero. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['zotero', '学术与科研', '文字处理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nebedaay/Midad-Arabic-Sources)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?midad-arabic-sources)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nebedaay/Midad-Arabic-Sources/master/README.md)



## 概述

Midad Arabic Sources 旨在消除古典阿拉伯语文本从“想要研究”到“融入笔记库”之间的人工劳动。它核心功能是将塔夫西尔、古兰经译本、圣训及经典词典等数字化资源直接导入 Obsidian，使其成为可链接、可搜索且可注释的笔记部分。插件不仅支持从在线仓库自动定位并导入文本，还能对扫描版 PDF 进行 OCR 转录，并将阿拉伯语段落转写为拉丁字母，以便在英文写作中引用。

典型使用场景包括伊斯兰教与阿拉伯语学术研究。例如，研究者可以一键导入《古兰经》注释或圣训集，插件会自动生成带有完整元数据和内部链接的笔记结构；或者，当手头只有扫描版 PDF 时，利用其 Gemini 管道进行转录和翻译，随后通过本地转写服务将阿拉伯语引文快速转为罗马字，直接粘贴到英文论文中，无需手动切换输入法或查询字典。

相比同类插件，Midad 的特色在于其深度集成 Zotero 的能力以及强大的本地化处理。它通过常驻 Python 服务运行转写引擎，避免每次调用都重载模型，确保响应速度。此外，插件提供类似 Zotero 的 PDF 注释界面，即使源文档更新或移除，注释依然保留。其导入机制由目录驱动，支持自动检测上游源更新并重新渲染笔记，同时保护用户手动编辑的内容不被覆盖，实现了动态更新与个性化修改的平衡。

使用前需注意，该插件仅限桌面端使用，因为它依赖本地 Python 脚本和文件读取。它需要配置 Python 环境、CAMeL Tools 以及 Gemini API 密钥，并运行本地转写服务器。虽然插件优化了与 Zotero 及 ScholarWeft 的协作，但这些并非强制要求。该插件主要服务于伊斯兰教和阿拉伯语研究，若你的需求不涉及古典阿拉伯语文本处理，或仅需要简单的 PDF 阅读功能，则可能不需要安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


