---
uid: 20231127031619
title: Obsidian 插件：colored-tags-wrangler 为标签分配颜色并与其他插件集成
tags: [彩色标签, 自动匹配, 多插件集成]
description: Obsidian 插件：colored-tags-wrangler 为标签分配颜色，与其他插件白板、集成
author: 山人
type: beautify
draft: false
editable: false
modified: 20231127131108
---

# Obsidian 插件：colored-tags-wrangler 为标签分配颜色并与其他插件集成

> [!Note] 插件名片
> - 插件名称：colored-tags-wrangler
> - 插件版本：0.13.7
> - 插件作者：[code-of-chaos](https://github.com/code-of-chaos) 
> - 插件描述：此插件可以为标签分配不同的颜色，并与其他插件集成，例如看板，白板。
> - 插件项目地址：[点我跳转](https://github.com/code-of-chaos/obsidian-colored_tags_wrangler)
> - 国内下载地址：[下载安装](https://) *pkmer插件市场未收录*

## 特性&效果

> [!note]
> 这个插件允许用户对不同的标签应用不同的颜色。标签颜色设置，位于该插件的“设置选项卡”。

-   能够通过颜色拾色器定义具有唯一颜色的标签
    -   您还可以启用分离文本和背景颜色的选项，并为一个标签选择两种不同的颜色。
-   与 Canvas集成，同步卡片颜色到标签。
    -   设置将标签颜色与具有该标签的画布卡片颜色同步。
-   与[obsidian-kanban 看板](https://github.com/mgmeyers/obsidian-kanban)插件集成。
    -   设置将标签颜色与具有该标签的看板卡片颜色同步。
    -   当标题中存在标签时，设置将标签颜色与看板列表颜色同步。
    -   在看板视图中设置省略标签中的`#`号
-   与文件夹注释属性中的标签集成
    -   如果文件夹的注释在其文件属性中具有彩色标签，则设置将颜色应用于文件夹。
    -   _当前缺陷_`detect`：当您更改文件属性中的标签时，您必须手动按下“设置”中的按钮。
    -   这并不真正的绑定到某一个插件。我为此使用[AidenLX 的FolderNote](https://github.com/aidenlx/alx-folder-note)，任何与其所在文件夹同名的文件都可以使用

## 功能示例

| 特征                                                                                                                                                                   | 图像                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|                                                                                                                                                                        |                                                               |
| 标签设置（注意：我已经为一行启用了多个标签，用`;`分隔，并且我还启用了该`Enable separate background color`（允许分开设置背景色）选项。在后图的设置中，第一个颜色选择器用于文本颜色，第二个用于背景颜色。） | ![[Resource/Images/5c76da39f86eb4a2dec110d21fd0919e_MD5.png]] |
| 彩色标签                                                                                                                                                               | ![[Resource/Images/b1f4d7b09f4dd24f936d192b4e5816cf_MD5.png]] |
| 画布集成                                                                                                                                                               | ![[Resource/Images/9d54b740de7093983f526d56a3f58767_MD5.png]] |
| 看板集成                                                                                                                                                               | ![[Resource/Images/1bfb01ef2605d0c1fd551e64aa71687d_MD5.png]] |
| 文件夹注释集成（注意：目前您必须手动按下`detect`设置中的按钮。）                                                                                                       | ![[Resource/Images/8dc15464f79e22bc1f4322e26bfb24e6_MD5.png]] |

## 已知的问题

以下是已知问题的列表。如果您知道如何修复它们，那么欢迎所有帮助。

-   如果看板卡片、画布卡片或文件夹注释中包含多个彩色标签，则 CSS 选择给定颜色的规则，并不总是很清楚。

## 设置说明
### 插件设置界面截图
![[Resource/Images/c3601dfca1fa1119d2b2ace3699c2406_MD5.png]]

### Obsidian tags  
黑曜石标签

Don't add the '#' before the tag.  
请勿在本插件添加彩色标签时，在标签前添加“#”。

If you forget this, this is done in code for you, resulting in the input being changed.  
如果您忘记了这一点，这将在代码中为您完成，从而导致输入被更改。

### Custom color tags  
自定义颜色标签

Define custom colors for tags.  
定义标签的自定义颜色。
`Add new tag`  `Clear all`  
添加新标签    全部清除
### Apply tag color to canvas card  
将标签颜色应用于画布卡片

Applies the tag color, of the tag within the canvas's card, to the background color of the canvas card. The Value slider and setter to the right, are the luminance offsets for the background.  
将画布卡片中标签的标签颜色与画布卡片的背景色同步。右侧的“值”滑块和“设置器”是背景的亮度偏移。
![[Resource/Images/82267950d3bf2b5dce66e06b2cdee1a9_MD5.png]]
### Enable multiple tags per line  
每行启用多个标签

Allows the usage of , or \n (new line) to bind multiple tags to one color.  
允许使用 `;` 或 `\n`（换行符）将多个标签绑定到一种颜色。

![[Resource/Images/3925f5dff11416337f7bfd5bf9692194_MD5.png]]
### Enable separate background color  
启用单独的背景颜色

Allows you to specify a different background color for each tag.  
允许您为每个标签指定不同的背景颜色。

### Enable separate luminance offsets per tag  
为每个标签启用单独的亮度偏移

Allows you to specify a different luminance offset value for each tag. This offset is used in background of items like Canvas Card,Kanban Card/List, ...  
允许您为每个标签指定不同的亮度偏移值。此偏移量与白板卡片、看板卡片/列表等项目的背景色同步

### Enable different luminance formula for dark & light mode  
为ob的深色和浅色模式启用不同的亮度计算公式

When enabled, applies the luminance offset differently depending on Dark or Light mode. Formula stays the same in Dark mode, only applies to Light mode.  
启用后，根据深色或浅色模式以不同的方式应用亮度偏移公式。颜色亮度在深色模式下保持不变，公式仅适用于浅色模式。

### Enable background opacity  
启用背景不透明度

Makes the backgrounds of any tags, Canvas cards, etc... slightly  opaque. Recreates a pre 0.12.0 state.
设置任何标签、画布卡片等的背景轻微透明度。重新创建 obsidian0.12.0 版本之前的状态。

### Kanban plugin integration  
看板插件集成

#### Enable Kanban integration  
启用看板集成

#### Apply tag color to kanban card  
将标签颜色应用于看板卡片

Applies the tag color, of the tag within the card, to the background color of the card. 

将卡片内标签的标签颜色与卡片的背景颜色同步。

Known issue:  
已知问题：

When a card has multiple tags, the color of the card is randomly chosen.  
当一张卡片有多个标签时，卡片的颜色是随机选择的。

#### Apply tag color to kanban list  
将标签颜色应用于看板列表

Applies the tag color, of the tag within the list's title, to the background color of the list. 
将列表标题中标记的标记颜色应用于列表的背景色。

Known  issue: 
已知问题：

When a list has multiple tags, the color of the list is randomly chosen.  
当一个列表有多个标签时，列表的颜色是随机选择的。

#### Omit '#' in kanban boards  
在看板中省略“#”

Hides the '#' from the kanban view, though they still have to be typed out within the used areas.  
从看板视图中隐藏“#”，但仍必须在使用的区域内键入它们。

### Folder Note integration  
文件夹注释笔记的集成

Doesn't integrate with a particular plugin, but relies of the concept of 'Folder Notes'.  
不与特定插件集成，而是依赖于“文件夹注释”的概念。

#### Enable Folder Note integration  
启用文件夹注释笔记的集成

Applies the tag color, of the tag within a Folder Note, to the background color of the folder in the file viewer. It is recommended that you enable 'Enable Multiple Tags' as well, to easily reuse colors  for multiple folders. The order of these lines is important, as they influence which CSS is eventually used.   
将文件夹注释笔记中标签的标签颜色应用于文件列表查看器。建议您同时启用“启用多个标签”，以便轻松重复使用颜色用于多个文件夹。这些行的顺序很重要，因为它们会影响最终 CSS 的使用。

Enable auto detection  
启用自动检测

Auto detects changes in a file's property's tags and updates the file viewer.  
自动检测文件属性标记中的更改并更新文件列表查看器。

#### Detect tags in folder notes  
检测文件夹注释笔记中的标签

Traverses your vault and stores all tags found in notes with the same name as the folder they are found in.   
遍历您的保管库并存储笔记中找到的所有标签，基于标签与文件夹名的匹配。

`Detect Manually`  
手动检测

#### Top Level Folder  
顶级文件夹

Define custom colors for tags.  
定义标签的自定义颜色。

`Add new link`  `Clear all`  
添加新链接   全部清除

### Debug options  
调试选项

#### Enable debug options  
启用调试选项

Allows you to view and use some extra debug option. Don't use these if you don't know what you are doing.  
允许您查看和使用一些额外的调试选项。如果你不知道你正在做的是什么，就不要使用这些。

#### Refresh CSS styling  
刷新 CSS 样式

Reloads the styling elements of this plugin. Warning: Might change order of tags in CSS and therefor chances to alter the look of certain things, like the kanban boards.  
重新加载此插件的样式元素。警告：可能会更改 CSS 中标签的顺序，并且因此有机会改变某些事物的外观，例如看板。

`Refresh`  
刷新
