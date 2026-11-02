---
uid: 1793625612600001
title: "Obsidian 插件：Epoch Note Converter"
tags: ["日历与时间", "数据处理", "效率工具", "obsidian插件"]
description: "Convert a selected Unix timestamp into an explicit UTC or local date and time. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Epoch Note Converter

> [!Note] 插件名片
> - 插件名称：Epoch Note Converter
> - 插件作者：theluckystrike
> - 插件说明：Convert a selected Unix timestamp into an explicit UTC or local date and time. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/epoch-note-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?epoch-note-converter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/epoch-note-converter/master/README.md)



## 概述

Epoch Note Converter 旨在解决技术笔记中 Unix 时间戳难以直接阅读的问题。它允许你选中一个整数时间戳，插件会同时提供“秒”和“毫秒”两种解读，并分别展示对应的 UTC 时间和设备本地时间。你可以根据源系统的实际单位，选择最合适的解读结果，将其插入到原始数字旁边或直接替换原选区，从而快速将晦涩的数字转化为人类可读的日期格式。

典型场景包括处理服务器日志或事故报告。例如，当你看到日志中有一个巨大的数字 `1700000000000` 时，不确定它是秒还是毫秒。使用插件后，你可以直观地看到两种解读下的具体日期，确认其为毫秒级时间戳后，选择 UTC 时间插入旁边，方便团队统一时间线。另一个场景是本地调试，若需确认某事件发生时的本地时区偏移，插件能直接显示带有 `+07:00` 等偏移量的本地时间，避免手动计算时差。

相比其他转换工具，该插件的核心特色在于“双单位并行预览”和“严格的安全检查”。它不会盲目猜测单位，而是强制用户明确选择秒或毫秒，防止因单位误判导致日期偏差巨大。此外，插件具备范围校验能力，若数值超出 JavaScript Date 支持范围或包含非法字符，会直接报错或禁用对应选项，确保转换结果的准确性。Pro 版本还增加了批量列转换、保存自定义时区对比以及自定义输出格式模板等功能，适合高频处理大量时间戳的用户。

使用前需注意，该插件仅支持带符号的十进制整数，不支持小数、科学计数法或可读日期字符串。输入长度限制在 32 字符以内，且数值必须在 JavaScript Date 的有效范围内。如果你需要解析非整数时间戳、处理闰秒，或者希望插件自动推断单位而不进行手动选择，此插件并不适合你的需求。此外，移动端、Linux 环境及屏幕阅读器兼容性未经过测试，建议主要在桌面端使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


