---
uid: 20240908020150
title: Excalidraw Script Install Market：轻松管理和获取 Excalidraw 脚本
tags: [Excalidraw脚本, 插件开发]
description: Excalidraw Script Install Market 是一个方便你从非官方脚本市场的 Github 仓库中获取和管理 Excalidraw 脚本的小工具。通过这个脚本，你可以轻松安装、更新和编辑脚本市场的 URL 链接，并在不同的脚本市场之间快速切换。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240908020329
---

# Excalidraw Script Install Market：轻松管理和获取 Excalidraw 脚本

Excalidraw Script Install Market 是一个方便你从非官方脚本市场的 Github 仓库中获取和管理 Excalidraw 脚本的小工具。通过这个脚本，你可以轻松安装、更新和编辑脚本市场的 URL 链接，并在不同的脚本市场之间快速切换。

脚本安装链接：

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/ExcalidrawScriptInstallMarket.md
```
````

> 只需以下几个简单的操作，就能找到并使用你需要的脚本，提升你的绘图效率。

## 安装 Excalidraw 脚本

要安装脚本，请点击界面中的 `安装此脚本/Install the script` 按钮。当按钮显示为 `该脚本已是最新-点击重新安装/Script is up to date - Click to reinstall` 时，表示该脚本已经成功安装。

## 切换脚本市场

您可以通过点击左侧的 🌐name 下拉菜单，方便地切换不同的脚本市场。

![24.09.08_Excalidraw Script Install Market：轻松管理和获取 Excalidraw 脚本.md](https://cdn.pkmer.cn/images/202409080202803.png!pkmer)

### 编辑 URL 源

如需编辑 URL，请点击 `📝Editor` 按钮。您可以按照以下格式输入链接：

```text
name|link
```

其中，名称（name）和链接（link）之间用 `|` 符号分隔，多个链接则以换行符分开。

```text
name1|link1
name2|link2
name3|link3
......
```

- **name**：您自定义的脚本市场名称。
- **link**：指向 GitHub 上对应 `readme.md` 的链接或 raw 链接。
![24.09.08_Excalidraw Script Install Market：轻松管理和获取 Excalidraw 脚本.md](https://cdn.pkmer.cn/images/202409080202968.png!pkmer)

## Demo

![24.09.08_Excalidraw Script Install Market：轻松管理和获取 Excalidraw 脚本.md](https://cdn.pkmer.cn/images/202409080202807.gif)

## 脚本源码

脚本 Github 链接：[ExcalidrawScriptsInstallMarket](https://github.com/PandaNocturne/ExcalidrawScripts/blob/master/PandaScripts/ExcalidrawScriptInstallMarket.md)

脚本源码 (24.09.08)，最新脚本请以 Github 上的为准，非常欢迎大佬帮忙优化。

```js
class PKMerExcalidrawScriptMarket extends ea.obsidian.Modal {
  constructor(app, defaultUrls) {
    super(app);
    this.defaultUrls = defaultUrls;
  }

  async onOpen() {
    const { contentEl } = this;
    // 添加URL表单并固定在顶部    
    const formContainer = contentEl.createEl('div', { cls: 'excalidraw-script-form-container' });
    const formEl = formContainer.createEl('form', { cls: 'excalidraw-script-url-form' });
    const selectEl = formEl.createEl('select', { cls: 'excalidraw-script-url-select' });
    const inputEl = formEl.createEl('input', { type: 'text', cls: 'excalidraw-script-url', placeholder: 'URL' });

    const editorButtonEl = formEl.createEl('button', { type: 'button', text: '📝Editor' });
    const submitButtonEl = formEl.createEl('button', { type: 'submit', text: '🔄Reload' });
    const closeButtonEl = formEl.createEl('button', { type: 'button', cls: "excalidraw-script-container-colse", text: '❌' });

    // 关闭按钮点击事件
    closeButtonEl.addEventListener('click', () => {
      this.close();
    });

    // 填充下拉菜单
    this.defaultUrls.forEach(item => {
      selectEl.createEl('option', { text: `🌐${item.name}`, value: item.url });
    });

    // 下拉菜单选择事件
    selectEl.addEventListener('change', async () => {
      inputEl.value = selectEl.value;
      await this.loadDocument(inputEl.value);
    });

    formEl.addEventListener('submit', async (event) => {
      event.preventDefault();
      const url = inputEl.value;
      await this.loadDocument(url);
    });

    // Editor 按钮点击事件
    editorButtonEl.addEventListener('click', async () => {
      const defaultUrls = this.defaultUrls.map(item => `${item.name}|${item.url}`).join('\n');
      const input = await utils.inputPrompt(
        '请编辑URL，格式为：名称|URL',
        '',
        defaultUrls,
        [],
        10,
        false
      );
      const newUrls = input.split('\n').map(line => {
        const [name, url] = line.split('|');
        return { name, url };
      });
      this.defaultUrls = newUrls;
      settings["Scipts URLs"].value = newUrls;
      ea.setScriptSettings(settings);

      // 更新下拉菜单
      selectEl.innerHTML = ''; // 清空现有选项
      this.defaultUrls.forEach(item => {
        selectEl.createEl('option', { text: `🌐${item.name}`, value: item.url });
      });
    });

    // 添加样式
    this.addStyles();
    // 初始加载默认文档
    inputEl.value = this.defaultUrls[0].url || "";
    await this.loadDocument(inputEl.value, true);
  }

  async loadDocument(url) {
    const { contentEl } = this;

    // 清空现有文档内容
    const existingDocContainer = contentEl.querySelector('.doc-container');
    if (existingDocContainer) {
      existingDocContainer.remove();
    }

    // 添加显示文档内容的容器
    const docContainer = contentEl.createEl('div', { cls: 'doc-container excalidraw-script-market' });


    // 获取并显示文档内容
    const docContent = await this.fetchDocumentContent(url);

    // 使用 Obsidian 的 Markdown 渲染功能
    ea.obsidian.MarkdownRenderer.renderMarkdown(docContent, docContainer, '', this);
  }

  async fetchDocumentContent(url) {
    try {
      let response;
      if (url.includes('github.com')) {
        // 将 GitHub URL 转换为 raw URL
        url = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
      }
      response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Failed to fetch document:', error);
      return '# 无法加载文档内容';
    }
  }
  addStyles() {
    const style = document.createElement('style');
    style.textContent = `      
    div.modal:has(.excalidraw-script-market) {
      width: 900px;
      position: relative;

      img {
        &:not(.link-favicon) {
          width: 100%;
        }

        &.coffee {
          width: 10em;
        }

        &[src*=".svg"] {
          width: 2em;
        }
      }

      .excalidraw-script-form-container {

        padding-bottom: 10px;
        border-bottom: 2px solid var(--interactive-accent);

        .excalidraw-script-url-form {
          display: flex;
          width: 100%;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          &>*:not(:last-child) {
            margin-right: 10px;
          }

          .excalidraw-script-url {
            flex: 0.8 1 600px;
          }

          .excalidraw-script-container-colse {
            flex: 0.1 1 10px;
          }

          button {
            flex: 0.2 1 100px;
          }
        }

      }

      .modal-close-button,
      button.copy-code-button {
        display: none;
      }

      .doc-container {
        overflow: auto;
        height: 800px;
      }
    }
    `;
    document.head.appendChild(style);
  }
  onClose() {
    // 移除动态添加的样式
    const style = document.querySelector('style.excalidraw-script-market');
    if (style) {
      style.remove();
    }
  }
}

let settings = ea.getScriptSettings();
if (!settings["Scipts URLs"]) {
  settings = {
    "Scipts URLs": {
      value: [
        { name: 'PandaScripts', url: 'https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/README.md' },
        // 你可以在这里添加更多默认的URL
        { name: 'ExcalidrawScript', url: 'https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/index-new.md' },
      ],
      hide: true,
    },
  };
  ea.setScriptSettings(settings);
}
// 使用示例
const URLs = settings["Scipts URLs"].value;
const modal = new PKMerExcalidrawScriptMarket(app, URLs);
await modal.open();
```