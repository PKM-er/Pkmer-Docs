---
uid: 20230608142847
title: Obsidian 样式：自定义待办图标
tags: [Obsidian, css, 待办, 样式, 自定义, 图标]
description: Obsidian 样式：自定义待办图标
author: darkluna999
type: other
draft: false
editable: false
modified: 20230709151216
---

# Obsidian 样式：自定义待办图标

## 使用方式

`- [T] 示例待办样式`

## 效果

![Pasted image 20230610160521](https://cdn.pkmer.cn/images/Pasted%20image%2020230610160521.png!pkmer)

## CSS 代码段

```CSS

li[data-task="T"] > input:checked {
  --checkbox-marker-color: none;
  background-color: green;
  -webkit-mask-image: url("  data:image/svg+xml,<svg fill='none' stroke='currentColor' stroke-width='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>  <path stroke-linecap='round' stroke-linejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'></path></svg>  ");
}

body:not(.tasks) li[data-task="T"].task-list-item.is-checked {
  color: #42424275;
  text-decoration: line-through;
}

```

### 代码解释

```CSS

li[data-task="T"] > input:checked {
  --checkbox-marker-color: none;
  background-color: green;
  -webkit-mask-image: url("  data:image/svg+xml,<svg fill='none' stroke='currentColor' stroke-width='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>  <path stroke-linecap='round' stroke-linejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'></path></svg>  ");
}
```

`li[data-task="T"] > input:checked`

- 这一选择器表示选择 `[]` 内包裹字符为 `T` 的待办任务的勾选框部分
- 之所以使用 `input:checked` 是因为 Obsidian 默认认为 `[]` 填充后，checkbox 渲染均为 `checked` 状态
- **注意：**
    - 包裹字符仅可以为单个字符，区分大小写
    - 中英文数字及部分特殊符号均可（转义符 `\` 除外）

`--checkbox-marker-color:none`

- 表示让选框颜色为无色，即产生隐藏效果
- ~~当然也可以给个颜色，不过据我估计效果很糟糕~~
- `background-color: green;` 与 `-webkit-mask-image:url("")`
    - 二者组合表示用绿色染色，使用 url 获得的图像形状后进行蒙版遮罩，类似于 PhotoShop 的剪贴蒙版，也就是说将 url 的 SVG 图形剪出来而后变成绿色显示在这里

`data:image/svg+xml`

- 表示接下来的文本数据将以 svg 格式识别并进行渲染，当然这里也可以使用 base64，但效果欠佳

`<svg></svg>`

这里填写你的 svg 数据

- **注意：**
    - 两侧双引号，意味着内部**双引号应注意转义或更换为单引号**
    - 推荐一个 SVG 库 [Heroicons](https://heroicons.dev/)

```CSS
body:not(.tasks) li[data-task="T"].task-list-item.is-checked {
  color: #42424275;
  text-decoration: line-through;
}

```

`body:not(.tasks) li[data-task="T"].task-list-item.is-checked`

- 这一选择器表示选择状态为完成的，`[]` 内包裹字符为 `T` 文字部分，注意点同上

`color: #42424275`

- 这里用了一个并不标准的 HEX 颜色编码，实际上前六位的 HEX 编码表示其文本颜色而后两位的 75 则表示不透明度为 75% 与 ARGB 颜色表示法相类似

`text-decoration: line-through`

- 表示使用删除线划过这个已经标记为完成的待办，当然如果你定义这个待办并不想要有删除线穿过，移除这行即可
