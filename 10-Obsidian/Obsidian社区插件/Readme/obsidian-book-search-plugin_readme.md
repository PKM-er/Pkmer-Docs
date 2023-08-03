---
uid: 20230803203547
title: Obsidian 插件：【Readme】Book Search
tags: ['obsidian插件', 'readme']
description: 帮助你找书并创建笔记。
author: anpigon
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Book Search

> [!Note] 插件名片
> - 插件名称：Book Search
> - 插件作者：anpigon
> - 插件说明：帮助你找书并创建笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/anpigon/obsidian-book-search-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-book-search-plugin)

## 概述

帮助你找书并创建笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/anpigon/obsidian-book-search-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-book-search-plugin]] 插件的自述翻译


# Obsidian图书搜索插件

![GitHub工作流程状态](https://img.shields.io/github/workflow/status/anpigon/obsidian-book-search-plugin/Release%20Obsidian%20plugin?logo=github)
![GitHub发布（最新的SemVer）](https://img.shields.io/github/v/release/anpigon/obsidian-book-search-plugin?sort=semver)
[![韩语](https://img.shields.io/badge/Language-한국어-blueviolet)](README.ko.md)

轻松创建图书笔记。

<br>

## 更新日志

### [0.5.8](https://github.com/anpigon/obsidian-book-search-plugin/compare/0.5.8-beta.2...0.5.8) (2022-09-13)

### 特点

- 为Google搜索添加了语言选择功能。
- 可以与[模板插件](https://github.com/SilentVoid13/Templater)一起使用。
- 为模板启用了[内联脚本](https://github.com/anpigon/obsidian-book-search-plugin#inline-script)。

## 演示

https://user-images.githubusercontent.com/3969643/184918274-8ad24546-2e01-4288-a855-c8eeb1feca7d.mp4

<br>

## 描述

用于查询图书的信息，可以使用以下方式：

- 书名、作者、出版商或ISBN（10位或13位）进行查询。

使用Google图书API获取图书信息。

<br>

## 安装方法

点击链接安装Book Search插件：[安装链接](https://obsidian.md/plugins?id=obsidian-book-search-plugin)

或者，在Obsidian社区插件中搜索并安装它。

<img width="700" src="https://user-images.githubusercontent.com/3969643/184918934-585375a9-7b25-4905-81c8-5f092ed74991.png">

<br>

如何使用

### 1. 点击带有丝带图标的按钮，或执行“创建新的笔记本”命令。

<img width="600" src="https://user-images.githubusercontent.com/3969643/161973483-ab007598-e0b8-433f-9697-75ee0ef74195.png">

### 2. 通过关键词搜索图书。

<img width="600" src="https://user-images.githubusercontent.com/3969643/161973979-51f642c9-626a-4015-a7e9-dfdbe6ec2cbc.png">

### 3. 从搜索结果中选择图书。

<img width="600" src="https://user-images.githubusercontent.com/3969643/161974310-13c3b39b-51dc-472f-b787-db64f74caf74.png">

### 4. 哇！一个便签已经创建好了。

<img width="600" src="https://user-images.githubusercontent.com/3969643/161974593-1b7bfe69-cb9d-47d7-a43d-1d725295a122.png">

<br>

如何使用设置

<img width="700"  src="https://user-images.githubusercontent.com/3969643/184919550-68eff0e4-2b02-41bb-8f17-30a5354359a3.png">

### 新文件位置

设置新文件创建的文件夹位置。否则，新文件将在Obsidian根文件夹中创建。

### 新文件名

您可以设置文件名的格式。默认格式为`{{title}} - {{author}}`。
您可以使用`{{DATE}}`或`{{DATE:YYYYMMDD}}`来设置唯一的文件名。

### 模板文件

您可以设置模板文件的位置。底部有一个示例模板。

### 服务提供商

您可以设置您用于搜索图书的服务。目前只有谷歌和Naver（네이버）可用。
要使用Naver图书搜索，需要提供clientId和clientSecret。我将在我的博客上解释如何从Naver获取clientId和clientSecret。

### <strike>(已弃用) 插入到前置内容中的文本</strike>

<strike>您可以将以下内容添加到默认的前置内容中，或者创建一个具有您想要的结构的新的前置内容。</strike> 请使用下面描述的模板文件。

### <strike>(已弃用) 插入到内容中的文本</strike>

<strike>您可以向[Dataview内联元数据](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/#pages)的内容中添加文本。</strike> 请使用下面描述的模板文件。

<br>

## 示例模板

请在下面找到此模板中使用的变量的定义（参见：[模板变量定义](#template-variables-definitions)）。

```
---
tag: 📚书籍
title: "{{title}}"
author: [{{author}}]
publisher: {{publisher}}
publish: {{publishDate}}
total: {{totalPage}}
isbn: {{isbn10}} {{isbn13}}
cover: {{coverUrl}}
status: 未读
created: {{DATE:YYYY-MM-DD HH:mm:ss}}
updated: {{DATE:YYYY-MM-DD HH:mm:ss}}
---

![cover|150]({{coverUrl}})
```

# {{title}}

数据视图渲染

<img width="1024" alt="" src="https://user-images.githubusercontent.com/3969643/184546096-82ccaae6-9893-411b-aed6-a72c54f72cb2.png">

这是演示中使用的数据视图查询

````

# 📚 我的书架

```dataview
TABLE WITHOUT ID
	status as 状态,
	rows.file.link as 书籍
FROM  #📚图书
WHERE !contains(file.path, "模板")
GROUP BY 状态
SORT 状态
```

## 所有书籍列表

```dataview
TABLE WITHOUT ID
	status as 状态,
	"![|60](" + cover + ")" as 封面,
	link(file.link, title) as 标题,
	author as 作者,
	join(list(publisher, publish)) as 出版商
FROM #📚Book
WHERE !contains(file.path, "Templates")
SORT status DESC, file.ctime ASC
```

## 模板变量定义

请在此处找到可在您的模板中使用的变量定义。只需在模板中写入`{{name}}`，并将name替换为所需的书籍数据，包括：

| name        | 描述                                                     |
| ----------- | ------------------------------------------------------- |
| title       | 书籍的标题。                                             |
| author      | 书籍作者的姓名。可以是多个人。                           |
| category    | 书籍类别。                                               |
| description | 书籍描述。                                               |
| publisher   | 书籍的出版商。                                           |
| totalPage   | 书籍的总页数。                                           |
| coverUrl    | 书籍封面图片的URL。                                      |
| publishDate | 书籍出版年份。                                           |
| isbn10      | ISBN10                                                  |
| isbn13      | ISBN13                                                  |

<br>

高级

### 内联脚本

#### 打印出一个书籍对象：

````
```json
<%=book%>
```
````

或者

````
```json
<%=JSON.stringify(book, null, 2)%>
```
````

#### 当你想要列出或链接作者时：

```
---
authors: <%=book.authors.map(author=>`\n  - ${author}`).join('')%>
---

authors: <%=book.authors.map(author => `[[${author}]]`).join(', ')%>
```

## 许可证

[Obsidian Book Search Plugin](https://github.com/anpigon/obsidian-book-search-plugin) 使用 GNU AGPLv3 许可证。有关更多信息，请参阅 [LICENSE](https://github.com/SilentVoid13/Templater/blob/master/LICENSE.TXT)。

## 贡献

欢迎贡献。

您可以创建一个[问题](https://github.com/anpigon/obsidian-book-search-plugin/issues)来报告错误，提出对该插件的改进建议，提问等。

您可以创建一个[拉取请求](https://github.com/anpigon/obsidian-book-search-plugin/pulls)来贡献该插件的开发。

<br>

## 支持

如果这个插件对你有帮助，并且你希望做出贡献 :)

在 [buymeacoffee.com/anpigon](https://www.buymeacoffee.com/anpigon) 上给我买杯咖啡

&nbsp;




