---
uid: 20240822223821
title: Obsidian 插件：virtual linker（glossary）轻松探测全库潜在双链并生成虚拟链接
tags: [双链, 内链, 社区插件]
description: 提供了类似思源笔记虚拟引用的功能，自动为笔记中的文本生成虚拟链接
author: Chenghuang
type: other
draft: false
editable: false
modified: 20240822224021
---

# Obsidian 插件：virtual linker（glossary）轻松探测全库潜在双链并生成虚拟链接

## 概述

Virtual Linker 是一款 Obsidian 插件，提供了类似思源笔记虚拟引用的功能，能够自动为笔记中的文本生成虚拟链接，这些链接与保管库中其他笔记的标题或别名匹配。

> [!Note] 插件名片
> - 插件名称：Virtual Linker / Glossary
> - 插件作者：Valentin Schröter
> - 插件说明：`Virtual linker` 插件原名 `glossary`，后在伟大的 `calmwares` 提议下改名，以其功能很像 `思源笔记` 的虚拟引用之故，另有 `note definitions` 功能与之类似，点击笔者昵称可找到有关文章。根据本插件 github 主页的简介，它能自动为笔记中的词句匹配同库中具有相同标题或别名的笔记并生成 `虚拟链接`（virtual link），有助于帮助用户发现潜在的双链关系。
> - 插件分类：['obsidian 插件 ', ' 双链 ']
> - 项目地址：[点我访问](https://github.com/vschroeter/obsidian-virtual-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?virtual-linker)

## 基本用法

- 在默认情况下，本插件会自动检索全库笔记，如果当前笔记中有词句与同库其他笔记的标题或别名相同，则会自动将其转为 `虚拟链接`，无需人工添加。`虚拟链接` 在编辑模式和阅读模式下均可生效， 如果库或文本内容发生变化，链接会保持实时更新
- `虚拟链接` 类似于 OB 原生的 `内部链接`（internal link），可点击跳转，也可将鼠标移至上方调出悬浮窗口查看，但并不会像 `内部链接` 那样使用双链语法污染文本，也不会在关系图谱或状态栏中的反链出数统计中显示，但如果想将之转为 `内部链接` 也很简单，只消右键点击 `虚拟链接` 在菜单中选择 `Convert to real link` 命令可将 `虚拟链接` 转为 `内部链接`，比系统自带 `出链` 核心插件的 `当前笔记中潜在的链接` 功能转换更为直观和方便

## 设置说明（按照从上到下的顺序）

### Matching behavior

- `Include aliases` 选项如果开启，则匹配范围内笔记文档属性中的 `alias` 项也将被纳入匹配范围
- `Only link once` 选项如果开启，则当前笔记中的匹配词只会在第一次出现时显示为 `虚拟链接`，类似于 WIKI 百科的样式，有助于保持页面整洁
- `Exclude links to real linked files` 选项如果开启，则插件不会为已经存在的 `内部链接` 添加 `虚拟链接`
- `Case sensitive` 选项如果开启，则匹配过程是大小写敏感的，用户可为笔记添加标签（标签文本可在 `tag to match case` 或 `tag to ignore case` 选项中自定义）以调整其大小写敏感度
- `Include headers` 选项如果开启，则小标题也会被纳入匹配范围
- `Match only whole words` 选项如果开启，则插件只会对完整的词语进行匹配，关闭则词语的任一部分都会参与部分匹配，如选择了后者，则建议开启 `Suppress suffix for sub word` 将后缀排除在匹配范围之外
- `Fix IME problems` 选项如果开启，则在当前行内不会实时生成 `虚拟链接`，这是因为在使用输入法输入 QWERTY 键盘无法输入的语言（比如汉语日语韩语等）时，可能会跟插件发生冲突

### Matching files

- `Include all files` 选项如果开启，则可在 `Excluded directories` 选项中将特定文件夹排除出匹配范围，如果关闭这一选项，则可在 `Glossary linker directories` 选项中指定任一文件夹作为专门的 `定义文件夹`。还可以为笔记添加标签（标签文本可在 `tag to include file` 或 `tag to ignore file` 选项中自定义）来决定是将该笔记保留在匹配范围之内，抑或把它清除出革命队伍
- 在默认状态下，插件设置中的 `Exclude self-links to the current file` 选项处于开启状态，如果关闭则插件会将当前笔记纳入匹配范围，但可能出现 bug

### Link style

- `Virtual link suffix` 选项可以自定义 `虚拟链接` 的后缀，可以是图标也可以是文本，后者默认以上标形式表示
- `Apply default link styling` 选项如果开启，则可在 `.obsidian/snippets/virtualLinks.css` 中修改样式：

```
/* 例：将所有虚拟链接的颜色设定为红色 */
.virtual-link a{ 
    color: red !important;
}
```