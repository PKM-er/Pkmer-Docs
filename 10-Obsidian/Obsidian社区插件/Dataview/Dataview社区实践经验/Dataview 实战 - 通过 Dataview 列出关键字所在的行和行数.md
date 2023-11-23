---
uid: 20231123201314
title: Dataview 实战 - 通过 Dataview 列出标签所在段落内容
tags: [Obsidian, dataview, 标签，tags, 汇总]
description: 列出关健字所在的行内容以及所在行数
author: 我想煞了我
type: other
draft: false
editable: false
---

# Dataview 实战 - 通过 Dataview 列出关键字所在的行和行数

## 应用场景

有些时候，我们想查询一些关键字，可以用 ob 内置的查询，但是不能持久化。用 dataview 的表格就很爽！一目了然，可以放在 Hompage 或者周报内。

## Dataview 列出关键字所在的行和行数

查询`老虎` 在动物标签文件中出现的行和所在行行数。

### 创建文件

我们先创建我们用来查询的文件：

**老虎.md**

```
---
tags: 动物
title: 老虎
date created: 2023年11月23日,星期四,17:01:33
date modified: 2023年11月23日,星期四,17:05:53
---

老虎，威猛独特，丛林之王。独特的斑纹彰显力量，瞬间吸引眼球。象征着野性和勇气，是自然界的霸主。

老虎，金光闪烁的皮毛隐藏着丛林的神秘，眼中透着锐利的光芒。它是草原和森林的统治者，独自行走，体现野性的自由。如同一幅自然的画卷，老虎展现着生命的威严与美丽。
```

**猫.md**

```
---
tags: 动物
title: 猫
date created: 2023年11月23日,星期四,17:01:33
date modified: 2023年11月23日,星期四,17:07:23
---

猫，灵巧的猎手，身姿轻盈。独立而神秘，流动的瞳孔中闪烁着聪慧。软毛细腻，温暖如阳光，是家庭的陪伴者，亦是夜晚的守护者。

猫，优雅的生灵，纤巧的身影在月光下踱步。独立而亲密，眸中蕴含着奇妙的智慧。柔软的毛发承载了温馨，是心灵的慰藉，夜晚的安慰。

在丛林深处，老虎和小猫成为意外的伙伴。老虎庇护着小猫，共同漫游。老虎威猛，小猫灵巧。他们相互学习，老虎变得温和，小猫变得勇敢。这对特殊的朋友展现了不同生命间的默契与理解，教人懂得，即便体型迥异，心灵却可以相通。
```

**狮子.md**

```
---
tags: 动物
title: 狮子
date created: 2023年11月23日,星期四,17:01:33
date modified: 2023年11月23日,星期四,17:16:05
---

狮子，草原之王，壮美的鬃毛如金色火焰。狮吼震天，威武雄壮。雄狮领导着狮群，象征着权威和家族的荣耀。

狮子，草原霸主，骄傲地巡视领地。雄壮的体魄与黄金般的鬃毛共舞，呈现着自然之王的荣耀。狮吼激荡风云，豪情万丈。

在草原上，老虎和狮子曾是竞争对手。一天，他们面对共同的威胁，决定合作。老虎展现出卓越的策略，狮子表现出强大的力量。他们团结一致，共同克服困境，最终变成了互相尊重的朋友。这个故事告诉我们，合作与团结可以超越竞争，创造出更强大的力量。
```

### 代码查询

````
```dataviewjs
let files = dv.pages('#动物').where(p=>p.file.path != dv.current().file.path)

// 调用函数
extractKeywords(['老虎'],files)

async function extractKeywords(keywordArr,files) {
	let paths = files.map(p=>p.file.path)
	files = app.vault.getMarkdownFiles().filter(p=>paths.includes(p.path))
	let values = []
	let num = 0
	for(let file of files) {
		let content = (await app.vault.cachedRead(file)).split('\n')
		console.log("===content===")
		console.log(content)
		console.log("===content===")
		keywordArr.forEach((k)=>{
			content.forEach((element,index)=>{
      	if (element.includes(k)){
      		values.push([`[[${file.basename}]]`,"**【" + String(index+1) + "】**" + element.trim().replace(k, "=="+k+"==")])
      	}
			})
		})
	}
	dv.table(["file", "所在行"], values)
}
```
````

上面的代码执行结果：

![[Pasted image 20231123195536.png]]

我们可以看到：

- 搜索到的关键字是高亮的。
- 【12】代表的这一行在文件中的行数。
- file 的文件连接，点击就能跳转到指定文件。

## FAQ

### 如何自定义查询范围

根据 dataview 语法来写自己要查询的文件范围。

````
```dataviewjs
let files = dv.pages('#动物').where(p=>p.file.path != dv.current().file.path)
```
````

- `dv.page('').where(p=>p.file.path != dv.current().file.path)`：除了当前文件的其他所有文件
- `dv.pages('#动物')`：查询带有动物标签的文件
- 更多内容请看 https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvpagessource

### 如何查询多个关健字

修改下面的函数的数组，比如你要查老虎和猫，就可以这么写 `extractKeywords(['老虎','猫'],files)`。

````
```dataviewjs
// 调用函数
extractKeywords(['老虎'],files)
```
````

### 如何修改查询结果样式

````
```dataviewjs
values.push([`[[${file.basename}]]`,"**【" + String(index+1) + "】**" + element.trim().replace(k, "=="+k+"==")])
```
````

- 加粗就是把 `"=="+k+"=="` 改成 `"**"+k+"**"`。
- 修改行号样式`【】`改成`（）`就是把 `"**【" + String(index+1) + "】**"` 改成 `"**(" + String(index+1) + ")**"`。
