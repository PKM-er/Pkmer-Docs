---
uid: 20230804233102
title: Prsim 主题：使用说明详解
tags: [Obsidian, 主题, prsim, 使用说明]
description: Prsim 主题：使用说明详解
author: 宝藏彬少
type: other
draft: false
editable: false
modified: 20230809092846
---

# Prsim 主题：使用说明详解

## 👋 WIKI 内容搬运及翻译

### 📜 标注自定义 (Callout Customisation)

#### CSS 代码段示例 (CSS Snippet Example)

要在 Prism 中自定义标注颜色，您需要创建 CSS 代码段。下面是一个用于此目的的模板：

```css
.prism-theme:not(.pt-disable-callout-styling) .callout[data-callout="note"] .callout-title {
   color: var(--color-grey-text);
   background-color: var(--color-grey-base);
   border-color: var(--color-grey-tint);
}

.prism-theme:not(.pt-disable-callout-styling) .callout[data-callout="note"] .callout-title .callout-icon .svg-icon {
   color: var(--color-grey-text);
}

.prism-theme:not(.pt-disable-callout-styling) .callout[data-callout="note"] .callout-content {
   background-color: hsla(var(--color-grey-base-hsl), var(--callout-background-alpha));
   border-color: var(--color-grey-tint);
}
```

您也可以在一开始添加 `.theme-light` or `.theme-dark` （没有空格; 如果您想分别自定义浅色和深色主题，则恰到好处 `.prism-theme` 。

#### 可用的预设颜色选项 (Available Preset Colour Options)

使用的每个变量 `var()` 都有以下颜色选项：==red== / ==orange== / ==yellow== / ==green== / ==mint== / ==cyan== / ==blue== / ==purple== / ==pink== / ==grey==

例如，您可以将此变量 `var(--color-grey-tint)` 更改为 `var(--color-red-tint)` 。

- 请注意，颜色名称必须全部小写！
- 使用预设颜色的好处是它们都适应可用的不同配色方案，并且始终看起来正确！
- 如果您仍然想进一步自定义颜色，您可以使用自己的颜色！只需 `var()` 将其替换为任何当前支持的 CSS 颜色模型（例如 RGB、RGBA、HSL、HSLA、HEX 等）。

#### 定位要自定义的标注 (Targeting the Callout to Customise)

您可以定位任何官方宣传信息选项：

- **默认使用红色 (red)：**
	- **失败**：`failure` ，别名 `fail` `missing`
	- **危险**：`danger`，别名 `error` 
- **默认使用橙色 (orange)：**
	- **警告**：`warning`，别名 `caution` `attention`
- **默认使用黄色 (yellow)**：
	- **问题**：`question` ，别名 `help` `faq` 
- **默认使用绿色 (green)：**
	- **成功**：`success`，别名 `check`  `done`
- **默认使用薄荷 (mint)：**
	- **提示**：`tip`，别名 `hint` `important` 
- **默认使用青色（cyan）**
	- **摘要**：`abstract`，别名 `summary` `tldr` 
- **默认使用蓝色 (blue)：**
	- **信息**：`info`
	- **待办事项**：`todo` 
- **默认使用紫色 (purple)：**
	- **示例**：`example`
- **默认使用粉色 (pink)：**
	- **错误**：`bug`
- **默认使用灰色 (grey)：**
	- **笔记**：`note`
	- **引文**：`quote`，别名 `cite`

或者您可以创建自己的！

要定位上述选项之一或自定义选项，请将上述 CSS 代码段示例中的部分更改为 `.callout[data-callout="note"]` 其他标注类型。

例如： `.callout[data-callout="important"]` `.callout[data-callout="bug"]` 

#### 更改标注图标 (Changing the Callout Icon)

要自定义标注使用的图标，您可以将以下代码段与您选择的图标名称一起使用。

可用图标列表可在此处找到：<https://lucide.dev/>

只需替换为 `flower` 您要使用的图标下方显示的名称即可。

```CSS
.callout[data-callout="note"] {
   --callout-icon: flower;
}
```

请注意，您必须重新打开文件才能看到图标更新！

#### 自定义标注示例 (Example of a Custom Callout)

下面是如何设置名为 `nature` 的自定义标注样式的示例。将以下内容添加到 CSS 代码段中并启用它。

```CSS
.prism-theme .callout[data-callout="nature"] .callout-title {
   color: var(--color-green-text);
   background-color: var(--color-green-base);
   border-color: var(--color-green-tint);
}

.prism-theme .callout[data-callout="nature"] .callout-title .callout-icon .svg-icon {
   color: var(--color-green-text);
}

.prism-theme .callout[data-callout="nature"] .callout-content {
   background-color: hsla(var(--color-green-base-hsl), var(--callout-background-alpha));
   border-color: var(--color-green-tint);
}

.callout[data-callout="nature"] {
   --callout-icon: trees;
   --callout-color: 0, 255, 0; /* Default colour customisation option used by Obsidian for Callouts. Comma separated RGB values is the format used. Keep this as a fallback when switching to another theme. */  
}
```

使用以下 Markdown 启动自定义标注：

```md
[!nature]-
This is a custom callout
```

这应该是结果：

![自定义callout显示效果](https://user-images.githubusercontent.com/7290097/201960062-d8ed30b1-e6d1-40af-ac37-63f25de5e888.png)

### 🎨 创建自定义配色方案 CSS 代码段 (Creating a Custom Colour Scheme CSS Snippet )

#### 如何启用此功能？(How do I enable this feature?)

从 Prism 3.2.1 更新开始，现在有一个选项可以在样式设置的配色方案属性中选择该选项，`Custom` 该选项不会加载任何本机颜色变量，允许您使用 CSS 代码段提供自己的颜色变量。要创建 CSS 代码段，请遵循有关它的官方黑曜石帮助页面：[LINK](https://help.obsidian.md/Extending+Obsidian/CSS+snippets)

可以在设置中选择 `Style Settings -Prism Theme -Appearance -Accent, Color Schemes and Style -Light / Dark Theme -Color Scheme` 该选项。

#### 创建您自己的配色方案 (Creating your own Colour Schemes)

在 CSS 代码段中使用以下选择器开始自定义变量：

```CSS
.prism-theme.theme-light.pt-color-scheme-custom-lt {
 /* Your customised variables here */
}

.prism-theme.theme-dark.pt-color-scheme-custom-dt {
 /* Your customised variables here */
}
```

原生配色方案和当前可用变量的示例可在此处找到：

[Bird Colour Scheme - Swan / Raven  鸟类配色方案 - 天鹅/乌鸦](https://github.com/damiankorcz/Prism-Theme/blob/main/src/scss/Color%20Schemes/colorSchemeBird.scss)

[Coffee Colour Scheme - Latte / Mocha  咖啡配色方案 - 拿铁/摩卡](https://github.com/damiankorcz/Prism-Theme/blob/main/src/scss/Color%20Schemes/colorSchemeCoffee.scss)

[Flower Colour Scheme - Periwinkle / Indigo  花卉配色方案 - 长春花/靛蓝](https://github.com/damiankorcz/Prism-Theme/blob/main/src/scss/Color%20Schemes/colorSchemeFlower.scss)

[Tree Colour Scheme - Pistachio / Pine  树木配色方案 - 开心果/松树](https://github.com/damiankorcz/Prism-Theme/blob/main/src/scss/Color%20Schemes/colorSchemeTree.scss)

[Fruit Colour Scheme - Peach / Cherry  水果配色方案 - 桃子/樱桃](https://github.com/damiankorcz/Prism-Theme/blob/main/src/scss/Color%20Schemes/colorSchemeFruit.scss)

**注意：** 您必须为自定义 CSS 代码段提供原生配色方案中列出的所有变量，因为未提供所选 `Custom` 选项。请密切注意上述文件中的注释，以了解变量的用途。

#### 进一步定制 (Further Customisation)

如果您想更深入地自定义围绕主题使用的颜色（和其他变量），您可以查看下面的文件，看看我覆盖了哪些本机变量以及我在主题周围使用了哪些自定义变量：

[Core Prism Variables 核心棱镜变量](https://github.com/damiankorcz/Prism-Theme/blob/main/src/scss/Variables/coreVariables.scss)

您还可以在存储库及其文件中搜索特定变量，并查看它们的确切使用位置。这可以直接使用 Github 上的搜索选项完成，或者如果您下载存储库，则可以在您选择的文本编辑器中完成。

### 👁️ 对焦模式指南 (Focused Mode Guide)

#### 什么是聚焦模式？(What is the Focused Mode?)

在 Prism 3.3.0 中引入的聚焦模式是一个选项，它可以使 UI 元素变暗，让您的笔记成为聚光灯下。添加此选项是为了帮助您专注于写作，尽量减少干扰。

<iframe border=0 frameborder=0 height=380 width=100% src="https://user-images.githubusercontent.com/7290097/246408925-35d8e328-24a1-4a87-a73e-dc30c85d7fda.mp4"</iframe

当您将鼠标悬停在 UI 元素上时，它将淡入并在设定的时间内保持这种状态。您可以在“Style Settings 样式设置”中自定义此间隔以及淡入淡出不透明度。还有一个选项可以选择对焦模式的应用位置：

- `Main Window Only`
- `Popout Windows Only`
- `Main and Popout Windows`

您可以在 中找到 `Style Settings -Prism Theme -Appearance -Focused Mode` 可用的选项。

#### 使用对焦模式 (Using Focused Mode)

对焦模式可以用热键打开/关闭！只需搜索 `Style Settings: Toggle Enable Focused Mode` in `Settings -Hotkeys Tab` 即可绑定它。您也可以在上面指定的位置的样式设置中手动 打开/关闭 它。

### 🤔 常见问题和注意事项 (Frequently Asked Questions and Notes)

#### 常见问题

##### 为什么原生强调色选项不起作用？(Why doesn't the native accent colour option do anything?)

以下选项不会更改棱镜中的强调文字颜色。

![](https://user-images.githubusercontent.com/7290097/201401064-3bc9226a-b5bc-447f-8118-699ca1613035.png)

要自定义主题色和样式，请导航到样式设置。这些选项在以下位置可用：

`Prism Theme -Appearance -Accent, Colour Schemes and Style -Light Theme or Dark Theme`

#### 笔记 (Notes)

您可以在代码段前面加上 `.prism-theme` （添加到 的 `<body` 虚拟类），以确保您只定位 Prism。如果您想保持代码段启用但经常更改主题，则非常方便。

### 🖍️ 标记高亮系统指南 (Mark Highlight System Guide )

#### 什么是标记突出显示系统？(What is the Mark Highlight System?)

Obsidian 没有原生突出显示选项（主要是因为保持符合 Markdown 标准）。因此，Prism 利用 HTML `<mark>` 标签来实现此功能，该标签一旦封装了文本，就可以对其进行样式设置。

#### 使用标记突出显示 (Using Mark Highlights)

以下示例展示了“标记突出显示”的简单用例，以红色突出显示一些文本：

```md
<mark class="red"This highlighted text is Red</mark
```

产生以下样式：

![mark样式举例01](https://user-images.githubusercontent.com/7290097/205725595-e152f3b1-6f31-48be-a289-dba33adaa6c1.png)

您可以更改以下任意颜色的 `red` 类：

- `grey` / `Grey`
- `red` / `Red`
- `orange` / `Orange`
- `yellow` / `Yellow`
- `green` / `Green`
- `mint` / `Mint`
- `cyan` / `Cyan`
- `blue` / `Blue`
- `purple` / `Purple`
- `pink` / `Pink` / `Pink`

在 `Prism Theme -Editor -Mark Highlight -Light Theme OR Dark Theme` 下的样式设置中，您可以自定义用于突出显示的默认样式。

每个选项的外观如下：

|Default 默认|Border 边界|Filled 填充|Border and Filled 边框和填充|
|:-:|:-:|:-:|:-:|
|![Mark Highlight using Default Style Option](https://user-images.githubusercontent.com/7290097/205716961-c7aaa159-8a58-4b39-b8f2-465411e2138a.png)|![Mark Highlight using Border Style Option](https://user-images.githubusercontent.com/7290097/205717104-1d377aea-8687-4137-bdbc-78ad2c8a9f77.png)|![Mark Highlight using Filled Style Option](https://user-images.githubusercontent.com/7290097/205717018-13f1cc2f-d387-434a-99c9-660562b97321.png)|![Mark Highlight using Border and Filled Style Option](https://user-images.githubusercontent.com/7290097/205717156-b5c56789-0714-4943-8c2e-adebdd8bdddd.png)|

您还可以找到禁用文本颜色的选项。使突出显示使用默认的编辑器文本颜色。

以下是再次对每个样式选项使用 `Default` 文本颜色预设选项时的外观：

|Default 默认|Border 边界|Filled 填充|Border and Filled 边框和填充|
|:-:|:-:|:-:|:-:|
|![Mark Highlight using Default Style Option and Default Text Color Preset](https://user-images.githubusercontent.com/7290097/205719547-f51081c6-b173-4a89-ac7c-2bd933925b12.png)|![Mark Highlight using Border Style Option and Default Text Color Preset](https://user-images.githubusercontent.com/7290097/205719562-bc6cdd52-b785-4d9f-924a-def5d97dd4b8.png)|![Mark Highlight using Filled Style Option and Default Color Text Color Preset](https://user-images.githubusercontent.com/7290097/205719586-643ac1d8-f81e-418f-91eb-66f73f05926d.png)|![Mark Highlight using Border and Filled Style Option and Default Text Color Preset](https://user-images.githubusercontent.com/7290097/205719598-ad087b6f-dc37-4991-9440-1447ce413f62.png)|

#### 覆盖默认样式 (Overwriting the Default styling)

我已经实现了覆盖类，您可以将其添加到标记突出显示中，以独立设置特定突出显示的样式，无论样式设置中的样式选项和文本颜色预设中的设置如何。这是一个例子：

```md
<mark class="mint mark-filled mark-text-color"This highlighted text is Mint</mark
```

产生以下样式：

<mark class="mint mark-filled mark-text-color"This highlighted text is Mint</mark

![mark样式举例02](https://user-images.githubusercontent.com/7290097/205724805-4869bf49-3a8b-4e66-8212-d284839fb206.png)

更改样式的可用选项：

- `mark-default`
- `mark-border`
- `mark-filled`
- `mark-borderandfilled`

用于更改文本颜色预设的可用选项：

- `mark-text-default`
- `mark-text-color`

#### 使用 UI 强调色作为标记突出显示 (# Using the UI Accent Colour for a Mark Highlight)

您可以通过不指定颜色类别来创建使用 UI 强调色的突出显示。

如果您想使用样式设置中设置的 UI 强调色和标记突出显示选项（不覆盖），您可以执行以下操作：

```md
<mark classThis highlighted text is using the UI Accent Colour and options set in Style Settings</mark
```

产生以下样式（使用绿色 UI 强调色、边框样式选项和样式设置中预设的默认文本颜色）：

![mark样式举例03](https://user-images.githubusercontent.com/7290097/205735752-55ebee6e-c057-4204-a983-4e66cb279e63.png)

以下是当 UI 强调色设置为红色并使用覆盖类时标记突出显示的示例：

```md
<mark class="mark-filled mark-text-default"This highlighted text is Accent</mark
```

产生以下样式：

![mark样式举例04](https://user-images.githubusercontent.com/7290097/205740924-aacdba4f-50d3-4fd4-b8e5-ccb607b6542d.png)

### 🧩 支持的插件 (Supported Plugins)

#### ❗️所需插件 (Required Plugin)

|**Plugin 插入**|**Description 描述**|
|---|---|
|[**Style Settings 风格设置**](https://github.com/mgmeyers/obsidian-style-settings)|允许片段、主题和插件 CSS 文件定义一组配置选项。|

#### 主题明确支持的插件 (Plugins explicitly supported by the theme)

这些插件已经过检查，可以正常工作，并针对主题设计了样式，帮助它们看起来很原生。有些可能在样式设置中有附加选项。

| **Plugin 插入**                                                                        | **Description 描述**                                             |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| [**Advanced Tables 高级表格**](https://github.com/tgrosinger/advanced-tables-obsidian)   | 向 Obsidian 中的 Markdown 表格添加改进的导航、格式设置和操作。                      |
| [**Kanban 看板**](https://github.com/mgmeyers/obsidian-kanban)                         | 在 Obsidian 中创建支持 Markdown 的看板。                                 |
| [**Quick Explorer 快速浏览器**](https://github.com/pjeby/quick-explorer)                  | 标题栏中基于菜单且键盘友好的资源管理器。                                           |
| [**Calendar 日历**](https://github.com/liamcain/obsidian-calendar-plugin)              | 创建一个简单的日历视图，用于在每日笔记之间进行可视化和导航。                                 |
| [**cMenu 菜单**](https://github.com/chetachiezikeuzor/cMenu-Plugin)                    | 添加一个最小且用户友好的文本编辑器模式，以获得更流畅的书写/编辑体验。                            |
| [**Dangling Links 悬空链接**](https://github.com/graydon/obsidian-dangling-links)        | 在侧面板中显示当前仓库中的一组悬空链接。                                           |
| [**Pane Relief 窗格浮雕**](https://github.com/pjeby/pane-relief)                         | A 将每个窗格的导航历史记录添加到 Obsidian.md。                                 |
| [**Icon Folder 图标文件夹**](https://github.com/FlorianWoelki/obsidian-icon-folder)       | 允许您向文件资源管理器中的文件或文件夹添加图标。                                       |
| [**Map View 地图视图**](https://github.com/esm7/obsidian-map-view)                       | Obsidian.md 编辑器的交互式地图视图。它会在您的笔记中搜索编码的地理位置（见下文），并将它们作为标记放置在地图上。 |
| [**Emoji Toolbar 表情符号工具栏**](https://github.com/oliveryh/obsidian-emoji-toolbar)      | 允许您快速搜索表情符号并将其添加到编辑器中。                                         |
| [**Tag Folder 标签文件夹**](https://github.com/vrtmrz/obsidian-tagfolder)                 | 像文件夹一样显示您的标签。                                                  |
| [**Obsidian Dictionary 黑曜石词典**](https://github.com/phibr0/obsidian-dictionary)       | 向 Obsidian 添加字典。                                               |
| [**Obsidian Icons 黑曜石图标**](https://github.com/visini/obsidian-icons-plugin)          | 将图标添加到您的黑曜石中。包括 Remix Icon 和 Font Awesome（免费）。                 |
| [**Jump To Date 跳转至日期**](https://github.com/TfTHacker/obsidian42-jump-to-date)       | 使用功能区中的弹出日历或使用以自然语言日期表达式键入的表单快速导航到每日笔记页面。                      |
| [**Hover Editor 悬停编辑器**](https://github.com/nothingislost/obsidian-hover-editor)     | 通过将悬停弹出窗口转变为功能齐全的编辑器实例，增强了核心“页面预览”插件。                          |
| [**Quiet Outline 安静的轮廓**](https://github.com/guopenghui/obsidian-quiet-outline)      | 具有限制树深度能力的替代大纲查看器。                                             |
| [**Recent Files 最近的文件**](https://github.com/tgrosinger/recent-files-obsidian)        | 在侧边栏中显示最近打开的文件的列表。 （可选）包括应从列表中排除的文件的路径。                        |
| [**File Tree Alternative 文件树替代方案**](https://github.com/ozntel/file-tree-alternative) | 具有独立文件夹和文件视图的替代文件资源管理器。                                        |
| [**Settings Search 设置搜索**](https://github.com/valentine195/obsidian-settings-search) | 添加黑曜石设置的全局搜索栏。                                                 |

### 📂 Vault 横幅图标自定义 (Vault Banner Icon Customisation)

#### 什么是仓库横幅图标？(What is the Vault Banner Icon?)

![](https://user-images.githubusercontent.com/7290097/201390811-2a68bc00-a71b-4ba8-8c35-feb968236f49.png)

默认情况下，Prism 启用了 Vault 横幅。这会将 Vault 名称转换为旁边带有图标的元素！这纯粹是一种美学上的改变，使您能够更改图标并向您的仓库添加额外的自定义功能。

#### 如何更改仓库横幅图标？(How to change the Vault Banner Icon?)

下面概述了两种方法来替换 Prism 中的 Vault 横幅图标。 [Icons8](https://icons8.com/icons/new) 是一个很好的图标来源。要替换图标，请执行以下操作：

- 1. 在 Icons8 上查找您喜欢的图标并单击它。
- 2. 然后单击“下载”按钮。
![](https://user-images.githubusercontent.com/7290097/201400274-3da4cd5e-318b-4834-93ae-7ead9579d8ea.png)

##### 选项 1 - 样式设置

您应该会看到以下窗口：

![图标8链接（CDN）示例](https://user-images.githubusercontent.com/7290097/201393361-7d781b0b-9dd6-4f5c-b9e7-621cd31cb465.png)

1. 选择格式。您可以将图标大小保留为默认设置，因为通常它看起来不错。`Link (CDN)`
2. 复制突出显示的 URL，而不复制其他任何内容。
3. 获取 URL 并导航到黑曜石仓库中的样式设置。
4. 更改库横幅图标的选项位于：`Prism Theme -Appearance -Custom Vault Banner -Custom Vault Banner (URL)`
5. 现在将 URL 粘贴到封装在: 例如 `url()``url(https://img.icons8.com/arcade/64/null/toolbox.png)`

##### 选项 2 - CSS 代码段（最适合脱机仓库）

第二个选项是改用 Base64 编码的图标。这可确保即使您的设备没有互联网连接，图标也将始终呈现，因为图标所需的所有数据都已存储。

您应该会看到以下窗口：

![图标8 Base64示例](https://user-images.githubusercontent.com/7290097/201399862-f6ec0009-560a-4fff-ac76-a324e01dc729.png)

1. 选择格式。您可以将图标大小保留为默认设置，因为通常它看起来不错。`Base64`
2. 选择介于两者之间的所有内容，包括引号。`""`
3. 由于与在样式设置中使用 Base64 编码不兼容，为了使用此选项，您需要创建以下简单的 CSS 代码段：

```css
body {
--custom-vault-banner-icon-url: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEJElEQVR4nO2bS28bVRTHf9cT2yWmjp0gmgQhAVFAbCiteFWqKrICCl3wAUBIFCo27aZRJT4C7JAKtOIlAcoHYMUqKUIFJBCglnRBKjUPWlrHj8SuH+N5sPA4LxLfO/aMx03mJ105c3PmzLn/uffMneMEQkJCQkJC9izCL8dfPHvpYcsWHwLHgJE23dwCLtmaOfnOLxNL3kW3ji8COIP/Axj0yGXW1syn/RAh4rVDAOfOezV4gKGIqX3gob81fBGAxrT3FBsmvPYJ0OeHU7as+ZO/HmtrqX32zA/2hsPhjiLaAb9mwD3DnhdAeWpOT54fjscHp6rVkSOGkYoj3K8ey7BZ+inv+jwVtL46iXS+khq9PW1Y5lvHvzydUTlPSYDL73/yUqV68DvTTkY7CbJaqHPnSrETF0r0pwr66OPXXn7x43PTMlupANOT54ct89CCaSej+1JRxk8cID2WwKpb/PbpPJWsrhxY5q8ilVxd2b4T+lMFfeSxWw9NXDy13MpOmgOi8cGp5uBfODvG8KEB4sk+7huK8eBTSeWAVhYqXRs8QLmQitUN/SuZnXQh67WRIwDjJw4Q7dfW+is5ncyV1ZbnWqaNXjQo/lPt6uCbFP4dle4dpAIY9VQcAemxxFrf92eusnTZn2TmJXfzA/0yG/lj0Mn28eS6VvfC4AHMekxqs+f3AaEAqoaWaW/63C0oCzA/k8UybOZnsn7G03WkGyH7+nv/v+UrM5sOP3/3Qksfb1885TIs7/yKw9dajjHMAUEHEDSeCJBI77wvaPU7v/yWyhaLt+vMLcrfUzwR4Ogb32wbUCKd5+ibX3fV73LB5GbGoFK1sSz5NTxJgr1CqWxxM2Ns6nvi9et7Jwnmi6brc9wLYBtym4Co6e43ae4FMP2v6LSLyprfinsBaovur9LDuBOgOg9GzqdQgkFe2rWNxrSvLe66wYOKAKs/diGM4NhVj8F2CAUIOoCgCQUIOoCgCQUIOgCvMNos1qoIUGrLcxcxTJs7uW3fBKWxq3zJPws85zYoVUpli0LRpKqrFTDcIAR/y2wUZoD41otgtqNZvSkrVm/cEtGYktpIvezXL4D9pycRbaBUtsituC9gqCIEs7YmPpLZSQUQ43M1NOM1r0Vop3qjihDMRuPmq+PH52oyW6WngDg4t8R+43kQp4GfgbudBtlO9aYVArsiBL9rkcg5EROHH33lxg1PLxASEhISErL76PQ/RmLAPiDutNiWn2PONSJA848M+5w+wfq7iAHYTmt+9WQCzQ1yDdCdVnU+a05rHreFGwGiwAPAEJAE7qcxwF6gTuPNbwXIAcsoiqIqwJPAI6zfxV7HAhaAqzLDXVMQ2QalvXY7S2AQGKD3lkARWAWyTvN0CeyEahLcmPA0GjNPlgQ39jUTYDPxeZYE/wMxwHA3N25UwgAAAABJRU5ErkJggg==");
}
```

1. 将括号之间的文本替换为为所选图标复制的文本。`url()`
2. 在仓库中保存并启用代码段。