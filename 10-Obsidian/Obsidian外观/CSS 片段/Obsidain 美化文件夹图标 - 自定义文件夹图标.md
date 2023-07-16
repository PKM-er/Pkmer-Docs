---
uid: 20230717003729
title: Obsidain美化文件夹图标-自定义文件夹图标
tags: [Obsidian, css, 美化, 图标]
description: Obsidain 文件图标美化 - 自定义文件夹图标
author: Nathaniel
type: other
draft: false
editable: false
modified: 20230717005558
---

# Obsidain 美化文件夹图标 - 自定义文件夹图标

方案

- 使用 `svg `

 > [!NOTE]
 > 下面的步骤针对<span style="background:#affad1">所有的文件夹和文件</span>图标修改。有其他需求（修改指定文件夹的图标）则需要自行分析得到文件夹元素的选择器。

## 快速设置

 > [!warning]
 > 为了避免对默认（主题） 样式造成侵入性，建议使用 `css snippets` 进行样式的设置。比如在 `.obsidian/snippets` 文件夹下创建一个 `.css` 文件，假设名为 `custom-folder-icon.css`。

**步骤 1，创建 `custom-folder-icon.css ` 并在 文件中粘贴如下的代码**

![](c084213f7c3b476781922690d084317d.png)

```css
/* 设置文件夹图标 */
.nav-folder-children .nav-folder-title-content:: before {
	Content: '';
	background-image: url ("data: image/svg+xml,%3 Csvg width='64 px' height='64 px' viewBox='0 0 32 32' xmlns=' <http://www.w3.org/2000/svg> '%3 E%3 Ctitle%3 Efolder_type_macos_opened%3 C/title%3 E%3 Cpath d='M 27.9,6 H 18.2 l-2,4 H 5 V 27 H 30 V 6 ZM 28,24 H 7 V 12 H 28 Zm. 1-14 H 20.3 l 1-2 H 28 Z' style='fill:%237 bbedb'/%3 E%3 Cpolygon points='25.9 14 0.3 14 4.1 27 29.7 27 25.9 14' style='fill:%237 bbedb'/%3 E%3 Cpath d='M 22.258,25.522 a 15.725,15.725,0,0,1-7.5-1.516 l. 473-. 75 a 15.264,15.264,0,0,0,7.027,1.3 c 0,. 082.1-1.533.245-2.413 H 19.1 a 21.649,21.649,0,0,1,3.033-9.408 h-10.2 V 28.261 H 22.649 A 22.38,22.38,0,0,1,22.258,25.522 Z' style='fill:%23 c 6 e 9 fa; fill-rule: evenodd'/%3 E%3 Cpath d='M 23.285,24.5 a 10.7,10.7,0,0,0,4.484-1.3 l. 587.75 a 12.775,12.775,0,0,1-5.071,1.517,13.6,13.6,0,0,0,. 441,2.8 h 7.337 V 12.739 h-7.81 a 19.337,19.337,0,0,0-2.968,8.381 h 3.506 a 15.409,15.409,0,0,0-. 506,3.375 Z' style='fill:%2300 adee; fill-rule: evenodd'/%3 E%3 Cpolygon points='16.568 15.087 17.563 15.087 17.563 17.386 16.568 17.386 16.568 15.087 16.568 15.087' style='fill:%2300 adee; fill-rule: evenodd'/%3 E%3 Cpolygon points='24.851 15.087 25.845 15.087 25.845 17.386 24.851 17.386 24.851 15.087 24.851 15.087' style='fill:%23231 f 20; fill-rule: evenodd'/%3 E%3 Cpath d='M 23.285,24.5 a 10.7,10.7,0,0,0,4.484-1.3 l. 587.75 a 12.775,12.775,0,0,1-5.071,1.517,12.27,12.27,0,0,0,1.354,5.087 L 23.791,31 c-1.549-2.445-1.826-5.739-1.288-8.853 H 19.1 A 21.485,21.485,0,0,1,24.084,10 l. 734.636 A 19.1,19.1,0,0,0,20.285,21.12 h 3.506 a 15.409,15.409,0,0,0-. 506,3.375 Z' style='fill:%23231 f 20; fill-rule: evenodd'/%3 E%3 Cpath d='M 22.258,24.56 v. 962 a 15.725,15.725,0,0,1-7.5-1.516 l. 473-. 75 a 15.264,15.264,0,0,0,7.027,1.3 Z' style='fill:%2300 adee; fill-rule: evenodd'/%3 E%3 C/svg%3 E");
	Background-size: 20 px 20 px;
	Transform: translate (0, 4 px);
	Background-repeat: no-repeat;
	Display: inline-block;
	Height: 20 px;
	Width: 20 px;
	Margin-right: 4 px;
}
/* 设置文件图标 */
.nav-folder-children .nav-file-title-content: first-child:: before {
	Content: '';
	background-image: url ("data: image/svg+xml,%3 Csvg width='64 px' height='64 px' viewBox='0 0 24 24' xmlns=' <http://www.w3.org/2000/svg> '%3 E%3 Cpath fill-rule='evenodd' clip-rule='evenodd' d='M 0 8 C 0 5.79086 1.79086 4 4 4 H 20 C 22.2091 4 24 5.79086 24 8 V 16 C 24 18.2091 22.2091 20 20 20 H 4 C 1.79086 20 0 18.2091 0 16 V 8 ZM 4 6 C 2.89543 6 2 6.89543 2 8 V 16 C 2 17.1046 2.89543 18 4 18 H 20 C 21.1046 18 22 17.1046 22 16 V 8 C 22 6.89543 21.1046 6 20 6 H 4 ZM 5.68377 8.05132 C 6.09211 7.9152 6.54174 8.05566 6.8 8.4 L 9 11.3333 L 11.2 8.4 C 11.4583 8.05566 11.9079 7.9152 12.3162 8.05132 C 12.7246 8.18743 13 8.56957 13 9 V 15 C 13 15.5523 12.5523 16 12 16 C 11.4477 16 11 15.5523 11 15 V 12 L 9.8 13.6 C 9.61115 13.8518 9.31476 14 9 14 C 8.68524 14 8.38885 13.8518 8.2 13.6 L 7 12 V 15 C 7 15.5523 6.55228 16 6 16 C 5.44772 16 5 15.5523 5 15 V 9 C 5 8.56957 5.27543 8.18743 5.68377 8.05132 ZM 18 9 C 18 8.44772 17.5523 8 17 8 C 16.4477 8 16 8.44772 16 9 V 12.5858 L 15.7071 12.2929 C 15.3166 11.9024 14.6834 11.9024 14.2929 12.2929 C 13.9024 12.6834 13.9024 13.3166 14.2929 13.7071 L 16.2929 15.7071 C 16.6834 16.0976 17.3166 16.0976 17.7071 15.7071 L 19.7071 13.7071 C 20.0976 13.3166 20.0976 12.6834 19.7071 12.2929 C 19.3166 11.9024 18.6834 11.9024 18.2929 12.2929 L 18 12.5858 V 9 Z' fill='%23000000'/%3 E%3 C/svg%3 E");
	Background-size: 20 px 20 px;
	Transform: translate (0, 4 px);
	Background-repeat: no-repeat;
	Display: inline-block;
	Height: 20 px;
	Width: 20 px;
	Margin-right: 4 px;
}
```

 > [!info]
 > 经过测试，控制宽度 `width ` 和高度 `height ` 在 `64px` 效果比较好
 > ![](bb35df882747e2783ca761f4f5c01263.png)

**步骤 2，修改图标使用自定义的图标代码**

1. 准备你喜欢的图标的 svg 格式代码
形如 `<svg>...</svg>`
可以从这个 [网站](https://www.svgrepo.com/svg/373286/macos-opened) 找到一个喜欢的图标（或者你有其他途径也行）。
然后点击这个按钮 ![](83cd4e26be36a8fdd2e03a84b57a0fbb.png)
![](ae07864f5d4a698b8b2fe5c8c848dc62.png)
复制 SVG 代码
![](49e8d1bf9647e6abd7bf9bc00cf95e8f.png)

2. 使用这个 [网站](https://yoksel.github.io/url-encoder) 将其转为 base64 字符串
![](447d995b947476cb5a205e5c661c48b6.png)

得到格式为 `data:image/svg+xml,%3Csvg width='80px' height='80px' .......` 的字符串。

3. 将这个字符串作为 `background-image: url(<base64字符串>)` 的内容

**步骤 3，在 Obsidian 中启用 `custom-folder-icon.css ` 文件对应的样式选项**

![](99972021cc142ce9b2ad5d93f41258d2.png)

![](228bb3df69496f9bf33f5afbdb98d9cc.png)

**步骤 4，在 Obsidian 主页观察文件夹图标变化**

预览效果：

![](090679bca9169262bf7f114067dd3116.png)

也可以按照设置文件夹的方式设置文件（参照 css 代码中的内容）

整体的效果如下

![](3c40236c1ece0499a453cf567448d8fd.png)

对比没设置图标的效果

![](817fd82519dd8e0948e3046b9806d1cd.png)

 > [!NOTE]
 > 如果熟悉 css ，则可以进一步美化

（完）

## 资源

- **URL-encoder for SVG** ➞ 用于将 svg 标签转为编码字符串 ➞ <https://yoksel.github.io/url-encoder/>
- **SVG Repo** ➞ 免费 svg 矢量图标库 ➞ <https://www.svgrepo.com/svg/373286/macos-opened>
- **HTML Playground** ➞ 在线 HTML playground ➞ <https://playcode.io/html5>
