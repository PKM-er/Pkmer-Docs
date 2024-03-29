---
uid: 20240102134408
title: 设计极简风 Obsidian 主页
tags: []
description: 用极简主义思路搭配基本元素设计Obsidian主页
author: 西郊有密林
type: other
draft: false
editable: false
modified: 20240106204358
---

# 设计极简风 Obsidian 主页

整体效果：

![Pasted image 20240102141634](https://cdn.pkmer.cn/images/202401062042555.png!pkmer)

## Homepage 插件

Homepage 插件是实现主页美化的基石，其功能很简单：

- 每次启动 Obsidian 时，首页显示指定的文件

Homepage 插件可以在插件市场中获得，上手比较简单，也是配置主页唯一一个必不可少的基础。这个插件开销比较低，几乎不会影响其他插件或者拖慢启动速度，可以放心入手。

[[Obsidian优秀外观分享]] 中有很多充满各种功能的优秀主页可供参考，本文主要是介绍我的主页设计以及背后的设计哲学，希望能带给读者一些启发。

## 基本配置

- 插件：
    - Homepage
    - Banners
    - Dataview
    - Calendar（可选）
    - Contribution Graph（可选）
- 主题：Things（或者默认主题，都一样）
- 字体：思源宋体
- 主题色：##4C8CE6

## 设计方法

总体布局上采取横向分 3 列，其中第 1、3 列分 2 行的布局，如图示设计。每一部分使用什么功能可以自定。此外，我关闭了 Readable Line Length 选项来让笔记适应比较宽的布局。

配色风格上使用了蓝色 - 白色搭配的浅色配色，由于互联网的习惯，链接一般还是使用蓝色下划线字体表示，所以我把主题色修改为了天蓝色。

排版上，对比默认来说，我缩小了字体尺寸，并且使用了思源宋体作为正文字体，界面字体保持默认。

和别人不同的是，我设计的主页并不大规模使用 dataview，也不设计一系列面板或者入口。这是极简思想在这里的体现。这个主页用到的元素十分简单，因此不需要分享任何模板，只需要根据自己的喜好使用同样的思想就能创造出最适合自己的主页。

「今天是 2024 年 1 月 2 日」是用 dataview 实现的，实时显示今天的日期。启用 dataview 插件后在一级标题上插入行内代码 `=dateformat(date(today),"yyyy年M月d日")` 就可以了。

日报部分用了一个简单的 dataview 查询筛选最近一周创建的周报文件。

除此之外，如果你安装了插件 Contribution Graph[^1] 或者其他任何热力图插件，可以像我一样增加一个写作热力图在主页上。当然，这对于主页来说并不是必须的。

![Pasted image 20240102145200](https://cdn.pkmer.cn/images/202401062042072.png!pkmer)

主页顶端的图片是用 Banners 插件添加的，这里使用的是 Banner Style 为 Gradient 的模式，可以达到比较自然的过渡。我个人选择了《神奈川冲浪里》[^2] 作为主页的 Banner 图片。这幅画是 19 世纪创作的一幅浮世绘作品，因为其风格比较平面，并且符合之前提到的蓝色 - 白色配色，所以被我选作了封面图。与此同时，其蓝白色调都偏暖，电脑屏幕使用了偏黄色的护眼模式也能适应。

主页命名为 Welcome，这是因为我喜欢打开把文件名显示为一级标题，这样就算不使用 Banners 插件，也可以得到风格简洁、看起来还不错的首页。

![Pasted image 20240102145801](https://cdn.pkmer.cn/images/202401062042988.png!pkmer)

每个标题都用了原生的 emoji 表情装饰，使得画面没有那么乏味，同时也不至于破坏整体效果。微软自带的输入法就能输入这些表情，或者用 emoji toolbar 输入更加方便。emoji 在整个主题设计上可以说是起到了画龙点睛的效果。

## 设计哲学

#### 极简主义

本文遵循的设计思想主要就是极简主义（Minimalism），总结为一句话：Less is more。笔者的水平还不足以讨论各种艺术流派之间的高下和内核，但是我可以对于极简主义的起源提出一种猜测：极简主义是物质和信息都逐渐丰富的 20 世纪人们对过度营销和信息过载的一种反击。

我们生活在一个物质和信息丰富程度比 20 世纪更甚的年代，我们要面对的问题更多是「不要什么」而不是「要有什么」。这反映在主页界面上，就是要尽量删繁就简，减少非必要的元素，避免过多元素带来疲劳。

更重要的是，包括我在内的大多数用户都没有受过专业的艺术教育，设计能力堪忧，没有能力去搭配大量颜色和元素的同时还要维持整体和谐。而极简主义可能并非是最好看的，但肯定是门槛最低的，每个人都能通过极简主义设计出不差的界面。

举个例子，如果你接触过绘画，你可能有过这个体验：一幅好的线稿，上色之后就彻底毁掉了。比如下面笔者自己画的的例子：

![Pasted image 20240102162211](https://cdn.pkmer.cn/images/202401062048048.png!pkmer)

肉眼就可以发现，坏的配色到底可以起多大的负面效果。

解决方案之一是**色卡**。在学习配色的初期，老师经常会建议我们禁止自己配色，只允许使用**色卡**上面的颜色来上色，就像小时候用有限颜色的水彩笔一样。对于有经验的画家和设计师来说，限制色卡无异于自缚双手，会影响发挥；但对于毫无设计能力的一般用户而言，色卡的限制就成了一条能够抓住的下限。

![Pasted image 20240102162634](https://cdn.pkmer.cn/images/202401062048540.png!pkmer)

按理来说，限制色卡之后自由度下降了，会处处显得不自在。但是实际上，我们不是难在缺少颜色，而是难在颜色太多找不到合适的颜色，加上拘束反而会好一些。用上面的色卡上色之后的效果对比：

![](https://cdn.pkmer.cn/images/202401062048430.jpg!pkmer)

我们设计自己的 Obsidian 主页的时候也一样，一定要避免太高的自由度带来反效果。因此我们也可用类似的思路作出限制：

1. 禁止使用 dataviewjs
2. 只能使用限定主题
3. 不允许更换背景
4. 插件数量不得多于 xxx 个
5. css 数量不得多于 xxx 个
6. ……

不仅是 homepage 的设计上是这样，在整个笔记系统的设计上也是这样。下载太多插件，创造许多根本不存在的需求，堆砌用不到的功能，带来的结果就会是越配置越不顺手，越美化越不耐看，整体效果越差。

务必要记住，高效、简练才是现代人维持效率的不二之选。

#### 整体和细节

本文的切入点是 Homepage 主页的设计，不过也要明白，主页是整个系统的一部分，自身不能脱离系统独自美丽。比个体的美更重要的整体的协调。

注重整体协调这一方面可以向 notion 学习，这是 notion 的个人主页。

![Pasted image 20240102170119](https://cdn.pkmer.cn/images/202401062043373.png!pkmer)

notion 的风格比较素雅，[[Obsidian优秀外观分享]] 没有一个不是比 notion 繁杂的。因此 notion 的设计为人称道不是因为它功能比人多，界面比人复杂，而是因为 notion 在支持了那么多元素、功能的前提下仍然保持了整体的协调、雅观。

主页大标题带 emoji 就是向 notion 学习的结果。因为 emoji 本身的配色非常鲜艳，但却是经过设计维持了自身和谐的；而 emoji 面积小，很灵活，不会影响到整体画面的和谐性，很适合用来给因为极简而过于单调的画面增添颜色。

![Pasted image 20240102195409](https://cdn.pkmer.cn/images/202401062043018.png!pkmer)

而 Obsidian 选择了把相当一部分设计的权限交给用户，就不可避免会有很多用户在仓鼠症的逻辑下下载上百个插件，自己去配置所谓「All in one」，最终就是整个软件启动慢，插件相互冲突。轻则写作体验下降，重则浪费大量时间最终放弃写作。

要维护整体协调性就必须注重细节。细节绝对是 Obsidian 的弱项，因为太多功能都由插件承担，不能很好打磨。比较常见的细节被破坏的例子就包括：

- 插件不够稳定（比如经常变成错误信息印在屏幕上）
- 插件相互不能很好配合（比如 dataview 代码块在 kanban 里面经常不会刷新）
- 背景图片本身不适合做背景图片（比如同时包含深浅两色的图片，不论你把 UI 文字设为黑还是白都会有区域看不清）
- 和整体风格不搭的字体
- 露出的代码（比如编辑模式下不会自动渲染的脚注）
- ……

虽然细节看起来微不足道，不影响使用，但是它会实实在在地破坏整体的和谐，在各处降低整体的体验。因此考虑留下哪些插件，哪些功能就成了必要之举。

#### 几点建议

根据上面论述的内容，总结起来可以提供以下建议：

1. Homepage 主页方面
	1. 如果要用背景图的话，请务必认真挑选（画面比较简单，色调变化少、留白多的会更加适合），否则宁可不用
	2. 尽量避免使用 dataviewjs 查询内容，因为通常 dataviewjs 查询块渲染不够快，甚至来不及渲染
	3. 如果使用 Banners，尽量选择扁平风格的图片（比如浮世绘、梵·高的部分作品、国画会比较合适）
	4. 合理利用 emoji 为画面增添颜色
	5. 谨慎选择不常用的字体以及楷体（宋体、雅黑相对不容易翻车），以及字体尺寸、行列间距要避免太大或者太小
2. Obsidian 整体方面
	1. 幕后而不是台前：尽量选择在幕后为增强功能服务的插件，而非改动 UI 到前台显示的插件
	2. 注意性能：避免选择严重拖慢启动速度的插件
	3. 选择性搭配 CSS 样式
	4. 避免代码外露（比如避免使用块引用，会露出定位标识符）

[^1]: Contribution Graph 尚未上架内置商店。
[^2]: [神奈川冲浪里_百度百科](https://baike.baidu.com/item/%E7%A5%9E%E5%A5%88%E5%B7%9D%E5%86%B2%E6%B5%AA%E9%87%8C/9544399)