---
uid: 2023120719294543
title: Obsidian 插件：【Readme】GitHub Embeds
tags: ['obsidian插件', 'readme']
description: 在Obsidian中直接嵌入GitHub问题、PR和代码片段。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】GitHub Embeds

> [!Note] 插件名片
> - 插件名称：GitHub Embeds
> - 插件作者：Gino Valente
> - 插件说明：在 Obsidian 中直接嵌入 GitHub 问题、PR 和代码片段。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MrGVSV/obsidian-github-embeds)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-embeds)

## 概述

在 Obsidian 中直接嵌入 GitHub 问题、PR 和代码片段。

![GitHub Embeds](https://cdn.pkmer.cn/covers/github-embeds.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MrGVSV/obsidian-github-embeds/main/README.md)
>

---

## Readme(翻译）

下面是 [[github-embeds]] 插件的自述翻译

# Obsidian GitHub Embeds

*在 Obsidian 中直接嵌入 GitHub 问题、PR 和代码片段。*

![演示GIF](https://cdn.pkmer.cn/covers/github-embeds_2_0.gif!pkmer)

## 详细信息

在**阅读模式**下，Github Embeds 插件将查找所有的 GitHub 链接，并尝试在其下方嵌入预览。

#### 问题和拉取请求

问题和拉取请求将显示与以下任何链接匹配的内容：

- `https://github.com/<OWNER>/<REPO>/issues/<ISSUE NUMBER>`
- `https://github.com/<OWNER>/<REPO>/pull/<PR NUMBER>`

#### 文件片段

当链接匹配以下 URL 时，文件片段将显示：

- `https://github.com/<OWNER>/<REPO>/blob/<REF>/<PATH TO FILE>`

片段也可以限制为一行或多行。如果我们只想显示文件的第 12 行，我们可以在 URL 后面添加 `#L12`。要显示多行，比如 12 到 19 行，我们可以将其更改为 `#L12-L19`。

> **注意**
> 虽然我们可以将文件范围限定在特定的一组行中，但仍然需要请求整个文件。这可能导致对于非常大的文件性能较差。

#### 身份验证

为了使用 GitHub 的 API，调用需要进行身份验证。因此，此插件要求您 [创建个人访问令牌](https://github.com/settings/tokens?type=beta)。

默认情况下，令牌将生成并设置为**公共存储库（只读）**的**存储库访问**。为了使此插件也能与私有存储库一起工作，请将访问权限更改为**所有存储库**，并至少给予以下存储库权限：

- **内容**（只读）
- **问题**（只读）
- **拉取请求**（只读）

创建令牌后，转到此插件的设置并将其粘贴到令牌文本字段中。

### 截图

<img alt="嵌入的拉取请求截图" src="./screenshots/pr-screenshot.png" width="50%" /><img alt="嵌入的文件截图" src="./screenshots/file-screenshot.png" width="50%" />

## 待办事项

我想要添加一些剩余的功能：

- [ ] 在编辑模式下显示嵌入内容
- [ ] 允许选择性地启用/禁用特定链接
- [ ] 更好地配置问题/PR 信息的位置
- [ ] 更多的 PR 元数据（添加/删除，检查状态等）

以下是一些很棒但可能超出了这个项目的范围的事情：

- 允许编辑问题/PR

## 支持

这个插件完全免费使用！我很喜欢做这样的东西，所以我从来不期望任何形式的经济补偿。但是如果你喜欢这个插件并且感到慷慨，我当然不会拒绝一杯咖啡！

<a href="https://www.buymeacoffee.com/ginov">
   <img alt="" src="https://img.buymeacoffee.com/button-api/?text=给我买杯咖啡&emoji=&slug=ginov&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
</a>



