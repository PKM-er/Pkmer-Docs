---
uid: 2023102611073582
title: Obsidian 插件：【Readme】Content Linker
tags: ['obsidian插件', 'readme']
description: 一个用于在Obsidian Vault中搜索和添加双向链接到现有内容的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Content Linker

> [!Note] 插件名片
> - 插件名称：Content Linker
> - 插件作者：Medill-East
> - 插件说明：一个用于在 Obsidian Vault 中搜索和添加双向链接到现有内容的插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Medill-East/obsidian-content-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?content-linker)

## 概述

一个用于在 Obsidian Vault 中搜索和添加双向链接到现有内容的插件。

![Content Linker](https://cdn.pkmer.cn/covers/content-linker.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Medill-East/obsidian-content-linker/master/README.md)
>

---

## Readme(翻译）

下面是 [[content-linker]] 插件的自述翻译

# Obsidian 内容链接插件

## [中文](#chinese)

对于英文，请参见 [English](#english)。

## 免责声明

该插件中的代码 95% 以上由 codeGPT 完成。

本插件只进行过自测，以防意外，请提前备份库中内容 :)

如无意外，可能不会更新 :)

## 说明

这是一个为 Obsidian (<https://obsidian.md>) 而作的插件。

该插件旨在帮用户快速基于库中已有内容建立双向链接。

本插件中所提到的 "bi-link" 所指的都是双向链接（双链）。即内容被 [[]] 包裹的形式。

适用场景

本插件适用于以下场景：

- 库中已有大量笔记，但其中还存在大量需要添加双链的内容
- 库中已有大量笔记，想要寻找其中潜在的双向链接

建议搭配 Various Complements (<https://github.com/tadashi-aikawa/obsidian-various-complements-plugin>) 插件一同使用：

- 使用本插件先建立库中双链
- 使用 Various Complements 在未来输入时基于已有双链快速输入双链

## 安装

1. （还未上架）从社区插件库中安装
2. 拷贝 `main.js`, `styles.css`, `manifest.json` 到库中的以下位置：`VaultFolder/.obsidian/plugins/obsidian-content-linker/`.

## 如何使用

![](https://raw.githubusercontent.com/Medill-East/IMGStorage/master/img/PicGo-Github-PicBed/202309292244046.png)

![](https://raw.githubusercontent.com/Medill-East/IMGStorage/master/img/PicGo-Github-PicBed/202309292246905.png)

1. 排除特定范围下的笔记
- 可以通过输入相对路径来排除特定范围下的笔记，防止本插件对该路径下的内容进行改动
  - 如截图中输入的相对路径是 `PKM/`，则会将库中 PKM 文件夹及其下子文件夹中的内容都排除在搜索/更改范围外

1. 搜索潜在双链
- （建议）直接使用设置面板中的“Search Possible Bi-Links in Vault”按钮来搜索库中潜在的双向链接
  - 在设置面板中还可以设置想要显示的结果数量（但若是将其中的结果使用本插件更新为双链形式后，就不再显示在结果列表中，但仍然占用数量，详见 [已知问题](#known-issues-zh) 部分。
- 也可以在编辑模式中调用指令“Content Linker: Search Possible Bi-Links in Vault”来进行搜索

1. 更新所选项为双链形式
- 使用“Update Bi-Link For Selected Options”按钮可以将列表中所选中的选项在库中的原文位置更新为双链形式

1. 可以将不想使其出现在搜索结果中的内容加入忽略列表中
- 使用“Ignore Selected Options(s)”按钮即可将潜在双链列表中的所选项移除并加入忽略列表中

1. 可以将选项从忽略列表中移除，使其可以重新出现在潜在双链内容列表中
- 使用“Remove Selected Option(s) from Ignored Content List”按钮即可将所选项从忽略列表中移除，并使其可以重新出现在潜在双链内容列表中

1. 可以看到当前库中目前已经建立了双链的内容，可以将其转换为非双链形式
- 使用“Remove bi-directional links for selected option(s)”按钮即可将所选项从双链形式转换为非双链形式
- 这里的 Count 的计数包括了双链 + 非双链形式的总数。非双链形式指的是虽然该内容存在双链的形式，但可能并非所有的该关键词都是双链形式。如同时存在“Content”和“[[Content]]”形式的内容，那么两种形式都会被计数。

## Development Process

The development process roughly involves communicating with codeGPT to implement the code based on the following prompt:

You are an excellent Obsidian plugin developer. Now you want to develop a new plugin called Content Linker for Obsidian, which allows users to add bidirectional links to existing content in the vault.

```
Please analyze each selected code item to determine if it can achieve the following functionalities. If not, analyze the reasons and provide the corrected complete code:

1. The plugin should be able to search for all existing content in the vault by calling a function in the editing window or clicking the "Search Possible Bi-Directional Link [[in]] Vault" button in the settings page.
2. The plugin should have a separate settings page.
3. Based on the search results from 1, store all the content that has appeared repeatedly in the vault and is not in the form of bidirectional links. Treat these contents as potential bidirectional link keywords. Display a popup message saying "Search Finished!" after completion.
4. Present the top n results with the highest repetition count from the stored results in 2 as a list in the plugin's settings page. Add an input box named "Option Count" that only accepts numbers and a button named "Update" in the settings page. The number entered by the user in the input box determines the number of options (i.e., the value of n) that can be displayed in the list.
5. Based on the previous answer, present the results from 4 in the plugin's settings page as a four-column list. Each potential bidirectional link keyword is an option in the list. The first column is the index, the second column is the number of times the potential bidirectional link keyword appears in the vault, the third column is the potential bidirectional link keyword, and the fourth column indicates the current selection status of the option.
6. When the user clicks the "Update Bi-Link For Selected Options" button in the settings page, iterate through all the selected options in 5 and replace the selected content with bidirectional links in their original positions.
7. The plugin's settings page should have a separate list named "Ignored Content List". The list has four columns: the index, the number of times the potential bidirectional link keyword appears in the vault, the potential bidirectional link keyword, and the current selection status of the option.
8. When the user clicks the "Ignore Selected Option(s)" button in the settings page, iterate through all the selected options in 5, exclude these options from the potential bidirectional link keyword list, add these options to the Ignored Content List, and display them in the Ignored Content List. Sort the contents in the Ignored Content List in descending order based on the count in the second column.
9. When the user clicks the "Remove From Ignored Content List" button in the settings page, iterate through all the selected options in 7, and add these options back to the potential bidirectional link keyword list.
```

If interested, you can check out the [development review](https://medill-east.github.io/2023/08/26/20230826-obsidian-content-linker-plugin-development-review/).

## [已知问题](#known-issues-zh)

- The numbering in the result list is ambiguous.
  - The "No." displayed in the Possible bi-directional content and Linked content list is the ranking of their frequency in the entire library.
  - The "No." in the Ignored content list is a new number and has no other meaning.
  - Since it does not affect the use, no further attention is paid to it.
- The search results do not exclude particles and other words.
  - The usability is not good enough, but since it does not affect the use, no further attention is paid to it.

---

For Chinese instructions, please see [中文](#chinese).

## [中文](#中文)

免责声明

本插件中超过 95% 的代码由 codeGPT 开发。为了预防起见，该插件仅经过自我测试。请提前备份您的保险库内容 :)

除非出现意外情况，否则可能不会有进一步的更新 :)

## 描述

这是一个为 Obsidian（<https://obsidian.md）创建的插件。>

该插件的目的是帮助用户根据存储库中的现有内容快速建立双向链接。

如果在此插件中看到“bi-link”，它表示“双向链接”。即，具有 [[]] 格式的内容 :)

适用场景

该插件适用于以下场景：

- 笔记库中有大量的笔记，但仍然有大量内容需要进行双向链接。
- 笔记库中有大量的笔记，并且您希望在它们之间发现潜在的双向链接。

建议将此插件与 Various Complements（<https://github.com/tadashi-aikawa/obsidian-various-complements-plugin）插件一起使用：>

- 利用此插件在笔记库中建立双向链接。
- 在将来利用 Various Complements 插件，根据现有的链接快速输入双向链接。

## 安装

1. （目前不可用）从社区插件中安装
2. 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-content-linker/`。
如何使用

![](https://raw.githubusercontent.com/Medill-East/IMGStorage/master/img/PicGo-Github-PicBed/202309292244046.png)

![](https://raw.githubusercontent.com/Medill-East/IMGStorage/master/img/PicGo-Github-PicBed/202309292246905.png)

1. 排除特定范围内的笔记
- 您可以通过输入相对路径来排除特定范围内的笔记，防止此插件对该路径内的内容进行更改。
  - 例如，如果相对路径输入如截图所示为 PKM/，则会排除 PKM 文件夹及其子文件夹中的内容，不在搜索/更新范围内。

1. 搜索潜在的双向链接
- （推荐）在设置面板中使用“在存储库中搜索可能的双向链接”按钮来搜索潜在的双向链接。
  - 您还可以在设置面板中指定要显示的结果数量（如果您使用此插件将任何结果更新为双向链接格式，则它们将不再显示在结果列表中，但仍将计入总数，有关详细信息，请参见 [已知问题](#known-issues) 部分）。
- 或者，您可以在编辑模式下调用“内容链接器：在存储库中搜索可能的双向链接”命令来执行搜索。

1. 将选定的选项更新为双向链接格式
- 使用“将选定的选项更新为双向链接格式”按钮，将列表中的选定选项转换为其在存储库中的原始位置的双向链接格式。

1. 将选项添加到忽略列表以排除在搜索结果中
- 使用“忽略选定的选项”按钮，将选定的选项从潜在的双向链接列表中移除，并将它们添加到忽略列表中。

1. 从已忽略内容列表中移除选项以再次包含在搜索中
- 使用“从已忽略内容列表中移除选定的选项”按钮，将选定的选项从忽略列表中移除，使它们重新出现在潜在的双向链接内容列表中。

1. 您可以查看已经在您的存储库中进行了双向链接的内容，并将其转换回非双向链接格式

使用“将选定选项的双向链接移除”按钮，将选定的项目从双向链接格式转换为非双向链接格式。

此处的计数包括双向链接和非双向链接形式的总计数。例如，“内容”和“[[内容]]”都会被计算在内。

如何开发

一般的方法是与 codeGPT 进行交互，并使用以下提示（中文版如下）来实现代码：

你是一位优秀的 Obsidian 插件开发者。你想为 Obsidian 开发一个名为“内容链接器”的新插件，允许用户在他们的 vault 中添加双向链接。

```
请分析每段代码，确定它是否能实现以下功能。如果不能，请分析问题并提供修正和完整的代码：

1. 插件应能通过在编辑窗口中调用函数或在设置面板中点击“在Vault中搜索可能的双向链接”按钮来搜索所有现有的vault内容；
2. 插件应有一个专门的设置页面；
3. 基于1，存储所有在vault中出现超过一次且不是双向链接格式的内容。将这些内容视为潜在的双向链接关键词。完成后，在弹出窗口中显示消息“搜索完成！”；
4. 在2的存储结果中，按频率降序显示前n个结果，以列表的形式显示在插件的设置页面上。在设置页面上包括一个名为“选项计数”的输入字段和一个名为“更新”的按钮。用户在输入字段中输入的数字将确定列表中显示的选项数量（即n）；
5. 基于前面的响应，在插件的设置页面上以四列列表格式显示4的结果。每个潜在的双向链接关键词将作为列表中的一个选项。第一列显示索引，第二列显示关键词在vault中出现的频率，第三列显示关键词，第四列显示选项的当前选择状态；
6. 当用户在设置页面上点击“更新所选选项的双向链接”按钮时，遍历5中的所有选定选项，并将它们在原始位置上的内容替换为双向链接格式；
7. 插件的设置页面应包括一个名为“忽略内容列表”的专用列表。该列表有四列：索引、关键词在vault中出现的频率、关键词本身和选项的当前选择状态；
8. 当用户在设置页面上点击“忽略所选选项”按钮时，遍历5中的所有选定选项。将这些选项从潜在的双向链接关键词列表中排除，并将它们添加到“忽略内容列表”中，并在其中显示。忽略内容列表的内容应根据第二列中的计数按降序排序；
9. 当用户在设置页面上点击“从忽略内容列表中移除”按钮时，遍历7中的所有选定选项，并将它们重新添加到潜在的双向链接关键词列表中。
```

如果感兴趣，可以查看 [开发审查（中文版）](https://medill-east.github.io/2023/08/26/20230826-obsidian-content-linker-plugin-development-review/)。

已知问题

- 结果列表中的编号显示存在歧义：
  - 在“可能的双向内容”和“链接内容列表”中显示的“编号”表示它们在整个保险库中按频率排序的排名。
  - “忽略的内容列表”中的“编号”是一个新的序列号，没有其他意义。
  - 由于它不影响可用性，不会解决这个问题。
- 搜索结果可能不会排除粒子和类似元素。
  - 这可能会影响可用性，但由于它对功能的影响不大，我没有花时间进一步解决它。



