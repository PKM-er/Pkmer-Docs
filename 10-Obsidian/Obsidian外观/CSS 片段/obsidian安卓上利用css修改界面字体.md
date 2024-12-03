---
uid: 20230821173403
title: Obsidian 安卓上利用 CSS 修改界面字体
tags: [Obsidian, css]
description: 将ttf文件转为css来自定义字体
author: calmwaves
type: basic
draft: false
editable: false
modified: 20231209100721
---

# Obsidian 安卓上利用 CSS 修改界面字体

安卓手机上自定义字体不能使用系统字体，但是我们可以通过直接将字体文件嵌入到 css 中来实现修改界面字体，以下提供了三种可选方案，任选一种即可。

## 调用在线字体

reference: [简单调用霞鹜文楷字体 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/17543)

```css
@import url("https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.6.0/lxgwwenkaiscreen.css");

* {
    /* Screen version */
    font-family: "LXGW WenKai Screen", sans-serif;
}
```

如果要用思源宋体的话，就是下面这个 css 片段

```css
@import url("https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@500;700&display=swap");

* {
    font-family: "Noto Serif SC", sans-serif;
}
```

这里主要有两个参数，一个是 `url(xxxx)` 里的字体在线地址，一个是 `font-family` 里的与 url 对应的字体名称，这就需要自己去获取相关资源了。

以霞鹜文楷为例，url 地址来自 [【如需网页上嵌入，请看这里】webfont npm 包 · Issue #24 · lxgw/LxgwWenKai](https://github.com/lxgw/LxgwWenKai/issues/24)

> [!warning]
> 缺点是断网离线情况的下，字体不能正常加载
> 可以采用第二种方法在断网时仍能加载字体

## 把字体转为本地 css 文件

仍旧以霞鹜文楷为例：

1. 下载 ttf 文件 [Releases · lxgw/LxgwWenKai](https://github.com/lxgw/LxgwWenKai/releases)
2. 利用这个网站将 ttf 转成 css 文件 <https://transfonter.org/>，**唯一缺点是 ttf 文件不能超过 15MB**（霞鹜文楷的屏幕阅读版就超过了）
    1. 点击 Add fonts 按钮, 上传 .ttf 字体文件
    2. 打开 Family support 和 Base64 encode 开关, Formats 只选择 "WOFF2" 选项，点击 Convert 按钮
    3. 转换完成后会生成下载链接, 点击 Download 下载即可
3. 解压下载的文件 zip，找到其中的 `stylesheet.css` 打开（这个文本文件可能会很大，用记事本打开不一定流畅，可以找找别的文本编辑器）可以看到文件前两行，记住这个名字 `'LXGW WenKai GB'`：

```css@font-face {
    font-family: 'LXGW WenKai GB';
```

再给 css 文件上面添加这么一句调用代码就行，字体名称要一致。（**我一般将这一句写在另一个 css 文件里，stylesheet.css 文件太大了不好编辑**）

```css
* {
    font-family: "LXGW WenKai GB", sans-serif;
    }
```

> [!tip]
> 我将霞鹜文楷（包含了调用代码）的 css 文件上传到了 [此处](https://github.com/calmwaves111/AllAboutObsidian/blob/main/LXGW%20WenKai%20GB.css)，如有需要可以取用，你只需要将这个 css 文件放在 snippet 文件夹里，然后在 obsidian 里启用这个 css 即可。

## 插件 custom fonts

插件介绍：[[custom-font-loader]]

2023-09-23，新版本已经能处理字体大文件了，可以使用这个插件来自定义字体。

-   将字体文件（.woff、.ttf 和 .woff2）添加到 `.obsidian/fonts` 文件夹中。
-   打开插件设置，然后从下拉菜单中选择所需的字体。
-   所选字体现在将应用于整个仓库。您可以随时切换字体。

~~2023-08-18，新插件，我试用了一下，但是一直弹出 processing file，估计是中文字体文件太大了，所以这个插件暂时还用不了~~
