---
uid: 20240111112634
title: Quickadd 脚本 - 根据输入的文本信息调用指定 template
tags: [💻教程, quickadd]
description: 
author: Devol,windilycloud
type: other
draft: false
editable: false
modified: 20240112011007
---

# Quickadd 脚本 - 根据输入的文本信息调用指定 template

## 💡前言

> 相信各位在使用 Obsidian 的日常中会经常调用模板，[[templater-obsidian]] 就是大家所熟知的 obsidian 模板插件，通过快捷指定自定义模板的方式获得了许多 Obsidian 爱好者的青睐，我本人就是其中之一。然而这次本教学将会另辟蹊径使用另一个插件——[[quickadd]]，来完成自动调用模板的操作。

### 1.为什么想做这个？

随着我日复一日地使用 Obsidian，我发现自己越来越依赖模板的便捷。然而，快捷键设置越来越多，我常常忘记它们对应的模板元素，而且快捷键也容易被其他应用占用。于是我开始思考，能否实现通过一个模板调用多个模板的操作。

### 2.使用 templater 插件中遇到的难题

网上搜索后，得知 templater 可以实现该功能，喜不自禁的我就这样跟着教程磕磕绊绊地学习。然而现实给我了迎头痛击，无论我尝试了多少个他人 Obsidian 库，反复研究了多久的帖子，始终未能实现输入文本自动调用模板的功能，只能做到点击选项调用不同模板，这远远达不到我的预期。

### 3.峰回路转

终于，困难迎来了转机，通过研究 Obsidian 知识社区以及加入 QQ 群，我得知了一个新的在线平台——PKMer，并且加入了官方 QQ 群。经过交流，我了解到 quickadd 同样可以实现模板调用，在此特别感谢群里的==大脸猫皮皮==，是他完成了脚本的整体框架，我只是做了一些小修小改。

# ⭐功能介绍

- 此自动化流程可通过输入 ==模板名称 - 任意文本== ，即可新建一份名字为==任意文本==的笔记。
- 此自动化流程需要依赖 QuickAdd 插件运行，并配合 Templater 插件实现语法转换。
- 使用方法——比如我们在 templater 文件夹放置了四个模板文件，分别是人物模板.md、书籍模板.md、通用模板.md、阅读笔记模板.md。
- 按下 quickadd 设置的快捷指令，在打开的文本窗口处输入：人物模板 - 爱德华，则会调用文件为 " 人物模板.md" 的模板，随后在指定目录下生成一份名为 " 爱德华 " 的笔记，原先窗口输入的 " 人物模板 -" 会自动去除，且该笔记会在 Obsidian 中以右分屏的方式打开。
- 同理，你还可以输入书籍模板 - 爱德华、通用模板 - 爱德华、阅读笔记模板 - 爱德华，生成的笔记都会以 " 爱德华 " 命名。
- 如果不输入前缀 ==模板名称 -==，仅输入爱德华，那么将会调用默认的“通用模板.md”文件
- 只需进行一次设置，便能轻松应对后续任何模板的添加，无需再次配置。

> [!note] 接下来
我将会用图例的方式，带你一步步了解使用这个基于 QuickAdd 插件的脚本进行自动化模板流程的全过程。

# 📚教程

### 1、插件安装

- 首先，我们需要安装 Templater 与 quickadd 这两个插件，为了方便大家操作，我已经在分享的 Obsidian 库里面为大家安装完成。

### 2、Templater 设置

- 我们优先设置 templater，因为只有一个步骤。
- 里面的重要选项都已经通过中文翻译出来了。实际上，我们只需要开启 Automatic jump to cursor 和 Trigger Templater on new file creation 这两个选项，其他选项没有必要理会，如果不懂可以完全按照图片设置。

![](https://cdn.pkmer.cn/images/202401120109031.png!pkmer)

### 3、quickadd 设置

##### 步骤一：打开 quickadd 设置界面，并新建一个 Marco 宏

![](https://cdn.pkmer.cn/images/202401120109032.png!pkmer)

##### 步骤二：宏添加指令

![](https://cdn.pkmer.cn/images/202401120109034.png!pkmer)

##### 步骤三：添加 user scripts 脚本，并关闭界面

![](https://cdn.pkmer.cn/images/202401120109035.png!pkmer)

##### 步骤四：快捷键界面找到刚才设置的宏，并设置任意快捷键

![](https://cdn.pkmer.cn/images/202401120109036.png!pkmer)

---

quickadd 至此设置完毕，接下来是 js 文件展示。

### 4、auto-insert-template.js 文件

>[!help] 脚本使用指南
因 quickadd 会对 obsidian 文件夹进行全局检索，故 js 脚本文件放在任何地方都能生效，但仍建议脚本文件统一放置在专门的脚本文件夹内。
若日后需要调整模板与新建笔记的位置，只需打开该 js 脚本并修改 templateFolder 与 targetNoteFolder 的路径。
如果想要修改新建笔记默认的文件名与调用模板，请到 " 通用模板 - 未命名 " 和“${templateFolder}/通用模板.md”这两个地方修改（不要复制双引号）。

```js
const templateFolder = "BT_Example/88-Template/收录模板"; // 模板文件存放目录，使用相对路径，可自行更改，检索不到匹配文件夹会报错（注意大小写）
const targetNoteFolder = "📝笔记存放/测试1"; // 新建笔记存放目录，可自行更改，后续代码已设置为不存在文件夹时会自动创建文件夹。

// 本脚本根据模板文件名新建笔记，如模板目录下存在名称为“通用笔记”的模板，输入：通用模板-123，将会新建名为“123”的笔记。
// 修改上面 templateFolder 的地址可调整模板存放目录，修改 targetNoteFolder 的地址可调整新建笔记目录。
// 如果没有调用模板，则使用templateFolder路径下名称为’通用模板.md‘的文件为默认模板，可自行修改成其他文件。
// 当发生新建文件名重复时，Obsidian会通知错误报告：Error: File already exists，并阻止新建笔记。

module.exports = async (params) => {
    // 初始化quickadd的api
    const basePath = params.app.vault.adapter.basePath;
    const {
        quickAddApi: { inputPrompt },
    } = params;
    // 从modal输入文件名
    let noteName = await inputPrompt("📖 请输入笔记标题：");

    // 检查用户输入是否为空
    if (!noteName || noteName.trim() === '') {
        noteName = "通用模板-未命名";// 如果用户没有输入内容，默认输入 "通用模板-未命名"，实际生成的文件名为"未命名"。
    }
    
    // 检查目标笔记目录是否存在，如果不存在则创建
    const folderPath = `${targetNoteFolder}`;
    const folderExists = await app.vault.adapter.exists(folderPath);
    if (!folderExists) {
        try {
            await app.vault.createFolder(folderPath);
        } catch (error) {
            new Notice(`无法创建文件夹：${folderPath}`);
            return;
        }
    }

    // 遍历文件获取模板，无需改动
    const templateList = app.metadataCache
        .getCachedFiles()
        .filter((templateName) => {
            if (templateName.startsWith(templateFolder)) {
                return true;
            }
            return false;
        });

    // 笔记名和模板的匹配规则
    let targetTemplatePath = undefined;
    templateList.some((templatePath) => {
        if (templatePath.includes(noteName.split("-")[0])) {
            targetTemplatePath = templatePath;
            return true;
        }
        return false;
    });

    // 默认模板：如果没有找到匹配的模板，使用默认的通用模板
    if (!targetTemplatePath) {
        targetTemplatePath = `${templateFolder}/通用模板.md`; // 设定默认模板的文件名为“通用模板.md”，可根据本人需求更改文件名。
    }

    // 只提取符号"-"后面的文字作为文件名。
    const fileName = noteName.split("-").pop();

    // 如果没有找到匹配的模板，也无法使用默认模板
    if (!targetTemplatePath) {
        new Notice("未找到匹配的模板，也无法使用默认模板");
        return;
    }

    try {
        // 如果文件已存在，抛出错误
        const fileExists = await app.vault.adapter.exists(fileName);
        if (fileExists) {
            throw new Error(`${fileName} 文件已存在于 ${targetNoteFolder}`);
        }
        const file = await app.vault.create(
            `${targetNoteFolder}/${fileName}.md`,
            ""
        );

        // 获取模板内容
        const templateTFile = await app.vault.getAbstractFileByPath(
            targetTemplatePath
        );
        const templateContent = await app.vault.cachedRead(templateTFile);
        await app.vault.modify(file, templateContent);

        // 创建后打开文件
        if (app.workspace.getActiveFile()) {
            app.workspace.splitActiveLeaf().openFile(file);
        } else {
            app.workspace.getUnpinnedLeaf().openFile(file);
        }
    }
     catch (error) {
        new Notice(error.toString());
    }
};

```

# 🎉结束语

在此，恭喜阅读完此教程并进行实际实施的小伙伴！希望这篇简要的教学为你带来了实质性的帮助。

曾经的我，也会因对 quickadd 设置繁琐而忽略它。如今通过持续的深入学习，明白了为何众多用户推崇此插件，其高度的自定义宏指令自由度是其他插件无法比拟的。

所以，本教学力求让人通俗易懂，我尤其理解初学者在学习 Quickadd 时可能遇到的困难，点击进一个 Obsidian 的教学帖子，却感觉讲得像是天书。目睹到评论区其他用户的研究成果，对比自身的不尽如人意，很容易陷入自我怀疑的漩涡，从而消磨对 Quickadd 插件和 Obsidian 的学习热情。

因此，希望本教学能让你抛弃大脑，无需过多纠结，只要跟随步骤一步一步操作，即可轻松上手并运用 Quickadd。

在撰写这篇教学时，也遇到过一些难题，同时解答了之前一直困扰我的疑惑：为何之前学习 templater 插件时屡屡碰壁？

原来我最初参考的 templater 教学贴所推荐的自动化模板已经失效，不受到 templater 的支持，这是我通过 templater 多次调用不同模板测试中发现的结果。

旧的自动化操作已经不适用于当前，到了 2024 年，这个经过多次修改已趋至完美的自动化流程，应运而出！

当然，初次涉足新的知识领域，难免出现一些不能尽善尽美的地方——①在创建同名文件时无法做到自动递增文件②始终没明白为什么新建笔记总是以右分屏打开；这俩算是个不大不小的遗憾。

最后，感谢各位 Obsidian 使用者对本教学的观看。

——END.
