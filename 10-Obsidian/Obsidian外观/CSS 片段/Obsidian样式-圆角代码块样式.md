---
uid: 20240614001229
title: Obsidian 样式 - 圆角代码块
tags: [代码块样式, CSS片段]
description: 参考PinkTopaz主题的圆角代码块样式
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240614001424
---

# Obsidian 样式 - 圆角代码块样式

![2024-06-14_Obsidian样式-圆角代码块](https://cdn.pkmer.cn/images/202406140012532.png!pkmer)

> 本 CSS 片段参考 PinkTopaz 主题的代码块样式

```css
/* !代码块显示长度 */
/* https://forum-zh.obsidian.md/t/topic/27088 */
pre code {
  display: block;
  max-height: 500px;
  overflow-x: hidden;
  /* 添加自动换行 */
  white-space: pre-wrap;
}

/* 隐藏滚动条只在代码块内生效 */
pre code::-webkit-scrollbar {
  display:inherit !important;
}

/*! 以下CSS片段参考PinkTopaz主题的代码块样式 */

/* !代码块按钮设置*/
/*===========================*/
/*copy button for code blocks*/
/*===========================*/
.copy-code-button {
  writing-mode: vertical-rl;
  width: 1.2rem;
  font-size: large !important;
  color: transparent !important;
  border-radius: 0px 5px 5px 0px !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: 0 !important;
  padding: 0px 1px !important;
  position: absolute;
  top: 0 !important;
  bottom: 0px !important;
}

.copy-code-button:hover {
  background-color: #696c6e7c !important;
  color: aliceblue !important;
}

/* Code */
:not(pre)>code[class*="language-"],
pre[class*="language-"] {
  background-color: var(--background-primary-alt);
  /* 代码块 圆角 阴影 */
  border-left: 0.5rem solid slateblue !important;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: rgb(0 0 0/15%) 0px 2px 10px;
}

pre {
  position: relative;
  color: slateblue !important;
  line-height: 20px !important;
}

/* 每个语言单独写 C语言 要写在前面 否则出现覆盖C# C++的问题 */
pre::before{
  position: absolute;
  right: 20px !important;
}

pre[class='language-c']:before {
  content: "C";
}

pre[class='language-py']:before {
  content: "Python";
}

pre[class='language-python']:before {
  content: "Python";
}

pre[class='language-nginx']:before {
  content: "Nginx";
}

pre[class='language-css']:before {
  content: "CSS";
}

pre[class='language-javascript']:before {
  content: "JS";
}

pre[class='language-js']:before {
  content: "JS";
}


pre[class='language-php']:before {
  content: "Php";
}

pre[class='language-shell']:before {
  content: "Shell";
}

pre[class='language-flow']:before {
  content: "Flow";
}

pre[class='language-sequence']:before {
  content: "Sequence";
}

pre[class='language-sql']:before {
  content: "Sql";
}

pre[class='language-yaml']:before {
  content: "Yaml";
}

pre[class='language-ini']:before {
  content: "ini";
}

pre[class='language-xml']:before {
  content: "Xml";
}

pre[class='language-git']:before {
  content: "Git";
}

pre[class='language-cs']:before {
  content: "C#";
}

pre[class='language-cpp']:before {
  content: "C++";
}

pre[class='language-java']:before {
  content: "Java";
}

pre[class='language-html']:before {
  content: "Html";
}

pre[class='language-txt']:before {
  content: "txt";
}
```