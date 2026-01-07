---
uid: 20251224170436
title: 用 QuickAdd 实现正则替换
tags: []
description: 
author: wtjl
type: other
draft: false
editable: false
modified: 20251231050340
---

# 用 QuickAdd 实现正则替换

![PixPin_2025-12-31_04-55-26](https://cdn.pkmer.cn/images/PixPin_2025-12-31_04-55-26.gif!pkmer)

```js
let Notice;

function applyRule(rule, text) {
    if (!text || !rule) return text;
    
    const { pattern, replacement, useRegex } = Array.isArray(rule) 
        ? { pattern: rule[0], replacement: rule[1], useRegex: rule[2] }
        : rule || {};

    if (!pattern) return text;

    try {
        const isRegex = /^(true|yes|y|1|是)$/i.test(String(useRegex || "").trim());
        const newText = isRegex
            ? text.replace(new RegExp(pattern, "gm"), replacement || "")
            : text.replaceAll(pattern, replacement || "");
        console.debug(`Replace "${pattern}" success.`);
        return newText;
    } catch(error) {
        console.error(`Replace "${pattern}" failed:`, error);
        return text;
    }
}

async function replaceInFile(rules, file) {
    let content = await app.vault.read(file);
    
    for (const rule of rules) {
        if (!content) break;
        content = applyRule(rule, content);
    }
    await app.vault.modify(file, content);
}

async function globalReplace(rules, filter) {
    const files = app.vault.getMarkdownFiles();
    for (const file of files) {
        if(!filter || filter(file))
            await replaceInFile(rules, file);
    }
    new Notice(`Finished.`, 3000);
}

function replaceByEditor(rules, editor) {
    if (!editor) return;
    const selection = editor.getSelection();
    let text = selection || editor.getValue();
    
    for (const rule of rules) {
        if (!text) break;
        text = applyRule(rule, text);
    }
    selection ? editor.replaceSelection(text) : editor.setValue(text);
    new Notice(`Finished.`, 3000);
}

async function start(params, settings) {
    const { obsidian, quickAddApi = app.plugins.plugins.quickadd.api } = params || {};
    ({ Notice } = obsidian);

    let ruleset;
    try {
        ruleset = {scope: settings.scope, rules: JSON.parse(settings.rules || "[]")}
    } catch (error) {}

    if (!ruleset?.rules?.length) {
        const inputs = await quickAddApi?.requestInputs([
            { id: 'pattern', label: "查找", type: "text" },
            { id: 'replacement', label: "替换", type: "text" },
            { id: 'useRegex', label: "正则", type: "dropdown", options: ['yes', 'no'], defaultValue: 'no' },
            { id: 'scope', label: "范围", type: "dropdown", options: ['file', 'folder', 'vault'], defaultValue: 'file' },
        ]);
        ruleset = {scope: inputs.scope, rules: [inputs]}
    }

    const {scope, rules} = ruleset;
    switch (scope) {
        case 'file':
            replaceByEditor(rules, app.workspace.activeLeaf?.view?.editor);
            break;
        case 'folder':
            const currentFolder = app.workspace.getActiveFile().parent.path;
            await globalReplace(rules, f=> f.parent.path === currentFolder);
            break;
        case 'vault':
            await globalReplace(rules);
            break;
        default:
            break;
    }
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
            },
            scope: {
                type: "dropdown",
                defaultValue: "file",
                options: ['file', 'folder', 'vault']
            }
        }
    }
}
```

说明:

1. 保存上面的代码到库中的某个位置
2. 在 QuickAdd 中添加 Macro 类型的选项, 点击设置按钮编辑该选项, 在 User Scripts 中选择该脚本并添加 (和设置).
3. 通过命令或快捷键调出 QuickAdd 选项菜单, 选择刚才创建的 Macro 名称, 回车运行.
4. 如果第二步末尾对脚本进行了设置, 会优先按设置项执行, 否则会弹窗提示输入.

>[!important] 重要!
> **不保证代码没有问题, 运行之前请做好备份, 造成损失概不负责!**