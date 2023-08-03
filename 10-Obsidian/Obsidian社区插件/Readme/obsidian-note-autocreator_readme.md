---
uid: 20230803212826
title: Obsidian 插件：【Readme】Note Auto Creator
tags: ['obsidian插件', 'readme']
description: 当创建链接到它们时自动创建笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Note Auto Creator

> [!Note] 插件名片
> - 插件名称：Note Auto Creator
> - 插件作者：Simon T. Clement
> - 插件说明：当创建链接到它们时自动创建笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/SimonTC/obsidian-note-autocreation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-note-autocreator)

## 概述

当创建链接到它们时自动创建笔记。

![Note Auto Creator](https://cdn.pkmer.cn/covers/obsidian-note-autocreator.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SimonTC/obsidian-note-autocreation/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-note-autocreator]] 插件的自述翻译



# Obsidian的自动笔记创建器

当链接创建到笔记时，自动创建笔记。

如何使用
![演示](https://raw.githubusercontent.com/SimonTC/obsidian-note-autocreation/master/readme_assets/NAC%20demo.gif)

在设置菜单中启用插件后，您将能够触发备选链接建议下拉菜单。
下拉菜单是通过在设置菜单中配置的字符输入来触发的。默认情况下，触发器是`@`。
备选链接下拉菜单的工作方式与通过键入`[[`激活的标准链接建议有一些明显的区别：

|                                                                                                        | Obsidian链接    | Note Auto Creator链接                                                               |
|--------------------------------------------------------------------------------------------------------|------------------|---------------------------------------------------------------------------------------|
| 链接建议的触发器                                                                                       | `[[`             | 可配置的（默认为`@`）                                                               |
| 按下Enter键时插入到笔记的链接                                                                           | ✔️               | ✔️                                                                                    |     
| 如果链接位置没有笔记，则创建新的笔记                                                                     | ❌                | ✔️                                                                                    |     
| 在创建新笔记时可以应用[模板](https://github.com/SilentVoid13/Templater)模板                             | ❌                | ✔️ <br/> 默认情况下通过`$`触发，但可以进行配置                                      |
| 根据触发器后的文本过滤链接建议                                                                           | ✔️               | ✔️                                                                                    |     
| 可以使用`&#124;`字符插入自定义显示文本                                                                   | ✔️               | ✔️                                                                                    |     
| 可以使用`#`字符插入到特定标题的链接                                                                       | ✔️               | ✔️                                                                                    |
| 可以使用`^`字符插入到特定块的链接                                                                         | ✔️               | ❌                                                                                     |
| 在“新笔记的默认位置”中添加新的根笔记                                                                     | ✔️               | ✔️                                                                                    |
| 可以通过别名搜索笔记                                                                                     | ✔️               | ✔️                                                                                    |
| 可以禁用对不存在的笔记的链接建议                                                                         | ❌                | ✔️<br/>默认情况下建议链接到不存在的笔记，但可以禁用                                 |
| 在触发链接插入时，提供除了markdown文件之外的其他文件类型                                              | ✔️               | ❌                                                                                     |
| 可以将笔记建议限制为仅来自存储库的一部分的笔记                                                             | ❌                | ✔️                                                                                    |
| 建议文件夹的路径                                                                                         | ❌                | ✔️<br/>默认情况下禁用文件夹建议，但可以在设置中启用                                  |
| 在插入链接时可以使用相对路径                                                                             | ❌                | ✔️                                                                                    |
| 在创建新笔记时可以应用[QuickAdd](https://github.com/chhoumann/quickadd)模板                               | ❌                | ✔️ <br/> 默认情况下通过`€`触发，但可以进行配置                                      |

一些一般注意事项：
- 要退出笔记选择过程，请按`ESC`键。请注意，只要您在同一行上开始编写，下拉菜单将再次显示。
- 使用Note Auto Creator创建的链接类型与使用标准Obsidian方式创建的链接类型相同。如果启用了[[Wikilinks]]，则使用wikilinks。否则使用markdown链接。
- 使用Note Auto Creator创建新笔记时，除非应用了模板，否则新笔记将为空。
- 两种链接插入方法之间的建议排序不完全相同，但内容相同，只是Note Auto Creator仅建议markdown文件。

### 插入模板
![模板演示](https://raw.githubusercontent.com/SimonTC/obsidian-note-autocreation/master/readme_assets/NAC-template%20demo.gif)

如果您想将模板应用于新的笔记，您可以通过使用[Templater](https://github.com/SilentVoid13/Templater)或[QuickAdd](https://github.com/chhoumann/quickadd)选择触发器（默认为`$`/`€`）来触发模板选择下拉菜单。
这将将笔记选择下拉菜单更改为模板选择下拉菜单，您将能够选择要插入的模板。
当您选择了一个模板后，笔记将被创建，并且所选的模板将被应用于该笔记。

如果您经常使用特定的模板，您可以在设置中将其定义为默认模板。
在模板列表中，此处定义的模板将显示为第一个模板。

**先决条件和限制**
- 在添加Templater、QuickAdd或Note Auto Creator后，您可能需要重新启动Obsidian。否则，Note Auto Creator可能不会意识到在Templater或QuickAdd中配置的模板文件夹。
- 只有在安装并启用了Templater或QuickAdd插件时，才能插入模板。
- 您需要在Templater或QuickAdd中定义一个模板文件夹。
- 插入模板无法与为[核心模板插件](https://help.obsidian.md/Plugins/Templates)创建的模板一起使用。
- 您无法将模板应用于已存在的笔记。

### 限制笔记建议
如果您的保险库被组织成单独的子保险库，您可能对获取当前笔记所在子保险库之外的其他子保险库中的项目的建议不感兴趣。
为了实现这一点，您可以定义[相对顶级文件夹](#relative-top-folders)。
当定义了一个相对顶级文件夹，并且您正在向一个具有该相对顶级文件夹的文件夹树的笔记中插入链接时，您只会得到那些在它们的文件夹树中也有该顶级文件夹的笔记的建议。
您可以定义任意多个相对顶级文件夹。它们按照它们在设置中添加的顺序进行检查。

请注意，笔记的创建不受定义的顶级文件夹的影响。新笔记的位置仍然由Obsidian核心设置"新笔记的默认位置"控制。

**示例**
```
/
│   General notes.md
│   My 10 year goal.md
│
└───Work/
│   │   Contact info.md
│   │   Birthdays.md
│   │
│   └───Tasks/
│       │   Prepare meeting with Jim.md
│       │   Collect offers.md
│       │ 	Remember to buy birthday gifts.md
│       │ 	
│       └───Less important task/
│           │ 	Clean up my desk.md
│       
│   
└───Private/
    │   Birthdays.md
    │
    └───Tasks/
        │ 	Remember to buy birthday gifts.md
        │ 	Buy new house.md
```

在上述保险库中，两个子保险库中有一些具有相同名称的笔记。
如果您正在向`Work`中的某个笔记插入链接，您可能不希望获取`Birthday`中任何笔记的建议。
在下表中，您可以看到基于您正在插入链接的笔记和您定义的相对顶级文件夹，返回的建议示例。

| 活动文件                                                 | 优先顺序中的相对顶级文件夹 | 输入`@`时返回的建议                                                         |
|----------------------------------------------------------|---------------------------|------------------------------------------------------------------------------|
| `/General notes.md`                                      | `Work/`, `Private/`       | 由于活动笔记不在`Work`或`Private`中，所以返回所有笔记作为建议                 |
| `/Work/Contact info.md`                                  | `Private/`                | 由于活动笔记不在`Work`中，所以返回所有笔记作为建议                           |
| `/Work/Contact info.md`                                  | `Work/`                   | 返回`Work`文件夹及其子文件夹中的所有笔记                                       |
| `/Work/Tasks/Collect offers.md`                          | `Work/`                   | 返回`Work`文件夹及其子文件夹中的所有笔记                                       |
| `/Work/Tasks/Collect offers.md`                          | `Work/Tasks`              | 返回`Work/Tasks`文件夹及其子文件夹中的所有笔记                                 |
| `/Work/Tasks/Collect offers.md`                          | `Tasks`                   | 返回`Work/Tasks`文件夹及其子文件夹中的所有笔记                                 |
| `/Work/Tasks/Collect offers.md`                          | `Task`                    | 返回`Work/Tasks`文件夹及其子文件夹中的所有笔记                                 |
| `/Private/Tasks/Buy new house.md`                        | `Work/Tasks`              | 由于活动笔记不在`Work/Tasks`中，所以返回所有笔记作为建议                      |
| `/Private/Tasks/Buy new house.md`                        | `Tasks`                   | 返回`Private/Tasks`文件夹及其子文件夹中的所有笔记                              |
| `/Private/Tasks/Less important task/Clean up my desk.md` | `Task`                    | 返回`Private/Tasks/Less important task`文件夹及其子文件夹中的所有笔记          |
| `/Private/Tasks/Less important task/Clean up my desk.md` | `Tasks`                   | 返回`Private/Tasks/`文件夹及其子文件夹中的所有笔记                             |
| `/Private/Tasks/Less important task/Clean up my desk.md` | `impo`                    | 返回`Private/Tasks/Less important task`文件夹及其子文件夹中的所有笔记          |
| `/Private/Tasks/Less important task/Clean up my desk.md` | `Private/`, `Tasks`       | 返回`Private/`文件夹及其子文件夹中的所有笔记                                   |
| `/Private/Tasks/Less important task/Clean up my desk.md` | `Tasks`, `Private/`       | 返回`Private/Tasks/`文件夹及其子文件夹中的所有笔记                             |

## 设置

### 链接建议触发器

默认情况下，`@` 用于触发链接选择，但是您可以通过更改 `Trigger for link selection` 中的值来将其配置为任何字符串。

如果所选触发器为空字符串或属于[编写 markdown 时使用的特殊符号](https://www.markdownguide.org/basic-syntax/#characters-you-can-escape)，则会显示警告。您可以选择忽略警告并仍然使用任何特殊符号作为触发器，但这将使编写普通 markdown 变得更困难，因为下拉菜单总是会出现。

### 为不存在的笔记建议现有链接
默认情况下，笔记自动创建器会建议链接到尚未创建的笔记，如果在其他文件中插入了这样的链接。
禁用此功能将隐藏对不存在的笔记的链接建议。

### 启用相对路径
如果您希望以一种简单的方式链接到与活动笔记相同文件夹中的笔记或者父文件夹中的笔记，请将此设置为true。
使用'./'来链接到与活动笔记相同文件夹中的笔记。使用'../'来链接到活动笔记文件夹的父文件夹中的笔记。

### 在建议中包含文件夹
默认情况下，笔记自动创建器在触发链接插入时给出的建议中不包含文件夹路径。
如果您启用此功能，您还将在建议中看到文件夹的路径。
当从建议中选择一个文件夹路径时，路径将被插入，然后您可以继续编写到您想要链接的笔记的其余路径。

![始终显示文件夹路径](https://raw.githubusercontent.com/SimonTC/obsidian-note-autocreation/master/readme_assets/NAC_Include_folders_always.gif)

如果您不想始终在建议中包含文件夹路径，您可以从设置"何时显示文件夹建议"中选择"仅在触发时"选项。
这将允许您定义一个特定的触发器，将显示的建议从笔记更改为文件夹。
当启用此选项时，只有在您编写的第一个字符与设置"仅显示文件夹的触发器"中的触发器匹配时，才会显示文件夹。

![仅在触发时显示文件夹路径](https://raw.githubusercontent.com/SimonTC/obsidian-note-autocreation/master/readme_assets/NAC_Folders_with_trigger.gif)

### Templater模板插入触发器
任何符号都可以用来触发选择要插入的Templater模板。默认情况下，触发符号是`$`。可以通过更改`执行Templater模板的触发器`中的值来配置此符号。
只有在安装并启用Templater时才会显示此设置。

可以在`默认Templater模板`中配置默认模板。
这将确保在插入模板时预先选择所选的默认模板。
当然，如果不需要默认模板，仍然可以从建议下拉列表中选择另一个模板。

### QuickAdd模板插入触发器
任何符号都可以用来触发选择要插入的QuickAdd模板。默认情况下，触发符号是`€`。可以通过更改`执行QuickAdd模板的触发器`中的值来配置此符号。
只有在安装并启用QuickAdd时才会显示此设置。

可以在`默认QuickAdd模板`中配置默认模板。
这将确保在插入模板时预先选择所选的默认模板。
当然，如果不需要默认模板，仍然可以从建议下拉列表中选择另一个模板。

### 相对顶级文件夹
要添加一个新的相对顶级文件夹，请点击“+”按钮。
这将添加一个新的输入框，您可以在其中写入相对顶级文件夹。
如果您想获取文件夹的建议，请点击搜索图标。

## 兼容性
该插件应该可以在Obsidian支持的所有操作系统上运行，但并未在所有地方进行测试。请参考下表中的已测试系统：

| 设备          | 已测试 			 | 工作中 |
|-----------------|------------|---------|
| Windows 10 + 11 | ✔️         | ✔️      |
| Android (11)    | ✔️         | ✔️      |
| iPad            | ✔️         | ✔️      |
| iPhone 			      | ❌          | ❔       |
| Linux           | ✔️         | ✔️      |

## 待办事项
- [ ] 如果插入到现有笔记中，则启用块链接
- [ ] 提供其他文件类型的链接建议，而不仅限于markdown
- [X] 允许使用相对路径创建链接和笔记
- [X] 设置特定的顶级文件夹以收集笔记建议
- [X] 如果插入到现有笔记中，则启用标题链接
- [X] 支持通过别名搜索笔记

如何安装

### 从Obsidian内部
您可以通过以下步骤在Obsidian内部激活插件：
- 打开设置 > 社区插件
- 确保安全模式已关闭
- 点击浏览社区插件
- 搜索"Note Auto Creator"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

### 来自GitHub

1. 从GitHub存储库的Releases部分下载最新版本
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/obsidian-note-autocreation`
3. 重新加载Obsidian
4. 如果提示安全模式，您可以禁用安全模式并启用插件。
   否则，前往设置，第三方插件，确保安全模式关闭并从那里启用插件。



