---
uid: 20240108160730
title: Firefox 浏览器开启垂直标签页
tags: [Firefox, 浏览器, 垂直标签页]
description: 关于垂直标签页的心得与Firefox垂直标签页的配置
author: ProudBenzene
type: other
draft: false
editable: false
modified: 20240513144452
---

# Firefox 浏览器开启垂直标签页

![Firefox 浏览器开启垂直标签页|800](https://cdn.pkmer.cn/images/202401081738575.png!pkmer)

## 垂直标签页的重要性

> 天不生垂直标签页，浏览器多标签页万古如长夜。
> <p align="right">—— 沃兹基硕德</p>

### 水平标签页的弊端

在以前没有垂直标签页、只有水平标签页的时代，打开十几甚至几十个标签页，想要时刻掌握这些标签页的内容并点击进入其中，是一件比较困难的事情。因为水平标签页有限的空间，会导致所有标签页挤在一起。这样，一旦标签页多起来，标签页的标题就会被挤压遮挡，进而导致用户根本不知道哪个标签页大概有什么内容，溺死在标签页的海洋里。![](https://cdn.pkmer.cn/images/202401081629965.png!pkmer)

### 垂直标签页的优势

举两个在我的使用中很常见的例子：

- 在一个网页中，发现很多不知道的点，然后一一打开标签页进行检索查明
- 从文献检索网站同时打开多篇文献的摘要页进行比对

因此对于工作中的我而言，很容易就会在不知不觉中打开一堆标签页。

因此对于我而言，浏览器能够从容优雅地处理同时打开的大量标签页是一项刚需（当然，*标签页组*也可以解决这个问题，但那就是另一个话题了）。

于是 Microsoft Edge 浏览器的垂直标签页功能应运而生：![](https://cdn.pkmer.cn/images/202401081636060.png!pkmer)

可以看到，虽然浏览器的长边比宽边长，但是垂直标签页下标签页的名称依然是水平向右的。这就使得垂直方向的空间仅需要容纳网站图标堆叠起来的长度，这一点大大增加了可以容纳标签页的数量。而只要展开垂直标签页页面，就可以轻易看到每个标签页的标题，进而对其大概内容产生把握。

![](https://cdn.pkmer.cn/images/202401081626653.png!pkmer)

所以相比水平标签页，垂直标签页功能对于生产力的提升是毫无疑问的。这也是我将 Edge 浏览器作为主力浏览器使用的最重要原因之一。目前的大厂浏览器中，除开 Edge，尽管 Safari 侧边栏有一部分可以用于显示标签页、Chrome 可以手动点击下箭头调出一个标签页垂直视图，但是像 Edge 这样开启功能后**完全去掉上方的垂直标签页、只在左侧显示垂直标签页、跟随浏览器深浅色模式进行切换**的干净利落且优雅的设计，恐怕还是仅此一家。![](https://cdn.pkmer.cn/images/202401091500335.png!pkmer) ![](https://cdn.pkmer.cn/images/202401081648029.png!pkmer)

### 垂直标签页≠侧边栏

需要注意的一点是，垂直标签页并不等于浏览器侧边栏。就拿上面 Safari 浏览器的截图举例：Safari 浏览器的侧边栏不止有当前打开的标签页，还有标签页组、书签、iCloud 标签页等等按钮，而且当前打开的标签页一栏默认还是折叠的……

Firefox 浏览器也差不多，不过它的侧栏连显示当前打开的标签页的功能都没有，和 Safari 属于是卧龙凤雏：![](https://cdn.pkmer.cn/images/202401081700292.png!pkmer)

**所以说，只有 Microsoft Edge 浏览器的垂直标签页，才是唯一真神。**

在文章接下来的篇幅中，我将讲述如何在 Firefox 中配置 Microsoft Edge 风格的垂直标签页。

## Firefox 配置垂直标签页

尽管 Firefox 没有原生支持的垂直标签页功能，但是鉴于其界面的高度可定制性，已经有开发者制作出了及其接近 Edge 浏览器的垂直标签页。

### 准备工作

- 在 Firefox 浏览器中安装 [Sidebery 扩展](https://addons.mozilla.org/zh-CN/firefox/addon/sidebery/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
- 根据自己的操作系统，从 [VerticalFox 项目](https://github.com/christorange/VerticalFox) 的 release 中下载对应的 `.zip` 压缩包

### 配置

1. 在地址栏中输入 `about:config` 并前往，接受风险提示
2. 搜索 `toolkit.legacyUserProfileCustomizations.stylesheets` 并双击设置为 true
3. 在地址栏中输入 `about:support` 并前往，在 **应用程序概要** 中找到 **配置文件夹** 并在电脑的文件浏览器中打开并进入路径文件夹
4. 新建 `chrome` 文件夹，名称必须全部小写
5. 复制下载好的 `userChrome.css` 到 `chrome` 文件夹中，重启浏览器
6. 打开 Sidebery 的设置，前往左侧栏的 **样式编辑器**，在右侧复制粘贴 `sidebery_styles.css` 中的代码：![](https://cdn.pkmer.cn/images/202401081719182.png!pkmer)
7. 浏览并个性化 Sidebery 插件的其他设置，获得最佳体验

至此，就可以获得一个体验接近甚至在某些方面超越 Edge 浏览器的带垂直标签页的 Firefox 浏览器。

### Sidebery 垂直标签页的特性

这里再列一下我认为这款 Sidebery 插件结合 CSS 定制垂直标签页比较舒适的点：

1. 符合我上面所说，拥有**完全去掉上方的垂直标签页、只在左侧显示垂直标签页、跟随浏览器深浅色模式进行切换**的干净利落且优雅的设计
2. **标签页层级分明**：如果某些标签页全都是由某一个标签页中的链接点击产生，那么它们都会归到母标签页的下面，显示出清晰的层级，并且可以折叠![](https://cdn.pkmer.cn/images/202401081729613.png!pkmer)
3. **不止标签页**：可以在垂直标签页中查看目前打开的标签页、收藏的书签等
4. **标签页组**：可以将几个标签页拖到一块，形成一个文件夹（标签页组）
5. **标签页面板**：即图中左上角的三个小按钮，分别是我的三个标签页面板，可以自定义；类似于 Arc 浏览器的 *space* 概念
6. **备份与同步**：可以手动备份、同步 Sidebery 的插件配置

BTW，对我而言，这个功能补齐了 Firefox 浏览器的生产力短板。目前 Firefox 已经是我的首要后备浏览器了🐲

![](https://cdn.pkmer.cn/images/202401081751109.png!pkmer)