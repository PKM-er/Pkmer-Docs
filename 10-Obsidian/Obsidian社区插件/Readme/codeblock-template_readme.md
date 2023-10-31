---
uid: 2023102611073341
title: Obsidian 插件：【Readme】Codeblock Template
tags: ['obsidian插件', 'readme']
description: 一个模板插件，允许在代码块内重复使用内容，并能够使用变量。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Codeblock Template

> [!Note] 插件名片
> - 插件名称：Codeblock Template
> - 插件作者：Super10
> - 插件说明：一个模板插件，允许在代码块内重复使用内容，并能够使用变量。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sylcool/obsidian-codeblock-template)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codeblock-template)

## 概述

一个模板插件，允许在代码块内重复使用内容，并能够使用变量。

![Codeblock Template](https://cdn.pkmer.cn/covers/codeblock-template.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sylcool/obsidian-codeblock-template/master/README.md)
>

---

## Readme(翻译）

下面是 [[codeblock-template]] 插件的自述翻译

# Obsidian-Codeblock-Template

[简体中文](./README.md)|[English](./README_EN.md)

一个可以把 Code Block 的内容在任何笔记中重复利用 Obsidian 模板插件！

- [x] [模板变量](#插值)：可根据传入的变量改变模板内容。 —— 2023 年 6 月 3 日
- [x] [批量匿名变量](#匿名变量)：可传入以 `,` 分隔的多个值，避免为过多变量取名。（类似 CSV 语法） —— 2023 年 6 月 4 日
- [x] [array循环变量](#循环变量)：值为 `[1,2,3,4]` 的 array 类型，可循环显示该行的内容。 —— 2023 年 6 月 12 日
- [x] 输入提示：在需要插入模板的地方输入 `...` 或 **\`\`\`pack-view**，按下空格就可以自动补全完整的模板。 —— 2023 年 6 月 14 日

## 安装

Currently, this plugin has not been uploaded to the Obsidian plugin library and needs to be installed manually.

1. Download `main.js` and `manifest.json` from the **release** latest on the right.
2. Create a new folder named `codeblock-template` in your plugin directory (.obsidian/plugins) and place the main.js and manifest.json files in this folder.

## 使用

### 设置

设置模板存放路径，默认路径为根目录的 `templates`。

![image1](./assets/image1.png)

### Basic Usage

**Create a template**

````markdown
```pack-source a
# 这是包源代码！

```
````

注意：要在设置中 `Template Source Path` 指定的路径下创建才有效。

**使用模板**

````markdown
```pack-view a

```
````

![gif](./assets/image2.gif)

### 插值

可以在创建模板时使用 `$.{}` 来定义变量，在使用时传入变量。

````markdown
```pack-source test1
Hello $.{name}！
```
````

通过 `key = value` 或 `key = "value"` 来定义变量。模板可以重复利用。

**注意：为了方便存储，key 要符合标识符定义规则 [^1]**

````markdown
```pack-view test1
name = "Super10"
```

---

```pack-view test1
name = "Sylcool"
```
````

![image.png](./assets/Snipaste_2023-06-07_12-55-53.png)

#### 匿名变量

匿名变量的前缀支持通过设置自定义，默认是 `anonymous_var_`。

**注意：为了方便存储，key 要符合标识符定义规则**[^1]

定义模板

````markdown
```pack-source test_anonymous
| 1                   | 2                   | 3                   | 4                   | 5                   |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| $.{anonymous_var_0} | $.{anonymous_var_1} | $.{anonymous_var_2} | $.{anonymous_var_3} | $.{anonymous_var_4} |
```
````

使用模板

````markdown
```pack-view test_anonymous
value0,value1,value2,value4,....
```
````

![image-20230604144109428](./assets/image-20230604144109428.png)

#### 循环变量

定义

````markdown
```pack-source test_loop
列表：
1. $.{a}
```
````

使用

````markdown
```pack-view test_loop
a = [A,B,C,D]
```
````

![循环视图](./assets/loop.png)

## Using with other plugins

### 数据视图

`````
````pack-source dv
```dataview
从 "$.{path}" 列表
```
````
`````

### 任务

`````markdown
````pack-source tasks
```tasks
未完成
截止日期为 $.{date} 后
```
````
`````

## 预计开发

- [ ] 读取本地 JSON、CSV 数据

[^1]: 标识符可由三类字符：字母、下划线、数字组成；标识符只能由字母或下划线开头