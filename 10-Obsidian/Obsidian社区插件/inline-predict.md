---
uid: 1793625614247001
title: "Obsidian 插件：Inline Predict"
tags: ["自动化与AI", "编辑工具", "效率工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Predict

> [!Note] 插件名片
> - 插件名称：Inline Predict
> - 插件作者：wang1231
> - 插件说明：
> - 插件分类：['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/3265204/obsidian-inline-predict)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-predict)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/3265204/obsidian-inline-predict/master/README.md)



## 概述

Inline Predict 为 Obsidian 笔记提供原生行内 AI 补全，核心在于以灰色文字预览后续内容，支持 Tab 接受或 Esc 忽略。它基于 CodeMirror 6 实现，在确认前不修改笔记，并允许按字词、句子或行分步接受建议。插件自动管理上下文预算与缓存，当输入与建议一致时直接复用剩余部分，避免重复请求，同时在本地记录详细的用量与延迟统计。

典型场景包括长文写作时的流畅续写，或代码块中的逻辑补全。例如，在撰写中文段落时，停顿片刻即可看到灰色预览，若只想要前半句，可使用“接受下一句”命令精准插入，保留后续灰字供后续选择。对于中日文混排，虽然“字词”接受目前按单字符推进，但整体流程依然支持多行建议与光标前后文参考，帮助保持写作节奏。

相比同类插件，Inline Predict 的特色在于精细的分步接受机制与本地诊断面板。它能区分供应商实际用量与本地估算，并明确标记未知用量，避免费用误判。此外，插件具备结果检查能力，可过滤重复、无效或截断的响应，可选启用模型相关性复核以剔除跑题内容。界面语言跟随 Obsidian 设置，自动与手动预测的触发时机也可根据打字节奏动态调整，减少不必要的模型调用。

使用前需注意，API Key 以明文保存在本地配置文件中，同步或分享 Obsidian 目录时需格外小心。该插件目前为 0.1.3 测试版，移动端触控行为尚未真机确认，且 Windows、Linux 等平台未完整实测。它不适合需要完全离线运行、或对事实准确性有极高要求且不愿人工复核的场景。若你主要依赖长文档的结构化生成而非行内续写，或希望避免任何云端数据交互，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


