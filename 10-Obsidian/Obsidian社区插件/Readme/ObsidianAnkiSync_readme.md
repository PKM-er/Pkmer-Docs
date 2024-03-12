---
uid: 20231220112630
title: Obsidian 插件：【Readme】Obsidian Anki Sync
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 黑曜石插件，可以制作闪卡，并将它们同步到Anki。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obsidian Anki Sync

> [!Note] 插件名片
> - 插件名称：Obsidian Anki Sync
> - 插件作者：debanjandhar12
> - 插件说明：黑曜石插件，可以制作闪卡，并将它们同步到 Anki。
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/debanjandhar12/Obsidian-Anki-Sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ObsidianAnkiSync)

## 概述

黑曜石插件，可以制作闪卡，并将它们同步到 Anki。

![Obsidian Anki Sync](https://cdn.pkmer.cn/covers/ObsidianAnkiSync.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/debanjandhar12/Obsidian-Anki-Sync/main/README.md)

---

## Readme(翻译）

下面是 [[ObsidianAnkiSync]] 插件的自述翻译

# Obsidian Anki Sync - 又一个 Anki 插件

这个插件允许你在 [Obsidian](https://obsidian.md/) 中制作卡片，并将它们同步到 [Anki](https://apps.ankiweb.net/)。

这个项目受到了 [Obsidian_to_Anki](https://github.com/Pseudonium/Obsidian_to_Anki) 的启发。然而，这不是一个分支，因此，这个插件使用了一种不同且更强大的基于标记的语法来制作卡片。

## 示例

```markdown
<!-- replaceblock-start -->
<!-- replace id="1" text="对边" -->
$$\sin \theta = \frac{对边}{斜边}$$
<!-- replaceblock-end -->
```

[![Cards](https://cdn.pkmer.cn/covers/ObsidianAnkiSync_1_0.jpeg!pkmer)](#examples)

使用此插件创建卡片还有许多**其他方法**。详细信息和更多示例请参阅 [教程](https://github.com/debanjandhar12/Obsidian-Anki-Sync/blob/main/docs/Tutorial.md)。

## 特点

- 🖼 渲染 Markdown 中的**数学公式、代码、图片、表格等等**
- 🔏 在每次同步之前**自动备份**Anki 卡组。
- 📘 在*每个文件*或*每个块*的基础上将卡片添加到用户指定的卡组中。
- 📂 忽略模板文件夹。
- ❔ 通过使用 [replaceblock](https://github.com/debanjandhar12/Obsidian-Anki-Sync/blob/main/docs/replaceblock.md)，在 Latex 数学公式和代码块中使用**填空卡片**。
- ❔ 通过使用 [highlight](https://github.com/debanjandhar12/Obsidian-Anki-Sync/blob/main/docs/clozeblock.md) 或 Anki 的填空语法，使用**填空卡片**。
- ♻ 同步是通过从 Obsidian 到 Anki 创建、更新、删除 anki-sync-blocks 来完成的。
- 🥳 还有许多其他功能，如**额外字段、标签**等等...

## 安装

1. 从 Obsidian 的“社区插件”部分下载插件，可以在设置窗格的“第三方插件”下访问。确保关闭安全模式。
2. 如果尚未安装，请下载 Anki。
3. 在 Anki 上安装 AnkiConnect。

   - 打开 Anki。
   - 选择“工具”>“插件”。现在会打开一个 Anki 插件对话框。
   - 现在在插件对话框中点击“获取插件...”，然后在标有“代码”的文本框中输入 [2055492159](https://ankiweb.net/shared/info/2055492159)，然后按下“确定”按钮继续。
   - 重新启动 Anki。

4. 现在，您可以通过点击“同步到 Anki”按钮来使用插件。 <br />
   注意：在点击 Obsidian 中的“同步到 Anki”按钮之前，请确保 Anki 正在运行。

5. 如果收到下面的消息，请点击“是”。 <br />
   <p align="center">
      <img src="https://raw.githubusercontent.com/debanjandhar12/Obsidian-Anki-Sync/main/docs/images/permission.png" />
   </p>

## 文档

查看 [教程](https://github.com/debanjandhar12/Obsidian-Anki-Sync/blob/main/docs/Tutorial.md) 了解基础知识。

有关块的详细文档，请参阅：

[basicblock](https://github.com/debanjandhar12/Obsidian-Anki-Sync/blob/main/docs/basicblock.md) [replaceblock](https://github.com/debanjandhar12/Obsidian-Anki-Sync/blob/main/docs/replaceblock.md) [clozeblock](https://github.com/debanjandhar12/Obsidian-Anki-Sync/blob/main/docs/clozeblock.md)

## 常见问题解答

<details>
 <summary>为什么还需要另一个用于 Obsidian 到 Anki 同步的插件？</summary>
现有的两个插件在实现我的工作流程时有一个主要限制 💢。它们无法在数学和代码块中创建填空题。<br>
这个插件的目的就是为了解决这个问题。
</details>

<details>
 <summary>自动删除是如何工作的？</summary>
首先，Anki 中的每张卡片都被标记为“由插件从此 vault 创建”和“不是由插件从此 vault 创建”。如果一张卡片包含了 vault 的名称作为标签，以及 ObsidianAnkiSync 标签，并且卡片的类型必须是 ObsidianAnkiSyncModel 类型，那么它就被标记为“由插件创建”。<br />
现在，如果一张被标记为“由插件从此 vault 创建”的卡片在 vault 中不存在，那么这张卡片将被删除。
</details>

<details>
 <summary>我可以删除或修改自动生成的 oid 属性吗？</summary>
<b>不可以！</b> 请不要这样做。<br />插件使用 oid 来跟踪 Anki 中的卡片。
如果删除它，插件将删除旧卡片并在 Anki 中创建一个新卡片。这意味着如果您删除或修改 oid，卡片的调度信息将被删除。
</details>

<details>
 <summary>每次同步之前的自动 Anki 备份存储在哪里？</summary>
在 Windows 11 中，它存储在：<br />
C:\Users\{Windows用户名}\AppData\Roaming\Anki2\{Anki配置文件名}
<br><br>
注意：备份文件以每个牌组为基础存储，名称为 ObsidianAnkiSync-Backup-${时间戳}_${牌组}.apkg
</details>

<details>
 <summary>自动 Anki 备份是否也存储调度信息？</summary>
是的。
</details>

<details>
 <summary>我发现了一个 bug。应该怎么办？</summary>
请在创建一个问题。
</details>

## 支持

喜欢这个工具吗？请考虑捐赠 💸 以帮助它改进！您也可以通过传播这个消息来帮助我们。<br/>

<p align="center">
<a href="https://www.buymeacoffee.com/debanjandhar12" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="50" style="border-radius:1px" />
</p>



