---
uid: 20230702210608
title: Quickadd 结合 CSS 实现挖空复习
tags: [Obsidian, quickadd,css]
description: Quickadd 结合 CSS 实现挖空复习
author: Mon
type: practice
draft: false
editable: false
modified: 20230702211413
---

# Quickadd 结合 CSS 实现挖空复习

## 概述

我有个转换挖空的 css 文件，它的作用是将高亮语法的文字遮挡住，当鼠标放在上面就能正常显示；实际使用过程中，我们有时候需要挖空辅助记忆，有时候需要使用高亮突出重点，这样我们就需要频繁地切换这个片段，一般有两种方法进行这样的操作：

1. 打开设置 **→** 外观 **→** css 代码片段切换；
2. 下载 MySnippets 在右下角状态栏直接切换。

以上两种做法后者更快更简单一些，但还是不能一步到位，作为一个懒癌后期患者在想，能不能给 css 片段绑定一个快捷键达到瞬间切换的目的，随后我就跑到了 Pkmer 社群里面请教大佬，@锋华大佬答应帮我写一份 js 文件，我真的是爱了，在此郑重感谢锋华大佬！对了他在群里叫@大脸猫皮皮。下面我将介绍这个脚本的使用方法。

## 操作步骤

### 第一步：创建 js 文件夹

新建一个文件夹用于存放 js 文件，本来库中有存放 js 文件的文件夹这步可以忽略。

![image.png](https://cdn.pkmer.cn/images/202307022107061.png!pkmer)

### 第二步：添加 js 文件

右击文件夹进入资源管理器，在当前文件夹下新建一个文本文档，命名为 `ToggleCssSnippets.js`

![image.png](https://cdn.pkmer.cn/images/202307022108543.png!pkmer)

用记事本打开文件将如下代码复制进去，代码第二行改成你需要绑定的 css 片段的名称。

```js

module.exports = async (params) => {
    const snippetName = "你需要绑定快捷键的 css 片段名称";
    const snippetPath = app.customCss.getSnippetPath(snippetName);
    if (!snippetPath) {
        new Notice(`Snippet ${snippetName} not found`);
    }

    const isSnippetsEnabled = app.customCss.enabledSnippets.has(snippetName)
        ? true
        : false;

    if (isSnippetsEnabled) {
        app.customCss.setCssEnabledStatus(snippetName, false);
        app.customCss.requestLoadSnippets();
    } else {
        console.log("fwefwef");
        app.customCss.setCssEnabledStatus(snippetName, true);
        app.customCss.requestLoadSnippets();
    }
};
```

### 第三步：利用 Quickadd 插件调用 js 文件

打开 quickadd 插件，点击 `Manage Macros` 按钮

![image.png](https://cdn.pkmer.cn/images/202307022108645.png!pkmer)

给新建的宏命名，点击 `Add macro` 按钮

![image.png](https://cdn.pkmer.cn/images/202307022109133.png!pkmer)

点击 `Configure` 按钮进入如下界面，选择相应的 js 文件，点击 `add`

![image.png](https://cdn.pkmer.cn/images/202307022109903.png!pkmer)

回到 quickadd 初始界面，新建一个命令，注意点亮旁边的小闪电，这是我们绑定快捷键的关键！

![image.png](https://cdn.pkmer.cn/images/202307022109093.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202307022109471.png!pkmer)

点击命令旁边的齿轮按钮，进入设置，选择刚才创立的宏文件。

![image.png](https://cdn.pkmer.cn/images/202307022109038.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202307022109565.png!pkmer)

### 第四步：绑定快捷键

进入 ob 设置页面点击快捷键，搜索你刚刚创建的 quickadd 命令的名称，并赋予其一个快捷键，大功告成！

![image.png](https://cdn.pkmer.cn/images/202307022110553.png!pkmer)

> [!hint] 注意
> 如果第一次使用不成功，可以重启 Obsidian 再试一下！

## CSS 片段

该片段使得包含高亮语法的文字被涂黑，鼠标悬浮能显示内容：

```css
:is(.markdown-preview-view, .markdown-rendered) mark {
  color: transparent !important;
}

:is(.markdown-preview-view, .markdown-rendered) mark:hover {
  color: var(--text-normal) !important;
}
```