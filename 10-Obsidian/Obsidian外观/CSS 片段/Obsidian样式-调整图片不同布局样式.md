---
uid: 20231202002300
title: Obsidian 样式：调整图片不同布局样式
tags: [图片, CSS自定义]
description: Obsidian 样式 - 调整图片不同布局样式，将图片渲染为圆形或者控制图片在文本的左侧或者右侧，可组合。
author: 余月鱼鸽
type: other
draft: false
editable: false
modified: 20240119110622
---

# Obsidian 样式：调整图片不同布局样式

## 1.css 来源

在整理侧边栏索引界面时，@熊猫别熬夜 帮忙写了一个让图片变圆的 css，后面@熊猫别熬夜 拓展了用法，目前能支持的功能包括：

1. 将图片渲染为圆形。
2. 控制图片在文本的左侧或者右侧。

这两个效果在功能上不会冲突，允许同时使用

## 2.css 的使用方法

注：以下测试图片来自：英国 1927 剧团的话剧《roots》的剧照

> [!note] 1.将图片变成圆形
> 插入图片后，在图片名后面添加 `#O` 并设置自己期望的圆形比例 ` |200x200`
>
> 设置完的配置：`![[DSC04693.jpg#O|200x200]]`，

**具体效果如下** ：

![Obsidian 样式 - 调整图片不同布局样式](https://cdn.pkmer.cn/images/202312020017824.png!pkmer)

> [!caution] 注意点：
> 1. 在编辑模式下，图片有时候显示的是方形的，切换到阅读模式下就可以显示正常了
> 2. 设置圆形大小的参数必须是小写的 x，如上图为：200x200，数字键盘的 `*` 以及大写的 `X` 不生效

> [!note] 2.控制图片在文本的左侧或者右侧。
> 1. 插入图片后，在图片名后面添加 `#L` 可控制图片出现在左侧；格式为：`![[DSC04693.jpg#L|150]]`
> 2. 插入图片后，在图片名后面添加 `#R` 可控制图片出现在右侧；格式为：`![[DSC04693.jpg#R|150]]`

**具体效果如下**：

 ![Obsidian 样式 - 调整图片不同布局样式](https://cdn.pkmer.cn/images/202312020017825.png!pkmer)

> [!note] 3.两种效果混合使用
> 例：插入图片后，在图片名后面添加 `#O` 设置图片为圆形后，后面添加 `L` 可控制图片出现在左侧；后面添加 `R` 可控制图片出现在右侧；格式为：`![[DSC04693.jpg#OL|200x200]]`

**具体效果如下**：

> ![Obsidian 样式 - 调整图片不同布局样式](https://cdn.pkmer.cn/images/202312020017826.png!pkmer)

## 3.css 片段代码

```css

/* 片段来自：pkmer知识管理交流群，@熊猫别熬夜*/
/* 将所有图片默认居中 */
body:not(.list-image-control-off)
  :is(.HyperMD-list-line, ul)
  .image-embed.image-embed
  img:not([width]):not([class*="emoji"]),
img:not([class*="emoji"]) {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  max-width: 90%;
  margin: 0 auto; /* 设置左右间距为自适应，上下间距为零 */
  object-fit: contain;
  background-color: transparent;
}

/* 视频 */
video {
  display: block;
  margin: 0 auto; /* 设置左右间距为自适应，上下间距为零 */
  width: 90%;
}

/* === Image Float === */
body {
  --float-left-margin: 4px 12px 4px 12px;
  --float-right-margin: 4px 12px 4px 12px;
  --float-snw-display: none;
}
span[src$="O"] img {
  object-fit: cover;
  border-radius: 50%;
}

span[src$="OL"] img {
  object-fit: cover;
  border-radius: 50%;
  float: left;
  margin: var(--float-left-margin);
  margin-block: unset;
  display: inline !important;
}

span[src$="OR"] img {
  object-fit: cover;
  border-radius: 50%;
  float: left;
  margin: var(--float-right-margin);
  margin-block: unset;
  display: inline !important;
}

span[src$="L"] img {
  float: left;
  margin: var(--float-left-margin);
  margin-block: unset;
  display: inline !important;
}

span[src$="R"] img {
  float: right;
  margin: var(--float-right-margin);
  margin-block: unset;
  display: inline !important;
}
```
