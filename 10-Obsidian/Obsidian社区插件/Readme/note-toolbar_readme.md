---
uid: 2024042221420573
title: Obsidian 插件：【Readme】Note Toolbar
tags: ['obsidian插件', 'readme']
description: Add customizable toolbars to your notes.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Note Toolbar

> [!Note] 插件名片
> - 插件名称：Note Toolbar
> - 插件作者：Chris Gurney
> - 插件说明：Add customizable toolbars to your notes.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chrisgurney/obsidian-note-toolbar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-toolbar)

## 概述

Add customizable toolbars to your notes.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgurney/obsidian-note-toolbar/master/README.md)

---

## Readme(翻译）

下面是 [[note-toolbar]] 插件的自述翻译

【机翻】

![笔记工具栏Obsidian插件](https://cdn.pkmer.cn/covers/note-toolbar_2_0.png!pkmer)

[![GitHub发布](https://img.shields.io/github/v/release/chrisgurney/obsidian-note-toolbar?sort=semver)](https://github.com/chrisgurney/obsidian-note-toolbar/releases)

[![许可证](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [!["给我买杯咖啡"](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/cheznine)

[Obsidian](https://obsidian.md) 的笔记工具栏插件提供了一种灵活的方式在笔记顶部创建工具栏。

通过这个插件，您还可以获得 [笔记工具栏Callouts](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Note-Toolbar-Callouts)，您可以在笔记的任何位置添加它们。

📖 **如何使用这个插件：[用户指南](https://github.com/chrisgurney/obsidian-note-toolbar/wiki)**

![一个固定工具栏的演示](https://cdn.pkmer.cn/covers/note-toolbar_2_1.gif!pkmer)

# 安装

[在这里安装](https://obsidian.md/plugins?id=note-toolbar) 或者：

1. 打开 Obsidian 的设置，点击 _Community plugins_
2. 搜索 _Note Toolbar_ 并选择它
3. _安装_

<details>
<summary>通过 BRAT 安装测试版本</summary>
<br/>
 允许您测试插件的测试版本，以提供反馈。<br/>
<br/>
随着测试版本的推出，我欢迎和您发现的任何！<br/>
<br/>
<blockquote>
  <ol>
    <li>安装 BRAT 插件：
      <ul>
        <li>打开 <i>设置 > Community Plugins</i></li>
        <li><i>禁用安全模式</i>，如果已启用</li>
        <li>浏览，并 <i>搜索 "BRAT"</i></li>
        <li>安装最新版本的 <i>Obsidian 42 - BRAT</i></li>
      </ul></li>
    <li>打开 BRAT 设置（<i>设置 -> Obsidian 42 - BRAT</i>）</li>
    <li>滚动到 <i>Beta Plugin List</i> 部分</li>
    <li><i>添加 Beta 插件</i></li>
    <li>指定此仓库：<code>chrisgurney/obsidian-note-toolbar</code></li>
    <li><i>启用 Note Toolbar 插件</i>（<i>设置 > Community plugins</i>）</li>
  </ol>
</blockquote>
</details>

# 开始 🚀

启用后，打开笔记工具栏的设置：

1. 创建一个 _+ 新工具栏_
2. 给工具栏一个 _名称_。
3. _+ 添加工具栏项目_
4. 退出设置，并 _打开一个笔记_。
5. 添加一个 `notetoolbar` 属性。将其设置为您的工具栏的名称。

如果您希望工具栏显示而不使用属性，请尝试将一个文件夹（比如您的每日笔记存储的地方）映射到您的新工具栏。

工具栏项目可以是命令、文件或 URI（网站 URL 和插件 URI）。有关详细说明和示例，请参阅 [用户指南](https://github.com/chrisgurney/obsidian-note-toolbar/wiki)。

一些快速示例：

| 示例 | 如何？ |
| --- | --- |
| 链接到下一个、上一个和今天的日常笔记 | 使用核心 _ 每日笔记 _ 插件的命令（[说明](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Daily-Notes)） |
| 插入模板 | 使用 [Templater](https://github.com/SilentVoid13/Templater) 的 `打开插入模板模态框` 命令（[说明](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Templates)） |
| 显示书签 | 使用 `书签：显示书签` 命令打开书签面板（[说明](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Bookmarks)），或者使用 [笔记工具栏标注](#note-toolbar-callouts) 和 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 生成带有书签的工具栏。([说明](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Bookmarks)) |
| 执行 Shell 命令 | 使用 [Shell Commands](https://github.com/Taitava/obsidian-shellcommands) 插件。([说明](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Shell-Commands)) |

[告诉我](https://github.com/chrisgurney/obsidian-note-toolbar/discussions) 您如何使用工具栏，我将把它们添加到 [示例](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Examples) 中！

# 用户指南

📖 **查看 [用户指南](https://github.com/chrisgurney/obsidian-note-toolbar/wiki)。**

安装完成后，在 Obsidian 中转到：_设置... > 笔记工具栏_，然后点击 _+ 新工具栏_。

![设置配置示例](https://cdn.pkmer.cn/covers/note-toolbar_2_2.png!pkmer)

![新工具栏的设置示例](https://cdn.pkmer.cn/covers/note-toolbar_2_3.png!pkmer)

# 许可证

Note Toolbar 根据 Apache License Version 2.0 许可。请参阅 [LICENSE](https://github.com/chrisgurney/obsidian-note-toolbar/blob/master/LICENSE)。

# 灵感和感谢 🙏

向在开发这个插件过程中帮助我解决问题的其他项目和人员致敬：

- Obsidian 的 [示例插件](https://github.com/obsidianmd/obsidian-sample-plugin)，[开发者文档](https://docs.obsidian.md/) 和 [这个播放列表](https://www.youtube.com/playlist?list=PLIDCb22ZUTBnMCbJa-st4PD5T3Olep078)。
- [Templater](https://github.com/SilentVoid13/Templater) - 为代码，特别是关于设置方面的部分。
- [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes/) - 为代码，也是这个插件能够满足我的需求的原因之一... 还有 liam.cain 的帮助！
- [BRAT](https://github.com/TfTHacker/obsidian42-brat) - 为提供测试这个插件的机会。
- Obsidian Discord 上的所有人员（<https://discord.gg/obsidianmd>）#plugin-dev 频道，感谢他们的时间和文档，包括但不限于：claremacrae, dovos, lemons_dev, liam.cain, joethei, sailKite, SkepticMystic

# 贡献 🧑‍💻

欢迎 [讨论您的想法](https://github.com/chrisgurney/obsidian-note-toolbar/discussions)! 欢迎提交拉取请求！

# 支持 🛟

📖 **请查看 [用户指南](https://github.com/chrisgurney/obsidian-note-toolbar/wiki) 中的 [Troubleshooting](https://github.com/chrisgurney/obsidian-note-toolbar/Troubleshooting)。**

[在这里提问](https://github.com/chrisgurney/obsidian-note-toolbar/discussions) 或者 [请求功能](https://github.com/chrisgurney/obsidian-note-toolbar/discussions/categories/ideas)。如果遇到类似 bug 的问题，请 [提交问题](https://github.com/chrisgurney/obsidian-note-toolbar/issues)。

如果您觉得这个插件有用，并希望在财务上支持我，我接受捐赠。谢谢！

[!["给我买杯咖啡"](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/cheznine)
