---
uid: 20240131162612
title: Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体
tags: [quickadd脚本]
description: Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体
author: 熊猫别熬夜,ProudBenzene,calmwaves
type: other
draft: false
editable: false
modified: 20240131164758
---

# Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633076.png!pkmer)

## 概述

很多情况下，我们分享自己的 Obsidian 精美界面时，并不希望暴露自己的笔记或者文件夹上面的内容，毕竟隐私很重要，这里提供一个方案——设置全局的隐私字体，这里有 @Calmwaves 推荐的一个 [二维码字体](https://github.com/hnzxs/xiaosongQRfont)，个人感觉非常适合当做一种隐私字体，而且看起来也比较好看。

> PS：二维码字体可以通过扫描获取文字，安全性并不高，如果分享的界面是极为隐私的内容，请采用其他方法。

为了方便调用这个隐私字体，可以配置 Quickadd 脚本 (脚本由 @ProudBenzene 提供)，另外用 Commander 插件制作一个控制开关按钮：

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633077.gif!pkmer)

## 配置教程

### 第一步：下载并安装二维码字体

- 二维码字体链接：<https://github.com/hnzxs/xiaosongQRfont>
	- 安装字体到系统后可以进行下面操作

### 第二步：配置 CSS

需要配置 CSS 片段，设置 Obsidian 中所有字体为该二维码字体，即复制下面的 CSS 到一个 `.css` 文件中，比如我命名为：`[字体-熊猫]隐私字体.css`，并移动到 `{你的笔记库路径}\.obsidian\snippets` 文件夹中：

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633078.png!pkmer)

```css
body {
  --privacy-font: "xiaosongQRfont";
  --font-default: var(--privacy-font) !important;
  --default-font: var(--privacy-font) !important;
  --font-family-editor: var(--privacy-font) !important;
  --font-monospace-default: var(--privacy-font) !important;
  --font-interface-override: var(--privacy-font) !important;
  --font-text-override:var(--privacy-font) !important;
  --font-monospace-override: var(--privacy-font) !important;
}
```

### 第三步：配置 Quickadd 的控制 CSS 开关的脚本

Quickadd 可以用 Capture 或者 Macro 来设置脚本，Capture 里面需要放到 `js quickadd` 的代码块里面，Macro 里面就需要配置 js 文件。

使用 Capture 就不需要用 Macro 了，不过 Macro 依赖于代码文件，可以实时编辑修改，如果你需要修改代码可能会方便点，麻烦的就是需要自己复制代码文件到一个 js 文件中，以及配置 Macro。

> 这个控制 CSS 的脚本基本不需要变动，修改文件名就行了，我个人推荐采用 Capture 的方式比较方便点。

#### Capture 配置

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633080.png!pkmer)

````md
```js quickadd
const snippetName = "[字体-熊猫]隐私字体";
const snippetPath = app.customCss.getSnippetPath(snippetName);
if (!snippetPath) {
	new Notice(`Snippet ${snippetName} not found`);
}

const isSnippetsEnabled = app.customCss.enabledSnippets.has(snippetName)
	? true
	: false;

if (isSnippetsEnabled) {
	console.log("关闭");
	app.customCss.setCssEnabledStatus(snippetName, false);
	app.customCss.requestLoadSnippets();
} else {
	console.log("启动");
	app.customCss.setCssEnabledStatus(snippetName, true);
	app.customCss.requestLoadSnippets();
}
```
````

#### Macro 配置 (可选)

```js
module.exports = async (params) => {
    const snippetName = "[字体-熊猫]隐私字体";
    const snippetPath = app.customCss.getSnippetPath(snippetName);
    if (!snippetPath) {
        new Notice(`Snippet ${snippetName} not found`);
    }

    const isSnippetsEnabled = app.customCss.enabledSnippets.has(snippetName)
        ? true
        : false;

    if (isSnippetsEnabled) {
        console.log("关闭");
        app.customCss.setCssEnabledStatus(snippetName, false);
        app.customCss.requestLoadSnippets();
    } else {
        console.log("启动");
        app.customCss.setCssEnabledStatus(snippetName, true);
        app.customCss.requestLoadSnippets();
    }
};
```

### 第四步：配置快捷键或者 Commander 按钮

可以根据自身使用习惯配置对应的快捷键或者一个按钮，或者直接通过 Quickadd 来调用：

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633081.png!pkmer)

#### 配置快捷键

配置快捷键需要把 Quickadd 中勾选⚡的符号来注册快捷键

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633082.png!pkmer)

然后在 Obsidian 设置中配置快捷键

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633083.png!pkmer)

#### 配置 Commander 按钮

配置快捷键需要把 Quickadd 中勾选⚡的符号来注册快捷键

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633082.png!pkmer)

在 Commander 中配置该快捷键的按钮，我是注册在**首页**需要在**外观**中开启**显示标签页标题栏**：

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633085.png!pkmer)

**Commander 配置**：

![Quickadd 脚本 - 控制自定义 CSS- 设置二维码字体](https://cdn.pkmer.cn/images/202401311633086.png!pkmer)