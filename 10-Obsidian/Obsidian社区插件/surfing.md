---
uid: 20230711170833
title: Obsidian 插件：surfing -- 让 ob 成为网络浏览器
tags: [obsidain, 插件, 浏览器]
description: obsidian 的网络浏览器插件,允许你在 Obsidian v1.0 的标签页中浏览任意网页
author: cuman
type: basic
draft: false
editable: false
modified: 20230711180108
---

# Obsidian 插件：surfing -- 让 ob 成为网络浏览器

> [!Note] 插件名片
> - 插件名称：Surfing
> - 插件作者：Boninall
> - 插件说明：obsidian 的网络浏览器插件,允许你在 Obsidian v1.0 的标签页中浏览任意网页
> - 插件分类：体验增强
> - 插件项目地址：[点我访问](https://github.com/quorafind/obsidian-surfing)

## 简介

这是一款 Obsidian 插件，允许你在 Obsidian v1.0 的标签页中浏览任意网址。

这个插件的核心功能—— webview 是借鉴 [[obsidian-custom-frames]] 插件而实现的。

![image.png](https://cdn.pkmer.cn/images/202307111753244.png!pkmer)

## 功能介绍

- 核心功能
	- 浏览任意网页：该插件会劫持 Obsidian 的 file、http、https 协议，使得链接能直接在 Obsidian 里打开，而不是外部浏览器。对，本地 HTML 等资源也支持。
	- 编辑器网页搜索你可以在编辑器选中关键字后，右键在 web-browser 中打开，使用默认的搜索引擎搜索。
	- 网页内网页搜索：同样的，你可以在网页内右键使用默认的搜索引擎搜索。
	- 复制指向高亮的链接：同浏览器一样，你可以选中文字，复制指向该处的链接。
	- 在浏览器中使用书签直接在 Obsidian 中打开网址。
	- 复制视频时间戳 (实验性功能：目前仅支持 bilibili)：右键文字弹出复制时间戳的菜单，目前有些 bug，已知有时弹不出菜单。
- 辅助功能
	- 用外部浏览器打开当前 URL：右键菜单
	- 默认搜索引擎：设置项
	- 默认复制高亮的模板：设置项（目前仅支持非常简单的模板），请避免使用一些特殊字符
	- 支持浏览历史记录：前后跳转网页
	- 清除浏览历史记录：命令面板
	- 所有链接都在右侧同一个面板中打开：设置项
	- 切换是否在右侧同一面板中打开：命令面板
	- 简单的夜间模式：主要是为了 bilibili 的夜间观感，有些瑕疵，问题不大
- 书签管理
	  ![image.png](https://cdn.pkmer.cn/images/202307111759623.png!pkmer)
	可以在 ob 中维护一个浏览器书签。
	打开网页后点击这个书签就可以添加书签了。
	![image.png](https://cdn.pkmer.cn/images/202307111800509.png!pkmer)
	也支持导入外部书签，
	![image.png](https://cdn.pkmer.cn/images/202307111801161.png!pkmer)

## 使用方法

### 点击笔记中的链接

安装插件后不需要什么设置，surfing 插件已经接管了 obsidain 点开链接的默认行为，点击链接就会自动在 ob 中打开。

![image.png](https://cdn.pkmer.cn/images/202307111751168.png!pkmer)

### tab 页中显示一个类似浏览器的地址栏

开启这个选项 就可以新建 tab 页中 直接可以出现 surfing 搜索页。

![image.png](https://cdn.pkmer.cn/images/202307111749453.png!pkmer)

### 利用浏览器书签在 obsidain 中打开网站

插件注册了一个 Obsidain uri 协议，该协议允许你使用 `obsidian://web-open?url=<url>` 的网址在 Obsidian 中打开 Web-broswer

。其中 `<url>` 指网页地址链接。配合浏览器的 bookmarklets 特性可以实现点击浏览器的一个书签，就可以调用 ob 内打开当前浏览器网址。

surfing 设置中 点击按钮复制书签代码

![image.png](https://cdn.pkmer.cn/images/202307111733178.png!pkmer)

在浏览器中新建一个书签 url 里粘贴这个代码就可以了。

![11.gif](https://cdn.pkmer.cn/images/202307111747830.gif!pkmer)

## 高级技巧

对于中文用户，你可能希望复制的高亮链接是可以直接显示原文，这种情况下，你可以应用下述的 Quickadd 脚本：

```javascript
selObj = window.getSelection();
text = selObj.toString();
text = await decodeURIComponent(text)
this.quickAddApi.utility.setClipboard(text);

return text;
```

然后粘贴取代原来的文本内容即可。
