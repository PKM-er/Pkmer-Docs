---
uid: 20230702112220
title: 基于 Dataview 提取并展示笔记脚注
tags: [dataview, 脚注, footnote]
description: 基于 Dataview 提取并展示笔记脚注
author: windilycloud
type: basic
draft: false
editable: false
modified: 20230723232856
---

# 基于 Dataview 提取并展示笔记脚注

## 功能概述

![image.png](https://cdn.pkmer.cn/images/202307021129235.png!pkmer)

如图，左侧是一个包含 Dataview 查询的笔记，另外右侧两个笔记是需要查询的笔记，这俩笔记包含脚注。

此查询脚本会找到脚注部分，并以列表的形式展现。

## 查询脚本

```js
const pages = dv.pages('"test/footnote"')

async function getFileFootNote(filepath){
	const path = app.vault.getAbstractFileByPath(filepath)
	const content = await app.vault.cachedRead(path)
	const metadataCache = app.metadataCache.getFileCache(path)
	const footnoteSection = metadataCache.sections.filter(section=>section.type==='footnoteDefinition')
	
	if(footnoteSection.length > 0){
		const footnoteStartLine = footnoteSection[0].position.start.line
		const footnoteContent = content.split("\n").slice(footnoteStartLine,).join("\n").replaceAll(/\[\^(\d+)\]:/g, "- ");
		return footnoteContent
	}else{
		return "无"
	}
}


let results = pages.map(async (page)=>{
	return [page.file.link, await getFileFootNote(page.file.path)]
})

Promise.all(results).then(values => {
	dv.table(['文件名','脚注内容'], values)
})
```

注意：

- `test/footnote` 是相对于库的相对路径，留空是扫描全库，这个语法和 Dataview 的 source 语法一致
- 脚注只解析文件最后面的那一块脚注，而不会解析或者解析行内脚注会出错，建议使用 linter 插件将脚注全都移动到文件末尾

## 使用步骤

1. 确保安装了 [[dataview]] 插件，在插件设置里打开 `dataviewjs` 查询功能，复制上述脚本
2. 将上述脚本复制到想要展示的笔记里，代码块记得注明 `dataviewjs`
3. 如果目录输入正确，那就应该能看到效果了