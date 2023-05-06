---
uid: 20230505232116
title: Obsidian 插件：Link Favicons 为笔记中的网页链接增加网站图标
description: 
author: 
type: other
draft: false
editable: false
modified: 20230506001926
---

# Obsidian 插件：Link Favicons 为笔记中的网页链接增加网站图标

## 概述

有时候我们的笔记中会记录、收藏一些网站链接，又或是援引一些文献参考链接。但是这些链接，往往不是以单纯的网址记录，而是以标题 + 链接的形式（`[网页标题](网页链接)`）。只看标题无法快速知道网页所属网站。

有了 Link Favicons 这个插件，你可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标（Favicons）。

> [!Note] 插件名片
> - 插件名称：Link Favicons
> - 插件作者：Johannes Theiner
> - 插件说明：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标。
> - 插件项目地址：[点我跳转](https://github.com/nekoshita/obsidian-auto-card-link)

>[!tip] sfsf
>[百度](http://www.baidu.com)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230505232701.png)

## 使用

- 自动检测当前笔记中链接内容，获取网站图标。
- 支持针对两种格式链接的
	- 链接形式 1：`[Obsidian](https://obsidian.md/)`
	- 链接形式 2：`https://obsidian.md/`
- 支持对于特定链接不添加网站图标（Favicons）
	- 在链接形式中增加 `|nofavicon` 即可，如：`[Display text|nofavicon](https://example.org)`

### 样式

- 添加的网站图标，支持源码模式、实时阅览模式、支持阅读模式，在插件设置中找到 `Show in Reading mode`、`Show in Source mode`、`Show in live preview` 打开即可，默认均为打开。
- 支持将网站图标位置的修改，在插件设置 `Icon Position` 中可以选择：
	- `Before the link`（在链接前插入网站图标）
	- `After the link` （在链接后插入网站图标）

### 网站图标获取方式

以下是插件提供的网站图标获取方式的对比表格，你可以根据你实际情况进行调整。

| 网站图标服务的获取              | Max Size  | Fallback                | max requests    |
| ------------------------------- | --------- | ----------------------- | --------------- |
| Google                          | 16x16px   | default icon            | no limit️       |
| DuckDuckGo                      | none      | default icon            | no limit        |
| Favicon Grabber                 | none      | none                    | 100 per minute  |
| The Favicon Finder (selfhosted) | 256x256px | automatically generated | no limit️       |
| Icon Horse                      | none      | automatically generated | fair use policy |
| Splitbee                        | none      | yes (from Google)       | unknown         |

### 兼容性

- 插件作者贴心的在插件设置中 `Test Providers` ，让你检测图标获取的有效性和速度。

### 高级自定义样式

如果想对网站图标（Favicons） 进行样式修改，则可以参考下面的 CSS 片段：

```CSS
body .link-favicon[data-is-readable-a-a] {
	filter: grayscale(100%);
}
```

如果想禁用网站图标（Favicons）样式，则可以参考下面的 CSS 片段：

```CSS
.external-link::after {
	display: none;
	content: '';
}

.external-link {
	background-image: none;
}
```

>[!Tip] 提示
>- 类似插件还有：[[external-favicon]]
