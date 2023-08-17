---
uid: 20230603163007
title: Obsidian 能像其他笔记样分栏嘛
tags: [Obsidian,分栏,css]
description: Obsidian 能像其他笔记样分栏嘛
author: OS
type: other
draft: false
editable: false
modified: 20230603165054
---

# Obsidian 能像其他笔记样分栏嘛

## 多行分列语法 MCL Multi Column.css

## 多栏样式（Multi Column）

> [!tip] Callouts 类型
> 1. 双栏：> [!multi-column] 【快捷输入：co-mulit，会自动帮你构建双栏空位】
> 2. 三栏：> [!multi-column] 【快捷输入：co-tri，会自动帮你构建三栏空位】
> 3. 理论上讲只要宽度足够，你可以便问 N 多栏；
> 4. 隐藏标题列：> [!blank-container]
> 5. 快捷输入依赖：需要开启【various-complements】插件
> 6. 支持这个样式需要在：OB > 外观 > 【MCL Multi Column.css】（状态变为打开）
>
> [!tip] 使用方法
> 1. 栏位间用一个 > 分隔
> 2. 每个 Callout 区块多增加一个 >
> 3. 栏位数由 2 到 N，只要屏幕宽度足夠，会自动分配栏宽
> 4. **可使用 Style Settings 插件设定**

## 安装

下载安装 [地址](https://github.com/ckRobinson/multi-column-markdown/releases)。

### 两栏示例

![image.png](https://cdn.pkmer.cn/images/20230603163405.png!pkmer)

```语法
> [!multi-column]
>
>> [!note]+ 待办事项
>>
>>- your notes or lists here. using markdown formatting
>>- your notes or lists here. using markdown formatting
>>- your notes or lists here. using markdown formatting
>>
>> [!warning|right-small]+ 进行中的事项
>>
>> your notes or lists here. using markdown formatting
```

### 2.2. 三栏示例

![image.png](https://cdn.pkmer.cn/images/20230603163424.png!pkmer)

```语法
> [!multi-column]
>
>> [!note]+ 待办事项
>>
>> your notes or lists here. using markdown formatting
>>
>> [!warning]+ 进行中的事项
>>
>> your notes or lists here. using markdown formatting
>>
>> [!success]+ 已完成事项
>>
>> your notes or lists here. using markdown formatting
```

### 2.3. 四栏示例

![image.png](https://cdn.pkmer.cn/images/20230603164937.png!pkmer)

```语法
> [!multi-column]
>
>> [!note]+ 待办事项
>>
>> your notes or lists here. using markdown formatting
>>
>> [!warning]+ 进行中的事项
>>
>>- your notes or lists here. using markdown formatting
>>- your notes or lists here. using markdown formatting
>>- your notes or lists here. using markdown formatting
>>
>> [!success]+ 已完成事项
>>
>> your notes or lists here. using markdown formatting
>>
>> [!info]+ 说明
>>
>> your notes or lists here. using markdown formatting
```

## 3. MCL 控制

本库集成的【MCL Multi Column.css】也通过 【style setting】插件实现了图形化设置。

位置：style settings > Modular CSS Layout - Multi Column

这里已经对部分设置进行了汉化，如果你的 OB 设置了中文，那么会自动展示已经翻译的内容。
