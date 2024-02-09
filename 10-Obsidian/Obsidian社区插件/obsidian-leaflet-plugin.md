---
uid: 20231121205045
title: Obsidian 插件：Obsidian Leaflet 用法之管理自己的旅行照片
tags:
  - Obsidian
  - 第三方工具集成
  - 图片
  - obsidian插件
  - Leaflet
description: Obsidian进阶插件Obsidian Leaflet用法之管理自己的旅行照片
author: StarAire
type: other
draft: false
editable: false
modified: 20231121210947
---

# Obsidian 插件：Obsidian Leaflet 用法之管理自己的旅行照片

## 概述

通过照片的 GPS 定位信息标记在地图上，鼠标放在标记点上可预览图片，标记点可绑定文件和图片，可以在里面写随想和照片，让相册里的照片跃然地图之上。

![202473609249698.png](https://cdn.pkmer.cn/images/202473609249698.png!pkmer)

![554163809246253.png](https://cdn.pkmer.cn/images/554163809246253.png!pkmer)

> [!Note] 插件名片
> - 插件名称：Obsidian Leaflet
> - 插件作者：Jeremy Valentine
> - 插件说明：在笔记中插入交互式地图，此地图基于 Leaflet.js。添加需要通过使用特定语法。
> - 插件分类：[' 第三方工具集成 ', ' 图片 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/javalent/obsidian-leaflet)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-leaflet-plugin)

## 1 前言

自从使用 nas 备份自己的照片之后，成批的照片管理就成了问题，照片收集起来，一堆乱糟糟，不知从何看起，所以尝试了很多照片管理工具，有把一堆照片按时间分类整理的小软件，还有一些管理照片的软件例如 digikam 或 PhotoPrism，他们功能都很强大，可以快速的管理图片。

这些照片管理软件有一个地图的功能让我感觉特别有意思，但使用起来都有点不尽如人意，例如 PhotoPrism 的地图功能需要收费，digikam 的地图很模糊，观感不太好。

于是突然有一天我看到 obsidian 有个 Obsidian Leaflet 插件，了解一番之后觉得简直完美，下面我就简述一下这个插件的使用方法。

## 2 基本使用方法

### 2.1 安装插件

首先可以去 github 上看下这个插件的仓库：<https://github.com/javalent/obsidian-leaflet>

它给了一个案例和一个表

````markdown
```leaflet
id: leaflet-map
image: [[Image.jpg]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 5
unit: meters
scale: 1
marker: default, 39.983334, -82.983330, [[Note]]
darkMode: true
```
````

我们改为

````markdown
```leaflet
id: TT20220521
osmLayer: false
tileServer: http://{s}.tile.osm.org/{z}/{x}/{y}.png
tileSubdomains: ['a', 'b', 'c']
lat: 30.2574
long: 120.1429
height: 800px
width: 100%
defaultZoom: 16
maxzoom: 18
minzoom: 1
unit: meters
scale: 1

markerFolder: 100_Schedule/130_计划清单/133_旅游计划/旅游记录/2022/2022年5月西湖一日游/标记点

```
````

解释一下

- `id`：用来识别这个块的 id，写一个独一无二的就行，插件用这个 id 和标记点绑定
- `osmLayer: false`：我们这里使用真实地图，所以这里写 `false`
- `tileServer`：地图瓦片服务器地址，这里选择 `openstreetmap` 的源 `http://{s}.tile.osm.org/{z}/{x}/{y}.png`，也可以选择高德的源，下面会说到
- `tileSubdomains`：这是申请数据要附带的，这里填 `['a', 'b', 'c']`，不同的服务器不一样
- `lat`：地图打开时中心点的纬度
- `long`：地图打开时中心点的经度
- `height`：地图在 obsidian 页面高度，可以填像素值或者百分比，这里可以自由调整
- `width`: 地图在 obsidian 页面宽度，和上面一样
- `defaultZoom`：默认的一个缩放，这里插件原来的一个范围是 `1-10`，导致地图不能放的很小，后面讲一下怎么把范围改大，这里默认填 `16`，可以自己调整
- `maxzoom`：缩放最大限制
- `minzoom`：缩放最小限制
- `unit`：地图单位，这里填 `meters`
- `scale`：我也不知道是什么，照着填 1 就行了
- `markerFolder`: 标记点文件夹，可以暂时不填

### 2.2 添加想要的地图

#### 修改中心点经纬度

打开<https://www.openstreetmap.org/#map>

找到自己想要定位的点

![508795410242007.png](https://cdn.pkmer.cn/images/508795410242007.png!pkmer)

将上面的经纬度复制下来，前面是纬度，后面是经度，复制到上面的 lat 和 long 后面

#### 修改缩放限制

打开笔记文件夹目录底下的 `.obsidian` 文件夹，然后打开 `Plugins`-`obsidian-leaflet-plugin`，打开里面的 `main.js`，全局搜索 `maxzoom:10`，全部修改为 `maxzoom:18`

然后保存，软件重启

最后我们输入

````markdown
```leaflet
id: TT20220430
osmLayer: false
tileServer: http://{s}.tile.osm.org/{z}/{x}/{y}.png
tileSubdomains: ['a', 'b', 'c']
lat: 30.2495
long: 120.1436
height: 800px
width: 100%
defaultZoom: 14
maxzoom: 18
minzoom: 1
unit: meters
scale: 1

```
````

显示效果如下

![140550511259887.png](https://cdn.pkmer.cn/images/140550511259887.png!pkmer)

### 2.3 添加标记点

#### 最快捷的方式

找到要标记的点，鼠标右键，就打上了一个标记点，

然后右键标记点，编辑标记，Description 可以添加这个点的描述信息

右键标记点 -`转换为代码块`，此时切回编辑模式，可以看见自动添加了这个

```
marker: default,30.258943640372824,120.13927459716798,,,,
```

此时再切回预览，发现标记点是不是不见了，别急，把上面的后面几个逗号去掉

```
marker: default,30.258943640372824,120.13927459716798
```

再切回预览模式，点又回来了

我们可以看下 github 仓库里给我们的说明

```
marker: <type*>,<latitude>,<longitude>,<link*>,<description*>,<minZoom*>,<maxZoom*>
```

第一个 type 是点的类型，这里 default 即可

第二个第三个是经纬度

第四个是文件链接，这里我们可以链接照片也可以链接文件，

第五个是 description，是描述

第六第七个是是可以看见标记点的一个缩放大小区间

没有需求，后面可以不填

这里我们可以简单的绑定一个图片和添加描述信息

```
marker: default,30.258943640372824,120.13927459716798,[[index.jpg]],123
```

![129052011257491.png](https://cdn.pkmer.cn/images/129052011257491.png!pkmer)

#### 文件 +yaml 创建标记点

我们可以创建一个文件夹，然后在地图的 `markerFolder` 把这个路径添加进去，例如

````markdown
```leaflet
id: TT20220521
osmLayer: false
tileServer: http://{s}.tile.osm.org/{z}/{x}/{y}.png
tileSubdomains: ['a', 'b', 'c']
lat: 30.2574
long: 120.1429
height: 800px
width: 100%
defaultZoom: 16
maxzoom: 18
minzoom: 1
unit: meters
scale: 1

markerFolder: 100_Schedule/130_计划清单/133_旅游计划/旅游记录/2022/2022年5月西湖一日游/标记点

```
````

然后在该文件夹里添加标记点文件

![322732211254993.png](https://cdn.pkmer.cn/images/322732211254993.png!pkmer)

我是通过经度 + 纬度的方式命名的，你也可以有其他命名方式

里面的 yaml 格式可以按照这样

![15213811247356.png](https://cdn.pkmer.cn/images/15213811247356.png!pkmer)

最关键的就是 `mapmarker` 和 `location` 字段，其他字段可以自己定义

- `mapmarker`：标记点类型，默认为 default
- `location`：经纬度信息

因为这些信息都可以从照片中获取，所以我们可以写一个脚本来获取信息 (这里形式不一，各位可以自行设计)

```python


import exifread
import json
import urllib.request



image = 'IMG_20230430_203010.jpg'

imageurl = '![](自己的照片路径/'

f = open(r'照片路径\\'+image, 'rb')

tags = exifread.process_file(f)

#打印照片其中一些信息
# print('拍摄时间：', tags['EXIF DateTimeOriginal'])
# print('照相机制造商：', tags['Image Make'])
# print('照相机型号：', tags['Image Model'])
# print('照片尺寸：', tags['EXIF ExifImageWidth'], tags['EXIF ExifImageLength'])

print("---") 
print("mapmarker: default") 
print("date: ",tags['EXIF DateTimeOriginal']) 
print("device: "+ str(tags['Image Make'])+" "+str(tags['Image Model']))
print("place: ")
#获取经度或纬度
def getLatOrLng(refKey, tudeKey):
    if refKey not in tags:
        return None
    ref=tags[refKey].printable
    LatOrLng=tags[tudeKey].printable[1:-1].replace(" ","").replace("/",",").split(",")
    LatOrLng=float(LatOrLng[0])+float(LatOrLng[1])/60+float(LatOrLng[2])/float(LatOrLng[3])/3600
    if refKey == 'GPS GPSLatitudeRef' and tags[refKey].printable != "N":
        LatOrLng=LatOrLng*(-1)
    if refKey == 'GPS GPSLongitudeRef' and tags[refKey].printable != "E":
        LatOrLng=LatOrLng*(-1)
    return LatOrLng
 
lat = getLatOrLng('GPS GPSLatitudeRef','GPS GPSLatitude') #纬度
lng = getLatOrLng('GPS GPSLongitudeRef','GPS GPSLongitude') #经度
print('gps: [{},{}]'.format(lat, lng))
if lat==None or lng==None:
    print("no gps")
    exit()
print("location: [{},{}]".format(lat, lng)) 

print("---") 


print(imageurl+image+')') 


```

最终将打印出来的信息，填到文件里

### 2.4 使用国内地图

有些景点，openstreetmap 的信息不是很多，所以我们被迫不得不用国内的地图

首先，将国外的服务器改为国内的高德

````markdown

```leaflet
id: TT20220430
osmLayer: false
tileServer: http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
tileSubdomains: ["1", "2", "3", "4"]
lat: 32.101
long: 120.825
height: 800px
width: 100%
defaultZoom: 16
maxzoom: 18
minzoom: 1
unit: meters
scale: 1

```
````

修改 `tileServer` 为 `http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}`

`tileSubdomains` 修改为 `["1", "2", "3", "4"]`

但是国内的地图的坐标信息是采用的和国际不一样的坐标体系，所以国外的 GPS 坐标，用在国内的地图上就会发生偏移，下面我们就来解决这个问题

具体原因见：<https://zhuanlan.zhihu.com/p/258883313>

这是如果尝试添加之前的坐标点，就会发现地图上地点对不上，而之前的 openstreetmap 则没有偏移，为了解决这个问题，我们调用高德的坐标转换 API

<https://developer.amap.com/api/webservice/guide/api/convert>

申请一个 KEY

然后修改之前的脚本

```py

import exifread
import json
import urllib.request
import requests
 

# 高德地图坐标转换
gaodeconvert_enable = 1
# 高德API的key
gaodeapi_key = "自己的key"
# 高德api的网址
gaodeapi_sitehead = "https://restapi.amap.com/v3/assistant/coordinate/convert?locations="

image = 'IMG_20230430_203010.jpg'

imageurl = '![](自己的图片路径/'

f = open(r'图片路径\\'+image, 'rb')

tags = exifread.process_file(f)

#打印照片其中一些信息
# print('拍摄时间：', tags['EXIF DateTimeOriginal'])
# print('照相机制造商：', tags['Image Make'])
# print('照相机型号：', tags['Image Model'])
# print('照片尺寸：', tags['EXIF ExifImageWidth'], tags['EXIF ExifImageLength'])

print("---") 
print("mapmarker: default") 
print("date: ",tags['EXIF DateTimeOriginal']) 
print("device: "+ str(tags['Image Make'])+" "+str(tags['Image Model']))
print("place: ")
#获取经度或纬度
def getLatOrLng(refKey, tudeKey):
    if refKey not in tags:
        return None
    ref=tags[refKey].printable
    LatOrLng=tags[tudeKey].printable[1:-1].replace(" ","").replace("/",",").split(",")
    LatOrLng=float(LatOrLng[0])+float(LatOrLng[1])/60+float(LatOrLng[2])/float(LatOrLng[3])/3600
    if refKey == 'GPS GPSLatitudeRef' and tags[refKey].printable != "N":
        LatOrLng=LatOrLng*(-1)
    if refKey == 'GPS GPSLongitudeRef' and tags[refKey].printable != "E":
        LatOrLng=LatOrLng*(-1)
    return LatOrLng
 
lat = getLatOrLng('GPS GPSLatitudeRef','GPS GPSLatitude') #纬度
lng = getLatOrLng('GPS GPSLongitudeRef','GPS GPSLongitude') #经度
print('gps: [{},{}]'.format(lat, lng))
if lat==None or lng==None:
    print("no gps")
    exit()

gaodeapi_site = gaodeapi_sitehead + str(lng)+","+str(lat)+"&coordsys=gps&output=json&key="+gaodeapi_key
response = requests.get(gaodeapi_site)
locations = response.json()['locations']
locations_list = locations.split(',')
gn=locations_list[1]+','+locations_list[0]
print("gn: [{}]".format(gn)) 

if gaodeconvert_enable == 1:
    print("location: [{}]".format(gn)) 
    #response = requests.get(gaodeapi_site+"locations="+lng+","+lat+"&coordsys=gps&output=json&key="+gaodeapi_key)
else:
    print("location: [{},{}]".format(lat, lng)) 



print("---") 

print(imageurl+image+')') 

if gaodeconvert_enable == 1:
    print(gn) 
else:
    print("{},{}".format(lat, lng)) 
```

最终生成出转换后的坐标

![](vx_images/540910012240490.png =681x)

### 2.5 路径

配合右下角的一些编辑工具，可以实现整个旅行路径的绘制，还是蛮有意思的。

## 3 最后

因为这个插件在网上资料不是很多，故想写一个推文去普及一下这个插件的使用，文中还有不详细的地方以及不是很完美的地方还请见谅，后面我会继续完善这个文章。

### 参考链接

- 插件 github：<https://github.com/javalent/obsidian-leaflet>
- openstreetmap 官网：<https://www.openstreetmap.org/#map>
- leaflet 中如何优雅的解决百度、高德地图的偏移问题：<https://zhuanlan.zhihu.com/p/258883313>
- 照片位置信息提取（获取经纬度）：<https://blog.csdn.net/weixin_47325163/article/details/119037394>
- 告别十年印象笔记，用 Obsidian 一年最喜欢的 7 个功能：<https://sspai.com/post/77852>
- leaflet 之添加各种地图的服务：<https://blog.csdn.net/gexin0517/article/details/103769193>


