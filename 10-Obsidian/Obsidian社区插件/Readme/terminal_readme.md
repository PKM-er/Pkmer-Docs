---
uid: 20230803204848
title: Obsidian 插件：【Readme】Terminal
tags: ['obsidian插件', 'readme']
description: 在Obsidian中集成控制台、shell和终端。
author: polyipseity
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Terminal

> [!Note] 插件名片
> - 插件名称：Terminal
> - 插件作者：polyipseity
> - 插件说明：在Obsidian中集成控制台、shell和终端。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/polyipseity/obsidian-terminal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?terminal)

## 概述

在Obsidian中集成控制台、shell和终端。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/polyipseity/obsidian-terminal/main/README.md)
> 

---

## Readme(翻译）

下面是 [[terminal]] 插件的自述翻译


终端适用于Obsidian [![release](https://img.shields.io/github/v/release/polyipseity/obsidian-terminal)][最新版本] [![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=Obsidian&color=%238b6cef&label=下载量&query=$["terminal"].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json)][社区插件] [![Python](https://img.shields.io/badge/Python-≥3.10-gold?labelColor=blue&logo=Python&logoColor=white)][Python]

[给我买杯咖啡]: https://buymeacoffee.com/polyipseity
[给我买杯咖啡/嵌入]: https://img.buymeacoffee.com/button-api/?text=给我买杯咖啡&emoji=&slug=polyipseity&button_colour=40DCA5&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00
[Obsidian]: https://obsidian.md/
[Python]: https://python.org/downloads/
[更新日志]: https://github.com/polyipseity/obsidian-terminal/blob/main/CHANGELOG.md
[社区插件]: https://obsidian.md/plugins?id=terminal
[最新版本]: https://github.com/polyipseity/obsidian-terminal/releases/latest
[其他事项]: https://github.com/polyipseity/obsidian-monorepo
[插件库]: https://github.com/polyipseity/obsidian-plugin-library
[仓库]: https://github.com/polyipseity/obsidian-terminal
[预告片]: https://raw.githubusercontent.com/polyipseity/obsidian-terminal/main/assets/trailer.png

在[Obsidian]中集成控制台、Shell和终端。

[![给我买杯咖啡/嵌入]][给我买杯咖啡]

__[仓库] · [更新日志] · [社区插件] · [其他事项] · [功能](#features) · [安装](#installation) · [使用](#usage) · [贡献](#contributing) · [安全](#security)__

![预告片]

首次使用者，请先阅读[安装](#installation)部分！

此文件在首次安装时会自动打开。您可以在设置或命令面板中重新打开它。

## 特点

- 从Obsidian启动外部终端。
- 将终端集成到Obsidian中。
- 在所有平台上可用的模拟开发者控制台。
- 支持多个终端配置文件。
- 内置键盘快捷键。
- 自动保存和恢复集成终端历史记录。
- 在终端中查找。
- 将终端历史记录保存为文件。
- 自定义终端外观。

## 安装

1. 安装插件。
   - 社区插件
     1. 直接从社区插件中安装[插件][community plugin]。
   - 手动安装
     1. 在您的 vault 的 `.obsidian/plugins` 目录下创建 `terminal` 目录。
     2. 将[最新版本发布]中的 `manifest.json`、`main.js` 和 `styles.css` 放入该目录。
   - 构建（最新版本）
     1. 克隆此存储库，包括其子模块。
     2. 安装 [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。
     3. 在根目录中运行 `npm install`。
     4. 在根目录中运行 `npm run obsidian:install <vault directory>`。
   - [Obsidian42 - BRAT](https://obsidian.md/plugins?id=obsidian42-brat)（最新版本）
     - 请参阅[它们的自述文件](https://github.com/TfTHacker/obsidian42-brat#readme)。
2. （仅适用于 Windows，推荐）安装 Python 和依赖项。
   1. 安装 [Python] 3.10/+。
   2. （仅限 Windows）运行 `pip3 install psutil pywinctl`。
   3. 在插件设置中配置 Python 可执行文件。
3. 启用插件。
4. （可选）配置插件设置。

## 使用方法

- 启动新的外部或集成终端
	- 选项卡栏
		1. 点击`打开终端`选项卡。
		2. 选择所需的配置文件。
	- 上下文菜单
		1. 在文件、文件夹或选项卡标题上右键单击。
		2. 选择所需的操作（和配置文件）。
	- 命令面板
		1. 按下`Ctrl+P`或点击左窗口边框旁边的`打开命令面板`选项卡。
		2. 选择所需的操作（和配置文件）。
- 保存和恢复集成终端历史记录
	1. 在退出 Obsidian 时保持终端打开。
	2. 终端历史记录将在下次打开 Obsidian 时恢复。
- 其他操作
	- 包括
		- 在终端中查找：（1），（4）
		- 清除终端：（1），（4）
		- 重新启动终端：（1）
		- 编辑终端：（1）
		- 将终端历史记录保存为文件：（1）
		- 导出、导入或编辑设置：（2），（3）
		- 打开文档：（2），（3）
	- 可通过以下方式获得
		- （1）右键单击选项卡标题/`更多选项`
		- （2）打开设置
		- （3）打开命令面板
		- （4）使用键盘快捷键

### 快捷键

__终端选项卡被聚焦__
- 聚焦终端：`Ctrl`+`Shift`+`` ` ``, `Command`+`` ` `` (macOS)
- 继承全局快捷键

__终端被聚焦__
- 聚焦终端选项卡/取消聚焦终端：`Ctrl`+`Shift`+`` ` ``, `Command`+`` ` `` (macOS)
- 清除终端：`Ctrl`+`Shift`+`K`, `Command`+`K` (macOS)
- 在终端中查找：`Ctrl`+`Shift`+`F`, `Command`+`F` (macOS)

### 配置文件

该插件提供了几个可以参考的配置文件预设。

在设置终端配置文件时，您需要区分shell和终端仿真器。（如有需要，请搜索在线文档。）通常，集成的配置文件只适用于shell，而外部的配置文件只适用于终端仿真器。

#### 示例

__Shell__
- Bash：`bash`
- Bourne shell：`sh`
- 命令提示符：`cmd`
- Dash：`dash`
- Git Bash：`<Git安装路径>\bin\bash.exe`（例如`C:\Program Files\Git\bin\bash.exe`）
- PowerShell Core：`pwsh`
- Windows PowerShell：`powershell`
- Windows子系统Linux：`wsl`或`wsl -d <发行版名称>`
- Z shell：`zsh`

__终端仿真器__
- 命令提示符：`cmd`
- GNOME终端：`gnome-terminal`
- Konsole：`konsole`
- 终端（macOS）：`/System/Applications/Utilities/Terminal.app/Contents/macOS/Terminal $PWD`
- Windows终端：`wt`
- xterm：`xterm`

### 杂项

该插件修补了`require`，以便在开发者控制台中可以使用`require("obsidian")`和其他Obsidian模块。它可以在设置中通过`Expose internal modules`进行切换。

在开发者控制台中，一个上下文变量`$$`被传递到代码中，可以用于动态更改终端选项。该API在[`sources/@types/obsidian-terminal.d.ts#DeveloperConsoleContext`](sources/%40types/obsidian-terminal.d.ts)中可用。

贡献

欢迎贡献！

### 待办事项

这里按字母顺序列出的待办事项是计划中的插件功能。不能保证它们会被完成。然而，我们很可能会接受对它们的贡献。

- 连接到远程shell。
- 复制终端标签。
- 在“打开终端：选择”中创建临时配置文件。
- 检测沙盒环境并通知用户。
- 在按下修饰键时，在“打开终端：选择”之前编辑配置文件。
- 外部链接确认。
- 在开发者控制台中按严重程度过滤控制台日志。
- 修复内置文档中的损坏的章节链接。
- 指示终端调整大小器已崩溃或已禁用。
- 共享终端标签。
- Vim模式切换。
- 生成源映射。

### 翻译

翻译文件位于[`assets/locales/`](assets/locales/)下。每个语言环境都有自己的目录，目录名使用对应的__[IETF语言标签](https://wikipedia.org/wiki/IETF_language_tag)__。这里缺少一些翻译键，而这些键位于[`obsidian-plugin-library`][插件库]中。

要为现有的语言环境贡献翻译，请修改相应目录中的文件。

对于新的语言环境，请创建一个以其语言标签命名的新目录，并将[`assets/locales/en/translation.json`](assets/locales/en/translation.json)复制到其中。然后，在[`assets/locales/en/language.json`](assets/locales/en/language.json)中按以下格式添加一个条目：
```JSONc
{
	// ...
	"en": "English",
	"(your-language-tag)": "(您的语言的本地名称)",
	"uwu": "Uwuish",
	// ...
}
```
按照语言标签的字母顺序对语言列表进行排序。然后修改新目录中的文件。在[`assets/locales.ts`](assets/locales.ts)中会出现错误，您可以忽略这些错误，我们会为您修复。如果您了解TypeScript，欢迎您自行修复这些错误。

在翻译时，请注意以下事项：
- 不要翻译`{{`和`}}`之间的任何内容（`{{example}}`）。它们是__插值__，将在运行时替换为本地化字符串。
- 不要翻译`$t(`和`)`之间的任何内容（`$t(example)`）。它们是对其他本地化字符串的引用。要找到所引用的本地化字符串，请按照由点（`.`）分隔的键的路径进行查找。例如，键[`youtu.be./dQw4w9WgXcQ`](https://youtu.be./dQw4w9WgXcQ)引用了以下内容：
```JSONc
{
	// ...
	"youtu": {
		// ...
		"be": {
			// ...
			"/dQw4w9WgXcQ": "我是 'youtu.be./dQw4w9WgXcQ'！",
			// ...
		},
		// ...
	},
	// ...
}
```
- `generic`下的键是词汇。可以通过`$t(generic.key)`在翻译字符串中引用它们。尽可能多地引用它们，以标准化出现在不同位置的词汇的翻译。
- 可以移动插值和对其他本地化字符串的引用，以使翻译更加自然。也可以不使用原始翻译中使用的某些引用。但是，不使用所有插值是不可以的。

## 安全性

我们希望永远不会出现任何安全漏洞，但不幸的是，这确实会发生。请[报告](#reporting-a-vulnerability)它们！

### 支持的版本

| 版本 | 支持情况 |
|-|-|
| 最新版本 | ✅ |
| 过时版本 | ❌ |

### 报告漏洞

请通过开启一个新的问题来报告漏洞。我们会尽快回复您。



