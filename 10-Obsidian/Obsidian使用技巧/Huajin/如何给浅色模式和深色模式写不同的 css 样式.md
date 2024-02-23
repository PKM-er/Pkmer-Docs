---
uid: 20240223201104
title: 如何给浅色模式和深色模式写不同的 css 样式
tags: [obsidian, css]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 
---

# 如何给浅色模式和深色模式写不同的 css 样式

在 obsidian 中，我们可以写 css 文件为页面中的元素定制各种样式，那么如何分别给深色模式和浅色模式中设置不同的样式呢

<kbd>ctrl shift i</kbd> 打开开发者模式，在元素的最上方 body 中可以看到有一个类 `.theme-light` 或者 `.theme-dark`。当 obsidian 处于浅色模式下，body 存在前者，处于深色模式下时存在后者。我们可以借助这个区别来编写 css 分别给深色模式和浅色模式中设置不同的样式。

举个例子，写两个选择器分别选中深色和浅色模式，然后给他们添加同一个变量但是给不同的变量值。然后再选择器中使用这个变量，这样，当当前 body 处于浅色模式时，存在 `.theme-light` 类，变量值为 `#2222222`，深色模式同理。

```css
body.theme-dark {
	a-color-variable: #FFFFFF;
}

body.theme-light {
	a-color-variable: #222222;
}

(选择器) {
	background-color: var(--a-color-variable);
}
```

当然，我们也可以直接写成：

```css
body.theme-dark ... {
	background-color: #FFFFFF;
}

body.theme-light ... {
	background-color: #222222;
}
```