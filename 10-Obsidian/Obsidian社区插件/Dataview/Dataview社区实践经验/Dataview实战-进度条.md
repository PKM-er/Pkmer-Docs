---
uid: 20231209162059
title: Dataview 实战 - 进度条
tags: [obsidian, dataview, 进度]
description: 用进度条展示你的读书笔记进度和任务完成进度
author: Huajin
type: other
draft: false
editable: false
modified: 20231209174630
---

# Dataview 实战 - 进度条

## 一、原理

试试把下面这段 html 粘贴到你的 obsidian 库中，你应该能够看到一个进度条

```
<progress value=20 max=100></progress>
```

**HTML** 中的 **`<progress>`** 元素用来显示一项任务的完成进度。进度条的进度是 value/max 的取值，比如上面代码就是 20% 进度的进度条。

## 二、读书笔记进度条

给定两个元数据，可以放在 Properties 属性区域，也可以是行内字段，这里以行内字段举例

```
已读页数:: 42
总页数:: 130
```

把这两行粘贴到你的笔记中，你就为你的笔记添加了两个元数据。（详见 [[11 - 添加元数据至文件]]）

你想在这本书的读书笔记这一页中自动计算并且展示你的阅读进度，你可以直接把他们相除并且转换成小数展示。

```
阅读进度：`=round(this.已读页数/this.总页数 * 100, 2) + "%"`
```

如果觉得只看数字不够直观，可以试试用进度条，我们也可以用字符串的拼接拼出上面讲到的 HTML 的进度条的代码格式

```
`="<progress value="+ this.已读页数 + " max=" + this.总页数 + "></progress>"`
```

> [!tip] 注意
> 由于这两段行内查询都用到了关键字 this，因此只有在与上面两个行内字段同一文件中才会生效。

你读了很多本书，每一本书你都单独为他们记录了总页数和已读页数，你可以这样写：

`````示例代码
```dataview
TABLE "<progress value="+ 已读页数 + " max=" + 总页数 + "></progress>" AS 阅读进度
FTOM "#books"
```
`````

如果结果很多，请谨慎粘贴

如果只看进度条太单调，也可以在进度条后面拼接上百分比，例如

`````示例代码
```dataview
TABLE "<progress value="+ 已读页数 + " max=" + 总页数 + "></progress>" + round(已读页数/总页数*100) + "%" AS 阅读进度
FTOM "#books"
```
`````

![image.png](https://cdn.pkmer.cn/images/20231209164641.png!pkmer)

> [!tip]
> 上图中的 pagesRead 和 totalPages 分别代表已读页数和总页数

## 三、任务进度条

假设你有一些任务

```
- [x] 早上七点起床
- [x] 午睡
- [ ] 喝水
- [ ] 背单词
- [ ] 写作业
```

尝试自动统计有多少完成的任务：

先获得所有的任务，这是一个列表，其中 `file.tasks.completed` 是任务是否完成的布尔列表（[[14 - 隐式字段]]）

`````示例代码
```dataview
TABLE file.tasks
FROM ""
WHERE file = this.file
```
`````

`````示例代码
```dataview
TABLE file.tasks.completed
FROM ""
WHERE file = this.file
```
`````

![image.png](https://cdn.pkmer.cn/images/20231209170300.png!pkmer)

由于这个结果是数组，我们需要用 FLATTEN 拆分结果，然后再使用 GROUP BY 重新根据是否完成成组（[[23 - 操作符]]），一步一步查看结果方便大家理解

- 先添加 FLATTEN

`````示例代码
```dataview
TABLE 完成情况
FROM ""
WHERE file = this.file
FLATTEN file.tasks.completed AS 完成情况
```
`````

![image.png](https://cdn.pkmer.cn/images/20231209170725.png!pkmer)

可以看到，刚刚的一个结果已经变成了五个结果。

- 再用 GROUP BY 成组

`````示例代码
```dataview
TABLE rows.完成情况
FROM ""
WHERE file = this.file
FLATTEN file.tasks.completed AS 完成情况
GROUP BY 完成情况
```
`````

![image.png](https://cdn.pkmer.cn/images/20231209171134.png!pkmer)

这时候，加上一个 `length()` 函数就能已完成和未完成各自的数目，修改一下 FLATTEN 和 GROUP BY 的逻辑，你还可以展示对应的任务有什么

`````示例代码
```dataview
TABLE rows.任务.text, length(rows.任务.text)
FROM ""
WHERE file = this.file
FLATTEN file.tasks AS 任务
GROUP BY 任务.completed
```
`````

![image.png](https://cdn.pkmer.cn/images/20231209171810.png!pkmer)

可是问题是，两行之间的内容我们无法做除法，尝试过后，选择用 dvjs，由于没有写教程，这里先不解释，可以自己尝试理解下，原理还是拼凑出 `<progress ..></progress>`

```
`$="<progress value='" + dv.current().file.tasks.where(t => t.completed).length + "' max='" + (dv.current().file.tasks).length +"'></progress>" + " " + Math.round(((dv.current().file.tasks.where(t => t.completed).length) / (dv.current().file.tasks).length || 0) * 100) + "%"`
```

或者

```
`$= const value = Math.round(((dv.current().file.tasks.where(t => t.completed).length) / (dv.current().file.tasks).length || 0) * 100); "<progress value='" + value + "' max='100'></progress>" + " " + value + "%"`
```

## 四、自定义样式

既然我们的原理是拼凑 HTML，那自然也可以把样式给拼凑上去。尝试下面这段代码在你的读书笔记中（需要有**已读页数**和**总页数**两个元数据）

```
`="<div style='border-style:solid; border-width:1px; border-color:#AAAAAA; display:flex;'>" + "<div align='center' style='padding:5px; min-width:10px; background-color:" + choice(round(this.已读页数/this.总页数*100) < 50, "#d5763f", "#a8c373") + "; width:" +round(this.已读页数/this.总页数*100) + "%; color:black'>" + choice(round(this.已读页数/this.总页数*100) < 30, " </div><div style='padding:5px;'>", "") + round(this.已读页数/this.总页数*100) + "%</div></div>"`
```

对比一下和前面的区别。后者还使用了 `choice()` 函数，使得当进度小于 50% 的时候进度条为橙色 (#d5763f)，大于 50% 的时候变为绿色 (#a8c373)

![image.png](https://cdn.pkmer.cn/images/20231209173720.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20231209173940.png!pkmer)

上面有很多重复的 `round(this.已读页数/this.总页数*100)`，这启发我们在用 dql 查询的时候用 FLATTEN 操作符将他们声明为一个新属性，在 [[Dataview语法实战-FLATTEN操作符进阶示例]] 中我们介绍过这个操作。

`````示例代码
```dataview
TABLE pagesRead, totalPages, 

"<div style='border-style:solid; border-width:1px; border-color:#AAAAAA; display:flex;'>" + 
"<div align='center' style='padding:5px; min-width:10px; background-color:" +
	choice(percent < 50, "#d5763f", "#a8c373") + "; width:" +
	percent + "%; color:black'>" + 
choice(percent < 30, " </div><div style='padding:5px;'>", "") +
percent + "%</div></div>" AS Progress

FROM "#books"
FLATTEN round(100*pagesRead/totalPages) as percent
```
`````

直接复制粘贴是不行的，你需要把上面代码中的 pagesRead 和 totalPages 改为已读页数和总页数，把 FROM 后面的内容改为适合你库的读书笔记的路径

![image.png](https://cdn.pkmer.cn/images/20231209174523.png!pkmer)

当然，你还可以自己通过 "+" 运算符拼凑其他的内容到进度条中。