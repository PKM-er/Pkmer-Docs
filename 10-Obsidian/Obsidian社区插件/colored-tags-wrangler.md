---
uid: 20231213114102
title: Obsidian 插件：colored tags wrangler 一个简单而又强大的标签色彩样式整理器
tags: ['obsidian插件', '彩色标签', '自动匹配']
description: Obsidian 插件：colored tags wrangler 一个简单而又强大的标签色彩样式整理器
author: 山人
type: other
draft: false
editable: false
modified: 20231225111729
---

# Obsidian 插件：colored tags wrangler 一个简单而又强大的标签色彩样式整理器

## 概述

该插件允许用户为不同的标签（tags）应用不同的颜色。自定义标签颜色同时，还能与一些常见插件联动，这些强大的设置，都归类到了插件的“设置”选项卡中应用的。

> [!Note] 插件名片
> - 插件名称：colored-tags-wrangler
> - 插件版本：0.13.7
> - 插件作者：[ode-of-chaos
> - 插件描述：此插件可以为标签分配不同的颜色，并与其他插件集成，例如看板，白板。
> - 插件项目地址：[点我跳转](https://github.com/code-of-chaos/obsidian-colored_tags_wrangler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?colored-tags-wrangler)

![Colored Tags Wrangler](https://cdn.pkmer.cn/covers/colored-tags-wrangler.png!pkmer)

## 特性&效果

这个插件允许用户对不同的标签应用不同的颜色。标签颜色的配置，位于该插件的“设置选项卡”。

- 能够通过颜色拾色器，自定义标签的颜色
    - 您还可以启用区别文本和背景颜色的选项，为一个标签的文本和背景，分别选择两种不同的颜色。
- 与 Obsidian 官方的 Canvas 集成，同步卡片颜色到标签。
    - 设置标签颜色与具有该标签的白板卡片颜色关联，并同步。
- 与 [[obsidian-kanban]] 插件集成。
    - 将标签颜色与具有该标签的看板卡片颜色同步。
    - 当标题中存在标签时，将标签颜色与看板列表颜色同步。
    - 在看板视图中，设置需要省略标签中的 `#` 号
- 与文件夹注释笔记中的属性标签集成
    - 如果文件夹的注释在其文件属性中具有彩色标签，则将标签颜色应用于文件列表中的文件夹。
    - _当前缺陷_`detect`：当您更改文件属性中的标签时，您必须手动按下“设置”中的按钮。
    - 这并不真正的绑定到某一个插件。例如使用 [AidenLX 的FolderNote](https://github.com/aidenlx/alx-folder-note)，任何与其所在文件夹同名的文件都可以使用标签的颜色

## 功能示例

标签设置（注意：默认启用了单行输入标签，可以以 `;` 分隔写入多个标签，并且默认启用了 `Enable separate background color` 选项（此选项允许分开设置标签的文本颜色和背景色）。在之后的设置中，第一个圆环中颜色选择器用于文本颜色的设置，第二个用于背景颜色的设置。）

![](https://cdn.pkmer.cn/images/5c76da39f86eb4a2dec110d21fd0919e_MD5.png!pkmer)

彩色标签

 ![b1f4d7b09f4dd24f936d192b4e5816cf_MD5.png|300](https://cdn.pkmer.cn/images/b1f4d7b09f4dd24f936d192b4e5816cf_MD5.png!pkmer)

白板集成

 ![9d54b740de7093983f526d56a3f58767_MD5.png|400](https://cdn.pkmer.cn/images/9d54b740de7093983f526d56a3f58767_MD5.png!pkmer)

看板集成

![1bfb01ef2605d0c1fd551e64aa71687d_MD5.png](https://cdn.pkmer.cn/images/1bfb01ef2605d0c1fd551e64aa71687d_MD5.png!pkmer)

文件夹注释笔记的集成（注意：目前，必须手动按下 `detect` 按钮。）

![8dc15464f79e22bc1f4322e26bfb24e6_MD5.png](https://cdn.pkmer.cn/images/8dc15464f79e22bc1f4322e26bfb24e6_MD5.png!pkmer)

## 已知的问题

以下是已知问题的列表。如果您知道如何修复它们，那么欢迎所有的帮助。

- 如果看板的卡片、白板的卡片或文件夹注释笔记中，包含多个彩色标签，则 CSS 选择给定颜色的规则，并不总是很清楚。

## 设置说明

### 插件设置界面截图

![c3601dfca1fa1119d2b2ace3699c2406_MD5.png](https://cdn.pkmer.cn/images/c3601dfca1fa1119d2b2ace3699c2406_MD5.png!pkmer)

### Obsidian 标签 Obsidian tags

Don't add the '#' before the tag.：请勿在本插件的设置中添加标签时，在标签前添加“#”。

If you forget this, this is done in code for you, resulting in the input being changed.：如果忽略这一点，会导致输入被更改，因为“#” 在本插件代码中，会自动处理。

### 自定义彩色标签 Custom color tags

Define custom colors for tags.：定义标签的自定义颜色。

`Add new tag` `Clear all`：`添加新标签` `全部清除`

### 将标签颜色应用于 obsidian 白板的卡片 Apply tag color to canvas card

Applies the tag color, of the tag within the canvas's card, to the background color of the canvas card. The Value slider and setter to the right, are the luminance offsets for the background.

在 obsidian 白板的卡片中，将标签的标签颜色与 obsidian 白板中卡片的背景色同步。右侧的“值”滑块和“设置器”是背景的亮度偏移。

![82267950d3bf2b5dce66e06b2cdee1a9_MD5.png](https://cdn.pkmer.cn/images/82267950d3bf2b5dce66e06b2cdee1a9_MD5.png!pkmer)

### 启用单行输入多个标签 Enable multiple tags per line

Allows the usage of , or \n (new line) to bind multiple tags to one color.

允许使用 `;` 或 `\n`（换行符）将多个标签绑定到同一种颜色。

![3925f5dff11416337f7bfd5bf9692194_MD5.png](https://cdn.pkmer.cn/images/3925f5dff11416337f7bfd5bf9692194_MD5.png!pkmer)

### 启用单独的背景颜色 Enable separate background color

Allows you to specify a different background color for each tag.

允许为每个标签指定不同的背景颜色。

### 为每个标签启用单独的亮度偏移 Enable separate luminance offsets per tag

Allows you to specify a different luminance offset value for each tag. This offset is used in background of items like Canvas Card,Kanban Card/List, ...

允许为每个标签指定不同的亮度偏移值。此偏移量与白板的卡片、看板的卡片/列表等项目的背景色同步

### 为 Obsidian 的深色和浅色模式启用不同的亮度计算公式 Enable different luminance formula for dark & light mode

When enabled, applies the luminance offset differently depending on Dark or Light mode. Formula stays the same in Dark mode, only applies to Light mode.：启用后，根据 Obsidian 的深色或浅色模式以不同的方式应用亮度偏移公式。颜色亮度在深色模式下保持不变，此公式仅适用于浅色模式。

### 启用背景透明度设置 Enable background opacity

Makes the backgrounds of any tags, Canvas cards, etc... slightly opaque. Recreates a pre 0.12.0 state.：设置任何标签、白板卡片等的背景轻微透明度。重新恢复 obsidian 0.12.0 版本之前的创建方式。

### 看板插件的集成 Kanban plugin integration

#### 启用看板插件的集成 Enable Kanban integration

#### 将标签的颜色，应用于看板的卡片 Apply tag color to kanban card

Applies the tag color, of the tag within the card, to the background color of the card.：将卡片内标签的标签颜色与卡片的背景颜色同步。

> [Warning] 已知问题/Known issue
> When a card has multiple tags, the color of the card is randomly chosen.
> 当一张卡片有多个标签时，卡片的颜色是随机选择的。

#### 将标签颜色应用到看板列表 Apply tag color to kanban list

Applies the tag color, of the tag within the list's title, to the background color of the list.：将列表标题中标签的颜色，应用到列表的背景色。

> [Warning] 已知问题/Known issue
> When a list has multiple tags, the color of the list is randomly chosen.
> 当一个列表有多个标签时，列表的颜色是随机选择的。

#### 在看板的 boards 视图中省略“#” Omit '#' in kanban boards

Hides the '#' from the kanban view, though they still have to be typed out within the used areas.：从看板视图中隐藏“#”，但仍必须在使用的区域内键入它们。

### 文件夹注释笔记的集成 Folder Note integration

Doesn't integrate with a particular plugin, but relies of the concept of 'Folder Notes'.：不与特定插件集成，而是依赖于“文件夹注释笔记”的概念。

#### 启用文件夹注释笔记的集成 Enable Folder Note integration

Applies the tag color, of the tag within a Folder Note, to the background color of the folder in the file viewer. It is recommended that you enable 'Enable Multiple Tags' as well, to easily reuse colors for multiple folders. The order of these lines is important, as they influence which CSS is eventually used.

将文件夹注释笔记中标签的颜色，应用到文件列表查看器。建议您同时启用“启用多个标签”设置选项，以便轻松重复将颜色应用到多个文件夹。这些标签输入行的顺序很重要，因为它们会影响最终 CSS 选择器使用的标签颜色。

- Enable auto detection：启用自动检测
- Auto detects changes in a file's property's tags and updates the file viewer.：自动检测文件属性标签中的更改，并更新到文件列表查看器。

#### 检测文件夹注释笔记中的标签 Detect tags in folder notes

Traverses your vault and stores all tags found in notes with the same name as the folder they are found in.

遍历 obsidian 的库，并存储笔记中找到的所有标签，并基于标签与文件夹名，进行匹配。

`Detect Manually` ：手动检测

#### 顶级文件夹 Top Level Folder

Define custom colors for tags.：定义标签的自定义颜色。

`Add new link` `Clear all`：`添加新链接` `全部清除`

### 调试选项 Debug options

#### 启用调试选项 Enable debug options

Allows you to view and use some extra debug option. Don't use these if you don't know what you are doing.

允许查看和使用一些额外的调试选项。如果不知道正在做的是什么，就不要使用这些。

#### 刷新 CSS 样式 Refresh CSS styling

Reloads the styling elements of this plugin. Warning: Might change order of tags in CSS and therefor chances to alter the look of certain things, like the kanban boards.

重新加载此插件的样式元素。**警告：可能会更改 CSS 选择器中的标签顺序，并且因此可能改变某些视图的外观，例如看板。**

`Refresh`：`刷新`

### 功能示例

| 功能                                                                                                                                                                                                                                                     | 图片                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 标签设置 <br>（注意：我已经启用了一行中的多个标签，用分号 `;` 分隔，并且还启用了“启用单独的背景颜色”选项。第一个颜色选择器用于文本颜色，第二个用于背景颜色。） | ![tags_setting.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_0.png!pkmer)             |
| 彩色标签                                                                                                                                                                                                                                                | ![tags_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_1.png!pkmer)             |
| Canvas 集成                                                                                                                                                                                                                                              | ![canvas_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_2.png!pkmer)         |
| 看板集成                                                                                                                                                                                                                                                | ![kanban_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_3.png!pkmer)         |
| 文件夹笔记集成 <br>（注意：目前您需要在设置中手动按下“检测”按钮。）                                                                                                                                                                                            | ![foldernote_example.png](https://cdn.pkmer.cn/covers/colored-tags-wrangler_1_4.png!pkmer) |

## 已知问题

以下是已知问题列表。如果您知道如何修复它们，欢迎提供帮助。

- 如果看板卡片、画布卡片或文件夹注释中有多个彩色标签，CSS 选择给定颜色的原因并不总是清楚。
支持