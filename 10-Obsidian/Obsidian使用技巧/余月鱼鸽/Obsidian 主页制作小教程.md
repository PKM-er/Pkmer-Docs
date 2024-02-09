---
uid: 20240115155129
title: Obsidian 主页制作小教程
tags: [Obsidian, Obsidian插件]
description: Obsidian 主页制作小教程
author: 余月鱼鸽
type: other
draft: false
editable: false
modified: 20240123002619
---

# Obsidian 主页制作小教程

## Obsidian 主页简介

@熊猫别熬夜 发现了：

- [[Obsidian样式-调整图片不同布局样式]]
- [[Obsidian样式-minimal主题Cards卡片布局]]

这两个 css 的搭配的妙用：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/df1c6732b25359f4c4c088468ee25213.png!pkmer)

经过一小段时间的折腾后，我搭配出了一个 moc 主页，具体效果可见下方：

1. 浅色模式：
 ![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/4c308d85ab71946160a54471f0640849.png!pkmer)
2. 深色模式：
![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/5def48eeb9f84a9eec74dd0cc65ae9dd.png!pkmer)

## 制作教程

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/a768536996e9ffe18bba2830e8623d31.png!pkmer)

Obsidian 主页的制作方法，大致为以下 4 个步骤：

1. 配置头图
2. 制作标题栏
3. 制作 moc 卡片
4. 微调界面细节

### 1.配置头图

这个步骤使用的是 Obsidian Banners 插件，该插件可以将库内图片，甚至是外部图片链接变为笔记中的头图。

具体使用方法：在 YAML 区添加 banner 相关的参数即可：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/f896451a1612b1f9f1e5f106633d58fa.png!pkmer)

这样切换到阅读模式，我们就能收获到一个有头图的文件：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/2b22fec72f9d7b52ac4c687a93026392.png!pkmer)

Tip ：

 - 除使用库内图片，也可以使用 bing 的每日一图，将 <https://api.dujin.org/bing/1366.php> 作为图片路径，每天重登 obsidian 即可收获不一样的头图
 - 更新 1.4.x 之后，很多人因为使用了 banner 插件，还有 properties 新核心插件而出现了高度问题，会出现莫名的留白，这个文档提供了解决方案：[Obsidian 样式：修复 banner 和 Properties 高度冲突以及多余留白改善]( https://pkmer.cn/show/20230918104801 )
 - 更多的 banner 插件使用小技巧可以见： [Obsidian 插件：Obsidian Banners 为你的笔记添加头图]( https://pkmer.cn/show/20230329141826 )

### 2. 制作标题栏

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/3615b60742869022f68d07545f4ab6c2.png!pkmer)

标题栏的部分主要用到两个插件：

1. button 插件，主要用来添加快捷打开的 project 的按钮，网站上的文章：[Obsidian 插件：Buttons 美化必备的按钮插件]( https://pkmer.cn/show/20230514144947 ) 解释得挺详细的，此处就不展开了
2. 本主页主要用 dataview 插件，统计本文本库的文件、标签数量。安装 dataview 插件后，直接将这段 dataviewjs 代码区域中复制到文件中即可。

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/7fceab914faedc1b7a0c103ee7ddbee1.png!pkmer)

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

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/92a9f5d0611f5ea4d0b8e1774ae3b0e1.png!pkmer)

### 3. 制作 moc 卡片

#### 3.1 将 css 片段导入文库内

Tip ：第一次接触 css 的新手可以看一下这个文章：[Obsidian 的 CSS 代码片段]( https://pkmer.cn/show/20230329145845 )

本步骤主要使用 3 种 css 片段，分别为：

1. [[Obsidian样式-调整图片不同布局样式]]
2. [[Obsidian样式-minimal主题Cards卡片布局]]
3. 界面全宽显示，来源是 @熊猫别熬夜 ，在网站上没搜到对应的文章，具体 css 代码可以直接在下方复制：

```css
/* !关闭显示标题栏：colse_show_title */
.colse_show_title.markdown-preview-view .mod-header .inline-title {
  display: none;
  line-height: 0px;
}
.view-content .colse_show_title .inline-title {
  display: none;
}

/* !设定界面宽度全宽：full_width_page*/
.full_width_page.markdown-source-view.mod-cm6.is-readable-line-width,
.full_width_page.markdown-preview-view {
  --file-line-width: 100% !important;
}
/* 设定字体大小 */
.full_width_page.markdown-preview-view {
  font-size: 22px !important;
  line-height: 150%;
}
```

#### 3.2 制作 moc 卡片

3.2.1 在文件属性区域的【 cssclasses 】添加 list-cards 以及 colse_show_title 两个参数：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/202401230021778.png!pkmer)

- list-cards ：这个参考可以让文件中的无序列表变为卡片视图
- full_width_page：让界面进入全宽模式
- colse_show_title：如果设置了显示页内标题，则该 CSS 可以关闭显示

3.2.2 开始配置

在文件中添加一组无序列表，具体格式为：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/1330a20213b0066b0d97ea0f6dc55d6a.png!pkmer)

其中，图片部分的格式为 `"!"` + `"[["` + `"图片名"` + `"#L"` + `"|"` + `"图片大小"` + `"]]"` ， 意思是将图片变为 200 x 135 大小后，放在这个无序列表的左边。同理，若想将图片放在右边，将上述格式的 `"#L"` 变更为 `"#R"` 即可。

Tip ：建议使用背景透明的 png 图，在这类图片能比较好地兼容浅色模式与深色模式；

成功实现一组无序列表后，按同样的方式复现几组，即可得到一个接近于完工的界面啦~

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/041602de5dfb568c573bc3abcabc9bf6.png!pkmer)

Tip ：一般推荐一行放 4 个以内的无序列表，文本太长，或者显示器的分比率不高的情况下，很可能出现侧边栏出现时，会有字体换行的情况：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/0e574d143d3818a73c7fc88895f1d0b4.png!pkmer)

### 4. 微调界面细节

#### 4.1 添加装饰图片

目前主页的效果已经比较接近于示例图了，相比之下，少了以下几个小图标：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/c7f0c5c3343c265e43c49ab27de25f0e.png!pkmer)

图片部分的格式依旧为： `"!"` + `"[["` + `"图片名"` + `"#L"` + `"|"` + `"图片大小"` + `"]]"` ，其中两个比较小的图案设置为: 30 ，比较大的图案设置为 200x135。

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/1948c1b72f89b1391e1f95f6962f6e38.png!pkmer)

至此，主页制作的效果层面的内容基本已经完成。

#### 4.2 设置启动 Obsidian 时，自动打开主页

此步骤属于锦上添花系列，大家可以根据自己的实际需求设置。 Obsidian 的 Homepage 插件，可以让我们在启动软件时，就默认打开我们设计好的软件（不用在文件夹中捞半天）

以下是我的插件设置，大家可以参考一下：

![Obsidian 主页制作小教程](https://cdn.pkmer.cn/images/b8f979e0d2e4c1fcd009f0eb637e0893.png!pkmer)
