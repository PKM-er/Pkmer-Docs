---
uid: 20230329145851
title: Obsidian 插件：Pane Relief 在笔记历前进后退按钮上显示历史数量
tags: [Obsidian, 插件, 功能增强]
description: Obsidian 插件：Pane Relief 在笔记历前进后退按钮上显示历史数量
author: OS
type: other
draft: false
editable: false
modified: 20230912140951
---

# Obsidian 插件：Pane Relief 在笔记历前进后退按钮上显示历史数量

## 概述

Obsidian 提供了每个标签页的历史记录功能，这和你的浏览器很像，你可以利用前进和后退按钮，来切换当前标签页浏览过的内容。

但我们可能不知道前进和后退中有多少历史浏览过的标签，或者是想直接跳转到具体某个标签，而不是一层层跳转。这时候我们就需要用到 Pane Relief 插件。

> [!Note] 插件名片
> - 插件名称：Pane Relief
> - 插件作者：PJ Eby
> - 插件说明：每个窗格的历史记录、用于窗格移动和导航的快捷键等
> - 插件分类：[' 界面相关 ', ' 导航工具 ', ' 效率 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/pjeby/pane-relief)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pane-relief)

## 效果&特性

![Pane Relief|455](https://cdn.pkmer.cn/covers/pane-relief.png!pkmer)

- 类似浏览器的每个标签的导航历史记录（包括前进/后退列表）
- 在标签之间或窗口之间移动、移动标签、跳转到第 N 个标签等命令
- 智能的 最大化活动标签命令
- 可选的 每个窗格导航按钮 和 编号
- Obsidian 0.15.6+ 的 焦点锁定，防止侧边栏窗格窃取焦点
- 浏览器风格的“关闭”命令，激活相邻的标签而不是最近使用的标签
- 简单滑动窗格模式，可以在每个窗口中切换，并与 Obsidian 0.16.2 及其新的堆叠标签兼容（0.3.1 中新增）

## 使用

- 所有窗口中所有的标签页的历史记录都会独立保存，这些记录即便在重启后依然有效，如果你还使用了 Workspaces 插件，则历史记录还会与工作区一起保存。
- 在标签页的左上角显示 `←后退`、`前进→` 并增加对应计数。

1. 左键点击 `←` 将当前标签页内容切换到前一个笔记，点击 `→` 将当前标签页内容切换到后一个笔记。
2. 鼠标右键，显示历史笔记清单
    1. 点击历史笔记清单上的笔记，当前标签页内容切换到该笔记
    2. 按<kbd>Ctr</kbd>在鼠标位置悬浮显示笔记内容
    3. 按<kbd>Ctr</kbd>拖拽到当前笔记中，快速建立内部链接
    4. 按<kbd>Ctr</kbd>拖拽到文件管理器中，可以快速挪动文件
3. 鼠标扩展键支持：如果你的鼠标支持额外的扩展键盘（非标注你的三键式鼠标），还可以使用第四和第五个鼠标按钮（一般称作“后退”和“前进”），来完成当前标签页的前进或后退操作。
4. 快速跳转到具体标签
	- Alt+1 指的是最左边的第一篇笔记，Alt+5 指的是从左往右数第五篇笔记；
	- Ctrl+Alt+1 则可以快速将当前焦点所在的笔记转移到第一篇笔记中（还有更多的快捷键则去快捷键界面搜索 Pane）

### 已知问题/当前限制

#### 链接面板

历史管理对于链接面板没有任何特殊处理，因此可能会产生令人费解的结果。例如，在一个面板中点击“后退”可能会导致链接面板将该移动视为“前进”，即将后退的目标作为新的历史记录条目添加。这可能比 Obsidian 内置的历史记录更好，但我乐意听取反馈或提出更好的处理方式的建议。（尤其是从技术角度来说，它们是否可以实际实现。）

#### 重命名和删除

如果您重命名或删除了一个在面板历史记录中的笔记，那么在向前或向后到达该点时可能找不到该文件，并且会显示“未打开文件”的消息。

### 标签编号

如果您安装了 [[obsidian-style-settings|Style Settings]] 插件，可以在其选项页面中打开 Pane Relief 标签编号。如果打开了该选项，它将显示标签标题栏。

但是对于希望显示窗格快捷方式位置编号的自定义主题和 CSS 片段，Pane Relief 会向前 8 个（和最后一个）工作区叶子添加一个类（`.has-pane-relief-label`）和一个变量（`--pane-relief-label`）。该变量提供一个数字，可以与 `counter-reset` 和 `content` 一起使用适当的 CSS 来标记标签。以下是一个简短的 CSS 片段，将数字放在标签标题头中（您必须启用此功能才能使其工作）：

```css
/* 在标签标题中编号窗格 */
.workspace-split.mod-root .workspace-leaf .view-header-icon::before {
    content: "";
    display: inline-flex;
    position: relative;
    bottom: 0px;
    min-inline-size: 1em;
}

.workspace-split.mod-root .workspace-leaf.has-pane-relief-label .view-header-icon::before {
    counter-reset: pane-number var(--pane-relief-label);
    content: counter(pane-number);
}
```

> [!Note] 注意事项
> - 显示 `←后退`、`前进→` ：在 1.0 后已经官方支持。
> - 显示笔记历史清单的功能：在 1.0 后已经官方支持。