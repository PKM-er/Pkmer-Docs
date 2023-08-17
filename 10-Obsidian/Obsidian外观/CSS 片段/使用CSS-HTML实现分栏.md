---
uid: 20230610161526
title: 使用纯 CSS+HTML 实现分栏
tags: [Obsidian, CSS, 样式, 排版]
description: 使用 CSS+HTML 实现分栏
author: darkluna999
type: other
draft: false
editable: false
modified: 20230619164804
---

# 使用纯 CSS+HTML 实现分栏

## 使用方式

使用纯 html 的好处是标签高亮便于查看且视图相对友好

当然使用 DataViewjs 的 el 功能也可以，这里不做示例

```HTML
<div class='column-darkblue column3 column-head3'>
<h3>heading</h3>
<p>示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本</p>
</div>
```

## 效果

![Pasted image 20230610172223](https://cdn.pkmer.cn/images/Pasted%20image%2020230610172223.png!pkmer)

## CSS 片段

```css
div.column3 p {
  column-count: 3;
  padding: 3%;
  border-radius: 10% 0%;
  background-color: #fff00075;
}

div.column-darkblue p {
  column-rule: 1px solid darkblue;
  column-gap: 30px;
  column-width: 50px;
}

div.column-head3 h3 {
  text-align: center;
}

```

## 代码分析

### HTML 部分

```HTML
<div class='column-darkblue column3 column-head3'>
<h3>heading</h3>
<p>示例文本示</p>
</div>
```

`<div></div>`

- `<tag></tag>` 是一个 HTML 标签的基本单位如没有内容物可缩写为 `</tag>`
- 表示定义一段分区或节段本例中使用它实现一个分栏包裹块，对其施加 class 属性以匹配对应的 CSS 样式
- **注意**由于 obsidian 的渲染功能限制，整段 HTML 中不可出现空行

`<h3>`

- 表示定义一个三级标题等效于 `###` 但在此需使用 HTML 标签 `h3`
- 可替换为其他等级标题，需要与自定义的 `column-head3` 类相匹配方能产生效果

`<p>`

- 表示定义一个 paragraph 文段
- **注意：** 由于 obsidian 的渲染功能限制，整段 HTML 中不可出现空行且如需换行请使用 `</br>` 标签当作**换行符**等效一次回车或 `</p>` 当作**换段符**等效两次回车

`class='column-red column3 column-head3'`

- 表示属于 `column-red` `column3` `column-head3` 类
- 分别用以匹配 `红色` `三栏` `三级标题`

### CSS 部分

```css
div.column3 p {
  column-count: 3;
  padding: 3%;
  border-radius: 10% 0%;
  background-color: #fff00075;
}

```

`div.xxxxx` 表示某类 `div` 标签

`p` `h3` 分别表示对应类 `div` 标签下的 `p` `h3` 标签，其内装载对应属性

- `column-count: 3` 表示分为三栏，在此基础上可以变更为其他栏数
- `padding: 3%` 表示内部缩进 3% 配合圆角形状进行缩进
- `border-radius: 10% 0%` 表示圆角形状
    - 数值可使用像素、弹性字符、百分比
    - 数值为顺时针顺序 左上 右上 右下 左下
    - 如不足则从头循环 本例等于 10% 0% 10% 0%
- `background-color: #fff00075` 设置背景色为 HEX 色值 `#fff000` 不透明度 75%

```css
div.column-darkblue p {
  column-rule: 1px solid darkblue;
  column-gap: 30px;
  column-width: 50px;
}
```

`column-rule: 1px solid darkblue` 表示定义分栏线的样式为 `1 像素 实线 深蓝色`

- `darkblue` 可替换为其余颜色值
- `px` 可替换为其余长度单位如 `rem` `em`
- `solid` 可替换为 `dotted` `dashed` 分别代表 `点` `划`

`column-gap: 30px` 列间距 30 像素

`column-width: 50px` 列宽 50 像素

```css
div.column-head3 h3 {
  text-align: center;
}
```

`text-align: center` 文本居中

**注：CSS 或可升级替换属性为 `attr()`，因目前尚未兼容，后续或可更新**