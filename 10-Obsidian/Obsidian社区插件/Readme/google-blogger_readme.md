---
uid: 2024042221333059
title: Obsidian 插件：【Readme】Google Blogger
tags: ['obsidian插件', 'readme']
description: 发布笔记到Google Blogger。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Google Blogger

> [!Note] 插件名片
> - 插件名称：Google Blogger
> - 插件作者：Hugo Sansaqua
> - 插件说明：发布笔记到 Google Blogger。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/privet-kitty/obsidian-blogger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?google-blogger)

## 概述

发布笔记到 Google Blogger。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/privet-kitty/obsidian-blogger/main/README.md)

---

## Readme(翻译）

下面是 [[google-blogger]] 插件的自述翻译

# 黑曜石博客插件

**此插件目前处于测试阶段。**

此插件使您可以将 Obsidian 笔记发布到 Blogger。

## 安装

这个插件尚未发布到社区插件中。要尝试这个插件，您必须手动克隆并构建它。步骤如下：

1. 将此存储库克隆到您的本地计算机并执行构建过程。

   ```bash
   cd /path/to/your/obsidian/vault/.obsidian/plugins
   git clone git@github.com:privet-kitty/obsidian-blogger.git
   cd obsidian-blogger
   npm install
   npm run build
   ```

2. 在设置的 `Community Plugins` 部分中激活 `Blogger` 插件。可能需要重新加载插件。

## 为 Blogger API 创建凭据

在开始使用此插件之前，您需要创建一个 OAuth2 客户端 ID 和一个密钥。请注意，此过程取决于您是在使用桌面还是移动设备。

1. 前往 [Google Cloud控制台的凭据页面](https://console.cloud.google.com/apis/credentials)。
2. 点击“创建凭据”，并从下拉菜单中选择“OAuth 客户端 ID”。
3. （仅限**桌面**）选择“桌面应用程序”并使用您喜欢的名称创建一个密钥。
4. （仅限**移动**）选择“Web 应用程序”，点击“添加 URI”从“授权重定向 URI”中添加“https://privet-kitty.github.io/obsidian-blogger/oauth2_forward.html”。然后，使用您喜欢的名称创建一个密钥。
5. 凭据将被创建。请记下您的客户端 ID 和密钥。
6. 打开插件设置并设置您的客户端 ID 和密钥。

（第 4 步中的奇怪过程是因为在移动 Obsidian 中无法创建本地服务器，并且 Google 对使用自定义 URI 方案施加了限制。）

## 基本用法

_请参阅 [Tips](https://github.com/privet-kitty/obsidian-blogger/blob/main/docs/tips.md) 以获取更多关于此 README 之外的信息。_

首先，在插件设置选项卡中的 `Profiles` 部分创建您的个人资料。在此过程中，需要进行 OAuth2 身份验证以访问您的 Blogger 帐户。

随后，您可以使用在 [Command Palette](https://help.obsidian.md/Plugins/Command+palette) 中找到的 `Publish to Blogger` 或侧边栏中的专用按钮将您的文档发布到 Blogger。文档将发布到您设置的 Blogger URL。

您可以在笔记开头添加 YAML front matter。插件将从 front matter 中解释元数据，如标题和标签。此外，在笔记成功发布后，Blogger 文章 ID 将附加到此 front matter 中。

front matter 的示例如下：

```markdown
---
title: 将覆盖笔记标题的帖子标题，非必需
labels:
  - 您想要的任何标签
  - 非必需
---

内容在这里。
```

## 致谢

This plugin is based on Cheng Liang's [obsidian-wordpress](https://github.com/devbean/obsidian-wordpress).
