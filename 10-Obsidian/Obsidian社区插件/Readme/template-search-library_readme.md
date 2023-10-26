---
uid: 2023102611082765
title: Obsidian 插件：【Readme】Search Templates Library
tags: ['obsidian插件', 'readme']
description: 允许您保存搜索模板以供将来重复使用。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Search Templates Library

> [!Note] 插件名片
> - 插件名称：Search Templates Library
> - 插件作者：Pentchaff
> - 插件说明：允许您保存搜索模板以供将来重复使用。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Pentchaff/obsidian-search-library)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?template-search-library)

## 概述

允许您保存搜索模板以供将来重复使用。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Pentchaff/obsidian-search-library/main/README.md)
> 

---

## Readme(翻译）

下面是 [[template-search-library]] 插件的自述翻译


🚀 Obsidian搜索库插件📚

大家好，Obsidian的爱好者们！😄 你是否曾经遇到过这种棘手的情况？你使用Obsidian的绝妙工具制作了完美的搜索查询，找到了你需要的东西，然后...你需要搜索其他东西。结果会怎样呢？你不得不重新输入整个查询！😫

很令人沮丧，不是吗？但是不用担心了！现在推出了**Obsidian搜索库插件**-旨在简化你在Obsidian中的搜索体验。现在，你可以保存和重复使用那些精彩的搜索操作符，而不费吹灰之力！告别繁琐的重新输入，迎接更流畅、更愉快的搜索体验！🎉
## 🌟 特点

1. **免费搜索**：只需输入您要查找的内容，我们将为您找到。简单易行！🥧
2. **模板启用搜索**：想要在搜索中变得更加炫酷吗？使用我们的模板使您的搜索更加强大！🎩
3. **图形视图集成**：在美丽的Obsidian图形视图中可视化您的搜索结果。连接各个点！🌐
## 🛠️ 安装

1. 打开 Obsidian 并转到 "设置" > "社区插件"。
2. 点击 "浏览" 并搜索 "Obsidian Search Library"。
3. 点击 "安装" 并观看魔法发生！✨
## 📝 如何使用
### 先决条件

- **QuickAdd 插件**：该插件依赖于 [QuickAdd](https://github.com/chhoumann/quickadd) 插件来发挥其魔力。在继续之前，请确保您已经安装并在 Obsidian 中设置好了它。✅
- **伟大的伴侣**：这个插件与 [Vantage - advanced Search Builder for Obsidian](https://github.com/ryanjamurphy/vantage-obsidian) 配合使用效果非常好。它们一起使您的 Obsidian 体验更加强大！🚀
### 分配快捷键

您可以通过为自由搜索和启用模板的搜索分配快捷键来自定义您的体验：

- **自由搜索**：转到“设置”>“热键”，然后设置您所需的自由搜索命令的快捷键。一个简单的`Ctrl + Alt + F`可能会有所帮助！
- **启用模板的搜索**：同样，为启用模板的搜索命令设置一个自定义快捷键。如何使用`Ctrl + Alt + T`？
### 自由搜索

通过自由搜索解锁视觉探索的力量！使用您分配的快捷方式，输入您的查询，然后观察不仅搜索结果出现，而且图形视图窗格也会活跃起来！🌐

没错！您可以同时查看搜索结果的文本信息和视觉表示，以便了解它们在您的笔记中的联系。就像在指尖上拥有鸟瞰您的知识一样。探索、发现和享受您的思想和创意之间相互连接的美丽！🎨
### 启用模板搜索

利用模板的功能来优化你的搜索。最棒的是，这些模板使用与QuickAdd相同的语法（[参考这里](https://quickadd.obsidian.guide/docs/FormatSyntax)），所以你已经知道如何使用它们了！🎩

解锁模板在搜索中的潜力！通过启用模板搜索，你可以创建和使用自定义模板来优化你的搜索查询。以下是使用方法：
#### 创建模板 📝

1. **设置模板文件夹**：选择一个Obsidian中的文件夹，用于存储您的搜索模板。
2. **创建新模板**：只需在模板文件夹中创建新的笔记，使用模板格式语法。将这些模板视为您的秘密搜索武器！
3. **享受灵活性**：想要进行更改吗？只需编辑模板笔记，搜索结果将立即更新。

>[!note] 简单搜索模板示例
>在文件夹中搜索
>path:folderA/{{value}}

>[!note] 使用QuickAdd语法的模板示例
>TITLE
> (path:{{value:project}})  AND (file: transcript) {{value:query}}
#### 使用模板 🔍

1. **分配快捷键**：进入"设置" > "热键"，为启用模板搜索命令设置一个自定义快捷键。
2. **使用快捷键**：每当您想要使用模板进行搜索时，请使用分配的快捷键。
3. **选择模板**：您将看到一个模板列表。选择您想要的模板，然后就完成了！您的搜索将被精确和量身定制以满足您的需求。

模板为您的搜索体验带来了精确性、效率和创造力。尽情尝试不同的模板，发现新的见解！🧩
## 🙏 贡献

有想法吗？发现了一个错误吗？请随时提出问题或发起拉取请求。欢迎所有的贡献！让我们一起使这个插件变得更加出色！🤝
😃 关于作者

嗨，我是Alex，这个插件的创作者！我喜欢Obsidian，并且喜欢制作能让人们生活更轻松的工具。如果你有任何问题或只是想打个招呼，随时联系我！
另外，如果你想请我喝杯啤酒，下面是链接！


## 📜 许可证

本项目使用 MIT 许可证。使用它，分享它，热爱它！❤️
## 🎉 最后的话

感谢您查看 Obsidian 搜索库插件！我希望它能为您的笔记记录之旅带来快乐和高效。愉快的搜索和愉快的记笔记！🎈



