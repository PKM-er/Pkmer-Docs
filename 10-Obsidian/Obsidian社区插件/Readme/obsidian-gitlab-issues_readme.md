---
uid: 20230803212456
title: Obsidian 插件：【Readme】GitLab Issues
tags: ['obsidian插件', 'readme']
description: 将Gitlab问题导入您的Obsidian保险库。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：GitLab Issues

> [!Note] 插件名片
> - 插件名称：GitLab Issues
> - 插件作者：Ben Roberts
> - 插件说明：将Gitlab问题导入您的Obsidian保险库。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/benr77/obsidian-gitlab-issues)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-gitlab-issues)

## 概述

将Gitlab问题导入您的Obsidian保险库。

![GitLab Issues](https://cdn.pkmer.cn/covers/obsidian-gitlab-issues.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/benr77/obsidian-gitlab-issues/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-gitlab-issues]] 插件的自述翻译



Gitlab Issues for Obsidian
====

![CI](https://github.com/benr77/obsidian-gitlab-issues/actions/workflows/ci.yml/badge.svg)
![Build Status](https://github.com/benr77/obsidian-gitlab-issues/actions/workflows/releases.yml/badge.svg)
[![Github All Releases](https://img.shields.io/github/downloads/benr77/obsidian-gitlab-issues/total.svg)]()

一个用于[Obsidian](https://obsidian.md/)的插件，用于从[Gitlab](https://gitlab.com/)导入问题。

从Gitlab返回的每个问题都会在指定的输出目录中创建为一个Obsidian笔记。

您可以创建自己的模板来自定义问题笔记的格式。

这些笔记仅用于*只读*，如果它们不再由Gitlab返回，它们将从您的Obsidian vault中删除。

最新的问题将在Obsidian启动后的30秒后从Gitlab加载，然后每15分钟自动加载一次。
## 配置

您必须拥有一个Gitlab账户。

1) 为插件生成一个Gitlab [个人访问令牌](https://gitlab.com/-/profile/personal_access_tokens)，该令牌必须包含`API`权限。
2) 通过Obsidian社区插件部分安装插件，然后启用它。
3) 在插件设置中的令牌字段中输入您在Gitlab上创建的个人访问令牌。

![插件设置界面](doc/screenshot/gitlab-issues-config-screen.png)

## 示例 - 列出即将到期的截止日期

使用默认的过滤器值 `due_date=month`，Gitlab API 将返回所有在下个月有截止日期的问题。

该插件将为每个问题创建一个 Obsidian 笔记文件。

然后，您可以使用优秀的 [DataView 插件](https://github.com/blacksmithgu/obsidian-dataview) 在您的存储库中的任何位置创建即将到期的问题列表。例如：

```yaml
dataview
TABLE WITHOUT ID file.link AS "任务", dueDate AS "截止日期" from "@Data/Gitlab Issues"
SORT dueDate
```

如果您在 Gitlab 上关闭一个问题，或者将其截止日期更改为将来的某个时间，该问题将从您的存储库中删除，并且 DataView 列表将不再显示该问题。

进一步探索

自定义API查询
您可以在“问题列表”端点中使用Gitlab允许的任何有效查询过滤器。有关所有可能选项，请参阅[Gitlab API文档](https://docs.gitlab.com/ee/api/issues.html#list-issues)。

### 使用自定义模板
您可以自定义用于创建新笔记的模板。为模板创建一个笔记，并在插件设置中指定该笔记的路径。

模板必须是一个有效的Handlebars模板。有关语法的更多信息，请参阅[Handlebars](https://handlebarsjs.com/guide/)文档。

目前，可用的字段包括：

`id` `title` `description` `due_date` `web_url`

## 错误

请在存储库的[问题](https://github.com/benr77/obsidian-gitlab-issues/issues)部分报告错误。

贡献

欢迎贡献。请为每个错误或功能提交一个单独的PR。

## 许可证

该插件代码采用MIT许可证发布。有关更多信息，请参阅[LICENSE](LICENSE.txt)文档。



