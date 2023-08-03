---
uid: 2023080322265390
title: Obsidian 插件：【Readme】Silicon AI
tags: ['obsidian插件', 'readme']
description: 通过硅AI为您的笔记增加一些智能。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Silicon AI

> [!Note] 插件名片
> - 插件名称：Silicon AI
> - 插件作者：deepfates
> - 插件说明：通过硅AI为您的笔记增加一些智能。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/deepfates/silicon)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?silicon)

## 概述

通过硅AI为您的笔记增加一些智能。

![Silicon AI](https://cdn.pkmer.cn/covers/silicon.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deepfates/silicon/master/README.md)
> 

---

## Readme(翻译）

下面是 [[silicon]] 插件的自述翻译


硅：Obsidian的人工智能

这是Obsidian的一个插件（https://obsidian.md）。它通过使用OpenAI API的文本嵌入，添加了一个连接您的笔记的面板。

开始使用

您只需要一个OpenAI API密钥（您可以在https://beta.openai.com/signup上获取）。一旦您获得了API密钥，您可以按照以下步骤安装插件：

- 在发布页面（https://github.com/deepfates/silicon/releases）上找到最新的发布版本。
- 下载文件`main.js`，`manifest.json`和`styles.css`。
- 在Obsidian插件目录中创建一个silicon文件夹。该目录的位置可能因操作系统而异，但通常位于`[您的保险库]/.obsidian/plugins`中。
- 将下载的文件复制到新的silicon文件夹中。
- 打开Obsidian并转到设置页面。
- 在“社区插件”选项卡下，启用社区插件，然后启用Silicon。
- 转到Obsidian设置页面中的“Silicon”选项卡，并输入您的OpenAI API密钥。
- 点击“保存”以保存更改。
- 现在，您可以使用Silicon通过单击Obsidian窗口右侧面板上的“Silicon”按钮来连接您的笔记。该插件将使用文本嵌入来查找相关的笔记并在面板中显示它们。

![Silicon Screenshot](silicon-screenshot.png)

-----

该项目使用TypeScript提供类型检查和文档。
该存储库依赖于TypeScript定义格式中的最新插件API（obsidian.d.ts），其中包含描述其功能的TSDoc注释。

**注意：** Obsidian API仍处于早期阶段，随时可能发生更改！

## 开发

- 将你的仓库克隆到本地开发文件夹中。为了方便起见，你可以将这个文件夹放在你的`.obsidian/plugins/your-plugin-name`文件夹中。
- 安装NodeJS，然后在你的仓库文件夹下的命令行中运行`npm i`。
- 运行`npm run dev`将`main.ts`编译为`main.js`。
- 对`main.ts`进行更改（或创建新的`.ts`文件）。这些更改应该会自动编译到`main.js`中。
- 重新加载Obsidian以加载你的插件的新版本。
- 在设置窗口中启用插件。
- 对于Obsidian API的更新，在你的仓库文件夹下的命令行中运行`npm update`。

发布新版本

- 使用新的版本号更新您的`manifest.json`，例如`1.0.1`，以及您的最新版本所需的最低Obsidian版本。
- 使用`"new-plugin-version": "minimum-obsidian-version"`更新您的`versions.json`文件，以便旧版本的Obsidian可以下载与其兼容的旧版本插件。
- 使用您的新版本号作为“标签版本”创建新的GitHub发布。使用确切的版本号，不要包含前缀`v`。示例请参见：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将`manifest.json`、`main.js`、`styles.css`文件作为二进制附件上传。注意：manifest.json文件必须在两个位置上，首先是您的存储库的根路径，然后是发布中。
- 发布发布。

> 您可以通过在`manifest.json`中手动更新`minAppVersion`后运行`npm version patch`、`npm version minor`或`npm version major`来简化版本升级过程。
> 该命令将在`manifest.json`和`package.json`中提升版本，并将新版本的条目添加到`versions.json`中。

将您的插件添加到社区插件列表中

- 检查 https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- 发布一个初始版本。
- 确保您的存储库的根目录中有一个 `README.md` 文件。
- 在 https://github.com/obsidianmd/obsidian-releases 上发起一个拉取请求，以添加您的插件。

## 如何使用

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

## 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。

使用eslint提高代码质量（可选）
- [ESLint](https://eslint.org/)是一个分析代码以快速发现问题的工具。您可以运行ESLint来分析您的插件，以找出常见的错误和改进代码的方法。
- 要在此项目中使用eslint，请确保从终端安装eslint：
  - `npm install -g eslint`
- 要使用eslint分析此项目，请使用以下命令：
  - `eslint main.ts`
  - eslint将根据文件和行号创建一个报告，提供代码改进的建议。
- 如果您的源代码在一个文件夹中，比如`src`，您可以使用以下命令使用eslint分析该文件夹中的所有文件：
  - `eslint .\src\`

## 资金支持链接

您可以在插件中包含资金支持链接，以便使用您的插件的人可以在财务上支持它。

简单的方法是在您的`manifest.json`文件中将`fundingUrl`字段设置为您的链接：

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

如果您有多个链接，您也可以这样做：

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

API文档

请参阅https://github.com/obsidianmd/obsidian-api



