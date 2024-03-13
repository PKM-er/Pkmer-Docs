---
uid: 2024031219330941
title: Obsidian 插件：【Readme】Quiz Generator
tags: ['obsidian插件', 'readme']
description: 使用OpenAI的GPT-3.5和GPT-4模型从您的笔记中生成互动式测验。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Quiz Generator

> [!Note] 插件名片
> - 插件名称：Quiz Generator
> - 插件作者：Edward Cui
> - 插件说明：使用 OpenAI 的 GPT-3.5 和 GPT-4 模型从您的笔记中生成互动式测验。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ECuiDev/obsidian-quiz-generator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quiz-generator)

## 概述

使用 OpenAI 的 GPT-3.5 和 GPT-4 模型从您的笔记中生成互动式测验。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ECuiDev/obsidian-quiz-generator/master/README.md)

---

## Readme(翻译）

下面是 [[quiz-generator]] 插件的自述翻译

【机翻】

# 测验生成器

[![下载次数](https://img.shields.io/github/downloads/ECuiDev/obsidian-quiz-generator/total?style=for-the-badge&labelColor=21262d&color=238636)](https://github.com/ECuiDev/obsidian-quiz-generator/releases) [![发布版本](https://img.shields.io/github/v/release/ECuiDev/obsidian-quiz-generator?display_name=tag&style=for-the-badge&logo=github&labelColor=21262d&color=1f6feb)](https://github.com/ECuiDev/obsidian-quiz-generator/releases/latest)

**Quiz Generator** 是一个为 [Obsidian](https://obsidian.md/) 设计的插件，利用 OpenAI 的 GPT-3.5 和 GPT-4 模型的强大功能，根据您的笔记自动生成交互式、考试风格的问题（带答案）。无论您是学生想要自测，还是教育工作者创建评估，这个插件都可以简化问题创建过程。

![演示](https://cdn.pkmer.cn/covers/quiz-generator_2_0.gif!pkmer)

## 特点

- **个性化问题：** 选择任意组合的笔记和文件夹作为测验内容。
- **可定制生成：** 选择生成的问题类型和数量。
- **多种问题类型：** 支持多项选择题、判断题和简答题。混合使用它们以最好地满足您对有效评估的需求。
- **交互式用户界面：** 在提供实时反馈的交互式用户界面中回答生成的问题。
- **问题保存：** 将生成的问题保存为以下格式之一（或两者皆可）。
  - 内联和多行闪卡，可通过 [obsidian-spaced-repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) 进行复习。
  - Markdown callouts，与您的笔记无缝集成。
- **可复习的测验：** 使用交互式用户界面复习保存的问题（您还可以从头开始创建自己的问题，并在不使用生成器的情况下在用户界面中打开它们）。
- **多种语言：** 生成与您的笔记相同语言的问题。
- **数学支持：** 从包含 LaTeX 的笔记中生成问题。
- **模型选项：** 根据您的需求选择 OpenAI 的最新 GPT-3.5 和 GPT-4 模型。
  - 使用 `GPT-3.5`（16,385 个标记上下文窗口）以获得更快的响应时间和高效的问题生成，具有适度的上下文窗口。
  - 使用 `GPT-4`（128,000 个标记上下文窗口）以获得更广泛的内容和深入的问题生成，适用于复杂的教育材料和详细的评估。

## 用法

### 安装

此插件目前正在审核中，将被添加到 Obsidian 的**社区插件**页面中。与此同时，您可以使用以下任一方法安装它。

#### BRAT 安装

1. 从 Obsidian 的**Community plugins**页面安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)。
   - **设置** → **Community plugins** → **浏览**。
   - 搜索 `Obsidian42 - BRAT`。
   - 选择插件以打开其页面，然后选择**安装**。
   - 在插件页面上选择**启用**，或返回到**Community plugins**页面并切换开关。
2. 在 BRAT 的设置中选择 `Add Beta plugin`。
3. 输入此存储库的 URL：`https://github.com/ECuiDev/obsidian-quiz-generator`。
4. 启用插件。
5. 打开插件设置并输入您的 API 密钥。
   - 如果您没有 API 密钥，请在 [OpenAI](https://platform.openai.com/) 上创建帐户，并从 [API keys](https://platform.openai.com/api-keys) 中检索您的 API 密钥。
6. 根据需要配置其他设置。

#### 手动安装

1. 从 [最新发布版本](https://github.com/ECuiDev/obsidian-quiz-generator/releases) 下载 `main.js`、`manifest.json` 和 `styles.css`。
2. 进入 Obsidian vault 的 `plugins` 文件夹，并创建一个名为 `quiz-generator` 的新文件夹。
3. 将步骤 1 中下载的文件移动到这个文件夹中。
4. 在 Obsidian 的 **Community plugins** 页面中启用插件。
5. 打开插件设置并输入您的 API 密钥。
   - 如果您没有 API 密钥，请在 [OpenAI](https://platform.openai.com/) 创建一个帐户，并从 [API keys](https://platform.openai.com/api-keys) 中检索您的 API 密钥。
6. 根据需要配置其他设置。

### 生成

- 打开命令面板，选择“Quiz Generator: Open generator”或在左侧边栏中选择 [brain-circuit](https://lucide.dev/icons/brain-circuit) 图标。
- 使用 [file](https://lucide.dev/icons/file-plus-2) 和 [folder](https://lucide.dev/icons/folder-plus) 图标添加笔记和文件夹。
  - 添加文件夹会添加其中的所有笔记，以及其子文件夹中的任何笔记。如果选择一个非常大的文件夹（数千个文件和数百个子文件夹），可能需要几秒钟才能添加完成。
- 使用 [x](https://lucide.dev/icons/x) 图标删除单个笔记/文件夹，使用 [book](https://lucide.dev/icons/book-x) 图标删除所有内容。
- 添加完笔记和/或文件夹后，选择 [webhook](https://lucide.dev/icons/webhook) 图标生成问题。
  - 生成完成后，Quiz UI 将自动打开（通常至少需要几秒钟）。
  - 生成时间可能会根据您的笔记长度和生成问题数量而有所不同。

### 保存

- 已保存的问题将会以“Quiz [number]”命名的 Markdown 文件形式保存在由“保存位置”设置指定的文件夹中。
- 选择 [save](https://lucide.dev/icons/save) 图标来保存当前问题。
- 选择 [save-all](https://lucide.dev/icons/save-all) 图标来保存所有问题。
- 如果“自动保存问题”设置已启用，则所有问题在生成后会立即保存。

### 查看已保存的测验

- 打开命令面板，选择“Quiz Generator: Open quiz from current note”，或在文件资源管理器中右键单击一个笔记，然后在文件菜单中选择“从此笔记打开测验”。

### 问题格式化

如果您想修改任何已保存的问题或从头开始编写自己的问题，它们必须遵循以下格式才能在交互式 UI 中打开。未被引号括起的任何文本必须按照所示的方式精确编写。但是，间距和大小写的偏差是可以的（解析器不区分大小写并忽略空格）。被引号括起的文本可以是任何内容。

#### Callout 格式

```
> [!question] "问题描述"
> a) "选项 1"
> b) "选项 2"
> c) "选项 3"
> d) "选项 4"
>> [!success]"- 答案"
>> a)、b)、c) 或 d) 中的一个 "你可以选择性地在字母后面添加正确选项的文本"

> [!question] "判断题描述"
> 真或假？
>> [!success]"- 答案"
>> 真或假中的一个

> [!question] "简答题描述"
>> [!success]"- 答案"
>> "答案内容"

注意：嵌套 Callout 中的连字符在引号内部不是打字错误。是否包含连字符是可选的。
```

**示例**

```
> [!question] 在人工智能伦理领域，考虑自主武器系统（AWS）的发展。支持者认为AWS可以在战争中减少人员伤亡，而批评者则对缺乏人类控制和潜在的伦理影响表示担忧。应用伦理框架，哪个选项符合后果主义观点？
> a) 拒绝使用AWS以保留人类控制并维护道德原则。
> b) 实施严格的监管和监督以平衡AWS的利益和风险。
> c) 支持AWS部署以减少总体伤亡并增强军事效果。
> d) 鼓励国际合作建立关于AWS使用的全球共识。
>> [!success]- 答案
>> c) 支持AWS部署以减少总体伤亡并增强军事效果。

> [!question] 在心理学中的天赋与后天争论中，研究人员的共识是智力仅由遗传因素决定。
> 真或假？
>> [!success]- 答案
>> 假

> [!question] 解释混沌理论中的“蝴蝶效应”概念，并提供一个说明其重要性的例子。
>> [!success]- 答案
>> “蝴蝶效应”是混沌理论中的一种现象，表明小的初始变化可能会导致随着时间的推移产生截然不同的结果。这在比喻上被表达为巴西一只蝴蝶的翅膀拍动可能引发一系列事件，最终导致德克萨斯州的龙卷风。基本上，复杂系统初始条件的微小变化可能对其未来状态产生深远且不可预测的影响。蝴蝶效应的一个例子是天气，其中微小的干扰可能影响大气条件，潜在地导致天气模式随时间发生重大变化。
```

```
**多项选择:** "多项选择题目在这里"
a) "选项 1"
b) "选项 2"
c) "选项 3"
d) "选项 4"
您在设置中选择的多行分隔符在这里
其中一个选项 a)、b)、c) 或 d) "您可以选择性地在字母后面添加正确选项的文本"

**判断正误:** "判断正误题目在这里" 您在设置中选择的内联分隔符在这里 选择 true 或 false

**简答题:** "简答题目在这里" 您在设置中选择的内联分隔符在这里 "答案在这里"
```

- 在生成器界面中选择 [scroll](https://lucide.dev/icons/scroll-text) 图标，以重新打开最近生成的测验。

## 即将推出

我正在积极努力为 Quiz Generator 带来更多功能和改进。敬请期待以下即将推出的更新：

### 逐步开发

- **改进的文件夹：** 点击添加的文件夹以查看它们包含的笔记。
- **改进的笔记：** 点击添加的笔记以查看其内容。
- **更多问题类型：** 填空、匹配、论文/长答案和选择所有适用的。
- **动态分析：** 实时获取关于您对简答/长答案问题的反馈。
- **更多模型：** 支持本地 LLM 和其他 LLM 提供商。
- **更好的问题创建：** 自定义 UI 以简化从头开始创建自己的问题。
- **可调节难度：** 设置生成问题的难度。
- **标签添加器：** 按标签添加笔记。
- **Dataview 添加器：** 使用 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 查询添加笔记。
- **高级问题类型：** 数值响应和基于图像的。
- **笔记链接：** 添加一个笔记也会添加它链接到的笔记。
- **扩展文件：** 从 PDF 和图像文件生成问题。

### 同时开发

- **问题种类：** 自定义选项来控制问题风格和评估内容。
- **生活质量：** 减少令牌使用量同时提高问题质量。

## 限制

确保您的输入（选定的笔记/文件夹）和预期输出（生成的问题）的组合标记数不超过您选择的模型的上下文窗口。否则，您的输入和/或输出将被截断。生成器 UI 中显示了输入标记的数量。对于输出标记的数量，平均而言，选择题约为 60 个标记，判断题约为 30 个标记，简答题约为 100 个标记。我建议至少留出上下文窗口的 10% 未使用以确保安全。

## 问题和功能请求

如果您遇到任何错误或有功能请求，请在 [GitHub存储库](https://github.com/ECuiDev/obsidian-quiz-generator/issues) 上打开一个问题。
