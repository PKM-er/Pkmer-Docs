---
uid: 20231220112631
title: Obsidian 插件：HTML Reader
tags: ['obsidian插件', 'readme']
description: 这是一个Obsidian的HTML文件阅读器插件。可以打开.html和.htm文件扩展名的文档。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：HTML Reader

> [!Note] 插件名片
> - 插件名称：HTML Reader
> - 插件作者：Nuthrash
> - 插件说明：这是一个 Obsidian 的 HTML 文件阅读器插件。可以打开.html 和.htm 文件扩展名的文档。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nuthrash/obsidian-html-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-html-plugin)

## 概述

这是一个 Obsidian 的 HTML 文件阅读器插件。可以打开.html 和.htm 文件扩展名的文档。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nuthrash/obsidian-html-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-html-plugin]] 插件的自述翻译

# Obsidian HTML 阅读器插件

这是一个为 Obsidian（<<https://obsidian.md>）开发的插件。可以打开以> `.html` 和 `.htm` 文件扩展名结尾的文档。>

- [如何使用](#how-to-use)
- [从Obsidian安装此插件](#install-this-plugin-from-obsidian)
- [手动安装插件](#manually-installing-the-plugin)
- [HTML阅读器设置](#html-reader-settings)
  - [常规设置](#general-settings)
  - [快捷键和触摸手势设置](#hotkeys-and-touch-gestures-settings)
- [更多选项](#more-options)
- [如何从源代码构建此插件](#how-to-build-this-plugin-from-source-code)
- [已知问题](#known-issues)

## 如何使用

1. 将 .html 或 .htm 文件放入任何已安装 obsidian-html-plugin 的 vault 文件夹中
2. 单击任何 HTML 或 HTM 项目以打开它
3. 阅读

## 从 Obsidian 安装此插件

1. 转到⚙" 设置 " ⇨ " 社区插件 " 选项页面，确保 " 限制模式 " 已关闭。
2. 点击 `浏览` 按钮打开社区插件浏览对话框。
3. 搜索此插件 "**HTML Reader**" 并点击相应的结果项。
4. 点击 `安装` 按钮安装此插件。
5. 安装完成后，点击 `启用` 按钮启用此插件。
6. 或者，从 " 社区插件 " 选项页面的 " 已安装插件 " 列表中启用此插件 "**HTML Reader**"。

## 手动安装插件

1. 从 [发布列表](https://github.com/nuthrash/obsidian-html-plugin/releases) 中复制 `main.js` 和 `manifest.json` 文件到你的 Vault `<path>/<to>/<vaultFolder>/.obsidian/plugins/obsidian-html-plugin/` 目录下。
2. 重新启动 Obsidian。
3. 前往⚙" 设置 " ⇨ " 社区插件 " 选项页面，确保 " 限制模式 " 已关闭，并在 " 已安装插件 " 列表中启用这个插件 "**HTML Reader**"。

## HTML 阅读器设置

1. 前往⚙" 设置 " ⇨ " 社区插件 " 选项页面，找到 "**HTML 阅读器**" 项目的设置图标⚙，然后点击它。
2. 或者，在启用后，前往⚙" 设置 " ⇨ 在 " 社区插件 " 组的左侧面板底部点击 "**HTML 阅读器**" 项目。

![HtmlReadedSettings1.jpg](./assets/images/screenshots/HtmlReadedSettings1.jpg "HTML阅读器设置部分1")

### 通用设置

#### 操作模式

将此插件的操作模式设置为保护用户和应用程序。

##### 比较

|                          | 图像   | 样式    | 脚本编写              | DSD<sup>*</sup>  | CSP<sup>#</sup> | HTML 清理 | 隔离   |
|         ---:             | :---: | :---:   | :---:                 | :---:            | :---: | :---: | :---: |
| **文本模式**            | 否     | 否      | 否                    | 是              | 是 | 是 | 是 |
| **高限制模式** | 是<sup>[1]</sup> | 部分 | 否         | 是              | 是 | 是 | 是 |
| **平衡模式**         | 是    | 是     | 否                    | 是              | 是 | 是 | 是 |
| **低限制模式**  | 是    | 是     | 部分<sup>[2]</sup> | 是              | 否  | 否  | 是 |
| **无限制模式**    | 是    | 是     | 是<sup>[3]</sup>     | 是              | 否  | 否  | 是 |

*: [声明式 Shadow DOM](https://web.dev/declarative-shadow-dom/) <br />

#: [内容安全策略](https://en.wikipedia.org/wiki/Content_Security_Policy) <br />

[1]: 外部图像源将被 CSP 阻止。<br />

[2]: `<script>` 标签和外部脚本文件中的脚本代码仍无法执行。 <br />

[3]: 由于 Obsidian 的限制，外部脚本文件可能无法执行。 <br />

<details>
<summary><h5>详细解释</h5></summary>

1. **文本模式** - 强烈建议用于来自不受信任来源的文件！该模式几乎清除了所有的视觉效果、脚本代码和样式。同时，它保留了文本部分，以便使用 HTML 布局元素阅读 HTML 文件的内容。
2. **高限制模式** - 该模式适用于希望获得更高安全性的用户。它会保留自定义元素，但清除不安全的 HTML 元素以及不安全的属性及其内容。外部图像源将被 CSP 阻止，图像仅可从 HTML 文件本身中获取。
3. **平衡模式** - 该模式是此插件的默认模式。它会保留所有自定义元素和 HTML 元素，但清除不安全的属性及其内容。
4. **低限制模式** - 该模式不会清除任何内容，所有元素及其内容都将保留。`<script>` 标签内的脚本代码仍无法执行，外部脚本文件也无法执行。
5. **无限制模式** - 该模式非常危险，可能导致 Obsidian 应用崩溃，**OBSIDIAN 和此插件对切换到此模式不承担任何责任或责任** </ins>。它不会清除任何内容，所有元素及其内容都将保留。Obsidian 应用本身可能会进行一些调整。由于 Obsidian 的限制，外部脚本文件可能无法执行。强烈建议在正常使用情况下不要切换到此模式。

    如果切换到此模式后遇到问题，建议执行以下恢复步骤：

    - 返回到之前可以正常打开的文件。
    - <ins>删除或将打开错误的文件移动到回收站。否则，Obsidian 在重新启动后仍会打开它</ins>。
    - 返回到此设置页面，切换到另一个操作模式。

    有时您仍然无法看到想要的内容，那么您应该检查 HTML 文件的内容。此模式只是保留内容（仅<ins>调整外部链接锚标签，使其在默认浏览器窗口中打开</ins>），但文件可能具有一些自包含的安全保护机制（例如 CSP），它们会阻止某些内容以避免 XSS 攻击。如果您在 HTML 文件中找到类似 `<meta http-equiv="Content-Security-Policy" />` 的内容，这意味着该文件受到 CSP 机制的保护。您可以：

    - 手动修改或删除 CSP `<meta>` 标签。
    - 更改原始网页保存应用的捕获设置，以禁用 CSP 或其他设置，并重新保存网页。

</details>
<details>
<summary><h5>术语解释</h5></summary>

本节将尝试更详细地解释操作模式中使用的一些术语。您可以忽略一些非粗体字体的术语（它们是技术术语）。

1. **样式** - 指 HTML [CSS](https://en.wikipedia.org/wiki/CSS) 样式。它们几乎是安全的，但 CSS 注入或 CSS 键盘记录器可能会窃取一些信息，因此在 **平衡模式** 和 **高限制模式** 下，一些<ins>用户 [交互元素](https://html.spec.whatwg.org/multipage/interactive-elements.html) 将被禁用</ins>。
2. **脚本编写** - 指 [Javascript](https://en.wikipedia.org/wiki/Javascript) 和非常危险的。即使在 **低限制模式** 和 **无限制模式** 下，一些脚本代码也可以执行，但这并不意味着它们可以正常工作。脚本代码越复杂，它们正常工作的机会就越小。<ins>如果要使脚本代码按照您的意愿工作，您应该重写它们和相关模块，以满足 Obsidian 平台的要求</ins>，因为 Obsidian 平台与普通浏览器之间存在许多不同之处。
3. **DSD** - 指 [声明式 Shadow DOM](https://web.dev/declarative-shadow-dom/)。
4. **CSP** - 指 [内容安全策略](https://en.wikipedia.org/wiki/Content_Security_Policy)。它提供一些“绑定操作指令”，告诉 Obsidian 如何处理某些资源。它的规则与普通浏览器和网站使用的规则不同，`'self'` 设置对 Obsidian 来说几乎没有意义。
5. **HTML 清理** - 当加载 HTML 文件时，此机制会物理上清除不安全的内容，并且三种模式之间有不同的配置。清理配置是渐进的，并且可能随版本迭代而改变。如果您认为某些标签或属性不应该被清理，请在 [问题页面](https://github.com/nuthrash/obsidian-html-plugin/issues) 中创建一个新问题，让我知道。
6. **隔离** - HTML 文件的 CSS 样式应与 Obsidian 的其他部分隔离开来，否则 Obsidian 的布局可能会被打乱，字体可能变得丑陋。CSS 隔离的缺点可能导致某些 CSS 效果丢失，例如 `:target` 伪类事件将永远不会触发。您可以从 [CSS 隔离](https://github.com/nuthrash/obsidian-html-plugin/wiki/CSS-Isolation) 维基页面获取更多详细信息。
7. [自定义元素](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements) - 指 HTML 标签，例如 `<xxx-yyy>`，它们通常与相关的 JavaScript 代码一起使用。因此，在禁止脚本编写时，自定义 HTML 标签几乎无用，只会充当纯容器。

</details>

<br />

#### 背景颜色

强制设置 HTML 的&lt;body&gt; 元素的背景颜色。

### 快捷键和触摸手势设置

几乎所有的键盘快捷键都来自 Obsidian 的全局快捷键设置，因此您应该通过⚙" 设置 " ⇨ " 快捷键 " 选项页面来修改它们。<br>
这意味着该插件不会为键盘快捷键设计任何新的配置界面。它只会以只读模式显示相应快捷键的前两个设置。

搜索文档文本

搜索当前文件。

放大文档

放大当前文件。

缩小文档

缩小当前文件。

重置文档缩放

重置当前文件的缩放。

快速文档缩放

使用 Ctrl + 鼠标滚轮进行文档缩放（放大：↑，缩小：↓），或使用触摸板/触摸屏/触摸面板的双指捏合缩放手势（放大：← →，缩小：→ ←）。

更多选项

在打开 HTML 文件后，选项卡右上角的三个点⋮“更多选项”菜单图标将添加一些菜单项。

![MoreOptions1.jpg](./assets/images/screenshots/MoreOptions1.jpg "更多选项部分1")

找到...

打开搜索栏。

放大

放大当前文件。

缩小

缩小当前文件。

### 重置缩放

重置当前文件的缩放。

如何从源代码构建此插件

1. 将此项目克隆到您的系统。
2. 在本地项目文件夹下，键入命令 `npm i` 来安装必要的包。（您需要在开发环境中安装 Node.js）
3. 然后运行 `npm run dev` 来构建插件文件。

已知问题

- 无法查看本地图像文件，如 `<img src="./image1.jpg" />` 或 `<img src="file:///C:/image1.jpg" />`
  - 这是 Obsidian 的限制，它不允许通过 HTML 代码直接访问本地文件。
  - 一种可能的解决方法是使用专用的浏览器扩展（如 "[SingleFile](https://github.com/gildas-lormeau/SingleFile)"）将 HTML 文件重新保存为完整的 HTML 文件，它可以将整个页面（包括 CSS、图像、字体、框架等）保存为单个 HTML 文件。在获得完整的 HTML 文件后，将其放入已安装 obsidian-html-plugin 的 vault 文件夹中，然后打开它，您将看到所有图像。
  - 另一种解决方法是手动将 `src` 属性的前缀字符串添加为 `app://local/` 或 `app://local//`（参考 "[Allow embed of Local images using `![](file:///...)`](https://forum.obsidian.md/t/allow-embed-of-local-images-using-file/1990/4)")。
- 打开某些.html 文件后，它们看起来像空白页面，无法看到原始内容。
  - 实际上，在当前版本（1.0.4 之后），此插件只能处理某些类型的 HTML 文件：
    1. 标准的 [HTML5](https://html.spec.whatwg.org/) 文件
    2. 使用 [SingleFileZ](https://github.com/gildas-lormeau/SingleFileZ) 创建的压缩的类 HTML 文件
  - 因此，当打开不受支持的文件格式时，此插件会通知相关消息或显示几乎空白的页面。
  - " 使用 `.html` 和 `.htm` 文件扩展名打开文档 " 是针对没有技术背景的最终用户编写的描述。这并不意味着此插件可以打开所有带有.html 或.htm 文件扩展名的文件，特别是当文件实际上是其他文档类型但重命名为.html 或.htm 文件扩展名时。
  - 如果要打开 ePub 文件，您应该安装 "ePub Reader" 插件来打开它，而不是将其重命名为 xxx.html 然后询问为什么此插件无法打开它。
- 一些 HTML 元素消失了
  - 这可能是由以下原因引起的：
    1. 被 HTML 消毒机制移除
    2. 被隐藏或变得不可见
  - 您可以尝试切换 [操作模式](#operating-mode) 到不同的模式，看看消失的 HTML 元素是否变得可见。如果是，您可以在 [Issues页面](https://github.com/nuthrash/obsidian-html-plugin/issues) 上创建一个新问题，让我知道，我会与您讨论。
  - 如果在切换到较不受限制的模式后仍然看不到消失的 HTML 元素，那就意味着它们被隐藏或变得不可见。当 HTML 元素使用一些高级功能（如 "[声明式Shadow DOM](https://web.dev/declarative-shadow-dom/)"）时，这种情况经常发生（此功能在 1.0.4 版本之后得到支持），而此插件或 Obsidian 尚未支持。然后，您可以在 [Issues页面](https://github.com/nuthrash/obsidian-html-plugin/issues) 上创建一个新问题，让我知道，我会与您讨论。
- 几乎所有的脚本代码都无法工作
  - 这可能是由以下原因引起的：
    1. 被 HTML 加载过程阻止
    2. 被 HTML 消毒机制移除
  - Obsidian 的开发团队非常关注 XSS 攻击，因此他们希望插件开发人员遵循这个 [提示](https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md#avoid-innerhtml-outerhtml-and-insertadjacenthtml) 来防止 XSS 攻击。因此，几乎所有在 HTML 文件中 `<script>` 内的脚本代码都将被阻止，外部脚本文件也是如此。
  - 同时，HTML 消毒机制会更深入地清理潜在的 XSS 代码。因此，诸如 `<... onload="alert(1)">` 的代码将被移除。
  - 因此，您可以切换到 [较不受限制的模式](#operating-mode) 来查看它们是否工作。
- 在移动平台上无法使用鼠标滚轮进行缩放
  - 似乎 Obsidian 应用程序在移动平台上阻止了某些操作，因此这些操作无法正常工作。
  - 您可以在触摸屏上使用双指捏合缩放手势进行缩放。
  - 您可以使用 "[更多选项](#more-options)" 菜单项进行缩放。
- 移动平台上缩放相关的热键设置消失了
  - Obsidian 的移动版本不提供这些设置，因此此插件也不提供它们。
- 搜索结果的演示样式与 Markdown 文档不同
  - HTML 文件中有许多标签/元素，某些搜索结果可能跨越标签并重叠在一起。因此，此插件使用块标记样式（背景色高亮显示）而不是大纲样式。



