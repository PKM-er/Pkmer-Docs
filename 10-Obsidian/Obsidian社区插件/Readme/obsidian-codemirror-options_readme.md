---
uid: 20230803203644
title: Obsidian 插件：【Readme】CodeMirror Options
tags: ['样式工具', 'obsidian插件', 'readme']
description: 增强 Obsidian 的桌面编辑模式，添加诸如 WYSIWYG/实时预览、语法高亮等功能。
author: nothingislost
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：CodeMirror Options

> [!Note] 插件名片
> - 插件名称：CodeMirror Options
> - 插件作者：nothingislost
> - 插件说明：增强 Obsidian 的桌面编辑模式，添加诸如 WYSIWYG/实时预览、语法高亮等功能。
> - 插件分类：['样式工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/nothingislost/obsidian-codemirror-options)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-codemirror-options)

## 概述

增强 Obsidian 的桌面编辑模式，添加诸如 WYSIWYG/实时预览、语法高亮等功能。

![CodeMirror Options](https://cdn.pkmer.cn/covers/obsidian-codemirror-options_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nothingislost/obsidian-codemirror-options/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-codemirror-options]] 插件的自述翻译


# Obsidian CodeMirror选项

CodeMirror选项插件通过添加以下功能来改善Obsidian桌面编辑器的体验：

- 所见即所得/实时预览的Markdown编辑体验
- 在编辑模式下对某些代码块进行实时渲染
- 实时渲染内联HTML
- 将反向链接窗格直接嵌入文档页脚
- 实时渲染块和内联LaTeX
- 在编辑模式中增强的CSS选择器，类似于Contextual Typography插件对预览模式的作用
- 编辑和预览模式之间统一的语法高亮，完全支持主题定制
- 还有许多其他选项可自定义桌面编辑器的体验！

关于“实验性实时预览”模式的通知

Obsidian开发人员最近向内部人员发布了“实时预览”模式。这种新模式将桌面编辑器从CodeMirror 5升级到CodeMirror 6，并启用了CodeMirror Options插件提供的大部分实时渲染功能。

由于功能重叠和不同的CodeMirror版本，“CodeMirror Options”和“实时预览”不兼容。

一旦“实时预览”正式发布，我们将建议您使用该模式，而不是使用此插件提供的功能。

话虽如此，为了为希望继续使用传统桌面编辑器版本的用户提供一种形式的“实时预览”，我们将继续维护和增强此插件。

目前，继续使用传统编辑器的主要原因有：
- Vim模式目前仅支持CodeMirror 5
- 并非所有社区插件都支持CodeMirror 6，并需要时间进行完全迁移
- 并非所有主题都支持CodeMirror 6，并需要时间进行完全迁移

## 特点

### 所见即所得/实时预览编辑体验

- 大部分所见即所得功能是通过整合开源项目HyperMD的组件实现的。Obsidian默认只使用了HyperMD的一个子集，而这个插件则添加了许多缺失的HyperMD功能。
- 在某些情况下，这个插件的所见即所得功能可能会消耗较多的资源。如果您注意到性能问题，建议尝试关闭“代码渲染”部分下的设置，看看是否能改善情况。

#### Markdown解析

##### 隐藏Markdown标记

一旦离开标记元素，此功能将隐藏Markdown标记，从而在编辑模式下实现所见即所得/实时预览功能

目前，标记隐藏支持*强调*，**加粗**，~~删除线~~，==高亮==，`内联代码`

- [[列表中的内部链接]]
- ##### 列表中的标题
- [x] 复选框

此功能还根据活动行而不是活动元素隐藏某些标记。

###### 标题
表格：

| 左对齐 | 居中对齐 | 右对齐 |
|:------------ |:--------------:| -------------:|
| 左边         |     居中     |         右边 |
| 左边         |     居中     |         右边 |
| 左边         |     居中     |         右边 |

水平线（HR）
***

> 块引用
>  > 嵌套块引用

#### 代码渲染
![2021-10-22 13 11 32](https://user-images.githubusercontent.com/89109712/139353797-4e9bdd1c-52ea-417e-89a4-7311b04c0a55.gif)

##### HTML 渲染
- HTML 标签将通过 DOMPurify 进行处理，然后以内联方式进行渲染。您可以点击渲染的元素以查看和编辑 HTML 源代码。
- 该插件强制执行默认的 Obsidian DOMPurify 设置，并且应该渲染与预览模式本地支持的相同的 HTML 子集。

##### 代码渲染

###### 图表
- 使用Obsidian Charts插件在编辑模式下呈现图表块

###### 提示
- 使用Admonitions插件在编辑模式下呈现提示块

###### 数据视图
- 使用Admonitions插件在编辑模式下呈现数据视图块
- **限制**
  - 嵌入的查询结果仅在初始渲染时计算。它们不会像在预览模式下那样随时间更新。如果您想刷新查询，可以点击进入查询然后返回以强制刷新。

###### 嵌入式搜索查询
- 使用Dataview插件在编辑模式下呈现Dataview块
- **限制**
	- 嵌入式查询结果仅在初始渲染时计算。它们不会像在预览模式下那样随时间更新。如果您想刷新查询，可以点击进入查询然后退出以强制刷新。

###### 数学
![2021-10-24 13 45 26](https://user-images.githubusercontent.com/89109712/139353712-622d9f53-cb69-49dd-a24d-8d14071d497e.gif)
- 内联Mathjax渲染
  - 在$ $或$$ $$内的Mathjax现在可以直接在编辑模式下渲染。点击渲染的元素以进行编辑
  - 渲染由内置的Obsidian Mathjax渲染器完成，并具有相同的功能和设置
- Mathjax预览
  - 在编辑Mathjax元素时，会出现一个可拖动的预览模态框，显示渲染后的Mathjax的样式。

###### 横幅
- 在编辑模式下以与横幅插件在预览模式下渲染它们相同的方式渲染横幅。

#### 视觉风格化

### 容器属性
- 此选项将数据属性应用于所有描述行内子元素的CodeMirror行div
- 将其视为编辑模式下的上下文排版
- 此选项当前将以下属性应用于每个CodeMirror行
  - [data-tag-name="<html_element_type>"]
    - 当前支持的HTML标签：ol、ul、h1-h6、code、frontmatter
  - [data-heading="<the_full_text_of_any_heading_found>"]
  - [data-hashtags="<space_delimited_list_of_all_tags_found>"]

#### 前置CSS
此功能将解析前置变量并将其添加到`div.view-content`中作为CSS变量和数据属性。

这使您可以将前置变量用作选择器或值，如下面的代码片段所示。

```yaml
---
custom-font-size: 1em
text-color: pink
tags: [codemirror, plugin, demo]
---
```

```css
div[data-tags*="demo"] .CodeMirror-line,
div[data-tags*="demo"] p {
  font-size: var(--custom-font-size);
}
```

由于变量和属性应用于`div.view-content`，因此您可以使用它们来为编辑和预览模式设置样式。

在CSS中使用变量之前，必须在插件设置页面中注册它们。这是为了防止将前置内容中的所有内容污染DOM。

### 内联图片
这个功能在编辑模式下添加了对内联图片的支持，类似于Ozan的Image in Editor插件。与这个实现的主要区别是它以内联方式呈现图像，并隐藏源文本。当点击图像时，图像将折叠回其源文本。

这个实现还允许在同一行上使用多个图像，并支持Obsidian的图像大小语法。

### 模板语法支持
OpenMD与Templater的内置语法高亮功能不兼容。为了解决这个问题，OpenMD现在原生支持Templater语法。

您需要确保禁用Templater的原生语法高亮选项，以避免任何冲突。

可以使用样式设置来更改或自定义语法高亮主题。

### 列表中的标题
Markdown语法支持在列表项中使用标题，但默认的编辑模式解析器不会渲染它们。

- # h1
	- ## h2
		- ### h3
			- #### h4
				- ##### h5
					- ###### h6

### 表格改进

#### 单列支持

默认的Obsidian Markdown解析器在编辑模式下不支持格式化单列表格。现在，OpenMD已经添加了对此的支持。

| 单列支持 |
|:-------:|
|   行    |

#### 自动对齐表格

此功能类似于高级表格插件，可以在您输入时自动对齐表格。主要区别在于，此设置将在您输入时自动对齐，而高级表格将在按下制表符/回车键时重新格式化。

此设置可以与高级表格很好地共存，建议同时使用两者，因为高级表格还添加了其他功能，如制表符/回车键处理和许多其他有用的表格功能。

## 设置

### 动态光标大小

<img src="https://user-images.githubusercontent.com/89109712/132953850-c2b4b791-9a7a-47fa-845f-62d72208c2e4.gif" width=50% height=50%>

启用时，光标的高度将由整行的最大高度确定。禁用时，光标的高度基于相邻参考字符的高度。

### 保留选中行的活动状态

<img src="https://user-images.githubusercontent.com/89109712/132953861-07d4c5ed-3e81-4a5c-b630-88bcb4168697.gif" width=50% height=50%>

启用此选项后，文本选择不会移除当前行的 .active-line 类。禁用此选项后，在活动行上进行文本选择将会移除 .active-line 类。

### 使用CSS类标记所选文本

<img src="https://user-images.githubusercontent.com/89109712/132953864-82bab013-ed55-4226-a8e7-738fb387155e.gif" width=50% height=50%>

启用后，所选文本将使用CSS类.CodeMirror-selectedtext进行标记。这将替换默认的CodeMirror选择功能，该功能通过在文本后面绘制一个背景层来模拟选择。这个新选项提供了更多的样式灵活性，并避免了选择具有定义背景的项目时出现的问题。

在预览模式下使用CodeMirror进行语法高亮显示。

通过在编辑和预览模式下都使用CodeMirror进行高亮显示，可以创建一致的高亮显示效果。注意：此设置需要“Editor Syntax Highlight”插件才能正常工作。

### 回退选项：统一默认的prism.js代码块样式

如果您不想将CM注入预览模式中，可以使用此设置作为回退选项。它将尝试尽可能地统一prism.js的颜色，以与CodeMirror主题匹配。

## 语法高亮

<img src="https://user-images.githubusercontent.com/89109712/132953836-bac79ab0-581c-469b-a971-6c2dcde2773f.gif" width=70% height=70%>

启用此插件后，将在编辑和预览模式下对代码块应用一致的语法高亮主题。

默认情况下，该插件将"Material: Palenight"主题应用于明亮和暗黑模式。

如果您想自定义语法高亮主题，请安装Style Settings并在Style Settings插件选项中的CodeMirror Options部分进行探索。

该插件目前包含4个主题选项：

- Solarized Light
- Material Palenight
- Dracula
- Custom

使用自定义主题时，您可以自定义任何可用的语法高亮颜色。您还可以使用自定义主题选项使用Style Settings导入自己的主题。

以下是导入Dracula主题仅用于暗黑模式的示例：

```json
{
"CodeMirror Options@@cm-background@@dark": "#282a36",
"CodeMirror Options@@cm-foreground@@dark": "#f8f8f2",
"CodeMirror Options@@cm-comment@@dark": "#6272a4",
"CodeMirror Options@@cm-string@@dark": "#f1fa8c",
"CodeMirror Options@@cm-string-2@@dark": "#f1fa8c",
"CodeMirror Options@@cm-number@@dark": "#bd93f9",
"CodeMirror Options@@cm-variable@@dark": "#50fa7b",
"CodeMirror Options@@cm-variable-2@@dark": "#ffffff",
"CodeMirror Options@@cm-def@@dark": "#50fa7b",
"CodeMirror Options@@cm-operator@@dark": "#ff79c6",
"CodeMirror Options@@cm-keyword@@dark": "#ff79c6",
"CodeMirror Options@@cm-atom@@dark": "#bd93f9",
"CodeMirror Options@@cm-meta@@dark": "#f8f8f2",
"CodeMirror Options@@cm-tag@@dark": "#ff79c6",
"CodeMirror Options@@cm-attribute@@dark": "#50fa7b",
"CodeMirror Options@@cm-qualifier@@dark": "#50fa7b",
"CodeMirror Options@@cm-property@@dark": "#66d9ef",
"CodeMirror Options@@cm-builtin@@dark": "#50fa7b",
"CodeMirror Options@@cm-variable-3@@dark": "#ffb86c",
"CodeMirror Options@@cm-type@@dark": "#ffb86c",
"CodeMirror Options@@cm-activeline-background@@dark": "#414458",
"CodeMirror Options@@cm-matchingbracket@@dark": "#ffffff"
}
```

类似地，您可以使用@@light导入一个主题以供明亮模式使用：

```json
{
"CodeMirror Options@@cm-background@@light": "#282a36",
"CodeMirror Options@@cm-foreground@@light": "#f8f8f2",
"CodeMirror Options@@cm-comment@@light": "#6272a4",
"CodeMirror Options@@cm-string@@light": "#f1fa8c",
"CodeMirror Options@@cm-string-2@@light": "#f1fa8c",
"CodeMirror Options@@cm-number@@light": "#bd93f9",
"CodeMirror Options@@cm-variable@@light": "#50fa7b",
"CodeMirror Options@@cm-variable-2@@light": "#ffffff",
"CodeMirror Options@@cm-def@@light": "#50fa7b",
"CodeMirror Options@@cm-operator@@light": "#ff79c6",
"CodeMirror Options@@cm-keyword@@light": "#ff79c6",
"CodeMirror Options@@cm-atom@@light": "#bd93f9",
"CodeMirror Options@@cm-meta@@light": "#f8f8f2",
"CodeMirror Options@@cm-tag@@light": "#ff79c6",
"CodeMirror Options@@cm-attribute@@light": "#50fa7b",
"CodeMirror Options@@cm-qualifier@@light": "#50fa7b",
"CodeMirror Options@@cm-property@@light": "#66d9ef",
"CodeMirror Options@@cm-builtin@@light": "#50fa7b",
"CodeMirror Options@@cm-variable-3@@light": "#ffb86c",
"CodeMirror Options@@cm-type@@light": "#ffb86c",
"CodeMirror Options@@cm-activeline-background@@light": "#414458",
"CodeMirror Options@@cm-matchingbracket@@light": "#ffffff"
}
```

CSS属性与CodeMirror使用的标准属性非常相似。您可以在[这里](https://codemirror.net/theme/)找到更多主题颜色，并将其调整为上述导入格式。您可以在[这里](https://codemirror.net/demo/theme.html)测试查看主题颜色。

## 已知问题

- 此插件直接使用了已弃用的CM5 API。Obsidian将很快转移到CM6，这将导致此插件无法使用。我还不确定是否能在CM6上进行相同的调整。
- 如果启用了Templater插件的“语法高亮”功能，此插件的多个方面将会出现问题。建议禁用Templater的“语法高亮”功能，并在CodeMirror选项中启用“OpenMD Mode”，以支持Templater语法。

## 安装

### Obsidian社区插件浏览器

通过在Obsidian应用程序中导航到设置->社区插件->浏览，可以直接使用此插件。

### Beta安装
偶尔，在正式发布之前，会提供预发布版本供测试。可以使用[Obsidian42 BRAT](https://github.com/TfTHacker/obsidian42-brat)插件来安装这些版本。

要安装预发布版本，请下载并启用BRAT插件，添加beta存储库`nothingislost/obsidian-codemirror-options`，然后让BRAT检查更新。

### 手动安装
要进行手动安装：
1. 从[最新的Github发布](https://github.com/nothingislost/obsidian-codemirror-options/releases/latest)中下载最新的`zip`文件。
2. 将文件解压缩到您的vault的`.plugins/obsidian-codemirror-options`子目录中。
3. 重新加载Obsidian。
4. 进入设置 > 第三方插件，并激活obsidian-codemirror-options。

详细信息请参见[论坛](https://forum.obsidian.md/t/plugins-mini-faq/7737)。

## 更新日志

### 0.9.5
- 更好地支持检测新的实时预览模式

### 0.9.4
- 修复了一个导致行内数学公式以块状数学公式样式呈现的错误。

### 0.9.3
- @aidenlx修复了一些边缘情况，其中表情符号未被检测和渲染。

### 0.9.2
- 当编辑器的后向小部件高度超过一定长度时，您将无法再点击元素。这个问题已经解决。

### 0.9.1
- 修复了语法高亮逻辑的问题
  - 插件现在在查找"java"、"bash"和其他语言时应该更可靠
- 修复了损坏的语法高亮样式

### 0.9.0

- @aidenlx通过@aidenlx的[Icon Shortcodes](https://github.com/aidenlx/obsidian-icon-shortcodes)插件，增加了在编辑模式下渲染图标短代码的功能
- 当启用实时预览时，重新启用了语法高亮功能
- 添加了一个新的样式设置选项，以在编辑模式下启用最小化页面和标题嵌入
- 移除了内联块引用嵌入的边框
- 更新了tsconfig以目标ES6

### 0.8.4

- 添加了逻辑，如果启用了新的实时预览模式，则不加载插件

### 0.8.1-0.8.3

- 修复了内联块嵌入相关的样式问题
  - 现在，嵌入的列表项块引用应该能够正常工作
  - 调整以确保`<EMBED>`图标始终可点击
- 当展开列表或标题时，渲染的小部件现在能够正确渲染
- 修复了嵌入PDF的显示问题
- 修复了嵌入和HTML时偶尔出现的行小部件重复问题
- 更新了内联块引用的鼠标悬停标签，以显示引用的文件名
- 修复了内联块引用的点击处理程序，使其覆盖整个块引用的长度

### 0.8.0

# 闪亮的新功能
- 增加了在编辑模式下渲染嵌入内容的功能。
	- 支持页面、标题和块引用
	- 嵌入内容可以内联引用或作为专用的行块引用
	- 嵌入内容使用生成预览模式嵌入内容的相同渲染器进行渲染。这意味着所有插件都可以直接使用，并且在嵌入时会正确渲染。

# 已知问题
- 大纲插件列表样式可能会导致`<EMBED>`按钮被截断，因为在列表上设置了`overflow: none`
- 在罕见情况下，嵌入式小部件可能会渲染两次
- 编辑引用以指向新页面时，有时旧引用内容可能不会被清除

### 0.7.0

# 闪亮的新功能

- 在编辑模式底部显示反向链接
- 在编辑模式下呈现任务（来自任务插件）

# 改进

- 编辑模式下的渲染代码块现在具有适当的生命周期管理
  - 这意味着渲染的代码块现在可以实时更新，无需点击进入块并重新渲染
- 编辑模式下的警告现在可以正确地渲染嵌套的代码块
  - 这意味着您可以在警告中渲染诸如任务或图表等内容

### 0.6.0

# 光鲜亮丽的新功能

- 在编辑模式下渲染横幅
  - 此选项将以与横幅插件在预览模式下渲染相同的方式在编辑模式下渲染横幅
  - 新增了两个前置属性，但目前只在编辑模式下生效
    - banner-height: [measurement]
    - banner-style: [gradient|solid]

- 将前置属性变量用作CSS选择器或CSS变量
  - 容器属性功能现在将解析前置属性变量，并将它们作为CSS变量和数据属性添加到`div.view-content`中
  - 这使您可以将前置属性变量用作选择器或值
  - 由于变量和属性应用于`div.view-content`，因此您可以将它们用于编辑和预览模式的样式设置
  - 在可以在CSS中使用变量之前，必须在插件设置页面中注册变量
    - 这是为了防止将前置属性中的所有内容污染DOM
  - 值看起来像文件路径的前置属性变量将转换为完整的`app://...`路径，以便可以在CSS中引用这些文件
    - 这对于将本地存储的图像设置为页面上某个元素的背景图像非常有用

# 改进

- 允许在渲染的Dataview和嵌入式搜索小部件上进行更长时间的渲染
  - 这应该有助于避免在初始应用程序加载时出现任何渲染问题
- 对渲染的代码块和HTML的用户体验进行了一般改进
  - 当光标放置在渲染的块元素旁边或选择触及它们时，渲染的块元素不再会打开
  - 重新设计和重新定位了`<CODE>`和`<HTML>`按钮
- 当活动表达式被删除时，数学预览现在会正确关闭

### 0.5.3

- 修复了一个导致小部件高度计算不正确的回归问题，从而导致光标放置问题。

### 0.5.2

- 对数学格式和布局进行了额外修复
- 更新了`<HTML>`和`<CODE>`按钮的行为，使其不那么显眼
- 修复了某些情况下渲染的HTML元素重复出现的错误
- 当删除活动表达式时，数学预览现在会正确关闭
- 支持在markdown图像`[100]()`中调整图像大小
- 允许在普通HTTP://协议下渲染图像
- 当将光标移动到或靠近HTML和Code块时，它们将不再折叠
  - 唯一打破HTML或Code块的方法是点击`<HTML>`或`<CODE>`按钮

### 0.5.1

- 添加了一个选项，可以不对渲染的编辑模式复选框进行样式设置
- 为编辑模式复选框添加了一个新的数据属性 `data-task`，其中包含任务 `[ ]` 括号内的字符
  - `<span class="cm-formatting cm-formatting-task cm-property hmd-hidden-token" data-task="?">[?]</span>`

- 修复了一个导致 Mathjax 无法作为块级元素渲染的 bug
- 修复了一个导致数学公式样式不正确的 bug

### 0.5.0

# 闪亮的新功能
- 内联Mathjax渲染
  - `$ $`或`$$ $$`中的Mathjax现在可以在编辑模式下直接渲染。单击渲染的元素以进行编辑
  - 渲染由内置的Obsidian Mathjax渲染器完成，并具有所有相同的功能和设置
- Mathjax预览
  - 在编辑Mathjax元素时，将出现一个可拖动的预览模态框，显示渲染后的Mathjax的样式。

# Bug修复
- 修复了一个问题，该问题导致当前文件路径无法传递给编辑模式渲染的Dataview块
  - 这导致了像`dv.current()`这样的调用无法正常工作

### 0.4.2

- 在编辑器上下文菜单中添加了“复制图像到剪贴板”选项，当点击内联渲染的图像时触发。这只会在IMG具有“hmd-image”类时触发，该类默认设置在所有内联渲染的图像上。
  - “复制图像到剪贴板”选项也会显示在渲染代码块内显示的任何图像上
  - “复制图像到剪贴板”支持内部和外部图像

### 0.4.1

- 修复了一个导致自定义视图（如看板）无法加载文件的错误

### 0.4.0

# 闪亮的新功能
- HTML 渲染
  - HTML 标签将通过 DOMPurify 进行处理，然后以内联方式呈现。您可以点击渲染的元素以查看和编辑 HTML 源代码。
  - 以行首的 HTML 标签将被视为完整的行块。
  - 内联放置的 HTML 标签将被视为内联块。
- 代码渲染
  - 图表
    - 使用 Obisidian Charts 插件在编辑模式下呈现图表块。
  - 提示
    - 使用 Admonitions 插件在编辑模式下呈现提示块。
  - 数据视图
    - 使用 Admonitions 插件在编辑模式下呈现数据视图块。
    - 限制
      - 渲染的数据视图内容仅在初始渲染时计算。它们不会像在预览模式下那样定期更新。如果您想刷新视图，可以点击查询并返回以强制刷新。
  - 嵌入式搜索查询
    - 限制
      - 嵌入的查询结果仅在初始渲染时计算。它们不会像在预览模式下那样随时间更新。如果您想刷新查询，可以点击查询并返回以强制刷新。

# 改进
- 为Collapse External Links功能添加了`.cm-collapse-external-links` body类
- 修复了OpenMD模式中过于激进的行内latex正则表达式

# 已知问题
- 如果启用了Templater插件的“语法高亮”功能，该插件的多个方面将会出现问题。建议禁用Templater的“语法高亮”功能，并在CodeMirror选项中启用“OpenMD Mode”，以支持Templater语法。
- 一些主题以一种改变z-index的方式，导致“<CODE>”按钮小部件无法显示在渲染元素的顶部。主题设计者需要解决这个问题，但在此期间，您可以通过在元素中创建一个选择来强制显示代码。

### 0.3.1

- 进一步改进了折叠外部链接和内联渲染图像的性能
- 修复了一个导致图像在初始插入文档时无法渲染的错误

### 0.3.0

#### 闪亮的新功能
- OpenMD
	- 添加了单列表格支持
	- 添加了原生模板语法支持
	- 添加了列表中的标题支持
- 添加了自动对齐表格功能
- 添加了内联渲染图像功能

#### 改进
- 从Token List选项中移除"task"将正确地移除CSS样式的复选框
- Token List设置现在允许文本选择
	- 这样可以复制/粘贴默认的token列表
- 修复了与折叠外部链接和内联渲染图像相关的性能问题
	- 这些设置做了比需要更多的工作，导致在处理大型文档时出现明显的延迟。此外，关闭这些设置时未能正确卸载CodeMirror事件处理程序。
	- 由于性能调整可能不稳定，如果注意到延迟，请禁用这两个选项并查看是否有所改善。

#### 已知问题
- 选择内联图片可能导致选择清除后图片无法渲染。目前，只需在编辑器中进行任何更改即可解决此问题。

### 0.2.1

- 修复了与0.2.0版本相关的错误

### 0.2.0

- 这是一个重大更新，添加/更改了很多内容
- **更新：**隐藏Markdown标记
  - 进一步稳定性改进
    - 由于这种隐藏方法会破坏光标位置，因此在编辑模式中删除了所有使用`display: none`的用法
    - 所有标记的隐藏应该使用`font-family: monospace;font-size: 1px !important; letter-spacing: -1ch;color: transparent;`
    - 如果您的主题或CSS片段在CodeMirror块内部的元素上使用了`display:none`，建议禁用这些样式，改用此插件提供的标记隐藏功能。
  - 添加了逐个启用/禁用每个标记类型的功能
  - 添加了对其他标记类型的隐藏支持
    - 高亮/标记
    - 内部链接URL和引用
- **新功能：**容器属性
  - 此新选项将数据属性应用于描述行内包含的子元素的所有CodeMirror行div
  - 将其视为编辑模式的上下文排版
  - 此选项当前将以下属性应用于每个CodeMirror行
    - [data-tag-name="<html_element_type>"]
      - 当前支持的HTML标签：ol、ul、h1-h6、code、frontmatter
    - [data-heading="<the_full_text_of_any_heading_found>"]
    - [data-hashtags="<space_delimited_list_of_all_tags_found>"]
- **新功能：**OpenMD模式
  - 此新选项使用修改后的版本替换Obsidian的HyperMD模式，以启用新功能
  - 新模式是从[官方HyperMD模式](https://github.com/laobubu/HyperMD/blob/master/src/mode/hypermd.ts)分叉出来的，并尝试复制任何Obsidian特定的自定义
  - **警告：**与默认的Obsidian模式相比，此新模式可能缺少功能或在解析行为上有差异。如果遇到任何退步或错误，请提出问题。
  - 此模式提供的新功能：
    - 增强了对内部链接的解析，将文件名、引用和别名分成不同的span。这样，在使用“隐藏Markdown标记”功能时，可以正确隐藏内部链接标记
    - 修复了包含下划线的标签的处理方式
- **新功能：**折叠外部链接
  - 此功能将外部链接（在编辑模式中）折叠起来，只显示链接名称。单击链接时，完整的链接文本将展开。
- **更新：**编辑模式点击处理程序
  - 此选项已更新，当按下修饰键时，将一个类添加到div.cm-s-obsidian元素
    - 当前支持ctrl（.HyperMD-with-ctrl）、alt（.HyperMD-with-alt）、meta（.HyperMD-with-meta）
    - 此功能允许您应用条件CSS，例如在悬停链接时将光标更改为指针，同时按下ctrl/cmd键
- **新功能：**设置光标闪烁速率

### 0.1.4

- 修复了一个bug，当打开文件时，会随机出现“无法读取未定义的属性'length'”的错误
- 更改了代码块复制按钮的处理方式，以适应新的默认Obsidian复制按钮
- 修复了一个bug，使CodeMirror选项适用于所有打开的窗格
- 修复了一个bug，有时在预览模式下无法应用语法高亮
- 将高亮标记（==）添加到“隐藏标记”功能的标记列表中
- 稳定隐藏Markdown标记
  - 光标放置逻辑已被替换为一种希望更稳定的方法，可以防止点击时滚动位置上下跳动
  - 我所知道的唯一未解决的光标bug是将光标放置在折叠行的折叠小部件右侧时发生的情况

### 0.1.3

- 将复制按钮移动到右上角并减小尺寸
- 从复制的文本中删除尾部换行符
- 在预览中添加选项，以在所有预格式化块中包含复制按钮

### 0.1.2

- 对语法高亮逻辑进行了更多的错误修复

### 0.1.1

- 修复了行号和复制按钮处理的错误
- 添加了对 `js`、`html` 和 `json` 的高亮支持

### 0.1.0

- 在预览模式下添加显示行号的选项
- 在预览模式下为代码块添加复制按钮
- 修复代码块的默认字体大小为16px。可以使用样式设置进行覆盖
- 在预览模式下，将代码块包裹在`<code>`元素中，以更好地模拟原始的prism.js DOM结构。
  - 现在的结构是`<div><pre><code></code></pre></div>`
  - 这个改变对大多数用例来说应该是透明的。

### 0.0.8

- 这是0.0.7预发布中引入的功能的稳定版本。
- 此版本添加了两个HyperMD功能
  - 隐藏Markdown语法
  - 处理复选框的点击事件
- 为Obsidian Plaintext和CodeView等插件添加了语法高亮支持。

### 0.0.7（预发布版）

- 此版本添加了两个 HyperMD 功能
  1. 隐藏 Markdown 语法
  2. 处理复选框的点击事件

### 0.0.6

- 更改了用于标记多行的.active-line的方法，这应该解决了一些错误
- 之前，当选择了8行后，.active-line会开始表现奇怪
- 之前的方法也不高效，并且经常应用.active-lines类
- 之前，“样式活动选择”和“标记活动行”设置太混在一起。现在，您可以单独设置每个功能的开启或关闭，而不会相互影响。

### 0.0.5

- 修复了“样式活动选择”选项中的一个错误，该错误导致文件加载时出现未定义的变量错误

### 0.0.4

- 更新了“保留选定行处于活动状态”功能，以支持多光标选择

### 0.0.3

- 更新了“保留选定行处于活动状态”功能，以支持多行选择

### 0.0.2

- 代码清理
- 添加了语法高亮选项

### 0.0.1

- 初始版本
  - 启用以下切换选项：
    - 动态光标大小
    - 保留选中行的活动状态
    - 使用CSS类标记选中的文本



