---
uid: 20230803213035
title: Obsidian 插件：【Readme】PostgreSQL Obsidian
tags: ['obsidian插件', 'readme']
description: 将您的笔记的元数据上传到PostgreSQL数据库
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：PostgreSQL Obsidian

> [!Note] 插件名片
> - 插件名称：PostgreSQL Obsidian
> - 插件作者：Camille Louédoc-Eyries
> - 插件说明：将您的笔记的元数据上传到PostgreSQL数据库
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/clouedoc/postgresql-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?postgresql-obsidian)

## 概述

将您的笔记的元数据上传到PostgreSQL数据库



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/clouedoc/postgresql-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[postgresql-obsidian]] 插件的自述翻译



<h1 align="center">
  Obsidian + PostgreSQL = ❤️
</h1>

<p align="center">
    一个插件，用于将您的笔记元数据上传到数据库中。
</p>
## 特点

- 将页面的Dataview注释发送到PostgreSQL数据库
    - 这使您可以在数据上使用SQL查询，并将其与其他工具（如[Grafana](https://github.com/grafana/grafana/blob/main/README.md)）集成。

## 安装

1. 获取一个PostgreSQL数据库（见下面的部分）
2. 在设置中设置您的PostgreSQL连接字符串
3. 打开命令面板，输入"PostgreSQL"以查看可用命令的列表

### 设置一个PostgreSQL数据库

-   按照[这个指南](https://www.postgresql.org/download/)在您的计算机或远程服务器上自行托管PostgreSQL。
-   您也可以使用托管提供商
    -   [Amazon RDS](https://aws.amazon.com/fr/rds/postgresql/resources/)
    -   [ElephantSQL](https://www.elephantsql.com/)
    -   [Heroku的托管PostgreSQL](https://www.heroku.com/postgres)

我个人更喜欢在离岸服务器上自行托管PostgreSQL以保护我的隐私。然而，请注意，这需要更多的知识，因为如果您在远程服务器上托管，您将学习如何启用网络加密（SSL）以防止未经授权的中间人窥探您的数据。

我没有尝试过上面列出的托管提供商，但它们来自信誉良好的公司，并且提供的存储空间和计算能力远远超过您托管此插件生成的数据所需的。

我的数据存储在哪里？

`postgresql-obsidian` 生成的数据在 `obsidian` 数据库模式下提供给您使用。

您可以使用 PostgreSQL 视图来提取和格式化所需的信息。

为什么我应该将我的数据发送到PostgreSQL数据库？

将笔记的元数据发送到PostgreSQL数据库将使您能够使用其他工具来探索它，例如[Grafana](https://github.com/grafana/grafana/blob/main/README.md)。

这是我制作的用于监控个人健康的Grafana仪表板的截图：

![使用postgresql-obsidian插件生成的数据制作的clouedoc健康的Grafana仪表板截图，显示了一个良好的生活方式的图表。](./assets/grafana-dashboard.png)

## 贡献

贡献是使开源社区成为一个如此令人惊叹的地方，可以学习、激发灵感和创造的原因。我们非常感谢您所做的任何贡献！

### 开发

有关更多信息，请参阅[开发者文档](./DEV_README.md)。

### 待办事项

-   [x] 过于复杂的开发工作流程
-   [x] 在设置中设置PostgreSQL URL
-   [ ] 从当前笔记中获取各种信息
    -   [x] Dataview数据
    -   [ ] 列出内容
-   [ ] 命令
    -   [x] 上传当前笔记
    -   [ ] 批量上传
    -   [ ] 编辑时自动上传
-   [ ] 提交到Obsidian插件注册表

### 有用的链接

-   [Obsidian API文档](https://github.com/obsidianmd/obsidian-api)

## 归属

-   感谢 [pg](https://github.com/brianc/node-postgres/tree/master/packages/pg) 提供了在 JavaScript 中轻松连接到 PostgreSQL 数据库的可能性。
-   感谢 [Rush Stack](https://github.com/microsoft/rushstack) 提供了易于使用的 ESLint 配置。
-   感谢 [Dataview Plugin](https://github.com/blacksmithgu/obsidian-dataview) 提供了轻松访问笔记元数据的功能。

## 许可证

[MIT](LICENSE.txt)

<div style="display: flex; justify-content: center; vertical-align: middle;">
    <img height=50 src="./assets/obsidian.png" class="center">
    <img height=50 src="./assets/postgres.png" class="center">
</div>



