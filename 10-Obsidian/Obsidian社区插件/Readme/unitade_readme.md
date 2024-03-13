---
uid: 2023102611084702
title: Obsidian 插件：【Readme】Unitade
tags: ['obsidian插件', 'readme']
description: 毫不费力地将任何文件扩展名视为笔记，并在您的保险库中组织各种文件格式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Unitade

> [!Note] 插件名片
> - 插件名称：Unitade
> - 插件作者：Falcion
> - 插件说明：毫不费力地将任何文件扩展名视为笔记，并在您的保险库中组织各种文件格式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Falcion/UnitadeOBSIDIAN)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unitade)

## 概述

毫不费力地将任何文件扩展名视为笔记，并在您的保险库中组织各种文件格式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Falcion/UnitadeOBSIDIAN/main/README.md)

---

## Readme(翻译）

下面是 [[unitade]] 插件的自述翻译

<div align="center">





</div>
<br/>
<div align="center">
    <!-- LOGO-DATA:
     -->
    <!-- <picture align="center">
        <source media="(prefers-color-scheme: dark)" srcset="https://forum.obsidian.md/uploads/default/original/3X/d/1/d1963ecdc1d495388d1114fa18436157ab89e236.png" width="256" height="256"/>
        <source media="(prefers-color-scheme: light)" srcset="https://forum.obsidian.md/uploads/default/original/3X/9/f/9f1b5b46aed533f5386cf276ab2cdce48cbd2e25.png" width="256" height="256"/>
        <img alt="Icon"/>
         </picture> -->
    <img src="./.github/images/icon.png" alt="icon" width="128" height="128"/>
    <!-- TEXT-DATA:
     -->
    <h3>Unitade</h3>
    <p>
    将任何内容添加到您的Zettelkasten。
    <br/>

    /
    
    /
    
    </p>
</div>

<!-- ABOUT PROJECT:
 -->

关于项目
-----------------

不幸的是，Obsidian™没有为用户提供编辑任何文件扩展名的能力，而且该应用程序存在的插件对于最终用户来说是不方便的格式，例如，在一行中输入一个完整的 JSON。

插件 UNITADE（或以前称为“anything as markdown”）解决了这个问题，并且通过简单的输入，它允许您编辑在设置中输入的任何扩展名。

<!-- BUILT WITH:
 -->

### 使用的技术

该插件是使用基于 Obsidian API 的 TypeScript 超集编写的：

![JAVASCRIPT](https://img.shields.io/badge/-javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)\

![TYPESCRIPT](https://img.shields.io/badge/-typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)\

![OBSIDIAN](https://img.shields.io/badge/-obsidian-7C3AED?style=for-the-badge&logo=obsidian&logoColor=white)

<!-- 开始：
 -->

入门指南
---------------

在提问之前，请阅读此部分，因为这里包含了关于项目的所有主要信息，可以回答您未来尚未提出的问题。

<!-- 先决条件：
 -->

### 先决条件

在下载源代码或使用此项目之前，请确保满足以下要求：

- 在您的桌面上安装了 [Node.js](https://dotnet.microsoft.com/en-us/download/)，您将在其中编辑/设置此项目；
- 安装了 [Obsidian™](https://obsidian.md/) 应用程序，该插件是为其创建的，您将在其中测试/使用此插件；

<!-- 安装：
 -->

### 安装

> 授权免费在您的任何产品中使用。

如果您想使用这个插件，有两种下载和使用插件的方式：官方和直接方式，所以，让我们从官方路径开始：

1. 进入您的保险库设置，然后进入“设置 → 社区插件”并进入第二步；
2. 禁用受限模式，并使用“社区插件 → 浏览”来找到这个插件：输入项目的名称或只是写“任何作为注释”；
3. 使用插件，在插件的设置中输入任何扩展名，编辑您想要的任何内容。

直接安装方式的指南：

1. 在项目的存储库中下载最新的标签，下载链接提供如下：\
   [下载最新版本](https://github.com/Falcion/UnitadeOBSIDIAN/releases/latest/)；
2. 打开您的保险库文件夹，进入子文件夹“/.obsidian/ → /plugins/”，并将下载的 ZIP 文件内容粘贴到这个子文件夹中；
3. 现在，您可以像从社区插件中安装一样使用插件。

安装此项目源代码的指南：

1. 使用支持 git 的任何形式的应用程序（或此站点的 CLI）克隆存储库，附带指南：\
   <https://www.howtogeek.com/451360/how-to-clone-a-github-repository/>
2. 使用适合您的编辑器打开它，随意自定义、更新和/或为该项目做出贡献 [^1]。

<!-- USAGE:
 -->

使用方法
-----

UNITADE 插件的使用对于普通用户来说非常简单和舒适，默认情况下，您可以编辑保险库中的任何纯文本（.TXT）文件，但如果您想添加自定义扩展名，您可以通过插件的设置轻松实现，以下是说明：

1. 进入您的保险库设置，寻找“社区插件”部分，如果您有受限模式，请重复官方安装指南的第一步和第二步 [^2]；
2. 如果您已经安装了插件并且应用程序看到了它，您可以看到一个名为“UNITADE”的元素：打开它并寻找名为“extensions”的设置，然后输入一个由逗号分隔的扩展名数组；
3. 现在，您可以编辑您在设置中输入的扩展名。

> 注释：如果您没有看到其他扩展名，除了默认的 Obsidian 笔记扩展名（.MD），请进入保险库设置，“文件和链接 → 检测所有文件扩展名”，现在您可以在保险库中看到任何扩展名的文件。

<!-- ROADMAP:
 -->

路线图
-------

[x] 为插件编写代码；

[x] 为其编写文档，包括存储库的文档；

[ ] 在 Obsidian 社区插件™上发布。

<!-- CONTRIBUTING:
 -->

贡献
------------

贡献是使开源社区成为一个有趣的地方的原因，因此任何形式的贡献都非常感谢。

如果您认为您可以帮助这个项目变得更好，但认为在当前情况下不是那么重要/可实现，或者对于完整的贡献，使用问题页面，否则有一个贡献指南和政策。

如果您想为这个项目做出贡献，请阅读贡献政策和提交约定，该存储库使用 CLA、提交约定和自动化部署系统 [^3]。

> 对于单个文件的贡献，请使用更快的方式，无需通过网站 fork 存储库。

有关此文章的更多信息：\

[使用fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork/) 关于同步单文件 fork。

<!-- LICENSE:
 -->

许可证
-------

该项目在 [MIT许可证](https://choosealicense.com/licenses/mit/) 下分发 - 有关更详细的信息，请参见该文件。

与 Obsidian™相关的任何内容都是根据其条款提供的 [^4]。

<!-- CONTACT:
 -->

联系方式
-------

出于任何法律目的，您可以通过开发者/维护者的电子邮件与其联系：

<!-- 使用"MAILTO"以更好地查看README -->

如果开发者/维护者没有回答，或者您有其他性质的问题，您可以使用此存储库上的问题页面，通过指定的模板或间接自编写问题。

<!-- ACKNOWLEDGEMENTS:
 -->

致谢
---------------

- <https://shields.io/>
- <https://simpleicons.org/>
- [Obsidian](https://obsidian.md/)
- [Obsidian的API](https://docs.obsidian.md/home)
- <https://gitignore.io/>
- <https://gitattributes.io/>
- [最佳README模板](https://github.com/othneildrew/Best-README-Template)

[^1]: 有关贡献政策，请参阅 - [CONTRIBUTING.md](./.github/CONTRIBUTING.md)
[^2]: [.../#installation](https://github.com/Falcion/UnitadeOBSIDIAN/blob/main/README.md#installation)
[^3]: 阅读 [提交约定政策](./docs/github/COMMIT_CONVENTION.md) 和 [贡献政策](.github/CONTRIBUTING.md) 的文件
[^4]: <https://obsidian.md/license/>