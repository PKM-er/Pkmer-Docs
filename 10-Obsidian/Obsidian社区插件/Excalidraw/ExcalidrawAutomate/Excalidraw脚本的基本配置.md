---
uid: 20231110205703
title: Excalidraw 脚本的基本配置
tags:
  - Excalidraw
  - Excalidraw脚本
  - 开发者指南
description: Excalidraw脚本的基本配置
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231110205919
---

# Excalidraw 脚本的基本配置

## EA 脚本的配置

将 ==ExcalidrawAutomate(简称：EA)== 脚本放置在 Excalidraw 设置中定义的文件夹中。脚本文件夹可能不是您 Vault 的根文件夹。

![image](https://cdn.pkmer.cn/images/145673547-b4f57d01-3643-40f9-abfd-14c3bfa5ab93.png!pkmer)

> EA 脚本可以是 Markdown 文件 (.md)、纯文本文件 (.txt) 或 (.js) 文件。唯一的要求是它们必须包含有效的 JavaScript 代码。

![image](https://cdn.pkmer.cn/images/145673674-bb59f227-8eea-43dc-83b8-4d750e1920a8.png!pkmer)

您可以通过 Obsidian 命令面板从 Excalidraw 访问您的脚本。

![image](https://cdn.pkmer.cn/images/145673652-6b1713e2-edc8-4bc8-8246-3f8df8a4b273.png!pkmer)

这将使您能够像其他 Obsidian 命令一样为您喜欢的脚本分配快捷键。

![image](https://cdn.pkmer.cn/images/145673633-83b6c969-cead-429b-9721-fd047f980279.png!pkmer)

## 脚本开发基本设置

> [!caution]+
> 请注意，这些代码片段是用于 Excalidraw 脚本开发的示例，并且需要在 Excalidraw 环境中运行。

Excalidraw 脚本将自动接收两个对象：

- `ea`：脚本引擎将初始化 `ea` 对象，包括将活动视图设置为调用脚本的视图。
	- 即自动加载：`ea = ExcalidrawAutomate;`
	- ea 的属性和命令参考 [[Excalidraw的样式-属性-功能简介]]；
- `utils`：从 [QuickAdd](https://github.com/chhoumann/quickadd/blob/master/docs/docs/QuickAddAPI.md) 中借用了一些在 utils 上公开的函数，尽管目前并不是所有 QuickAdd 实用函数都在 Excalidraw 中实现。

### utils 目前可用的函数如下所示

#### 接受输入信息 utils.inputPrompt()

- `inputPrompt: (header: string, placeholder?: string, value?: string, buttons?: [{caption:string, action:Function}])`
	- 打开一个提示框，询问输入。返回一个包含输入的字符串。
	- inputPrompt 是异步函数，需要用 await 。
	- `buttons.action(input: string) => string`。按钮操作将接收当前输入字符串。如果操作返回 null，则输入不会改变。如果操作返回一个字符串，则 inputPrompt 将解析为此值。

```typescript
let fileType = "";
const filename = await utils.inputPrompt (
  "新文档的文件名",
  "占位符",
  "默认文件名.md",
  [
    {
      caption: "Markdown",
      action: ()=>{fileType="md";return;}
		},
    {
      caption: "Excalidraw",
      action: ()=>{fileType="ex";return;}
    }
  ]
);

```

![Pasted image 20231102223012](https://cdn.pkmer.cn/images/Pasted%20image%2020231102223012.png!pkmer)

#### 提供建议框 utils.suggester()

- `suggester: (displayItems: string[], items: any[], hint?: string, instructions?:Instruction[])`
- 打开一个建议框。显示 displayItems 并返回 ` items[] ` 中对应的项。
- 您需要等待 suggester 的结果，请使用 await utils.suggester()。
- 如果用户取消（ESC），suggester 将返回 `undefined`

> [!tip]+ hint(提示) 和 instruction(介绍) 是可选的。

```js
let align = ["left", "right", "center"];
align = await utils.suggester(align, align, "请选择对齐形式", align)
```

![Pasted image 20231102222640](https://cdn.pkmer.cn/images/Pasted%20image%2020231102222640.png!pkmer)

> [!tip]+ 如果想实现 QuickAdd 的其他窗口可以在脚本中调用 QuickAdd 的 API
> 官方文档：[QuickAddAPI.md](https://github.com/chhoumann/quickadd/blob/master/docs/docs/QuickAddAPI.md#wideinputprompt-header-string-placeholder-string-value-promisestring)
> 调用 API：`const quickddApi =this.app.plugins.plugins.quickadd.api;`
>测试命令：`let inputText = await quickddApi.wideInputPrompt("标题","占位符")`

## 配置插件设置 ea.getScriptSettings()

- 脚本可以有设置。这些设置存储为插件设置的一部分，用户还可以通过 Obsidian 插件设置窗口更改这些设置。
- 您可以使用 `ea.getScriptSettings()` 访问活动脚本的设置，并使用 `ea.setScriptSettings(settings:any)` 存储设置值。
- 在插件设置中显示脚本设置的规则如下：
  - 如果设置是简单的文字（布尔值、数字、字符串），则在设置中将按原样显示。设置的名称将是值的键。

```javascript
ea.setScriptSettings({ 
  "value 1": true, 
  "value 2": 1,
  "value 3": "my string"
})
```

![](https://cdn.pkmer.cn/images/SimpleSettings.jpg!pkmer)

- 如果设置是一个对象 (Object)，并遵循以下结构，则还可以添加描述 (description) 和值 (value)。值 (value) 也可以使用 `hidden` 键隐藏。

```javascript
ea.setScriptSettings({
  "value 1": {
    "value": true,
    "description": "This is the description for my boolean value"
  },
  "value 2": {
    "value": 1,
    "description": "This is the description for my numeric value"
  },
  "value 3": {
    "value": "my string",
    "description": "This is the description for my string value",
    "valueset": ["allowed 1","allowed 2","allowed 3"]
  },
  "value 4": {
    "value": "my value",
    "hidden": true
  }        
});
```

![](https://cdn.pkmer.cn/images/ComplexSettings.jpg!pkmer)

> [!example]+ 为防止覆盖，如果存在则跳过
>
> ```js
> settings = ea.getScriptSettings();
> //首次运行时设置默认值
> if (!settings["Default padding"]) {
>     settings = {
>         "Prompt for padding?": true,
>         "Default padding": {
>             value: 10,
>             description: "Padding between the bounding box of the selected elements, and the box the script creates"
>         }
>     };
>     ea.setScriptSettings(settings);
> }
> // 加载默认设置
> let padding = settings["Default padding"].value;
> 
> ```
