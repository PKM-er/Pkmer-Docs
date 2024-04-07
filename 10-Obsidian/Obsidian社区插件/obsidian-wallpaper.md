---
uid: 20240406174439
title: Obsidian Wallpaper
tags: [obsidian, 背景图, 动态]
description: 为库添加动态背景图
author: Huajin
type: other
draft: false
editable: false
modified: 
---

# Obsidian Wallpaper

> [!Note] 插件名片
>
> - 插件名称：Obsidian Wallpaper
> - 插件版本：1.0.3
> - 插件作者：Huajin
> - 插件描述：为库添加动态背景图
> - 插件项目地址：[点我跳转](https://github.com/xhuajin/obsidian-wallpaper)

本插件不需要配置，只需要在设置中选择你想要用的壁纸即可。

![setting.png](https://cdn.pkmer.cn/images/setting.png!pkmer)

## 效果展示

### Sky and Sea

![skyandsea.png](https://cdn.pkmer.cn/images/skyandsea.png!pkmer)

![[skyandsea.mp4]]

### Stars1

![stars1.png](https://cdn.pkmer.cn/images/stars1.png!pkmer)

![[stars1.mp4]]

### Stars2

![stars2.png](https://cdn.pkmer.cn/images/stars2.png!pkmer)

![[stars2.mp4]]

### Stars3

![stars3.png](https://cdn.pkmer.cn/images/stars3.png!pkmer)

![[stars3.mp4]]

### Campfire

![campfire.png](https://cdn.pkmer.cn/images/campfire.png!pkmer)

![[campfire.mp4]]

## 如何增加新背景

现有五个背景改自 [codepen.io](https://codepen.io/) 的五个项目

- Sky and Sea: [CodePen HomeCSS Illustration 'Sky and Sea'](https://codepen.io/WhitePallet/details/YYmZEK)
- Stars1: [Parallax Star background in CSS](https://codepen.io/sarazond/pen/LYGbwj)
- Stars2: [CodePen Home Stars #Codevember_08](https://codepen.io/johnbgarcia/pen/qqdgGp)
- Stars3: [A sky full of stars](https://codepen.io/jlnljn/pen/gRrOxM)
- Campfire: [Campfire Colony](https://codepen.io/jackiezen/pen/gOOgvOO?editors=1000)

如果你想添加你喜欢的壁纸，你可以在 GitHub 上给作者提一个 [Issues](https://github.com/xhuajin/obsidian-wallpaper/issues)。

或者如果你有足够的动手能力，你也可以尝试修改源码添加壁纸：

- fork 原项目并且安装依赖 npm i, npm run dev
- 在文件夹 'src/style' 中添加一个 css 文件存放你的动态壁纸需要的 css。同时补全 'src/style/styles.css'。
- 在文件夹 'src/wallpaper/' 中创建一个 ts 文件，用于绘制你的动态壁纸。同时在文件 'src/wallpaper/wallpaperPainter.ts' 中新增一个你的新壁纸的 cases。
- 在 settings.js 文件中添加上你的新壁纸，以便你能够在 obsidian 的 wallpaper 设置中找到你的壁纸。