---
uid: 20240315004609
title: image-memo
tags: [obsidian, image]
description: 更好的展示你的图片，给你图片打上标签
author: Huajin
type: other
draft: false
editable: false
modified: 
---

# image-memo

> [!Note] 插件名片
> - 插件名称：Image Memo
> - 插件作者：Oushuo Huang
> - 插件说明：这个插件允许用户在日常笔记中标记和格式化图像，并提供一个搜索图片标签的视图。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Ender-Wiggin2019/obsidian-image-memo)

![image.png](https://cdn.pkmer.cn/images/20240316160332.png!pkmer)

这个插件有他的私有语法，如果你担心语法污染或者担心以后不使用 obsidian 的话，不建议使用。

语法

````
```imemo
![[image]]
type=art
```
````

使用 imemo 代码块，直接把图片的链接放入即可。但是想要变成上方那样的图片，还需要更多的参数。

## 参数

| 参数        | 默认值       | 输入值                | 是否必须 | 功能描述                                                        |
| --------- | --------- | ------------------ | ---- | ----------------------------------------------------------- |
| type      | default   | art, photo, review | 否    | imemo 块图片的格式                                                |
| name      | file name | (any text)         | 否    | 图片名                                                         |
| date      | file date | (any text)         | 否    | 给 imemo 增加日期信息                                              |
| rating    | -         | (any number)       | 否    | 给图片打分，会在 imemo 块中出现一个评级。只有当 type = review 的时候生效             |
| desc      | -         | (any text)         | 否    | 给图片的描述                                                      |
| showImage | true      | false              | 否    | 是否显示图片                                                      |
| showDesc  | true      | false              | 否    | 是否显示图片的描述                                                   |
| notShow   | []        | 其他参数，中间用英文逗号分割     | 否    | 你不想显示的信息（会检索图片自动增加信息，用这个选项可以隐藏他们），例如 `notShow=data, rating` |

当 <kbd>type=review</kbd> 时，你可以为一部电影或一本书创建一个复习块。评分是 0 到 5 的数字，描述是评论的内容。或者可以使用 <kbd>type=photo</kbd> 为你拍摄的照片创建一张明信片。

![image.png](https://cdn.pkmer.cn/images/20240316161408.png!pkmer)

可以看到上图中还有一个色块（本地图片有，在线图片无），其实 `notShow` 还有三个输入值：path, size, palette。试试输入一行 `notShow=palette`，下方的色块就不会显示了。 path 是图片的路径，size 是图片的大小，单位为 MB。

## tag-calendar

你可以直接在 imemo 代码块中添加标签，这个标签相当于直接打在图片上的。如果你在日记中使用该功能，该插件提供了一个 tag-calendar 页面方便你查看这些的图片。

![tag_calendar.gif](https://cdn.pkmer.cn/images/tag_calendar.gif!pkmer)

## 注意事项

- 图片以库的根目录作为根路径
- 在线图片无法自动获取图片的相关信息（data, size, palette 等）

## 示例

安装并打开该插件，复制下面这段代码至正文中

````
```imemo 
![example](https://ender-picgo.oss-cn-shenzhen.aliyuncs.com/img/CleanShot%202023-08-25%20at%2005.25.42@2x.png)

name=A Wheatfield, with Cypresses
type=art
date=Augest 20th
notShow=path

desc=The painting depicts golden fields of ripe wheat, a dark fastigiate Provençal cypress towering like a green obelisk to the right and lighter green olive trees in the middle distance, with hills and mountains visible behind, and white clouds swirling in an azure sky above. 

#VanGogh #Gallery
```
````

你就能够看到：

![image.png](https://cdn.pkmer.cn/images/20240316162526.png!pkmer)

除了图片，该插件还可以展示其他的信息，例如图书、电影、游戏等，但是无法显示他们各自更多的元数据。例如：

![11.png](https://cdn.pkmer.cn/images/11.png!pkmer)
