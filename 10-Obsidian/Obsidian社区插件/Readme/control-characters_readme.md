---
uid: 20230816192922
title: Obsidian 插件：Control Characters 像 Word 一样显示隐藏的标点符号
tags: ['obsidian插件', '格式化排版', 'word']
description: 在编辑模式下显示控制/不可打印字符
author: AI
type: readme
draft: false
editable: false
modified: 20230831201044
---

# Obsidian 插件：Control Characters 像 Word 一样显示隐藏的标点符号

> [!Note] 插件名片
> - 插件名称：Control Characters
> - 插件作者：Johannes Theiner
> - 插件说明：在编辑模式下显示控制/不可打印字符
> - 插件分类：['obsidian 插件 ', ' 格式化排版 ', 'word']
> - 项目地址：[点我访问](https://github.com/joethei/obsidian-control-characters)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?control-characters)

## 存在部分问题以及修改

可以帮助 Obsidian 像 Word 一样显示这些符号显示隐藏的标点符号，包括换行符和空格等，不过该插件最近的一次更新时一年前了，对新版本的 Obsidian 支持不够完善，部分功能可能存在问题：

> [!note]+ 官方介绍文档与实际的显示效果
> ![[Pasted image 20230831200617.png]]

可以调整插件的样式或添加其他字符的显示，可以参考下面提供的 CSS Snippets 进行修改。

```css
/* 可更改颜色，也可以默认插件的颜色 */
body {
  --control-character-color: silver !important;
}

/* 取消显示字后的换行符号 */
.control-character[type="newline"]:after {
  content: none;
}

/* 显示换行符号 */
.cm-line:not(.HyperMD-header):has(> br)::before {
  content: "⮐";
  margin-left: -1rem;
  color: var(--control-character-color);
}
```

![[Pasted image 20230831200912.png]]

---

## Readme(翻译）

下面是 [[control-characters]] 插件的自述翻译

# 控制字符

在编辑模式下显示控制字符。

![演示截图](https://i.joethei.space/Obsidian_136foBrkZM.png)

## 仅在选择中显示字符

默认情况下，插件会在笔记中显示所有字符。

但是您可以配置它仅在选择文本时显示控制字符。

您还可以在前言中使用 `cc-selection` 键覆盖此行为。

## 覆盖笔记的设置

您还可以通过使用 [Frontmatter](https://help.obsidian.md/Advanced+topics/YAML+front+matter) 更改单个笔记的设置。

例如，以下笔记将只包含新的换行符。

```yaml
---
cc: true
cc-tab: false
cc-newline: true
cc-space: false
---
Quo usque tandem abutere, Catilina, patientia nostra?

Lorem ipsum dolor sit amet, consectetur adipisici elit.
```

## 自定义

您可以使用 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 插件自定义大部分样式。

---

此插件适用于新的编辑器，不适用于旧的 _legacy_ 编辑器。

如果您真的想使用旧的编辑器，您将需要使用 [Show whitespace](https://github.com/deathau/cm-show-whitespace-obsidian) 插件。

---

感谢 [@nothingislost](https://github.com/nothingislost) 提供的所有参考插件。
