---
uid: 20230803212316
title: Obsidian 插件：【Readme】echarts
tags: ['图表生成', '美化', 'obsidian插件', 'readme']
description: 一个可以在obsidian 里运行echarts 的插件，具体可以参考官方示例库代码。插件需要依赖dataview插件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：echarts

> [!Note] 插件名片
> - 插件名称：echarts
> - 插件作者：windily-cloud && Cuman
> - 插件说明：一个可以在obsidian 里运行echarts 的插件，具体可以参考官方示例库代码。插件需要依赖dataview插件
> - 插件分类：['图表生成', '美化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/cumany/obsidian-echarts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-echarts)

## 概述

一个可以在obsidian 里运行echarts 的插件，具体可以参考官方示例库代码。插件需要依赖dataview插件

![echarts](https://cdn.pkmer.cn/covers/obsidian-echarts.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cumany/obsidian-echarts/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-echarts]] 插件的自述翻译



obsidian-echarts是一个在obsidian中渲染echarts的插件，具体详情请参考[Apache ECharts](https://echarts.apache.org/en/index.html)，这是一个开源的JavaScript可视化库。插件依赖于dataview插件，[example](https://github.com/cumany/obsidian-echarts/tree/main/example)文件夹中包含一些基本示例。更多示例可以在[Blue-topaz-examples](https://github.com/cumany/Blue-topaz-examples)中找到。

![GIF 2022-06-02 13-31-49](https://user-images.githubusercontent.com/42957010/171559841-cfa4e5e2-69be-4506-a32f-beac33842052.gif)
![image](https://user-images.githubusercontent.com/42957010/171442642-fce4d273-ee06-4a3b-bb8c-e312f8763ce6.png)
![image](https://user-images.githubusercontent.com/42957010/171442781-67127459-5c35-4535-a80c-1c79059c3853.png)
![image](https://user-images.githubusercontent.com/42957010/171444744-5ba1e0e8-b01c-4f4b-b9e1-4ef448ded02f.png)

点击事件绑定是通过在源数据中添加以下字段来实现的。
目前支持的类型有标签（tag）、内容（content）、文件（file）、路径（path），指定这些类型可以调用Obsidian搜索操作符来实现点击事件。
如果指定的是文件（file）和路径（path）类型，则需要添加字段，例如data['file']='文件名'，以实现组合搜索。
假设datas是要显示的数据。

```
datas.forEach((data)=>{
	data['search']='tag'
	data['file']='filename'
	data['path']='path'
})
```

**如果不指定，默认绑定的是传入的data数组中的索引对应的文件。**

将下面的代码放入option选项后即可渲染：
```
app.plugins.plugins['obsidian-echarts'].render(option, this.container)
```



