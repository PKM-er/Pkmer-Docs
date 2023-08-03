---
uid: 20230803231105
title: Obsidian 插件：Link Favicons
tags: ['obsidian插件', 'readme']
description: 查看链接网站的网站图标。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232549
---

# Obsidian 插件：Link Favicons

> [!Note] 插件名片
> - 插件名称：Link Favicons
> - 插件作者：Johannes Theiner
> - 插件说明：查看链接网站的网站图标。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joethei/obsidian-link-favicon)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-favicon)

## 概述

查看链接网站的网站图标。

![Link Favicons](https://cdn.pkmer.cn/covers/link-favicon.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joethei/obsidian-link-favicon/master/README.md)
>

---

## Readme(翻译）

下面是 [[link-favicon]] 插件的自述翻译

## 链接网站图标

[Obsidian](https://obsidian.md) 的插件

![GitHub package.json version](https://img.shields.io/github/package-json/v/joethei/obsidian-link-favicon)
![GitHub manifest.json dynamic (path)](https://img.shields.io/github/manifest-json/minAppVersion/joethei/obsidian-link-favicon?label=lowest%20supported%20app%20version)
![GitHub](https://img.shields.io/github/license/joethei/obsidian-link-favicon)
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)
---

使用此插件，您可以在不使用任何自定义 CSS 的情况下查看链接网站的图标。

![Demo](https://i.joethei.space/Obsidian_zWTByulHmW.png)

适用于：[Admonition](https://github.com/valentine195/obsidian-admonition)

, [RSS Reader](https://github.com/joethei/obsidian-rss) 和许多其他插件。

还请查看 [适用于Firefox和基于Chromium的浏览器的链接网站图标](https://github.com/joethei/browser-favicon-links)。

## 图标提供商

您可以在设置中选择以下提供商：

| 提供商                                                              | 最大尺寸  | 回退选项                | 最大请求数量    |
|--------------------------------------------------------------------|-----------|-------------------------|-----------------|
| Google                                                             | 16x16 像素 | 默认图标                | 无限制️         |
| DuckDuckGo                                                         | 无        | 默认图标                | 无限制          |
| [Favicon Grabber](https://favicongrabber.com/)                     | 无        | 无                      | 每分钟 100 个     |
| [The Favicon Finder](https://github.com/mat/besticon) (自托管)     | 256x256 像素 | 自动生成                | 无限制️         |
| [Icon Horse](https://icon.horse/)                                  | 无        | 自动生成                | 公平使用政策     |
| [Splitbee](https://github.com/splitbee/favicon-resolver)           | 无        | 是 (来自 Google)         | 未知            |

根据您选择的提供商，图标可能会有所不同。

图标提供商只会接收您链接的主机名，例如 `forum.obsidian.md`，而不是 `https://forum.obsidian.md/t/custom-link-favicons-hiding-in-community-plugins/24112/5?u=joethei`。

## 覆盖图标

> 需要安装 [Icon Shortcodes](https://github.com/aidenlx/obsidian-icon-shortcodes) 插件

您可以在设置中使用您选择的图标覆盖任何域名的网站图标。

（请参见下面的演示 gif）

## 为 URI 方案定义图标

> 需要 [Icon Shortcodes](https://github.com/aidenlx/obsidian-icon-shortcodes) 插件

您还可以为 `mailto://`、`obsidian://` 或 `calculator://` 等 URI 方案添加图标。

要做到这一点，请在设置中指定 URI 方案的名称（不包括 `://`）。

（请参见下面的演示 gif 图）

![自定义图标演示](https://i.joethei.space/IJkX7xvrUB.gif)

## 禁用特定链接上的网站图标

如果您有一个链接，您不想看到网站图标，请在链接别名中添加 `|nofavicon`。

```md
[显示文本|nofavicon](https://example.org)
```

对于设计师

如果需要帮助进行样式设计，您还可以查看 Obsidian 会员群的 `#appearance` 频道（<https://obsidian.md/community）。>

如果您想要设计网站图标，可以使用类似下面的 CSS 代码片段，将所有网站图标显示为灰度。

```css
body .link-favicon[data-is-readable-a-a] {
	filter: grayscale(100%);
}
```

如果您想要禁用自己对网站图标的样式设计，可以检查 `data-favicon` 属性是否为 "true"。下面的示例将删除外部链接图标<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/External_link_font_awesome.svg/240px-External_link_font_awesome.svg.png" height="15px">。

```css
.external-link::after {
	display: none;
	content: '';
}

.external-link {
	background-image: none;
}
```

#### 颜色反转

默认情况下，对于被认为不可读的图标，会应用颜色滤镜以提高可读性。

有多个指标可以用来判断图标是否可读：

- `is-dark`，`is-light`：图标的颜色感知亮度是否为暗色/亮色。
- `is-readable-a-a`：根据 [W3C AA规范](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)。
- `is-readable-a-a-a`：根据 [W3C AAA规范](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html)。

默认情况下，使用 AA 值。

不建议使用 `is-dark`，`is-light` 值，因为它们不考虑背景颜色。

这些值是从平均颜色计算得出的。

使用最主要的颜色会更准确，但目前尚未实现。

### 对于开发者

只要你使用 [renderMarkdown](https://marcus.se.net/obsidian-plugin-docs/api/classes/MarkdownRenderer#rendermarkdown) 方法，这个插件就会为你的外部链接添加网站图标。

如果你不想在插件中添加链接图标，可以在调用该方法时将 `no-favicon` 添加到你的源路径中。

或者在链接元素上指定属性 `data-no-favicon`。
