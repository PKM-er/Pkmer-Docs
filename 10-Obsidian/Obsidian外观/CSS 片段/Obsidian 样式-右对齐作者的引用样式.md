---
uid: 20240731185020
title: Obsidian 样式：右对齐作者的引用样式
tags: [Obsidian, OB分享, css]
description: 在引用的最下面自适应地居右文本，并添加破折号。
author: Moy
type: other
draft: false
editable: false
modified: 20250116112456
---

# Obsidian 样式：右对齐作者的引用样式

效果预览：

![](https://cdn.pkmer.cn/images/202408062153244.jpg!pkmer)

应用规则：

1. 任何 Callout 样式都支持，只要在原类型边上加上 `|cite` 就可以 （例如原本是 `[!note]` 就写成 `[!note|cite]`）
2. 代表作者的行和前面的内容中间要分开一个空行，这样才能区分出来

书写示例：

```markdown
> [!quote|cite] 正所谓
> 一句名人名言
> 
> 谁说的

```

使用的 css 样式：

```css

/* 引用（最后一行）靠右 */
.callout[data-callout-metadata*="cite"]>.callout-content>p:last-of-type {
    margin-right: 30px;
    text-align: right;
}

/* 并添加引用符号前缀 */
.callout[data-callout-metadata*="cite"]>.callout-content>p:last-of-type::before {
    content: "― ";
}

```

放进 Css Snippets 并应用即可。
