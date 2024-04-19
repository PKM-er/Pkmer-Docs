---
uid: 20240419114805
title: People Manager使用说明
tags: [关系, 人脉管理]
description: EssentialPIM数据导入到obsidian的插件
author: 宏沉一笑
type: basic
draft: false
editable: false
modified: 20240419114805
---
# People Manager使用说明  #
本插件是EssentialPIM人脉管理软件与Obsidian联动的一个插件，可以将EssentialPIM导出的数据，导入到obsidian。用obsidan来进行人脉之间的关系分析，人脉查找等功能。  
插件暂时只支持EssentialPIM导出csv格式，来进行导入操作。

## Essential 组功能说明
**组** 是一个很好用的分类功能，可以分类我们所记录的信息的类型。  
比如，我们记录了人脉、公司、饭店、旅游景点、位置、等信息。
就可以用组来把他们分类，方便查看。

## 设置说明
![[Pasted image 20240419115123.png]]

模板位置：导入时所依赖的模板所保存的位置。示例：`配置/模板`
默认模板：当我们没有给一个联系人设置组名时，插件就会使用这个模板。示例：`默认模板`
输出的位置：插件将联系人的信息与模板进行整合后，存放的位置 。
导入的文件：EssentialPIM导出的csv文件存放位置，请存放在当前库中。外部路径不能使用。
自动更改的属性：例如一个数据是：母亲::刘文  ，插件会自动更改为  母亲::[[刘文]]  。方便两个联系人之间建立联系。可以更好的去管理。

## 默认模板
```
---
编辑: 
---
------
> [!col3]  
> 类型 :: 人脉 
> 名称 ::   
> 标签 ::  

------
名::


------
> 组::
备忘::
创建日期::
修改时间::

------
```

## 命令说明
### People Manager: CSV input
使用当前命令是，会判断要导入的联系人，当前库是否有这个联系人。
- 没有这个联系人
就只会按照模板所提供的信息进行添加，不添加新的。
![[Pasted image 20240419115307.png]]

- 有这个联系人
就会将新的值添加到对应联系人文档中。
![[Pasted image 20240419115316.png]]

特别说明：当我们导入csv文件时，可以**点击这个按键两次**。 就可以创建联系人，并更新它的信息。

---
<center>
<table>
    <tr>
        <td >
            <center>
                <img src="https://i.loli.net/2020/01/08/CJz85Sbal6M7EOV.png" width="200"/>
            </center>
            <center style="font-weight:900">
                微信：宏沉一笑
            </center>
        </td>
        <td >
            <center>
                <img src="https://i.loli.net/2020/01/08/veq2DSphHME9KPV.jpg" width="200"/>
            </center>
            <center style="font-weight:900">
                公众号：登山客
            </center>
        </td>
    </tr>
</table>
</center>


**签名：Smile every day**    
**名字：宏沉一笑**   
**邮箱：whghcyx@outlook.com**  
**个人网站：https://whg555.github.io**  

---