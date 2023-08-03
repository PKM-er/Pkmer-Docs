---
uid: 20230803231105
title: Obsidian 插件：Vimrc Support
tags: ['Vim相关', 'obsidian插件', 'readme']
description: 支持 Vimrc 配置文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232438
---

# Obsidian 插件：Vimrc Support

> [!Note] 插件名片
> - 插件名称：Vimrc Support
> - 插件作者：esm
> - 插件说明：支持 Vimrc 配置文件。
> - 插件分类：['Vim 相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/esm7/obsidian-vimrc-support)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-vimrc-support)

## 概述

支持 Vimrc 配置文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/esm7/obsidian-vimrc-support/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-vimrc-support]] 插件的自述翻译

# Obsidian Vimrc 支持插件

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/esm7)

该插件从 `VAULT_ROOT/.obsidian.vimrc` 文件中加载 Vim 命令。

对于 Obsidian.md Vim 模式的用户来说，这非常有用，可以使各种设置（尤其是按键映射）持久化。

请注意，该插件**不是** Obsidian 的 Vim 支持插件 -- Obsidian 内置了 Vim 支持，您可以完全在 Vim 模式下使用 Obsidian，而无需此插件。

该插件仅实现了加载持久化配置的功能，并添加了一些额外功能。

## 需要维护者

虽然我仍然会为一些紧急修复提供支持，特别是当插件因为 Obsidian API 的变化而停止工作时，但我已经无法给予它应有的关注。

任何希望接手的人，请给我留言。

## 用法

首先，请确保您已经打开了 Obsidian Vim 键绑定 - 请参阅编辑器 -> Vim 键绑定。

现在，为了使一些 Vim 设置保持永久，安装此插件并在您的 vault 根目录中放置一个名为 `.obsidian.vimrc` 的文件。

如果您使用多个 vaults，则需要在每个 vault 上都需要此文件。

**对于 iOS/iPadOS 用户**，强烈建议将 Obsidian 的 " 从其他应用程序粘贴 " 设置为允许，这样就不会出现烦人的弹出窗口。

这是一个我正在使用的简单而有用的 `.obsidian.vimrc` 示例：

```vim
" 让j和k导航到视觉行而不是逻辑行
nmap j gj
nmap k gk
" 我喜欢使用H和L来移动到行的开头和结尾
nmap H ^
nmap L $
" 快速删除搜索高亮
nmap <F9> :nohl

" 复制到系统剪贴板
set clipboard=unnamed

" 使用Ctrl+O和Ctrl+I返回和前进
"（确保删除默认的Obsidian快捷键以使其工作）
exmap back obcommand app:go-back
nmap <C-o> :back
exmap forward obcommand app:go-forward
nmap <C-i> :forward
```

## 支持的命令

可以使用的命令是 CodeMirror 支持的任何命令。

我找不到正式的命令列表，但你可以在 Obsidian 的 Vim 模式中查找 `defaultExCommandMap`，或者尝试在 Obsidian 的 Vim 模式中使用命令。

除此之外：

- 该插件会跳过空行和以 Vimscript 注释（`" ...`）开头的行。
- 可以通过 `set clipboard=unnamed`（`unnamedplus` 也可以）来激活对系统剪贴板的复制支持。
- 支持 `tabstop` Vim 选项（例如 `set tabstop=4`）。
- 除了默认命令之外，还支持自定义映射/取消映射命令：
  - `noremap`
  - `iunmap`
  - `nunmap`
  - `vunmap`
  - 欢迎提交 PR 来实现更多命令 :)
- `exmap [commandName] [command...]`：用于映射 Ex 命令的命令。基本上应该在常规的 `:map` 中支持，但由于 CodeMirror 的一个 bug，不支持多参数命令，所以这是一个解决方法。
- `obcommand` - 执行 Obsidian 命令，详细信息请参见下文。
- `cmcommand` - 执行任意的 CodeMirror 命令，详细信息请参见下文。
- `surround` - 在可视模式下将所选文本或在正常模式下的单词周围添加文本。
- `pasteinto` - 将当前剪贴板粘贴到可视模式下的所选文本或正常模式下的单词中。用于创建超链接非常有用。
- `jscommand` 和 `jsfile` - 使用 JavaScript 片段扩展 Vim 模式。
- `source` - 从文件中加载 Vim 命令（相对于 vault 根目录）。

目前，执行失败的命令不会生成任何可见的错误。

**重要提示！** 在将命令添加到你的 Vimrc 文件之前，你应该在 Obsidian 的正常模式下尝试它们（在编辑器中键入 "`:`"）以确保它们按预期工作。

CodeMirror 的 Vim 模式有一些限制和 bug，并不是所有命令都能像你期望的那样工作。

在某些情况下，你可以通过试验找到解决方法，而最简单的方法是通过交互式尝试，而不是通过 Vimrc 文件。

## 安装

在 Obsidian.md 的设置中，点击“社区插件”下的“打开社区插件”，然后浏览到这个插件。

或者（不推荐），您可以手动安装：只需将 `main.js` 和 `manifest.json` 复制到您的 vault `VaultFolder/.obsidian/plugins/obsidian-vimrc-support/`。

支持开发

如果您想支持此插件的开发，请考虑 [给我买杯咖啡](https://www.buymeacoffee.com/esm7)。

请在这里实现\[某些 Vim 功能\]...

我想再次强调，这个插件是对 Obsidian 内置的 Vim 模式进行的调整，而 Obsidian 的 Vim 模式本质上是基于 [CodeMirror的Vim模式](https://codemirror.net/demo/vim.html)。虽然我个人非常喜欢帮助每个人在各个地方使用 Vim 模式，但是这个插件通常不是实现某些类型功能的最佳选择。

1. Vim 编辑器功能（例如新的动作）最好在 CodeMirror 中实现，这样使用该组件的其他编辑器也能享受到这些功能！请首先考虑在那里提交问题或拉取请求 [这里](https://github.com/codemirror/CodeMirror/)。
2. 已经由其他 Obsidian 插件实现的功能最好留在这些插件中。请考虑要求这些插件作者为他们的功能添加 Vim 支持（使用 CodeMirror API），甚至更好的是——帮助他们 :)

话虽如此，在这个插件中添加功能通常非常容易，这要归功于 CodeMirror 的 [Vim模式扩展API](https://codemirror.net/doc/manual.html#vimapi_extending)，因此作为最简单的方法，我会偶尔实现一些请求的 Vim 功能，并乐意接受 PR。

我想要添加的功能：

- 为 Obsidian 实现一些标准的 `vim-markdown` 动作，例如 `[[`，或者为 CodeMirror 实现 1-2 个缺失的 Ex 命令，以便在 Vimrc 中定义这些键位映射。

如果您希望 Vimrc 文件的名称或路径与默认设置不同，可以通过插件设置（在设置 | 插件选项 | Vimrc 支持下）进行更改。

## 使用 `obcommand` 执行 Obsidian 命令

该插件定义了一个名为 `obcommand` 的自定义 Ex 命令，用于执行各种 Obsidian 命令作为 Ex 命令。

这对于将 Obsidian 或其他插件的外部功能映射到 Vim 快捷键非常有用，但使用起来并不像人们希望的那样简单。

如果您只是输入 `:obcommand`，您将在开发者控制台（Ctrl+Shift+I）中获得当前应用程序定义的命令列表。

简单的语法 `:obcommand [commandName]` 将执行命名的命令。

一些有用的示例：

- `obcommand editor:insert-link`
- `obcommand editor:toggle-comment`
- `obcommand app:go-back`
- `obcommand workspace:split-vertical`

还有很多其他命令。

**警告：**这不是 Obsidian 提供的正式 API，而是以一种相当 hacky 的方式完成的。

很有可能，Obsidian 的某个未来版本会破坏此功能。

### 在 Vim 中映射 Obsidian 命令

接下来你可能想问的是“我如何将伟大的 Obsidian 命令映射到 Vim 命令中呢？”

最简单的答案应该是类似于 `:nmap <C-o> :obcommand app:go-back`，但是由于一个烦人的 CodeMirror bug，**这样不起作用**。

事实证明，CodeMirror 的各种映射命令只传递第一个参数，所以当你执行上述定义的映射时，`:obcommand` 将没有参数执行。

这里有一个自定义命令 `exmap` 可以帮助解决这个问题，你可以使用它来为较长的 Ex 命令“别名”： `:exmap back obcommand app:go-back`。

现在你有一个简单（0 个参数）的 Ex 命令名为 `back`，可以在 Obsidian 中返回，而且*这个命令*是可以映射的。

总结一下，这是如何将 `C-o` 映射到 `Back` 的方法：

```
exmap back obcommand app:go-back
nmap <C-o> :back
```

注意，在 `exmap` 中命令名称不带冒号，在 `nmap` 中冒号是必需的。

## 使用 `surround` 包围文本

该插件定义了一个名为 `surround` 的自定义 Ex 命令，用于在可视模式下包围当前选择的文本或在正常模式下包围光标所在的单词。

这对于习惯使用 `vim-surround` 插件的 Vim 用户非常有用。

语法如下：`:surround [前缀文本] [后缀文本]`。

以下是一些示例：

- `surround ( )`
- `surround " "`
- `surround [[ ]]`

下面是一个实现了 vim-surround 的许多功能的示例配置：

```
exmap surround_wiki surround [[ ]]
exmap surround_double_quotes surround " "
exmap surround_single_quotes surround ' '
exmap surround_backticks surround ` `
exmap surround_brackets surround ( )
exmap surround_square_brackets surround [ ]
exmap surround_curly_brackets surround { }

" 注意：必须使用 'map' 而不是 'nmap'
map [[ :surround_wiki
nunmap s
vunmap s
map s" :surround_double_quotes
map s' :surround_single_quotes
map s` :surround_backticks
map sb :surround_brackets
map s( :surround_brackets
map s) :surround_brackets
map s[ :surround_square_brackets
map s[ :surround_square_brackets
map s{ :surround_curly_brackets
map s} :surround_curly_brackets
```

用法：

1. 在可视模式下选择一些文本，然后按下 `s`，然后按下所需的包围字符。例如，按下 `s"` 将用双引号包围所选文本。
2. 在正常模式下将光标放在一个单词上，然后按下 `s`，然后按下所需的包围字符。例如，按下 `s"` 将用双引号包围该单词。

## 使用 `pasteinto` 插入链接/超链接

该插件定义了一个名为 `pasteinto` 的自定义 Ex 命令，用于在可视模式下将文本粘贴到当前选定的文本中，或在正常模式下将文本粘贴到光标所在的单词中。

这对于创建链接/超链接 `[选定的文本](粘贴)` 特别有用。

以下是我的超链接配置示例：

```
" 将pasteinto映射到Alt-p
map <A-p> :pasteinto
```

一些关于绑定空格和和弦的帮助（适用于 Doom 和 Spacemacs 的粉丝）

`<Space>` 可以绑定为和弦，比如与 obcommand 一起绑定为 `<Space>fs`，用于保存当前文件等操作。

但是首先需要使用 `unmap <Space>` 取消绑定 `<Space>`。

之后，`<Space>` 可以像其他按键一样正常绑定。

通过 Obsidian 命令，可以模拟一些 Obsidian Vim 模式中没有包含的其他 Vim 命令，例如 `gt` 和 `zo`。

```vim
" 模拟折叠 https://vimhelp.org/fold.txt.html#fold-commands
exmap togglefold obcommand editor:toggle-fold
nmap zo :togglefold
nmap zc :togglefold
nmap za :togglefold

exmap unfoldall obcommand editor:unfold-all
nmap zR :unfoldall

exmap foldall obcommand editor:fold-all
nmap zM :foldall

" 模拟标签切换 https://vimhelp.org/tabpage.txt.html#gt
" 需要使用Cycle Through Panes插件 https://obsidian.md/plugins?id=cycle-through-panes
exmap tabnext obcommand cycle-through-panes:cycle-through-panes
nmap gt :tabnext
exmap tabprev obcommand cycle-through-panes:cycle-through-panes-reverse
nmap gT :tabprev
```

在正常模式下固定键盘布局

在许多语言和键盘布局中，使用 Vim 键可能会出现问题，甚至根本无法使用。在某些键盘布局中，Vim 键位于不同的位置，当切换布局时可能会感到困惑，并且在某些布局（例如非西方语言）中，Vim 移动的键根本不存在。为了能够在这些布局和语言中使用 Vim 模式，您可以在插件设置中打开“固定键盘布局”功能。

当您首次打开此功能或单击“捕获当前布局”时，您当前的键盘布局将被保存，并且在您处于 Vim 正常或可视模式时将使用该布局。当您进入插入模式时，您将按照实际的当前系统布局/语言进行输入。

**此功能处于实验阶段，可能会对 Obsidian 或编辑器快捷方式产生意外的副作用。**

相对行号与此 Obsidian 插件非常配合使用（感谢@piotryordanov 提醒我！）

使用 JavaScript 代码片段定义 Vim 命令的插件，可以为 Vim 键绑定添加令人兴奋的新功能。**但是，这也带来了安全风险，因此默认情况下是禁用的。**

> :warning: **安全警告**
>
> 在使用此功能之前，**必须确保**您理解其潜在的安全影响。
>
> 使用存储在您的保险库中的 Vim 命令运行 JavaScript 代码片段意味着任何获得您笔记访问权限的人都可以在您的 Obsidian 应用程序中运行任意代码。

如果您理解风险并选择使用此功能，请在插件设置中打开 "Support JS Commands" 并继续阅读。

### JavaScript 命令使用

有两种定义基于 JS 的命令的方法。

**`jscommand` Ex 命令**定义了一个 JS 函数，该函数具有 `editor: Editor`、`view: MarkdownView` 和 `selection: EditorSelection` 参数（如果您不确定这些是什么，请参阅 [Obsidian API](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts)）。

您只需定义函数的主体，用花括号包裹在一行中，例如：

```js
jscommand { console.log(editor.getCursor()); }
```

这将立即将您当前的光标位置记录到开发者控制台。

如果您愿意，您可以使用 `exmap` 将其作为 Ex 命令：

```js
exmap logCursor jscommand { console.log(editor.getCursor()); }
nmap <C-q> :logCursor
```

相同功能的另一个版本是**`jsfile` Ex 命令**，它执行您提供的文件中的代码，然后将另一个可选的代码片段附加到其中（例如，如果您想将多个辅助方法存储在一个文件中，并在不同的命令中启动不同的方法）。

与上述相同，作为 `jsfile` 的一部分运行的代码具有 `editor: Editor`、`view: MarkdownView` 和 `selection: EditorSelection` 参数。

以下是我自己的 `.obsidian.vimrc` 中的示例，将 `]]` 和 `[[` 映射到下一个/上一个 Markdown 标题：

```js
exmap nextHeading jsfile mdHelpers.js {jumpHeading(true)}
exmap prevHeading jsfile mdHelpers.js {jumpHeading(false)}
nmap ]] :nextHeading
nmap [[ :prevHeading
```

请参阅 [此处](JsSnippets.md) 获取完整示例，并请贡献您自己的示例！

### 自定义状态栏样式

您可以利用 vim 模式显示提示类和 `data-vim-mode` 属性来为状态栏提示添加样式（例如为不同的状态分配颜色）。您还可以在设置页面中切换设置，以便将显示提示类应用于整个状态栏容器，如果您希望对其进行一些自定义。

显示提示类：`vimrc-support-vim-mode`

`data-vim-mode` 的值：

| 模式    | 数据值 (`data-vim-mode`) |
| ------- | ---------------------------- |
| 正常  | `normal`                     |
| 插入  | `insert`                     |
| 可视  | `visual`                     |
| 替换 | `replace`                    |

#### Powerline 样式片段

**截图**

<img width="1470" alt="Screen Shot 2023-04-09 at 19 19 53" src="https://user-images.githubusercontent.com/11176415/230812728-731e24d3-d667-478c-831c-14e0010e7973.png">
<img width="1470" alt="Screen Shot 2023-04-09 at 19 20 09" src="https://user-images.githubusercontent.com/11176415/230812731-26ba0c02-1948-4a26-89d2-3e73a11076d1.png">
<img width="1470" alt="Screen Shot 2023-04-09 at 19 20 22" src="https://user-images.githubusercontent.com/11176415/230812734-f51a01c9-5f80-4da7-b051-04018cc805cc.png">
<img width="1470" alt="Screen Shot 2023-04-09 at 19 20 37" src="https://user-images.githubusercontent.com/11176415/230812736-6fa688db-37b9-4b70-bacb-a6553b0762cb.png">

```css
div.status-bar-item.plugin-obsidian-vimrc-support {
  /* Papercolor主题 */
  --text-color-normal: #585858;
  --text-color-insert: #005f87;
  --text-color-visual: white;
  --text-color-replace: white;

  --background-color-normal: #eeeeee;
  --background-color-insert: #eeeeee;
  --background-color-visual: #d75f00;
  --background-color-replace: #d70087;
}

div.status-bar-item.plugin-obsidian-vimrc-support {
  /* 
    移动到左下角并且去除容器内边距的顶部/左侧/底部空间
   */
  order: -9999;
  margin: -4px auto -5px -5px;

  /* 
    我们有一个接下来的:after伪元素，所以不需要padding-right
    */
  padding-right: 0px;
  padding-left: 1em;

  /* 使用等宽字体 */
  font-family: 'MesloLGM Nerd Font Mono'; /* !!! 需要是一个powerline字体 */
  font-weight: bold;
  font-size: 1.2em;

  /* 清除由圆角边框产生的空间 */
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

div.status-bar-item.plugin-obsidian-vimrc-support:after {
  /* Powerline分隔符字符 */
  content: '';
  position: relative;
  font-size: 1.5rem;
  left: 0.9rem;

  /* 微调位置 */
  margin-top: 0.1rem;
}

/* 正常模式 */
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="normal"]:after {
  color: var(--background-color-normal);
}
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="normal"] {
  color: var(--text-color-normal);
  background-color: var(--background-color-normal);
}

/* 插入模式 */
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="insert"]:after {
  color: var(--background-color-insert);
}
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="insert"] {
  color: var(--text-color-insert);
  background-color: var(--background-color-insert);
}

/* 可视模式 */
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="visual"]:after {
  color: var(--background-color-visual);
}
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="visual"] {
  color: var(--text-color-visual);
  background-color: var(--background-color-visual);
}

/* 替换模式 */
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="replace"]:after {
  color: var(--background-color-replace);
}
div.status-bar-item.vimrc-support-vim-mode[data-vim-mode="replace"] {
  color: var(--text-color-replace);
  background-color: var(--background-color-replace);
}
```

请注意，上面的代码片段使用了 powerline 字体来显示三角形形状，因此您需要安装一个 [powerline字体](https://github.com/powerline/fonts) 以正确显示。当然，您可以随意更改 CSS 变量以适应您想要的颜色调色板！

## 更新日志

### 0.9.0

多个修复和改进，全部由@jiyee 贡献 - 谢谢！

- 修复了和 Vim 模式显示问题（<https://github.com/esm7/obsidian-vimrc-support/issues/149）。>
- 添加了 `source` 命令（<https://github.com/esm7/obsidian-vimrc-support/issues/157）。>
- 修复了正常模式布局回来了！

### 0.8.0

- 现在插件被标记为支持移动设备；感谢 @Geniucker 迈出这一步，进行测试和文档编写！
- 实现了 `nunmap` 和 `vunmap`，允许非常好的 `surround` 实现（请参阅 README）。感谢 @dohsimpson！

### 0.7.3

修复了更新最后选择变量时出现的问题，导致 `jsFile` 接收到了错误的参数（感谢@zjhcn！）

### 0.7.2

修复了一些用户在 Obsidian 最近的更新后插件无法使用的问题，并进行了一些优化。

### 0.7.1

修复了最新 Obsidian 更新中 `jscommand` 和 `jsfile` 的问题。

### 0.7.0

**重要提示：此版本不再支持传统（CM5）Obsidian 编辑器。**

如果您仍在使用传统编辑器，直到 Obsidian 将其删除之前，您无法升级到此版本的插件。

- 修复了多个问题（例如 [此问题](https://github.com/esm7/obsidian-vimrc-support/issues/118)），与编辑器类型的错误检测有关。
  - 通过不再尝试检测编辑器类型来修复了这些问题；对传统编辑器的支持变得笨拙，是时候放弃了。
- 支持 Obsidian 0.15 多窗口功能（<https://github.com/esm7/obsidian-vimrc-support/pull/110）。>

### 0.6.3

添加了对 `jsfile` 的 `selection` 的支持（感谢@twio142！）

### 0.6.2

- 修复了如果设置被覆盖并且为空，则不使用默认的 Vimrc 文件名。
- 为 `jscommand` 添加了一个 `selection` 参数（<https://github.com/esm7/obsidian-vimrc-support/issues/99）。>

### 0.6.1

- 修复了 `surround` 中的向后选择错误 (<https://github.com/esm7/obsidian-vimrc-support/issues/91)>

### 0.6.0

- `surround` 和 `pasteinto` 命令现在可以在新的（基于 CM6 的）编辑器中使用。
- 不再需要 Vimrc 文件的存在，以使其他插件功能正常工作（<https://github.com/esm7/obsidian-vimrc-support/issues/89）>
- 新的令人兴奋但危险的 `jscommand` 和 `jsfile` 命令，允许使用 JavaScript 片段扩展插件。

### 0.5.2

- 修复了在某些情况下对编辑器（传统 vs 新）的错误检测，导致插件在这些情况下无法正常工作。
- 修复了与新编辑器的 Vim 模式显示相关的问题。

### 0.5.1

- 修复了可能的异常。

### 0.5.0

添加了对新的（基于 CM6 的）编辑器的部分支持。

个人备注：在我经历非常忙碌的几周时，CM6 更新已经发布。

因此，我还没有能够全力以赴地关注它，但由于许多用户需要更新此插件，我以稍微不成熟的状态发布它。

核心功能可用，但在 CM6 中尚不支持某些插件功能，尤其是 `surround`（及其衍生功能）和 `cmcommand`。

我将尽力在接下来的几天内找到时间完成缺失的部分，并迅速处理报告的问题。

### 0.4.6

- 添加了 `cmcommand` 命令，用于执行任意 CodeMirror 命令。

### 0.4.5

显然，0.4.4 版本中的修复措施还不够好。希望我们现在已经解决了这个问题。

### 0.4.4

- 修复了控制台中不断显示的错误。

### 0.4.3

- 另一个修复“正常模式下固定键盘布局”的问题。
- 添加了转义字符反斜杠来包围命令。

### 0.4.2

- 尝试修复 <https://github.com/esm7/obsidian-vimrc-support/issues/42（感谢> @Andr3wD！）
- 修复了“正常模式下的固定键盘布局”通常无法正常工作的问题。

### 0.4.1

- `surround` 中的小修复。

### 0.4.0

- `surround` 和 `pasteinto` 命令（感谢 @Andr3wD！）
- Vim 和弦显示（感谢 @Andr3wD！）
- Vim 模式显示（感谢 @Andr3wD！）
- 修复了 [折叠和展开错误](https://github.com/esm7/obsidian-vimrc-support/issues/35)。
- 插件现在支持在正常模式下保持固定的键盘布局，如果配置为这样做的话。

### 0.3.1

- 修复了一些命令在通过 `obcommand` 时无法工作的问题（<https://github.com/esm7/obsidian-vimrc-support/issues/32）>

### 0.3.0

- 为 Vimrc 文件名添加了一个设置文件（感谢@SalmanAlSaigal！）
- 添加了 `exmap` Ex 命令。
- 添加了 `obcommand` Ex 命令。

### 0.2.4

修复了复制和粘贴时的竞争条件：<https://github.com/esm7/obsidian-vimrc-support/issues/11>

### 0.2.3

添加了 `noremap` 命令，感谢@nadavspi！

### 0.2.2

添加了 `iunmap` 命令，感谢@hnsol！

### 0.2.1

- 修复了 [此问题](https://github.com/esm7/obsidian-vimrc-support/issues/7)：现在设置 `clipboard=unnamed` 也适用于粘贴（它监视系统剪贴板，如果检测到更改，则更新 yank 缓冲区）。
- 支持 `tabstop` Vim 选项，如 [此处](https://github.com/esm7/obsidian-vimrc-support/issues/3) 所要求。

### 0.2.0

增加了对复制到系统剪贴板的支持（请参见上文），以及对注释和空行的支持。

### 0.1.1

修复了插件在每次加载文件时注入 Vimrc 引起的 [问题](https://github.com/esm7/obsidian-vimrc-support/issues/2)。

现在插件只在 CodeMirror 类上注入 Vimrc 一次（对于类而不是对象实例，因为这是 CodeMirror 保存 Vim 设置的地方）。

这似乎运行良好，但理论上可能存在 CodeMirror 对象绑定而不是类绑定的 Vimrc 设置，那样的话我们就会遇到麻烦（当 Obsidian 替换 CodeMirror 对象时，这些设置将丢失）。
