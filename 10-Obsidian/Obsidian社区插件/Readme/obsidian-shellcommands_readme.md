---
uid: 2023080322264330
title: Obsidian 插件：【Readme】Shell commands
tags: ['自动化', 'obsidian插件', 'readme']
description: 定义你想通过命令面板、热键、URI链接或自动事件执行的系统命令。例如：打开外部应用程序或执行自动文件修改。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Shell commands

> [!Note] 插件名片
> - 插件名称：Shell commands
> - 插件作者：Jarkko Linnanvirta
> - 插件说明：定义你想通过命令面板、热键、URI 链接或自动事件执行的系统命令。例如：打开外部应用程序或执行自动文件修改。
> - 插件分类：[' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Taitava/obsidian-shellcommands)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-shellcommands)

## 概述

定义你想通过命令面板、热键、URI 链接或自动事件执行的系统命令。例如：打开外部应用程序或执行自动文件修改。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Taitava/obsidian-shellcommands/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-shellcommands]] 插件的自述翻译

<div style="margin-top: -20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⏫ 记得启用！<!-- 用于Obsidian社区插件列表视图。 --></div>

# Obsidian 的 Shell 命令插件

该插件允许您在设置中定义 Shell/终端命令，并通过 Obsidian 的命令面板或热键快速运行它们。您可以使用与笔记相关的变量作为命令的一部分，并在需要时将输出插入到您的笔记中。当涉及从 Obsidian 访问外部应用程序时，这是一把瑞士军刀，而您是定义其工具的人。

您可以使用内置变量自定义命令，这些变量可以提供当前文件的标题/名称/路径，当前文件的父文件夹名称/路径以及带有自定义格式的日期/时间戳。

[单独的文件中提供了更新日志。](https://github.com/Taitava/obsidian-shellcommands/blob/main/CHANGELOG.md)

**警告：**小心使用系统命令！只使用您了解和信任的命令。如果您从互联网上复制和粘贴命令，或者从其他人编写的文件中复制和粘贴命令，您需要准确理解这些命令的作用！否则，您可能会丢失文件或损坏系统！

**该插件仍处于早期开发阶段。**其开发人员尚未在创建稳定的测试模式方面经验丰富。使用时需自担风险，并注意升级插件时可能会出现问题。

**如果该插件对您的文件造成损害，本插件不提供任何形式的保修！**如果您了解编程，请 [在GitHub上检查源代码](https://github.com/Taitava/obsidian-shellcommands) 以了解其如何执行命令。

## 主要问题

- **Windows 和 PowerShell：输出中的非英文字符可能会损坏**。输入可能正常工作。了解更多：#157。Linux 和 Mac 用户不应该遇到此问题。
- `{{variable}}` 值中的特殊字符被转义（除非使用 CMD.EXE 作为 shell），但这仍然是**实验性的**。潜在的转义问题可能是危险的。[关于如何转义变量值中的特殊字符的文档](https://publish.obsidian.md/shellcommands/Variables/Escaping+special+characters+in+variable+values)。2022-03-11 编辑：现在转义系统已经使用了几个月，似乎工作得很好。然而，仍然欢迎更多的经验。2022-06-10 编辑：将链接更改为包含比 [问题＃11](https://github.com/Taitava/obsidian-shellcommands/issues/11) 更新信息的文档。
- **不支持移动设备**，因为该插件使用了 NodeJS 的 `child_process`，所以我将此插件标记为仅适用于桌面。目前我没有计划研究如何使其在移动设备上工作。如果您有一些线索，请在 GitHub 上发起讨论。
- [如果您使用Flatpak安装了Obsidian，则shell命令将在隔离环境中执行，这可能会导致意外行为或错误消息。](https://github.com/Taitava/obsidian-shellcommands/discussions/225)

有关未来的想法，请参阅 [讨论部分](https://github.com/Taitava/obsidian-shellcommands/discussions)。

## 安装和使用

1. 在 Obsidian 的社区插件设置面板中搜索此插件。
2. 点击安装，然后**记得点击启用**！
3. 转到*Shell commands*设置选项卡。
4. 所有命令将在特定目录中运行。默认情况下，它是您的存储库的基本目录。如果您想在其他目录中运行命令，可以在*工作目录*字段中输入它。
5. 点击*New command*按钮并输入命令来定义一个或多个命令。如果需要，可以在设置面板中阅读变量使用说明。
6. 对于高级设置，例如在命令面板中显示命令别名而不是实际的 shell 命令，或者将命令输出定向到当前活动的笔记，点击 shell 命令旁边的小齿轮图标。
7. 您定义的所有命令都将添加到 Obsidian 的命令面板中。您可以从那里执行它们（通过按下 `Ctrl/Cmd + P` 并搜索您的命令），或者您可以在 Obsidian 的热键设置选项卡中为每个单独的命令定义一个热键。

详细的文档

... 可在此处找到：<https://publish.obsidian.md/shellcommands>

使用示例

示例 shell 命令已移至：<https://publish.obsidian.md/shellcommands/Example+shell+commands/Example+shell+commands>

注意，特殊字符（=除了字母、数字和下划线 `_` 之外的任何字符）在变量值中会自动转义。转义取决于您使用的 shell，但一般来说，每个特殊字符都会以转义字符为前缀，转义字符可能是 `\`、\` 或 `%`，具体取决于 shell。

**如果不进行转义**，如果您有一个命令和一个带引号的字符串参数，比如 `mycommand {{clipboard}}`，如果您的剪贴板内容包含 `>` 字符，它可能会导致命令中断，因为这些字符会按原样插入到命令中。您的命令可能最终会变成这样：`mycommand Text pasted from clipboard that contains a > character.` `>` 字符会将输出重定向到一个文件，并可能覆盖一个重要文件。这就是为什么需要进行转义，使上述命令看起来像这样：`mycommand\ Text\ pasted\ from\ clipboard\ that\ contains\ a\ \>\ character\.`（当使用 Bash shell 时）。然后，您的 shell 会解析转义的特殊字符，并将它们作为字面字符使用，而不是作为特殊字符。

如果您想避免在变量值中转义特殊字符，可以使用 `{{!variable}}` 语法，意思是在变量名前面加上感叹号 `!`。请注意，这可能是危险的，如果使用这种未经转义的原始变量值，您需要非常清楚自己在做什么！在大多数情况下，您应该能够很好地使用转义的变量。

从其他插件中获益

没有一个单独的插件可以自己变得很棒。也没有一个单独的插件适用于每种情况。在这里，我正在收集一些可以成为*Shell commands*的良好伴侣或良好替代品的插件列表。

<!-- 保持字母顺序！ -->
- **[Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri)**：您可以使用此插件打开其他保险库，切换工作区而不使用图形用户界面，并将内容附加到笔记等。将剪贴板内容插入笔记的示例命令（在 Windows 上）：`start "" obsidian://advanced-uri?vault=Vault_name&filepath=Filename.md&data={{clipboard}}&mode=append`。另一种方法，不使用*Advanced URI*，是使用类似于 `echo {{clipboard}} >> Filename.md` 的命令（在 Windows 上）。
- **[cMenu](https://github.com/chetachiezikeuzor/cMenu-Plugin)**：当您选择文本时，此插件会打开一个小型模态框，其中包含用于文本格式化和其他操作的按钮。您可以将 Shell 命令添加到其中！
- **[Customizable Sidebar](https://github.com/phibr0/obsidian-customizable-sidebar)**：允许您添加新的左侧菜单图标，触发您想要的任何 Obsidian 命令 - 包括 Shell 命令！
- **[QuickAdd](https://github.com/chhoumann/quickadd)**：您可以创建启动多个命令的宏。当然，在*Shell commands*中，您可以依次执行多个终端命令（对于 Linux 和 Mac，使用 `&&` 运算符，对于 Windows，使用 `&` 运算符），但是*QuickAdd*允许您将 Shell 命令与其他 Obsidian 命令结合起来。
- **[Text Expander](https://github.com/konodyuk/obsidian-text-expander)**：如果您想在 markdown 笔记文件中编写代码块并执行它们，那么*Text Expander*就是您的解决方案。*Shell commands*专注于通过热键将短小、很少更改的终端命令放在您的指尖。您也可以使用*Shell commands*运行更长的脚本，方法是将它们写入 bash/batch 文件并将该文件作为命令执行，但是如果您需要在执行之前查看脚本或经常进行更改，则*Shell commands*对于您的情况不太理想，您可能会从*Text Expander*中获得更多好处。当然，如果您愿意，您也可以同时使用两者。

（感谢 [FelipeRearden](https://github.com/FelipeRearden) 告诉我这些插件！）

## 测试平台

以下是该插件在不同操作系统上进行的测试列表，包括 Obsidian 版本和插件版本（= SC，Shell commands）。

| Shell commands 版本 | Windows 10 | Linux（Xubuntu 20.04） | Mac |
| ----------------------| ---------- | --------------------- | --- |
| SC 0.18.1 | Obsidian 1.1.12<br>可用 | Obsidian 1.1.12<br>可用 | Obsidian 1.1.12<br>测试了 [修复＃314](https://github.com/Taitava/obsidian-shellcommands/issues/314) 是否有效。 |
| SC 0.18.0 | Obsidian 1.1.9<br>可用   | Obsidian 1.1.9<br>可用 | |
| SC 0.17.0 | Obsidian 1.0.3<br>可用 | Obsidian 1.0.3<br>[除了已报告的换行符错误外可用](https://github.com/Taitava/obsidian-shellcommands/discussions/250#discussioncomment-4243529)。 | |
| SC 0.16.0 | Obsidian 0.16.3<br>可用 | Obsidian 0.16.3<br>可用 | |
| SC 0.15.0 | Obsidian 0.15.9<br>可用 | Obsidian 0.15.9<br>可用 | |
| SC 0.14.0 | Obsidian 0.15.6<br>可用 | Obsidian 0.15.6<br>可用 | macOS：Monterey 12.4（21F79）<br>Obsidian：0.15.9<br>[除了已报告的换行符错误外可用](https://github.com/Taitava/obsidian-shellcommands/issues/1#issuecomment-1197307219)。由 [gapmiss](https://github.com/gapmiss) 测试，谢谢！🙂 |
| SC 0.13.0 | Obsidian 0.14.15<br>可用 | Obsidian 0.14.15<br>可用 | |
| SC 0.12.1 | Obsidian 0.14.6<br>可用 | Obsidian 0.14.6<br>可用 | |
| SC 0.12.0 | Obsidian 0.14.6<br>可用 | Obsidian 0.14.6<br>可用 | |
| SC 0.11.1 | Obsidian 0.13.23<br>可用 | Obsidian 0.13.23<br>可用 | |
| SC 0.11.0 | Obsidian 0.13.23<br>可用 | Obsidian 0.13.23<br>可用 | macOS：11.6 <br>Obsidian：？<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.10.0 | Obsidian 0.13.23<br>可用 | Obsidian 0.13.23<br>可用 | macOS：11.6 <br>Obsidian：？<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.9.0 | Obsidian 0.12.19<br>可用 | Obsidian 0.12.19<br>可用 | |
| SC 0.8.0 | Obsidian 0.12.19<br>可用 | Obsidian 0.12.19<br>可用 | macOS：11.6 <br>Obsidian：0.12.19<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.7.1 | Obsidian 0.12.19<br>可用 | Obsidian 0.12.19<br>可用 | |
| SC 0.7.0 | Obsidian 0.12.19<br>可用 | Obsidian 0.12.19<br>可用 | macOS：11.6 <br>Obsidian：0.12.19<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.6.1 | Obsidian 0.12.19<br>可用 | Obsidian 0.12.19<br>可用 | |
| SC 0.6.0 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | macOS：11.1 <br>Obsidian：0.12.15<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.5.1 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | |
| SC 0.5.0 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | macOS：11.1 <br>Obsidian：0.12.15<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.4.1 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | macOS：11.1 <br>Obsidian：0.12.15<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.4.0 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | |
| SC 0.3.0 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | macOS：11.1 <br>Obsidian：0.12.15<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.2.0 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | macOS：11.1 <br>Obsidian：0.12.15<br>可用，由 [FelipeRearden](https://github.com/FelipeRearden) 测试，谢谢！🙂 |
| SC 0.1.1 | Obsidian 0.12.15<br>可用 | Obsidian 0.12.15<br>可用 | |
| SC 0.1.0 | Obsidian 0.12.12<br>可用 | Obsidian 0.12.12<br>可用 | macOS：11.5.2<br>Obsidian：0.12.5<br>可用，由 [skipadu](https://github.com/skipadu) 测试，谢谢！🙂 |
| SC 0.0.0 | Obsidian 0.12.12<br>可用 | Obsidian 0.12.12<br>可用 | |

由于我没有 Mac，Mac 上的测试由其他人执行，我不能保证每个版本都会在 Mac 上进行测试。这就是为什么在上表中可能不会在每一行中出现 Mac 的原因。如果您注意到最新的 SC 版本在表中没有 Mac 测试记录，您可以通过 [自行进行Mac测试并在此处提交您的自由测试结果](https://github.com/Taitava/obsidian-shellcommands/issues/1) 来提供帮助。

寻求帮助

如果您对如何使用此插件有任何问题，请随时在 GitHub 上 [开启一个问题](https://github.com/Taitava/obsidian-shellcommands/issues)，或者在插件的 Obsidian.md 论坛主题中 [发帖](https://forum.obsidian.md/t/shell-commands-plugin/23497)。

## 贡献

欢迎提供想法、问题、反馈、拉取请求等！😃

- 对于功能请求，请在“想法”类别中开始 [新的讨论](https://github.com/Taitava/obsidian-shellcommands/discussions)。
- 如果您要创建拉取请求，请先讨论您的想法，以免意外地将时间用于以后决定以非常不同的方式实现的事情。在代码库中可能还会进行重构，在此期间，最好等待重构完成后再创建 PR，否则您可能会基于旧的代码库进行工作，而在重构完成后需要更新 PR。因此，在创建 PR 之前请先询问，我可以告诉您是否应该等待。

[**2022-09-27：我将暂时放慢开发速度 🙂**，点击此处阅读更多](https://github.com/Taitava/obsidian-shellcommands/discussions/270)。

## 作者

有关所有作者，请参阅 [AUTHORS.md](https://github.com/Taitava/obsidian-shellcommands/blob/main/AUTHORS.md)。

### 开发者

Jarkko Linnanvirta

联系方式：

 - <https://github.com/Taitava>
 - <https://forum.obsidian.md/u/jare/>

## 支持者

该项目是免费开源软件，没有任何资金支持。我要感谢以下各方，他们通过提供免费许可证/服务订阅来慷慨支持该项目。

### <img alt="JetBrains Logo (Main) logo" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg" style="height: 4em"></img> JetBrains

[JetBrains](https://www.jetbrains.com/) 提供给我免费使用他们的 [WebStorm编辑器](https://www.jetbrains.com/webstorm/) 来开发“Shell commands”插件。了解更多关于 [JetBrains的开源支持](https://jb.gg/OpenSourceSupport) 的信息。

<img alt="WebStorm logo" src="https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm.svg" style="width: 300px;">

### Obsidian

[Obsidian](https://obsidian.md) 开发者提供了以下项目：

- [Obsidian Publish](https://obsidian.md/publish) 服务，可以在许多 Obsidian 用户熟悉的平台上托管 [_Shell commands_ 插件的文档](https://publish.obsidian.md/shellcommands)。
- 一个 [Catalyst 许可证](https://help.obsidian.md/Licenses+%26+Payment/Catalyst+license)，以便我可以使用 Obsidian 的早期访问版本测试该插件。

版权

版权所有 (C) 2021 - 2023 Jarkko Linnanvirta（请参见 [AUTHORS.md](https://github.com/Taitava/obsidian-shellcommands/blob/main/AUTHORS.md) 中的其他作者）。

本程序是自由软件：您可以在自由软件基金会发布的 GNU 通用公共许可证第 3 版的条款下重新分发和/或修改它。

本程序希望能有所帮助，但没有任何保证；甚至没有适销性或特定用途的默示保证。有关更多详细信息，请参阅 GNU 通用公共许可证。

您应该已经收到了 GNU 通用公共许可证的副本。如果没有，请参阅<https://www.gnu.org/licenses/>。

[完整的许可证可在此项目的GitHub存储库中找到](https://github.com/Taitava/obsidian-shellcommands/blob/main/LICENSE)。
