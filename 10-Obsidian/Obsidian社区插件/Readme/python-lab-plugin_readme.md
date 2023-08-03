---
uid: 20230803231105
title: Obsidian 插件：Python lab plugin
tags: ['自动化', 'obsidian插件', 'readme']
description: 一个用于实验Python脚本和更多内容的界面。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232430
---

# Obsidian 插件：Python lab plugin

> [!Note] 插件名片
> - 插件名称：Python lab plugin
> - 插件作者：Cristian Vasquez
> - 插件说明：一个用于实验 Python 脚本和更多内容的界面。
> - 插件分类：[' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cristianvasquez/obsidian-lab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?python-lab-plugin)

## 概述

一个用于实验 Python 脚本和更多内容的界面。

![Python lab plugin](https://cdn.pkmer.cn/covers/python-lab-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cristianvasquez/obsidian-lab/master/README.md)
>

---

## Readme(翻译）

下面是 [[python-lab-plugin]] 插件的自述翻译

# Obsidian Python 实验室插件

Obsidian Python 实验室只是一个集合了一些简单接口的工具，旨在让 Python 开发者能够在 Obsidian 中使用和测试功能。

## 动机

假设你有一个很棒的脚本可以做以下事情：

- 找到与当前笔记相似的笔记。
- 翻译一段文本。
- 写一篇笔记的摘要。
- ....

而且你想要快速地在 Obsidian 中查看它是否有用，只需使用一些 Python 代码。

这就是这个插件的目的！

为什么要使用这个插件？为什么不全部使用 Javascript 编程？

有时候在 Python 中进行实验会更快，并且如果需要的话，稍后可以将其转换为 Javascript。尤其是在使用自然语言处理库时，这一点尤为明显。

它是如何工作的？

该插件只是一个 GUI，用于调用您选择的服务器。目前，该插件已实现以下操作：

1. 插入新文本。
2. 替换当前文本。
3. 在面板中显示元素。
4. 进行聊天对话

![使用它](./docs/use.png)

## 插件 - 服务器交互

1. 当用户运行插件的命令之一时，例如“替换花式文本”，插件会向您的服务器发出 POST 请求，其中包含一些上下文数据，例如当前笔记、所选内容等。

假设您的脚本返回了一个随机笔记列表。然后插件执行以下操作：

> POST: <http://127.0.0.1:5000/scripts/some_list>

附带一些上下文数据

```json
{
  "vaultPath": "/home/cvasquez/obsidian/development",
  "notePath": "snippets-plugin/Test1.md"
}
```

然后服务器返回一个 JSON 响应，插件使用该响应在小部件中显示一些内容

> 响应

```json
{
  "contents": [
    {
      "info": { "score": "0.9820077811564822" },
      "path": { "path": "/path/to/the/note 1.md" }
    },
    {
      "info": { "score": "0.9365154046414078" },
      "path": { "path": "/path/to/the/note 2.md" }
    }
  ]
}
```

## 快速入门

1. 安装插件。（也许你已经安装了）
2. 在某个地方编写一个脚本

```python
def hello():
    return {
        'contents': f'Hello world!'
    }
```

1. 运行应用程序以公开脚本。

![服务器](./docs/server.png)

1. 插件应该现在能够检测到脚本。然后需要配置操作以指定它如何与用户交互。选项的任何更改都将持久保存在插件配置中。

![选项](./docs/configure.png)

1. 使用它！

![示例小部件](./docs/chat.png)

示例 Python 服务器

我编写了一个最小化的服务器 [obsidian-lab-py](https://github.com/cristianvasquez/obsidian-lab-py)，它公开了一些脚本。这可能对你有用。我每次都使用不同的东西，就像这个 [示例](https://gist.github.com/cristianvasquez/6b8a13d6452b7600a64b4e554939e052) 一样。

## 构建插件

如果插件是从商店安装的，则不需要进行此操作。然而，它与其他所有插件一样进行构建。

1. 将此存储库克隆到

/{vault}/.obsidian/plugins

1. 安装依赖项

    yarn install

2. 构建应用程序

    yarn build

这将构建主文件，Obsidian 应该能够检测到。在 Obsidian 中的社区插件中激活插件。

## 论坛

该存储库已启用 GitHub [讨论](https://github.com/cristianvasquez/obsidian-lab/discussions)。

## 状态

这仍然是一个概念验证；请发送任何反馈意见 :)

# 贡献

欢迎并感谢提交拉取请求。
