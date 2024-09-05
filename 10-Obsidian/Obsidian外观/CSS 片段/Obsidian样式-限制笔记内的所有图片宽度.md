---
uid: 20240829210510
title: Obsidian 样式：限制笔记内的图片宽度（可点击放大）
tags: [Obsidian, css, 图片]
description: Obsidian 样式：限制笔记内的图片宽度（可点击放大）
author: Moy
type: other
draft: false
editable: false
modified: 20240905143349
modified_date: 2024-08-29T21:31
---

# Obsidian 样式：限制笔记内的图片宽度（可点击放大）

一个简单的 css，分享一下。

在笔记里有很多图片的时候，图片占用的空间过大，导致一页能显示的内容有限。

利用这个样式可以批量限制这个笔记内所有图片的大小，在需要的时候点击图片进行放大。

应用前：

![c44becbc5021233fd3341ea9bfe61fb5.png|600](https://cdn.pkmer.cn/images/c44becbc5021233fd3341ea9bfe61fb5.png!pkmer)

应用后：

![25f8ba5c825f4f16e9dcbe27e0f01782.png|600](https://cdn.pkmer.cn/images/25f8ba5c825f4f16e9dcbe27e0f01782.png!pkmer)

css 代码：

````css
/* 特定页面的图片限宽 */
/* 限制最大宽度为 400px */
.small-image img {
    max-width: 400px !important;
    max-height: 400px !important;
    transition: max-width 0.2s ease, transform 0.3s ease;
}

/* 第一种方法：恢复最大宽度（高度也会随之变化） */
.small-image img:active {
    max-width: 100% !important;
    max-height: 100% !important;
}

/* 第二种方法：放大到1.5倍（高度不变） */
/* 并添加阴影 */
/* 
.small-image img:active {
    transform: scale(1.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
} 
*/

````

使用方法：

1. 把上面的 css 代码放进 CSS Snippets（样式片段）
2. 在需要限制图片宽度的笔记里，添加元数据 `cssclasses: small-image`

提供了两种变换的方法，任选一种即可。

默认是第一种，需要第二种话把第一种注释掉，然后取消第二种的注释。

效果演示：

第一种方法：

![2055ce959a185237196970bd79ebed12.gif|660](https://cdn.pkmer.cn/images/2055ce959a185237196970bd79ebed12.gif!pkmer)

第二种方法：

![0430150484c6c5167d8797bbb7a53106.gif|660](https://cdn.pkmer.cn/images/0430150484c6c5167d8797bbb7a53106.gif!pkmer)

主要区别在于第二种方法**高度不变，下方的内容不会随之移动**。

另外，在阅读模式下，第二种方法会更好看些，图片会浮在文本上方：

## 自留

示例图片：

![428957d3762ea3c76a0d49874c6e28e3.png|660](https://cdn.pkmer.cn/images/428957d3762ea3c76a0d49874c6e28e3.png!pkmer)

![0782ca83be7535d2605dfef9837425ac.jpg|660](https://cdn.pkmer.cn/images/0782ca83be7535d2605dfef9837425ac.jpg!pkmer)
