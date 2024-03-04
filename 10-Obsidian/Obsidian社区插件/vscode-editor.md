---
uid: 20240301224414
title: vscode-editor
tags: [obsidian, 插件]
description: 提供查看和编辑各种代码文件和代码块的功能
author: Huajin
type: other
draft: false
editable: false
modified: 20240304093713
---

# vscode-editor

> [!Note] 插件名片
> - 插件名称：VSCode Editor
> - 插件作者：sunxvming
> - 插件说明：提供查看和编辑各种代码文件和代码块的功能
> - 项目地址：[点我访问](https://github.com/sunxvming/obsidian-vscode-editor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vscode-editor)

它基于 Monaco Editor（VSCode Editor 内核）开发，支持查看和编辑各种代码格式文件。默认包括  `C` 、 `C++` 、 `C#` 、 `Go` 、  `HTML` 、 `Java` 、 `JavaScript` 、 `JSON` 、 `Python` 、 `Ruby` 、 `Rust` 、 `Shell` 、 `XML` 、 `YAML` 、 `ini`，可以在插件设置中添加更多语言。

有了这个插件后，你不再需要打开另一个编辑器来查看或编辑某个代码文件，一切都在 Obsidian 中完成。

## 特点

- 支持了很多快捷键，大部分的快捷键和 VS Code 的快捷键保持一致。例如复制、粘贴、保存、注释、缩进、行移动等
- 对暗色和亮色进行了适配。
- 除了代码文件，该插件还新增了一种编辑 md 文件中代码块的方法：右键代码块，选择“在 VSCode Editor Plugin 中编辑代码块”，就可以打开一个新的代码编辑窗口。
- 可以用 md 链接链接到代码文件，鼠标悬停在链接上时可以快速预览。（**注意**：需要在 obsidian 的设置中开启“检测所有类型文件”）