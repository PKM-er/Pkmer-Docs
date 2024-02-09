---
uid: 2023120719423929
title: Obsidian 插件：【Readme】Share to NotionNext
tags: ['obsidian插件', 'readme']
description: 使用Notion API将文件共享到Notion，用于NotionNext网页部署，最初由EasyChris/obsidian-to-notion创建。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Share to NotionNext

> [!Note] 插件名片
> - 插件名称：Share to NotionNext
> - 插件作者：EasyChris, jxpeng98
> - 插件说明：使用 Notion API 将文件共享到 Notion，用于 NotionNext 网页部署，最初由 EasyChris/obsidian-to-notion 创建。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jxpeng98/obsidian-to-NotionNext)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?share-to-notionnext)

## 概述

使用 Notion API 将文件共享到 Notion，用于 NotionNext 网页部署，最初由 EasyChris/obsidian-to-notion 创建。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jxpeng98/obsidian-to-NotionNext/master/README.md)
>

---

## Readme(翻译）

下面是 [[share-to-notionnext]] 插件的自述翻译

感谢 [原作者](https://github.com/EasyChris/obsidian-to-notion) 开发了这样一个有用的插件，可以将 Obsidian 同步到 Notion。然而，原始仓库只能同步名称和标签信息。对于像我这样使用 [NotionNext](https://github.com/tangly1024/NotionNext) 建立网站的人来说，这带来了一些限制。每次导入时，我都需要进行很多修改。

因此，在 [原作者的基础上](https://github.com/EasyChris/obsidian-to-notion)，我添加了一个功能来匹配 [NotionNext](https://github.com/tangly1024/NotionNext) 模板。这样，您可以直接在 Obsidian 中进行编辑，并在整理后一键发布。

如何使用

### 注意事项

目前，此插件仅适用于 [NotionNext](https://github.com/tangly1024/NotionNext)。如果您没有使用此模板，您将会持续收到“错误 400”。

对于不需要 NotionNext 的用户，请使用原始的 [Obsidian-to-notion](https://github.com/EasyChris/obsidian-to-notion) 插件。

### 安装前步骤

在安装插件之前，您必须完成以下设置：

1. 您的 NotionNext 数据库。
2. 根据原始作者的 readme.md，设置 Notion API，并且它应该已与您的 NotionNext 存储库关联。
3. NotionNext 数据库 ID。
4. 您的 NotionNext 数据库应包含以下内容：
    - type
    - title
    - slug
    - category
    - tags
    - date
    - status
    - summary
    - password
    - icon


从版本 0.0.6 开始，我还添加了以下内容：

	- titleicon：每篇文章的唯一图标，目前仅支持表情符号。

	- cover url：每篇文章的封面图片，应以图像类型结尾，例如 .jpg、.png、.gif 等。

**如果您直接复制了 NotionNext 模板，则这些内容应已存在。我根据原始作者的工作对此插件进行了更改。您只需确保您的数据库具有上述内容，并且每个字母都是小写！！！**

**⚠️⚠️⚠️：所有标题都是小写！！！顺序无关紧要！**

### 插件安装

1. 关闭 Obsidian。
2. 从发布页面下载插件文件并将其解压到 Obsidian 的插件目录中。
3. 重新打开 Obsidian，进入设置，启用插件。
4. 在设置中找到 Obsidian to NotionNext，输入你的 NotionNext 数据库 ID 和 API 令牌。

### 如何使用

使用插件

在存储库中，我已经上传了一个模板，您可以直接复制到模板文件夹中。之后，使用 Obsidian 的模板功能，只需点击一次即可创建一个新的笔记。

如果您不想使用模板，您也可以直接在 Obsidian 中创建一个新文件，然后复制下面的内容。然后保存它。

```markdown
---
默认值已设置。
对于任何不需要的值，您可以删除它或将其设置为空。
例如，如果您不想设置密码，您可以删除 password: "1234" 或将其设置为 password: ""。
# I have set default values in the plugin, so you can simply delete any unnecessary options.
例如你不需要密码选项，你可以将password: "1234"删除，或者将它设置为空。
# !!!!!!!!!!!!
请不要修改YAML前置数据中表头的名称。
# !!!!!!!!!!!!
titleicon: 📎
coverurl: https://img.jxpeng.dev/2023/08/843e27a210847f05a0f7cfb121fec100.jpg
type: Post
slug: test
stats: Draft
category: test
summary: this is a summary for test post
icon: fa-solid fa-camera
password: "1234"
# 现在必须开启tags选项，否则会报错
tags:
  - test  # 文章标签
  - web # 如果需要，可以添加更多标签
---

以下是内容

```

模板的使用方法如下：

![](https://minioapi.pjx.ac.cn/img1/2023/09/354b950e5777b48832c2475e4a31f2cc.gif)

**插件预览如下**

![](https://minioapi.pjx.ac.cn/img1/2023/09/d6199619b68fab218fca8ae0cebece78.gif)

---

**原始的 README.md**

非常感谢原作者的工作。我只对原作者的工作进行了一些修改。如果您觉得这个插件有用，请给 [原作者](https://github.com/EasyChris/obsidian-to-notion) 点个赞。

# Obsidian to Notion

[![](https://github.com/Easychris/obsidian-to-notion/actions/workflows/CI.yml/badge.svg)](https://github.com/Easychris/obsidian-to-notion/actions/workflows/CI.yml)

[![Release Obsidian plugin](https://github.com/Easychris/obsidian-to-notion/actions/workflows/release.yml/badge.svg)](https://github.com/Easychris/obsidian-to-notion/actions/workflows/release.yml)

[![GitHub license](https://img.shields.io/github/license/EasyChris/obsidian-to-notion)](https://raw.githubusercontent.com/EasyChris/obsidian-to-notion/master/LICENSE)

[![Github all releases](https://img.shields.io/github/downloads/Easychris/obsidian-to-notion/total.svg)](https://GitHub.com/Easychris/obsidian-to-notion/releases/)

[![GitLab latest release](https://badgen.net/github/release/Easychris/obsidian-to-notion/)](https://github.com/Easychris/obsidian-to-notion/releases)

使用 Obsidian 将文件分享到 Notion，只需单击一次，Obsidian 将自动添加 Notion 分享链接

如果它对您有益，欢迎给它一个星星。

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_0.gif)

# TODO

### [待办事项板](https://github.com/users/EasyChris/projects/3/views/1)

- [x] 支持自定义页面横幅
- [x] 更新现有页面
- [x] 支持多语言
- [x] 支持自动复制分享链接到剪贴板
- [x] 支持移动设备
- [x] 感谢 [@jannikbuscha](https://github.com/jannikbuscha) 的支持标签
- [ ] 将 [[]] 格式的双向链接转换为 Notion 支持的格式。

# 如何使用

安装插件

### 市场下载

打开 Obsidian 设置 -> 添加插件 -> 搜索 -> Notion

![](https://cdn.pkmer.cn/covers/share-to-notionnext_1_7.png!pkmer)

将“BRAT”输入到插件市场中以找到它。

将“EasyChris/obsidian-to-notion”添加到已安装的 BRAT 插件列表中。

返回插件中心并将其打开。

### 手动安装

```
cd YOUR_OBSIDIAN_FOLDER/.obsidian/plugins/
git clone https://github.com/EasyChris/obsidian-to-notion.git
```

应用 Notion API

官方参考文档：[https://developers.notion.com/docs](https://developers.notion.com/docs)

### 步骤 1：创建集成

前往 [https://www.notion.com/my-integrations](https://www.notion.com/my-integrations)

创建完成后，复制“secrets token”

![](https://cdn.pkmer.cn/covers/share-to-notionnext_1_8.gif)

注意：

数据库首先自定义名称必须为 "Name"，否则同步到 Notion 将会失败

![](https://cdn.pkmer.cn/covers/share-to-notionnext_1_9.png!pkmer)

### 步骤 2：与您的集成共享数据库

创建一个新页面（具有公共权限）

在页面中创建一个新的数据库 -> 您需要 `完整页面数据库`

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_1.gif)

将 `integration` 添加到您的新数据库中

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_2.gif)

### 步骤 3：复制数据库 ID

```
https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...
                                  | --------- 数据库ID --------|

```

打开插件配置

使用你获得的 `NOTION_API_KEY` 和 `DATABASE_ID` 填写配置

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_3.png!pkmer)

将文件内容上传到 Notion

点击上传 Notion 按钮

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_4.png!pkmer)

成功上传后，将自动生成一个共享链接

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_5.png!pkmer)

## 横幅网址 [选项]

横幅网址必须是一个图片网址，例如：<https://i.imgur.com/xxx.jpg>

如果您不想使用横幅，请将其留空。

## 转换标签 [选项]

将 Obsidian 标签转换为 Notion 表格。

需要具有名称为“Tags”的列。

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_6.png!pkmer)

在 Notion 页面中添加标签

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_7.png!pkmer)

* 打开插件转换标签

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_8.png!pkmer)

* 在头部添加标签

```markdown
---
tags: [tag1,tag2]
---

这是测试标签

```

```markdown
---
tags:
  - tag4
---

这是测试标签

```

![](https://cdn.pkmer.cn/covers/share-to-notionnext_2_9.png!pkmer)

感谢 [@jannikbuscha](https://github.com/jannikbuscha) 的贡献

## Notion ID [选项]

Notion ID 是您想要共享文件的 Notion 站点 ID。

如果您不填写它，Notion 将共享到默认链接，如：

<https://www.notion.so/myworkspace/a8aec43384f447ed84390>

访问此页面需要重定向到您的站点 URL。

如果您填写了 Notion ID，它将共享到页面链接，如：

https://your_user_name.notion.site/myworkspace/a8aec43384f447ed84390。

访问者无需重定向 URL。

将图片同步到您的 oss 或 cos 存储桶中，请使用 [Obsidian Image Auto Upload Plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin)。

# 开发

```
git clone https://github.com/EasyChris/obsidian-to-notion.git
yarn install
yarn dev
```

## 发布

```
node update-version.js
./release.sh
```

感谢

[开发流程 | Obsidian插件开发文档](https://luhaifeng666.github.io/obsidian-plugin-docs-zh/zh/getting-started/development-workflow.html)

[GitHub - devbean/obsidian-wordpress：一个用于将文档发布到WordPress的Obsidian插件。](https://github.com/devbean/obsidian-wordpress)

[GitHub - obsidianmd/obsidian-api](https://github.com/obsidianmd/obsidian-api)

[GitHub - Easychris/obsidian-to-notion：Obsidian Weread插件是一个将Weread（微信读书）的高亮和注释同步到Obsidian Vault的插件。](https://github.dev/zhaohongxuan/obsidian-weread-plugin)

[GitHub - Quorafind/Obsidian-Memos：Obsidian的快速捕捉插件，所有数据来自您的笔记。](https://github.com/Quorafind/Obsidian-Memos)

[https://github.com/jannikbuscha/obsidian-to-notion](https://github.com/jannikbuscha)

# 许可证

GNU GPLv3
