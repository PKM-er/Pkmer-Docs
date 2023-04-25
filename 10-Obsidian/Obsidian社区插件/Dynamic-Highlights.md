---
uid: 20230329145808
title: Obsidian 插件：Dynamic Highlights（动态高亮指定内容）
description:
tags:
author: OS
type: other
draft: false
modified: 20230329151247
public: yes
---

# Obsidian 插件：Dynamic Highlights（动态高亮指定内容）

## 概述

可以根据 [[正则表达式]]，为不同的内容指定高亮方案。比如时间，日期，特殊的文案等。

> [!插件名片]

> -   插件名称：Dynamic Highlights

> -   插件作者：nothingislost

> -   插件说明：根据你设定的规则动态高亮显示文本

> -   插件项目地址：[点我跳转](https://github.com/nothingislost/obsidian-dynamic-highlights)

## 效果&特性

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Dynamic Highlights
3. 安装
4. 开启插件

## 使用方法

![Pasted image 20230128142507](https://s1.vika.cn/space/2023/03/15/eef397dcda4443008e4babdd3eadcfc3)

1、在这里填入你对这个规则的命名，例如“逻辑符或者 Block-ID”，这个会作为一个 CLASS 属性加到匹配内容中；

![](https://s1.vika.cn/space/2023/03/15/e21a190a272f4e6788f925acce686337)

-   1 和 2 之间的马赛克块是用于快速设置颜色的选择面板。

2、在这里填入你的检索式，在未开启 3 之前，只支持单词匹配；

3、开启后支持正则表达式的输入，例如“(AND|OR|NOT)”或者“第\w{1,} 条” 等类似的标记（前者在专利检索或者分析的时候使用，后者经常用于查看法条判例）；

4、开启后匹配指定规则的内容会被加上 CSS CLASS 属性；

5、开启后在匹配指定规则的内容的当前行加上 CSS CLASS 属性，使用场景是高亮一整条判例的写法，或者用于高亮你更感兴趣的关键词行（对于在 Obsidian 中看纯文本的内容会有奇效）；

6、开启后在匹配指定规则的内容的头部加上 CSS CLASS 属性，使用场景是加 icon 属性，相当于一个简单化的 Supercharge Links 插件；

7、同上，但是是给尾部加上 CSS CLASS 属性；

8、有别于需要你额外创建一个 CSS Snippet 然后再去 Obsidian 中开启，你可以直接在这里写入你需要的 CSS 样式：

```css
.逻辑符高亮 {
    background-color: #fff;
}
```

## 其他活用

### 给  `HH:mm`  前边加上时钟图标

有一部分用户是在使用着 Obsidian-memos 的，那么这部分用户在打开对应的日记文件的时候，可以考虑给对应的  `HH:mm`  样式的内容加上相关的属性，对应的 CSS 规则如下：

![](https://s1.vika.cn/space/2023/03/15/6885c8f5d10745e49588a1fd45bd36f4)

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

.theme-light,
.theme-dark {
    --time-color: #e45858;
    /* --time-dark-color: #2b9183; */
    --time-font-color: #fffbf0;
}

.time {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.time::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-1 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-1::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-1-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-1-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-2 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-2::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-2-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-2-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-3 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-3::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-3-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-3-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-4 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-4::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-4-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-4-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-5-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-5-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-6 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-6::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-6-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-6-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-7 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-7::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-7-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-7-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-8 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-8::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-8-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-8-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-9 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-9::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-9-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-9-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-10 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-10::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-10-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-10-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-11 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-11::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-11-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-11-5::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-12 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-12::before {
    content: " ";
    background-color: "";
}

.theme-light .light-time-12-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-light .light-time-12-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-1 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-1::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-1-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-1-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-2 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-2::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-2-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-2-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-3 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-3::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-3-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-3-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-4 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-4::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-4-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-4-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-5-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-5-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-6 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-6::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-6-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-6-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-7 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-7::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-7-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-7-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-8 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-8::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-8-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-8-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-9 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-9::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-9-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-9-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-10 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-10::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-10-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-10-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-11 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-11::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-11-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-11-5::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-12 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-12::before {
    content: " ";
    background-color: "";
}

.theme-dark .light-time-12-5 {
    color: var(--time-font-color); /*象牙白*/
    background-color: var(--time-color); /* 铜绿 #40bfaf;*/
    font-style: normal;
    padding-top: 0px;
    padding-bottom: 2px;
    padding-right: 4px;
    padding-left: 1px;
    border-radius: 5px;
}

.theme-dark .light-time-12-5::before {
    content: " ";
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
        "mark": ["match"],
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
        "mark": ["match"],
        "css": ""
    }
}
```

## 视频
