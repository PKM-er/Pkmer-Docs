---
uid: 20230816104618
title: Templater 基本语法格式
tags: [Obsdiain, 插件, Templater, 基本语法格式]
description: Templater插件基本语法格式
author: Brown Bear
type: other
draft: false
editable: false
modified: 20230816110059
---

# Templater 基本语法格式

```html
<% %>
```

中间再填写占位符，参照以下文本

---

# Templater 特殊语法

**自动放入文档名**

```html
<% tp.file.title %>
```

**弹出选项**

```html
<% tp.system.suggester([],[])%>
```

```html
<% tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %>
```

>  前面是展示文本，后面是最终输入的文本，两者可以相等，字符串需要用引号，字符串之间用逗号。这里面也可以放 emoji。
>
>  参见 [[Templater插件两次单选语法|Templater插件两次单选语法]]

**弹出文本框（可输入数值）**

```html
<% tp.system.prompt(" 收款 ") %>
```

**弹出文本框 + 框内提示信息**

```html
<% tp.system.prompt("What is your mood today ?", "happy") %>
```

**自动复制剪贴板内容**

```html
<% tp.system.clipboard() %>
```

**选择一个文件夹并插入一个文档链接**

```html
[[<% (await tp.system.suggester((item) => item.basename, app.vault.getMarkdownFiles().filter(file => file.path.startsWith('0')))).basename %>]]
```

**选择多个文件夹并插入一个文档链接**

```html
[[<% (await tp.system.suggester((item) => item.basename, app.vault.getMarkdownFiles().filter(file => file.path.startsWith('1-') || file.path.startsWith('4-')))).basename %>]]
```

**单选 - 储存变量 - 输出结果**

```html
<%*
const execution_value = await tp.system.suggester(["Yes", "No"], ["true", "no"])
%>
Are you using Execution Commands: <%  tR + execution_value %>
```
