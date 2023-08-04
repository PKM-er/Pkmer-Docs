---
uid: 2023080322205563
title: Obsidian 插件：【Readme】Jump to link
tags: ['导航工具', 'obsidian插件', 'readme']
description: 这个插件允许使用热键在当前文档中打开链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Jump to link

> [!Note] 插件名片
> - 插件名称：Jump to link
> - 插件作者：MrJackphil
> - 插件说明：这个插件允许使用热键在当前文档中打开链接。
> - 插件分类：[' 导航工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mrjackphil/obsidian-jump-to-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mrj-jump-to-link)

## 概述

这个插件允许使用热键在当前文档中打开链接。

![Jump to link](https://cdn.pkmer.cn/covers/mrj-jump-to-link.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mrjackphil/obsidian-jump-to-link/master/README.md)
>

---

## Readme(翻译）

下面是 [[mrj-jump-to-link]] 插件的自述翻译

Obsidian 插件：跳转到链接

使用快捷键快速在链接之间导航，或跳转到页面上的任何单词。

### 跳转到链接

![](https://user-images.githubusercontent.com/5632228/99727862-27fbee80-2a7e-11eb-8af2-7303cc177fca.png)

### 跳转到任意位置（基于正则表达式的导航）

![](https://raw.githubusercontent.com/mrjackphil/obsidian-jump-to-link/master/screenshots/jumptoanywhere.png)

### 光速

### 设置

![](./screenshots/settings.png)

### 如何使用（链接导航）

- 打开命令面板（`Ctrl+P`），找到并选择“跳转到链接”命令
- 您可以使用快捷键（默认为 `Ctrl + '`）
- 如果打开的文件中有任何链接，您应该看到在链接上方显示的字母，按下该字母即可打开链接
- 在按下链接字母时按住 `Shift` 键，可以在新窗格中打开注释

### 如何使用 Jump to Anywhere（编辑器导航）

- 使用命令面板，或按下快捷键（默认为 `Ctrl + ;`）即可立即跳转到页面上的任何单词！
- 如果在按下快捷键时按住 `Shift` 键，则会选择跳转到的单词。
- Jump to Anywhere 是基于正则表达式的导航功能，类似于 [`vim-easymotion`](https://github.com/easymotion/vim-easymotion)。
- Jump to Anywhere 在常规编辑器模式和 VIM 模式下均可使用！
- 可以根据用户偏好配置自定义正则表达式
- 默认配置在长度大于 3 个字符的单词上添加标签：[正则表达式：`\b\w{3,}\b`]
- 建议为 Jump to Anywhere 设置 `用于链接提示的字符` 选项：`asdfghhjklqwertyuiopzxcvbnm`
  - 这些设置确保在具有大量文本的文档中，所有 26 个字母都可用于跳转。
  - 如果匹配项多于可用字母，则标签将显示为 `undefined`，无法跳转到该位置。

如何使用 Lightspeed

Lightspeed 最初是一个类似于 vim-sneak 或 easymotion 的 [vim插件](https://github.com/ggandor/lightspeed.nvim)。有关视频，请参阅此 [问题](https://github.com/mrjackphil/obsidian-jump-to-link/issues/35)。

您可以分配一个热键，或与 [Obsidian vimrc插件](https://github.com/esm7/obsidian-vimrc-support) 结合使用：

```vimrc
exmap jumpToLink obcommand mrj-jump-to-link:activate-lightspeed-jump
nmap gs :jumpToLink
```

这个想法和原始代码来自 [@kohane27](https://github.com/mrjackphil/obsidian-jump-to-link/issues/35#issuecomment-1085905668)。

当调用时，可以使用 CSS 修改其外观。默认情况下，它是：

```css
.theme-dark, .theme-light {
  --jump-to-link-lightspeed-color: var(--text-muted);
}
```

Lightspeed 仅在新的 Codemirror 6 编辑器中受支持。

如何安装插件

从社区插件部分安装插件。

###已知问题

## 支持

- [Patreon](https://patreon.com/mrjackphil)
- [Paypal](https://www.paypal.com/paypalme/mrjackphil)



