---
uid: 20230803203545
title: Obsidian 插件：【Readme】Blur
tags: ['obsidian插件', 'readme']
description: 创建混淆的文本块。
author: @gapmiss
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Blur

> [!Note] 插件名片
> - 插件名称：Blur
> - 插件作者：@gapmiss
> - 插件说明：创建混淆的文本块。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/gapmiss/blur)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?blur)

## 概述

创建混淆的文本块。

![Blur](https://cdn.pkmer.cn/covers/blur.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gapmiss/blur/master/README.md)
> 

---

## Readme(翻译）

下面是 [[blur]] 插件的自述翻译


# 模糊

轻量级的[Obsidian.md](https://obsidian.md/)插件，用于创建模糊的文本块。

2种模式：

1. `inline`（内联）
2. `block`（代码块）

3种方法：

1. **blur**（模糊）- 用于模糊化
2. **brick**（砖块）- 用于删除
3. **bone**（骨头）- 用于线框设计

## 内联

##### 模糊

```markdown
阿尔法 布拉沃 查理 `~{Delta}` 伊科 福克斯特 戈尔特 酒店 印度 朱利叶特 `~{Kilo}` 利马 迈克 南斯卡尔 `~{Papa}` 魁北克 罗密欧 西尔拉 坦戈 统一 维克多 `~{Whiskey}` X射线 雅克 尤里 曾鲁
```

##### 砖

```markdown
阿尔法 布拉沃 查理 `~[Delta]` 伊科 法克斯特 高尔夫 酒店 印度 朱利叶特 `~[Kilo]` 利马 迈克 南希 奥斯卡 `~[Papa]` 魁北克 罗密欧 西尔拉 坦戈 统一 维克多 `~[Whiskey]` X射线 雅克 朱利
```

##### 骨头

```markdown
阿尔法 布拉沃 查理 `~(德尔塔)` 伊科 福克斯特 戈尔特 霍特尔 印度 朱利叶特 `~(基洛)` 利马 迈克 南尼斯卡尔 `~(帕帕)` 魁北克 罗密欧 西尔拉 坦戈 统一 维克多 `~(威士忌)` 西尔弗 元素 亚瑟 阻流
```

## 区块

##### 模糊

````
```模糊
阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 戈尔特 霍特尔 印度 朱利特 基洛 里马 迈克 南尼斯卡尔 奥斯卡 帕帕 魁北克 罗密欧 西尔拉 坦戈 统一 维克多 惠斯基 克斯雷扬基 祖鲁
```
````

##### 砖块

````
```blur-brick
阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 戈尔特 酒店 印度 朱利叶特 基洛 里马 迈克 南尼斯卡尔 奥斯卡 帕帕 魁北克 罗密欧 西尔拉 坦戈 统一 维克多 惠斯基 克斯雷扬基 祖鲁
```
````

##### 骨头

````
```blur-bone
阿尔法 布拉沃 查理 德尔塔 伊科 福克斯特 戈尔特 酒店 印度 朱利特 基洛 里马 迈克 南希 奥斯卡 帕帕 魁北克 罗密欧 西尔拉 坦戈 统一 维克多 惠斯基 克斯雷 扬基 祖鲁
```
````

## 结果

![浅色模式下的结果截图](assets/results-light.png)

![深色模式下的结果截图](assets/results-dark.png)

---

## 插件安装

从Obsidian的设置或首选项中：

1. ~~社区插件 > 浏览~~
2. ~~搜索 "iconoir"~~

或者：

1. 下载最新的[发布存档](https://github.com/gapmiss/blur/releases/download/1.0.0/blur.zip)
2. 解压下载的存档
3. 将 `blur` 文件夹移动到 `/path/to/vault/.obsidian/plugins/` 
4. 设置 > 社区插件 > 重新加载 **已安装的插件**
5. 启用插件

或者：

1. 下载 `main.js`、`manifest.json` 和 `styles.css`
2. 创建一个新的文件夹 `/path/to/vault/.obsidian/plugins/blur`
3. 将所有3个文件移动到 `/path/to/vault/.obsidian/plugins/blur`
4. 设置 > 社区插件 > 重新加载 **已安装的插件**
5. 启用插件

自定义`CSS`样式可以通过[obsidian-style-settings](https://github.com/mgmeyers/obsidian-style-settings)插件应用。

### 视频演示

<video src="https://user-images.githubusercontent.com/98914514/241434872-cd7a354b-7f90-44f5-a683-21faa6eee628.mp4" data-canonical-src="https://user-images.githubusercontent.com/98914514/241434872-cd7a354b-7f90-44f5-a683-21faa6eee628.mp4" controls="controls" muted="muted" style="max-width:100%">
</video>

### 效果

1. **模糊** - `滤镜`
2. **砖块** - `行高`, `背景颜色`, `边框半径`
3. **骨骼** - `行高`, `背景颜色`, `边框半径`
和
4. **编辑器** - `切换`以在鼠标悬停时显示混淆的文本

![插件样式设置的截图](assets/style-settings.png)

##### 用于设置样式的`CSS`片段

以下需要使用[obsidian-style-settings](https://github.com/mgmeyers/obsidian-style-settings)插件。

1. 创建一个名为`obsidian-blur-plugin.css`的片段文件，内容如下

或者

1. 下载[obsidian-blur-plugin.css](assets/obsidian-blur-plugin.css)

然后

2. 将文件保存到`/path/to/vault/.obsidian/snippets`
3. 在*设置 > 外观 > CSS片段*下启用片段

```yaml
/* @settings

name: 模糊插件
id: obsidian-blur
settings:
-
  id: obsidian-blur-hover
  title: 鼠标悬停时显示模糊文本
  type: class-toggle
  default: false
-
  id: obsidian-blur-filter
  title: 模糊滤镜强度
  type: variable-text
  default: 5px
-
  id: obsidian-blur-brick-color
  title: 砖块颜色
  type: variable-themed-color
  format: hsl
  opacity: true
  default-light: 'hsla(220,19%,6%,1)'
  default-dark: 'hsla(220,100%,100%,1)'
-
  id: obsidian-blur-brick-border-radius
  title: 砖块边框半径
  type: variable-text
  default: 1px
-
  id: obsidian-blur-brick-line-height
  title: 砖块行高
  type: variable-number-slider
  default: 1
  min: 1
  max: 2
  step: .05
- 
  id: obsidian-blur-bone-color
  title: 骨头颜色
  type: variable-themed-color
  format: hsl
  opacity: true
  default-light: 'hsla(220,19%,6%,1)'
  default-dark: 'hsla(220,100%,100%,1)'
-
  id: obsidian-blur-bone-border-radius
  title: 骨头边框半径
  type: variable-text
  default: 1.5em
-
  id: obsidian-blur-bone-line-height
  title: 骨头行高
  type: variable-number-slider
  default: 1
  min: 1
  max: 2
  step: .05
-
*/
```

发展

### 克隆这个仓库

```bash
cd /path/to/vault/.obsidian/plugins
git clone https://github.com/gapmiss/blur.git
cd blur
```

### 安装包并运行

```bash
npm i
npm run dev
```

### 启用插件

1. 打开 `设置` → `社区插件`
2. 启用 `模糊` 插件。



