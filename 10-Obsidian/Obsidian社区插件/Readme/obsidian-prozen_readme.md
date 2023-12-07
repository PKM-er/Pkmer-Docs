---
uid: 2023120719405443
title: Obsidian 插件：【Readme】ProZen
tags: ['obsidian插件', 'readme']
description: 进入禅模式，专注于写作。该插件将当前标签扩展到全屏，除内容外删除一切。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】ProZen

> [!Note] 插件名片
> - 插件名称：ProZen
> - 插件作者：Moskvitin
> - 插件说明：进入禅模式，专注于写作。该插件将当前标签扩展到全屏，除内容外删除一切。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cmoskvitin/obsidian-prozen)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-prozen)

## 概述

进入禅模式，专注于写作。该插件将当前标签扩展到全屏，除内容外删除一切。

![ProZen](https://cdn.pkmer.cn/covers/obsidian-prozen_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cmoskvitin/obsidian-prozen/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-prozen]] 插件的自述翻译

# Obsidian 的真正“禅”（全屏）模式

ProZen Plugin for Obsidian 是一款为 Obsidian 设计的插件，提供真正的“禅”（全屏）模式。

## 描述

ProZen 不仅仅是将您的活动标签全屏显示 - 它还消除了所有的干扰。在禅模式下，所有的面板、图标，甚至滚动条都消失了。对于那些喜欢在写作或阅读时更加专注的人来说，ProZen 可以使屏幕的两侧变暗，就像一个渐变遮罩。

![prozen](https://cdn.pkmer.cn/covers/obsidian-prozen_1_0.gif!pkmer)

*渐变效果比 gif 图中更加平滑。*

使用方法

### 手动安装

希望这个插件能够进入 [Obsidian的插件库](https://obsidian.md/plugins)，在那之前，你可以手动安装它：

1. 从 [最新版本的发布包](https://github.com/cmoskvitin/obsidian-prozen/releases) 中下载 `main.js`、`styles.css` 和 `manifest.json` 文件。
2. 进入你的 Obsidian vault 的 `/.obsidian/plugins` 文件夹。在其中创建 `/obsidian-prozen` 文件夹。
3. 将下载的文件放入 `/obsidian-prozen` 文件夹中。
4. 重新启动 Obsidian。
5. 打开 Obsidian 的设置，找到 ProZen 插件。启用插件，设置一个切换 Zen 模式的热键，并根据你的喜好调整插件的设置。

### 插件设置

#### 小插图

逐渐使屏幕的两侧变暗，将您的注意力集中在中间的文本上。在黑暗的房间中使用黑曜石主题效果尤为明显。渐变从文本到两侧由完全透明到黑色开始。

- **不透明度**：使变暗效果更柔和或更深。0 表示关闭小插图。
- **缩放**：确定屏幕空间的多少被变暗。

#### 动画

- **淡入持续时间**：进入禅模式时内容淡入动画的持续时间。这只是我的个人喜好。通过这个动画（我将其设置为两秒），文档能够更吸引我的注意力，并让我进入一种高效和灵感激发的心境。0 表示关闭动画。

#### 切换按钮

在禅模式下用于显示/隐藏视图元素的各种切换按钮：

- 滚动条
- 头部
- 图形视图中的图形控制按钮

#### 其他设置（杂项）

- **强制内容居中**：在 Obsidian 的设置中，有一个名为“可读行宽”的切换按钮。当它关闭时，文本内容将占据整个页面的宽度。而“强制内容居中”会使文本在禅模式下居中显示，忽略这个全局设置。

## 已知问题

- 使用 `Ctrl-Tab` 循环浏览窗格或使用 `Ctrl-G` 切换到图形视图时，Zen 模式的样式会关闭所有选项卡，但仍然保持在最初触发 Zen 模式的选项卡上。在未来的某个版本中，我希望能够在保持 Zen 模式的同时跳转到选项卡。

关于我

我的姓氏是 Moskvitin，我是一个业余的自学 JS 开发者，将编码视为一种爱好。我希望有一天我能够熟练到足以将这个爱好变成一份全职工作。我意识到有经验的开发者可能会觉得我的代码粗糙且不够优化，但我认真对待我的个人项目，追求完美细节，并尽力修复我在这个技能水平上能够修复的问题。

在现实生活中，我是一家开发一些复杂东西的公司的技术作家，描述这些东西需要全神贯注地使用精确的措辞。因此，ProZen 是我为自己制作的，以便日常使用。

我非常感谢在 GitHub 上提供的任何 [反馈和功能请求](https://github.com/cmoskvitin/obsidian-prozen/discussions)。您还可以...

[<img src="https://img.buymeacoffee.com/button-api/?text=请我喝咖啡&emoji=&slug=moskvitin&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" alt="BuyMeACoffee" width="200">](https://www.buymeacoffee.com/moskvitin)

:)

使用 ProZen 愉快！ :)
