---
uid: 20240108172743
title: Dataview 实战 - 查找重名文件
tags: [dataview]
description: 利用dv查找库中的重名文件
author: calmwaves
type: other
draft: false
editable: false
modified: 20240108172905
---

# Dataview 实战 - 查找重名文件

## 效果
![image.png](https://cdn.pkmer.cn/images/20240108173703.png!pkmer)


## 代码
```dataviewjs
// 假设您的对象数组为 data
const data = dv.pages();

let countMap = {}; // 用于存储计数的对象
let duplicates = []; // 用于存储重复元素的数组

// 遍历对象数组
data.forEach((element) => {
  let fileName = element.file.name;
  let filePath = element.file.path;

  // 计数
  if (countMap[fileName]) {
    countMap[fileName].count++;
    countMap[fileName].paths.push(filePath);
  } else {
    countMap[fileName] = { count: 1, paths: [filePath] };
  }
});

let dup=0//这是发现了几个dup的name
let flag =0//有重名文件的标志
for (const key in countMap) {
    const element = countMap[key];
    if (element.count > 1) {
      dup++;
      if(dup>0&&flag==0){dv.paragraph("==有重名文件==");flag=1}
      dv.span(`《${key}.md》出现了${element.count}次`);
      const pathstolink = element.paths.map(path => `[[${path}]]`);
      dv.list(pathstolink);

    }
}
if(dup==0){
dv.span("没有重名文件")
}
```