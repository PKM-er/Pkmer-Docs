---
uid: 20230803212443
title: Obsidian 插件：【Readme】Gallery
tags: ['界面相关', '图片', 'obsidian插件', 'readme']
description: 将笔记以画廊方式展示，并且可以添加标记 /过滤器 /向图像添加注释。此插件已经长期不维护
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Gallery

> [!Note] 插件名片
> - 插件名称：Gallery
> - 插件作者：darakah
> - 插件说明：将笔记以画廊方式展示，并且可以添加标记 /过滤器 /向图像添加注释。此插件已经长期不维护
> - 插件分类：['界面相关', '图片', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Darakah/obsidian-gallery)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-gallery)

## 概述

将笔记以画廊方式展示，并且可以添加标记 /过滤器 /向图像添加注释。此插件已经长期不维护

![Gallery](https://cdn.pkmer.cn/covers/obsidian-gallery.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darakah/obsidian-gallery/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-gallery]] 插件的自述翻译



# Obsidian图库
![GitHub发布](https://img.shields.io/github/v/release/Darakah/obsidian-gallery)
![GitHub所有发布](https://img.shields.io/github/downloads/Darakah/obsidian-gallery/total)

- 主要用于给图像打标签/筛选/添加注释的图库。
- 在笔记中嵌入图像的显示块。
- 图像信息的显示块。

#### 示例：

##### 主画廊
![](https://raw.githubusercontent.com/Darakah/obsidian-gallery/main/images/Example_main_gallery_1.gif)

##### 主画廊筛选

![](https://raw.githubusercontent.com/Darakah/obsidian-gallery/main/images/Example_main_gallery_2.gif)

##### 显示块

![](https://raw.githubusercontent.com/Darakah/obsidian-gallery/main/images/Example_Display_Block.gif)

##### 显示图像信息块

![](https://raw.githubusercontent.com/Darakah/obsidian-gallery/main/images/Example_Info_Block.gif)

##### 旧例子
![example_1](https://raw.githubusercontent.com/Darakah/obsidian-gallery/main/images/example_1.png)

使用方法：

### 图片展示块使用方法
例如，输入：

```
path=Weekly
name=.*Calen
imgWidth=400
divWidth=70
divAlign=left
reverseOrder=false
customList=5 10 2 4
```

参数信息：
- **type**：指定展示类型。可能的取值为grid、active-thumb
- **path**：要展示图片的保险库路径。正则表达式
- **imgWidth**：图片宽度（以像素为单位）
- **divWidth**：div容器的宽度（以%为单位）
- **divAlign**：div对齐方式。可能的取值为left、right
- **reverseOrder**：反转图片的展示顺序。可能的取值为true、false
- **customList**：指定要按照传递顺序展示的图片索引

## 设置：

![](https://raw.githubusercontent.com/Darakah/obsidian-gallery/main/images/Gallery_Settings.png)

## 发布说明：

### v0.5.8
- Bug Fix: https://github.com/Darakah/obsidian-gallery/issues/12

### v0.5.7
- 修改了`gallery-info`块，添加了`imgPath`和`ignoreInfo`参数
- `gallery-info`将显示所有默认信息+添加到info MD文件中的所有YAML。可以通过指定以`;`分隔的`ignoreInfo`来忽略任何信息字段
- 右键单击信息块将打开信息侧边栏
- 在图像信息侧边栏中添加了打开信息文件的按钮
- 更改了信息文件命名，使用与图像相同的名称（如果已存在，则追加计数器）
- Comeback现在会打开侧边栏并正常激活图库
- 修复了重命名文件的错误
- Bug修复：https://github.com/Darakah/obsidian-gallery/issues/8

### v0.5.3
- 支持mp4视频
- 代码清理

### v0.5.2
- 重复文件热修复（https://github.com/Darakah/obsidian-gallery/issues/6）

### v0.5.1
- 在Obsidian设置中添加了反向主图库显示选项

### v0.5.0
- 更新插件的初始版本
- 添加主要图库
  - 查看保险库中的所有图像
  - 按路径/名称（正则表达式）筛选图像
  - 向图像添加信息MD注释
  - 直接从图库侧面板编辑信息MD注释
  - 单击图像进行聚焦
  - 在聚焦时使用左/右箭头键浏览图像
  - 右键单击图像以跳转到原始文件在Obsidian保险库中
  - 从Obsidian设置中更改显示图像的宽度
- 修改`image display`块的输入格式
- 在`image display`块中添加新的`grid`显示类型（支持主要图库显示的大多数功能）
- 添加对齐和指定div％的显示块的选项
- 添加新的`gallery-info`块以显示图像信息

### v0.1.2
- 将块ID更改为`gallery`
- 在`/` vault搜索选项中添加了图像名称过滤
- 删除了无意义且令人困惑的`column`参数

## 支持
[![Github赞助](https://raw.githubusercontent.com/Darakah/Darakah/e0fe245eaef23cb4a5f19fe9a09a9df0c0cdc8e1/icons/github_sponsor_btn.svg)](https://github.com/sponsors/Darakah) [<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/darakah)



