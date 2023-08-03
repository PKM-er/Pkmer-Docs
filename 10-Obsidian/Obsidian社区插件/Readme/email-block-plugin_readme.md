---
uid: 20230803231105
title: Obsidian 插件：Email Block
tags: ['美化', '第三方工具集成', '编辑器', '效率', 'obsidian插件', 'readme']
description: 通过特定的代码域语法，可以在 Obdidian 内显示一个建议电子邮件样式。（语法：to，subjuect，body， CC等）
author: AI
type: readme
draft: false
editable: false
modified: 20230803232601
---

# Obsidian 插件：Email Block

> [!Note] 插件名片
> - 插件名称：Email Block
> - 插件作者：joleaf
> - 插件说明：通过特定的代码域语法，可以在 Obdidian 内显示一个建议电子邮件样式。（语法：to，subjuect，body， CC 等）
> - 插件分类：[' 美化 ', ' 第三方工具集成 ', ' 编辑器 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joleaf/obsidian-email-block-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?email-block-plugin)

## 概述

通过特定的代码域语法，可以在 Obdidian 内显示一个建议电子邮件样式。（语法：to，subjuect，body， CC 等）

![Email Block](https://cdn.pkmer.cn/covers/email-block-plugin.GIF!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joleaf/obsidian-email-block-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[email-block-plugin]] 插件的自述翻译

# Obsidian 邮件块插件 [![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/joleaf/obsidian-email-block-plugin)](https://github.com/joleaf/obsidian-email-block-plugin/releases) [![Release Obsidian Plugin](https://github.com/joleaf/obsidian-email-block-plugin/actions/workflows/release.yml/badge.svg)](https://github.com/joleaf/obsidian-email-block-plugin/actions/workflows/release.yml) ![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%238b6cef&label=downloads&query=%24%5B%22email-block-plugin%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

该插件允许您在 [Obsidian](https://www.obsidian.md) 笔记中编写小型电子邮件。

安装。。

### .. 在 Obsidian 中自动化

1. 在 Obsidian 设置中转到**社区插件**并**禁用**安全模式
2. 点击**浏览**并搜索“Email Block”
3. 点击安装
4. 在**社区插件**选项卡中切换插件开启状态

### .. 从此存储库手动操作

1. 下载最新的 [发布版本](https://github.com/joleaf/obsidian-email-block-plugin/releases) 的 `*.zip` 文件。
2. 将 zip 文件解压到您的 Obsidian 保险库的 `.obsidian/plugins` 文件夹中。

## 如何使用

将 "email" 代码块添加到您的笔记中：

... 使用纯文本作为正文内容：

````
```email
to: info@randommail.com
subject: My Subject
body: "Hey info,

  here is some content"
```
````

... 使用引用的笔记作为正文内容：

````
```email
to: info@randommail.com
subject: My Subject
body: [[MyMail4711]]
variables:
  myvar: TestVar
```
````

您可以使用 `variables` 参数将正文文本中的占位符替换为变量值。

要在正文文本中包含变量，只需添加一个占位符 `{{myvar}}`。

也可以使用 frontmatter 数据中的变量。

... 在 yaml 之后添加正文文本：

````
```email
to: info@randommail.com
subject: Hello World
---
Hi there,
this is my new body
Best!
JB
```
````

### 参数

您可以使用以下参数自定义视图：

| 参数        | 描述                                                         | 值                          |
|------------|-------------------------------------------------------------|----------------------------|
| to         | 邮件的主要接收者。多个接收者用逗号分隔。                          | 字符串值                     |
| cc         | 邮件的抄送接收者。多个接收者用逗号分隔。                          | 字符串值                     |
| bcc        | 邮件的密送接收者。多个接收者用逗号分隔。                          | 字符串值                     |
| subject    | 邮件的主题。                                                   | 字符串值                     |
| body       | 邮件的正文。可以是纯文本或指向一个\[\[NoteFile\]\]（x）的链接。   | 字符串值                     |
| showmailto | 在邮件正文后显示“mailto”链接。                                    | true/false（默认值：true）   |
| variables  | 占位符变量的映射。                                              | YAML 对象                    |
| from       | 发件人字段（仅用于文档）。                                       | 字符串值                     |

x）请注意，不支持任何格式化（仅支持换行）（[原因](https://stackoverflow.com/questions/5620324/mailto-link-with-html-body)）。

### 示例

![示例](example/email-block-plugin.gif)

## 如何进行开发

1. 将此存储库克隆到（非生产）Vault 的插件文件夹中（`.obsidian/plugins/`）
2. 运行 `npm i`
3. 运行 `npm run dev`
4. 在**社区插件**选项卡中启用插件的切换按钮

捐赠

<a href='https://ko-fi.com/joleaf' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='在ko-fi.com给我买杯咖啡' />
