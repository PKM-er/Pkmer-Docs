---
uid: 20230803203754
title: Obsidian 插件：【Readme】Dialogue
tags: ['编辑器', '界面相关', '美化', 'obsidian插件', 'readme']
description: 利用特定的语法，在 Markdown 中创建对话样式的笔记。
author: Jakub Holub
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dialogue

> [!Note] 插件名片
> - 插件名称：Dialogue
> - 插件作者：Jakub Holub
> - 插件说明：利用特定的语法，在 Markdown 中创建对话样式的笔记。
> - 插件分类：['编辑器', '界面相关', '美化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/holubj/obsidian-dialogue-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dialogue-plugin)

## 概述

利用特定的语法，在 Markdown 中创建对话样式的笔记。

![Dialogue](https://cdn.pkmer.cn/covers/obsidian-dialogue-plugin.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/holubj/obsidian-dialogue-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-dialogue-plugin]] 插件的自述翻译


# Obsidian 对话插件

使用 Markdown 创建对话。

![对话](https://raw.githubusercontent.com/holubj/obsidian-dialogue-plugin/master/images/dialogue.png)

## 参数

可以使用对话框内的命令来设置参数。所有可用的参数列在下表中。

### 可用参数

| 参数               | 描述                                                         | 默认值       |
| ------------------ | ------------------------------------------------------------ | ------------ |
| `left:` 或 `l:`    | 左侧对话参与者的名称。                                       | 无           |
| `right:` 或 `r:`   | 右侧对话参与者的名称。                                       | 无           |
| `titleMode:`       | 定义何时以及如何渲染标题。请参阅下表中的可用模式。             | `first`      |
| `messageMaxWidth:` | 定义对话中的最大消息宽度。                                   | `60%`        |
| `commentMaxWidth:` | 定义对话中的最大评论宽度。                                   | `60%`        |

### 标题模式

| 模式       | 描述                                    |
| ---------- | ---------------------------------------------- |
| `disabled` | 禁用所有标题。                            |
| `first`    | 仅在第一次出现时渲染每个标题。 |
| `all`      | 始终渲染标题。                           |

## 用法

### 简单用法

对话中的消息必须以以下方式前缀：

-   要么 `<`（左侧的消息）
-   要么 `>`（右侧的消息）。

消息必须恰好为一个段落。

#### 示例代码

````

```对话
左：Ingmar Bergman
右：王家卫

< Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tristique nunc, et pharetra sem.
< Nunc id auctor lectus, feugiat aliquet sem.

> Lorem ipsum dolor sit amet
> Ut nec efficitur mauris, a lacinia purus. Fusce nisi arcu, sollicitudin eget sodales sit amet, consectetur a lorem. Nam egestas tristique felis, sed suscipit nunc commodo nec.
```
````

#### 结果

![simple](https://raw.githubusercontent.com/holubj/obsidian-dialogue-plugin/master/images/simple.png)

### 高级参数

上表中列出的所有参数都可以用来自定义对话框。

#### 示例代码

````

```对话
左边: Ingmar Bergman
右边: Wong Kar-wai
标题模式: 全部
消息最大宽度: 40%

< Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tristique nunc, et pharetra sem.
< Nunc id auctor lectus, feugiat aliquet sem.

> Lorem ipsum dolor sit amet
> Ut nec efficitur mauris, a lacinia purus. Fusce nisi arcu, sollicitudin eget sodales sit amet, consectetur a lorem. Nam egestas tristique felis, sed suscipit nunc commodo nec.
```
````

#### 结果

![parameters](https://raw.githubusercontent.com/holubj/obsidian-dialogue-plugin/master/images/parameters.png)

### 对话过程中的参数更改

参数可以在对话过程中进行修改（更改将应用于所有后续的消息）。

#### 示例代码

````

```对话
左：Ingmar Bergman
右：王家卫

< Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tristique nunc, et pharetra sem.
< Nunc id auctor lectus, feugiat aliquet sem.

> Lorem ipsum dolor sit amet
> Ut nec efficitur mauris, a lacinia purus. Fusce nisi arcu, sollicitudin eget sodales sit amet, consectetur a lorem. Nam egestas tristique felis, sed suscipit nunc commodo nec.

左：Sion Sono

< Nulla condimentum orci quis enim iaculis, ut congue turpis semper. Donec mattis elit vitae risus molestie vestibulum.
< In laoreet aliquet neque, eget tempus massa congue ut.
```
````

#### 结果

![parameters2](https://raw.githubusercontent.com/holubj/obsidian-dialogue-plugin/master/images/parameters2.png)

### 带有分隔符的对话

使用`delimiter`（或简写为`-`）命令将分隔符添加到对话中。

#### 示例代码

````

```对话
左：Ingmar Bergman
右：王家卫

< Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tristique nunc, et pharetra sem.
< Nunc id auctor lectus, feugiat aliquet sem.

delimiter

> Lorem ipsum dolor sit amet
> Ut nec efficitur mauris, a lacinia purus. Fusce nisi arcu, sollicitudin eget sodales sit amet, consectetur a lorem. Nam egestas tristique felis, sed suscipit nunc commodo nec.
```
````

#### 结果

![分隔符](https://raw.githubusercontent.com/holubj/obsidian-dialogue-plugin/master/images/delimiter.png)

### 带有注释的对话

注释可以通过`#`前缀添加到对话中（见下面的示例）。注释必须恰好为一个段落。
注释的最大宽度可以使用`commentMaxWidth:`参数进行修改。

```对话
左：Ingmar Bergman
右：Wong Kar-wai

< Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tristique nunc, et pharetra sem.
< Nunc id auctor lectus, feugiat aliquet sem.
```

# Lorem ipsum dolor坐下

> Lorem ipsum dolor坐下

# Vivamus nunc orci, aliquet varius rutrum et, pulvinar vitae nunc. Pellentesque a consequat ipsum.

> Ut nec efficitur mauris, a lacinia purus. Fusce nisi arcu, sollicitudin eget sodales sit amet, consectetur a lorem. Nam egestas tristique felis, sed suscipit nunc commodo nec.
```

#### 结果

![comments](https://raw.githubusercontent.com/holubj/obsidian-dialogue-plugin/master/images/comments.png)

## 消息的自定义样式

消息具有特殊的`data`属性，以允许自定义样式。

每个消息都有：

-   `data-participant-id`属性，其值为唯一的数字id，用于标识相同的对话参与者（按照出现的顺序，从1开始）
-   `data-participant-name`属性，其值为对话参与者的名称

可以在**CSS片段**中使用这些属性，根据消息的作者应用自定义样式。请参考下面的示例。

### 为对话参与者指定自定义id

要为对话中的参与者指定自定义id（例如，如果您希望在多个对话中为所选参与者使用相同的颜色），您可以通过将id附加到参与者定义中来实现（例如`left-2: Name`，其中`2`是您的id）。

### 样式示例

这个示例为前三个独特的对话参与者（按照出现顺序）设置了选定的背景颜色，并且为名为`Sion Sono`的对话参与者设置了一个特定的颜色。

```css
/* 第一个对话参与者的消息将具有#f00的背景颜色 */
.dialogue-plugin-message[data-participant-id="1"] {
	background-color: #f00;
}

/* 第二个对话参与者的消息将具有#0f0的背景颜色 */
.dialogue-plugin-message[data-participant-id="2"] {
	background-color: #0f0;
}

/* 第三个对话参与者的消息将具有#00f的背景颜色 */
.dialogue-plugin-message[data-participant-id="3"] {
	background-color: #00f;
}

/* 名为'Sion Sono'的对话参与者的消息将具有#f0f的背景颜色 */
.dialogue-plugin-message[data-participant-name="Sion Sono"] {
	background-color: #f0f;
}
```

## 表达感谢 🙏

如果你喜欢这个插件并想要支持它的开发，你可以给我买杯咖啡！





