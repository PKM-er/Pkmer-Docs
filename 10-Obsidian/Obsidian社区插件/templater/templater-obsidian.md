---
uid: 20230507013346
title: Obsidian 插件：Templater 可以替代核心模板插件的效率神器
tags: [obsidian, 插件, 模板, 自动化, 效率]
description: Obsidian 插件：Templater, Obsidian的效率神器
author: cuman
type: other
draft: false
editable: false
modified: 20230816105704
---

# Obsidian 插件：Templater 可以替代核心模板插件的效率神器

## 概述

Templater 号称 Obsidian 四大金刚之一 ([[quickadd]],[[dataview]],[[obsidian-excalidraw-plugin]]), 模板插件当之无愧，但因为模板插件用法很极客基本靠命令代码，很多新手只能用别人写好的模板实现自己需求，入坑门槛比较高。注意此模板插件并非 Obsidian 官方自带的核心模板插件。

> [!Note] 插件名片
> - 插件名称：Templater
> - 插件作者：SilentVoid
> - 插件说明：增强模板，你可以通过创建和编辑自定义模板，达到快速创建笔记结构。
> - 插件分类：[' 模板 ', ' 自动化 ', 'obsidian 插件 ']
> - 插件项目地址：[点我访问](https://github.com/SilentVoid13/Templater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?templater-obsidian)
> - 官方文档: [Introduction - Templater (silentvoid13.github.io)](https://silentvoid13.github.io/Templater/)

## 功能介绍

既然称之为 Templater 模板插件，应该是类似 word 模板一样的功能，设置好变量， 然后自动生成带格式和结构的 md 文档。

跟官方的模板插件不同，Templater 插件内置的变量和命令更多。简单总结 templater 主要的功能有

- 通过命令调用模板文件
- 不同文件夹使用不同的模板文件
- 创建新文件时调用模板文件
- 模板中使用 js 脚本
- 模板中调用系统命令

这里的关键就是如何写模板文档，这里就需要参考官方的语法说明文档了。[Introduction - Templater (silentvoid13.github.io)](https://silentvoid13.github.io/Templater/)

## 设置

- Templater 的设置项
![image.png|811](https://cdn.pkmer.cn/images/202305141646579.png!pkmer)
![image.png|811](https://cdn.pkmer.cn/images/202305141648407.png!pkmer)

![image.png|811](https://cdn.pkmer.cn/images/202305141650262.png!pkmer)

## 常用的语法变量

要用好模板，就需要了解下常用的 templater 变量（简称 tp 变量），这些 tp 变量可以理解为模板中的占位符，生成笔记的时候，这些变量就会变成对应的内容。

| 内部变量                  | 参数                                                                                                                                                                                                                                                                          | 功能描述                                                                                               | 代码示例                                                      | 显示效果                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | --------------------------------------------------- |
| `{{tp_title}}`            | 无                                                                                                                                                                                                                                                                            | 取得当前文件的名称                                                                                     | `{{tp_title}}`                                                | `一文掌握Obsidian模板`                              |
| `{{tp_folder}}`           | \- `vault_path`: 取得文本库到当前文件夹的相对路径。取值范围 `true` 或 `false`，默认为 `false`。                                                                                                                                                                                   | 获取当前目录的名称。                                                                                   | 1\. `{{tp_folder}}` 2\. `{{tp_folder:vault_path=true}}`       | 1\. `Obsidian`   2\. `写作/技术类/Obsidian教程` |
| `{{tp_include}}`          | \- `f`: 此为必填项。须指定从文档库开始到某一具体文件的相对路径，将该文件全部内容填充到当前文档中书写有 `{{tp_include:f="location"}}` 的位置。                                                                                                                                    | 将指定文件中全部内容的填入当前文档。指定文件可为另一样章，其中包含的变量也将解析替换（替换深度 `10`）。 | `{{tp_include:f="location"}}`                                 |                                                     |
| `{{tp_date}}`             | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。  <br> \- `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。                                                                                                                                    |       取得今日 + 偏移天数的日期。                                                                                                  |    `{{tp_date:f="ll", offset=7}}`                                                             |                                                     |                                                                                                                                                                                                                                          | `Apr 1, 2021`                                                                                          |                                                               |                                                     |
| `{{tp_yesterday}}`        | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。                                                                                                                                                                                                                   | 取得昨天的日期。                                                                                       | `{{tp_yesterday}}`                                            | `2021-03-24`                                        |
| `{{tp_tomorrow}}`         | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。                                                                                                                                                                                                                   | 取得明天的日期。                                                                                       | `{{tp_tomorrow}}`                                             | `2021-03-26`                                        |
| `{{tp_time}}`             | \- `f`: 指定时间格式化字符串， (缺省格式为: `HH:mm`)。                                                                                                                                                                                                                        | 取得当前时间。                                                                                         | 1\. `{{tp_time}}` 2\. `{{tp_time:f="H:m:s"}}`                 | 1\. `08:36`  2\. `8:36:9`                           |
| `{{tp_creation_date}}`    | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD HH:mm`)。                                                                                                                                                                                                             | 获取当前文档创建时的日期。                                                                             | `{{tp_creation_date}}`                                        | `2021-03-21 13:03`                                  |
| `{{tp_last_modif_date}}`  | \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD HH:mm`)。                                                                                                                                                                                                             | 获取当前文档最后修改的日期。                                                                           | `{{tp_last_modif_date}}`                                      | `2021-03-25 08:36`                                  |
| `{{tp_title_date}}`       | \- `title_f`: 指明适用于文档名称中的日期字符串格式。 (默认格式为: `YYYY-MM-DD`)。此处设置应与核心插件“日记”中指定日期格式化字符串相同。  \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。 \- `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。 | 多用于“日记”。可获取文件名中包含的日期 + 偏移天数。                                                    | `{{tp_title_date:title_f="YYYY-MM-DD_dddd", f="YYYY-MM-DD"}}` | `2021-03-26`                                        |
| `{{tp_title_yesterday}}`  | \- `title_f`: 指明适用于文档名称中的日期字符串格式。 (默认格式为: `YYYY-MM-DD`)。此处设置应与核心插件“日记”中指定日期格式化字符串相同。    \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。                                                                                                                                     |                                                                                                        |                                                                                                                 |\- `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。 | 多用于“日记”。可获取文件名中包含的日期前一天 + 偏移天数。 | `{{tp_title_yesterday:title_f=="YYYY-MM-DD_dddd, f="YYYY-MM-DD"}}` | `2021-03-25` |
| `{{tp_title_tomorrow}}` | \- `title_f`: 指明适用于文档名称中的日期字符串格式。 (默认格式为: `YYYY-MM-DD`)。此处设置应与核心插件“日记”中指定日期格式化字符串相同。  \- `f`: 指定日期格式化字符串， (缺省格式为: `YYYY-MM-DD`)。  \- `offset`: 设置偏移天数，例如设定为 `-7` 时可获得上周日期 (默认值为 `0`)。 | 多用于“日记”。可获取文件名中包含的日期后一天 + 偏移天数。 | `{{tp_title_tomorrow_title:title_f=="YYYY-MM-DD_dddd, f="YYYY-MM-DD"}}` | `2021-03-27` |
| `{{tp_daily_quote}}` | 无 |  提供的 API 取得每日名言摘引。 | `{{tp_daily_quote}}` |  |
| `{{tp_random_picture}}` | \- `size`: 以如下方式设置图片尺寸 `<宽>x<高>`(默认值为: `1600x900`).
\- `query`: 输入一个关键字用于限定选定图片的范围。如需使用多个关键字，彼此之间需要以英文半角 `,` 加以间隔。此时，还有另一注意事项：需使用英文双引号 `"` 用以在两端定界。(默认值为: 没有搜索关键字) | 基于搜索关键字从 unsplash.com 获取一张随机图片。 | `{{tp_random_picture:size="800x600", query="beijing"}}` |  |
| `{{tp_title_picture}}` | \- `size`: 以如下方式设置图片尺寸 `<宽>x<高>`(默认值为: `1600x900`). | 基于笔记标题从 unsplash.com 获取一张随机图片。 | `{{tp_title_picture:size="800x600"}}` |  |
| `{{tp_cursor}}` | 无 | 将当前位置设定为套壳样章后游标的操作位置。 | `{{tp_cursor}}` |  |

## 常用模板举例

新建文件，弹出输入文件名称，自动填充常见 yaml 的模板

把下面代码内容保存成 md 文件 放到 template 的模板目录，比如 `88-template` 随便起个名称，这里命名为 `tp-通用模板.md`

```md
---
UID: 20230819231847 
aliases: 
tags: 
source: 
cssclass: 
created: 2023-08-19
---

## ✍内容

```

在 tp 插件的 文件夹模板中 如果需要在库根目录创建文件就启用模板，这里选择 `/` 然后找到刚才保存 `tp-通用模板.md` 的文件

![image.png](https://cdn.pkmer.cn/images/202305141711170.png!pkmer)

这样新建文件的时候 就会调用这个模板效果如下：

![templater.gif](https://cdn.pkmer.cn/images/202305141719847.gif!pkmer)

## 社区使用技巧

- [[Templater实现关键词自动化套用模板]]：铅笔小明分享的通过关键词自动化套用模板
- [[Templater插件基本语法格式]]
- [[Templater插件两次单选语法]]]