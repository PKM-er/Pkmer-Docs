---
uid: 2023102611081818
title: Obsidian 插件：【Readme】Nostr Writer
tags: ['obsidian插件', 'readme']
description: 将您的写作直接发布到Nostr..
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Nostr Writer

> [!Note] 插件名片
> - 插件名称：Nostr Writer
> - 插件作者：James McGauran
> - 插件说明：将您的写作直接发布到Nostr..
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jamesmagoo/nostr-writer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nostr-writer)

## 概述

将您的写作直接发布到Nostr..

![Nostr Writer](https://cdn.pkmer.cn/covers/nostr-writer.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jamesmagoo/nostr-writer/master/README.md)
> 

---

## Readme(翻译）

下面是 [[nostr-writer]] 插件的自述翻译


# Obsidian Nostr Writer
> 直接从Obsidian发布到Nostr
**一个天作之合..**
[**Obsidian**](https://obsidian.md/) 是一款令人惊叹的 Markdown 编辑器、文字处理器、笔记组织工具和思维综合工具：对于作家来说是完美的工具。

[**Nostr**](https://nostr.com/) 代表了我们沟通和分发书面文字的未来：去中心化、自由、独立、不可腐败。

在我看来，它们就像是天作之合...
## 对于作家们
> 这个工具非常方便使用。
1. 添加你的 Nostr 私钥（在设置中只需添加一次）。
2. 在 Obsidian 中写作。
3. 点击发布到 Nostr，就这么简单。
一个安静的地方
> 避免使用网络浏览器及其所有的干扰！

这个工具完全与Nostr分离，让你保持专注 - 插件不会读取Nostr的消息，也不会让你看到公共空间。它只会发布你所写的内容。专注于你的工作，远离噪音。
## 特点
- 发布到Nostr：通过单击一次按钮，直接将您的笔记从Obsidian发布到Nostr。
- 私钥集成：在插件设置中安全地设置和存储您的私钥，以进行身份验证发布。
- 摘要和图片URL支持：添加可选的摘要和图片URL，以配合您的笔记，并具有实时预览功能。
- 公钥检索：轻松检索并复制您的公钥到剪贴板。
- 本地记录保留：在JSON文件中保留已发布事件的本地记录，供您参考和跟踪。
- 已发布视图：查看从Obsidian发送的所有帖子
- 简短格式消息编写器：直接从Obsidian快速撰写和发布短格式消息到Nostr。
- 中继配置：配置发送到您喜欢的任何中继。
即将推出...
- 发布后，在focal.ink上获得已发布笔记的链接。
### 想法..
- 插件用户中继：这个插件特定的中继 - 查看其他人正在写的内容。
- 图片 CDN：您文件中的图片将被上传到 CDN 并插入到您的消息中
- 前置信息：在发布后，如果这也能在发布的 .md 文件中创建一个“前置信息”就很酷了。
是时候开始建立你的博客，与你的读者交流，并在任何封闭的平台之外自由发布你的作品了。

在Nostr上，你不会受限于任何像Substack、Medium或Twitter这样的平台，它们可以轻易地关闭你的账号并删除你的作品。
为什么选择Nostr？
1. **拥有权**: 在Nostr上发布内容时，您拥有所有权。没有任何平台声称对您的作品拥有任何权利，因此您可以随心所欲地处理它 - 重新发布、出售等。

2. **直接获利（无中间商）**: Nostr允许直接获利的选择，您可以直接从读者那里赚钱，而无需与Substack或Twitter等平台分享收入的一部分。

3. **读者群建立**: Nostr允许作家建立和管理自己的社区。与更大、更不亲密的平台相比，这可以培养更个人化和更积极参与的读者群。

4. **开源和社区驱动**: 作为一个开源项目，Nostr由社区推动，其发展受到用户需求和愿望的指导。您不会受到企业决策或以利润为驱动的变化的摆布。

5. **成本效益**: Nostr不会向您收取使用平台的费用，而不像Substack等平台。这使得它对作家来说是一个经济实惠的选择，特别是对那些刚刚开始或希望最大化收入的作家来说。
### 长篇内容
在Nostr上，您可以编写特别标记为“长篇”的消息。这个工具发布这种类型的消息。长篇内容聚合器和客户端，如https://habla.news和https://blogstack.io/，专门将这些消息传递给读者。将来会有更多的内容.. 😉
### 简短内容
该工具专注于从Obsidian以长篇形式发布完整的.md文件。然而，如果您有一个简短的信息要发送出去 - 一个想法或一个俏皮话 - 只需在设置中切换到简短形式写作；这将为您提供一个写消息并发送的地方。
### 安全通知
该插件将您的私钥存储在本地的Obsidian设置文件中，具体位置为：
```
<Vault Directory>/.obsidian/plugins/nostr-writer/data.json
```

它不会被传输到其他地方，但其安全性与您的设备和Obsidian文件的安全性密切相关。

请注意，如果未经授权的人获得了您的设备或Obsidian文件的访问权限，他们可能能够访问您的私钥。该插件在其设置界面中对密钥进行了模糊处理，但这并不等同于强加密或安全存储。

因此，确保您的设备和Obsidian文件的整体安全性非常重要，以保护您的私钥安全。

> 请记住，您的私钥的安全性是您的责任。
从社区插件列表中搜索“Nostr Writer”进行安装。
### 手动安装插件
-   前往[releases](https://github.com/jamesmagoo/nostr-writer/releases)下载一个发布版本 - 推荐使用最新版本 - （或者预发布版本以获取即将推出的功能）。
-   在您首选的Vault中导航到插件文件夹：`VaultFolder/.obsidian/plugins/`
-   创建一个名为`nostr-writer`的新文件夹。
-   将`main.js`、`styles.css`和`manifest.json`复制并粘贴到新创建的`/nostr-writer`文件夹中。
-   确保您通过进入设置 > 社区插件 > 已安装插件 > 切换 'nostr-writer' 来启用插件。
## ⚡️SATS
闪电网络地址：
```
magoo@getalby.com
```

闪电网络发票：
```
lnbc200u1pjvu03dpp5x20p0q5tdwylg5hsqw3av6qxufah0y64efldazmgad2rsffgda8qdpdfehhxarjypthy6t5v4ezqnmzwd5kg6tpdcs9qmr4va5kucqzzsxqyz5vqsp5w55p4tzawyfz5fasflmsvdfnnappd6hqnw9p7y2p0nl974f0mtkq9qyyssqq6gvpnvvuftqsdqyxzn9wrre3qfkpefzz6kqwssa3pz8l9mzczyq4u7qdc09jpatw9ekln9gh47vxrvx6zg6vlsqw7pq4a7kvj4ku4qpdrflwj
```
通过Nostr给我发送想法和反馈（或者更正式的事情，请在[这里](https://github.com/jamesmagoo/nostr-writer/issues)添加问题）
```
npub10a8kw2hsevhfycl4yhtg7vzrcpwpu7s6med27juf4lzqpsvy270qrh8zkw
```
</br>
<div align="center">



<!--  -->

</div>



