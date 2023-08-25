---
uid: 20230602131611
title: Omnivore
tags: [剪藏]
description: 开源稍后读剪藏解决方案 
author: windilycloud
type: basic
draft: false
editable: false
modified: 20230825095949
---

# Omnivore

[Omnivore](https://github.com/omnivore-app/omnivore) 是一款全平台的稍后读解决方案，其拥有以下核心特性：

- 完全开源，支持自建
- 自动剪藏网页，自动去除无关信息，保存到云端
- 支持高亮，批注，搜索，标签，分享
- 全平台，包括浏览器插件，web 应用，安卓，原生 IOS 应用
- 离线支持
- 全键盘操作
- 支持 API 第三方集成
- 支持 newsletter
- 支持 Obsidian，Logseq 插件同步内容和批注

![image.png](https://cdn.pkmer.cn/images/20230602174423.png!pkmer)

## 安装

参考官网文档：[安装 | Omnivore 使用文档](https://docs.omnivore.app/zh/using/install.html)

浏览器扩展用于保存页面和 URL。安装扩展后，您可以点击 Omnivore 扩展按钮保存当前页面，或点击浏览器上下文菜单保存 URL 链接。有关保存项目的更多信息，请查看我们关于 [saving](https://docs.omnivore.app/zh/using/saving.html) 的文档。

- [在 Chrome 上安装](https://omnivore.app/install/chrome)
- [在 Edge 上安装](https://omnivore.app/install/edge)
- [在 Firefox 上安装](https://omnivore.app/install/firefox)
- [在 Safari 上安装](https://omnivore.app/install/safari)

> [!warning] 注意
> Android 应用处于预发布状态且功能有限。我们建议结合使用 Android 应用和 Android 上的 Progressive Web App，以获得最佳体验。

- [在 iOS 上安装](https://omnivore.app/install/ios)
- [在 Android 上安装](https://omnivore.app/install/android)：这是谷歌商店的链接，下载不了可以在 pkmer 知识管理交流 QQ 群 825255377 获取

## 使用

有两种方式，一种是自建，这里就不说了，看官方文档，另一种是使用官方的服务。官方服务完全是由开源爱好者自费驱动的，为了平衡开支，后续应该会接入一些付费项目，比如文字转真人语音，接入 AI 等功能。但绝大多数功能都是免费的，也可自建。截止本文写作时间，没有任何付费服务。

访问 [Omnivore web网站](https://omnivore.app/) 或者在各 app 内，注册帐号，即可使用。

对于网页应用，配合浏览器扩展能实现一键保存网页内容到 app 内，下面以 [Unbundling Tools for Thought](https://borretti.me/article/unbundling-tools-for-thought) 为例，保存后在 app 内看到是这样的：

![image.png](https://cdn.pkmer.cn/images/20230603204205.png!pkmer)

- 左侧分别是打标签，笔记本，编辑元信息，删除，归档
- 右上角是设置字体，宽高，主题，行距等自定义设置项

极致的优雅和简洁，没有任何多余的内容，图片和链接都将完整的存到 omnivore 的服务器上，即使网页失效了也能查看。

![image.png](https://cdn.pkmer.cn/images/20230603204513.png!pkmer)

在主页，可以管理剪藏的内容，文件，标签，阅读进度，搜索等内容该有的都有。

![image.png](https://cdn.pkmer.cn/images/20230603204810.png!pkmer)

## 和 Obsidian 联用

官方开发了 Obsidian 插件，支持下述操作：

- 以 Markdown 格式导入高亮和保存的文章到 Obsidian 中
- 基于 Omnivore 的数据创建图谱
- 通过高级搜索语法自定义导入规则
- 通过自定义模板导入数据

使用方式：

1. 在 Obsidian 插件社区下载 Omnivore 插件
2. 在插件设置页点击链接，获取 API Key
3. 打开 Obsidian Omnivore 插件输入 API Key 和必要的配置
4. 运行命令面板 (默认 Ctrl + P 或者 CMD + P)，输入 Omnivore 选择同步即可

## 和 Logseq 联用

功能和 Obsidian 的插件功能差不多

1. 在 Logseq 的插件市场安装
2. 在 [Omnivore API 生成页](https://omnivore.app/settings/api) 获取 API Key
3. 在 Logeseq 的插件设置页粘贴 API Key
4. 运行命令面板 (默认 Ctrl + Shift + P 或者 CMD +Shift + P)，输入 Omnivore 选择同步即可，或者点击 Logseq 右上角的 Ominivore 图标同步也行

## 横评

同样的稍后读包含剪藏批注的软件常用的有简悦，Cubox，它们在功能上目前比 Omnivore 强大很多，但是共同的缺点是不开源，简悦低价买断还好，Cubox 收年费，除此之外：

- 简悦功能强大，但配置对大多数人来说相对复杂，和其它软件联动在本地联动轻松，但是在跨端上就很乏力，简悦还是以本地 PC 体验更好。
- Cubox：免费限制太多，不开源不能自建，没有和 Obsidian 联动的功能，一切以官方开发为主。Windows 端是 Web 应用，体验不是太好。

Ominivore 就胜在一个简单，基本上一个帐号就不用管任何设置了。

相对来说 Omnivore 处于非常早期的阶段，但是开发者在社群里积极收集意见和开发。我还是更倾向于这个全端完全开源的项目，毕竟在这之前，似乎并没有类似的开源项目诞生。
