---
uid: 20240312193744
title: Obsidian 插件：【Readme】Goban SGF
tags: ['obsidian插件', 'readme']
description: 记录围棋对局（SGF格式棋盘）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Goban SGF

> [!Note] 插件名片
> - 插件名称：Goban SGF
> - 插件作者：Stinson
> - 插件说明：记录围棋对局（SGF 格式棋盘）。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/StinsonZhao/obsidian-plugin-goban-sgf)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?goban-sgf)

## 概述

记录围棋对局（SGF 格式棋盘）。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/StinsonZhao/obsidian-plugin-goban-sgf/main/README.md)

---

## Readme(翻译）

下面是 [[goban-sgf]] 插件的自述翻译

【机翻】

# 黑曜石的 Goban SGF

[简体中文](./README_CN.md)

**Goban SGF for Obsidian** 是一个在 Obsidian 中管理围棋棋谱的插件，支持 [SGF（智能游戏格式）](https://en.wikipedia.org/wiki/Smart_Game_Format)。该插件已经移植并参考了大部分功能和 UI 来自 [Sabaki](https://github.com/SabakiHQ/Sabaki)（不包括所有引擎和分析相关功能）。

![Plugin-Img](https://cdn.pkmer.cn/covers/goban-sgf_2_0.jpeg!pkmer)

该插件的目的是帮助学习围棋的朋友。现在，他们可以使用这个插件在 Obsidian 中学习棋局和死活问题，像管理常规笔记一样管理他们的棋谱记录，并像学习其他任何学科时一样做笔记。

## 特点

- 来自 [Sabaki](https://github.com/SabakiHQ/Sabaki) 的基本功能，可以称为**Sabaki-Lite**
  - 下棋：支持多个分支和变化树
  - 编辑：允许添加各种常见标记
  - 评论
  - 自由导航
- 导入和导出 SGF 游戏记录文件
- 灵活的设置：插件具有设置，这些设置也可以在文件级别上进行精细调整（通过 frontmatter 字段实现）
- 支持显示部分棋盘（对于学习死活问题很有用）
- 支持渲染 `sgf` 格式的代码块，这意味着可以将 `sgf` 代码块插入常规 MD 文档中，以渲染嵌入式只读围棋棋盘
- 支持在浅色和深色模式下的 UI

## 如何操作

- 创建一个新的围棋记录文件：
  - 在 Obsidian 的最左侧可以找到一个类似“围棋棋子”的图标；点击它以创建一个新文件
  - 你也可以通过 Obsidian 的全局命令找到创建新的围棋记录文件的选项
  - 在侧边栏中右键点击一个文件夹，然后在菜单中找到“创建围棋记录文件”
- 创建新的围棋记录后：
  - 如果你有现有的 SGF 格式的游戏记录需要导入，你可以通过点击左下角菜单中的“导入 SGF 文件”来立即导入它们
  - 你可以逐步下围棋，一步一步地放置棋子
  - 你可以随时切换到“编辑模式”来标记棋盘和棋子
  - 你可以随时打开“评论”编辑来添加评论和好/坏着法标记
- 导航：
  - 使用棋盘下方的进度条进行导航
  - 使用键盘上的箭头键进行导航
  - 通过在棋盘上滚动中间鼠标按钮进行导航
  - 在变化树中拖动并点击一个变化点来导航
  - 使用变化树右上角的菜单快速导航到一些标记点
- 另存为模板：
  - 创建一个新的围棋记录文件后，从左下角的菜单中打开设置
  - 设置完默认配置后，将围棋记录文件放入 Obsidian 模板文件夹中
  - 下次需要相同配置时，你可以使用像**Templater**这样的插件根据该模板自动生成一个新文件，或者你可以手动复制它来创建一个新文件

## 开发

- 克隆代码仓库
- 运行 `pnpm install` 安装依赖
- 运行 `pnpm run dev` 监视源代码的更改
- 使您的 Obsidian 可以访问此插件，**强烈建议使用专门用于开发的空白 Obsidian Vault**，而不是您日常笔记的常规 Vault。这可以通过建立符号链接来实现。
- `ln -s /path/to/your/<plugin-repo> /path/to/your/obsidian/vault/.obsidian/plugins/<plugin-name>`

## 感谢

特别感谢 [Sabaki](https://github.com/SabakiHQ/Sabaki) 项目以及所有参与其中的开发者们。没有你们，我可能需要做大量的工作来实现这个插件。感谢你们开发了如此优秀的围棋工具，并愿意将其开源。

## 许可证

该项目在 [MIT许可证](./LICENSE.md) 下许可。

## 语言

该项目中的英语、韩语和日语均使用翻译工具进行翻译。如果有任何问题，请随时指出。
