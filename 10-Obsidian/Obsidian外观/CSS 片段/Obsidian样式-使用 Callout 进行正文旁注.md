---
uid: 20240320165322
title: Obsidian 样式 - 使用 Callout 进行正文旁注
tags: [Obsidian, Callout, 美化]
description: Obsidian样式-使用 Callout 进行正文旁注
author: 清影鎏岚
type: other
draft: false
editable: false
modified: 20240320183820
---

# Obsidian 样式 - 使用 Callout 进行正文旁注

‌‌‌在编辑笔记时，有时会出现需要额外补充的内容，此时将其与正文区分开是有必要的，通常可使用旁注、脚注、行间夹注等方式来进行相关注解。

‌‌‌脚注直接使用 markdown 语法即可（写在行间使用「`正文^[内容]`」，写在页尾使用「`^[1]`」），夹注现在一般就是直接在文中写上圆括号。对于旁注（即正文旁边的细字注释，有些地方称其与边注互为别名），目前社区中已有一个写在正文两侧空白区域的 [样式](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-%E7%94%A8callout%E5%AE%9E%E7%8E%B0%E7%9A%84%E8%BE%B9%E6%B3%A8/ "Obsidian 样式 - 用 Callout 实现的边注（注释） (pkmer.cn)")（需要注意的是，它的原理是将 callout 区块移至正文两侧，故如若不启用缩减栏宽，则无法显示出来，或是注释之内容将与正文重叠）。

‌‌‌借鉴 *MCL Multi Column.css* 和 *CalloutTypesetting.css.css* 中的部分内容，可实现另一个旁注的效果。兹藉由这个 css 片段，可在阅读模式中将旁注区块嵌入正文内部以进行特别标注或强调，并可令正文文本环绕之。此外，旁注中也可以嵌入图片来做到图文混排。

**效果展示**：

![Pasted image 20240316005151.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240316005151.png!pkmer)

## 使用方法

‌‌‌在已有的 [[Obsidian扩展语法]] 后方加上相关元数据即可，使用空格来分隔不同的元数据，所有的元数据都是使用的「汉语拼音首字母缩写」。

### 基本用法

‌‌‌使用元数据「pz」声明旁注区块。

可以在「pz」后方加上「z」或「y」来控制区块放置的位置，中间不要加空格。如果不标注位置，则默认显示在右边。例如，写成「`>[!note|pz]`」或「`>[!note|pzy]`」，都可以在右边显示，效果是一样的（因为常见的就是在右边进行标注，所以为了方便使用可以省去位置标注「y」，但如果希望左右写法显得更加均衡也可以把这个补上）。

**实例**：

```
>[!note|pz] 你的标题
>具体内容
```

‌‌‌这样，就可以将相应类型（颜色）的 callout 区块移动到正文两侧了，同时会出现一个边框来凸显它的存在。

在 callout 后方再加上折叠语法「+」或「-」（意为默认收合），即可使用鼠标在标注位置点击区块来实现展开或收合，如下图之所示。如果设定了去除边框和阴影，收合后边框和阴影仍会继续保留，但展开后即可立刻消失。

**效果**：

![screenshots.gif](https://cdn.pkmer.cn/images/screenshots.gif!pkmer)

**实例**：

```
>[!note|pz]+
>
```

### 补充效果

‌‌‌在基本用法的元数据后方加上以下相应内容即可，如「`>[!note|pz tm wbk]`」，详细内容见下方表格。

| 样式                  | 元数据 | 备注                                                 |
| --------------------- | ------ | ---------------------------------------------------- |
| 透明样式              | tm     | 启用后，将只保留你键入的文字，区块中 callout 的背景颜色和 title 将不再显示。|
| 去除边框              | wbk    | 这个样式和下面的去除阴影一般是用于配合透明样式使用。|
| 去除阴影效果          | wyy    | 如果使用的是深色模式，阴影效果可以直接忽略，无需再写这个。|
| 去除 callout 默认图标 | wtb    | 不需要默认图标或想要在标题中嵌入其它图片来取代它的位置时就可以启用这个样式。|
| 图片样式              | tp     | 用于实现文字环绕图片的效果，启用后图片会位于段落左上角或右上角。<br>图片样式就是在透明样式的基础上调整了内外边距，因此写了「tp」就不用再写「tm」。<br>可以配合相关插件使用，如「[Image toolkit](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/obsidian-image-toolkit/ "Obsidian 插件：Image toolkit 提供笔记中查看图片的基本操作 (pkmer.cn)")」。|

**实例**：

```
>[!note|pz tm wbk]
>
```

## 注意

‌‌‌需要将 callout 区块写在正文上方，这样才可以显示在相应段落的左侧或右侧。

‌‌‌图片样式在 blue topaz 主题下显示效果最好，使用其它主题或默认主题时，图片下方会有一个大约在 5px 的内边距，目前不知如何解决，因此如果没有使用 blue topa 主题，建议在嵌入图片的同时启用去除阴影和边框这两个效果，即使用「`>[!note|pz tp wyy wbk]`」这个语法。

## css 源码

```
/* @settings

name: 旁注区块相关设定
id: parngjuh
settings:
  -
    id: tzyhtii-dahsheau
    title: 字体大小设定
    description: ㅤㅤ控制区块内部字体的大小
    type: variable-text
    default: 90%
  -
    id: harngjiannjiuh
    title: 行间距设定
    type: variable-text
    default: 1.3em
  -
    id: chiukuay-kuanduh
    title: 区块最大宽度
    description: ㅤㅤ使小屏或启用缩减栏宽后的显示效果更均衡。
    type: variable-text
    default: 38%
  -
    id: neybianjiuh
    title: 内边距设定
    type: heading
    level: 3
    collapsed: true
  -
      id: ney-shanqshiah
      title: 上下边距
      description: ㅤㅤ如果没有使用默认的 callout 样式，建议此处保持为默认，因为上下左右都是 5 px 时观感较为均衡。或者直接删去默认值留空，这样圆角边框和阴影效果就可以直接作用于 callout 区块之上。
      type: variable-text
      default: 5px
  -
      id: ney-tzuooyow
      title: 左右边距
      description: ㅤㅤ5 px 大概就是 1 毫米左右的宽度。
      type: variable-text
      default: 5px
  -
    id: waybianjiuh
    title: 外边距设定
    type: heading
    level: 3
    collapsed: true
  -
    id: way-shanq
    title: 上方边距
    type: variable-text
    default: 0px
  -
    id: way-shiah
    title: 下方边距
    type: variable-text
    default: 3px
  -
    id: way-yow
    title: 右侧边距
    description: ㅤㅤ控制左边的区块。建议设置为 30 px，此时右侧如若存在列表，这个间距将不会显得于紧密。
    type: variable-text
    default: 30px
  -
    id: way-tzuoo
    title: 左侧边距
    description: ㅤㅤ控制右边的区块。
    type: variable-text
    default: 20px
  -
*/

div[data-callout-metadata~="pz"].callout,
div[data-callout-metadata~="pzy"].callout,
div[data-callout-metadata~="pzz"].callout {
  padding: var(--ney-shanqshiah,5px) var(--ney-tzuooyow,5px) ;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-color: #888888 !important;
  border: 1px solid;
  font-size: var(--tzyhtii-dahsheau,90%);
  line-height: var(--harngjiannjiuh,1.3em);
  max-width: var(--chiukuay-kuanduh,38%);
  clear: both
}

div[data-callout-metadata~="pz"].callout,
div[data-callout-metadata~="pzy"].callout {
  margin: var(--way-shanq,0) 0 var(--way-shiah,3px) var(--way-tzuoo,20px);
  float: right
}
div[data-callout-metadata~="pzz"].callout {
  margin: var(--way-shanq,0) var(--way-yow,30px) var(--way-shiah,3px) 0;
  float: left
}

/* 「z」可以随意，但是「y」只能和「pz」写在一起，不能单独拿出来放在这句话下面，否则收合后会自动移动到左上角而不是停留在当前位置。 */

/* 去除边框 */
div[data-callout-metadata~="wbk"]:not(.is-collapsed) {
  border: 0; 
}
/* 去除阴影 */
div[data-callout-metadata~="wyy"]:not(.is-collapsed) {
  box-shadow: unset !important; 
}

/* 去除图标 */
:is(div[data-callout-metadata~="wtb"]) .callout-icon .svg-icon {
  width: 0;
}

/*透明样式和图片样式*/
div[data-callout-metadata~="tm"]:not(.is-collapsed)>.callout-title,
div[data-callout-metadata~="tp"]:not(.is-collapsed)>.callout-title /*去除 title */ {
  display: none;
}

div[data-callout-metadata~="tm"]:not(.is-collapsed)>.callout-content,
div[data-callout-metadata~="tp"]:not(.is-collapsed)>.callout-content /*去除 callout 主体部分*/ {
  display: contents;
}

div[data-callout-metadata~="tm"].callout{
  background-color: unset; /*针对默认主题去除背景颜色，下同*/
  padding: 0px 10px; /*对于透明样式，上下边距设置为 0 后也会留有空白，但左右为 0 就不会留空了。*/
}
div[data-callout-metadata~="tp"]:is(div[data-callout-metadata~="pzz"]).callout{
  background-color: unset;
  padding: 0px;
  margin: 0 15px 0 0;
}
div[data-callout-metadata~="tp"]:is(div[data-callout-metadata~="pzy"]).callout{
  background-color: unset;
  padding: 0px;
  margin: 0 0 0 15px;
}
```
