---
uid: 2023120522260579
title: Obsidian 插件：【Readme】Mini Vimrc
tags: ['obsidian插件', 'readme']
description: 通过.vimrc文件添加Vim键绑定。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Mini Vimrc

> [!Note] 插件名片
> - 插件名称：Mini Vimrc
> - 插件作者：Felipe M.
> - 插件说明：通过.vimrc 文件添加 Vim 键绑定。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cabra-arretado/mini-vimrc-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mini-vimrc)

## 概述

通过.vimrc 文件添加 Vim 键绑定。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cabra-arretado/mini-vimrc-obsidian/main/README.md)
>

---

## Readme(翻译）

下面是 [[mini-vimrc]] 插件的自述翻译

# Obsidian Vim 模式的 Mini Vim Keymaps 插件

在这个仓库中，我们致力于创建一个简洁的 Obsidian 插件，只做一件事并且做得很好：*将 Vim 的基本映射设置为 Obsidian 的 Vim 模式*

## 支持的 Vim 设置

- [x] map
- [x] imap
- [x] nmap
- [x] vmap
- [x] unmap

## 入门指南

首先：记得在你的 Vault 中激活 Vim 模式。设置 -> 编辑器 -> Vim 键绑定

在 Obsidian Vault 的根目录下创建一个 `.vimrc` 文件，并添加所需的命令。

### `.vimrc` 示例

``` vimscript
" 使用连续按下 j 和 k 键来退出插入模式（VIM 的常见配置）
imap jk <Esc>
imap JK <Esc>

" j 和 k 键在可视和普通模式下跳转到视觉行而不是逻辑行（对于更有机的体验非常有用）
map j gj
map k gk

" 使用 H 和 L 在可视和普通模式下在空行之间导航
map H {
map L }

" 使用 K 和 J 在可视和普通模式下前后滚动
map K <C-b>
map J <C-f>

" 使用 ; 在可视和普通模式下开始命令
map ; :
```

### 设置

##### Vimrc 路径

默认路径位于根文件夹 `.vimrc` 上。

您可以将其更改为 Markdown 文件或简单文本文件。

无论如何，它们都将被视为 `.vimrc` 文件，并且每一行都将被读取（注释行以 `"` 开头，如上面的示例所示）。

Markdown 文件是一种选择，以防您想要在 Obsidian 中访问和编辑该文件。

**重要：**如果您要使用 Markdown 文件，请确保添加文件扩展名 `.md`，而不仅仅是在 Obsidian 文件浏览器中看到的文件名。

另一个选项是使用 `.obsidian/.vimrc`，以便文件位于其他 Obsidian 配置文件的相同文件夹中。

动机

Obsidian 提供了一个由 CodeMirror 驱动的 Vim 模式编辑器。在这样的环境中，键位映射是有效的，但默认情况下，它不允许用户在初始化时自动设置键位映射。这导致用户每次打开 Obsidian 时都必须手动输入所有所需的键位映射。

这就是这个插件的作用所在：通过在 Obsidian vault 中使用一个 `.vimrc` 文件，我们将能够声明键位映射并设置基本选项，以便在每次打开 Obsidian 时自动初始化。

为什么只有按键映射而没有其他所有的 Vim 配置的插件？

我们想要创建一个最小化的插件，只执行一个功能。

通过这种设计，插件变得：

* *更容易理解*：因此，即使没有太多上下文，您也可以在将插件代码添加到 Obsidian vault 之前检查它。
* *可维护性*：因此，如果 Obsidian 或其依赖项发生任何 API 更改，我们可以轻松更新代码和功能。

如果您正在寻找更完整的功能插件，您应该查看：[obsidian-vimrc-support](https://github.com/esm7/obsidian-vimrc-support)

## 灵感

* [obsidian-vimrc-support](https://github.com/esm7/obsidian-vimrc-support)
