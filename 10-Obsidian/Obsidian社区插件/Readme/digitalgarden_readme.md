---
uid: 20230803212253
title: Obsidian 插件：【Readme】Digital Garden
tags: ['obsidian插件', 'readme']
description: 将你的笔记发布到数字花园，供他人欣赏。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Digital Garden

> [!Note] 插件名片
> - 插件名称：Digital Garden
> - 插件作者：Ole Eskild Steensen
> - 插件说明：将你的笔记发布到数字花园，供他人欣赏。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/oleeskild/obsidian-digital-garden)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?digitalgarden)

## 概述

将你的笔记发布到数字花园，供他人欣赏。

![Digital Garden](https://cdn.pkmer.cn/covers/digitalgarden.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/oleeskild/obsidian-digital-garden/main/README.md)
> 

---

## Readme(翻译）

下面是 [[digitalgarden]] 插件的自述翻译



🏡 Obsidian数字花园
免费将您的笔记发布到网络上。在您自己的个人花园中。

## 文档
文档和示例可以在[dg-docs.ole.dev](https://dg-docs.ole.dev/)找到。

![Digital-Garden-Demo](https://raw.githubusercontent.com/oleeskild/obsidian-digital-garden/main/img/dg-demo.gif)

## 特点
* 基本的Markdown语法
* 链接到其他笔记
* Dataview查询（作为代码块、内联和dataviewjs）
* 反向链接
* Obsidian主题
* 样式设置
* 本地图
* 文件树导航
* 全局搜索
* Callouts/Admonitions
* 嵌入/引用的Excalidraw绘图
* 嵌入/引用的图片
* 引用的笔记
* 代码块
* MathJax
* 高亮文本
* 脚注
* Mermaid图表
* PlantUML图表

## 初始设置
设置这一切需要一些工作，但完成后，您将拥有一个数字花园，您可以控制其中的每个部分，并根据自己的需要进行自定义。这就是数字花园如此令人愉快的原因。
让我们开始吧：

1. 首先，您需要一个GitHub账户。如果您还没有，请在[此处](https://github.com/signup)创建一个。
2. 您还需要一个Vercel账户。您可以使用GitHub账户在[此处](https://vercel.com/signup)注册。
3. 打开[此存储库](https://github.com/oleeskild/digitalgarden)，然后点击蓝色的“Deploy to Vercel”按钮。这将打开Vercel，然后在您的GitHub账户中创建该存储库的副本。给它一个合适的名称，比如'my-digital-garden'。按照步骤将您的网站发布到互联网上。
4. 现在，您需要创建一个访问令牌，以便插件可以代表您向存储库添加新的笔记。在登录GitHub的情况下，转到[此页面](https://github.com/settings/tokens/new?scopes=repo)。正确的设置应该已经应用。如果您不想每隔几个月生成一次，请选择“无到期日”选项。点击“Generate token”按钮，并复制您在下一页上看到的令牌。
5. 在Obsidian中打开设置菜单，并找到“Digital Garden”的设置。这里的前三个设置是插件工作所必需的。填写您的GitHub用户名，您在步骤3中创建的笔记存储库的名称。最后粘贴您在步骤4中创建的令牌。其他选项是可选的。您可以保持默认设置。
6. 现在，让我们发布您的第一个笔记！在Obsidian中创建一个新的笔记。并在文件顶部添加以下内容

```
---
dg-home: true
dg-publish: true
---
```
（如果在复制粘贴上述文本时出现反引号，\`\`\`，请删除它们。它应该以三个破折号，---，开始和结束。有关Obsidian和frontmatter的更多信息，请参见[此页面](https://help.obsidian.md/Advanced+topics/YAML+front+matter)。）

**这样做有两个作用：**

* dg-home设置告诉插件这应该是您的主页或进入您的数字花园的入口。（只需要添加到_一个_笔记中，而不是您发布的每个笔记）。

* dg-publish设置告诉插件该笔记应该发布到您的数字花园。没有此设置的笔记将不会被发布。（换句话说：您发布的每个笔记都需要此设置）。

7. 通过按下Windows/Linux上的CTRL+P（Mac上的CMD+P）打开命令面板，并找到“Digital Garden: Publish Single Note”命令。按Enter键。
8. 转到您的网站URL，您应该在[Vercel](https://vercel.com/dashboard)上找到它。如果还没有显示任何内容，请等待一分钟并刷新。您的笔记现在应该出现了。

恭喜，您现在拥有自己的免费托管的数字花园！
您现在可以开始像通常在Obsidian中那样添加链接，使用双方括号，例如：[[Some Other Note]]，链接到您刚刚发布的笔记。您还可以使用[[Some Other Note#A Header]]的语法链接到特定的标题。请记住，您需要发布您链接到的笔记，因为这不会自动发生。这是有意设计的。您始终可以控制您实际想要发布的笔记。如果您没有发布链接的笔记，该链接将简单地导航到一个告诉用户该笔记不存在的网站。

![new-note-demo](https://raw.githubusercontent.com/oleeskild/obsidian-digital-garden/main/img/new-note-demo.gif)

修改模板/网站
网站的代码可以在您在第3步中创建的存储库中找到，您可以根据自己的需求进行修改。如果您了解一些css，我鼓励您更改默认样式，使网站变得与众不同。在这样做时，请修改custom-style.scss以避免在更新模板时出现冲突。当您对代码进行更改时，Vercel应该会自动更新您的网站。

更新模板
在插件的设置菜单中，除了之前提到的设置外，还有一个名为“站点模板”的设置，其中有一个按钮上面写着“管理站点模板”。点击这个按钮应该会打开一个弹出窗口，里面有一个设置项“将站点更新到最新模板”，还有一个按钮上面写着“创建PR”。每当数字花园模板接收到任何更新时，都可以使用这个按钮来更新您的站点。它会在您的仓库中创建一个新的分支，并创建一个Pull Request到您的主分支。插件会在设置视图中向您呈现此URL。

如果您使用了“部署到Vercel”按钮，Vercel机器人将构建您站点的预览版本，您可以访问该版本以查看更改是否包含任何破坏性更改。URL应该在PR中可见。
当您准备好时，您可以在Pull Request页面上使用“合并pull request”按钮将更改合并到您的主分支，并使更改生效。

在将来，当有更新准备好时，您将收到一个视觉提示。目前您需要手动检查。如果您有最新版本，系统会告诉您。

支持
这个插件是我在空闲时间开发的。如果你觉得它有用，如果你愿意买杯咖啡来支持我，那将会让我非常开心，并且会激励我投入更多时间来继续开发。

请注意，你完全没有任何压力去这样做。这个插件是完全免费的，并且在可预见的未来也将保持免费。



