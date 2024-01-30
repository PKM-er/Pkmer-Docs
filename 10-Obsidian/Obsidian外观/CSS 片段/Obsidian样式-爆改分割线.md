---
uid: 20240125213258
title: Obsidian 样式 - 爆改分割线
tags: [Obsidian, hr, 分割线, 样式]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240130152611
---

# Obsidian 样式 - 爆改分割线

下文以 图片 + css + 代码部分解释 的形式给出，自行挑选。

> [!Important] 声明
> 以下 css 均在 obsidian 1.5.3 版本 and 无 css 无主题 无插件的空库中测试生效。如遇问题可以加群咨询群友。
>
> 关于 css 的使用方法请见：[[Obsidian的CSS代码片段]]

## 短线分割

![image.png](https://cdn.pkmer.cn/images/20240125214812.png!pkmer)

```css
.markdown-rendered hr,
.markdown-source-view.mod-cm6 .hr {
  display: block;
  height: 2px;
  border: none;
  border-bottom: 2px dashed var(--hr-color);
}
```

上面代码中 var(--hr-color) 为分割线颜色，可以修改为别的颜色值，例如

```css
border-bottom: 2px dashed #1e1e1e;
```

## 彩色样式

斜着的和平着的

![image.png](https://cdn.pkmer.cn/images/20240125221043.png!pkmer)

```css
.markdown-rendered hr,
.markdown-source-view.mod-cm6 .hr {
  position: relative;
  display: block;
  margin-top: 4em;
  margin-bottom: 4em;
  height: 3px;
  border:none;
  background: linear-gradient(to right, transparent 50%, #fff 50%), linear-gradient(to right, #00b9ff, #59d941);
  background-size: 1.5rem, 100%;
  transform: rotate(-3deg);
  transform-origin: 50% 0%;
}

.markdown-rendered hr::after,
.markdown-source-view.mod-cm6 .hr::after {
  font-family: 'FontAwesome';
  content: '\f061     \f1cb     \f060';
  white-space: pre;
  display: block;
  position: absolute;
  top: 1px;
  left: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;  
  background-image: linear-gradient(to right, #00b9ff, #59d941);
  padding: 0 1em;
  color: transparent;
  -webkit-background-clip: text;
}
.markdown-rendered hr::before,
.markdown-source-view.mod-cm6 .hr::before {
  content: '';
  width: 5rem;
  height: 1rem;
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  background-color: white;
}
```

可以修改第 11 行 <kbd>transform: rotate(-3deg);</kbd> 中的数字来改变旋转角度

![image.png](https://cdn.pkmer.cn/images/20240126124919.png!pkmer)

```css
.markdown-source-view.mod-cm6 hr,
.markdown-rendered hr {
  border: 0; 
  height: 1px; 
  background-image: linear-gradient(to right, #f0f0f0, #00b9ff, #59d941, #f0f0f0);
}
```

修改 <kbd>height: 1px;</kbd> 的数值可以改变分割线的高度

修改 <kbd>background-image: ...</kbd> 中的四个颜色可以改变分割线从左到右的四种颜色

## 黑白渐变

![image.png](https://cdn.pkmer.cn/images/20240128014714.png!pkmer)

```css
.theme-light {
  --divide-gradient-side-color: #ffffff00;
  --divide-gradient-center-color: #7c7c7c;
}
.theme-dark {
  --divide-gradient-side-color: #1E1E1E00;
  --divide-gradient-center-color: #d2d5d9;
}

.markdown-source-view.mod-cm6 hr,
.markdown-rendered hr {
  border: none;
  height: 1px;
  width: 90%;
  background: linear-gradient(to right, var(--divide-gradient-side-color), var(--divide-gradient-center-color), var(--divide-gradient-side-color));
  margin: 20px 0;
}

/* 添加阴影效果 */
.markdown-source-view.mod-cm6 hr::before,
.markdown-rendered hr::before {
  content: "";
  display: block;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: -2px 0;
}
```

## 中间带符号

![image.png](https://cdn.pkmer.cn/images/20240126130125.png!pkmer)

```css
.theme-light {
  --hr-color-side: var(--background-primary);
  --hr-color-center: #8f8f8f;
}

.theme-dark {
  --hr-color-side: var(--background-primary);
  --hr-color-center: #949292;
}

.markdown-source-view.mod-cm6 hr,
.markdown-rendered hr {
  border: none;
  height: 1px;
  background-image: linear-gradient(to right, var(--hr-color-side), var(--hr-color-center), var(--hr-color-side));
}

.markdown-source-view.mod-cm6 hr::after,
.markdown-rendered hr::after {
  content: '§';
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%) rotate(60deg);
  padding: 1rem;
  background-color: var(--background-primary);
}
```

最后一段 css 中的 <kbd>content: '§';</kbd> 中的符号代表分割线中间的符号，可以自行换成其他符号。

如果不需要旋转，可以去掉最后一段中的 <kbd>transform: translate(-50%, -50%) rotate(60deg);</kbd>

## 中间自定义文字

如果中间不想为固定的符号，而想要固定的文字，这里给出用 css 的相邻兄弟选择器 <kbd>+</kbd> 和伪类选择器 <kbd>has</kbd> 选中分割线后面一行文本插入分割线中间，效果如图。

> 目前只放了实时模式的代码，阅读模式我尝试过后有诸多 bug 不好解决

![image.png](https://cdn.pkmer.cn/images/20240130152505.png!pkmer)

```css
.markdown-source-view .hr.cm-line + .cm-line:not(:has(br)) {
  --hr-text-y: -135%;
  position: absolute;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  inset-inline-start: 50%;
  left: 50%;
  background-color: var(--background-primary);
  transform: translate(-50%, var(--hr-text-y));
}
```

上面的代码适用于无主题的情况，如果你有主题，可以自己适当修改前面的 <kbd>--hr-text-y</kdb> 中的数值，数值减小，文字上移。