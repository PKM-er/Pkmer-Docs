---
uid: 20260916160000
title: MindBraid：把 Markdown 笔记展开为可编辑思维导图
tags: [Obsidian, Markdown, 思维导图, 知识管理]
description: MindBraid 是一个 Obsidian 桌面端插件，将当前 Markdown 笔记的标题与列表渲染为可编辑思维导图，并支持布局、样式与演示视图。
author: Soren-ac
type: practice
draft: false
editable: true
modified: 20260916160000
---

# MindBraid：把 Markdown 笔记展开为可编辑思维导图

> [!note] 插件简介
> MindBraid 是一个面向 Obsidian 桌面端的开源社区插件。它把当前 Markdown 笔记中的标题和嵌套列表，转换为一张可以继续编辑的思维导图；同一份内容可以在文字、结构视图和演示视图之间切换。
>
> - 插件 ID：`obmind`
> - 当前版本：`0.1.4`
> - 项目地址：[Soren-ac/MindBraid](https://github.com/Soren-ac/MindBraid)
> - 在线宣传页：[soren-ac.github.io/MindBraid](https://soren-ac.github.io/MindBraid/)

## 为什么需要另一种笔记视图

Markdown 很适合快速记录，但标题和列表的层级关系通常藏在文本里。MindBraid 读取当前打开的笔记，把这些层级转换成可浏览、可调整的思维导图，让“我写了什么”和“它们如何连接”同时可见。

它不要求你维护第二份大纲，也不把思路复制到另一款导图软件中。Markdown 仍然是源文件，思维导图是同一份内容的另一种视角。

![MindBraid 首页预览](https://soren-ac.github.io/MindBraid/assets/readme/showcase-pencil-map.png)

## 从 Markdown 到思维导图

新建一份普通的 Markdown 笔记，例如：

```markdown
# 研究主题

## 要回答的问题

- 现状是什么
- 哪些信息还不完整

## 下一步方法

- 整理资料
- 记录验证结果
```

打开命令面板，执行“为当前笔记打开思维导图”，MindBraid 会根据当前笔记的标题和列表生成结构。之后继续编辑 Markdown，视图会随当前内容刷新。

![Markdown 与思维导图并排显示](https://soren-ac.github.io/MindBraid/assets/readme/markdown-to-map.png)

## 可以怎样使用

### 在节点里直接整理

节点支持直接编辑。输入过程中可以使用 `Tab` 创建子主题，使用 `Enter` 创建同级主题；结构调整完成后再回到 Markdown 中继续写作。这样适合整理课程提纲、研究问题、项目计划和会议记录。

### 拖动分支调整结构

一个分支可以整体移动到新的顺序或父节点下。松手前会显示目标预览，便于确认这次调整会怎样影响层级。

### 让结构和表达各自独立

布局、思维导图样式和配色可以分别调整。你可以使用紧凑的树状布局快速浏览，也可以选择更适合讲解的平衡布局；改变视觉表达不会改写 Markdown 内容。

### 从全局视图切换到聚焦和演示

面对较大的笔记，可以先折叠分支、搜索主题，再聚焦到一条路径。快速演示和保存的 Deck 都是面向当前内容的只读视图，适合把一份笔记临时讲给别人听。

![MindBraid 演示视图](https://soren-ac.github.io/MindBraid/assets/presentation/presentation-speaker-spotlight.png)

## 本地运行和明确写入

MindBraid 只解析当前显示的 Markdown 笔记，不扫描整个 Vault，也不把笔记内容发送到云端。浏览、选择、折叠、缩放、搜索和演示保持只读；只有明确的节点编辑、创建、移动或主题命令才会写回源文件。

这意味着你可以放心把导图当成阅读和整理层使用，同时保留 Markdown 的可移植性。插件本身不依赖在线服务，也不会在后台修改笔记。

## 安装方式

当前版本可以从 [GitHub Releases](https://github.com/Soren-ac/MindBraid/releases/tag/0.1.4) 手动安装：

1. 下载 `main.js`、`manifest.json` 和 `styles.css`。
2. 在目标 Vault 中创建 `.obsidian/plugins/obmind` 文件夹。
3. 将这三个文件放入该文件夹，重启或重新加载 Obsidian。
4. 在设置中启用第三方插件，然后打开命令面板执行“为当前笔记打开思维导图”。

插件要求 Obsidian `1.7.2` 或更高版本的桌面端。后续版本和变更记录会在 [Releases](https://github.com/Soren-ac/MindBraid/releases) 中更新。

## 反馈和参与

欢迎在 [GitHub Issues](https://github.com/Soren-ac/MindBraid/issues) 反馈问题，或提交改进建议。若你想了解交互和实现边界，可以直接查看 [项目源码](https://github.com/Soren-ac/MindBraid)。

如果你习惯先看整体信息，再进入具体笔记，也可以从 [MindBraid 产品页](https://soren-ac.github.io/MindBraid/) 开始。
