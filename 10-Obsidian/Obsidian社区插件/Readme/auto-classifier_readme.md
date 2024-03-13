---
uid: 2023080322142774
title: Obsidian 插件：Auto Classifier
tags: ['obsidian插件', 'readme']
description: 使用ChatGPT API自动对您的笔记进行标签分类。它会分析您的笔记（可以是标题、前言、内容或选定区域），并在您设置的位置自动插入标签。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Auto Classifier

> [!Note] 插件名片
> - 插件名称：Auto Classifier
> - 插件作者：Hyeonseo Nam
> - 插件说明：使用 ChatGPT API 自动对您的笔记进行标签分类。它会分析您的笔记（可以是标题、前言、内容或选定区域），并在您设置的位置自动插入标签。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HyeonseoNam/auto-classifier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-classifier)

## 概述

使用 ChatGPT API 自动对您的笔记进行标签分类。它会分析您的笔记（可以是标题、前言、内容或选定区域），并在您设置的位置自动插入标签。

![Auto Classifier](https://cdn.pkmer.cn/covers/auto-classifier_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HyeonseoNam/auto-classifier/main/README.md)

---

## Readme(翻译）

下面是 [[auto-classifier]] 插件的自述翻译

# 自动分类器

![GitHub发布（按日期排序）](https://img.shields.io/github/v/release/HyeonseoNam/auto-classifier?style=for-the-badge) ![GitHub所有发布](https://img.shields.io/github/downloads/HyeonseoNam/auto-classifier/total?style=for-the-badge)

`Auto Classifier` 是一个 [Obsidian](https://obsidian.md/) 插件，它可以帮助您使用 ChatGPT API 自动从您的笔记中分类标签。该插件可以分析您的笔记（可以是标题、前置元数据、内容或选定区域），并根据输入和您的存储库中的标签提供相关的标签建议。这可以用于各种特定目的，例如书籍的 DDC 分类、关键词推荐、研究论文分类等。节省时间，改善您的笔记组织。

## 如何使用

- 在设置选项卡中输入您的 ChatGPT API 密钥。您可以在 [OpenAI](https://platform.openai.com/account/api-keys) 上创建它。通过“测试 API 调用”按钮检查 API 设置。
- 该插件由**4 个输入命令**组成，您可以运行这些命令。只需运行这些命令，它就会自动对您的笔记进行分类。
  - 从笔记标题中分类标签
  - 从笔记 FrontMatter 中分类标签
  - 从笔记内容中分类标签
  - 从选定区域中分类标签
- 切换并从不同的**标签参考**类型中选择。ChatGPT 将从这些参考中选择适当的标签。
  - `所有标签`（默认）
  - 使用正则表达式的 `过滤标签`
  - 手动定义的 `手动标签`
- 指定 ChatGPT 响应的**输出类型**。
  - `#标签`：在 `当前光标` 或 `内容顶部` 处。
  - `[[WikiLink]]`：在 `当前光标` 或 `内容顶部` 处。
  - `FrontMatter`：带有 `键`
  - `标题替代`：在笔记标题的末尾
- （可选）为输出格式添加 `前缀` 或 `后缀`。
- （可选）您可以使用自定义请求进行 ChatGPT API。
  - `自定义提示模板`
    - ChatGPT 将根据此提示进行响应。来自您的命令的输入将被 `{{input}}` 替换，并且您设置的参考标签将放置在 `{{reference}}` 中。
  - `自定义聊天角色`
    - 您可以通过设置此系统角色来指导 ChatGPT 的行为。

例子

### 使用案例＃1：**选定区域** &rightarrow; **当前光标**

![](img/selected_to_cursor.gif)

### 使用案例＃2：**内容** &rightarrow; **FrontMatter**

![](img/content_to_frontmatter.gif)

### 使用案例＃3：**FrontMatter** &rightarrow; **Title**

![](img/frontmatter_to_totle.gif)

### 使用案例＃4：**标题** &rightarrow; **FrontMatter**

![](img/title_to_frontmatter.gif)

### DDC 编号分类

如果您想将此插件用作 DDC 编号分类，请按照以下方式编辑“自定义提示模板”：

```
请使用杜威十进制分类法（DDC）对此内容进行分类：
"""
{{input}}
"""
答案格式为JSON {reliability:0~1, output:"[ddc_number]:category"}。
即使您不确定，也请给出可靠性评定并选择一个分类。
在输出中将空格转换为“_”。

### LCSH分类
LCSH分类可以类似：
```

请使用美国国会图书馆主题词表（LCSH）对此内容进行分类：

"""

{{input}}

"""

答案格式为 JSON {reliability:0~1, output:"[第一个 LCSH 术语]--[第二个 LCSH 术语]--[第三个 LCSH 术语]"}。

即使您不确定，也请给出可靠性并选择一个。在输出中将空格转换为 "_"。

## 安装

- 在 Obsidian 设置的 Community 插件选项卡中搜索“Auto Classifier”。
- 或者，您可以手动从此存储库的 [GitHub发布页面](https://github.com/hyeonseonam/auto-tagger/releases) 下载最新版本，并将 ZIP 文件解压到 Obsidian 插件文件夹中。

支持

如果您在使用此插件时遇到任何问题或有任何改进建议，请随时在 GitHub 存储库上提交问题。我们也欢迎 Pull 请求。

## 作者

Hyeonseo Nam

MIT 许可证
