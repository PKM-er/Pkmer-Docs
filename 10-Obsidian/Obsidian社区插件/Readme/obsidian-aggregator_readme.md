---
uid: 20230803203417
title: Obsidian 插件：【Readme】Aggregator
tags: ['obsidian插件', 'readme']
description: 这个插件可以帮助你从文件中收集信息，并在文件中做出总结。
author: SErAphLi
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Aggregator

> [!Note] 插件名片
> - 插件名称：Aggregator
> - 插件作者：SErAphLi
> - 插件说明：这个插件可以帮助你从文件中收集信息，并在文件中做出总结。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Seraphli/obsidian-aggregator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-aggregator)

## 概述

这个插件可以帮助你从文件中收集信息，并在文件中做出总结。

![Aggregator](https://cdn.pkmer.cn/covers/obsidian-aggregator.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Seraphli/obsidian-aggregator/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-aggregator]] 插件的自述翻译


# Obsidian聚合器

该插件帮助您从文件中收集信息，并在文件中进行总结。

虽然编写正则表达式很困难，但一旦完成，它将对您非常有帮助。

## 预览

带有标签的块集合。[示例1](docs/Example1.md)

![示例1预览](docs/example1-preview.png)

带有标签的注释块集合。[示例2](docs/Example2.md)

![示例2预览](docs/example2-preview.png)

从具有自定义辅助程序支持的文件夹生成的统计表。[示例3](docs/Example3.md)

![示例3预览](docs/example3-preview.png)

## 用法

创建一个像这样的代码块，并将语言设置为`aggregator`。然后，该插件将根据正则表达式查找内容，并使用模板渲染结果。

````aggregator
scope:
    - 当前文件
matches:
    - regex: '>%%\n>```annotation-json\n>.*\n>```\n>%%\n>\*%%PREFIX%%.*\n>%%LINK%%.*\n>%%COMMENT%%\n>.*\n>%%TAGS%%\n>\#[a-zA-Z0-9\_]+\n\^[a-zA-Z0-9]*'
      template: '{{{result.match.[0]}}}'
````

如果您想对结果进行排序，可以像这样指定字段和顺序。

````aggregator
scope:
    - 当前文件
    - 论文
matches:
    - regex: '^\w[^\#]*\#[a-zA-Z0-9\_]+\s*$'
      template: '{{{result.match.[0]}}}'
    - regex: '>%%\n>```annotation-json\n>.*\n>```\n>%%\n>\*%%PREFIX%%.*\n>%%LINK%%.*\n>%%COMMENT%%\n>.*\n>%%TAGS%%\n>\#[a-zA-Z0-9\_]+\n\^[a-zA-Z0-9]*'
      template: '{{{result.match.[0]}}}'
order:
    fields: filename, line
    orders: asc, asc
````

参数解释

请查看[Arguments.md](docs/Arguments.md)。

示例用法

查看[文档](docs/)以获取详细示例。

## 设置

请注意，默认的连接字符串不是空的。只是文本区域无法显示`\n\n`。

`文件指示器`是一个Handlebars模板。可用的数据有：文件：`TFile`，索引：从1开始的数字。

## 参见

[obsidian-link-embed](https://github.com/Seraphli/obsidian-link-embed)

## 感谢

-   [tag-summary](https://github.com/macrojd/tag-summary)
-   [tracker](https://github.com/pyrochlore/obsidian-tracker)



