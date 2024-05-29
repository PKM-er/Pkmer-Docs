---
uid: 20240406172825
title: Obsidian Shiki Plugin
tags: [obsidian, code]
description: 为超过100种语言提供更好的语法高亮显示等一系列功能
author: Huajin
type: other
draft: false
editable: false
modified: 20240406172825
---

# Obsidian Shiki Plugin

> [!Note] 插件名片
>
> - 插件名称：Shiki Highlighter
> - 插件版本：0.3.0
> - 插件作者：Moritz Jung
> - 插件描述：让当前内容的标题始终处于页面上方
> - 插件项目地址：[点我跳转](https://github.com/imshenshen/obsidian-sticky-heading)

这个插件通过 Expressive Code 将 shiki 集成到 Obsidian 中，为超过 100 种语言提供更好的语法高亮显示。

这个插件在阅读，实时预览和编辑模式下能正常使用。

## 功能展示

添加带有行号、自定义标题、行突出显示

![image.png](https://cdn.pkmer.cn/images/20240406173058.png!pkmer)

## 对比 ob 默认渲染

默认渲染结果

![image.png](https://cdn.pkmer.cn/images/20240406173235.png!pkmer)

shiki 插件渲染

![image.png](https://cdn.pkmer.cn/images/20240406173247.png!pkmer)

## 使用方法

**基本结构**

````示例代码
```语言 配置
代码内容
```
````

### **添加行号 showLineNumbers**

````示例代码
```python showLineNumbers
代码内容
```
````

### **自定义标题 title="..."**

````示例代码
```python title="a-title-for-this-code-block"
代码内容
```
````

**特定行高亮**

有两种方式，对特定行高亮（行号），或者对某个范围的行高亮（用短线连接），中间用逗号分隔。

````示例代码
```python {1, 5-10}
代码内容
```
````

### Diff 高亮

像 GitHub 那样分别为新增内容添加绿色高亮（用 ins={}），为删除行添加红色高亮（用 del={}）

````示例代码
```python ins={1} del={5-10}
代码内容
```
````