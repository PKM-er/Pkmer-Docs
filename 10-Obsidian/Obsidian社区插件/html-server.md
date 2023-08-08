---
uid: 20230717122431
title: Obsidian 插件：Html Server 将你的笔记变为一个迷你网站
tags: [Obsidian, 插件, 网站, 发布, 分享]
description: Obsidian 插件：Html Server 将你的笔记变为一个迷你网站。帮你把 Obsidian 仓库作为一个 web 服务器，同时保持你的主题，并确保你的图像和文件链接的工作。
author: OS
type: basic
draft: false
editable: false
modified: 20230717130231
---

# Obsidian 插件：Html Server 将你的笔记变为一个迷你网站

## 概述

虽然 Obsidian 提供发布服务，但是有时候我们只想在内部网络，如办公环境或者家中局域网内访问，而不需要把你的内容放到互联网上。

一般情况下，这需要你具备一点开发和折腾电脑的知识，有没有一键化，集成的方式呢？

Html Server 插件就是为了这个诞生的，帮你把安装了此插件的 Obsidian 仓库，作为一个 web 服务器，同时保持你的主题，并确保你的图像和文件链接的工作。

> [!Note] 插件名片
> - 插件名称：Html Server
> - 插件版本：1.0.4
> - 插件作者：Pr0dt0s
> - 插件描述：帮你把 Obsidian 仓库作为一个 web 服务器，同时保持你的主题，并确保你的图像和文件链接的工作
> - 插件项目地址：[点我跳转](https://github.com/Pr0dt0s/obsidian-html-server)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-server)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230717122956.png!pkmer)

- 支持主题样式
- 支持笔记跳转
- 支持基础 Markdown 的语法展示成网页状态

## 使用

> [!Tip] 注意
> - 插件处于起步阶段，一些细节还不是即插即用的，你可以根据下面说明，先进行设置再使用。

### 设定

- 安装插件后，打开插件设置
- Listening port： 中可以设定你自己需要的端口号：默认 8080，不修改也无问题，除非你有其他类似服务冲突。
- Index File：设定一个笔记做为网站首页。【必须设置】

### 如何开启

- Ctrl/Cmd + P，呼出命令面板，检索“HTML sever”，并选择 "Start web sever"
- 或者在插件设置中，打开“Start Server automatically.”

### 访问

- 需要在浏览器地址栏输入对应地址：`http://localhost:8080（设置中Listening port中的数字）/Home.md(你在设置Index File中的文件，如果带路径请包含路径)`
	- 默认支持本地计算机，如果你的局域网或者能够映射外部网络，也可以使用 ip 地址加端口的方式。
- 支持第三方主题和自定义样式，但是不支持依赖脚本运行和插件运行的内容。

> [!Tip] 注意
> - 跳转：目前插件不支持解析 obsidian 的内链格式 `[[]]`，需要使用 `[]()`
> - 数据交互：所有笔记上的可操作交互，只能在网页上静态展示和操作，但并不影响你的笔记，比如任务列表：网页上可以显示你的任务语法，并显示成勾选框，也支持交互，但是请注意这些交互并不会这真的影响你的笔记。

### 其他设置

- Use Simple Authentication (User/Password)：可以设置的简单用户名密码来控制访问

![image.png](https://cdn.pkmer.cn/images/20230717124903.png!pkmer)

- Show Advanced Settings：支持一些高级设定，比如不同页面的地址和 ip 段转化

> [!Tip] 注意
> - 这个插件和直接把笔记做为网站，让所有人访问还是有区别的，因为还需要各种其他辅助映射和设置，尤其是个人笔记偏私密，我们并不建议你在初学者阶段这么做
