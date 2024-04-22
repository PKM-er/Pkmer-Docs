---
uid: 2024042221325720
title: Obsidian 插件：【Readme】Painter
tags: ['obsidian插件', 'readme']
description: Paint text different colors.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Painter

> [!Note] 插件名片
> - 插件名称：Painter
> - 插件作者：KraXen72 and Chetachi Ezikeuzor
> - 插件说明：Paint text different colors.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/KraXen72/obsidian-painter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?painter)

## 概述

Paint text different colors.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/KraXen72/obsidian-painter/master/README.md)

---

## Readme(翻译）

下面是 [[painter]] 插件的自述翻译

【机翻】

# 画家

> 用不同颜色绘制文本

![minimal-menu](https://cdn.pkmer.cn/covers/painter_2_0.png!pkmer)
![normal-menu](https://cdn.pkmer.cn/covers/painter_2_1.png!pkmer)
![commands](https://cdn.pkmer.cn/covers/painter_2_2.png!pkmer)

受到我的 [css片段和data.json](https://github.com/chetachiezikeuzor/Highlightr-Plugin/issues/61) 的启发，使用 Highlightr 来改变文本颜色。
该插件的目的是支持 [Highlightr-Plugin](https://github.com/chetachiezikeuzor/Highlightr-Plugin) 的大多数功能，以及改变文本颜色。

## 对原始插件的改进

### 新功能

- 添加了 `text-color` 高亮选项
- 添加了 `minimal` 菜单样式 - 仅在一行中显示图标（带有 `title` 属性）
- 更智能的选择（改编自 [Smarter MD Hotkeys](https://github.com/chrisgrieser/obsidian-smarter-md-hotkeys)）
  - `内联代码` 表示被选择的文本部分。`|` 是一个没有选择的光标。
  - **自动选择单词：** "hello t`|`here world!" => "hello `there` world!"
  - **修剪选择到最近的单词：** "what` is` up?" => "what `is` up?"
  - 您仍然可以选择单词的某个部分： "h`ell`o" => "h`ell`o"
- 更好的 `Clear`（以前是 `Remove higlight`）命令
  - 也将其添加到高亮菜单中
  - 在设置中，您可以配置自定义 CSS 选择器，以便除去任何 `mark` 元素
  - 用 `DOMParser` 替换了基于正则表达式的方法
- 新的 svg 图标（修改过的 lucide 高亮图标）
- 在设置中添加了动态高亮预览（显示您的颜色）

### 修复

- [在Obsidian的表格编辑器中工作](https://github.com/chetachiezikeuzor/Highlightr-Plugin/issues/90)
- [删除标记后的额外空格](https://github.com/chetachiezikeuzor/Highlightr-Plugin/pull/40)
- 允许覆盖先前的高亮（设置）- 类似于这个 [拉取请求](https://github.com/chetachiezikeuzor/Highlightr-Plugin/pull/63)
- Highlightr 样式现在使用 css 变量而不是硬编码的值

### 其他

- 清理文件结构并切换到 esbuild 而不是 rollupk
- 删除了大量不必要的代码和样式，整体清理和重写
  - 删除了大量自定义图标，改用普通的 obsidian 图标
  - 删除了 `wait()` 调用（promise + settimeout）
- 删除了依赖项：
  - `pickr` - 替换为 obsidian 的原生颜色选择器和一个 alpha 滑块
- 为了保持一致性重命名了命令 id
- 基本上重写了整个插件哈哈
- 在压缩代码中添加了 `"use strict"` 以提高性能

## 支持插件开发

如果您发现这个插件有帮助，请考虑进一步的开发，或者只是说一句小小的感谢
[![liberapay](https://liberapay.com/assets/widgets/donate.svg)](https://liberapay.com/KraXen72) [![kofi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/kraxen72)

## 从 highlightr 迁移

如果您之前使用过 highlightr 插件，您可以通过复制以下方式迁移您的设置：

- `<vault>/.obsidian/plugins/highlightr-plugin/data.json` =>
- `<vault>/.obsidian/plugins/painter/data.json`


然后，禁用并启用 Painter 插件。

确保检查设置已成功迁移，如果是这样，请随意卸载 highlightr。

## 鸣谢

- [Highlightr-Plugin](https://github.com/chetachiezikeuzor/Highlightr-Plugin) 在 [MPLv2](./LICENSE) 许可下发布。支持：[ko-fi](https://ko-fi.com/chetachi)
  - 对大部分原始源代码（大部分已被重写）的贡献
- [Smarter MD Hotkeys](https://github.com/chrisgrieser/obsidian-smarter-md-hotkeys) 在 [MIT](https://github.com/chrisgrieser/obsidian-smarter-md-hotkeys/blob/master/LICENSE) 许可下发布。支持：[ko-fi](https://ko-fi.com/pseudometa)
  - 用于智能文本修改逻辑
这个插件是用来给文本上色/高亮的。
它并不试图提供全面的格式化工具栏/体验。
超出范围：[模态高亮（高亮刷）](https://github.com/chetachiezikeuzor/Highlightr-Plugin/issues/82)
使用这个：[obsidian-editing-toolbar](https://github.com/PKM-er/obsidian-editing-toolbar)



