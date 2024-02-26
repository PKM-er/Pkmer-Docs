---
uid: 20240130182810
title: Obsidian 样式 - 标签页标题栏的隐藏
tags: [obsidian, 标题栏, css, 隐藏]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240203101431
---

# Obsidian 样式 - 标签页标题栏的隐藏

正文上方的标题栏的隐藏 css（不是页内标题，是那个带路径的）

![image.png](https://cdn.pkmer.cn/images/20240130183105.png!pkmer)

这个标题栏分为两个部分，左侧路径和右侧当前页面的文件名

> css 使用方法见：[[Obsidian的CSS代码片段]]

---

如果你只是想隐藏路径，可以用这段 css

```css
.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container .view-header-title-parent {
  display: none;
}
```

---

如果你想整个隐藏，去设置关闭（外观 -> 显示标签页标题栏）

---

如果你想要平常隐藏，鼠标悬停的时候显示文件名，用这个 css

```css
.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container .view-header-title-parent {
  display: none;
}

.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container .view-header-title {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container .view-header-title:hover {
  opacity: 1;
}
```

---

如果你觉得悬停的范围太小了，想要扩大点范围，用这个 css

```css
.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container .view-header-title-parent {
  display: none;
}

.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container:hover {
  opacity: 1;
}
```

---

如果你觉得悬停的范围是整条太大了，想要缩小一点，用这个 css

```css
.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container .view-header-title-parent {
  display: none;
}

.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container {
  opacity: 0;
  margin: 0 20%;
  transition: opacity 0.2s ease-in-out;
}

.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container:hover {
  opacity: 1;
}
```

调整中间的 <kbd>margin: 0 20%;</kbd> 中的后一位数值可以控制范围，数值越大，范围越小

---

如果你想要平常隐藏，悬停的时候把地址和文件名都显示出来，用这段 css

```css
.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container {
  opacity: 0;
  margin: 0 20%;
  transition: opacity 0.2s ease-in-out;
}

.workspace-leaf-content[data-type='markdown'] .view-header .view-header-title-container:hover {
  opacity: 1;
}
```

如果你想要整条标题栏都可以用于悬停，去掉第四行的 <kbd>margin: 0 20%;</kbd> 即可。