---
uid: 20231130232241
title: Zotero 笔记样式美化
tags: [zotero, css, 外观, 美化]
description: Zotero 笔记界面样式美化
author: wang
type: other
draft: false
editable: false
modified: 20231213104308
---

# Zotero 笔记样式美化

## 最终实现效果

### 效果图

![Zotero笔记样式美化](https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231130113116.png)

### 总代码

```CSS
.output_wrapper/*此属性为全局*/
{
  font-size: 16px;
  color: #3e3e3e;
  line-height: 1.6;
  word-spacing:0px;
  letter-spacing:0px;
  font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;  
}
li{  /*在公众号下，改变不了li符号的属性（如颜色），并会影响其子元素的属性;而在其它博客平台中，则能正常使用*/
  margin-bottom: 0.5em;
/*  color:#159957; */    
}
.code_size_default  /*代码块默认size*/
{
  line-height: 18px;
  font-size: 14px;
  font-weight:normal;
  word-spacing:0px;
  letter-spacing:0px;
}
.code_size_tight /*代码块紧凑size*/
{
   line-height: 15px;
   font-size: 11px;
   font-weight:normal;
   word-spacing:-3px;
   letter-spacing:0px;
}
a { /*超链接*/
  text-decoration: none;
  color: #1e6bb8;
  word-wrap:break-word;
}
strong  /*强调*/
{
  font-weight: bold;
}
em /*斜体*/
{
  font-style:italic;
}
del /*删除线*/
{
 font-style:italic;
}
strong em/*强调的斜体*/
{
  font-weight: bold;
}
hr {  /*分隔线*/
  height:0.91px;
  margin: 1.5rem 0px;
  border: none;
  border-top: 1px dashed #A5A5A5;
}
code /*行内代码*/
{
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin:0 2px;
  color:#e96900;
  background:#f8f8f8;
}
a, a:visited { /* 普通状态和访问过的链接 */
  color: #42B983; /* 深绿色 */
  text-decoration: underline; /* 下划线 */
}
a:hover, a:focus { /* 鼠标悬停和聚焦状态 */
  color: rgba(255,69,0,0.5); /* 更深的绿色 */
}
blockquote {
  border-left: 4px solid #4caf50; /* 鲜明的绿色边界 */
  background-color: #e8f5e9; /* 浅绿色背景 */
  color: #2e7d32!important; /* 引用文本的深绿色 */
  padding: 0.01px!important; /* 内边距 */
  margin: 0px 0!important; /* 减小上下外边距 */
}
/* 如果您想让所有设置为加粗的文本都变成橙红色，可以使用以下通用规则 */
b, strong {
  font-size: 1em;
  color: rgba(255,69,0,1); /* 橙红色 */;
  background-color: #f0f0f0; /* 淡灰色背景 */
  padding: 2px 4px; /* 加点内边距让背景更明显 */
  border-radius: 2px; /* 可选：为背景添加圆角 */
}
h1 {
  font-size:1.2em;
  margin-bottom: 2em;
  margin-right: 5px;
  padding: 8px 15px;
  letter-spacing: 2px;
   /* 保持文字颜色为纯白色 */
  border-left: 10px solid rgba(240,19,19,0.5); /* 可以根据需要调整边框颜色 */
  background:rgba(240,19,19, 0.25);
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 文字阴影，增强对比 */
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.5); /* 盒子阴影，可根据需要调整 */
  text-align: center;
}
h2 {
  font-size: 1em;
  margin-bottom: 2em;
  margin-right: 5px;
  padding: 8px 15px;
  letter-spacing: 2px;
   /* 保持文字颜色为纯白色 */
  border-left: 10px solid rgba(102, 204, 153,0.5); /* 可以根据需要调整边框颜色 */
  background:rgba(102, 204, 153, 0.25);
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 文字阴影，增强对比 */
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.5); /* 盒子阴影，可根据需要调整 */
  text-align: center;
}
ol {
  padding-left: 16px;
  counter-reset: item; /* 重置计数器 */
}
ul {
  padding-left: 16px;
}
ul li, ol li {
  list-style-type: none; /* 移除默认列表标记 */
  position: relative;
}
ul li:before {
  content:'•';
  position: absolute;
  left: -25px;
  font-size: 22px;
  color: currentColor;
  transform: translateY(-15%);
}
ol li:before {
  content: counter(item) '.'; /* 使用计数器 */
  counter-increment: item; /* 每个li项都递增计数器 */
  position: absolute;
  font-size: 0.9em;
  left: -20px;
  color: currentColor;
  transform: translateY(0%);
}
/* 根据嵌套层级改变颜色 */
ul li, ol li { color: red; }
ul li ul li, ul li ol li, ol li ul li, ol li ol li { color: blue; }
ul li ul li ul li, ul li ul li ol li,
ul li ol li ul li, ul li ol li ol li,
ol li ul li ul li, ol li ul li ol li,
ol li ol li ul li, ol li ol li ol li { color: green; }
/* 调整嵌套列表的缩进 */
ul ul, ol ol, ul ol, ol ul {
  padding-left: 2px; /* 子列表的缩进小于父列表 */
}
/* 为表格设置边框样式 */
/* 设置表格的边框样式 */
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed; /* 让列宽更均匀 */
}
/* 设置第一列的宽度 */
table th:first-child, table td:first-child {
  width: 30%; /* 例如设置第一列宽度为表格宽度的50% */
  font-size: 0.9em;
  text-align: center;
  vertical-align: middle;
}
/* 设置第二列的宽度 */
table th:nth-child(2), table td:nth-child(2) {
  font-size:0.8em;
  width:70%;
  text-align: left;/* 例如设置第二列宽度为表格宽度的50% */
}
table th {
  font-size: 1.3em!important;
  text-align: center !important; /* 文本居中 */
  font-weight: bold !important; /* 文本加粗 */
  border: 2px solid black; /* 边框加粗 */
  padding: 5px; /* 添加一些内边距 */
  color: #1e6bb8 !important; /* 设置文字颜色 */
  background-color: rgba(21,100,178,0.1);
}
table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

```

### 使用方式

1. 打开 zotero 软件，进入编辑 - 设置 - 高级界面
2. 打开**编辑器**
3. 搜索 CSS，在 extensions.zotero.note.css 项直接填入 CSS 代码即可
4. ![Zotero笔记样式美化](https://cdn.pkmer.cn/images/202311302329813.png!pkmer)

## 部分笔记元素样式自定义

修改代码后替换掉原代码即可。

### 整体布局

```CSS
.output_wrapper/*此属性为全局*/
{
  font-size: 16px;
  color: #3e3e3e;
  line-height: 1.6;
  word-spacing:0px;
  letter-spacing:0px;
  font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;  
}

```

> [!warning] 注意
> 不建议修改

### 标题样式

```CSS
/*标题的样式设置，可自定义设置多级标题，添加在代码后即可 */
h1 {
/*字体大小，建议修改 */
  font-size:1.2em;
/*排版设置，不建议修改 */
  margin-bottom: 2em;
  margin-right: 5px;
  padding: 8px 15px;
  letter-spacing: 2px;
/*标题左竖线颜色，可自定义修改，尽量设为稍深色，推荐RGBA设置，通过调整a值透明度来调整表现效果*/
  border-left: 10px solid rgba(240,19,19,0.5); /* 可以根据需要调整边框颜色 */
/*标题边框颜色及其它，可自定义修改，尽量设为淡色 */
  background:rgba(240,19,19, 0.25);
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 文字阴影，增强对比 */
  box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.5); /* 盒子阴影，可根据需要调整 */
  text-align: center;

}

```

### 文本加粗

```CSS
/*可自定义文本颜色，文本背景颜色，及文本的背景涂涂色的样式*/
b, strong {
  font-size: 1em;
  color: rgba(255,69,0,1); /* 橙红色 */;
  background-color: #f0f0f0; /* 淡灰色背景 */
  padding: 2px 4px; /* 加点内边距让背景更明显 */
  border-radius: 2px; /* 可选：为背景添加圆角 */
}
```

### 表格修改

```CSS
/*目的是美化zoterogpt插件生成的论文摘要表格 */
/*设置分布是固定，两列占比固定 */
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed; /* 让列宽更均匀 */
}
/* 设置第一列的宽度，和第二列相加是一百。第二列字多，故字体大小调小 */
table th:nth-child(2), table td:nth-child(2) {
  font-size:0.8em;
  width:70%;
  text-align: left;/* 例如设置第二列宽度为表格宽度的50% */
}
/*表头单元格修改，颜色淡一些 */
table th {
  font-size: 1.3em!important;
  text-align: center !important; /* 文本居中 */
  font-weight: bold !important; /* 文本加粗 */
  border: 2px solid black; /* 边框加粗 */
  padding: 8px; /* 添加一些内边距 */
  color: #1e6bb8 !important; /* 设置文字颜色 */
  background-color: rgba(21,100,178,0.1);
}
/*设置奇偶行颜色设置，淡灰色比较合理 */
table tr:nth-child(2n) {
  background-color: #F8F8F8;
}
```

### 列表修改（不建议）

修改比较复杂，需要自行学习 CSS 相关知识。

## 其它注意事项

笔者也是刚刚进入 CSS 学习，使用查字典的方式完成了这个代码。中间存在着很多的不优雅的地方和简陋，希望大家谅解。

之后如果有更好的模板我也会继续更新分享。
