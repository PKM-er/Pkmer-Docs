---
uid: 20231213114733
title: Obsidian 开发案例：30 分钟和 GPT 写一个 OB 插件
tags: [Obsidian, 插件开发]
description: 使用ChatGPT开发一个Obsidian插件
author: Bon
type: other
draft: false
editable: false
modified: 20231213153205
---

# Obsidian 开发案例：30 分钟和 GPT 写一个 OB 插件

> [!note] 前言
> 如果说你想要编写第一个 Obsidian 插件，使用 ChatGPT 也许是最好、最快的选择。

## 开发背景

昨天晚上，我因为本职工作的原因，我发现 Obsidian 中只能对 Markdown 的标准有序列表进行自增，例如：

```markdown
1. 这是有序列表1
2. 这是有序列表2
3. 这是有序列表3
```

也不存在有插件支持以下的几种形式的自增：

```markdown
一、这是有序列表1
二、这是有序列表2
三、这是有序列表3
```

或者

```markdown
（1）、这是有序列表1
（2）、这是有序列表2
（3）、这是有序列表3
```

于是，我找来了 ChatGPT，让它临时给我开发一个小插件来解决这个问题。如果你之前了解过 Obsidian 插件的编写，那你可能会知道和编辑器相关的插件都是基于 Codemirror 6 实现的，以下是我与 ChatGPT 对话的全流程。

1. [确定需求--CodeMirror 插件自动序号 ](https://pkmer.cn/_release/attach/CodeMirror%20%E6%8F%92%E4%BB%B6%E8%87%AA%E5%8A%A8%E5%BA%8F%E5%8F%B7.html)
2. [TypeScript 类型和注释](https://pkmer.cn/_release/attach/TypeScript%20%E7%B1%BB%E5%9E%8B%E5%92%8C%E6%B3%A8%E9%87%8A.html)
3. [括号列表支持更新](https://pkmer.cn/_release/attach/%E6%8B%AC%E5%8F%B7%E5%88%97%E8%A1%A8%E6%94%AF%E6%8C%81%E6%9B%B4%E6%96%B0.html)

而最开始，你需要先确定自己的所期望的流程：

```markdown
你是一名 CodeMirror 技术专家，请你根据以下的需求进行插件编写： 

1、当用户在有序列表中 newline 时； 
2、下一行的开始会自动增加有序的下一个序号； 
3、且下一个序号会匹配第一行的模式，因为存在 A、B、C 的模式的序号，也存在 a. b. c. 的模式的需要，还会存在罗马数字开始的序号，也会存在中文数字开始的序号； 匹配了第一行的模式后，自动在序号数组中寻找下一个序号，然后填充到 newLine 的开始位置； 

注意，这个实现可以利用 Transaction 和 Changes 来直接插入到其中
```

我们的这个插件的核心就是能够对非标准的有序列表进行自增，而详细的功能实现流程也是为了让 ChatGPT 能够读懂我们的核心需求。

然后 ChatGPT 将我们的功能进一步分析得到：

> [!note] Prompt
> ### 1. 识别当前行的有序列表模式
>
> - 监听用户的回车键事件。
> - 检查当前行是否为有序列表的一部分。这可以通过正则表达式来判断，例如识别行首的序号模式。
>
> ### 2. 确定下一个序号
>
> - 根据第一行的序号模式，计算下一个序号。
> - 这可能涉及到识别多种模式，如阿拉伯数字、字母（大写或小写）、罗马数字和中文数字。
> - 实现一个函数来根据当前序号推断下一个序号。
>
> ### 3. 使用 Transaction 和 Changes 插入新的序号
>
> - 创建一个 `Transaction` 来应用更改。
> - 使用 `Changes` 对象在新行的开始位置插入计算出的下一个序号。
> - 确保新插入的序号保持与前一行相同的格式。
>
> ### 4. 处理特殊情况
>
> - 考虑用户可能会删除列表的某一行，这种情况下需要更新后续所有行的序号。
> - 处理跨越多行文本的情况。

然后，ChatGPT 会给出第一次的实现，但是由于仅仅需求的分析就已经占满了回复的字数长度，所以它只浅浅给出了大纲似的回答。而后我逐步要求它根据要求 1、2，以及根据要求 3 来分别改进内容，最后要求它给出要求 4 的相关代码。

本来我打算在聊天线程中直接要求它将以上的所有代码进行总结，但是，我担心它单次总结后就丢失了绝大部分上边已经回答过的细节。所以最后我将全文拷贝了一次，找来 GPT 4-1101-Preview 模型来询问且要求总结，使用了以下很简单的 Prompt：

```
你是一名 Codemirror 6 专家，请根据以下对话，整理成一个完整的 Codemirror 6 插件的实现：
```

得到了一个完整的插件代码，但是它给出的只是以下的没有合理注释，且存在部分缺失的代码：

```javascript
// 以下是部分代码
// 函数：识别当前行的有序列表模式
function identifyPattern(lineText) {
    const patterns = {
        arabic: /^\d+\./, // 例如 "1."
        uppercaseLetter: /^[A-Z]\./, // 例如 "A."
        lowercaseLetter: /^[a-z]\./, // 例如 "a."
        romanNumeral: /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\./, // 罗马数字
        chineseNumeral: /^[\u4e00-\u9fa5]+\./ // 中文数字
    };

    for (let type in patterns) {
        if (patterns[type].test(lineText)) {
            return type;
        }
    }
    return null;
}

// 函数：根据当前序号计算下一个序号
function getNextNumber(currentNumber, patternType) {
    switch (patternType) {
        case 'arabic':
            return parseInt(currentNumber) + 1 + '.';
        case 'uppercaseLetter':
            return String.fromCharCode(currentNumber.charCodeAt(0) + 1) + '.';
        case 'lowercaseLetter':
            return String.fromCharCode(currentNumber.charCodeAt(0) + 1) + '.';
        // TODO: 处理罗马数字和中文数字的转换
        // ...
        default:
            return null;
    }
}
```

但是，到此我已经可以开始将它移入到一个插件模板去了，然后，我初次尝试了以后，发现它并没有正确生成我想要的序号，紧接着，我发现是它最开始采用的方案出现了误差，利用 `Keymap.of` 的方式监控 Enter 会被 Obsidian 拦截。更优的方式是采用 ViewPlugin（当然中间我还打算使用 Statefield 的方式，但是 State field 的方式更偏向于更新当前的页面的状态，而不是用于插入新的内容），关于两者的不同，官方的开发文档其实有说明：[ViewPlugin](https://docs.obsidian.md/Plugins/Editor/View+plugins) 和 [State field](https://docs.obsidian.md/Plugins/Editor/State+fields)。

于是，我开始让它分别按照 State field 和 ViewPlugin 的形式进行插件编写，而后，我依次在 IDE 中用 Typescript 验证了他们的可行性。注意，当使用 ChatGPT 编写 Typescript 插件的时候，你一定要记得让它将其中的类型补充完整，这种情况下当你将对应的代码移入 IDE 的时候，一旦有存在的问题，都会警示你，而这种警示已经是一种最快的验证方式。

此前我创建过一个极简的插件模板：[GitHub - Quorafind/Obsidian-Custom-Plugin-Starter: A custom template for personal use. Added github workflow.](https://github.com/Quorafind/Obsidian-Custom-Plugin-Starter)

当你在 Vscode 或者 WebStorm 中将其 Git Clone 下来后，你可以在运行 `npm install` 以后直接开始插件编写，你需要建立一个独立的 `myfunction.ts` 文件，然后将上述的所有代码拷贝进去，当你出现依赖、类型问题时，IDE 会合理提醒你需要进行修改。

在代码就绪后，你会（第二个链接和第三个链接都是解决相关问题的）突然发现这个插件并没有按你预期地去更新序号，例如当在行中间进行更新的时候，它并不会在下一行的起始位置插入新的序号；又例如当当前行除了序号以外没有任何的内容时，它也没有很精明地去删除当前行内容。

在上述地基础上，你需要反复地去让 ChatGPT 进行修改，注意，这里上文所说的注释就起到了一定的作用，你可以基于每个函数的作用，来推敲究竟是哪个函数出了问题；最后得到了以下的代码（在文末）：

## 总结

可以说，用 ChatGPT 来编写 Obsidian 是一个非常愉快的过程，除了部分 BUG 需要自己去理解以及读懂问题出在哪里以外，它无愧于最好且最尽责的代码老师。

## 相关代码【安装好依赖后，运行即可】

> `main.ts`

```javascript
import { Plugin } from 'obsidian';  
import { enterPressPlugin } from "./line";  
  
export default class MyPlugin extends Plugin {  
  
    async onload() {  
       this.registerEditorExtension(enterPressPlugin());  
    }  
  
    onunload() {  
  
    }  
  
}
```

> `line.ts`

```javascript
import { EditorView, keymap, ViewPlugin, ViewUpdate } from "@codemirror/view";  
import { ChangeSet, ChangeSpec, EditorSelection, EditorState, StateField, Transaction } from "@codemirror/state";  
  
type PatternType = 'arabic' | 'uppercaseLetter' | 'lowercaseLetter' | 'romanNumeral' | 'chineseNumeral';  
  
/**  
 * 识别给定文本行的列表模式。  
 * @param lineText 要识别的文本行。  
 * @returns 返回识别出的列表模式类型，如果没有匹配，则返回 null。  
 */  
function identifyPattern(lineText: string): PatternType | null {  
    const patterns: { [key in PatternType]: RegExp } = {  
        arabic: /^\d+[\.|、]/,  
        uppercaseLetter: /^[A-Z][\.|、]/,  
        lowercaseLetter: /^[a-z][\.|、]/,  
        romanNumeral: /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})[\.|、]/,  
        chineseNumeral: /^[\u4e00-\u9fa5]+[\.|、]/  
    };  
  
    for (let type in patterns) {  
        if (patterns[type as PatternType].test(lineText)) {  
            return type as PatternType;  
        }  
    }  
    return null;  
}  
  
/**  
 * 根据当前编号和模式类型获取下一个编号。  
 * @param currentNumber 当前编号。  
 * @param patternType 列表模式类型。  
 * @returns 返回计算后的下一个编号，如果无法处理则返回 null。  
 */  
function getNextNumber(currentNumber: string, punctuation: string, patternType: PatternType): string | null {  
    switch (patternType) {  
        case "arabic":  
            return parseInt(currentNumber) + 1 + punctuation;  
        case "uppercaseLetter":  
            return String.fromCharCode(currentNumber.charCodeAt(0) + 1) + punctuation;  
        case "lowercaseLetter":  
            return String.fromCharCode(currentNumber.charCodeAt(0) + 1) + punctuation;  
        case "romanNumeral":  
            let arabicNum = romanToArabic(currentNumber);  
            return arabicToRoman(arabicNum + 1) + punctuation;  
        case "chineseNumeral":  
            let arabicNumChinese = chineseToArabic(currentNumber);  
            return arabicToChinese(arabicNumChinese + 1) + punctuation;  
        default:  
            return null;  
    }  
}  
  
// 罗马数字转阿拉伯数字  
function romanToArabic(roman: string): number {  
    const romanNumerals: { [key: string]: number } = {  
        M: 1000, CM: 900, D: 500, CD: 400, C: 100,  
        XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5,  
        IV: 4, I: 1  
    };  
    let arabic = 0;  
    let i = roman.length;  
    while (i--) {  
        if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {  
            arabic -= romanNumerals[roman[i]];  
        } else {  
            arabic += romanNumerals[roman[i]];  
        }  
    }  
    return arabic;  
}  
  
/**  
 * 将阿拉伯数字转换为罗马数字。  
 * @param number 要转换的阿拉伯数字。  
 * @returns 转换后的罗马数字字符串。  
 */  
function arabicToRoman(number: number): string {  
    const romanNumerals = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};  
    let roman = '';  
    for (let key in romanNumerals) {  
        // @ts-ignore  
        while (number >= romanNumerals[key]) {  
            roman += key;  
            // @ts-ignore  
            number -= romanNumerals[key];  
        }  
    }  
    return roman;  
}  
  
/**  
 * 将单个中文数字字符转换为相应的阿拉伯数字。  
 * @param chinese 要转换的单个中文数字字符。  
 * @returns 转换后的阿拉伯数字，如果无法识别则返回 0。  
 */  
function chineseToArabic(chinese: string): number {  
    const chineseNumerals: { [key: string]: number } = {  
        '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,  
        '六': 6, '七': 7, '八': 8, '九': 9, '十': 10  
    };  
    return chineseNumerals[chinese] || 0;  
}  
  
/**  
 * 将阿拉伯数字转换为中文数字字符。  
 * @param number 要转换的阿拉伯数字。  
 * @returns 转换后的中文数字字符，如果无法识别则返回空字符串。  
 */  
function arabicToChinese(number: number): string {  
    const chineseNumerals = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];  
    return chineseNumerals[number] || '';  
}  
  
function calculateNewCursorPosition(forEnterChanges: ChangeSpec[], state: EditorState): number {  
    // 取最后一个更改的结束位置作为新的光标位置  
    let lastChangeEnd = 0;  
    if(forEnterChanges.length === 0) return lastChangeEnd;  
    if(forEnterChanges.length === 1) {  
        if('insert' in forEnterChanges[0] && (forEnterChanges[0].insert as string)?.trim() === '') {  
            return (forEnterChanges[0] as any).from  || 0;  
        }  
    }  
  
  
    forEnterChanges.forEach(change => {  
        if ('from' in change && 'to' in change) {  
            lastChangeEnd = (change?.to || 0) + (change?.insert?.length as number) || 0;  
        }  
    });  
  
    return lastChangeEnd;  
}  
  
/**  
 * 检测并处理回车字符。  
 * @param transaction 当前事务。  
 * @param state 编辑器状态。  
 * @returns 更新后的状态。  
 */  
function checkForEnter(transaction: Transaction, state: EditorState) {  
    const changes: ChangeSpec[] = [];  
    transaction.changes.iterChanges((fromA, toA, fromB, toB, inserted) => {  
        let text = inserted.toString();  
        if (text.includes('\n')) { // 检测到回车  
            const currentLineStart = state.doc.lineAt(fromA).from;  
            const currentLineEnd = state.doc.lineAt(fromA).to;  
            const behindLineStart = state.doc.lineAt(toB).from;  
            const behindLineEnd = state.doc.lineAt(toB).to;  
  
            const behindLineText = state.doc.sliceString(behindLineStart, behindLineEnd);  
            const currentLineText = state.doc.sliceString(currentLineStart, currentLineEnd);  
  
            if(currentLineText.trim() === '') return; // 如果当前行为空行，不进行处理  
            const reg = /^([\(\[\【\（])?([^\）\]\】\)]*)([\）\]\】\)])?([\.、](.*))/;  
  
  
            if(new RegExp(reg, 'gm').exec(currentLineText)?.[5]?.trim() === '' && behindLineText.trim() === '') {  
                // 因为现在是第二次回车，但是除了标号以外的内容为空，所以需要删除这一行  
                const removePosStart = state.doc.lineAt(fromA).from; // 新行的开始位置  
                const removePosEnd = state.doc.lineAt(fromA).to + 1; // 新行的结束位置  
                const tChanges = { from: removePosStart, to: removePosEnd, insert: '' };  
  
                changes.push(tChanges);  
                return;  
            }  
  
            // 检测行首的成对括号  
            let bracketPattern = new RegExp(reg, 'gm'); // 检测成对括号  
            const bracketMatch = bracketPattern.exec(currentLineText);  
            const hasBrackets = bracketMatch !== null && bracketMatch[3] != undefined;  
            const textWithoutBrackets = hasBrackets ? currentLineText.replace(bracketPattern, '$2$4') : currentLineText;  
  
            let pattern = identifyPattern(textWithoutBrackets);  
            if(pattern === 'arabic' && !hasBrackets) return;  
            if (pattern) {  
                const currentNumber = textWithoutBrackets.match(/^[\w\u4e00-\u9fa5]+/)?.[0]; // 提取序号部分  
                const punctuation = textWithoutBrackets.match(/^[\w\u4e00-\u9fa5]+[\.\、]/)?.[0].slice(-1) || '.';  
                if (!currentNumber) return; // 如果没有序号，不进行处理  
                let nextNumber = getNextNumber(currentNumber, punctuation, pattern);  
  
                if (nextNumber !== null) {  
                    // 如果存在成对括号，还原它们  
                    nextNumber = hasBrackets && bracketMatch[1] !== undefined ? ((bracketMatch[1] + nextNumber.slice(0, -1) + bracketMatch[3]) + nextNumber.slice(-1)) : nextNumber;  
  
                    const insertPosition = state.doc.lineAt(toB).from; // 新行的开始位置  
                    const tChanges = { from: insertPosition, to: insertPosition, insert: nextNumber + (punctuation === "、" ? "" : " ") };  
  
                    changes.push(tChanges);  
                }  
            }  
        }  
    });  
    return changes;  
}  

/**  
 * 注册成 Codemirror 插件。    
 * @returns View plugin 插件实例。  
 */ 
export const enterPressPlugin = () => {  
    return ViewPlugin.fromClass(  
        class {  
            update(update: ViewUpdate) {  
                if (!update.docChanged) return;  
                if (  
                    update.transactions.some(  
                        (tr) =>  
                            tr.annotation(Transaction.userEvent) === "undo" ||  
                            tr.annotation(Transaction.userEvent) === "redo" ||  
                            tr.annotation(Transaction.userEvent) === "plugin-update" ||  
                            tr.annotation(Transaction.userEvent) === "set",  
                    )  
                )  
                    return;  
  
                if (update.docChanged) {  
                    update.transactions.forEach((tr) => {  
                        if (tr.docChanged) {  
                            const forEnterChanges: ChangeSpec[] = checkForEnter(tr, update.view.state);  
                            if(forEnterChanges.length === 0) return;  
  
                            if (forEnterChanges.length > 0) {  
                                setTimeout(() => {  
                                    const newCursorPosition = calculateNewCursorPosition(forEnterChanges, update.view.state);  
  
                                    const tr = update.view.state.update({  
                                        changes: ChangeSet.of(forEnterChanges, update.view.state.doc.length),  
                                        selection: EditorSelection.cursor(newCursorPosition)  
                                    });  
                                    update.view.dispatch(tr);  
                                });  
                            }  
                        }  
                    });  
                }  
            }  
        }  
    );  
};
```

## 写在最后

编译后的成品插件 obsidian-new-list 请在 Pkmer 官方 Q 群获取。
