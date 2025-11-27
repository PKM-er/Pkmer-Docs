---
uid: 7796
title: 基于Bases的黑胶唱片架
tags: [bases, 音乐, 专辑]
description: 基于Bases的黑胶唱片架
author: ProudBenzene
type: other
draft: false
editable: false
modified: 20251127095303
forum_url: https://forum.pkmer.net/t/7026
---

# 基于Bases的黑胶唱片架

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: ProudBenzene
> - 原始链接: [基于Bases的黑胶唱片架](https://forum.pkmer.net/t/7026)

---

# 基于 Bases 的黑胶唱片展示柜

## 缘由

受到 Kepano Bases 书架片段的启发，我使用AI辅助撰写了这个CSS Snippet，它可以为bases中的cover加上一个黑胶唱片动效：当你的鼠标悬浮在专辑封面上时，黑胶唱片便会滚动。

![效果展示](upload://9s8FpR4HmTnKLYq0KuqdHAdvN2A.gif)

需要结合将 cover 模式设置成 contain 以使用，宽高比（经我测试）使用 0.75 比较合适。

![Bases参数设置](https://cdn.pkmer.cn/original/1X/cc406a46020b651529b5a04d474912542a8fa621.webp)

## 代码

```css
/*
 * @Author: ProudBenzene & Gemini 3 Pro
 * @Date: 2025-11-26 21:33:08 
 * @Last Modified by: ProudBenzene
 * @Last Modified time: 2025-11-26 21:58:07
 * @Site: https://github.com/ProudBenzene
 * @Description: Vinyl Record Cover effect for card views in Obsidian Bases
*/

.bases-view {
	--bases-cards-background: transparent;
	--bases-cards-cover-background: transparent;
	--bases-cards-shadow: none;
	--bases-cards-shadow-hover: none;
}

.bases-cards-group {
	gap: 20px;
	padding: 20px;
}

.bases-cards-item {
	border: none;
}

/* The Album Cover Container */
.bases-cards-cover {
	position: relative;
	overflow: visible;
	/* Allow record to peek out */
	transform-style: preserve-3d;
	/* Enable 3D context for z-axis positioning */
	z-index: 0;
	border-radius: 2px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
	transition: transform 0.2s ease;
	background-color: var(--background-secondary);
	aspect-ratio: 1 / 1;
}

/* The Vinyl Record */
.bases-cards-cover::before {
	content: "";
	position: absolute;

	/* Centered Position & Behind Cover */
	top: 50%;
	left: 50%;
	/* Default State: Popped out to the right */
	transform: translate(-20%, -50%) translateZ(-10px) rotate(20deg);

	/* Size: Slightly smaller to ensure it's hidden behind the square cover */
	width: 95%;
	height: 95%;

	border-radius: 50%;

	/* Vinyl Appearance */
	background:
		/* Label (Pinkish Red) - Top Layer */
		/* Transparent hole (0-3%) -> Red Label (3.5%-66%) -> Transparent (66.5%+) */
		radial-gradient(circle, transparent 3%, #ff4757 3.5%, #ff4757 35%, transparent 35.5%),
		/* Vinyl Grooves and Shine - Bottom Layer */
		repeating-radial-gradient(#111 0,
			#111 2px,
			#222 3px,
			#111 4px);

	/* Subtle shadow for the record */
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

	/* Transition for smooth return if animation is interrupted or ends */
	transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Hover Effects */
.bases-cards-item:hover .bases-cards-cover::before {
	/* Trigger the retract and rebound animation */
	animation: record-poke 0.8s ease forwards;
}

/* Animation Keyframes */
@keyframes record-poke {
	0% {
		/* Start: Popped out */
		transform: translate(-20%, -50%) translateZ(-10px) rotate(20deg);
	}

	50% {
		/* Middle: Retracted fully behind cover */
		transform: translate(-50%, -50%) translateZ(-10px) rotate(0deg);
	}

	100% {
		/* End: Rebound back to popped out */
		transform: translate(-20%, -50%) translateZ(-10px) rotate(20deg);
	}
}

/* Title Styling */
.bases-cards-property.mod-title {
	padding-top: 10px;
}
```

下载链接：[GitHub Gist](https://gist.github.com/ProudBenzene/19667d8726fb472e4a81f21125fd60e5)
