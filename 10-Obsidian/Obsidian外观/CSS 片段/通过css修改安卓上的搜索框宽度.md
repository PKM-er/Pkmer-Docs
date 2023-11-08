---
uid: 20231019163314
title: 通过 css 修改安卓上的搜索框宽度
tags: [css, 搜索, 增强, 交互]
description: 通过css修改安卓上的搜索框宽度，以方便使用前一个后一个按钮
author: calmwaves
type: other
draft: false
editable: false
modified: 20231108172028
---

# 通过 css 修改安卓上的搜索框宽度

## 效果展示

安卓上默认主题下，单篇文章搜索的输入框太宽，导致无法使用【前一个】【后一个】按钮

![通过css修改安卓上的搜索框宽度](https://cdn.pkmer.cn/images/202310202218837.jpg!pkmer)

通过 css 代码修改宽度，将【前一个】【后一个】按钮露出来

![通过css修改安卓上的搜索框宽度](https://cdn.pkmer.cn/images/202310202218570.jpg!pkmer)

## 代码

```css
/*！文档内搜索框宽度调整 */
body .document-search-input{
width:180px!important;
}
```