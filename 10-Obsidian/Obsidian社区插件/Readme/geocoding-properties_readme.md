---
uid: 2023102611075380
title: Obsidian 插件：【Readme】Geocoding Properties
tags: ['obsidian插件', 'readme']
description: 将地理编码API的地址/位置数据插入为Obsidian属性。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Geocoding Properties

> [!Note] 插件名片
> - 插件名称：Geocoding Properties
> - 插件作者：Jose Elias Alvarez
> - 插件说明：将地理编码API的地址/位置数据插入为Obsidian属性。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jose-elias-alvarez/obsidian-geocoding-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?geocoding-properties)

## 概述

将地理编码API的地址/位置数据插入为Obsidian属性。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jose-elias-alvarez/obsidian-geocoding-properties/master/README.md)
> 

---

## Readme(翻译）

下面是 [[geocoding-properties]] 插件的自述翻译


# Obsidian地理编码属性

将地理编码API的地址/位置数据插入Obsidian属性中。
## 用法

该插件在活动笔记上操作。它使用以下搜索项之一查询配置的地理编码 API，按优先顺序排列：

-   如果设置了当前笔记的 `address` 属性，则使用该属性
-   如果设置了当前笔记的 `title` 属性，则使用该属性
-   使用当前笔记的名称

在提交搜索项之前，您将被提示编辑搜索项。如果搜索项过于宽泛，API 可能会返回太多结果或零结果，因此在提交之前，通常有助于添加其他信息（城市、州、国家）到搜索项中。

选择结果后，活动笔记的正文将使用[插件设置](#properties)中指定的属性进行更新。
## 设置
### 属性

每个属性都可以启用或禁用，并且您还可以为每个属性指定自定义键：

- `address`：API返回的格式化地址（格式不能保证，并且因API而异）
- `lat`：位置的纬度
- `lng`：位置的经度
- `location`：位置的坐标，以[obsidian-leaflet](https://github.com/javalent/obsidian-leaflet)兼容的`[lat, lng]`格式表示
- `map_link`：使用配置的[地图提供商](#map-provider)链接到位置的在线地图链接
### 属性设置
#### 覆盖现有属性

控制在插入时是否应覆盖现有属性（默认为false）。
地图提供商

控制在插入`map_link`属性时应使用哪个地图提供商（默认为Google Maps）：

-   [Google Maps](https://www.google.com/maps)
-   [Apple Maps](https://maps.apple.com)
-   [OpenStreetMap](https://www.openstreetmap.org)
### API设置
#### API提供者

该插件目前支持两个地理编码API：
这是默认的API。它是免费的，但不保证准确性，并且可能会受到速率限制的影响。（它还倾向于显示同一位置的多个条目。）
##### [Google 地理编码 API](https://developers.google.com/maps/documentation/geocoding/overview)

**这是一个付费的 API**（每次请求的费用很低，但不是免费的）。设置过程较为复杂，但准确度更高，速率限制也更宽松。

您需要设置一个 Google Cloud 项目并启用地理编码 API。您还需要[创建一个 API 密钥](https://developers.google.com/maps/documentation/geocoding/get-api-key)。您还需要设置一个计费账户并为您的项目[启用计费](https://developers.google.com/maps/documentation/geocoding/get-api-key#premium-auth)。

**请小心处理您的 API 密钥！** 我无法访问该密钥，但它以明文形式存储在您的 Obsidian 保险库中，任何拥有该密钥访问权限的人都可以代表您发出请求，这些请求将计入您的计费账户。如果您有疑问，请使用免费 API。
#### API密钥

如果使用[Google地理编码API](#google-geocoding-api)，您需要在此处设置您的API密钥。



