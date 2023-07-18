---
uid: 20230718232352
title: Obsidian 样式： “特殊标签” 让 Markdown 的文本多彩多色
tags: [Obsidian, 样式, 标签, 多彩标签, h/red]
description: Obsidian 样式： “特殊标签” 让 Markdown 的文本多彩多色。本文通过 css 的方法实现在阅读模式、编辑模式及源码模式下都可以显示多种色彩的高亮、斜体的文本显示方法。通过修改 css 中的代码，还可以自行修改成想要的颜色。
author: windysoul
type: other
draft: false
editable: false
modified: 20230718233502
---

# Obsidian 样式： “特殊标签” 让 Markdown 的文本多彩多色

## 引言

Obsidian 作为 md 文档编辑器，在编辑书写文本的时候，无法让文本呈现多种颜色。本文通过 css 的方法实现在阅读模式、编辑模式及源码模式下都可以显示多种色彩的高亮、斜体的文本显示方法。通过修改 css 中的代码，还可以自行修改成想要的颜色。

**“特殊标签”** ，这里是指类似 `#h/red` 这样的标签 [^1]。 直接给需要文字渲染预设的颜色，这样就省去了使用 html 的标签语法

## 效果

![8c647c459bf32f92b2451ed69034c39.png](https://cdn.pkmer.cn/images/8c647c459bf32f92b2451ed69034c39.png!pkmer)

## 使用方法

>[!warning ] 实现上述效果，需要启用本文提供的 css 代码片段
>- #h/red _使用 `#h/red` 等特殊标签来实现文本颜色_

**多彩高亮**的写法

````
#h/green ==green background with white text==
#h/red ==red background with white text==
#h/pink ==pink background with white text==
#h/blue ==blue background with white text==
#h/yellow ==yellow background with black text==
#h/aqua ==aqua background with white text==
#h/white ==white background with black text==
#h/black ==black background with white text==
#h/fuchsin  ==fuchsin background with white text==
#h/gray ==gray background with white text==
#h/silver ==silver background with white text==
#h/maroon ==maroon background with white text==
#h/teal ==teal background with white text==
#h/purple ==purple background with white text==
#h/lime ==lime background with white text==
#h/olive ==olive background with white text==
#h/navy ==navy background with white text==
````

**多彩斜体**的写法

````
#h/red _this is red italic text_
#h/green _this is green italic text_ 
#h/pink _this is pink italic text_
#h/blue _this is blue italic text_
#h/yellow _this is yellow italic text_
#h/aqua _this is aqua italic text_
#h/white _this is white italic text_
#h/black _this is black italic_
#h/fuchsin _this is fuchsin italic text_
#h/gray _this is gray italic text_
#h/silver _this is silver italic text_
#h/maroon _this is maroon italic  text_
#h/teal _this is teal italic  text_
#h/purple _this is purple italic  text_
#h/lime _this is lime italic  text_
#h/olive _this is olive italic  text_
#h/navy _this is navy italic text_
````

>[!Tip]
>- 本文提供的代码片段在默认主题及 `Blue Topaz` 主题中可正常使用，其它主题未做测试。
>- 开启本文提供的代码片段后，请复制 `多彩高亮` 和 `多彩斜体` 写法到自己的库，查看颜色是否正确。如果显示颜色与文字描述不同，说明该代码片段与所用的主题有冲突，可以在代码片段中找到该颜色进行修改，或暂时将颜色所在的代码注释掉（在该行最开始处输入 `/*` 并在该行最末尾处输入 `*/` ），使该行不起作用。

## 代码片段

具体代码片段如何使用参考 [[Obsidian的CSS代码片段]]

以下 CSS 代码片段来自：

<https://github.com/steveyang331/Obsidian-css/>

```css
/*  
Name:: 8 + 8 highlight colors
Author:: @steve_yang331
version:: 0.0.1
Date:: 2021-1-5
Download::
https://github.com/steveyang331/Obsidian-css/

How to use highlight code syntax:：
    #h/COLOR_name
    
    Highlighted text background , 
    Highlighted bold text ,
    Highlighted italic . 

    #h/pink ==pink== 

    #h/pink **pink**

    #h/pink _pink_
 
*/
/* ---------------- 8 + 8 colors -----------------*/
/* 8 pairs base colors 

.white   rgb(255,255,255)	
.black   rgb(0,0,0)    
  
.red     rgb(255,0,0)
.aqua    rgb(0,255,255) 

.pink rgb(255,0,255) .pink
.green   rgb(0,255,0)    

.yellow  rgb(255,255,0)   
.blue    rgb(0,0,255)    

/* 8 pairs middle colors  

white/2     = .gray    rgb(128,128,128)
white*(3/4) = .silver  rgb(192,192,192)

red/2       = .maroon  rgb(128,0,0)
aqua/2      = .teal    rgb(0,128,128)

fushsia/2   = .purple  rgb(128,0,128)
green/2     = .lime    rgb(0,128,0)

yellow/2    = .olive   rgb(128,128,0)
blue/2      = .navy    rgb(0,0,128)

*/


/* WYSIWYG Editor modef for highlight colors */


/* Toggle highlight,strong,italic symbols 
div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-strong,
div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-em,
*/

div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-formatting-highlight,

/* Toggle highlight colors*/

div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hwhite,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hblack,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hred,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-haqua,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hfuchsin,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hpink,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hgreen,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hyellow,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hblue,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hgray,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hsilver,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hmaroon,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hteal,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hpurple,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hlime,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-holive,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hwhite,
div:not(.CodeMirror-activeline)>.CodeMirror-line span.cm-tag-hnavy {
    display: none !important;
    position: relative;
}


/* Editor mode  */

.cm-hashtag~span.cm-highlight {
    color: white !important;
    /* change this color to white or black or others for light or Dark Theme */
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}


/* -- white --  */

.cm-tag-hwhite~span.cm-highlight {
    background-color: rgb(255, 255, 255) !important;
    color: black !important;
}

.cm-tag-hwhite~span.cm-strong {
    color: rgb(255, 255, 255);
}

.cm-tag-hwhite~span.cm-em {
    color: rgb(255, 255, 255);
}


/* -- black --  */

.cm-tag-hblack~span.cm-highlight {
    background-color: rgb(0, 0, 0)!important;
    color: white !important;
}

.cm-tag-hblack~span.cm-strong {
    color: rgb(0, 0, 0);
}

.cm-tag-hblack~span.cm-em {
    color: rgb(0, 0, 0);
}


/* -- red --  */

.cm-tag-hred~span.cm-highlight {
    background-color: rgb(255, 0, 0) !important;
}

.cm-tag-hred~span.cm-strong {
    color: rgb(255, 0, 0);
}

.cm-tag-hred~span.cm-em {
    color: rgb(255, 0, 0);
}


/* -- aqua --  */

.cm-tag-haqua~span.cm-highlight {
    background-color: rgb(0, 255, 255)!important;
}

.cm-tag-haqua~span.cm-strong {
    color: rgb(0, 255, 255);
}

.cm-tag-haqua~span.cm-em {
    color: rgb(0, 255, 255);
}


/* -- fuchsin --  */

.cm-tag-hfuchsin~span.cm-highlight {
    background-color: rgb(255, 128, 255)!important;
}

.cm-tag-hfuchsin~span.cm-strong {
    color: rgb(255, 128, 255);
}

.cm-tag-hfuchsin~span.cm-em {
    color: rgb(255, 128, 255);
}


/* -- pink --  */

.cm-tag-hpink~span.cm-highlight {
    background-color: rgb(255, 0, 255)!important;
}

.cm-tag-hpink~span.cm-strong {
    color: rgb(255, 0, 255);
}

.cm-tag-hpink~span.cm-em {
    color: rgb(255, 0, 255);
}


/* -- green --  */

.cm-tag-hgreen~span.cm-highlight {
    background-color: rgb(0, 255, 0)!important;
}

.cm-tag-hgreen~span.cm-strong {
    color: rgb(0, 255, 0);
}

.cm-tag-hgreen~span.cm-em {
    color: rgb(0, 255, 0);
}


/* -- yellow --  */

.cm-tag-hyellow~span.cm-highlight {
    background-color: rgb(255, 255, 0) !important;
    color: black !important;
}

.cm-tag-hyellow~span.cm-strong {
    color: rgb(255, 255, 0);
}

.cm-tag-hyellow~span.cm-em {
    color: rgb(255, 255, 0);
}


/* -- blue --  */

.cm-tag-hblue~span.cm-highlight {
    background-color: rgb(0, 0, 255) !important;
}

.cm-tag-hblue~span.cm-strong {
    color: rgb(0, 0, 255);
}

.cm-tag-hblue~span.cm-em {
    color: rgb(0, 0, 255);
}


/* -- gray --  */

.cm-tag-hgray~span.cm-highlight {
    background-color: rgb(128, 128, 128) !important;
}

.cm-tag-hgray~span.cm-strong {
    color: rgb(128, 128, 128);
}

.cm-tag-hgray~span.cm-em {
    color: rgb(128, 128, 128);
}


/* -- silver --  */

.cm-tag-hsilver~span.cm-highlight {
    background-color: rgb(192, 192, 192) !important;
}

.cm-tag-hsilver~span.cm-strong {
    color: rgb(192, 192, 192);
}

.cm-tag-hsilver~span.cm-em {
    color: rgb(192, 192, 192);
}


/* -- maroon --  */

.cm-tag-hmaroon~span.cm-highlight {
    background-color: rgb(128, 0, 0) !important;
}

.cm-tag-hmaroon~span.cm-strong {
    color: rgb(128, 0, 0);
}

.cm-tag-hmaroon~span.cm-em {
    color: rgb(128, 0, 0);
}


/* -- teal --  */

.cm-tag-hteal~span.cm-highlight {
    background-color: rgb(0, 128, 128)!important;
}

.cm-tag-hteal~span.cm-strong {
    color: rgb(0, 128, 128);
}

.cm-tag-hteal~span.cm-em {
    color: rgb(0, 128, 128);
}


/* -- teal --  */

.cm-tag-hpurple~span.cm-highlight {
    background-color: rgb(128, 0, 128)!important;
}

.cm-tag-hpurple~span.cm-strong {
    color: rgb(128, 0, 128);
}

.cm-tag-hpurple~span.cm-em {
    color: rgb(128, 0, 128);
}


/* -- lime --  */

.cm-tag-hlime~span.cm-highlight {
    background-color: rgb(0, 128, 0)!important;
}

.cm-tag-hlime~span.cm-strong {
    color: rgb(0, 128, 0);
}

.cm-tag-hlime~span.cm-em {
    color: rgb(0, 128, 0);
}


/* -- olive --  */

.cm-tag-holive~span.cm-highlight {
    background-color: rgb(128, 128, 0)!important;
}

.cm-tag-holive~span.cm-strong {
    color: rgb(128, 128, 0);
}

.cm-tag-holive~span.cm-em {
    color: rgb(128, 128, 0);
}


/* -- navy --  */

.cm-tag-hnavy~span.cm-highlight {
    background-color: rgb(0, 0, 128)!important;
}

.cm-tag-hnavy~span.cm-strong {
    color: rgb(0, 0, 128);
}

.cm-tag-hnavy~span.cm-em {
    color: rgb(0, 0, 128);
}


/*----------------------- Preview mode ------------------------ */

a[href^="#h/"] {
    display: none !important;
}

a[href^="#h/"]+mark {
    color: white !important;
    /* change this color to white or black or others for light or Dark Theme */
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}


/* -- white --  */

a[href^="#h/white"]+mark {
    background-color: rgb(255, 255, 255) !important;
    color: black !important;
}

a[href^="#h/white"]+strong {
    color: rgb(255, 255, 255);
}

a[href^="#h/white"]+em {
    color: rgb(255, 255, 255);
}


/* -- black --  */

a[href^="#h/black"]+mark {
    background-color: rgb(0, 0, 0)!important;
}

a[href^="#h/black"]+strong {
    color: rgb(0, 0, 0);
}

a[href^="#h/black"]+em {
    color: rgb(0, 0, 0);
}


/* -- red --  */

a[href^="#h/red"]+mark {
    background-color: rgb(255, 0, 0) !important;
}

a[href^="#h/red"]+strong {
    color: rgb(255, 0, 0) !important;
}

a[href^="#h/red"]+em {
    color: rgb(255, 0, 0) !important;
}


/* -- aqua --  */

a[href^="#h/aqua"]+mark {
    background-color: rgb(0, 255, 255)!important;
}

a[href^="#h/aqua"]+strong {
    color: rgb(0, 255, 255) !important;
}

a[href^="#h/aqua"]+em {
    color: rgb(0, 255, 255) !important;
}


/* -- fuchsin --  */

a[href^="#h/fuchsin"]+mark {
    background-color: rgb(255, 128, 255)!important;
}

a[href^="#h/fuchsin"]+strong {
    color: rgb(255, 128, 255) !important;
}

a[href^="#h/fuchsin"]+em {
    color: rgb(255, 128, 255) !important;
}


/* -- pink --  */

a[href^="#h/pink"]+mark {
    background-color: rgb(255, 0, 255)!important;
}

a[href^="#h/pink"]+strong {
    color: rgb(255, 0, 255) !important;
}

a[href^="#h/pink"]+em {
    color: rgb(255, 0, 255) !important;
}


/* -- green --  */

a[href^="#h/green"]+mark {
    background-color: rgb(0, 255, 0)!important;
}

a[href^="#h/green"]+strong {
    color: rgb(0, 255, 0) !important;
}

a[href^="#h/green"]+em {
    color: rgb(0, 255, 0) !important;
}


/* -- yellow --  */

a[href^="#h/yellow"]+mark {
    background-color: rgb(255, 255, 0) !important;
    color: black !important;
}

a[href^="#h/yellow"]+strong {
    color: rgb(255, 255, 0) !important;
}

a[href^="#h/yellow"]+em {
    color: rgb(255, 255, 0) !important;
}


/* -- blue --  */

a[href^="#h/blue"]+mark {
    background-color: rgb(0, 0, 255) !important;
}

a[href^="#h/blue"]+strong {
    color: rgb(0, 0, 255) !important;
}

a[href^="#h/blue"]+em {
    color: rgb(0, 0, 255) !important;
}


/* -- gray --  */

a[href^="#h/gray"]+mark {
    background-color: rgb(128, 128, 128) !important;
}

a[href^="#h/gray"]+strong {
    color: rgb(128, 128, 128) !important;
}

a[href^="#h/gray"]+em {
    color: rgb(128, 128, 128) !important;
}


/* -- silver --  */

a[href^="#h/silver"]+mark {
    background-color: rgb(192, 192, 192) !important;
}

a[href^="#h/silver"]+strong {
    color: rgb(192, 192, 192) !important;
}

a[href^="#h/silver"]+em {
    color: rgb(192, 192, 192) !important;
}


/* -- maroon --  */

a[href^="#h/maroon"]+mark {
    background-color: rgb(128, 0, 0) !important;
}

a[href^="#h/maroon"]+strong {
    color: rgb(128, 0, 0) !important;
}

a[href^="#h/maroon"]+em {
    color: rgb(128, 0, 0) !important;
}


/* -- teal --  */

a[href^="#h/teal"]+mark {
    background-color: rgb(0, 128, 128)!important;
}

a[href^="#h/teal"]+strong {
    color: rgb(0, 128, 128) !important;
}

a[href^="#h/teal"]+em {
    color: rgb(0, 128, 128) !important;
}


/* -- teal --  */

a[href^="#h/purple"]+mark {
    background-color: rgb(128, 0, 128)!important;
}

a[href^="#h/purple"]+strong {
    color: rgb(128, 0, 128) !important;
}

a[href^="#h/purple"]+em {
    color: rgb(128, 0, 128) !important;
}


/* -- lime --  */

a[href^="#h/lime"]+mark {
    background-color: rgb(0, 128, 0)!important;
}

a[href^="#h/lime"]+strong {
    color: rgb(0, 128, 0) !important;
}

a[href^="#h/lime"]+em {
    color: rgb(0, 128, 0 !important) !important;
}


/* -- olive --  */

a[href^="#h/olive"]+mark {
    background-color: rgb(128, 128, 0)!important;
}

a[href^="#h/olive"]+strong {
    color: rgb(128, 128, 0) !important;
}

a[href^="#h/olive"]+em {
    color: rgb(128, 128, 0) !important;
}


/* -- navy --  */

a[href^="#h/navy"]+mark {
    background-color: rgb(0, 0, 128)!important;
}

a[href^="#h/navy"]+strong {
    color: rgb(0, 0, 128) !important;
}

a[href^="#h/navy"]+em {
    color: rgb(0, 0, 128) !important;
}
```

> [!Example]
`#h/green`

[^1]: 特殊标签：指类似 `\#h/green \#h/red \#h/pink \#h/blue \#h/yellow \#h/aqua \#h/white \#h/black \#h/fuchsin \#h/gray \#h/silver \#h/maroon \#h/teal \#h/purple \#h/lime \#h/olive \#h/navy` 如下的标签，使用时要注意自己的库中是否有相同的标签。