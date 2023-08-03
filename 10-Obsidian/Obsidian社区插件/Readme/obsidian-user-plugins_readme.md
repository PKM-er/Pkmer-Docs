---
uid: 2023080322290523
title: Obsidian 插件：User Plugins
tags: ['插件', '效率', 'obsidian插件', 'readme']
description: 用 JS 文件或片段来快速编写一个插件。注意此插件仅适用高级用户，在笔记中插入你不熟悉的JS会引发很多问题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：User Plugins

> [!Note] 插件名片
> - 插件名称：User Plugins
> - 插件作者：mnowotnik
> - 插件说明：用 JS 文件或片段来快速编写一个插件。注意此插件仅适用高级用户，在笔记中插入你不熟悉的 JS 会引发很多问题。
> - 插件分类：[' 插件 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mnowotnik/obsidian-user-plugins)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-user-plugins)

## 概述

用 JS 文件或片段来快速编写一个插件。注意此插件仅适用高级用户，在笔记中插入你不熟悉的 JS 会引发很多问题。

![User Plugins](https://cdn.pkmer.cn/covers/obsidian-user-plugins.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnowotnik/obsidian-user-plugins/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-user-plugins]] 插件的自述翻译

# Obsidian 的用户插件

用户插件是一个简单的插件，它允许您在代码片段或 JavaScript 文件中使用 Obsidian 插件 API 来修改 Obsidian 的行为，就像您创建了一个插件一样，但无需麻烦。

# 停下来并阅读

> :warning: **此插件仅适用于高级用户**：请勿在您不完全理解的脚本中使用代码。它可能会删除您的笔记或更糟。请参阅 [法律声明](#Notice)。

- 添加自定义命令
- 为插件测试一个想法
- 使用插件 API 来实现任何你想要的功能

## 激励示例

添加命令“在给定文件夹中创建新笔记”，允许您在创建笔记之前选择文件夹。

```javascript
module.exports = {}

module.exports.onload = async (plugin) => {
  const MarkdownView = plugin.passedModules.obsidian.MarkdownView
  plugin.addCommand({
    id: 'new-note-in-folder',
    name: '在文件夹中创建新笔记',
    callback: async () => {
      const folders = plugin.app.vault.getAllLoadedFiles().filter(i => i.children).map(folder => folder.path);
      const folder = await plugin.helpers.suggest(folders, folders);
      const created_note = await plugin.app.vault.create(folder + "/Untitled.md", "")
      const active_leaf = plugin.app.workspace.activeLeaf;
      if (!active_leaf) {
        return;
      }
      await active_leaf.openFile(created_note, {
        state: { mode: "source" },
      });
      plugin.app.workspace.trigger("create",created_note)
      const view = app.workspace.getActiveViewOfType(MarkdownView);
      if (view) {
        const editor = view.editor;
        editor.focus()
      }
    }
  });
}
```

![Command in palette](https://user-images.githubusercontent.com/8244123/167032593-0dbe59b1-2c2a-4700-83f4-01609cf0d30a.png)

快速入门

### 安装

~此插件尚未在 Community Plugins 面板中可用。~

您可以从 Community Plugins 面板轻松添加此插件。

或者，您可以按照以下手动方式进行操作：

将此存储库使用 `git clone` 命令克隆到 `<YOUR VAULT>/.obsidian/plugins` 文件夹，然后执行以下命令：

```bash
npm install
npm run build
```

### 用法

脚本可以通过手动添加代码片段或在存储库中启用每个单独的文件来添加。脚本可以访问 `Plugin` 对象。其 API 在 [这里](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts) 中声明。

`plugin` 还有两个额外的成员：

- `helpers`

    目前只有一个方法，用于打开建议模态框：

    ```javascript
    suggest<T>(
        textItems: string[] | ((item: T) => string),
        items: T[],
        placeholder?: string,
        limit?: number
    )
    ```

- `passedModules`

    目前只能访问 `obsidian` 模块。

#### 代码片段

代码片段就是一个可以访问 `plugin` 变量的 JavaScript 代码块。

它在插件的 `onload` 方法中执行。

示例：

```javascript
plugin.addCommand({
    name: 'FooBar',
    callback: () => {
        console.log('foobar');
    }
});
```

#### 脚本文件

脚本文件遵循 CommonJS 模块规范，并导出至少一个 `onload` 函数作为输入的参数。您必须在导出的模块中指定 `onload` 函数，如果需要的话，还可以指定 `onunload` 函数。

要使用脚本，请在设置中指定脚本文件夹，点击重新加载按钮以在指定路径中搜索脚本，然后使用切换按钮启用每个找到的脚本。

示例：

```javascript
module.exports = {}
module.exports.onload = function(plugin) {
    plugin.addCommand({
        name: 'FooBar',
        callback: () => {
            console.log('foobar');
        }
    });
}
module.exports.onunload = function(plugin) {
    console.log('unload')
}
```

注意事项

本软件按原样提供，不提供任何形式的保证，包括但不限于适销性、特定用途的适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论是合同行为、侵权行为还是其他行为，无论是因软件或使用或其他方式与软件有关的连接。
