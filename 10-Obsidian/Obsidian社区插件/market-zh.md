---
uid: 1793625615840000
title: "Obsidian 插件：Market Translator"
tags: ["界面优化", "效率工具", "文字处理", "obsidian插件"]
description: "Translate the community plugin browser on demand: cards, detail descriptions and READMEs become Chinese, with the English original kept on hover. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Market Translator

> [!Note] 插件名片
> - 插件名称：Market Translator
> - 插件作者：chengmiaofan
> - 插件说明：Translate the community plugin browser on demand: cards, detail descriptions and READMEs become Chinese, with the English original kept on hover. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/serena-sheng/market-zh)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?market-zh)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/serena-sheng/market-zh/master/README.md)



## 概述

Market Translator 旨在解决 Obsidian 社区插件市场中，插件名称、描述及 README 文档均为英文导致的阅读障碍。它通过在插件浏览列表上方添加一个轻量级工具条，提供“翻译这一屏”、“翻译详情全文”和“还原”三个核心操作。用户点击按钮后，当前可见的插件卡片或详情页面的英文内容会即时转换为中文，而原始英文内容则保留在鼠标悬停提示中，方便随时对照查阅。

典型使用场景包括快速筛选插件和深入阅读文档。例如，当你在浏览数百个插件时，点击“翻译这一屏”即可快速理解当前列表内插件的功能定位，无需逐个打开详情；当你决定安装某个插件前，点击“翻译详情全文”可以将该插件的完整 README 文档（包括标题、列表、表格等）转化为通顺的中文，帮助你准确理解其配置项和使用方法，避免误操作。

相比其他自动翻译方案，该插件最大的特色是“全手动触发”与“成本透明”。它不会在滚动或切换页面时自动发起请求，确保不产生任何意外流量或费用。状态栏会实时显示已翻译条目数、剩余待译数量及大致字符数，让你对翻译进度和潜在消耗一目了然。此外，它支持 DeepSeek 和 Google Translate 双引擎，若配置了 DeepSeek 密钥，译文风格更贴近中文产品文案，阅读体验更佳。

使用前需注意，该插件仅支持桌面端，因为移动端无法访问独立的插件浏览窗口 DOM。它通过直接修改浏览器窗口 DOM 实现覆盖，属于非官方扩展点，在 Obsidian 重新渲染列表时，已翻译内容可能会短暂闪回英文，需再次点击按钮恢复。此外，包含链接的段落翻译后链接可能失效（原链接保留在悬停提示中），且它不读取你的笔记库内容，仅处理你明确请求翻译的界面文本，适合追求隐私和可控性的用户，但不适合希望完全无感自动翻译的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


