---
uid: 2023080322234435
title: Obsidian 插件：Obsidian Stylist
tags: ['obsidian插件', 'readme']
description: Obsidian插件，允许在markdown块中添加类和样式
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Stylist

> [!Note] 插件名片
> - 插件名称：Obsidian Stylist
> - 插件作者：ixth
> - 插件说明：Obsidian 插件，允许在 markdown 块中添加类和样式
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ixth/obsidian-stylist)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-stylist)

## 概述

Obsidian 插件，允许在 markdown 块中添加类和样式

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ixth/obsidian-stylist/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-stylist]] 插件的自述翻译

# Obsidian Stylist

*Stylist* 是 Obsidian 的一个插件，允许在 Markdown 上添加类和样式。

> **注意**
> 此插件在实时预览模式下不起作用。

例如，如果您想在特定页面上为标题添加下划线，可以像这样操作：

````markdown
```style
h2 {
    text-decoration: underline;
}
```

木材在水中会沉没吗？

````

结果：

![Style tag render](./style-dark.png#gh-dark-mode-only)

![Style tag render](./style-light.png#gh-light-mode-only)

> **注意**
> 所有样式都经过处理，以防止破坏 Obsidian 应用程序的其余部分。

或者，如果您希望页面上的某些块使用多列布局，您只需在包含块上添加类：

````markdown
```style
.multicol-3 ul {
    columns: 3;
}
```

还有什么能在水中漂浮的？

%% 类将被添加到部分容器中，而不是列表元素本身，因此您应该相应地编写样式 %%

`classname:multicol-3`

* 面包
* 苹果
* 非常小的岩石
* 苹果酒
* 葡萄酱
* 樱桃
* 妈妈
* 教堂
* 铅
* 一只鸭子
````

结果：

![Class render](./class-dark.png#gh-dark-mode-only)

![Class render](./class-light.png#gh-light-mode-only)
