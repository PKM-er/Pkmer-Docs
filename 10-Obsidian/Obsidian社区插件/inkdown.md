---
uid: 1793625614219000
title: "Obsidian 插件：Inkdown"
tags: ["自动化与AI", "文字处理", "学术与科研", "效率工具", "obsidian插件"]
description: "Write by hand on a tablet and get Markdown at the cursor: text, LaTeX and Mermaid, read from your handwriting by Claude or another vision model. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inkdown

> [!Note] 插件名片
> - 插件名称：Inkdown
> - 插件作者：Cheng He
> - 插件说明：Write by hand on a tablet and get Markdown at the cursor: text, LaTeX and Mermaid, read from your handwriting by Claude or another vision model. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '学术与科研', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/stanh123h/obsidian-inkdown)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inkdown)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/stanh123h/obsidian-inkdown/master/README.md)



## 概述

Inkdown 专为平板用户设计，解决手写笔记难以直接转化为结构化 Markdown 的痛点。它通过视觉模型识别手写内容，将文字、数学公式及图表实时转换为标准 Markdown、LaTeX 或 Mermaid 代码，并直接插入光标处。转换后仅保留纯文本结果，不保留原始墨迹，确保笔记库的整洁与可搜索性。

典型场景包括推导数学公式或绘制逻辑图。例如，在 iPad 上用 Apple Pencil 手推一个二次函数极值，点击转换后，笔记中会直接生成对应的 LaTeX 公式；或者手绘一个简单的神经网络结构，插件会自动将其识别并转换为 Mermaid 图表代码，方便后续在 Obsidian 中渲染和编辑。

相比传统 OCR 插件，Inkdown 引入了独特的“双笔”机制。内容笔用于书写正文，而紫色的 AI 笔用于向模型下达指令或提问。你可以用 AI 笔标注“将此转为表格”或“跳过此处”，甚至直接在旁边提问，答案会以 Callout 形式出现在结果下方。此外，插件具备纠错提示功能，若发现公式错误（如漏项），它不会擅自修改，而是保留原样并在下方添加警告说明。

使用前需注意，该插件依赖外部 API 服务（如 Claude 或 OpenAI 兼容接口），需自行配置密钥，且每次转换会产生少量费用。识别准确度取决于所选模型，建议仔细检查转换结果。它主要面向 iPad 和 Apple Pencil 用户，虽然桌面端可用鼠标操作，但体验受限。若你不需要 AI 辅助交互，或希望完全离线、无成本的手写识别，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


