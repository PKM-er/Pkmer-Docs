---
uid: 20230703100306
title: Obsidian 样式：段落首行增加缩进
tags: [Obsidian, 样式, CSS, 段落首行缩进]
description: Obsidian 样式：段落首行增加缩进
author: OS
type: other
draft: false
editable: false
modified: 20230703144059
---

# Obsidian 样式：段落首行增加缩进

## 引言

自小陪伴我们的首行缩进，是一个很多人的书写阅读习惯。虽然随着新网络媒体盛行，似乎顶格布局成为了时下流行的方式。时代在发展，现在电子书、网络媒体盛行，越来越多的网站通过采用增加段间距的方式来进行段落之间的区分，摒弃锻炼首行缩进，尤其是你看到了微信和一些软件方面的新媒体，从美学上来说不符合对齐的规则，一些纸媒也开始尝试用增加段间距的方式来替代首行缩进。

> [!Tip] 渊源
> **起源**
> 其实段落首行缩进属于文字排版的范畴，最早来源于西方。白话文运动让国人认为文字排列方式是造成中国落后的原因的深信不疑，所以就采用了西方人的从左往右，从上往下的书写方式，在排版上也参考了西方的排版方式。在西方文字中有句首大写的习惯，因此大部分时候行首顶格也很容易分辨是新起一段，而中文没有大小写这种样式，不能如此表现。另，中文印刷行间距和段间距是相同的，为了段落之间的区分更加明显，采用 首行缩进 的方式来显示是比较有效的。
> **标准与规定**
> 「自然段首左空 2 字」，应是受国家对行政公文的规范影响。在 GB/T9704-1999《国家行政机关公文格式]》中就有相关规定对公文正文规定如下：每自然段左空 2 字，回行顶格。数字、年份不能回行。这个规定也是我们从小被教育，用来排版的规范。

## 使用

- 当然你可以使用一些插件来完成首行缩进的控制，比如 [obsidian-heading-level-indent: obsidian plugin for indenting content under headers based on their level](https://github.com/svonjoi/obsidian-heading-level-indent)
- 通过 CSS 方式建议实现，如何使用自定义片段，可以参考 [[Obsidian的CSS代码片段]]
	- 效果（支持实时编辑和阅读模式）
![image.png|856](https://cdn.pkmer.cn/images/20230703115909.png!pkmer)

```css
div.cm-line:not(.HyperMD-header) {
	text-indent: 2em;
}
.markdown-preview-view div p {
	text-indent: 2em;
}
```

## 扩展

上述片段只针对文章内容简单的情况。如果包含代码块，banner 或者 frontmatter 时，会发现这些内容也被缩进了。

如果有多个段落，这些段落在编辑模式需要用空行分割，这样阅读模式下才会识别会段落。

如果编辑模式下没有空行分割还想在阅读模式下正确分割段落，就需要用到 [[obsidian-contextual-typography]] 插件，并配合下面的 css 即可

PS:Blue Topaz 主题在 style setting 2.2.4 内置了段落首行缩进的设置，下面提取出来作为单独片段。

```css

.markdown-source-view.mod-cm6 div.cm-line:not(.HyperMD-header) {
  text-indent: 2em;
}

.markdown-source-view.mod-cm6 div.cm-line:not(.HyperMD-header) .cm-hmd-frontmatter:first-of-type
 {
  margin-left: -2em;
}
.markdown-source-view.mod-cm6 div.has-banner.cm-line:not(.HyperMD-header) .cm-def.cm-hmd-frontmatter,
.markdown-source-view.mod-cm6 div.has-banner.cm-line:not(.HyperMD-header) .collapse-indicator {
  margin-left: 0;
  left: -3em;
}

[data-type="markdown"] div[class="el-p"]:not(blockquote) > p{
  text-indent: 2em;
}


[data-type="markdown"] div[class="el-p"]:not(blockquote) > p>br {
  content: ' ';
  white-space: pre;
  line-height: calc((var(--paragraph-spacing) + 0.3)*1em);
  display:unset;
}
[data-type="markdown"] div[class="el-p"]:not(blockquote) > p>br::after {
   content: '\A\9\A0\A0';
}

```