---
uid: 2024042221314825
title: Obsidian 插件：【Readme】Livecodes Playground
tags: ['obsidian插件', 'readme']
description: Client-side code editor playground - 由LiveCodes提供支持
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Livecodes Playground

> [!Note] 插件名片
> - 插件名称：Livecodes Playground
> - 插件作者：@gapmiss
> - 插件说明：Client-side code editor playground - 由 LiveCodes 提供支持
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/gapmiss/livecodes-playground)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?livecodes-playground)

## 概述

Client-side code editor playground - 由 LiveCodes 提供支持

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gapmiss/livecodes-playground/master/README.md)

---

## Readme(翻译）

下面是 [[livecodes-playground]] 插件的自述翻译

【机翻】

# Livecodes 游乐场

![Livecode Playground编辑器的屏幕截图](https://cdn.pkmer.cn/covers/livecodes-playground_2_0.png!pkmer)

<!-- <div>
	<img src="https://livecodes.io/docs/img/livecodes-logo.svg" style="width:200px; margin: 0 auto;">
</div> -->

Livecodes playground，一个为 [Obsidian.md](https://obsidian.md) 提供支持的开源客户端代码编辑器插件 - 由 [Livecodes.io](https://livecodes.io/docs/overview) 提供支持。

阅读关于 [为什么选择Livecodes](https://livecodes.io/docs/why)，它的 [特性](https://livecodes.io/docs/features/) 以及 [如何自行托管](https://livecodes.io/docs/features/self-hosting)

> [!IMPORTANT]
> Livecodes 的代码库可以自行托管，但并非 100% 脱机。需要互联网连接。

## 安装

### 社区插件

1. [Obsidian.md/plugins](https://obsidian.md/plugins?id=livecodes-playground) 或
2. 打开 *设置* > *社区插件* > *浏览*
3. 搜索 "livecodes"

### 通过 BRAT（Beta Reviewer's Auto-update Tool）

1. 确保 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 已安装
2. 触发命令 `Obsidian42 - BRAT: Add a beta plugin for testing`
3. 输入此存储库，`gapmiss/livecodes-playground`
4. 在社区插件列表中启用 _Livecodes_ 插件

### 手动

1. 下载最新的 [发布存档](https://github.com/gapmiss/livecodes-playground/releases/)
2. 解压下载的存档
3. 将 `livecodes-playground` 文件夹移动到 `/path/to/vault/.obsidian/plugins/`
4. 设置 > 社区插件 > 重新加载**已安装的插件**
5. 启用插件

或者：

1. 下载 `main.js`、`manifest.json` 和 `styles.css`
2. 创建一个新文件夹 `/path/to/vault/.obsidian/plugins/livecodes-playground`
3. 将所有 3 个文件移动到 `/path/to/vault/.obsidian/plugins/livecodes-playground`
4. 设置 > 社区插件 > 重新加载**已安装的插件**
5. 启用插件

## 用法

### 初始设置

1. 在您的保险库内创建一个文件夹，用于存储游乐场配置文件（`*.JSON`）
   - 默认：`playgrounds`
2. 在您的保险库内创建一个文件夹，用于存储游乐场 Markdown 笔记（`*.MD`）
   - 默认：`playgrounds/notes`

### 新游乐场

新游乐场可以通过以下方式创建：

- `New playground` - (*命令*) 打开一个提示框，用于输入游乐场名称、标记语言、样式语言、CSS 处理器和脚本语言。
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-05-12.41.54.png" alt="新游乐场模态框截图" /></p></details>

- `Quick playground` - (*命令*) 和 (*功能区菜单*) 打开一个提示框，用于输入游乐场名称。默认的标记、样式和脚本语言可以在设置中配置。
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-05-12.43.59.png" alt="快速游乐场模态框截图" /></p></details>

- `Open starter playground` (*命令*) 打开一个建议提示框，列出了一些简单的起始游乐场。这些起始游乐场包括 `_hyperscript`, `Alpine.js`, `Angular`, `Arrow.JS`, `Astro`, `Bootstrap 5`, `Bulma (CSS)`, `C++`, `HTMX`, `Javascript`, `jQuery`, `Lemonade.JS`, `Lit`, `Lua`, `Lua (wasm)`, `Markdown`, `MDX`, `modulo.js`, `Open-props (CSS)`, `Perl`, `PHP`, `PHP (wasm)`, `Python`, `Python (wasm)`, `React`, `React Native`, `Reef.js`, `Riot.js`, `Ruby`, `SCSS`, `Solid.js`, `Stellar`, `Stencil.js`, `Svelte`, `Tailwind CSS`, `Typescript`, `VanJS`, `Vue 2`, `Vue 3 SFC`
- `New playground from Codepen` (*命令*) 打开一个提示框，用于输入 Codepen 的 URL，并尝试导入该笔记并创建一个新的游乐场。请注意：此命令是实验性的，依赖于 Codepen 的源代码来展示笔记。如果 Codepen 改变了他们的 HTML 代码，该命令可能会停止工作。
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-12-08.19.31.png" alt="从 Codepen 创建新游乐场命令的截图" /></p><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-12-08.19.46.png" alt="输入 Codepen URL 的提示框截图" /></p></details>

- `Open codeblocks in Livecodes` (*命令*) 实时预览和源代码模式。该命令解析 markdown 笔记中的代码块，并尝试根据代码块的语言创建一个包含 1-3 个代码块（标记、样式、脚本）的新游乐场。支持的语言包括 `html`, `mdx`, `css`, `scss`, `javascript`, `js`, `jsx`, `typescript`, `ts`, `tsx`, `astro`, `svelte`.
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-12-08.54.16.png" alt="在 Livecodes 中打开代码块的命令截图" /></p></details>

- `Open in Livecodes` - (*代码块上下文菜单*) 通过在支持的围栏代码块中右键点击 (`ctrl`+`click`)。仅支持阅读模式。支持的语言包括 `html`, `mdx`, `css`, `scss`, `javascript`, `js`, `jsx`, `typescript`, `ts`, `tsx`, `astro`, `svelte`.
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-05-12.01.55.png" alt="在 Livecodes 中打开代码块的上下文菜单截图" /></p></details>

- `Open in Livecodes` - (*文件上下文菜单*) 通过右键点击 (`ctrl`+`click`) 来支持文件扩展名。支持的扩展名包括 `html`, `mdx`, `css`, `scss`, `js`, `jsx`, `ts`, `tsx`, `astro`, `svelte`.
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-05-12.35.49.png" alt="文件上下文菜单截图" /></p></details>

- `Open in Livecodes` - (*文件夹上下文菜单*) 通过右键点击 (`ctrl`+`click`) 来支持文件扩展名。支持的扩展名包括 `html`, `mdx`, `css`, `scss`, `js`, `jsx`, `ts`, `tsx`, `astro`, `svelte`. 要激活菜单，文件夹必须包含 1-3 个具有支持扩展名的文件。例如 (`index.html`, `style.css`, `main.js`)
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-05-12.33.31.png" alt="文件上下文菜单截图" /></p></details>

- Obsidian `URI` - 通过导入原始 JSON 配置文件创建一个新的游乐场，可以轻松地作为 Github gist 进行托管。Obsidian URL 需要 2 个参数，`vault` 和 `gistUrl` 格式为 `obsidian://playground?vault=VAULTNAME&gistUrl=RAW_JSON_URL` `gistUrl` 需要进行 URI 编码（参见：[Obsidian 帮助](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI))

	例如 `obsidian://playground?vault=Playground&gistUrl=https%3A%2F%2Fgist.githubusercontent.com%2Fgapmiss%2Ff558657bcde37c677724004c36ed8dcd%2Fraw%2Ff8a7173bbd17d0886534c2f2017385a5fb3cff48%2FJavascript_starter.json`

### 打开游乐场

游乐场可以通过以下方式打开：

- `Open playground` - (*命令*) 和 (*功能区菜单*) 打开一个游乐场模糊搜索提示框。
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-05-17.02.09.png" alt="livecodes游乐场模糊搜索提示框截图" /></p></details>

- `Open playground` - (*右键菜单*) 通过右键点击 (`ctrl`+`click`) 打开游乐场配置文件 (`*.JSON`)。
	<details style="margin-block: 1em;"><summary>截图</summary><p><img src="./resources/LIVECODES-Obsidian-v1.5.8-2024-03-05-17.10.19.png" alt="文件右键菜单截图" /></p></details>

- Obsidian `URI` - 通过导入原始的 JSON 配置文件创建一个新的游乐场，可以轻松地将其托管为 Github gist。Obsidian URL 需要 2 个参数，`vault` 和 `playgroundPath` 格式为 `obsidian://playground?vault=VAULTNAME&playgroundPath=VAULT_PATH_TO_JSON` `playgroundPath` 需要进行 URI 编码（参见：[Obsidian 帮助](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI)）

	例如 `obsidian://playground?vault=VAULTNAME&playgroundPath=path/to/playground.json`

> [!IMPORTANT]
> 以上右键菜单选项仅在 Obsidian 检测到所有文件扩展名时才可用。打开 `设置` &gt; `文件和链接` 并启用 `检测所有文件扩展名` ![设置截图](https://cdn.pkmer.cn/covers/livecodes-playground_2_1.png!pkmer)

## 问题和错误报告

请将问题、错误报告、功能请求等提交到 [gapmiss/livecodes-playground/issues](https://github.com/gapmiss/livecodes-playground/issues)

## 开发

1. `cd /path/to/vault/.obsidian/plugins`
2. `git clone https://github.com/gapmiss/livecodes-playground.git`
3. `cd livecodes-playground`
4. `npm install`
5. `npm run dev`

## 贡献

欢迎贡献！在提交变更的拉取请求之前，请先打开一个问题进行讨论。

## Livecodes

此插件由 [Livecodes SDK](https://livecodes.io/docs/sdk) 提供支持。Livecodes SDK 根据 [MIT许可证](https://github.com/live-codes/livecodes/blob/develop/LICENSE) 许可。

> MIT 许可证
>
> 版权所有（c）2021-PRESENT Hatem Hosny
>
> 特此免费授予任何获得本软件及相关文档文件（以下简称“软件”）副本的人，无偿使用本软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件的权利，并允许软件的受让人这样做，但须遵守以下条件：
>
> 以上版权声明和本许可声明应包含在所有副本或实质部分的软件中。
>
> 本软件按“原样”提供，不提供任何形式的明示或暗示担保，包括但不限于适销性、特定用途适用性和非侵权性的担保。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论是在合同诉讼、侵权行为或其他方面，由于软件或使用或其他交易而产生。