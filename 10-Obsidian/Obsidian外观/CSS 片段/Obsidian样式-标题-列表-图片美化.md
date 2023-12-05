---
uid: 20231205195020
title: Obsidian 样式：标题&列表&图片美化 CSS
tags: ['Obsidian', '美化', 'css']
description: Obsidian 样式：标题&列表&图片美化 CSS
author: wang
type: other
draft: false
editable: false
modified: 20231205201601
---

# Obsidian 样式：标题&列表&图片美化 CSS

## 示意图

![a7e31a027262284eabb722fd8dbb3cb.png](https://cdn.pkmer.cn/images/a7e31a027262284eabb722fd8dbb3cb.png!pkmer)

![901ff817838cf2628fee0acaedf2bfa.png](https://cdn.pkmer.cn/images/901ff817838cf2628fee0acaedf2bfa.png!pkmer)

## 美化细节

- 图片美化
	- 添加边框
	- 添加原角
	- 设置最大宽度
- 列表美化
	- 缩小列表间的缩进，更加紧凑（**也可以自己修改**
	- 增加绿色左侧框
	- 在一级标题之间添加分割线
	- 二级以下标题字体减小
- 标题美化
	- 居中
	- 色块背景
	- 大小设置等，可自行添加后续标题（只设计了两个）
- 加粗和引用美化
	- 设置粗体的颜色和背景色
	- 设计引用的背景

## 代码

```CSS
/* 对引用进行设计 */
blockquote {
    border-left: 4px solid #4caf50!important; /* 鲜明的绿色边界 */
    background-color: #e8f5e9!important; /* 浅绿色背景 */
    color: #2e7d32!important; /* 引用文本的深绿色 */
    padding: 13px; /* 内边距 */
    margin: 16px 0; /* 外边距 */
 }
 
 /* 对粗体文字设置橙色文字和淡色背景*/
 b, strong {
     color: rgba(255,69,0,1); /* 橙红色 */;
 background-color: #f0f0f0; /* 淡灰色背景 */
     padding: 2px 4px; /* 加点内边距让背景更明显 */
     border-radius: 2px; /* 可选：为背景添加圆角 */
 }
 
/* 标题1设计，左侧边，居中，红色背景*/
 h1 {
  color: black!important;
   margin-bottom: 2em;
   margin-right: 5px;
   padding: 8px 15px;
   letter-spacing: 2px;
    /* 保持文字颜色为纯白色 */
   border-left: 10px solid rgba(240,19,19,0.5); /* 可以根据需要调整边框颜色 */
   background:rgba(240,19,19, 0.25);
   border-radius: 5px;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 文字阴影，增强对比 */
   box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.5); /* 盒子阴影，可根据需要调整 */
   text-align: center;
 }
 
/* 标题2设计，左侧边，居中，绿色背景*/
 h2 {
  color: black!important;
   margin-bottom: 2em;
   margin-right: 5px;
   padding: 8px 15px;
   letter-spacing: 2px;
    /* 保持文字颜色为纯白色 */
   border-left: 10px solid rgba(102, 204, 153,0.5); /* 可以根据需要调整边框颜色 */
    background:rgba(102, 204, 153, 0.25);
   border-radius: 5px;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 文字阴影，增强对比 */
   box-shadow: 1px 1px 2px rgba(51, 51, 51, 0.5); /* 盒子阴影，可根据需要调整 */
   text-align: center;
 }
 
  /* 图片设计，左侧边，居中，绿色背景*/
img{
  max-width:400px !important;
  width: auto; /* 对于其他图片保持原始宽度 */
  height: auto; /* 保持图片的高宽比 */
  border: 3px solid #a8d08d; /* 边框颜色和宽度 */
  padding: 0px; /* 边框内的填充 */
  background-color: white; /* 边框内部的背景颜色 */
  display: block;
  margin: 16px auto; /* 图片上下的间距，并在页面中居中显示 */
  box-shadow: 0px 0px 8px rgba(0,0,0,0.2); /* 阴影效果 */
  border-radius: 15px; /* 边框圆角 */
}

  /* 总体的边框设计，有序和无序的样式*/  
ol {
  list-style-type: decimal;
  border-left: 5px solid #a8d08d; /* 设置边框，这里使用浅绿色 */
  border-radius: 10px; /* 圆角边框 */
  text-indent: -5px;
}
ul {
  border-radius: 10px; /* 圆角边框 */
  border-left: 5px solid #a8d08d; /* 设置边框，这里使用浅绿色 */
}
/* 去除第二级有序列表项的底部边框 */
ul > li >ul > li ,
ol > li >ol > li,
ul > li >ul > li li,
ol > li >ul > li li
{
border-bottom: none;
border-left: none;
padding-bottom: 0px;
margin-left: 0px;
}
/* 先加上所有的分割线*/
ol > li:not(:last-child):not(li ol > li) {
border-bottom: 3px solid #ccc;
padding-bottom: 10px;
margin-bottom: 5px;
padding-top: 10px;
}
/*先加上所有的分割线 */
ul > li:not(:last-child):not(li ul > li) {
border-bottom: 3px solid #ccc;
padding-bottom: 20px;
margin-bottom: 5px;
margin-top: 5px;
padding-top: 10px;
}
/*为第二级及以下的列表项去除边框 */
ul li ul, ol li ol, 
ul li ol, ol li ul ,
ul li ul li ul,ul ul ul ul ul,
ol ol ol,ol ol ol ol{
border: none;
padding-left: 0;
margin-left: 0;
font-size: 17px;
}
```

## 使用方法

- 见链接:[Obsidian 的 CSS 代码片段]( https://pkmer.cn/show/20230329145845 )