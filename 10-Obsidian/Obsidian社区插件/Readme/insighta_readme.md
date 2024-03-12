---
uid: 20240227160841
title: Obsidian 插件：【Readme】InsightA
tags: ['obsidian插件', 'readme']
description: 从一篇长文章中提取一组原子笔记，并使用LLM按笔记标题创建MOC
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】InsightA

> [!Note] 插件名片
> - 插件名称：InsightA
> - 插件作者：Hongjian Tang
> - 插件说明：从一篇长文章中提取一组原子笔记，并使用 LLM 按笔记标题创建 MOC
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HongjianTang/obsidian-insighta)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?insighta)

## 概述

从一篇长文章中提取一组原子笔记，并使用 LLM 按笔记标题创建 MOC

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HongjianTang/obsidian-insighta/main/README.md)

---

## Readme(翻译）

下面是 [[insighta]] 插件的自述翻译

【机翻】

# InsightA 黑曜石插件 :bulb: :books

![GitHub release (latest by date)](https://img.shields.io/github/v/release/HongjianTang/obsidian-insighta?style=for-the-badge)

![GitHub all releases](https://img.shields.io/github/downloads/HongjianTang/obsidian-insighta/total?style=for-the-badge)

## 概述 :mag

InsightA 是一个 Obsidian 插件，不仅可以将广泛的文章转化为简洁的原子笔记，还可以利用 LLM 技术创建有组织的内容地图（MOC）。这个工具非常适合那些希望将复杂信息提炼为结构化、相互连接的笔记的人，灵感来源于 Zettelkasten 方法。 🚀📝

## 特点 :sparkles

- **AI 动力笔记提取**：使用先进的 AI 技术将冗长的文章转换为原子笔记。
- **内容生成地图**：根据笔记标题创建 MOC，链接原子笔记，以更好地理解主题内容。
- **无缝的 Obsidian 集成**：在 Obsidian 生态系统内和谐工作。

## 安装 :gear

1. 打开 Obsidian 并导航至 `设置`。
2. 在 `社区插件` 中，关闭 `安全模式`。
3. 点击 `浏览社区插件` 并搜索 `InsightA`。
4. 在您的社区插件列表中安装并启用 InsightA。

## 使用 💡

在使用之前，打开设置并设置 OpenAI API。

### 提取笔记

打开一篇文章进行处理。点击工具栏中的 `InsightA` 图标或使用命令。插件将处理文章，创建包含指向源笔记的链接和一组相关标签以便轻松组织和参考的原子笔记。

![提取笔记](https://cdn.pkmer.cn/covers/insighta_2_0.gif!pkmer)

### 创建 MOC

打开一个新的笔记文件，使用 Create MOC 命令。插件将嵌入特定文件夹和笔记标题中的所有笔记，然后查找与笔记标题相关的所有笔记，使用 LLM 对找到的笔记进行分组并显示它们。

您可以在设置中修改相似阈值。

![Create MOC](https://cdn.pkmer.cn/covers/insighta_2_0.gif!pkmer)

PS：请注意，处理时间可能会因文章长度而异。通常，处理长篇文章需要大约 30 秒或更长时间。而 GPT-4 比 GPT-3.5 更好。

## 贡献 :raised_hands

您的贡献是使社区变得令人惊叹的原因！如果您有想法、问题或想要贡献，请随时查看 [问题页面](https://github.com/HongjianTang/obsidian-insighta/issues) 或提交拉取请求。

## 许可证 :page_facing_up

该项目采用 [MIT许可证](LICENSE)。

## 致谢 :tada

- 非常感谢 Obsidian 社区对我们的持续支持和深刻的反馈。
- 这个工具受启发于著名的 Zettelkasten 方法，以其高效的知识管理和组织方式而闻名。
- 特别感谢 [Liam的Periodic Notes插件](https://github.com/liamcain/obsidian-periodic-notes) 和 [HyeonseoNam的自动分类器](https://github.com/HyeonseoNam/auto-classifier/)。他们的部分代码对 InsightA 的开发起到了关键作用。

---

由唐宏健为 Obsidian 社区制作 :heart:。
