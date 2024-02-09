---
uid: 2023120719381376
title: Obsidian 插件：【Readme】Obsidian shared to Notion
tags: ['obsidian插件', 'readme']
description: 这是一个Obsidian的插件。该插件通过Notion API将Obsidian MD文件共享到Notion。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obsidian shared to Notion

> [!Note] 插件名片
> - 插件名称：Obsidian shared to Notion
> - 插件作者：Easychris
> - 插件说明：这是一个 Obsidian 的插件。该插件通过 Notion API 将 Obsidian MD 文件共享到 Notion。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/EasyChris/obsidian-to-notion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-to-notion)

## 概述

这是一个 Obsidian 的插件。该插件通过 Notion API 将 Obsidian MD 文件共享到 Notion。

![Obsidian shared to Notion](https://cdn.pkmer.cn/covers/obsidian-to-notion.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/EasyChris/obsidian-to-notion/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-to-notion]] 插件的自述翻译

# Obsidian to Notion

[![](https://github.com/Easychris/obsidian-to-notion/actions/workflows/CI.yml/badge.svg)](https://github.com/Easychris/obsidian-to-notion/actions/workflows/CI.yml)

[![Release Obsidian plugin](https://github.com/Easychris/obsidian-to-notion/actions/workflows/release.yml/badge.svg)](https://github.com/Easychris/obsidian-to-notion/actions/workflows/release.yml)

[![GitHub license](https://img.shields.io/github/license/EasyChris/obsidian-to-notion)](https://raw.githubusercontent.com/EasyChris/obsidian-to-notion/master/LICENSE)

[![Github all releases](https://img.shields.io/github/downloads/Easychris/obsidian-to-notion/total.svg)](https://GitHub.com/Easychris/obsidian-to-notion/releases/)

[![GitLab latest release](https://badgen.net/github/release/Easychris/obsidian-to-notion/)](https://github.com/Easychris/obsidian-to-notion/releases)

使用 Obsidian 将文件共享到 Notion，只需单击一次，Obsidian 将自动添加 Notion 共享链接

如果它对您有益，欢迎给它一个星星。

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_0.gif)

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

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_1_5.png!pkmer)

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

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_1_6.gif)

#### 注意

数据库首先自定义的名称必须为 "Name"，否则同步到 Notion 将会失败

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_1_7.png!pkmer)

### 步骤 2：与您的集成共享数据库

创建一个新页面（具有公共权限）

在页面中创建一个新的数据库 -> 您需要 `完整页面数据库`

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_1.gif)

将 `integration` 添加到您的新数据库中

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_2.gif)

### 步骤 3：复制数据库 ID

```
https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...
                                  | --------- 数据库ID --------|

```

打开插件配置

使用你获得的 `NOTION_API_KEY` 和 `DATABASE_ID` 填写配置

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_3.png!pkmer)

将文件内容上传到 Notion

点击上传 Notion 按钮

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_4.png!pkmer)

成功上传后，将自动生成一个共享链接

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_5.png!pkmer)

## 横幅网址 [选项]

横幅网址必须是一个图片网址，例如：<https://i.imgur.com/xxx.jpg>

如果您不想使用横幅，请将其留空。

## 转换标签 [选项]

将 Obsidian 的标签转换为 Notion 表格。

需要有名为 'Tags' 的列。

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_6.png!pkmer)

在 Notion 页面中添加标签

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_7.png!pkmer)

* 打开插件转换标签

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_8.png!pkmer)

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

![](https://cdn.pkmer.cn/covers/obsidian-to-notion_2_9.png!pkmer)

感谢 [@jannikbuscha](https://github.com/jannikbuscha) 的贡献

## Notion ID [选项]

Notion ID 是您想要共享文件的 Notion 网站 ID。

如果您不填写它，Notion 将共享到默认链接，如：

<https://www.notion.so/myworkspace/a8aec43384f447ed84390>

访问此页面需要重定向到您的网站 URL。

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
