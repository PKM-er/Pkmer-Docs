---
uid: 20231220112631
title: Obsidian 插件：【Readme】Studier
tags: ['obsidian插件', 'readme']
description: 为您的Obsidian.md笔记创建测验，提高学习效果
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Studier

> [!Note] 插件名片
> - 插件名称：Studier
> - 插件作者：Alvaro Cas
> - 插件说明：为您的 Obsidian.md 笔记创建测验，提高学习效果
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/alvaro-cas/studier-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?studier)

## 概述

为您的 Obsidian.md 笔记创建测验，提高学习效果

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alvaro-cas/studier-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[studier]] 插件的自述翻译

**为你的 [Obsidian.md](https://obsidian.md/) 笔记创建测验，更好地学习。**

## 简介

这个 Obsidian 插件可以让你通过测验来复习你的笔记。你可以为每个笔记制作自己的问题，并自定义插件如何读取它们，以使其与你的笔记风格相匹配。该插件会随机选择一个 Markdown 笔记，如果其中有问题，它会提示你进行测验，最好的部分是你可以轻松地检查你的答案。如果没有问题，该插件将像核心插件“随机笔记”一样运行。

## 安装

您可以通过 Obsidian 中的 Community Plugins（即将推出）选项卡来安装插件，通过搜索 "Studier" 来找到它。

### 手动安装

您可以手动安装插件：

- 前往 GitHub 上的 [最新版本](https://github.com/alvaro-cas/studier-obsidian/releases/latest)。
- 下载 `main.js`、`manifest.json` 和 `style.css`。
- 将 `main.js`、`manifest.json` 和 `style.css` 复制到您的 vault 中的以下位置：`VaultName/.obsidian/plugins/studier`（创建 studier 文件夹）。
使用方法
您可以以两种不同的方式打开 Studier：

#### 1.命令面板

按下 Ctrl+P 或选择的热键打开命令面板。搜索 "Studier"。

#### 2. Ribbon Icon

导航到左侧边栏，选择带有毕业帽图标的带子。

> 如果有问题，将出现一个模态窗口，之后您可以回答问题，然后检查它们。

### 为测验创建问题

一旦您选择了选项 1 或 2，一个模态框将会显示出一些问题。如果没有，您可以在您的笔记中自己编写问题。无论您把它们放在哪里，只要您坚持所选择的格式即可。以下是一些示例，您可以用作指南。

#### ～ 示例一

![](https://cdn.pkmer.cn/covers/studier_1_0.png!pkmer)

> 设置解剖学

##### 选定的设置

| 名称 | 描述 | 设置值 |
|--|--|--|
| 问题初始化器 | 用于标识问题开始位置的字符。 | "> [!info]- Questions" |
| 问题结束器 | 用于标识读取问题的分隔符的字符。 | ">---" |
| 起始问题指示器 | 用于标识问题开始位置的字符。 | "> - " |
| 正确答案指示器 | 用于标识正确答案的字符。 | "-!" |

> 引号仅供参考，请勿复制。

#### ~ 示例二

![](https://cdn.pkmer.cn/covers/studier_1_1.png!pkmer)

##### 选定的设置

| 名称 | 描述 | 设置值 |
|--|--|--|
| 问题初始化器 | 用于标识问题开始位置的字符。 | "## 问题 " |
| 问题结束器 | 用于标识读取问题的分隔符的字符。 | "!END" |
| 起始问题指示器 | 用于标识问题开始位置的字符。 | "- " |
| 正确答案指示器 | 用于标识正确答案的字符。 | ".x" |

> 引号仅供参考，请勿复制。

## 未来的实施方案

- 创建一个带有已检查的测验的笔记，显示错误/正确答案。
- 允许多个正确答案。
- 允许开放性问题（验证的想法：贝叶斯定理）。
MIT 许可证
请查看 [LICENSE](https://github.com/alvaro-cas/studier-obsidian/blob/main/LICENSE)。
希望你喜欢！你可以在这里支持我的工作（我会将 1% 的收入用于资助碳减排🌳），或者在我的 Medium 上查看更多内容。

祝你平安！🤙

<noscript></noscript>
