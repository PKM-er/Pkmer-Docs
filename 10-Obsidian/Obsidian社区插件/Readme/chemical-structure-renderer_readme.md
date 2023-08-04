---
uid: 2023080322154895
title: Obsidian 插件：【Readme】Chemical Structure Renderer
tags: ['obsidian插件', 'readme']
description: 使用Ketcher和Indigo Service将SMILES字符串渲染为PNG或SVG格式的化学结构。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chemical Structure Renderer

> [!Note] 插件名片
> - 插件名称：Chemical Structure Renderer
> - 插件作者：xaya1001
> - 插件说明：使用 Ketcher 和 Indigo Service 将 SMILES 字符串渲染为 PNG 或 SVG 格式的化学结构。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/xaya1001/obsidian-Chemical-Structure-Renderer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chemical-structure-renderer)

## 概述

使用 Ketcher 和 Indigo Service 将 SMILES 字符串渲染为 PNG 或 SVG 格式的化学结构。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/xaya1001/obsidian-Chemical-Structure-Renderer/master/README.md)
>

---

## Readme(翻译）

下面是 [[chemical-structure-renderer]] 插件的自述翻译

# Obsidian 的化学结构渲染插件

这个插件由 [Ketcher](https://github.com/epam/ketcher) 和 [Indigo](https://github.com/epam/Indigo) 提供支持，并受到 [Obsidian-Chem](https://github.com/Acylation/obsidian-chem) 的启发，可以在 Obsidian 笔记中直接可视化化学结构。同时，特别感谢 OpenAI 的 GPT-4 对这个项目的贡献。

## 功能

该插件允许您在笔记中使用 SMILES 符号表示化合物。只需在标记为 'smiles' 的代码块中写入 SMILES 字符串，插件将在实时预览模式下呈现化学结构的可视化表示。

## 使用方法

1. 在 Obsidian 中安装插件。（尚未完成，仍在进行中）
2. 在你的 Markdown 笔记中，创建一个新的代码块。
3. 为代码块添加 'tag' 标签。
4. 在代码块内，写下你想要可视化的化学化合物的 SMILES 字符串。

示例：

    ```smiles
    OC1=CC=C(CC2N(CCC3=CC(OC)=C(C(OC4=CC5=C(C=C4OC)CCN(C)C5C6)=C23)OC)C)C=C1OC7=CC=C6C=C7
    ```

---

    ```smiles
    COC1=CC=CC(C(SC)=O)=C1>>COC2=CC=CC(C([H])=O)=C2
    COC1=CC=CC(C(O)=O)=C1.OC>>COC2=CC=CC(C(OC)=O)=C2
    ```
5. 切换到实时预览模式或阅读模式以查看结构。

![structure](https://github.com/xaya1001/obsidian-ketcher-smiles/blob/master/img/Berbamine.png)

---

![twoReaction](https://github.com/xaya1001/obsidian-ketcher-smiles/blob/master/img/twoReaction.png)

## 兼容性注意事项

由于功能重叠，请注意此插件可能与 [Obsidian-Chem](https://github.com/Acylation/obsidian-chem) 插件发生冲突，因为两个插件都会转换 'smiles' 代码块。因此，我们建议不要同时启用这两个插件，以避免任何潜在问题。

## 设置

在插件设置中，您可以指定渲染图像的宽度和格式，以及用于渲染的服务器地址。

渲染服务

在设置中，“server”字段设置为由 epam 托管的 ketcher + indigo 服务。

server: `https://lifescience.opensource.epam.com`

ketcher 演示页面：[https://lifescience.opensource.epam.com/KetcherDemoSA/index.html](https://lifescience.opensource.epam.com/KetcherDemoSA/index.html)

如果您对隐私有顾虑并希望切换到自己的服务，您可以按照下面链接中的教程设置一个服务。一旦您设置好了自己的服务，您可以将“server”字段更改为您自己的域名 URL。

**教程链接：进行中**

官方文档可在以下链接找到：[https://lifescience.opensource.epam.com/indigo/service/index.html](https://lifescience.opensource.epam.com/indigo/service/index.html) 和 [https://github.com/epam/ketcher/blob/master/DEVNOTES.md#simple-server](https://github.com/epam/ketcher/blob/master/DEVNOTES.md#simple-server)

## 许可证

该插件使用 [MIT许可证](https://choosealicense.com/licenses/mit/) 进行许可。

## 致谢

[Ketcher](https://github.com/epam/ketcher) 和 [Indigo](https://github.com/epam/Indigo) 是由 EPAM 开发的。

感谢 EPAM 对化学信息学领域的开源贡献，使得这个插件得以实现。

EPAM 的主页：[https://lifescience.opensource.epam.com/index.html](https://lifescience.opensource.epam.com/index.html)

非常感谢 [Obsidian-Chem](https://github.com/Acylation/obsidian-chem)。

支持

对于与此插件相关的任何问题或建议，请在 GitHub 存储库中打开一个问题。
