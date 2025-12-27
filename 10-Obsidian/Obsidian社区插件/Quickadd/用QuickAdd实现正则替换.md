---
uid: 20251224170436
title: 用QuickAdd实现正则替换
tags: []
description: 
author: wtjl
type: other
draft: false
editable: false
modified: 20251227094050
---

# 用 QuickAdd 实现正则替换

```js
function replace(rules, editor) {
    if (!editor) return;
    for (const rule of rules) {
        const { pattern, replacement, useRegex } = Array.isArray(rule) 
            ? { pattern: rule[0], replacement: rule[1], useRegex: rule[2] }
            : rule || {};
        
        if (!pattern) continue;
        
        const selection = editor.getSelection();
        const text = selection || editor.getValue();
        if (!text) continue;
        
        try {
            const newText = /^(true|yes|y|1|是)$/i.test(useRegex?.trim())
                ? text.replace(new RegExp(pattern, "g"), replacement || "")
                : text.replaceAll(pattern, replacement || "");
            
            selection
                ? editor.replaceSelection(newText)
                : editor.setValue(newText);
            console.log(`Replace "${pattern}" success.`);
        } catch (error) {
            console.error(`Replace "${pattern}" failed:`, error);
        }
    }
}

async function start(params, settings) {
    const { quickAddApi = app.plugins.plugins.quickadd.api } = params || {};

    let rules = (() => {try {return JSON.parse(settings?.rules || "[]");} catch {return []}})();

    if (!rules?.length) {
        const inputs = await quickAddApi?.requestInputs([
            { id: 'pattern', label: "查找", type: "text" },
            { id: 'replacement', label: "替换", type: "text" },
            { id: 'useRegex', label: "正则", type: "dropdown", options: ['是', '否'], defaultValue: '否' },
        ]);
        rules = [inputs];
    }
    
    replace(rules, app.workspace.activeLeaf?.view?.editor);
}

module.exports = {
    entry: start,
    settings: {
        name: '',
        author: '',
        options: {
            rules: {
                type: "textarea",
                defaultValue: "[]",
                placeholder: '[["pattern", "replacement", "useRegex"]]',
            }
        }
    }
};
```

说明:

1. 保存上面的代码到库中的某个位置
2. 在 QuickAdd 中添加 Macro 类型的选项, 点击设置按钮编辑该选项, 在 User Scripts 中选择该脚本并添加 (和设置).
3. 通过命令或快捷键调出 QuickAdd 选项菜单, 选择刚才创建的 Macro 名称, 回车运行.
4. 如果第二步末尾对脚本进行了设置, 会优先按设置项执行, 否则会弹窗提示输入.