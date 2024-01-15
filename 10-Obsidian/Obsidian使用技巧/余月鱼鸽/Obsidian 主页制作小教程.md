---
uid: 20240115155129
title: Obsidian 主页制作小教程
tags: [Obsidian, Obsidian插件]
description: Obsidian 主页制作小教程
author: 余月鱼鸽
type: other
draft: false
editable: false
modified: 20240115155704
---

# Obsidian 主页制作小教程

## Obsidian 主页简介

@熊猫别熬夜 发现了：

- [Obsidian 样式 - 调整图片不同布局样式]( https://pkmer.cn/show/20231202002300 )
- [Obsidian 样式：minimal 主题 Cards 卡片布局]( https://pkmer.cn/show/20230905221421 )

这两个 css 的搭配的妙用：

![df1c6732b25359f4c4c088468ee25213.png](https://cdn.pkmer.cn/images/df1c6732b25359f4c4c088468ee25213.png!pkmer)

经过一小段时间的折腾后，我搭配出了一个 moc 主页，具体效果可见下方：

1. 浅色模式：
 ![4c308d85ab71946160a54471f0640849.png](https://cdn.pkmer.cn/images/4c308d85ab71946160a54471f0640849.png!pkmer)
2. 深色模式：
![5def48eeb9f84a9eec74dd0cc65ae9dd.png](https://cdn.pkmer.cn/images/5def48eeb9f84a9eec74dd0cc65ae9dd.png!pkmer)

## 制作教程

![a768536996e9ffe18bba2830e8623d31.png](https://cdn.pkmer.cn/images/a768536996e9ffe18bba2830e8623d31.png!pkmer)

Obsidian 主页的制作方法，大致为以下 4 个步骤：

1. 配置头图
2. 制作标题栏
3. 制作 moc 卡片
4. 微调界面细节

### 1.配置头图

这个步骤使用的是 Obsidian Banners 插件，该插件可以将库内图片，甚至是外部图片链接变为笔记中的头图。

具体使用方法：在 YAML 区添加 banner 相关的参数即可：

![f896451a1612b1f9f1e5f106633d58fa.png](https://cdn.pkmer.cn/images/f896451a1612b1f9f1e5f106633d58fa.png!pkmer)

这样切换到阅读模式，我们就能收获到一个有头图的文件：

![2b22fec72f9d7b52ac4c687a93026392.png](https://cdn.pkmer.cn/images/2b22fec72f9d7b52ac4c687a93026392.png!pkmer)

Tip ：

 - 除使用库内图片，也可以使用 bing 的每日一图，将 <https://api.dujin.org/bing/1366.php> 作为图片路径，每天重登 obsidian 即可收获不一样的头图
 - 更新 1.4.x 之后，很多人因为使用了 banner 插件，还有 properties 新核心插件而出现了高度问题，会出现莫名的留白，这个文档提供了解决方案：[Obsidian 样式：修复 banner 和 Properties 高度冲突以及多余留白改善]( https://pkmer.cn/show/20230918104801 )
 - 更多的 banner 插件使用小技巧可以见： [Obsidian 插件：Obsidian Banners 为你的笔记添加头图]( https://pkmer.cn/show/20230329141826 )

### 2. 制作标题栏

![3615b60742869022f68d07545f4ab6c2.png](https://cdn.pkmer.cn/images/3615b60742869022f68d07545f4ab6c2.png!pkmer)

标题栏的部分主要用到两个插件：

1. button 插件，主要用来添加快捷打开的 project 的按钮，网站上的文章：[Obsidian 插件：Buttons 美化必备的按钮插件]( https://pkmer.cn/show/20230514144947 ) 解释得挺详细的，此处就不展开了
2. 本主页主要用 dataview 插件，统计本文本库的文件、标签数量。安装 dataview 插件后，直接将这段 dataviewjs 代码区域中复制到文件中即可。

![7fceab914faedc1b7a0c103ee7ddbee1.png](https://cdn.pkmer.cn/images/7fceab914faedc1b7a0c103ee7ddbee1.png!pkmer)

dataviewjs 代码：

````
```dataviewjs
let ftMd = dv.pages("").file.sort(t => t.cday)[0]
let total = parseInt([new Date() - ftMd.ctime] / (60*60*24*1000))
let totalDays = " 您已使用 *Obsidian* "+total+" 天，"
let nofold = '!"misc/templates"'
let allFile = dv.pages(nofold).file
let totalMd = "共创建 "+
	allFile.length+" 篇笔记"
let totalTag = allFile.etags.distinct().length+" 个标签"

dv.paragraph(
	totalDays+totalMd+"、"+totalTag+""
)
```
````

Tip ：本段代码摘抄自 bt 示例库。

稍微加上一些文字、以及分割符做装饰，我们的主页已经进化到以下效果：

![92a9f5d0611f5ea4d0b8e1774ae3b0e1.png](https://cdn.pkmer.cn/images/92a9f5d0611f5ea4d0b8e1774ae3b0e1.png!pkmer)

### 3. 制作 moc 卡片

#### 3.1 将 css 片段导入文库内

Tip ：第一次接触 css 的新手可以看一下这个文章：[Obsidian 的 CSS 代码片段]( https://pkmer.cn/show/20230329145845 )

本步骤主要使用 3 种 css 片段，分别为：

1. [Obsidian 样式：minimal 主题 Cards 卡片布局]( https://pkmer.cn/show/20230905221421 )
2. [Obsidian 样式 - 调整图片不同布局样式]( https://pkmer.cn/show/20231202002300 )
3. 界面全宽显示，来源是 @熊猫别熬夜 ，在网站上没搜到对应的文章，具体 css 代码可以直接在下方复制：

```css
/* 输定字体大小 */

/* .view-content .small-font , */
.small-font.markdown-preview-view .markdown-embed .markdown-preview-view,
.small-font.markdown-preview-view {
  font-size: 18px !important;
  line-height: 180%;
}

/* 关闭显示标签页标题栏。 */
.small-font.markdown-preview-view .mod-header .inline-title {
  display: none;
  line-height: 0px;
  /* text-align: right; */
}
.view-content .small-font .inline-title {
  display: none;
}

/* 关闭显示标题栏：colse_show_title */
.colse_show_title.markdown-preview-view .mod-header .inline-title {
  display: none;
  line-height: 0px;
  /* text-align: right; */
}

.colse_show_title.markdown-preview-view {
  --file-line-width: 100% !important;
}
.view-content .colse_show_title .inline-title {
  display: none;
}


/* 设定字体大小 */
.colse_show_title.markdown-preview-view {
  font-size: 21px !important;
  line-height: 150%;
}

/* 设定Excalidraw的CSS：Excalidraw-Markdown */
.Excalidraw-Markdown.markdown-preview-view .mod-header .inline-title {
  display: none;
  line-height: 0px;
  /* text-align: right; */
}
.view-content .Excalidraw-Markdown .inline-title {
  display: none;
}

/* 设定字体大小 */
/* .Excalidraw-Markdown.markdown-preview-view{
  font-size: 18px !important;
  line-height: 150%;
} */

/* ==word-font 论文排版格式，缩行缩进、中英文字体== */

.word-font.markdown-preview-view {
  font-family: "Times New Roman", 宋体 !important;
}

.word-font div p {
  text-indent: 2em;
}

.word-font strong {
  font-family: "Times New Roman", "黑体";
  font-weight: bold;
}
.word-font p {
  /* border: solid 1px #ff0000; */
  font-family: "Times New Roman", "宋体";
  text-decoration-line: none;
  margin: 10px 0px;
  line-height: 120%;
  text-indent: 2em;
  font-size: 20px;
}
.word-font h1 {
  font-family: "Times New Roman", "宋体";
  font-size: 42px !important;
  font-weight: bold;
  text-align: center;
}

.word-font h2 {
  font-family: "Times New Roman", "黑体";
  font-weight: 700;
  font-size: 35px !important;
  font-weight: bold;
  text-align: left;
}
.word-font h3 {
  font-family: "Times New Roman", "黑体";
  font-weight: 700;
  font-size: 25px !important;
  font-weight: lighter;
  text-align: left;
}
.word-font h4 {
  font-family: "Times New Roman", "宋体";
  font-weight: 700;
  font-weight: lighter;
  font-size: 23px !important;
  text-align: left;
}

.word-font h5,
h6 {
  font-family: "Times New Roman", "宋体" !important;
  font-weight: normal !important;
  font-size: 20px !important;
  text-align: left !important;
}

.word-font .footnote-link {
  color: #2e3338;
  line-height: 10px !important;
}
sup {
  vertical-align: 25%;
  font-size: 10px;
}

.word-font .image-embed {
  display: flex;
  align-items: center;
  justify-content: center;
}

.word-font ul,
.word-font ol {
  /* border: solid 1px #ff0000; */
  font-family: "Times New Roman", "宋体";
  text-decoration-line: none;
  margin: 10px 0px;
  line-height: 120%;
  font-size: 20px;
}

/* 普通表格 */

.word-font blockquote p {
  font-family: "楷体", "Times New Roman";
}
.word-font .theme-light blockquote p {
  color: #5f5f5f;
}
.word-font .theme-dark blockquote p {
  color: #a1a1a1;
}


```

#### 3.2 制作 moc 卡片

3.2.1 在文件属性区域的【 cssclasses 】添加 list-cards 以及 colse_show_title 两个参数：

- list-cards ：这个参考可以让文件中的无序列表变为卡片视图
- colse_show_title：让界面进入全宽模式
![0870b9d3d888828639789125893748c4.png](https://cdn.pkmer.cn/images/0870b9d3d888828639789125893748c4.png!pkmer)

3.2.2 开始配置

在文件中添加一组无序列表，具体格式为：

![1330a20213b0066b0d97ea0f6dc55d6a.png](https://cdn.pkmer.cn/images/1330a20213b0066b0d97ea0f6dc55d6a.png!pkmer)

其中，图片部分的格式为 `"!"` + `"[["` + `"图片名"` + `"#L"` + `"|"` + `"图片大小"` + `"]]"` ， 意思是将图片变为 200 x 135 大小后，放在这个无序列表的左边。同理，若想将图片放在右边，将上述格式的 `"#L"` 变更为 `"#R"` 即可。

Tip ：建议使用背景透明的 png 图，在这类图片能比较好地兼容浅色模式与深色模式；

成功实现一组无序列表后，按同样的方式复现几组，即可得到一个接近于完工的界面啦~

![041602de5dfb568c573bc3abcabc9bf6.png](https://cdn.pkmer.cn/images/041602de5dfb568c573bc3abcabc9bf6.png!pkmer)

Tip ：一般推荐一行放 4 个以内的无序列表，文本太长，或者显示器的分比率不高的情况下，很可能出现侧边栏出现时，会有字体换行的情况：

![0e574d143d3818a73c7fc88895f1d0b4.png](https://cdn.pkmer.cn/images/0e574d143d3818a73c7fc88895f1d0b4.png!pkmer)

### 4. 微调界面细节

#### 4.1 添加装饰图片

目前主页的效果已经比较接近于示例图了，相比之下，少了以下几个小图标：

![c7f0c5c3343c265e43c49ab27de25f0e.png](https://cdn.pkmer.cn/images/c7f0c5c3343c265e43c49ab27de25f0e.png!pkmer)

图片部分的格式依旧为： `"!"` + `"[["` + `"图片名"` + `"#L"` + `"|"` + `"图片大小"` + `"]]"` ，其中两个比较小的图案设置为: 30 ，比较大的图案设置为 200x135。

![1948c1b72f89b1391e1f95f6962f6e38.png](https://cdn.pkmer.cn/images/1948c1b72f89b1391e1f95f6962f6e38.png!pkmer)

至此，主页制作的效果层面的内容基本已经完成。

#### 4.2 设置启动 Obsidian 时，自动打开主页

此步骤属于锦上添花系列，大家可以根据自己的实际需求设置。 Obsidian 的 Homepage 插件，可以让我们在启动软件时，就默认打开我们设计好的软件（不用在文件夹中捞半天）

以下是我的插件设置，大家可以参考一下：

![b8f979e0d2e4c1fcd009f0eb637e0893.png](https://cdn.pkmer.cn/images/b8f979e0d2e4c1fcd009f0eb637e0893.png!pkmer)
