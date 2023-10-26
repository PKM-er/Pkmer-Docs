---
uid: 2023102611075761
title: Obsidian 插件：【Readme】Handwritten Notes
tags: ['obsidian插件', 'readme']
description: 在您的保险库中注释PDF并创建手写笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Handwritten Notes

> [!Note] 插件名片
> - 插件名称：Handwritten Notes
> - 插件作者：FBarrCa
> - 插件说明：在您的保险库中注释PDF并创建手写笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/FBarrca/obsidian-handwritten-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?handwritten-notes)

## 概述

在您的保险库中注释PDF并创建手写笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/FBarrca/obsidian-handwritten-notes/master/README.md)
> 

---

## Readme(翻译）

下面是 [[handwritten-notes]] 插件的自述翻译


# Obsidian手写笔记插件

该插件旨在无缝地将手写笔记整合到您的工作流中，允许您在您的存储库中存储和编辑手写笔记文件。未来的实现将使您能够在文档中嵌入绘图，并在文档或绘图之间创建互联链接。

> 🔗 与Obsidian的[Excalidraw插件](https://github.com/zsviczian/obsidian-excalidraw-plugin/)不同，该插件允许使用触控笔编写笔记，因为其在处理**长笔记**时性能不会下降。

> 该插件的核心是**PDF文件**，用于存储笔记。这使得体验非常快速和响应，并且可以轻松与他人共享笔记，并使其更具未来性，因为PDF是一种非常成熟的格式。
## 🎥 演示

这是插件的演示，展示了如何创建新的笔记以及如何对现有笔记进行注释。它有点过时，但基本功能仍然相同。

[![观看插件演示](https://img.youtube.com/vi/dkdKeCJzVQA/default.jpg)](https://youtu.be/dkdKeCJzVQA)
## 🚀 特性

该插件仍处于早期开发阶段，但已经实现了以下功能：

- [x] 从不同的纸张模板创建新的笔记
- [x] 对现有笔记进行注释

此外，由于Obsidian中提供了以下功能，您可以将其与手写笔记一起使用：

- [x] 在其他md笔记中嵌入笔记
- [x] 从其他md笔记中引用手写笔记
## 📅 计划功能

以下功能计划在未来实现：

- [ ] 将md笔记链接到手写笔记
## ⚠️ 已知问题

- 我在使用 **Obsidian Sync** 时遇到了一些问题，模板可能无法正确同步，但笔记本身应该是正常的。
  如果模板没有正确同步，您可以手动将插件文件夹中的模板复制到移动设备上的您的存储库中。
## 🔧 安装

**手动安装步骤**：

1. 访问发布页面以获取最新版本或预览即将推出的功能。
2. 进入所需保险库的插件目录：`VaultFolder/.obsidian/plugins/`
3. 创建一个名为`obsidian-handwritten-notes`的新文件夹。
4. 将`main.js`、`styles.css`和`manifest.json`文件转移到新创建的`/obsidian-handwritten-notes`文件夹中。
5. 激活插件：设置 > 社区插件 > 已安装插件 > 切换“Handwritten Notes”。
6. 确保有一个相应的[外部编辑器](#external-editors)处于待命状态（详细信息见下文）。
## 📑 外部编辑器

为了使插件正常运行，需要使用外部编辑器。
使用外部编辑器进行PDF文件修改可以提升以下方面：

- **本地性能**：利用本地PDF编辑器可以提升插件的性能。
- **灵活性**：可以自由选择任何支持**移动文件源打开**的PDF编辑器。

以下是一些建议：
您可以使用任何支持对PDF文件进行注释的编辑器。以下是一些示例：

- [Xodo](https://www.xodo.com/app/)
- [Drawboard PDF](https://www.drawboard.com/pdf/)
- [Adobe Acrobat Reader](https://acrobat.adobe.com/us/en/acrobat/pdf-reader.html)
在Android上，选择有点有限，因为编辑器需要支持从移动设备中打开源文件。
以下是我测试过的编辑器：（如果你测试过其他编辑器，请提交此列表的PR）

- Xodo（我最喜欢的），目前是免费增值服务，但可以使用一个没有锁定功能的过时版本
- Adobe Acrobat
- 三星的Write on PDF
- 微软的PDF编辑器
- PenandPdf（开源，但已被放弃）
我还没有在iOS上测试过任何编辑器，但我认为与Android上相同的编辑器应该可以使用。如果你测试过任何编辑器，请添加到这个列表中。

更新：它在iPadOS 17的标记工具上运行得很好。
## 🛠️ 如何编译插件

首先，安装依赖项：

```bash
npm i
```

然后，可以使用以下命令编译插件：

```bash
npm run build
```

这将在项目根目录中创建一个 `main.js` 文件。这是插件的入口点。
## 🙏 鸣谢

感谢[Obsidian copy url in preview](https://github.com/NomarCub/obsidian-copy-url-in-preview)提供的用于与PDF文件进行接口交互的类型扩展。
感谢[DataLoom](https://github.com/trey-wallis/obsidian-dataloom)提供的入门界面。



