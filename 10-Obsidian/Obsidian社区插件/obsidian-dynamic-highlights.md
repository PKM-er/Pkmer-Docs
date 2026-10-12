---
uid: 20230429231506
title: Obsidian 插件：Dynamic Highlights 快速为笔记增加高亮
tags: [Obsidian, 插件, 高亮, 缩进, 美化]
description: Obsidian 插件：Dynamic Highlights 快速为笔记增加高亮
author: Bon
type: other
draft: false
editable: false
modified: 20240426235642
---

# Obsidian 插件：Dynamic Highlights 快速为笔记增加高亮

## 概述

插件简单介绍可以满足你以下的需求：

- 高亮文章内的同类词
- 利用正则来赋予某一个关键词、或者关键词所在的行 CSS CLASS 属性，因此你可以直接基于这个 CSS CLASS 属性来高亮该关键词。

以上的两个功能也许在其它类型的工作中起不了什么作用，但是如果你经常需要翻阅法条，或者你在文章中需要重复地写入一些逻辑符/发条名等，你就会发现这个插件的妙处在于可以让你清晰了解当前你需要看的内容。

> [!Note] 插件名片
> - 插件名称：Dynamic Highlights
> - 插件作者：NothingIsLost
> - 插件说明：根据正则表达式，为笔记内容增加高亮和样式
> - 插件分类：['Obsidian', '插件', '高亮', '缩进', '美化']
> - 插件项目地址：[点我跳转](https://github.com/nothingislost/obsidian-dynamic-highlights)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dynamic-highlights)

## 使用

你在社区插件中下载并且安装当前插件后，你就可以使用这个插件了，在这个插件的设置面板中，你可以在以下的内容中填入内容：

![Obsidian 插件之 Dynamic Highlights 1.png](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%E4%B9%8B%20Dynamic%20Highlights%201.png!pkmer)

1、在这里填入你对这个规则的命名，例如“逻辑符或者 Block-ID”，这个会作为一个 CLASS 属性加到匹配内容中；

![Obsidian 插件之 Dynamic Highlights 2.png](https://cdn.pkmer.cn/images/Obsidian%20%E6%8F%92%E4%BB%B6%E4%B9%8B%20Dynamic%20Highlights%202.png!pkmer)

- 1 和 2 之间的马赛克块是用于快速设置颜色的选择面板。

2、在这里填入你的检索式，在未开启 3 之前，只支持单词匹配；

3、开启后支持正则表达式的输入，例如“(AND|OR|NOT)”或者“第\w{1,}条” 等类似的标记（前者在专利检索或者分析的时候使用，后者经常用于查看法条判例）；

4、开启后匹配指定规则的内容会被加上 CSS CLASS 属性；

5、开启后在匹配指定规则的内容的当前行加上 CSS CLASS 属性，使用场景是高亮一整条判例的写法，或者用于高亮你更感兴趣的关键词行（对于在 Obsidian 中看纯文本的内容会有奇效）；

6、开启后在匹配指定规则的内容的头部加上 CSS CLASS 属性，使用场景是加 icon 属性，相当于一个简单化的 Supercharge Links 插件；

7、同上，但是是给尾部加上 CSS CLASS 属性；

8、有别于需要你额外创建一个 CSS Snippet 然后再去 Obsidian 中开启，你可以直接在这里写入你需要的 CSS 样式：

```css
.逻辑符高亮 {
    background-color: #FFF
}
```

最后点一下那个保存图标，你的这个规则就会在下次你编辑以后就会实时生效了。

## 实际使用场景

### 隐藏 Block-ID

其实这个插件更类似一个视觉增强插件，如果你希望在这个上边找到什么很特别的用法可能会比较麻烦；一个常见的使用方法就是用于 Obsidian 的块引用的后续字符，例如： ^ac944d

因为 Obsidian 在引用行的内容的时候，会提供以下的额外信息： ` [[Obsidian 插件之 Dynamic Highlight#^ac944d]]` 也即后续的 `#^ac944d` ，这个由于显示中总是会显示后续的 `#^123456` 这样的随机字符串，所以常用的一个隐藏方式就是采用正则隐藏掉这部分内容，例如 `#\^\w{6}` ，然后在 css 中加上 display: none。

这部分内容就能直接在界面中完全隐藏了。

顺带一提，原地址中的 block id 本身就自带了一个 CSS Class ，因此你可以直接隐藏对应的内容。

### 特定内容词条等关键字高亮

除了我上述说的使用场景中的法条高亮的场景，但是对于我个人来说，我更常用的是高亮“行为人”以及“当事人”这类的特殊名称，以实现快速在法条判例中浏览内容。

此外，还有就是高亮专利号之类的方案，例如高亮 CN21231231231 这样的字符串来实现快速了解到当前的文件是和哪些专利文件是关联的。

总结一下就是这个工作流就是为了加强你在 Obsidian 中管理文献笔记/检索报告/法条判例。

### 实现中文首行缩进

导入以下规则：

```json
[
    "first-line": {
        "class": "first-line",
        "color": "#42188038",
        "regex": true,
        "query": "^[\\u4e00-\\u9fa5]{1}",
        "mark": [
          "start"
        ],
        "css": ".first-line-start {\n  width: 33px;\n display: inline-block;\n}"
      }
]
```

### 给 `HH:mm` 前边加上时钟图标

有一部分用户是在使用着 Obsidian-memos 的，那么这部分用户在打开对应的日记文件的时候，可以考虑给对应的 `HH:mm` 样式的内容加上相关的属性，对应的 CSS 规则如下：

```css
/* @settings
name: Time Color
id: time
settings:
    - 
        title: Time Color
        description: Change the color of the time mark
        id: time-color		
        type: variable-themed-color
        format: hex
        default-dark: '#E45858'
        default-light: '#E45858'
    - 
        title: Time Font Color
        description: Change the  color of the time font mark
        id: time-font-color		
        type: variable-themed-color
        format: hex
        default-dark: '#FFFBF0'
        default-light: '#FFFBF0'

*/

.theme-light, .theme-dark {
       --time-color: #E45858;
       /* --time-dark-color: #2b9183; */
       --time-font-color: #FFFBF0;
}

.time {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.time::before {
    content: "🕒";
    background-color: "";
}

.theme-light .light-time-1 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-1::before {
    content: "🕐";
    background-color: "";
}

.theme-light .light-time-1-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-1-5::before {
    content: "🕜";
    background-color: "";
}

.theme-light .light-time-2 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-2::before {
    content: "🕑";
    background-color: "";
}

.theme-light .light-time-2-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-2-5::before {
    content: "🕝";
    background-color: "";
}

.theme-light .light-time-3 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-3::before {
    content: "🕒";
    background-color: "";
}

.theme-light .light-time-3-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-3-5::before {
    content: "🕞";
    background-color: "";
}

.theme-light .light-time-4 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-4::before {
    content: "🕓";
    background-color: "";
}

.theme-light .light-time-4-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-4-5::before {
    content: "🕟";
    background-color: "";
}

.theme-light .light-time-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-5::before {
    content: "🕔";
    background-color: "";
}

.theme-light .light-time-5-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-5-5::before {
    content: "🕠";
    background-color: "";
}

.theme-light .light-time-6 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-6::before {
    content: "🕕";
    background-color: "";
}

.theme-light .light-time-6-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-6-5::before {
    content: "🕡";
    background-color: "";
}

.theme-light .light-time-7 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-7::before {
    content: "🕖";
    background-color: "";
}

.theme-light .light-time-7-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-7-5::before {
    content: "🕢";
    background-color: "";
}

.theme-light .light-time-8 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-8::before {
    content: "🕗";
    background-color: "";
}

.theme-light .light-time-8-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-8-5::before {
    content: "🕣";
    background-color: "";
}

.theme-light .light-time-9 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-9::before {
    content: "🕘";
    background-color: "";
}

.theme-light .light-time-9-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-9-5::before {
    content: "🕤";
    background-color: "";
}

.theme-light .light-time-10 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-10::before {
    content: "🕙";
    background-color: "";
}

.theme-light .light-time-10-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-10-5::before {
    content: "🕥";
    background-color: "";
}

.theme-light .light-time-11 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-11::before {
    content: "🕚";
    background-color: "";
}

.theme-light .light-time-11-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-11-5::before {
    content: "🕦";
    background-color: "";
}

.theme-light .light-time-12 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-12::before {
    content: "🕛";
    background-color: "";
}

.theme-light .light-time-12-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-12-5::before {
    content: "🕧";
    background-color: "";
}

.theme-dark .light-time-1 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-1::before {
    content: "🕐";
    background-color: "";
}

.theme-dark .light-time-1-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-1-5::before {
    content: "🕜";
    background-color: "";
}

.theme-dark .light-time-2 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-2::before {
    content: "🕑";
    background-color: "";
}

.theme-dark .light-time-2-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-2-5::before {
    content: "🕝";
    background-color: "";
}

.theme-dark .light-time-3 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-3::before {
    content: "🕒";
    background-color: "";
}

.theme-dark .light-time-3-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-3-5::before {
    content: "🕞";
    background-color: "";
}

.theme-dark .light-time-4 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-4::before {
    content: "🕓";
    background-color: "";
}

.theme-dark .light-time-4-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-4-5::before {
    content: "🕟";
    background-color: "";
}

.theme-dark .light-time-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-5::before {
    content: "🕔";
    background-color: "";
}

.theme-dark .light-time-5-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-5-5::before {
    content: "🕠";
    background-color: "";
}

.theme-dark .light-time-6 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-6::before {
    content: "🕕";
    background-color: "";
}

.theme-dark .light-time-6-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-6-5::before {
    content: "🕡";
    background-color: "";
}

.theme-dark .light-time-7 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-7::before {
    content: "🕖";
    background-color: "";
}

.theme-dark .light-time-7-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-7-5::before {
    content: "🕢";
    background-color: "";
}

.theme-dark .light-time-8 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-8::before {
    content: "🕗";
    background-color: "";
}

.theme-dark .light-time-8-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-8-5::before {
    content: "🕣";
    background-color: "";
}

.theme-dark .light-time-9 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-9::before {
    content: "🕘";
    background-color: "";
}

.theme-dark .light-time-9-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-9-5::before {
    content: "🕤";
    background-color: "";
}

.theme-dark .light-time-10 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-10::before {
    content: "🕙";
    background-color: "";
}

.theme-dark .light-time-10-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-10-5::before {
    content: "🕥";
    background-color: "";
}

.theme-dark .light-time-11 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-11::before {
    content: "🕚";
    background-color: "";
}

.theme-dark .light-time-11-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-11-5::before {
    content: "🕦";
    background-color: "";
}

.theme-dark .light-time-12 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-12::before {
    content: "🕛";
    background-color: "";
}

.theme-dark .light-time-12-5 {
    color: var(--time-font-color) ; /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style:normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-12-5::before {
    content: "🕧";
    background-color: "";
}
```

而如果需要引入规则的话，将下列 Import 到 Dynamic Highlights 插件中即可：

```json
{
  "light-time-8-5": {
    "class": "light-time-8-5",
    "color": "#E45858",
    "regex": true,
    "query": "(08|20):[3-5][0-9]",
    "mark": [
      "match"
    ],
    "css": ""
  },
  "light-time-8": {
    "class": "light-time-8",
    "color": "#E45858",
    "regex": true,
    "query": "(08|20):[0-2][0-9]"
  },
  "light-time-7-5": {
    "class": "light-time-7-5",
    "color": "#E45858",
    "regex": true,
    "query": "(07|19):[3-5][0-9]"
  },
  "light-time-7": {
    "class": "light-time-7",
    "color": "#E45858",
    "regex": true,
    "query": "(07|19):[0-2][0-9]"
  },
  "light-time-6-5": {
    "class": "light-time-6-5",
    "color": "#E45858",
    "regex": true,
    "query": "(06|18):[3-5][0-9]"
  },
  "light-time-6": {
    "class": "light-time-6",
    "color": "#E45858",
    "regex": true,
    "query": "(06|18):[0-2][0-9]"
  },
  "light-time-5-5": {
    "class": "light-time-5-5",
    "color": "#E45858",
    "regex": true,
    "query": "(05|17):[3-5][0-9]"
  },
  "light-time-5": {
    "class": "light-time-5",
    "color": "#E45858",
    "regex": true,
    "query": "(05|17):[0-2][0-9]"
  },
  "light-time-4-5": {
    "class": "light-time-4-5",
    "color": "#E45858",
    "regex": true,
    "query": "(04|16):[3-5][0-9]"
  },
  "light-time-4": {
    "class": "light-time-4",
    "color": "#E45858",
    "regex": true,
    "query": "(04|16):[0-2][0-9]"
  },
  "light-time-3-5": {
    "class": "light-time-3-5",
    "color": "#E45858",
    "regex": true,
    "query": "(03|15):[3-5][0-9]"
  },
  "light-time-3": {
    "class": "light-time-3",
    "color": "#E45858",
    "regex": true,
    "query": "(03|15):[0-2][0-9]"
  },
  "light-time-2-5": {
    "class": "light-time-2-5",
    "color": "#E45858",
    "regex": true,
    "query": "(02|14):[3-5][0-9]"
  },
  "light-time-2": {
    "class": "light-time-2",
    "color": "#E45858",
    "regex": true,
    "query": "(02|14):[0-2][0-9]"
  },
  "light-time-1-5": {
    "class": "light-time-1-5",
    "color": "#E45858",
    "regex": true,
    "query": "(01|13):[3-5][0-9]"
  },
  "light-time-1": {
    "class": "light-time-1",
    "color": "#E45858",
    "regex": true,
    "query": "(01|13):[0-2][0-9]"
  },
  "light-time-9": {
    "class": "light-time-9",
    "color": "#E45858",
    "regex": true,
    "query": "(09|21):[0-2][0-9]"
  },
  "light-time-9-5": {
    "class": "light-time-9-5",
    "color": "#E45858",
    "regex": true,
    "query": "(09|21):[3-5][0-9]"
  },
  "light-time-10": {
    "class": "light-time-10",
    "color": "#E45858",
    "regex": true,
    "query": "(10|22):[0-2][0-9]"
  },
  "light-time-10-5": {
    "class": "light-time-10-5",
    "color": "#E45858",
    "regex": true,
    "query": "(10|22):[3-5][0-9]"
  },
  "light-time-11": {
    "class": "light-time-11",
    "color": "#E45858",
    "regex": true,
    "query": "(11|23):[0-2][0-9]"
  },
  "light-time-11-5": {
    "class": "light-time-11-5",
    "color": "#E45858",
    "regex": true,
    "query": "(11|23):[3-5][0-9]"
  },
  "light-time-12": {
    "class": "light-time-12",
    "color": "#E45858",
    "regex": true,
    "query": "(00|12):[0-2][0-9]"
  },
  "light-time-12-5": {
    "class": "light-time-12-5",
    "color": "#E45858",
    "regex": true,
    "query": "(00|12):[3-5][0-9]",
    "mark": [
      "match"
    ],
    "css": ""
  }
}
```

# 总结

由于个人的视角有限，所以能提供的工作流不算多，希望以上的介绍能帮大家更好地了解这个插件，谢谢阅读~

## 其他文章

[[Dynamic-Highlights插件的几种使用场景]]