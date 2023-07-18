---
uid: 20230717003729
title: Obsidain 美化 - 自定义文件夹图标
tags: [Obsidian, css, 美化, 图标]
description: Obsidain 文件图标美化 - 自定义文件夹图标
author: Nathaniel
type: basic
draft: false
editable: false
modified: 20230718011101
---

![[image-20230718005419020.png]]

封面图

# Obsidain美化-自定义文件夹图标

方案

- 使用 `svg `

 > [!NOTE]
 > 下面的步骤针对==所有的文件夹和文件==图标修改。有其他需求（修改指定文件夹的图标）则需要自行分析得到文件夹元素的选择器。

## 快速设置

 > [!warning]
 > 为了避免对默认（主题） 样式造成侵入性，建议使用 `css snippets` 进行样式的设置。比如在 `.obsidian/snippets` 文件夹下创建一个 `.css` 文件，假设名为 `custom-folder-icon.css`。

**步骤 1，创建 `custom-folder-icon.css ` 并在 文件中粘贴如下的代码**

![](https://cdn.pkmer.cn/images/c084213f7c3b476781922690d084317d.png!pkmer)

```css
/* 设置文件夹图标 */
.nav-folder-children .nav-folder-title-content::before {
	content: '';
	background-image: url("data:image/svg+xml,%3Csvg width='64px' height='64px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Efolder_type_macos_opened%3C/title%3E%3Cpath d='M27.9,6H18.2l-2,4H5V27H30V6ZM28,24H7V12H28Zm.1-14H20.3l1-2H28Z' style='fill:%237bbedb'/%3E%3Cpolygon points='25.9 14 0.3 14 4.1 27 29.7 27 25.9 14' style='fill:%237bbedb'/%3E%3Cpath d='M22.258,25.522a15.725,15.725,0,0,1-7.5-1.516l.473-.75a15.264,15.264,0,0,0,7.027,1.3c0,.082.1-1.533.245-2.413H19.1a21.649,21.649,0,0,1,3.033-9.408h-10.2V28.261H22.649A22.38,22.38,0,0,1,22.258,25.522Z' style='fill:%23c6e9fa;fill-rule:evenodd'/%3E%3Cpath d='M23.285,24.5a10.7,10.7,0,0,0,4.484-1.3l.587.75a12.775,12.775,0,0,1-5.071,1.517,13.6,13.6,0,0,0,.441,2.8h7.337V12.739h-7.81a19.337,19.337,0,0,0-2.968,8.381h3.506a15.409,15.409,0,0,0-.506,3.375Z' style='fill:%2300adee;fill-rule:evenodd'/%3E%3Cpolygon points='16.568 15.087 17.563 15.087 17.563 17.386 16.568 17.386 16.568 15.087 16.568 15.087' style='fill:%2300adee;fill-rule:evenodd'/%3E%3Cpolygon points='24.851 15.087 25.845 15.087 25.845 17.386 24.851 17.386 24.851 15.087 24.851 15.087' style='fill:%23231f20;fill-rule:evenodd'/%3E%3Cpath d='M23.285,24.5a10.7,10.7,0,0,0,4.484-1.3l.587.75a12.775,12.775,0,0,1-5.071,1.517,12.27,12.27,0,0,0,1.354,5.087L23.791,31c-1.549-2.445-1.826-5.739-1.288-8.853H19.1A21.485,21.485,0,0,1,24.084,10l.734.636A19.1,19.1,0,0,0,20.285,21.12h3.506a15.409,15.409,0,0,0-.506,3.375Z' style='fill:%23231f20;fill-rule:evenodd'/%3E%3Cpath d='M22.258,24.56v.962a15.725,15.725,0,0,1-7.5-1.516l.473-.75a15.264,15.264,0,0,0,7.027,1.3Z' style='fill:%2300adee;fill-rule:evenodd'/%3E%3C/svg%3E");
	background-size: 20px 20px;
	transform: translate(0, 4px);
	background-repeat: no-repeat;
	display: inline-block;
	height: 20px;
	width: 20px;
	margin-right: 4px;
}
/* 设置 文件图标 */
.nav-folder-children .nav-file-title-content:first-child::before {
	content: '';
	background-image: url("data:image/svg+xml,%3Csvg width='64px' height='64px' viewBox='0 0 24 24'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 8C0 5.79086 1.79086 4 4 4H20C22.2091 4 24 5.79086 24 8V16C24 18.2091 22.2091 20 20 20H4C1.79086 20 0 18.2091 0 16V8ZM4 6C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6H4ZM5.68377 8.05132C6.09211 7.9152 6.54174 8.05566 6.8 8.4L9 11.3333L11.2 8.4C11.4583 8.05566 11.9079 7.9152 12.3162 8.05132C12.7246 8.18743 13 8.56957 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V12L9.8 13.6C9.61115 13.8518 9.31476 14 9 14C8.68524 14 8.38885 13.8518 8.2 13.6L7 12V15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15V9C5 8.56957 5.27543 8.18743 5.68377 8.05132ZM18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V12.5858L15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929C13.9024 12.6834 13.9024 13.3166 14.2929 13.7071L16.2929 15.7071C16.6834 16.0976 17.3166 16.0976 17.7071 15.7071L19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929C19.3166 11.9024 18.6834 11.9024 18.2929 12.2929L18 12.5858V9Z' fill='%23000000'/%3E%3C/svg%3E");
	background-size: 20px 20px;
	transform: translate(0, 4px);
	background-repeat: no-repeat;
	display: inline-block;
	height: 20px;
	width: 20px;
	margin-right: 4px;
}

```

 > [!info]
 > 经过测试，控制宽度 `width ` 和高度 `height ` 在 `64px` 效果比较好
 > ![](https://cdn.pkmer.cn/images/bb35df882747e2783ca761f4f5c01263.png!pkmer)

**步骤 2，修改图标使用自定义的图标代码**

1,准备你喜欢的图标的 svg 格式代码

形如 `<svg>...</svg>`

可以从这个 [网站](https://www.svgrepo.com/svg/373286/macos-opened) 找到一个喜欢的图标（或者你有其他途径也行）。

然后点击这个按钮 ![](https://cdn.pkmer.cn/images/83cd4e26be36a8fdd2e03a84b57a0fbb.png!pkmer)

![](https://cdn.pkmer.cn/images/ae07864f5d4a698b8b2fe5c8c848dc62.png!pkmer)

复制 SVG 代码

![](https://cdn.pkmer.cn/images/49e8d1bf9647e6abd7bf9bc00cf95e8f.png!pkmer)

2,使用这个 [网站](https://yoksel.github.io/url-encoder) 将其转为 base64 字符串

![](https://cdn.pkmer.cn/images/447d995b947476cb5a205e5c661c48b6.png!pkmer)

得到格式为 `data:image/svg+xml,%3Csvg width='80px' height='80px' .......` 的字符串。

3,将这个字符串作为 `background-image: url(<base64字符串>)` 的内容

**步骤 3，在 Obsidian 中启用 `custom-folder-icon.css ` 文件对应的样式选项**

![](https://cdn.pkmer.cn/images/99972021cc142ce9b2ad5d93f41258d2.png!pkmer)

![](https://cdn.pkmer.cn/images/228bb3df69496f9bf33f5afbdb98d9cc.png!pkmer)

**步骤 4，在 Obsidian 主页观察文件夹图标变化**

预览效果：

![](https://cdn.pkmer.cn/images/090679bca9169262bf7f114067dd3116.png!pkmer)

也可以按照设置文件夹的方式设置文件（参照 css 代码中的内容）

整体的效果如下

![](https://cdn.pkmer.cn/images/3c40236c1ece0499a453cf567448d8fd.png!pkmer)

对比没设置图标的效果

![](https://cdn.pkmer.cn/images/817fd82519dd8e0948e3046b9806d1cd.png!pkmer)

 > [!NOTE]
 > 如果熟悉 css ，则可以进一步美化

## 指定文件后缀文件图标

上述的设置是统一对所有文件夹和文件进行图标设置。如果是文件夹还好说，对于文件，有不同的类型，如果都设置为 `markdown` 图标则区分不开。

可以单独对指定类型（文件后缀）的文件设置图标。比如为 `.md` 后缀文件设置 `markkdown` 图标，给 `.png`,`.jpg` 等图标文件设置图片图标。

如果也想快速设置，则需要简单几步

**步骤 1，知道要指定自定义图标文件的后缀信息**

以 windows 为例，所有文件后缀信息可以从 [网页](https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01) 中查找

**步骤 2，准备图标 svg 转为 base64 的代码（参考上面 [[#快速设置]]）**

**步骤 3，添加 `css snippet` 中的代码**

只需要修改两处

1）文件后缀

将 `.md` 修改为你要自定义图标的文件的文件后缀。如修改为 `.png` 表示指定为 `.png` 文件设置图标

```
div[data-path$='.md']
```

2）图标

同样替换 `<图标svg转为base64的代码>` 为自定义的图标代码

```
background-image: url("<图标svg转为base64的代码>")
```

下面给出了设置 `图片`, `gif`,`markdown` 文件类型图标的样式代码，可以参考修改

```css
/* 设置 markdown文件图标 */
.nav-folder-children
	.tree-item.nav-file
	div[data-path$='.md']
	.nav-file-title-content::before {
	content: '';
	background-image: url("data:image/svg+xml,%3Csvg width='64px' height='64px' viewBox='0 0 24 24'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 8C0 5.79086 1.79086 4 4 4H20C22.2091 4 24 5.79086 24 8V16C24 18.2091 22.2091 20 20 20H4C1.79086 20 0 18.2091 0 16V8ZM4 6C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6H4ZM5.68377 8.05132C6.09211 7.9152 6.54174 8.05566 6.8 8.4L9 11.3333L11.2 8.4C11.4583 8.05566 11.9079 7.9152 12.3162 8.05132C12.7246 8.18743 13 8.56957 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V12L9.8 13.6C9.61115 13.8518 9.31476 14 9 14C8.68524 14 8.38885 13.8518 8.2 13.6L7 12V15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15V9C5 8.56957 5.27543 8.18743 5.68377 8.05132ZM18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V12.5858L15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929C13.9024 12.6834 13.9024 13.3166 14.2929 13.7071L16.2929 15.7071C16.6834 16.0976 17.3166 16.0976 17.7071 15.7071L19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929C19.3166 11.9024 18.6834 11.9024 18.2929 12.2929L18 12.5858V9Z' fill='%23000000'/%3E%3C/svg%3E");
	background-size: 20px 20px;
	transform: translate(0, 4px);
	background-repeat: no-repeat;
	display: inline-block;
	height: 20px;
	width: 20px;
	margin-right: 4px;
}
/* 设置 图片文件图标 */
.nav-folder-children
	.tree-item.nav-file
	div[data-path$='.png']
	.nav-file-title-content::before,
.nav-folder-children
	.tree-item.nav-file
	div[data-path$='.jpg']
	.nav-file-title-content::before,
.nav-folder-children
	.tree-item.nav-file
	div[data-path$='.jpeg']
	.nav-file-title-content::before {
	content: '';
	background-image: url("data:image/svg+xml,%3Csvg fill='%23000000' viewBox='0 0 24 24' id='image' data-name='Flat Line' xmlns='http://www.w3.org/2000/svg' class='icon flat-line'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath id='secondary' d='M21,5V19a1,1,0,0,1-.29.71L14,13l-3,3L9,14,3.29,19.71A1,1,0,0,1,3,19V5A1,1,0,0,1,4,4H20A1,1,0,0,1,21,5Z' style='fill: %232ca9bc; stroke-width: 2;'%3E%3C/path%3E%3Cpolyline id='primary' points='20.71 19.71 14 13 11 16 9 14 3.29 19.71' style='fill: none; stroke: %23000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;'%3E%3C/polyline%3E%3Cline id='primary-upstroke' x1='10.95' y1='9' x2='11.05' y2='9' style='fill: none; stroke: %23000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.5;'%3E%3C/line%3E%3Crect id='primary-2' data-name='primary' x='3' y='4' width='18' height='16' rx='1' style='fill: none; stroke: %23000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E");
	background-size: 20px 20px;
	transform: translate(0, 4px);
	background-repeat: no-repeat;
	display: inline-block;
	height: 20px;
	width: 20px;
	margin-right: 4px;
}
/* 设置 gif 文件后缀 */
.nav-folder-children
	.tree-item.nav-file
	div[data-path$='.gif']
	.nav-file-title-content::before {
	content: '';
	background-image: url("data:image/svg+xml,%3Csvg height='200px' width='200px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 511.999 511.999' xml:space='preserve' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cg%3E%3Cpath style='fill:%23415E72;' d='M230.635,504.974c-12.404,4.378-25.433,6.714-38.589,6.93c-15.301,0.888-30.314-4.45-41.614-14.805 c-9.747-10.131-14.949-23.792-14.405-37.837c-0.36-21.992,8.875-43.055,25.289-57.7c15.205-12.396,34.332-18.966,53.947-18.542 c10.908-0.416,21.783,1.569,31.843,5.81l-6.746,18.358c-8.427-3.713-17.582-5.506-26.785-5.242 c-12.844-0.24-25.345,4.145-35.212,12.364c-12.084,11.108-18.838,26.857-18.542,43.271c0,22.664,12.364,35.78,35.964,35.78 c5.498,0.064,10.964-0.888,16.118-2.817l5.994-31.651h-22.288l3.553-17.606h43.463L230.635,504.974z'%3E%3C/path%3E%3Cpath style='fill:%23415E72;' d='M252.579,510.575l17.238-91.231h21.912l-17.422,91.231L252.579,510.575L252.579,510.575z M273.386,394.624c-0.184-7.154,5.458-13.1,12.612-13.293c0.168-0.008,0.336-0.008,0.504,0c6.218-0.2,11.42,4.674,11.62,10.892 c0.008,0.304,0.008,0.608-0.008,0.912c0.064,7.178-5.698,13.052-12.876,13.117c-0.208,0-0.416,0-0.616-0.008 c-5.962,0.264-11.012-4.361-11.276-10.332c-0.016-0.432-0.008-0.864,0.024-1.296L273.386,394.624z'%3E%3C/path%3E%3Cpath style='fill:%23415E72;' d='M301.859,510.575l14.053-74.37h-11.804l3.201-16.854h11.804l0.904-4.69 c1.473-11.66,6.826-22.48,15.205-30.723c6.746-5.57,15.261-8.563,24.008-8.427c4.618-0.232,9.235,0.592,13.493,2.401l-4.121,17.23 c-2.809-1.064-5.802-1.569-8.803-1.497c-10.3,0-16.11,9.555-18.174,21.359l-0.8,4.337h18.918l-3.201,16.854h-18.918l-14.037,74.378 H301.859z'%3E%3C/path%3E%3C/g%3E%3Ccircle style='fill:%2325B6D2;' cx='147.406' cy='207.447' r='99.274'%3E%3C/circle%3E%3Ccircle style='fill:%23E04F5F;' cx='255.996' cy='153.333' r='99.274'%3E%3C/circle%3E%3Cpath style='fill:%23FFFFFF;' d='M364.593,194.555c-52.618,0-95.273-42.655-95.273-95.273s42.655-95.273,95.273-95.273 s95.273,42.655,95.273,95.273l0,0C459.81,151.876,417.187,194.491,364.593,194.555z'%3E%3C/path%3E%3Cpath style='fill:%23AAC1CE;' d='M364.585,8.003c50.409,0,91.271,40.862,91.271,91.271s-40.862,91.271-91.271,91.271 s-91.271-40.862-91.271-91.271l0,0C273.378,48.889,314.208,8.059,364.585,8.003 M364.585,0 c-54.827,0.008-99.274,44.455-99.266,99.282s44.455,99.274,99.282,99.266s99.266-44.447,99.266-99.274 C463.867,44.447,419.428,0,364.585,0C364.593,0,364.593,0,364.585,0z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
	background-size: 20px 20px;
	transform: translate(0, 4px);
	background-repeat: no-repeat;
	display: inline-block;
	height: 20px;
	width: 20px;
	margin-right: 4px;
}
```

效果如下
![[image-20230718011446054.png]]



## 资源

- **URL-encoder for SVG** ➞ 用于将 svg 标签转为编码字符串 ➞ <https://yoksel.github.io/url-encoder/>
- **SVG Repo** ➞ 免费 svg 矢量图标库 ➞ <https://www.svgrepo.com/svg/373286/macos-opened>
- **HTML Playground** ➞ 在线 HTML playground ➞ <https://playcode.io/html5>

（完）