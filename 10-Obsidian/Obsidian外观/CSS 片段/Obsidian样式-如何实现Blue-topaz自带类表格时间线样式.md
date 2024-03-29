---
uid: 20231128164208
title: Obsidian 样式：如何实现 Blue topaz 主题时间线样式
tags: ["Obsidian", "CSS", "表格", "时间线"]
description: Obsidian样式-如何实现Blue-topaz自带类表格时间线样式
author: Chenghuang
type: other
draft: false
editable: false
modified: 20231128164804
---

# Obsidian 样式：如何实现 Blue topaz 主题时间线样式

- Blue topaz 主题自带类表格时间线样式，实际上是一种特殊的 callout，可以嵌入表格、图片和 callout 等 md 语法。
- 从示例库来看，也可以做类康奈尔笔记，此处不详述，有意者请参考源地址。

![image.png](https://cdn.pkmer.cn/images/20231128164738.png!pkmer)

> [!example] 语法
>
>```
>>[!timeline] 
>>>这里写左栏内容，一般为时间，注意这里要加2个大于号
>>写完左栏写右栏时需要一行，写完右栏写左栏则无不需要空行，可以写大于号加分割线>---，也可以保留大于号直接空一行
>>这里写右栏目内容，一般为事件。
>```

```
>> [!timeline] 近代中国史
>>> 1840年6月
>> 
>>英军发动鸦片战争
>>> 1842年8月
>>
>>清政府与英国签订《南京条约》: 
>>- 中国割让香港岛给英国; 
>>- 赔款洋银2100万元; 
>>- 开放广州、厦门、福州、宁波、上海五处为通商口岸;
>>> [!cite]+ 《南京条约》影响
>>> 1. 中国近代史上第一个不平等条约，给中国人民带来深重的灾难，开创了列强以条约形式侵略和奴役中国的恶例;
>>> 2. 中国的国家主权和领土完整遭到破坏，逐步沦为半殖民地半封建社会;
>>> 3. 中国社会的主要矛盾由地主阶级与农民阶级的矛盾，演变为帝国主义和中华民族的矛盾（主要矛盾)、封建主义和人民大众的矛盾;
>>> 4. 反侵略反封建成为中国人民肩负的两大历史任务;
>>> 5. 中国逐渐开始了反帝反封建的资产阶级民主革命。
>>
>> |时间 |事件 |
>> | ------ | -------------------------------------- |
>> | 1943年 | 中英《虎门条约》签订;                  |
>> | 1844年 | 中关《望厦条约》、中法《黄埔条约》签订 | 
>>
>>>1841年5月
>>
>> 三元里人民的抗英斗争，是中国近代史上中国人民第一次大规模的反侵略武装斗争。
>> ![ ](https://tse1-mm.cn.bing.net/th/id/R-C.4bbce1406f4442c1360edde26baa894d?rik=iHeUeby0jS5lnw&riu=http%3a%2f%2fp8.qhmsg.com%2fdr%2f270_500_%2ft01dbb76ff833d0a159.jpg&ehk=yggnC0t62%2b6DEVjvBgs%2fXJuuexBucd66FTc5gL0Gw%2fA%3d&risl=&pid=ImgRaw&r=0)
```
