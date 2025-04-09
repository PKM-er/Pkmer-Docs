---
uid: 20250409205850
title: Obsidian 插件：Hide Commands in Menu 自定义任何菜单的隐藏项
tags: ['界面优化', '自定义命令', '插件', 'obsidian插件', 'Obsidian', '效率', '自定义', '右键菜单', '菜单', '隐藏']
description: 允许您将任何命令隐藏到不同的菜单中。
author: bomian98
type: auto
draft: false
editable: false
modified: 20250409215308
---

# Obsidian 插件：Hide Commands in Menu 自定义任何菜单的隐藏项

> [!Note] 插件名片
> - 插件名称：Hide Commands in Menu
> - 插件作者：bomian98
> - 插件说明：允许您针对不同的菜单项配置不同的隐藏命令。
> - 插件分类：[' 界面优化 ', ' 自定义命令 ', ' 插件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/bomian98/obsidian-hide-commands-in-menu)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hide-commands-in-menu)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bomian98/obsidian-hide-commands-in-menu/master/README.md)

## 概述

Obsidian 当前存在很多菜单项，这些菜单项中存在很多命令，有些是 Obsidian 自带的，有些是 Obsidian 社区插件注入的。

然而并非每个菜单项的每个命令都是人们常用的，例如当我们在活跃的选项卡标题上右键时，默认会展示约 30 个命令，这么多命令使得右键菜单变得很长。

Hide Commands in Menu 这个插件可以将用不到的命令从菜单面板中隐藏，让菜单面板变得更精简，能更快更舒适的选择想要执行的命令。

该插件适用于希望定制化菜单、提高工作效率的用户，解决了菜单杂乱、命令冗余的问题，使 Obsidian 使用体验更加清爽。

## 前提条件

如果想要使用这个插件，请确保在 Obsidian 外观设置中关闭了 ”原生菜单“ 选项！

## 效果 & 特性

- 可以针对不同的菜单项配置不同的隐藏命令
- 自动移除隐藏命令后的冗余分隔符
- 为不同的菜单项增加 CSS 标签，从而可以自定义样式
- 可以使用正则表达式来配置隐藏命令

## 菜单项类型

![[hide-commands-in-menu.png|800]]

| 菜单项类型                      | 触发逻辑                   |
| -------------------------- | ---------------------- |
| file-menu (tab-header)     | 右键选项卡标题                |
| file-menu (more-options)   | 点击编辑器右上角的 `...` 按钮     |
| file-menu (file-explorer)  | 在资源管理器中，右键单击一个文件 / 文件夹 |
| file-menu (link)           | 右键单击 Obsidian 内部链接     |
| files-menu (file-explorer) | 在资源管理器中，右键单击多个文件/文件夹   |
| editor-menu                | 编辑模式下，在文件任意位置进行右键点击    |
| url-menu                   | 右键单击网页链接               |
| other-menu                 | 其他任何菜单                 |

> **需要注意**：当处于编辑模式时，右键一个 Obsidian 内部链接或者网页链接，也会触发 `file-menu (link)` 或者 `url-menu`。

如果为了确认当前展示的菜单项，可以使用 Obsidian 的开发者工具来查看菜单项对应的 class 名字。

## 使用方式

首先查看”菜单项类型“章节来明确自己想要隐藏的命令处于哪个菜单项中。

然后在插件设置中选择对应的菜单类型，并输入想要隐藏的命令名字。

对于，”plain text format“ 文本框，可以填入命令名字的全称或者部分名字，会将包含这部分文字的命令隐藏。

对于，”regex format“ 文本框，可以使用正则表达式来匹配要隐藏的命令名字。

由于这个插件会在菜单项第一次渲染后更新菜单项内的命令，所以可能需要一定的延时来处理隐藏逻辑。

默认的延时为 1 毫秒，如果在使用中发现命令没有隐藏，并且确保已正确配置上面内容后，可以调整延时时间。

如果延时时间设置为 1 秒，仍然不能隐藏命令，那么可以在 GitHub 仓库中提交 issue。

## 自定义样式

- 选择被隐藏的命令: `div.custom-menu-hide-item`
- 选择被隐藏的分割线: `div.custom-menu-hide-separator`
- 选择不同的菜单项

| Menu Type                  | CSS 选择器                                  |
| -------------------------- | ---------------------------------------- |
| file-menu (tab-header)     | `.file-menu-tab-header`                  |
| file-menu (more-options)   | `.file-menu-more-options`                |
| file-menu (file-explorer)  | `.file-menu-file-explorer-context-menu`  |
| file-menu (link)           | `.file-menu-link-context-menu`           |
| files-menu (file-explorer) | `.files-menu-file-explorer-context-menu` |
| editor-menu                | `.editor-menu`                           |
| url-menu                   | `.url-menu`                              |
| other-menu                 | `[class="menu"]`                         |

## 感谢

这个插件是基于社区插件 [[customizable-menu]] 更改的。由于 [[customizable-menu]] 不支持对不同的菜单项配置不同的隐藏命令，而自己确实存在希望有的命令展示在某个菜单项，而不展示在另外一个菜单项中，因此开发了这个插件。
