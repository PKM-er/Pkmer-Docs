---
uid: 20230430235610
title: supercharged-links-obsidian
description: 
author: cuman
type: other
draft: false
editable: false
modified: 20230504234029
---

# supercharged-links-obsidian

> [!Note] 插件名片
> - 插件名称：Supercharged Links
> - 插件作者：mdelobelle
> - 插件说明：可帮助您根据笔记元数据（例如标签或 YAML 前言属性）设置保管库中链接的样式。可以自动向链接添加颜色、表情符号或其他样式，使其更醒目的进行导航。
> - 插件项目地址：[点我访问](https://github.com/mdelobelle/obsidian_supercharged_links)

## 概述

这个插件可以自定义对笔记链接引用时的格式，通过在被引用的笔记头部添加 FrontMatter 元数据信息，在引用这个笔记时，插件会把这些键值信息解析后，添加至内容链接 HTML 元素的属性区。这样就可以让链接显示不同的效果。

## 特性

例如，当您的笔记代表某物时，例如一篇论文、一个地点、一个人或一周中的一天。然后，可以使用 Supercharged 链接使这些注释脱颖而出。另一个用例可能是为带有 `#todo` 标签的注释添加醒目的颜色。

这种视觉反馈可以帮助您快速找到正确的笔记

借助 [[obsidian-style-settings]] ，可以对 Supercharged 进行样式设计。

## 入门

假设我有一个关于 Jim 的笔记，名为“Jim.md”，并包含标签“#person”。

 ```MD
---
status: 经常联系
age: 42
---

Jim 是我的同事，负责技术开发相关的工作。

#person

```

如果其他笔记引用了 Jim 笔记，可以通过插件设置 Jim 链接的样式，比如可以在链接前加个电话的表情符号<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/phone-jim.png" style="height:30px;vertical-align:bottom">.，并给链接加一个蓝色背景色。

### 插件设置

如果需要把 yaml 中包含 `status :经常联系` 的笔记设置一个特别的样式

首先，需要在顶部的“Target Attributes for Styling”选项中设置插件要为您的样式包含哪些 yaml 字段。我们这里填写 status

![image.png](https://cdn.pkmer.cn/images/202305020905351.png)

然后 在 new selecter 中设置 `attribute value` 并指向 status 这个属性名称

![image.png](https://cdn.pkmer.cn/images/202305020908307.png)

通过 [[obsidian-style-settings]] 插件就可以发现针对这个属性的样式设置，比如这里增加一个表情符号

![image.png](https://cdn.pkmer.cn/images/202305020910240.png)

然后就发现这个笔记名称前面已经多了一个表情符号，可以更醒目的识别这个笔记。

![image.png](https://cdn.pkmer.cn/images/202305020912386.png)

同样道理，可以对包含某个标签的笔记进行样式设计比如查找带有“#person”标签的笔记。

在设置中的样式标题下，创建一个新的选择器。在选择器类型下，选择“标签”，然后在下方添加“人”:

 ![image.png](https://cdn.pkmer.cn/images/202305020914769.png)

 然后通过 style setting 就可以对这个标签进行设置，比如设置背景色和添加一个电话符号

![image.png](https://cdn.pkmer.cn/images/202305020914497.png)

## 高级使用

虽然样式设置集成提供了大量可自定义选项，但如果您熟悉 CSS 和 HTML，则可以进一步设置链接样式。

假设我在某处有一些指向 `[[Jim]]` 的链接。

如果没有激活插件，HTML 链接元素通常如下所示:

```
<a data-href="Jim" href="Jim" class="internal-link" target="_blank" rel="noopener">Jim</a>
 ```

这不会提供有关 Jim.md 注释中内容的任何信息!因此，我们将无法自定义它。

这就是这个插件的用武之地: 它将在 `<a>` 元素中添加两个额外的属性:`data-link-status` 和 `data-link-tags`。 **重要的是**，这些属性都带有 `data-link` 前缀，这样就不会和 Obsidian 中的其他属性冲突。

激活插件后， `</a> <a>` 元素会被渲染成这种 html 格式:

 ```
</a> <a data-href="Jim" href="Jim" class="internal-link data-link-text data-link-icon data-link-icon-after" target="_blank" rel="noopener" data-link-status="call soon" data-link-tags="#person" >吉姆</a>
```

### 使用 CSS 设计您的链接

比如创建一个 link.css 片段，内容如下

#### 示例 CSS 片段

比如要根据文件中的 topic 标签更改笔记链接的每个外观的颜色:

 ```CSS
[data-link-tags*="#topic" i]{
    color: #ff6600 !important;
}
```

这将针对所有包含 `data-link-tags` 属性的 HTML 元素，即所有增压链接。

比如要对 yaml 字段中包含 `category: people` 属性的笔记前面增加一个表情，可以这样写 css 片段

 ```CSS
.data-link-icon[data-link-category$="People" i]::before{
    content: "👤 "
}
``` 

![image.png](https://cdn.pkmer.cn/images/202305020934915.png)

当笔记包含 `status` 属性 时，可以用类似标签的蓝色圆角矩形突出显示链接:

 ```CSS
:not(:empty)[data-link-next-status] {
    color: white;
    background-color: rgb(29， 29， 129);
    border-radius: 18px;
    padding: 5px 15px;
}
 ``` 

![image.png](https://cdn.pkmer.cn/images/202305020933246.png)

如果要鼠标悬停时显示所有 `status` 属性的值:

 ```CSS
.data-link-icon-after[data-link-status]:hover::after{
    content: " ► "attr(data-link-status)
}
 ``` 

![image.png](https://cdn.pkmer.cn/images/202305020933239.png)

如果对包含 #hide 链接的笔记进行隐藏:

 ```CSS
a.internal-link[data-link-tags *="hide"]，
.cm-hmd-internal-link > [data-link-tags *="hide"]{
    visibility: hidden !important;
    display: none;
}

 ```

## 插件的兼容性

核心插件

- Backlinks (including Backlinks in edit mode)
- Outgoing links
- Search
- Starred files
- Quick Switcher

社区插件：

- Breadcrumbs
- Graph Analysis
- Recent files
- Quicker Switcher++
- Another Quick Switcher
- Dataview (inline fields) 
- Omnisearch


