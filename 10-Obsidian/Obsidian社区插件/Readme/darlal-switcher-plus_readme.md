---
uid: 20230803204611
title: Obsidian 插件：【Readme】Quick Switcher++
tags: ['导航工具', '效率', 'obsidian插件', 'readme']
description: 使用 Quick Switcher++可以让你更快在标题之间，Obsidian 的各个模块之间，工作区模式之间，进行快速切换。
author: darlal
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quick Switcher++

> [!Note] 插件名片
> - 插件名称：Quick Switcher++
> - 插件作者：darlal
> - 插件说明：使用 Quick Switcher++可以让你更快在标题之间，Obsidian 的各个模块之间，工作区模式之间，进行快速切换。
> - 插件分类：['导航工具', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/darlal/obsidian-switcher-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?darlal-switcher-plus)

## 概述

使用 Quick Switcher++可以让你更快在标题之间，Obsidian 的各个模块之间，工作区模式之间，进行快速切换。

![Quick Switcher++](https://cdn.pkmer.cn/covers/darlal-switcher-plus.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/darlal/obsidian-switcher-plus/master/README.md)
> 

---

## Readme(翻译）

下面是 [[darlal-switcher-plus]] 插件的自述翻译


# Obsidian的Quick Switcher++插件

[![最新版本](https://img.shields.io/github/v/release/darlal/obsidian-switcher-plus?include_prereleases&sort=semver&style=for-the-badge)](https://github.com/darlal/obsidian-switcher-plus/releases/latest) [![总下载量](https://img.shields.io/github/downloads/darlal/obsidian-switcher-plus/total?style=for-the-badge)](https://github.com/darlal/obsidian-switcher-plus/releases/latest)
[![构建工作流状态](https://img.shields.io/github/actions/workflow/status/darlal/obsidian-switcher-plus/test.yml?branch=master&logo=github&style=for-the-badge)](https://github.com/darlal/obsidian-switcher-plus/actions/workflows/test.yml)

使用Quick Switcher++更快地找到你要找的内容。这是一个[Obsidian.md](https://obsidian.md/)插件，扩展了内置的"Quick Switcher"功能。[有什么新功能？](https://github.com/darlal/obsidian-switcher-plus/releases)

## 特点

* [通过标题而不是文件名查找文件](#search-headings-instead-of-filename)
  * [配置](#search-headings-configuration)
* [在笔记中导航到符号（标题、标签、链接、嵌入）](#symbol-navigation-headings-hashtags-links-embeddings)
  * [配置](#symbol-navigation-configuration)
* [在打开的编辑器和侧边栏之间导航](#navigate-between-open-editors)
  * [配置](#editor-navigation-configuration)
* [快速切换配置的工作区](#switch-workspaces)
  * [配置](#workspace-configuration)
* [导航到收藏的笔记](#navigate-starred-notes)
  * [配置](#starred-configuration)
* [运行命令](#run-commands)
  * [配置](#command-configuration)
* [导航到相关项目](#related-items)
  * [配置](#related-items-configuration)
* [常规设置](#general-settings)
* [全局热键/快捷键命令](#global-commands-for-hotkeys)

## 演示

### 搜索标题：

使用快捷方式启动Switcher++，使用默认的`#`命令触发标题模式，然后输入搜索文本。注意，返回不同的标题级别匹配，以及别名、未解决和常规文件名匹配。

![标题模式gif](https://raw.githubusercontent.com/darlal/obsidian-switcher-plus/master/demo/headings-mode.gif)

### 符号导航：

使用快捷方式启动Switcher++，过滤所有文件以找到“格式化您的笔记”文件，然后触发符号命令（默认为`@`）直接打开文件到“外部链接”部分。

![符号模式gif](https://raw.githubusercontent.com/darlal/obsidian-switcher-plus/master/demo/symbol-mode.gif)

### 编辑器导航：

使用快捷键直接将Switcher++启动到编辑器模式，过滤当前打开的编辑器以找到“格式化笔记”编辑器并激活它。然后再次使用Switcher++打开“反向链接”侧边栏。

![Symbol Mode gif](https://raw.githubusercontent.com/darlal/obsidian-switcher-plus/master/demo/editor-mode.gif)

通过搜索文件中包含的标题来查找您要查找的文件，而不仅仅是搜索文件名。可以配置此模式来进行搜索：a）严格仅通过第一个H1标题进行搜索，如果与H1没有匹配，则回退到文件名搜索；b）通过所有标题进行搜索；c）遵守内置的快速切换器设置“仅显示现有”，“显示附件”和“显示所有文件类型”。默认情况下，此模式将显示前50个结果。

### 搜索标题配置

| 设置 | 描述 | 默认值 |
|--------------------------|-------------|---------|
| Headings list mode trigger | 触发切换到标题列表模式的字符。 | `#` |
| 仅显示标题 | **启用**：严格搜索文件中包含的标题。注意：此设置会覆盖“仅显示现有”和“搜索文件名”设置。<br />**禁用**：当文件中的第一个H1没有匹配时，回退到对文件名进行搜索。这也允许启用对文件名、别名和未解析链接的搜索。 | 禁用 |
| 搜索所有标题 | **启用**：搜索文件中包含的所有标题。<br />**禁用**：只搜索每个文件中的第一个H1。 | 启用 |
| 搜索文件名 | **启用**：搜索并显示文件名的建议。<br />**禁用**：不搜索文件名（除了回退搜索）。 | 禁用 |
| 排除文件夹 | 用于排除文件夹及其子目录的文件夹路径正则表达式列表。每行一个。 | 无 |
| 隐藏 Obsidian 的“排除文件” | **启用**：不显示 Obsidian 的“选项 > 文件和链接 > 排除文件”列表中的文件建议。**禁用**：显示这些文件的建议，但降低排名。 | 禁用 |

符号导航（标题、标签、链接、嵌入）

从快速切换器直接查看、筛选和导航到文件中的任何符号（标题、标签、链接、嵌入、批注），无论该文件当前是否在编辑器中打开。此功能可以通过两种方式触发：a）对于当前活动编辑器窗格中的活动文件，b）对于切换器本身当前选定（高亮）的建议。

对于活动编辑器窗格中的活动文件：

“Quick Switcher++：打开活动编辑器的符号”命令将始终触发当前活动文件（正在被编辑的文件）的符号模式。也就是说，当触发此命令时（无论是通过快捷键还是通过命令面板），符号建议列表将始终是在触发命令时**活动编辑器窗格中的活动文件**中的符号。

对于保险库中的任何其他文件，无论是否打开：

符号模式触发字符（默认为`@`）将始终触发当前在切换器中**突出显示的建议的符号模式**。这意味着，当您打开切换器并显示最近文件列表（或文件搜索结果列表）时，当您键入`@`时，建议突出显示的源文件将显示其符号。生成的符号建议列表将来自键入`@`时突出显示的文件建议。您可以使用导航键选择（突出显示）在键入`@`之前将用作源文件的文件。

例如：可以通过打开Quick Switcher++，键入一些字符进行过滤和/或使用箭头键选择（突出显示）感兴趣的文件来查看符号。然后，一旦选择/突出显示了感兴趣的文件，键入触发字符（默认为`@`）以查看该文件的符号。

![符号大纲预览](https://raw.githubusercontent.com/darlal/obsidian-switcher-plus/master/demo/symbol-outline.png)

### 符号导航配置

| 设置                          | 描述 | 默认值 |
|----------------------------------|-------------|---------|
| 触发符号列表模式的字符         | 在切换器中触发符号列表模式的字符。 | `@` |
| 缩进显示符号列表 | **启用**：符号将按照它们在源文本中出现的顺序显示，缩进在任何前面的标题下。<br />**禁用**：符号将按类型分组显示：标题、标签、链接、嵌入。 | 启用 |
| 在新窗格中打开符号         | **启用**：始终在导航到符号时打开一个新窗格。<br />**禁用**：在已经打开的窗格中导航（如果存在）。 | 禁用 |
| 在移动设备上在活动窗格中打开符号 | **启用**：在活动编辑器窗格中导航到目标文件和符号，换句话说，不创建新的编辑器窗格。<br />**禁用**：在导航到符号时，即使在移动设备上也会打开一个新窗格。 | 禁用 |
| 自动选择最近的标题      | **启用**：在未过滤的符号列表中，选择当前光标位置最近的前导标题。<br />**禁用**：选择列表中的第一个符号。 | 启用 |
| 显示标题                    | **启用**：在符号列表中显示标题。<br />**禁用**：在符号列表中不显示标题。 | 启用 |
| 显示标签                        | **启用**：在符号列表中显示标签。<br />**禁用**：在符号列表中不显示标签。 | 启用 |
| 显示嵌入                      | **启用**：在符号列表中显示嵌入。<br />**禁用**：在符号列表中不显示嵌入。 | 启用 |
| 显示链接                       | **启用**：在符号列表中显示链接。启用后，以下设置可见以进一步细化显示哪些类型的链接，`链接到标题`，`链接到块`。<br />**禁用**：在符号列表中不显示链接。 | 启用 |
| 链接到标题                | **启用**：显示指向标题的链接，例如 `[[file#header]]`。仅当启用`显示链接`时，此设置可见。<br />**禁用**：不显示指向标题的链接。 | 启用 |
| 链接到块                  | **启用**：显示指向块的链接，例如 `[[file#^blockid]]`。仅当启用`显示链接`时，此设置可见。<br />**禁用**：不显示指向块的链接。 | 启用 |

在打开的编辑器之间导航

通过使用默认的`edt`命令，可以查看和过滤所有当前打开的编辑器，并从快速切换器++导航到任何一个编辑器。注意：符号搜索也适用于此模式，因此您可以同时使用两种模式，例如`edt @`。当没有命令存在时，将使用默认的内置快速切换器行为。

侧边栏的编辑器/视图也可以配置为在列表中显示。例如，您可以使用此功能直接从快速切换器导航到“反向链接”、“文件浏览器”、“标签窗格”等系统视图/窗格。

![editor search preview](https://raw.githubusercontent.com/darlal/obsidian-switcher-plus/master/demo/edt-command.png)

### 编辑器导航配置

| 设置                      | 描述           | 默认值   |
|--------------------------|---------------|---------|
| 编辑器列表模式触发器       | 在切换器中触发编辑器列表模式的字符。 | `edt ` |
| 包括侧边栏视图           | 在切换器中显示指定的侧边栏视图类型。每行添加一个视图类型。留空以永不在切换器中显示侧边栏编辑器。 | `backlink`<br />`image`<br />`markdown`<br />`pdf` |

## 切换工作区

使用默认的 `+` 命令快速查看、筛选和切换已配置的[工作区](https://help.obsidian.md/Plugins/Workspaces)。

注意：必须启用内置的系统[工作区](https://help.obsidian.md/Plugins/Workspaces)插件才能使用此模式。

### 工作区配置

| 设置                  | 描述 | 默认值 |
|--------------------------|-------------|---------|
| 工作区列表模式触发器 | 在切换器中触发工作区列表模式的字符。 | `+` |

导航星标笔记

使用默认的 `'` 命令快速查看、筛选和切换[星标笔记](https://help.obsidian.md/Plugins/Starred+notes)。

注意：必须启用内置的系统[星标笔记](https://help.obsidian.md/Plugins/Starred+notes)插件才能使用此模式。

### 星标配置

| 设置                      | 描述           | 默认值  |
|--------------------------|---------------|---------|
| 星标列表模式触发器        | 在切换器中触发星标列表模式的字符。 | `'` |

运行命令

使用默认的`>`命令快速查看、搜索和运行Obsidian命令。当没有搜索文本时，建议列表将显示固定命令列表，然后是最近执行的命令列表。当没有固定命令和最近执行的命令时，将首先显示所有命令。当有搜索文本时，建议列表将只显示与搜索文本匹配的命令。

### 命令配置

| 设置                      | 描述         | 默认值  |
|--------------------------|-------------|---------|
| 命令列表模式触发器        | 触发切换器中命令列表模式的字符。 | `>` |

## 相关项目

从快速切换器直接查看、筛选和导航到与所选输入文件“相关”的文件，无论该文件当前是否在编辑器中打开。支持的关系类型有：出站链接、反向链接和文件系统位置。此功能可以通过两种方式触发：a）对于当前活动编辑器窗格中的活动文件，b）对于切换器本身当前选定（高亮）的建议。

对于活动编辑器窗格中的活动文件：

“Quick Switcher++：打开活动编辑器的相关项”命令将始终触发当前活动编辑器窗格中的**活动文件**的相关项模式（即正在主动编辑的文件）。这意味着，当触发此命令（无论是通过快捷键还是通过命令面板）时，相关项建议列表将始终与命令触发时**活动编辑器窗格中的活动文件**相关。

对于保险库中的任何其他文件，无论是否打开：

相关项目模式触发字符（默认为`~`）将始终触发当前在切换器中**高亮显示的建议**的相关项目模式。这意味着，当您打开切换器并显示最近文件列表（或文件搜索结果列表）时，当您键入`~`时，建议中高亮显示的源文件将显示其关系。生成的相关项目建议列表将是在键入`~`时高亮显示的文件建议。您可以使用导航键选择（高亮显示）在键入`~`之前将用作源文件的文件。

例如：可以通过打开Quick Switcher++，键入一些字符进行过滤和/或使用箭头键选择（高亮显示）感兴趣的文件来查看相关项目。然后，一旦选择/高亮显示了感兴趣的文件，键入触发字符（默认为`~`）以查看该文件的相关项目。

### 反向链接关系（`backlink`）

当选择输入建议/文件时触发相关项目命令，将在整个保险库中搜索所有的反向链接。反向链接是指包含指向输入文件的外部链接的文件。这些文件将与包含对输入文件的链接数量的结果列表一起显示。

#### 未解决链接的反向链接

未解决链接是指指向存储库中不存在的文件的外部链接。相关项目命令也可以针对未解决链接建议进行触发，并且与常规文件的行为相同。

### 外部链接关系（`outgoing-link`）

当选择输入建议/文件并触发相关项目命令时，输入文件的所有内部外部链接将显示在结果列表中。

### 文件系统位置关系（`disk-location`）

当选择输入建议/文件时触发相关项目命令，与输入文件位于相同目录中的所有文件（或在设置中另有指定）将显示在结果列表中。

### 相关项配置

| 设置                         | 描述 | 默认值 |
|---------------------------------|-------------|---------|
| 相关项列表模式触发器 | 触发切换器中相关项列表模式的字符。 | `~` |
| 显示相关项类型         | 指定要在结果列表中显示的关系类型。 | `backlink`<br />`disk-location`<br />`outgoing-link` |
| 排除已打开的文件              | **启用**：已在编辑器中打开的相关文件将不会显示在列表中。<br />**禁用**：所有相关文件都将显示在列表中。 | 禁用 |

## 通用设置

| 设置项                         | 描述 | 默认值 |
|---------------------------------|-------------|---------|
| 显示功能区图标 | 可从功能区菜单访问的模式列表。 | `标题列表`<br />`符号列表` |
| 首选文件路径显示格式 | 在建议中显示文件路径的首选方式。注意：默认情况下，对于位于存储库根目录的文件，不会显示路径信息。 | `父文件夹和文件名` |
| 隐藏根项目的路径 | **启用**：对于存储库根目录中的项目，路径信息将被隐藏。 | 启用 |
| 默认在新窗格中打开 | **启用**：导航到未打开的文件时，将尽可能在新的编辑窗格中打开（就像按住cmd/ctrl键一样）。当文件已经打开时，将激活现有的窗格。这将覆盖所有其他窗格设置。 | 启用 |
| 覆盖标准模式行为 | **启用**：Switcher++将更改默认的Obsidian内置Switcher功能（标准模式），以注入自定义行为。自定义行为包括增强建议项的渲染以显示附加信息、特殊路径显示处理和选项卡导航功能。<br />**禁用**：不对默认的Obsidian内置功能（标准模式）进行任何更改。 | 启用 |
| 显示指示器图标 | **启用**：显示指示项是否最近、加星等的图标。 | 启用 |
| 结果优先级调整 | **启用**：通过固定百分比人为增加指定项目类型的匹配分数，使其在结果列表中显示更高。请参阅可以优先考虑的[结果类型](/src/settings/generalSettingsTabSection.ts#L6)列表。注意，这些调整是相互独立的，例如，如果同时为“加星项目”和“打开项目”指定了调整，那么对于已打开且加星的文件的结果将同时接收到这两个调整。<br />**禁用**：不调整结果的匹配分数。 | 禁用 |

## 全局热键的全局命令

以下全局命令由插件注册，可用于全局热键/快捷方式。

* `Quick Switcher++: 打开`
* `Quick Switcher++: 在编辑器模式下打开`
* `Quick Switcher++: 打开活动编辑器的符号`
* `Quick Switcher++: 在工作区模式下打开`
* `Quick Switcher++: 在标题模式下打开`
* `Quick Switcher++: 在收藏模式下打开`
* `Quick Switcher++: 在命令模式下打开`
* `Quick Switcher++: 打开活动编辑器的相关项`

安装

从Obsidian v0.9.10开始，可以在Obsidian内部激活此插件：
- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索"Quick Switcher++"
- 点击"安装"按钮
- 安装完成后，关闭社区插件窗口
- 在"已安装插件"部分，启用Quick Switcher++

### 来自Github

- 下载[最新版本的发布文件](https://github.com/darlal/obsidian-switcher-plus/releases)
- 将发布文件的内容解压到您的vault的插件文件夹中：`<vault>/.obsidian/plugins/`
注意：在MacOS上，`.obsidian`文件夹可能默认是隐藏的。
- 重新加载Obsidian
- 打开设置，第三方插件，确保安全模式关闭，并从那里启用"Quick Switcher++"。

## 贡献

欢迎通过修复错误、撰写文档和进行一般改进来进行贡献。对于更重要的功能工作，请创建一个[讨论](https://github.com/darlal/obsidian-switcher-plus/discussions)来讨论功能想法，或者与我联系，以便我们可以评估可行性和最佳实施方法。

Switcher++ 的一个主要设计目标是成为内置系统切换器的“插拔式”替代品。这样，用户只需用 Switcher++ 替换内置系统切换器，就可以继续正常使用所有内置功能。

### 开始

* 克隆存储库
* 进入存储库目录
* 运行 `npm install`
* 运行 `npm run dev`，这将监视任何源文件的更改并运行单元测试、代码检查，并在检测到更改时构建插件。
* 开始愉快地编码吧！😀

## 更新日志

* 请查看[发布页面](https://github.com/darlal/obsidian-switcher-plus/releases)以了解每个版本的更改。

## 注意事项

* 此插件目前仍处于实验阶段，请自行承担使用风险。它仅在MacOS上进行了测试，其他平台可能会出现问题。

如果这个项目对您有用，请感谢支持其持续开发和维护。非常感谢您对一杯☕或🍺的任何贡献。谢谢！

[![给予感谢 Paypal](https://img.shields.io/badge/给予感谢-Paypal-blue?style=flat&logo=paypal)](https://paypal.me/darla) [![给予感谢 buymeacoffee](https://img.shields.io/badge/给予感谢-买杯咖啡-%23FFDD00?style=flat&logo=buymeacoffee)](https://www.buymeacoffee.com/darlal)



