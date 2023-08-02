---
uid: 20230709163902
title: Obsidian 插件：Obsidian shared to Notion 一键把 Obsidian 中的文件传输到 Notion 中
tags: [obsidian, 插件, notion, 导入]
description: 一键将 Obsidian中的文件传输到 notion 中
author: Huajin
type: basic
draft: false
editable: false
modified: 20230730203719
---

# Obsidian 插件：Obsidian shared to Notion 一键把 Obsidian 中的文件传输到 Notion 中

Obsidian 是一款流行的个人知识管理和笔记软件，而 Notion 则是一款功能强大的多合一工具，提供了丰富的协作和组织功能。obsidian-share-to-notion 的目标是将这两个工具结合起来，使得用户可以轻松地分享 Obsidian 笔记到 Notion 中，并在两个工具之间保持实时同步。

> [!Note] 插件名片
>
> - 插件名称：Obsidian-Share-To-Notion
> - 插件版本：0.7.6
> - 插件作者：Easychris
> - 插件描述：一键把 Obsidian 中的文件传输到 Notion 中
> - 插件项目地址：[点我跳转](https://github.com/EasyChris/obsidian-to-notion)

想要实现这些功能，我们需要使用 Notion 的集成功能 integrations。

> [!cite] Notion 的 Integrations
> Notion 的 Integrations 是指 Notion 平台与其他应用程序、服务或工具之间的集成功能。通过这些集成，用户可以将不同的应用程序和服务与 Notion 相互连接，实现数据的传输、共享和自动化处理，从而进一步增强 Notion 的功能和灵活性。

Notion 提供了广泛的集成选项，可以满足个人用户、团队和企业的不同需求。以下是一些常见的 Notion Integrations 的示例：

1. **Google Drive**：将 Google Drive 文件和文件夹直接嵌入到 Notion 页面中，并实时同步更新。
2. **Slack**：将 Notion 页面、数据库或提醒直接发送到 Slack 频道，实现团队之间的实时协作和通知。
3. **Trello**：将 Trello 卡片直接嵌入到 Notion 页面中，实现项目管理和任务分配的集中化。
4. **Figma**：将 Figma 设计文件嵌入到 Notion 页面中，并与团队共享、评论和协作。
5. **GitHub**：与 GitHub 代码库集成，跟踪问题、拉取请求和代码提交等活动，并将其显示在 Notion 页面中。
6. **Zapier**：使用 Zapier 连接 Notion 和其他应用程序，实现自动化任务、触发器和动作的配置。
7. **Calendar**：将 Google Calendar、Outlook 等日历应用集成到 Notion，实现时间管理和计划的同步。
8. **Typeform**：通过集成 Typeform，可以在 Notion 中创建和显示问卷调查数据和反馈结果。

这只是一小部分 Notion 可用的 Integrations 示例，实际上还有很多其他集成选项可供用户选择，以满足各种不同的需求和用例。用户可以根据自己的工作流程和需求，选择与 Notion 集成的应用程序，以更好地组织、共享和处理信息。

## 效果&特性

- **快速分享**：只需几个简单的步骤，用户就可以将当前的 Obsidian 笔记分享到 Notion 中。
- **选项灵活**：插件提供了多种选项，让用户可以按需自定义分享的方式和内容。可以选择笔记标题、正文、标签等信息是否一并分享到 Notion 中。
- **实时同步**：一旦用户分享笔记，Obsidian 和 Notion 将进行实时同步。这意味着任何在 Obsidian 中对笔记进行的更改都会自动同步到 Notion 中，保持数据的一致性。
- **链接追踪**：插件可以自动生成分享链接，并在 Obsidian 中跟踪点击次数和访问统计，方便用户了解笔记在 Notion 中的流行程度和关注度。
- **多账户支持**：用户可以配置多个 Notion 账户，根据需求灵活选择分享到哪个账户中，并轻松切换账户。

## 配置

该插件需要配置后才能使用，且在 notion 和插件设置中都需要配置。

### Notion 配置

创建一个集成

- 创建的地方：
	- notion 桌面端中点击 `设置 -> My connections -> Develop or manage intefrations`，
	- 或者直接打开网址 [Notion Developers](https://www.notion.so/my-integrations)；
- 点击 `create new integration` 并填写基本信息 Basic Information
	- Type：内部集成安装到特定的工作区。稍后可以将此集成公开；
	- Associated workspace：选择要安装集成的工作空间。工作区所有者也将能够管理集成。你可以稍后升级集成以使用开放授权 OAuth；
	- Name：你想创建的集成的名字；
	- Logo：集成的图片（obsidian 的黑曜石图片链接：<https://obsidian.md/images/obsidian-logo-gradient.svg）；>

点击我们创建好集成后你会得到一个 Secrets 码，复制下来填入本插件设置中的 Notion API Token 处。

1. 在 notion 中创建一个空白数据库，并将刚刚创建的集成添加至该数据库
- 新建一个空白页面，选择创建一个 Table，==必须保证数据库的第一列是 Name==；
- 在右上角的三个点处选择 `add connection`，选择你刚刚创建的集成；

![Obsidian-Share-To-Notion示例1.png](https://cdn.pkmer.cn/images/Obsidian-Share-To-Notion%E7%A4%BA%E4%BE%8B1.png!pkmer)

至此 notion 配置完成

### 插件设置配置

![Obsidian-Share-To-Notion示例2.png](https://cdn.pkmer.cn/images/Obsidian-Share-To-Notion%E7%A4%BA%E4%BE%8B2.png!pkmer)

Notion API Token 和 Database ID 为必填项，决定了文件传输到何处。后三项为可选项，可以为传输的笔记添加图片和在 notion 中创建文件含有的 tags。

- **Notion API Token**
可以在集成的 Secrets 中找到；

- **Database ID**
指的是我们在 notino 中创建的新的数据库的 ID，可以在新建的数据库的网址中找到。新建的数据库的网址的最后一部分的问好之前的部分.
数据库的网址的样式为： <http://www.notion.so/......?......> ），问号之前到斜杠的部分就是这个数据库的 ID；

- **Banner url(optional)**
这一项可有可无，内容是你传输后文件横幅图片的地址。

- **Noiton ID(optional)**
用于同步时，在 notion 中同步的对应的文件的链接的样式，如果不写，就是默认的链接 <http://www.notion.so/...> 。如果填写了，就是 <http://name.notion.site/...> ；

- **Convert tags(optional)**
建议打开，打开后，你文件的 YAML 区域的 tags 属性中的值就可以被转换 notion 数据库中的 tags；
简单的说，你在文件的最开头这样写，就可以为该文件创建一些 notion 能够识别的标签：

`````示例代码
---
tags:
  - tags1
  - tags2
---
`````
