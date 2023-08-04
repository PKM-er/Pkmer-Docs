---
uid: 2023080322243275
title: Obsidian 插件：【Readme】Paste Mode
tags: ['obsidian插件', 'readme']
description: 粘贴内容，并在任何缩进级别标记块引用。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Paste Mode

> [!Note] 插件名片
> - 插件名称：Paste Mode
> - 插件作者：Jacob Levernier
> - 插件说明：粘贴内容，并在任何缩进级别标记块引用。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jglev/obsidian-paste-mode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-paste-to-current-indentation)

## 概述

粘贴内容，并在任何缩进级别标记块引用。

![Paste Mode](https://cdn.pkmer.cn/covers/obsidian-paste-to-current-indentation.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jglev/obsidian-paste-mode/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-paste-to-current-indentation]] 插件的自述翻译

## 黑曜石粘贴模式

一个用于粘贴和管理缩进文本（包括块引用）的 [Obsidian](https://obsidian.md/) 插件。该插件特别适用于在列表中嵌入代码、引用和其他内容。

（此插件以前的标题是“粘贴到当前缩进”。）

### " 粘贴模式 "

粘贴模式接管了 Obsidian 中的粘贴功能。它有八种“粘贴模式”，确定在 Obsidian 中粘贴文本时会发生什么。**除了“透传”模式会使用 Obsidian 的默认粘贴功能外，下面的所有模式都会遵循光标当前的缩进。**

![粘贴模式演示](img/all-paste-modes.gif)

1. “文本”模式：粘贴剪贴板中的文本。
2. “文本引用”模式：将剪贴板中的文本作为引用粘贴（在插件的设置菜单中添加前缀，默认为“`> `”）。
3. “Markdown”模式：在粘贴之前将任何 HTML 转换为 Markdown。
4. “Markdown 引用”模式：在粘贴之前将任何 HTML 转换为 Markdown，然后将结果作为引用粘贴（在插件的设置菜单中添加前缀，默认为“`> `”）。
5. “代码块”模式：在“\`\`\`”代码块标记内粘贴剪贴板中的文本。
6. “代码块引用”模式：将剪贴板中的文本作为引用粘贴在“\`\`\`”代码块标记内。
7. “透传”模式：使用 Obsidian 的默认粘贴功能。

当前的粘贴模式显示在 Obsidian 的状态栏中：

![状态栏显示当前的粘贴模式](img/status-bar.png)

#### 切换粘贴模式

有多种方法可以切换粘贴模式：

1. 点击状态栏上的粘贴模式显示，将弹出一个可搜索的菜单，您可以在其中选择一个新模式。
2. 打开命令面板并搜索“Paste Mode: Cycle Paste Mode”。此命令相当于点击状态栏。
3. 打开命令面板并搜索“Paste Mode: Set Paste Mode”。提供了每种粘贴模式的单独命令。
   - 可以使用这些命令，例如，与 Obsidian 的 [Quick Add插件](https://github.com/chhoumann/quickadd/blob/master/docs/Choices/MacroChoice.md) 一起使用，为切换到特定模式然后粘贴分配一个键盘命令。
4. 打开命令面板并搜索“Paste Mode: Cycle Paste Mode”。此命令将循环遍历不同的粘贴模式（即从文本模式到文本引用模式，到 Markdown 模式，到 Markdown 引用模式，到透传模式，再回到文本模式等）。
5. 在插件的设置页面内。

#### 粘贴模式的限制

- 在 Obsidian Mobile 中，对于一次性命令（即“在 Markdown 模式下粘贴”，“在 Markdown（引用块）模式下粘贴”和“在模式（交互式）下粘贴”命令），“Markdown”和“Markdown（引用块）”模式会自动禁用。这是因为 Obsidian Mobile 允许与剪贴板交互的方式。
   如果这些命令被禁用，插件的设置选项卡中将显示相应的提示。
- 同样，在 Obsidian Mobile 中，由于 Obsidian Mobile 允许与剪贴板交互的方式，无法从剪贴板中粘贴图像（如屏幕截图和类似文件）。

### 附加命令

- 在命令面板中，`Paste Mode: Toggle blockquote at current indentation` 命令将在当前缩进级别上切换引用块标记。

![切换引用块命令](img/toggle-blockquote.gif)

引用块标记可以通过插件的设置页面进行自定义（例如，如果您更喜欢使用空格而不是 `> `）。

### 附加功能

#### 动态附件保存

- 附件可以根据粘贴到的文件所在的目录自动保存到不同的位置。

![](img/attachment_location_overrides.png)

#### 下载链接附件的本地副本

- 在“Markdown”或“Markdown（引用块）”模式下粘贴时，可以根据其源位置自动下载文本中链接的文件（`http://example.com/path/to/file.png`，`file://path/to/file.png` 等）到本地。

#### Markdown 中的自动字符转义

在 Markdown 中，可能会导致显示问题的字符（如 `==`，`<` 等）在粘贴时可以自动进行 [转义](https://www.markdownguide.org/basic-syntax/#characters-you-can-escape)。

### 路线图

我认为目前这个插件已经具备了所有功能。

待办事项：

- 添加测试

### 开发此插件

下面的文档是从 [Obsidian示例插件](https://github.com/obsidianmd/obsidian-sample-plugin) 中保留下来的。

#### 开发快速入门指南

- 将此存储库克隆到本地开发文件夹中。为了方便起见，您可以将此文件夹放在您的 `.obsidian/plugins/your-plugin-name` 文件夹中。
- 安装 NodeJS，然后在存储库文件夹下的命令行中运行 `yarn`。
- 运行 `yarn dev` 将 `main.ts` 编译为 `main.js`。
- 在 Obsidian 的设置窗口中启用插件。
- 对 `main.ts` 进行更改（或创建新的 `.ts` 文件）。这些更改应自动编译为 `main.js`。
- 重新加载 Obsidian 以加载插件的新版本。
- 要更新 Obsidian API，请在此存储库文件夹下的命令行中运行 `yarn`。

#### 移动开发

可以使用以下工作流程来简化移动开发：

1. 安装 [Mobile Hot Reload插件](https://github.com/pjeby/hot-reload)
2. 运行 `yarn dev`，将文件设置为通过 Syncthing 或 Dropbox 与移动设备同步。
3. 遵循 [此帖子中的建议](https://forum.obsidian.md/t/debugging-obsidian-mobile-plugins/20913)：

    > 如何在 Android 上测试插件，我认为您需要在计算机上安装 ADB（我始终安装了它；如果以下说明在没有它的情况下无法工作，请安装它）；在您的 Android 手机上，您需要启用 ADB（它在开发者选项下 [点击三次构建号码以获取这些设置]）；然后通过 USB 将手机连接到计算机；在浏览器中打开 Chrome（或基于 Chromium 的浏览器也可以），并在浏览器中键入 chrome://inspect。在手机上打开 Obsidian，然后它应该出现在浏览器中。您将拥有类似于桌面 Obsidian 的控制台和检查器。

#### 发布新版本

- 使用新的版本号（例如 `1.0.1`）和最新版本所需的最低 Obsidian 版本更新 `manifest.json`。
- 使用 `"new-plugin-version": "minimum-obsidian-version"` 更新 `versions.json` 文件，以便旧版本的 Obsidian 可以下载与其兼容的旧版本插件。
- 使用新的版本号作为“标签版本”创建新的 GitHub 发布。使用确切的版本号（即不包括前缀 `v`）。参考此处的示例：<https://github.com/obsidianmd/obsidian-sample-plugin/releases>
- 将 `manifest.json`、`main.js` 和 `styles.css` 文件作为二进制附件上传。
- 发布发布。

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/obsidian-paste-to-current-indentation/` 目录下。

### Obsidian API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>
