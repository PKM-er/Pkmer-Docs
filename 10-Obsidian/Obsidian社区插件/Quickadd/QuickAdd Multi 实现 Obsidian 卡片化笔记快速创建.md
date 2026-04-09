---
uid: 20260409183249
title: 告别模板混乱：QuickAdd Multi 实现 Obsidian 卡片化笔记快速创建
tags: [工作流搭建, quickadd脚本]
description: 通过 QuickAdd Multi，不仅能在 Obsidian 中建立了一个高效、可视化的多类型笔记入口，更重要的是实现了一套“随用随建”的流畅创作体验。无论是通过全局快捷键呼出卡片面板，还是利用 Slash Commander 进行行内精准嵌入，其核心目的都是为了尽可能降低操作过程中的“摩擦力”，让我们能把更多精力聚焦在思考与输出本身。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260409183844
---

# 告别模板混乱：QuickAdd Multi 实现 Obsidian 卡片化笔记快速创建

## 前言

随着 Obsidian 插件生态的日益繁荣以及原生功能的不断扩展，笔记的文件格式也愈发多元化（如 Canvas、Bases、Excalidraw 等）。如今，记录不再局限于传统的 Markdown 线性文本，还涵盖了思维导图、无限画板等多种表现形式。针对不同的内容选择最合适的记录载体，不仅能让记录过程更高效，还能显著提升信息的消化与吸收能力。

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409060639525.png!pkmer)

然而，笔记形式的增多有时如同一把双刃剑：记录载体过于丰富，反而可能增加操作成本，导致管理混乱。因此，我建议采用“**以 Markdown 为核心，其他类型为辅助**”的策略。Markdown 笔记主要由文本、标题、列表等基础元素构成，辅以表格整理信息或流程图进行可视化表达，所谓一图胜千言。

对于非线性笔记，应明确其核心应用场景：例如，Excalidraw 擅长头脑风暴与素材整理，Canvas 则更适合梳理逻辑思路。它们在直观性上弥补了 Markdown 的局限，因为合适的工具才能发挥最大的效能。

针对不同类型的文件可以采用不同文件夹来存放。类似于附件文件夹专门用来存放媒体文件，Canvas 和 Excalidraw 这类文件也可以使用专门的零散文件夹进行临时存放，后续再与配套的笔记或通过 FolderNote 插件进行迁移整理。

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409063523398.png!pkmer)

在了解了不同类型笔记的用途后，新的挑战接踵而至：如何快速创建这些文件并将其自动存放到预设位置（如特定的归档目录或当前笔记所在的同级目录）？虽然利用模板插件可以创建预设文件，但随着模板数量的增长，逐个查找和调用的成本也随之增加。而 **QuickAdd** 插件正是解决这一问题的利器。

**QuickAdd** 作为 Obsidian 中极具威力的自动化插件，旨在显著优化笔记的创建与处理效率。它支持通过自定义命令、模板 (Template)、捕获 (Capture) 及宏 (Macro) 等多种核心功能，实现一键新建笔记、快速插入数据或批量处理文件。利用其 **Multi**（多级菜单）功能，我们可以将不同类型的笔记创建入口整合在一起，实现分类明确的精准分发。

尽管 QuickAdd 的功能异常强大，但其配置门槛也让不少新手望而却步。下文我将结合自己的实操经验，分享一套完整且美观的高效工作流方案。

## 利用 QuickAdd Multi 整合多类型笔记创建

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409061254043.png!pkmer)

在 QuickAdd 设置中添加一个 **Multi** 选项。通过预先配置好的 Template 或 Capture 动作，将其嵌套在 Multi 菜单下，即可一键呼出新建列表，涵盖 Excalidraw、Markdown、Markmind、Kanban 等各类文件。

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260408113927775.png!pkmer)

实例，新建 Excalidraw 的配置如下：

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260408114705021.png!pkmer)

如上图所示，在新建 Excalidraw 配置中，你可以灵活定义文件模板、文件名格式、存储路径以及创建后的打开方式。

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409054455788.png!pkmer)

---

对于更加复杂的逻辑，可以通过 **Macro** 调用 JavaScript 脚本来实现。例如，在创建项目 (Project)、任务笔记 (TaskNote) 或日记 (Journal) 时，脚本可以根据当前上下文动态配置目标文件夹、命名规则及模板内容，极大扩展了工作流的灵活性。

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409053337547.png!pkmer)

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409055013740.gif)

---

Multi 菜单不仅支持直接嵌套单一动作，还可以进行**层级嵌套**。例如，为 Markmind 插件配置模板时，可以创建一个二级菜单，并在内部提供“Rich 模式”与“Markdown 模式”两个选项。这种树状结构让选择过程更加直观，支持快速点击创建或随时返回上一级。

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409055113979.png!pkmer)

---

最后，为该 Multi 动作设置一个全局快捷键。考虑到 `Ctrl+N` 通常用于快速创建默认笔记或草稿，我推荐使用 `Ctrl+Shift+N` 来唤起这个全功能新建面板。为了进一步提升视觉体验，我还编写了一段 CSS 代码，将原本单一的列表转换成更加现代的**卡片化界面样式**：

```css
/* 仅针对 QuickAdd（prompt-results 内出现 quickadd-choice-suggestion 的模态框） */
.modal-container.mod-dim:has(.prompt-results .quickadd-choice-suggestion) {

  /* 居中显示 */
  .prompt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 0;
  }
  /* 设置quickadd 的提示框为 */

  /* 1. 容器改为网格布局 */
  .prompt-results {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    /* 自动填充，每列最小140px */
    gap: 12px;
    /* 卡片间距 */
    padding: 15px;
    max-height: 400px;
    overflow-y: auto;
  }

  /* 2. 卡片基础样式 */
  .suggestion-item.quickadd-choice-suggestion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    border-radius: 8px;
    background-color: var(--background-secondary);
    border: 1px solid var(--background-modifier-border);
    /* transition: all 0.2s ease; */
    cursor: pointer;
    text-align: center;
  }

  /* 3. 悬停效果 (Hover) */
  .suggestion-item.quickadd-choice-suggestion:hover {
    background-color: var(--background-modifier-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* 4. 选中状态样式 (Selected) */
  .suggestion-item.quickadd-choice-suggestion.is-selected {
    background-color: var(--interactive-accent) !important;
    color: white !important;
    border-color: var(--interactive-accent);
  }

  /* 5. 文字样式调整 */
  .suggestion-item p {
    margin: 0;
    font-size: 0.9em;
    font-weight: 500;
    word-break: break-word;
  }
}
```

## 使用 Slash Commander 实现行内快速创建与嵌入

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409060311067.png!pkmer)

如果你希望在正文书写过程中快速插入并关联子笔记，可以配合 **Slash Commander** 插件实现“正斜杠菜单”调用：

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409060111185.gif!pkmer)

在 Slash Commander 中关联对应的 QuickAdd Insert 动作。其核心逻辑是在 QuickAdd 的 Template 参数中配置笔记链接的插入行为及文件的打开方式。

![260408_Quickadd Multi 搭建「新建不同类型笔记」方法&样式.md](https://cdn.pkmer.cn/images/File-20260409055614267.png!pkmer)

> 关于 SVG 的创建可以采用 [[QuickAdd脚本-插入并编辑SVG文件|QuickAdd脚本-插入并编辑SVG文件]] 来实现，其他的都可以通过 Quickadd 的 Template 模式来生成。

## 结语

通过 QuickAdd Multi，不仅能在 Obsidian 中建立了一个高效、可视化的多类型笔记入口，更重要的是实现了一套“随用随建”的流畅创作体验。无论是通过全局快捷键呼出卡片面板，还是利用 Slash Commander 进行行内精准嵌入，其核心目的都是为了尽可能降低操作过程中的“摩擦力”，让我们能把更多精力聚焦在思考与输出本身。

自动化的工作流没有标准答案，建议大家根据自己的笔记习惯（如更偏好 Canvas 还是传统 Markdown）灵活调整。希望这套配置能成为你 Obsidian 创作之路上的有力加速器。
