---
uid: 20251227172849
title: 用 QuickAdd 实现跳转到指定标题
tags: []
description: 
author: wtjl
type: other
draft: false
editable: false
modified: 20251230092120
---

# 用 QuickAdd 实现跳转到指定标题

![Pasted image 20251230092116](https://cdn.pkmer.cn/images/Pasted%20image%2020251230092116.png!pkmer)

```js
module.exports = async function showAndGotoHeadings(params) {
    const { quickAddApi = app.plugins.plugins.quickadd.api } = params || {};
    const { headings } = app.metadataCache.getFileCache(app.workspace.getActiveFile());
    if (!headings) return;

    const heading = await quickAddApi.suggester(
        headings.map(h=>`H${h.level}: ${h.heading}`),    // default render
        headings,
        'choose a heading to goto',
        false,
        {renderItem: (h, el) => {
            const row = el.createEl('div');
            const marker = row.createEl('span', {text: 'H'});
            marker.setAttr('style', `font-weight:bold;color:var(--h${h.level}-color)`);
            const level = row.createEl('sub', {text: `${h.level}`});
            level.setAttr('style', `color:gray;`);
            row.createEl('span', {text: `  ${h.heading}`});
        }}
    );
    
    app.workspace.activeLeaf?.view?.currentMode.applyScroll(heading.position.start.line);
}
```

说明:

1. 保存上面的代码到库中的某个位置
2. 在 QuickAdd 中添加 Macro 类型的选项, 点击设置按钮编辑该选项, 在 User Scripts 中选择该脚本并添加.
3. 通过命令或快捷键调出 QuickAdd 选项菜单, 选择刚才创建的 Macro 名称, 回车运行.