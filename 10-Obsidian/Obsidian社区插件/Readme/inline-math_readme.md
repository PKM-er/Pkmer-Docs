---
uid: 2023102611081737
title: Obsidian 插件：【Readme】No more flickering inline math
tags: ['obsidian插件', 'readme']
description: 不再被Obsidian中闪烁的行内数学所干扰。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】No more flickering inline math

> [!Note] 插件名片
> - 插件名称：No more flickering inline math
> - 插件作者：Ryota Ushio
> - 插件说明：不再被 Obsidian 中闪烁的行内数学所干扰。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RyotaUshio/obsidian-inline-math)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-math)

## 概述

不再被 Obsidian 中闪烁的行内数学所干扰。

![No more flickering inline math](https://cdn.pkmer.cn/covers/inline-math.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RyotaUshio/obsidian-inline-math/master/README.md)
>

---

## Readme(翻译）

下面是 [[inline-math]] 插件的自述翻译

# Obsidian 中不再出现闪烁的行内数学公式

通过这个 [Obsidian.md](https://obsidian.md/) 插件，你将不再被**闪烁的行内数学公式**所打扰！

关闭状态               | 打开状态
:-----------------------:|:------------------------:
![关闭状态](fig/off.gif) | ![打开状态](fig/on.gif)

感谢那些在 [论坛](https://forum.obsidian.md/t/inline-math-allow-white-spaces-before-closing-dollar-signs/63551) 上分享他们的想法的人！

## 支持开发

如果您喜欢这个插件，请考虑通过给我买杯咖啡来支持我！

## 安装

您可以在 Obsidian 的社区插件浏览器中找到它。

此外，您可以通过使用 BRAT 安装并参与最新版本的测试。

1. 安装 [BRAT](obsidian://show-plugin?id=obsidian42-brat) 社区插件并启用它。
2. 转到**选项**。在**Beta 插件列表**部分，点击**添加 Beta 插件**按钮。
3. 复制并粘贴 `https://github.com/RyotaUshio/obsidian-inline-math` 到弹出的提示中，然后点击**添加插件**。
4. （可选）在页面顶部打开**启动时自动更新插件**。
5. 转到**社区插件 > 已安装插件**。您将在列表中找到 " 不再闪烁的内联数学 "。点击切换按钮以启用它。
它很简单。Obsidian 不将 `$[space]...$` 或 `$...[space]$` 识别为数学公式。
因此，当发现内联数学公式 `$...$` 时，该插件会在其开头和结尾插入 `{}`：

```latex
${} ... {}$
```

然后，这些括号被隐藏起来，以免干扰您。

不喜欢括号污染？别担心！

您可以通过运行以下命令来安全地清理括号：

- **清理本笔记中的括号**
- **清理所有打开的笔记中的括号**



