---
uid: 20230602120857
title: 回归原始的 Obsidian 图标
tags: [Obsidian, LOGO, css, 图标]
description: Obsidian图标还原，还原旧版图标
author: cuman
type: other
draft: false
editable: false
modified: 20230603233236
---

# 回归原始的 Obsidian 图标

## 概述

![88.gif|523](https://cdn.pkmer.cn/images/202306021341855.gif!pkmer)

Obsidian 根据单词的字面意思 " 黑曜石，是一种常见的非晶质宝石、火山晶体 "，所以当打开 Obsidian 软件 自然会跟宝石联系到一起，原始的 Obsidian 的图标看起来就是宝石，之前很少有关于图标的讨论。当 Obsidian 1.3.5 启用了全新的图标 [[Obsidian全新LOGO更换]] 后，

一时间群里都是关于图标的讨论，因为跟原来的图标设计相比风格变化挺大的，于是就有了回归原始图标的想法。

Obsidian 的图标主要存在于软件内和应用程序中，其中软件内的 logo 可以通过 css 解决。应用程序的图标需要用修改器修改原始文件，本文暂不涉及。

软件内出现 logo 的地方一个是标题栏一个是 canvas 导出水印中。

## 标题栏

`设置--外观--窗口边框样式` 中如果选择 "Obsidian 风格 "

![image.png|748](https://cdn.pkmer.cn/images/202306021249720.png!pkmer)

就会出现新 logo

![55.gif|496](https://cdn.pkmer.cn/images/202306021305337.gif!pkmer)

使用下面片段即可还原为原始图标

![77.gif|496](https://cdn.pkmer.cn/images/202306021328156.gif!pkmer)

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/

.titlebar-button.mod-logo  svg
{
 display:none;
}
.titlebar-button.mod-logo:not(:hover)::before
{
 content:' ';
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');
 display: inline-block;
 width: 18px;
 height: 18px;
}
body.theme-dark .titlebar-button.mod-logo:not(:hover)::before
{

 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');

}
.titlebar-button.mod-logo:hover
{
	background:transparent;
}
.titlebar-button.mod-logo:hover::before
{
 content:' ';
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="18" height="18" class="logo-full"><defs><linearGradient id="a" x1="82.85" y1="30.41" x2="51.26" y2="105.9" gradientTransform="matrix(1, 0, 0, -1, -22.41, 110.97)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="%236c56cc"></stop><stop offset="1" stop-color="%239785e5"></stop></linearGradient></defs><polygon points="62.61,0 30.91,17.52 18,45.45 37.57,90.47 65.35,100 70.44,89.8 81,26.39 62.61,0" fill="%2334208c"></polygon><polygon points="81,26.39 61.44,14.41 34.43,35.7 65.35,100 70.44,89.8 81,26.39" fill="url(%23a)"></polygon><polygon points="81,26.39 81,26.39 62.61,0 61.44,14.41 81,26.39" fill="%23af9ff4"></polygon><polygon points="61.44,14.41 62.61,0 30.91,17.52 34.43,35.7 61.44,14.41" fill="%234a37a0"></polygon><polygon points="34.43,35.7 37.57,90.47 65.35,100 34.43,35.7" fill="%234a37a0"></polygon></svg>');display: inline-block;
 width: 18px;
 height: 18px;
}


```

## Canvas 水印图标

如果开启白板导出水印功能导出的白板是带有水印的。

![image.png|541](https://cdn.pkmer.cn/images/202306021332769.png!pkmer)

新版本 ob 导出的白板如下图所示

![canvas白板介绍_middle2.png|586](https://cdn.pkmer.cn/images/202306021335333.png!pkmer)

通过 css 修改后效果如下

![canvas白板介绍_middle.png|595](https://cdn.pkmer.cn/images/202306021335154.png!pkmer)

css 代码

```css
 /*
 * @Author: cumany cuman@qq.com
 * @Source: Pkmer.cn
*/

.canvas-watermark svg
{
  display:none;
}

.canvas-watermark::before
{
 content:' ';
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');
 display: inline-block;
 width: 24px;
 height: 24px;
}

body.theme-dark .canvas-watermark::before
{
 
 background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe astro-J75B3YUS"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z" class="astro-J75B3YUS"></path></svg>');
 
}

```

---

## Windows 桌面图标如何更换

如果你使用了新版的安装包，那么会发现，桌面快捷方式，工具栏等等都会变成新版图标，如果你仍然喜欢原来经典图标带来的感受，那么可以参考下列方法：

**更改快捷方式/桌面图标**

1. 右键单击桌面快捷方式/应用程序的桌面图标，然后从弹出菜单中选择 **“属性** ”。
2. 在“**快捷方式**”选项卡上，单击“**更改图标**”。
3. 选择所需的图标，或浏览到其他位置以选择该图标。 选择图标后，单击“ **打开**”。 单击“ **确定”** 应用。

新图标将显示在“ **结果** ”窗格中。 新图标也会显示在菜单和客户端桌面通知区域中。

>[!Tip] 提示
>- 这个方法只能替换部分内容，可能无法替换全部程序内部图标

   > [!info] 附件：旧版 ICO 图标下载
>  [旧版 ICO 图标免费下载](https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1685695479649/IconGroup103.ico)

## Windows 更改应用程序图标

继续上面文章，如果是 windows 系统，想彻底更换 Obsidian 在任务栏上的图标，直接更改应用程序即可。

1. 下载 ResHacker
	链接：<http://www.angusj.com/resourcehacker/resource_hacker.zip>
2. 打开解压包中的 ResourceHacker.exe 应用程序，运行。
3. 选择工具栏中的文件 点击打开选项
	![image.png](https://cdn.pkmer.cn/images/202306021629542.png!pkmer)
4. 浏览到 Obsidian.exe 文件。Obsidian 默认安装路径在 `C:\Users\XX用户\AppData\Local\Obsidian\Obsidian.exe`
	![image.png](https://cdn.pkmer.cn/images/202306021631295.png!pkmer)
5. 找到左侧图标，右键进行更换
   ![image.png](https://cdn.pkmer.cn/images/202306021635721.png!pkmer)
6. 找到替换的图标目录路径，选中之后点击打开【文后附旧版图标下载】
   ![image.png](https://cdn.pkmer.cn/images/202306021637055.png!pkmer)
7. 选择 replace 替换
   ![image.png](https://cdn.pkmer.cn/images/202306021637045.png!pkmer)
8. 会发现右侧已经更换成了旧图标，这时候点击保存
   ![image.png](https://cdn.pkmer.cn/images/202306021638363.png!pkmer)

完成后，记得重启计算机，你会发现任务栏，快捷方式，程序图标全都换好了。

   > [!info] 附件：旧版 ICO 图标下载
>  [旧版 ICO 图标免费下载](https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1685695479649/IconGroup103.ico)