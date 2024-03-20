---
uid: 20240316152831
title: 如何让 mousewheel-image-zoom 插件适配 pdf++ 嵌入块
tags: [obsidian, pdf, image]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240320183504
---

# 如何让 mousewheel-image-zoom 插件适配 pdf++ 嵌入块

[[mousewheel-image-zoom]] 插件可以让你很方便的用鼠标滚轮就能调整插入 obsidian 页面中的图片尺寸。[[pdf-plus_readme|pdf++]] 插件则是目前 obsidian 中最好用的 pdf 增强插件。如果你用过 pdf++，那么你应该知道这个插件提供了一个嵌入部分 pdf 的功能，体验非常好

![image.png](https://cdn.pkmer.cn/images/20240316153237.png!pkmer)

你可以像截图一样截取 pdf 中的一部分，该部分的链接会自动复制到你的剪切板中，你只需要到需要嵌入的文章中粘贴即可把刚刚截取的部分嵌入你的 markdown 文章中。这样做不仅让你的文章与该 pdf 建立了双链，还不会在本地生成图片。

在开发者模式中查看这个 pdf 嵌入块，可以看到他其实是一个 base64 图片

![image.png](https://cdn.pkmer.cn/images/20240316153513.png!pkmer)

使用修改图片尺寸的方法能够对该 pdf 嵌入块生效。

![image.png](https://cdn.pkmer.cn/images/20240316153615.png!pkmer)

但是，用 mousewheel-image-zoom 插件尝试修改这个插件时却报错了：Image is not zoomable（可以在开发者模式的控制台中看到这个报错）

为什么同样是图片，同样是嵌入，为什么插件提示图片无法修改尺寸呢？查看下 mousewheel-image-zoom 插件的源码看看他的实现逻辑。

![image.png](https://cdn.pkmer.cn/images/20240316154056.png!pkmer)

我们在源码中找到抛出这个错误的函数 `getZoomParams()`，可以看到他只把三种函数视作 zoomable 的，也就是可调整尺寸的，其余的都会抛出无法调整尺寸的异常。

1. 包含 "http" 的，指在线图片
2. excalidraw-svg 图片，可能是嵌入的 excalidraw 的 svg 块
3. 包含 "app://" 的图片，指本地图片。

显然，pdf++ 嵌入的 base64 图片不包含在其中（base64 的尺寸很大，pdf++ 嵌入并非直接嵌入，嵌入的还是 `![[..]]`，只不过插件进行了转换，不用担心嵌入 pdf 块导致大量消耗内存），那么我们只需要把 pdf++ 的嵌入块也纳入特例即可（就像 excalidraw-svg 那样）

用 `console.log()` 查看三种 zoomable 的嵌入图片的返回值，是一个用图片名和正文信息修改组成的对象。我们直接用作者写好的函数 `Util.getLocalImageZoomParams()` 即可。

想要使用这个函数，考虑输入值。正文文本 fileText 已经有了，只需要获取嵌入块的名称即可，也就是 `![[...]]` 中省略号的内容。

target 指向的是嵌入块的图片，在开发者模式中查看相关信息，看看能不能模仿获取本地图片的名称那样获取。作者写了 `Util.getLocalImageNameFromUri()` 方法，用图片的 uri 中用正则获取了图片的名称。我们没法用这种方法，因为 pdf++ 的嵌入块只有 base64 的信息，没有看到有图片名称的信息。用其他方法获取。

![image.png](https://cdn.pkmer.cn/images/20240316155313.png!pkmer)

看到他的父元素的 src 属性有我们要的信息——嵌入块的名称，恰好我们有 target 指向该元素，因此用 `target.parentNode.getAttribute("src")` 就得到了 pdf++ 嵌入块父元素的 src 的信息。

![image.png](https://cdn.pkmer.cn/images/20240316155442.png!pkmer)

给 else-if 添加上判断：父节点是否有 src 属性、父节点的 src 属性是否包含 ".pdf#page"；以此判断我们选取的是 pdf++ 的嵌入块。

结果如下：

![image.png](https://cdn.pkmer.cn/images/20240316155725.png!pkmer)

```JavaScript
else if (target.parentNode.hasAttribute("src") && target.parentNode.getAttribute("src").includes(".pdf#page")) {
	const imageName = target.parentNode.getAttribute("src");
	return Util.getLocalImageZoomParams(imageName, fileText);
}
```

测试结果

![PixPin_2024-03-16_00-31-53.gif|600](https://cdn.pkmer.cn/images/PixPin_2024-03-16_00-31-53.gif!pkmer)
