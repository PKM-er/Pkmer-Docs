---
uid: 20240331155510
title: Dataview 实战 - 展示特定文件夹内未完成任务并且支持子任务图片展示
tags: [dataview]
description: 
author: 是明导么
type: tutorail
draft: false
editable: false
modified: 20240331161359
---

# Dataview 实战 - 展示特定文件夹内未完成任务并且支持子任务图片展示

## 原始 dataview 语句结果如下

```
task 
from "测试任务文件夹"
where !completion
```

结果如下。我么发现主任务与子任务的图片都无法正常显示。

![[Dataviewjs 展示特定文件夹内未完成任务并且支持子任务图片展示 1.png]]

## Dataviewjs 语句修改实用方法

- 将 Dataviewjs 语句中“目标文件夹”替换为你希望检索的文件夹，“附件位置文件夹”替换为你存放附件的文件夹（注：后面的/不要删掉）。完成后你就可以实现 dataview 把 task 列举出来同时支持子任务的图片显示。下图方便理解。
	- ![[Dataviewjs 展示特定文件夹内未完成任务并且支持子任务图片展示 3.png]]

### Dataviewjs 语句结果如下

- 可以看到 Dataviewjs 语句处理后图片可以正常显示。
	- ![[Dataviewjs 展示特定文件夹内未完成任务并且支持子任务图片展示 2.png]]

#### 代码内容

```dataviewjs语句
let tasks = dv.pages('"测试任务文件夹"').file.tasks
.where(t => !t.completed);
dv.taskList(tasks);

function showPic() {
let imgSpans = document.getElementsByClassName("internal-embed");
for(let i = 0; i < imgSpans.length; i++)
{
	let outlinkname = imgSpans[i].innerHTML;
	if(outlinkname.endsWith(".jpg")||outlinkname.endsWith(".png")){
		let src = app.vault.adapter.getResourcePath("附件/"+outlinkname);
		let img = "<img src=\""+src+"\">";
		imgSpans[i].innerHTML = img;
	}
}
}
setTimeout(showPic, 200)
```
