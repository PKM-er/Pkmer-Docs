---
uid: 20231031220904
title: Obsidian 搭配 Vim Mode
tags: [vim]
description: jiyeee分享自己如何配置Obsidian的Vim模式，目前为止的最佳实践
author: jiyee
type: other
draft: false
editable: false
modified: 20231031223612
---

# Obsidian 搭配 Vim Mode

过去一段时间我开始认真地体验 Obsidian （黑曜石）这款软件，深度使用了一段时间之后便退订了 Ulysses 订阅，将全部的文档都迁移到了 Obsidian 。由于其平台的开放性，Obsidian 的定位不仅仅是笔记软件，更适合作为 PKM 工具使用。

关于 Obsidian 介绍的文章和视频已经不计其数，通过阅读这些优秀的经验分享，让我快速掌握 Obsidian 的使用技巧。之前在论坛里看到一篇文章 「[VIM Mode - Quality of Life Improvements - Share & showcase - Obsidian Forum](https://forum.obsidian.md/t/vim-mode-quality-of-life-improvements/429)」，介绍了 Obsidian 里如何高效地使用 Vim Mode ，而 Obsidian 吸引我的其中最重要的一点就是支持 Vim Mode 。过去我一直在各种 IDE 里使用 Vim Mode ，已经熟悉了 Vim Mode 操作习惯，在最早支持 Vim Mode 的 Markdown 笔记软件里，我还使用过一段时间的 Haroopad，可惜软件很久没有更新了。Obsidian 经过 2 年多迭代和各类 Vim Mode 周边插件支持，目前 Obsidian 支持的 Vim Mode 功能已经能够我满足日常写作使用，这篇文章就总结一下目前我是如何在 Obsidian 使用 Vim Mode 以及对其周边插件进行完善。

## Vim Mode 周边插件配置

使用 Vim Mode 一定会使用到 Vimrc Support 这个插件，配合自定义 .obsidian.vimrc 文件，可以实现 Vim Mode 指令管理。经过各种摸索，我自己的配置文件目前如下：[.obsidian.vimrc](https://gist.github.com/jiyee/cfa8dc2f37359004b34820543f691db3)。

### Bugfix PR

Vimrc Support 插件 0.8.0 版本存在 Vim Mode 在状态栏显示异常的问题，我提了第一个 [PR](https://github.com/esm7/obsidian-vimrc-support/pull/159) ，在最新的 0.9.0 版本修复了此 bug ，顺带还修复了 Fixed Normal Mode Layout 功能。提交完 PR 之后，自己在 GitHub 上尝试解答部分 issue 。

### 配置直接在指定 IDE 中打开配置文件

开发过程中，需要经常编辑 .obsidian.vimrc 配置文件，为了快速地在 Sublime Text 中打开配置文件，我找到了一个 workaround 方法，利用 Shell commands 插件配置注册一个命令行 `/usr/local/bin/subl {{vault_path}}/.obsidian.vimrc` 命令，就可以通过命令直接唤起 Sublime Text 并打开 .obsidian.vimrc 文件。

![c2f7545fdc99478db431ca40f7d866db~tplv-k3u1fbpfcp-watermark.png](https://cdn.pkmer.cn/images/202310312212416.png!pkmer)

### 快速创建 admonition 代码块

Vimrc Support 插件支持了 surround 特性，进一步搭配 [admonition](https://github.com/valentine195/obsidian-admonition) 和 [code block from selections](https://github.com/dy-sh/obsidian-code-block-from-selection) 插件，在 normal mode 或 visual mode 下都可以通过 `sa{x}` 指令直接创建 admonition block 。

```
" Surround Admonition
" https://github.com/esm7/obsidian-vimrc-support/discussions/146
exmap CodeBlockAdmonitionNote obcommand code-block-from-selection:17f30753-d5f4-4953-abed-5027a25ede58
map san :CodeBlockAdmonitionNote
exmap CodeBlockSelectionAdmonitionNote jscommand { editor.setSelections([selection]); this.app.commands.commands['code-block-from-selection:17f30753-d5f4-4953-abed-5027a25ede58'].callback() }
vmap san :CodeBlockSelectionAdmonitionNote
```

### 调整 zz 屏幕移动位置到 70%

`zz` 键盘映射默认会将文档当前行移动到屏幕中间位置，但是我习惯将当前编辑行移动到屏幕中上的位置，通过 jsfile 稍微调整一下 `zz` 屏幕移动位置。

```
exmap scrollToCenterTop70p jsfile .obsidian.markdown-helper.js {scrollToCursor(0.7)}
nmap zz :scrollToCenterTop70p
```

### 光标跳转到上次编辑位置

另外一个常用的功能是光标回退到上次编辑的位置，在论坛里也有用户提出需求 [Hotkey jump to previous caret position - Feature requests - Obsidian Forum](https://forum.obsidian.md/t/hotkey-jump-to-previous-caret-position/10817) ，找到一个很巧妙的实现，`nmap g; u<C-r>`，限制是只能回退一步，且 Markdown 模式切换之后会失灵。有时间的话可以想想如何实现回退多步。另外，vim.js 已经内置支持 `gi` 跳转到上次编辑的位置并切换到 insert 模式。

### 按行跳转光标

```
" Have j and k navigate visual lines rather than logical ones
nmap j gj
nmap k gk

" I like using H and L for beginning/end of line
nmap H ^
nmap L $
" nmap J 5j
" nmap K 5k
```

### 按段落跳转光标

```
" Moving to next/prev paragraph
nmap [ {
nmap ] }
```

### 按 Heading 跳转光标

```
exmap nextHeading jsfile .obsidian.markdown-helper.js {jumpHeading(true)}
exmap prevHeading jsfile .obsidian.markdown-helper.js {jumpHeading(false)}
nmap g] :nextHeading
nmap g[ :prevHeading
```

### 按 tab 跳转光标

```
" Emulate Tab Switching https://vimhelp.org/tabpage.txt.html#gt
" requires Pane Relief: https://github.com/pjeby/pane-relief
exmap tabnext obcommand pane-relief:go-next
nmap gt :tabnext
exmap tabprev obcommand pane-relief:go-prev
nmap gT :tabprev
nmap g\ :tabnext
```

### 按 heading zoom

```
" Zoom in/out
exmap zoomIn obcommand obsidian-zoom:zoom-in
exmap zoomOut obcommand obsidian-zoom:zoom-out
nmap zi :zoomIn
nmap zo :zoomOut

nmap &a :zoomOut
nmap &b :nextHeading
nmap &c :zoomIn
nmap &d :prevHeading
nmap z] &a&b&c
nmap z[ &a&d&c
```

![8d74e5d32c654a14b6948d62c11ec9ec~tplv-k3u1fbpfcp-watermark.gif](https://cdn.pkmer.cn/images/202310312229695.gif!pkmer)

![8d74e5d32c654a14b6948d62c11ec9ec~tplv-k3u1fbpfcp-watermark.gif](https://cdn.pkmer.cn/images/202310312229320.gif!pkmer)

### focus 模式切换

搭配 [Stille](https://github.com/michaellee/stille) 插件，实现 Focus 模式切换

```
exmap toggleStille obcommand obsidian-stille:toggleStille
nmap zs :toggleStille
nmap ,s :toggleStille
```

### 阅读模式跳转

这个插件实现了在 Preview 模式下简单的 `j/k/gg/G` 等光标移动指令，不过该插件没有发布到 Community plugins 市场，只能手动安装。[obsidian-vim-reading-view-navigation Allows navigating Obsidian's Reading View with j, k, gg and G](https://github.com/kometenstaub/obsidian-vim-reading-view-navigation)

### 高亮 yy 复制行

高亮 `yy` 复制行，同样没有发布到 Community plugins 市场，只能手动安装。[obsidian-vim-yank-highlight Highlights the current yank.](https://github.com/kometenstaub/obsidian-vim-yank-highlight) 不过我使用得不多，觉得实用性不强。

## 中文编辑优化

常见的 Vim Mode 里对于中文的支持都是非常差的，[Vim 的中文支持及解决思路 - 少数派](https://sspai.com/post/71322)，这篇文章总结了不少经验。得益于 Obsidian 的插件开放性，能够专门针对中文编辑体验进行优化。

### 中英文输入法自动切换

第一个想到扩展功能就是中英文输入法切换，希望在切换到 insert 模式自动切换到中文输入法，回到 normal 模式自动切换到英文输入法。已经有一个插件实现了该功能 [obsidian-vim-im-switch-plugin](https://github.com/yuanotes/obsidian-vim-im-switch-plugin)，需要搭配 [fcitx-remote-for-osx](https://github.com/xcodebuild/fcitx-remote-for-osx) 这个命令行工具使用，我直接修改了源文件 main.m ，替换默认输入法配置（ com.apple.keylayout.ABC 和 im.rime.inputmethod.Squirrel.Rime ），重新编译安装即可使用。不过该插件存在 bug ，经常出现切换失灵的问题，提了 [PR](https://github.com/yuanotes/obsidian-vim-im-switch-plugin/pull/19) 修复，不过暂时还没有合入主干发布新版本。

### 中文分词跳转光标

在 Vim Mode 使用过程中会遇到的一个问题是对于中文分词的逻辑跟英文不一样，[Vim 的中文支持及解决思路 - 少数派](https://sspai.com/post/71322) 这篇文章里详细讲述了可能的三种解决思路，在 Community plugins 市场里找了一圈也没有现成的解决方案，不过发现一个插件 [cm-chs-patch](https://github.com/aidenlx/cm-chs-patch) 已经实现了中文分词和双击选中的功能，于是花了一点时间在此基础上实现了 Vim Mode 按中文分词跳转光标特性，[支持 Vim 模式 by jiyee · Pull Request 19 · cm-chs-patch](https://github.com/aidenlx/cm-chs-patch)。最新的 1.10.0 版本已经支持按中文分词跳转光标。不过，因为不能直接修改 Obsidian 里内置的 vim.js 内部实现，只能将 vim.js 的内部实现 fork 出来，好在相关实现属于比较稳定的部分，之后的升级应该不存在太大的困难。![8d74e5d32c654a14b6948d62c11ec9ec~tplv-k3u1fbpfcp-watermark.gif](https://cdn.pkmer.cn/images/202310312228599.gif!pkmer)

### 中文标点跳转光标

在中文编辑过程中经常需要按断句跳转或编辑，开发支持了 `f<charactor>` 键盘映射输入英文标点跳转到对应的中文标点，我自己觉得这个特性还蛮实用的，在词语粒度和段落粒度之间补齐了断句粒度。因为实现相似，同样提交到了 [cm-chs-patch](https://github.com/aidenlx/cm-chs-patch) 插件，不过我觉得放在的这个插件里并不是最恰当的，只不过当时提 PR 的时候一起带上了。

## 自定义插件开发

另外，还有几个特性是我自己日常使用中的习惯，我正在开发一个 [Obsidian-VimEx](https://github.com/jiyee/Obsidian-VimEx) 插件，目前包括以下几个特性：

### File Rename Modal

之前通过定义 `gr` 和 `<C-w>r` 键盘映射到文件重命名功能，在启用 Show inline title 之后， 默认的 Rename file 行为会是跳转到文档头部的 inline title ，且全选标题文字，并不是很方便，实现了一个简单的文件重命名弹窗，重命名行为不会干扰到现有的编辑状态。

![](https://cdn.pkmer.cn/images/202310312234946.gif!pkmer)

### Mark 标记

我之前一直很少用 Vim Mode 里的 Mark 功能，主要的原因是经常忘记之前 Mark 的标记名称。如果能直接在编辑器里可视化标记 Mark 标记名称或者有一个 Mark 标记名称列表的话，对于跨段落的来回跳转会方便很多。目前实现的是，在行号右侧添加自定义的 Mark 标记名称，会联动 `m{x}` 键盘映射。

### vimrc 可视化配置

配置 .obsidian.vimrc 过程中发现想找到一个合适的参考配置其实挺不方便的，只有通过 GitHub 或论坛搜索的方式。如果能可视化配置，将全部特性都列出来，直接配置指令即可，甚至能够以社区共享配置的话就更方便了。这个可能会作为一个功能加到插件里。

最后，有其他好的插件，或者有其他特性需求或建议欢迎留言或者 [提 issue](https://github.com/jiyee/Obsidian-VimEx/issues)，共同完善 Obsidian Vim Mode 体验。