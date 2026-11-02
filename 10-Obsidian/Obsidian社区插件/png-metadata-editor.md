---
uid: 1793625620150000
title: "Obsidian 插件：PNG Metadata Editor"
tags: ["图片与PDF", "编辑工具", "第三方工具集成", "obsidian插件"]
description: "View and edit PNG metadata, with a dedicated mode for SillyTavern character cards. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PNG Metadata Editor

> [!Note] 插件名片
> - 插件名称：PNG Metadata Editor
> - 插件作者：Tobias Zimmerman
> - 插件说明：View and edit PNG metadata, with a dedicated mode for SillyTavern character cards. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '编辑工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/automandc/obsidian-png-metadata-editor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?png-metadata-editor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/automandc/obsidian-png-metadata-editor/master/README.md)



## 概述

PNG Metadata Editor 允许你在 Obsidian 内部直接查看和编辑 PNG 文件中的元数据，无需依赖外部工具。其核心功能包括对文本元数据（如 tEXt、zTXt 和 iTXt 块）的增删改查，以及一个专为 SillyTavern 角色卡设计的专用模式。该插件能解析 V1、V2 和 V3 版本的角色卡，将其以表单形式呈现，方便用户直观地修改角色名称、描述、性格、场景、问候语及提示词等字段，同时支持在表单视图与原始元数据视图之间切换。

典型使用场景包括管理 SillyTavern 角色卡。例如，当你需要调整某个角色的背景故事或对话风格时，可以直接在 Obsidian 中打开对应的 PNG 文件，通过表单界面修改“Personality”或“Scenario”字段，保存后数据会自动同步到文件内部。另一个场景是整理图片资料，你可以快速查看或修改图片附带的文本标签，而无需打开复杂的图像编辑软件。

相比同类插件，该工具的最大特色在于对 SillyTavern 生态的深度支持，将原本隐藏在二进制数据中的角色信息转化为易读的表单。此外，它在编辑文本元数据时承诺不重新编码图像本身，确保画质无损。对于 EXIF、XMP 等照片元数据，插件提供只读查看功能，帮助用户了解图片的拍摄参数或色彩配置，但暂不支持直接修改这些字段。

使用前需注意，该插件完全离线运行，不收集任何数据，且仅在点击“保存”时写入文件。默认情况下，首次保存前会在原文件旁创建 `.bak` 备份，建议保留此设置以防误操作。然而，它不适合需要频繁编辑 EXIF 或 XMP 数据的用户，也不支持直接编辑 SillyTavern 的 Lorebooks（虽然会保留这些数据）。如果你主要依赖 Obsidian 内置的图片预览功能，需注意该插件默认会接管 `.png` 文件的打开方式，可在设置中关闭此行为以恢复默认查看器。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


