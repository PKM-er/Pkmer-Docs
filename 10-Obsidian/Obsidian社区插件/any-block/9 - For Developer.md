---
uid: 20230811091916
title: AnyBlock 插件系列教程之 --9.插件接入二次开发
tags: [obsidian, 教程, anybock]
description: 
author: LincZero
type: other
draft: false
editable: false
modified: 20230811094657
---

# AnyBlock 插件系列教程之 --9.插件接入二次开发（文档编写中）

因为 AnyBlock 做了一件 Obsidian 标准接口里没有提供的功能 ———— 真正地将 “特殊语法” 从块里释放了出来。

得益于 OB 接口允许插件之间的通信，其他开发者如果想要将使用一种类似的功能，可以接入 AB 插件进行快速开发。

为了方便接入二次开发，这里

如果你并非程序员，也可以看一下第一节（Tree-Level）的内容，会让你对插件的设计和使用更加熟悉。

## Tree-Level

注意：这里的 level 数越小，代表父层次越高，level 表示的其实是 `indent-level` 。并且这里允许 level 为非正数或非整数

tree-level

[2table]

- list 的 level | `-` 前的空格数量 +1（范围\[1,n]）
- 位于根部正文的 level | 0 （哪怕缩进，但注意列表下的缩进会被视为列表项）
- 负级列表的 level（实验功能） | `<` 的数量的负数（范围 \[-3,-1]）
- 标题的 level | `#` 的数量减去十（范围 \[-9,-4]）
- 特殊规则 - QA 层的 level | 0.5

此外，

列表选择器只会选择列表层级。

负列表选择器能选择负列表、正文、列表层级。

而标题或首尾选择器能选择全部的标题、负列表、正文、列表层级。

# 接口

## 注册新的处理器

<< 这是一种类似于 `registerMarkdownPostProcessor()` 的方法，主要区别：

1. 要处理的文本不会局限于代码块中，而是基于 `Range`。
   `Range` 可以通过各种局部或全局选择器进行选择，它会告诉你你要处理的是哪一部分的文本内容，你也可以在设置中打开 `线装饰` 功能，来查看被选择的文本范围。
   然后，你可以使用新的注册器对该区域进行处理。
2. 该新的注册器还允许你使用正则等方式去匹配识别符
3. 你可以注册两种处理器：文本处理器和渲染处理器
   文本处理器可以叠加多个，渲染处理器之后不能再使用处理器

## 处理器接口

接口（v1.2 旧版）

```js
function registerABProcessor(sim: ABProcessorSpecSimp);

/** ab处理器接口 - 语法糖版 */
interface ABProcessorSpecSimp{
  id: string            // 唯一标识
  name: string          // 处理器名字
  match?: RegExp|string // 处理器匹配正则（不填则为id，而不是name！name可以被翻译或是重复的）
  detail?: string       // 处理器描述
  is_render?: boolean   // 是否渲染处理器，默认为true。false则为文本处理器
  process: (el:HTMLDivElement, header:string, content:string)=> HTMLElement|string
                        // 处理器
}
```

v1.3 调整：扩展了处理器类型，以前仅支持文本处理器/渲染处理器两种，现在支持：

- 文本处理器| 文本 ->文本
- 文本渲染器| 文本 ->界面
- 渲染修饰器| 界面 ->界面（一般通过被包含到一个 div 实现）
- 文本解析器| 文本 ->数据（现在只有列表解析器一种）
- 数据转化器| 数据 ->数据
- 数据渲染器| 数据 ->界面

我用个树形来解释

[list2mermaid]

- 文本| 文本| 界面
- 文本
	- 数据 1| 数据 1| 界面
	- 数据 2| 数据 2| 界面
	- 数据 3| 数据 3| 界面
- 界面| 界面

所以，新版接口为

```js
function registerABProcessor(sim: ABProcessorSpecSimp);

/** ab处理器接口 - 语法糖版 */
interface ABProcessorSpecSimp{
  id: string            // 唯一标识
  name: string          // 处理器名字
  match?: RegExp|string // 处理器匹配正则（不填则为id，而不是name！name可以被翻译或是重复的）
  detail?: string       // 处理器描述
  // type_from: TypeProcessorData   // （自动识别）处理器输入类型
  // type_to: TypeProcessorData     // （自动识别）处理器输出类型
  is_show: boolean      // 是否在推荐栏进行推荐（若否，则只能通过查表发现该处理器）
  process: (el:HTMLDivElement, header:string, content:string)=> HTMLElement|string
                        // 处理器
}
```

只有当两个处理器的 from-to 接口相匹配时，才能串联他们

你可能会看到的常见数据：List_TableItem、List_ListItem、Tree

### 树格式

知识前置：[Tree-Level](#Tree-Level)

AB 插件会自动将局部的列表选择器或全局选择器里的大纲，转化为树形格式

（用列表格式存储，相较于抽象语法树 AST 更类似于 md-it 的 Tokens，但语法会简单得多）

有多种不同格式的树，根据 content 的类型来判断

```typescript
{
    level:number,
    content: str|Dom|Chat|any
}[]
```

你可以直接使用这个树形格式快速开发

### 处理器冲突问题

同种范围管理器的处理器，由于存在注册的先后问题并不会冲突。

不同范围管理器，则可能进行冲突。

如果他们的范围是真包含关系，范围更大的有可能影响范围更小的，也可能不影响（例如大范围的使用 md 方式）。

如果他们的范围是交错关系，则可能会产生 bug。

一般而言不会发生后者这种情况，除非使用自由度较高的首尾范围选择器，这也是为什么我会说要谨慎使用首尾范围选择器，最好能用标题选择器来代替之

## 范围选择器

有两个范围选择器：Md 范围选择器、HTML 范围选择器

Md 范围选择器接口：

```typescript
export interface MdSelectorSpec {
  from: number,     // 替换范围
  to: number,       // .
  header: string,   // 头不是信息
  selector: string, // 范围选择方式
  content: string   // 内容信息
}
```

HTML 范围选择器接口：

```typescript
{

}


sub_el, mdSrc.header, mdSrc.content
```

# 一些内部处理器

这些内部处理器对于

# （beta）生命周期

# （beta）用到的一些工具

Obsidian、CodeMirror、Mermaid 自不用多提。

Doxygen 是一个可以根据代码注释生成文档的工具，支持 HTML、CHM、[LaTex](https://so.csdn.net/so/search?q=LaTex&spm=1001.2101.3001.7020) 等格式。主要支持 C 语言、Python 语言，还支持 C++、Java、C#等语言。
