---
uid: 20250115192455
title: QuickAdd 脚本 -Obsidian 全局搜索之高级搜索及图谱可视化
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20250115193907
---

# QuickAdd 脚本 -Obsidian 全局搜索之高级搜索及图谱可视化

Obsidian 全局搜索转换为高级搜索界面，灵感来自知网高级检索界面 [^1]

![241027_QuickAdd脚本-搜索语法转换工具之高级搜索.md](https://cdn.pkmer.cn/images/202501151925435.png!pkmer)

## 功能特点

![241027_QuickAdd脚本-搜索语法转换工具之高级搜索.md](https://cdn.pkmer.cn/images/202501151925187.png!pkmer)

- 可视化搜索条件配置，自动转换为 Obsidian 搜索语法
- 由 Obsidian 原生的查询，查询结果可以定位到具体的块
    - ![image.png](https://cdn.pkmer.cn/images/202501151935209.png!pkmer)
- 支持多条件组合搜索，可以逐步优化检索信息
- 搜索结果可以配合图谱可视化检索的图谱，可显示笔记间的关联性以及标签附件等信息
    - ![image.png](https://cdn.pkmer.cn/images/202501151931652.png!pkmer)
- 可利用书签功能保存检索结果，以及导出检索的笔记信息，详见 [[【Obsidian】查询语法(Query Syntax)#复制搜索结果|查询语法(Query Syntax)]]

## 实现过程

参考知网的高级检索的空间，强化 Obsidian 自带的全局搜索，设计草图以及 html 中实现。

![241027_QuickAdd脚本-搜索语法转换工具之高级搜索.md](https://cdn.pkmer.cn/images/202501151925421.png!pkmer)

最终合并到自带的全局搜索元素上，Obsidian 中按钮这些样式就比较难调，而且很受主题的影响，所以比原计划的要难看点。

## 搜索运算符类型

检索的运算符类型主要有这几种，详见 [[【Obsidian】查询语法(Query Syntax)|查询语法(Query Syntax)]]：

| 搜索运算符     | 描述                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file:`        | 查找文件名中的文本。匹配 Vault 中的任何文件。<br>示例： `file:.jpg` 或 `file:202209` 。                                                                                                                                   |
| `path:`        | 在文件路径中查找文本。匹配 Vault 中的任何文件。<br>示例： `path:"Daily notes/2022-07"` 。                                                                                                                                 |
| `content:`     | 在文件内容中查找文本。<br>示例： `content:"happy cat"` 。                                                                                                                                                                 |
| `match-case:`  | 区分大小写的匹配。<br>示例： `match-case:HappyCat` 。                                                                                                                                                                     |
| `ignore-case:` | 不区分大小写的匹配。<br>示例： `ignore-case:ikea` 。                                                                                                                                                                      |
| `tag:`         | 在文件中查找标签。<br>示例： `tag:#work` 。<br>请记住，搜索 `tag:#work` 不会返回 `#myjob/work` 的结果。 <br>**注意**：由于 `tag:` 忽略代码块和非 Markdown 内容中的匹配，因此它通常比 `#work` 的普通全文搜索更快、更准确。 |
| `line:`        | 在同一行查找匹配项。<br>示例： `line:(mix flour)` 。                                                                                                                                                                      |
| `block:`       | 在同一块中查找匹配项。<br>示例： `block:(dog cat)` 。<br>**注意**：由于 `block:` 需要搜索来解析每个文件中的 Markdown 内容，因此可能会导致您的搜索词需要更长的时间才能完成。                                               |
| `section:`     | 在同一部分（两个标题之间的文本）中查找匹配项。<br>示例： `section:(dog cat)` 。                                                                                                                                           |
| `task:`        | 按照块的方式在任务中查找匹配项。<br>示例： `task:call` 。                                                                                                                                                                 |
| `task-todo:`   | 按照区块的方式在*未完成*的任务中找到匹配项。<br>示例： `task-todo:call` 。                                                                                                                                                |
| `task-done:`   | 按照区块的方式在*已完成*的任务中找到匹配项。<br>示例： `task-done:call` 。                                                                                                                                                |

基于 Obsidian 原生搜索运算符实现，搜索案例：

| 类型       | 使用场景             | 示例                 |
| ---------- | -------------------- | -------------------- |
| 文件名搜索 | 查找特定文件名       | `file:.jpg`          |
| 路径搜索   | 定位特定目录下的文件 | `path:"Daily notes"` |
| 内容搜索   | 全文检索             | `content:"关键词"`   |
| 标签搜索   | 通过标签筛选         | `tag:#work`          |
| 任务搜索   | 查找待办事项         | `task-todo:call`     |

## 脚本源码

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2025-01-15 00:13:57 
 * @Last Modified by:   熊猫别熬夜 
 * @Last Modified time: 2025-01-15 00:13:57 
 */
module.exports = async () => {
  (function () {
    // 创建并添加样式
    const styleElement = document.createElement("style");
    styleElement.textContent = `
    .search-form-container {
  width: 100%;
  padding: 10px;
  margin: auto;
  background-color: var(--background-primary);

  button {
    background-color: var(--background-primary);
    border-radius: 4px;
    border: 1px solid var(--background-modifier-border);
  }

  select, label, button {
    padding: 4px;
  }

  /* 隐藏第一行操作符和删除按钮 */
  .form-row:first-child .operator,
  .form-row:first-child .remove-row {
    display: none;
  }

  .form-row {
    display: flex;
    gap: 0 5px;
    align-items: center;
    margin-bottom: 10px;

    input[type="text"] {
      flex: 1;
      border-width: 1px;
    }
  }

}


.input-group {
  display: flex;
  width: 100%;
  align-items: center;
  height: 20px;


  input {
    margin-right: 0px !important;
    padding: 5px;
    border-radius: 4px 0 0 4px;
    box-shadow: none !important;
  }

  .icon-button {
    box-shadow: none;
    color: var(--text-normal);
    margin-left: 0px !important;
    border-left: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

  }

  .icon-button[data-select-option=""] {
    display: none;
  }
}


/* 大小写和正则控件 */
.controls {
  display: flex;
  gap: 0 2px;

  .toggle.toggle {
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    display: flex;

    input {
      display: none;
    }
  }

  .toggle-label {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 2px 2px;
    border-radius: 4px;
  }

  .toggle input:checked+.toggle-label {
    background: var(--background-modifier-hover);
  }
}

.button-group {
  display: flex;
  justify-content: space-between;

  button {
    padding: 5px 10px;
  }
}

.date-group {
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    border-width: 1px;
    border-radius: 3px;
  }
}

.navigation-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4px;

  button {
    border: none;
  }

  /* 隐藏一些v暂时没用的按钮 */
  .import-button, .copy-button {
    display: none;
  }

  .graph-button, .reset-button {
    flex: 0.2;
  }

  .search-button {
    flex: 0.4;
    color: var(--text-accent);
    font-size: large;
  }

  .reset-button {
    color: var(--text-error);
  }
}

.result {
  margin-top: 10px;

  textarea {
    width: 100%;
    height: 300px;
    resize: vertical;
  }
}
    `;
    document.head.appendChild(styleElement);

    // 移除已存在的 form-container
    const existingContainer = document.querySelector('.search-form-container');
    if (existingContainer) {
      existingContainer.remove();
    }

    // 创建 HTML 结构
    const queryControlsContainer = document.createElement("div");
    queryControlsContainer.className = "search-form-container";
    queryControlsContainer.innerHTML = `
  <div class="search-section"><div class="form-row"><select class="operator"><option>AND</option><option>OR</option><option>NOT</option></select><select class="type"><option>all</option><option>file</option><option>tag</option><option>path</option></select><div class="input-group"><input type="text"name="file"><button class="icon-button"onclick="handleTypeIconClick(this)"></button></div><!--大小写和正则控件--><div class="controls"><label class="toggle"><input type="radio"name="search-mode"class="case-sensitive"><span class="toggle-label"><svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"class="svg-icon uppercase-lowercase-a"><path d="M10.5 14L4.5 14"></path><path d="M12.5 18L7.5 6"></path><path d="M3 18L7.5 6"></path><path d="M15.9526 10.8322C15.9526 10.8322 16.6259 10 18.3832 10C20.1406 9.99999 20.9986 11.0587 20.9986 11.9682V16.7018C20.9986 17.1624 21.2815 17.7461 21.7151 18"></path><path d="M20.7151 13.5C18.7151 13.5 15.7151 14.2837 15.7151 16C15.7151 17.7163 17.5908 18.2909 18.7151 18C19.5635 17.7804 20.5265 17.3116 20.889 16.6199"></path></svg></span></label><label class="toggle"><input type="radio"name="search-mode"class="regex"><span class="toggle-label"><svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"class="lucide lucide-regex"><path d="M17 3v10"/><path d="m12.67 5.5 8.66 5"/><path d="m12.67 10.5 8.66-5"/><path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"/></svg></span></label></div><button class="remove-row"onclick="removeRow(this)">➖</button><button class="add-row"onclick="addRow(this)">➕</button></div></div><!--<div class="date-group"><div class="creation-date"><label>创建时间：</label><input type="date"name="date_from"><span>~</span><input type="date"name="date_to"><button class="clear-date"onclick="clearDate(this)">清空</button></div><div class="modification-date"><label>修改时间：</label><input type="date"name="date_from"><span>~</span><input type="date"name="date_to"><button class="clear-date"onclick="clearDate(this)">清空</button></div></div>--><div class="navigation-buttons"><button class="import-button">导入</button><button class="graph-button"onclick="openGraphWithQuery()">图谱</button><button class="search-button"onclick="convertToObsidianQuery()">搜索</button><button class="copy-button">复制</button><button class="reset-button"onclick="resetForm(2)">重置</button></div>
`;
    // 添加容器
    document.body.appendChild(queryControlsContainer);

    // 找到搜索容器并在其第一个子元素前插入
    const searchContainer = document.querySelector('.workspace-leaf-content[data-type="search"]');
    if (searchContainer) {
      searchContainer.insertBefore(queryControlsContainer, searchContainer.children[0]);
    }
  })();


  function generateIcons(options, values) {
    return options.reduce((icons, option) => {
      icons[option] = values[option] || '';
      return icons;
    }, {});
  }

  const options = ["all", "file", "tag", "path", "content", "line", "block", "section", "task", "task-todo", "tasks-done"];
  const iconsWithValues = {
    'file': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>',
    'tag': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg>',
    'path': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-closed"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/></svg>'
  };
  const icons = generateIcons(options, iconsWithValues);

  // !点击图标触发事件
  async function handleTypeIconClick(button) {
    const row = button.closest('.form-row');
    const type = row.querySelector('.type').value;
    const options = getOptionsByType(type);
    const quickAddApi = app.plugins.plugins.quickadd.api;
    const choice = await quickAddApi.suggester(options, options);
    if (choice) {
      const type = row.querySelector('.type').value;
      if (type === 'tag') {
        row.querySelector('input[type="text"]').value += ` ${choice.replace(/^#/, '')}`;
      } else {
        row.querySelector('input[type="text"]').value += ` "${choice}"`;
      }
    }
  }

  // 图标类型
  function getOptionsByType(type) {
    let options;
    switch (type) {
      case 'file':
        options = app.vault.getFiles()
          .filter(f => f.path.endsWith('.md'))
          .map(f => f.basename);
        options.sort();
        break;
      case 'tag':
        options = Object.keys(app.metadataCache.getTags());
        options.sort();
        break;
      case 'path':
        options = app.vault.getAllFolders().map(f => f.path);
        break;
      default:
        return [];
    }
    return options;
  }

  // !添加和删除按钮
  function addRow(button) {
    const currentRow = button.closest('.form-row');
    // 保存当前选中的类型值
    const currentType = currentRow.querySelector('.type').value;
    const newRow = currentRow.cloneNode(true);

    // 重置输入值和单选按钮
    newRow.querySelectorAll('input').forEach(input => {
      if (input.type === 'text') {
        input.value = '';
      } else if (input.type === 'radio') {
        input.checked = false;
      }
    });

    // 重置选择选项为默认值
    newRow.querySelectorAll('select').forEach(select => {
      if (select.classList.contains('type')) {
        // 保持类型选择器的值与当前行相同
        select.value = currentType;
      } else {
        select.selectedIndex = 0;
      }
      select.dispatchEvent(new Event('change'));
    });

    currentRow.parentNode.insertBefore(newRow, currentRow.nextSibling);
    initializeRow(newRow, currentType);  // 使用保存的类型值
  }
  function removeRow(button) {
    const row = button.closest('.form-row');
    const container = row.parentNode;
    if (container.querySelectorAll('.form-row').length > 1) {
      row.remove();
    }
  }

  function initializeRow(row, option, clearInputs = false) {
    if (clearInputs) {
      row.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
      });
    }
    const typeSelect = row.querySelector('.type');
    const button = row.querySelector('.icon-button');

    // 使用选中的属性初始化选项
    typeSelect.innerHTML = options.map(opt =>
      `<option>${opt}</option>`
    ).join('');

    // 设置默认选项
    typeSelect.value = option; // 确保选择项被设置

    // 添加 change 事件监听器
    typeSelect.addEventListener('change', function () {
      const selectedOption = typeSelect.value;
      button.setAttribute('data-select-option', icons[selectedOption]);
      button.innerHTML = icons[selectedOption];
    });

    // 触发 change 事件以设置初始状态
    typeSelect.dispatchEvent(new Event('change'));

    // 添加可取消选择的单选框逻辑
    const radios = row.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      radio.addEventListener('click', function (e) {
        if (this.checked && this._previouslyChecked) {
          this.checked = false;
        }
        this._previouslyChecked = this.checked;
      });
    });
  }

  function clearDate(button) {
    const container = button.parentElement;
    container.querySelectorAll('input[type="date"]').forEach(input => {
      input.value = '';
    });
  }

  // ! 搜索按钮点击事件
  function convertToObsidianQuery() {
    const formRows = document.querySelectorAll('.form-row');
    let query = [];

    formRows.forEach(row => {
      const operator = row.querySelector('.operator').value;
      let type = row.querySelector('.type').value;
      type = type === 'all' ? "" : `${type}:`;
      const input = row.querySelector('input[type="text"]').value;
      const isCaseSensitive = row.querySelector('.case-sensitive').checked;
      const isRegex = row.querySelector('.regex').checked;

      if (input.trim()) {
        let searchTerm = input;
        // 处理正则
        if (isRegex) {
          searchTerm = `/${searchTerm}/`;
        } else if (type == 'tag:') { // 只有非tag类型才添加引号
          searchTerm = searchTerm.trim().split(" ").map(t => t.startsWith("#") ? t : `#${t}`).join(" ");
        } else {
          searchTerm = `(${searchTerm})`;
        }
        // 处理大小写
        if (isCaseSensitive) {
          searchTerm = `match-case:${searchTerm}`;
        }

        let queryPart = '';
        switch (operator) {
          case 'AND':
            queryPart = `(${type}${searchTerm})`;
            break;
          case 'OR':
            queryPart = `${operator} (${type}${searchTerm})`;
            break;
          case 'NOT':
            queryPart = `-(${type}${searchTerm})`;
            break;
        }
        query.push(queryPart);
      }
    });
    const queryValue = query.join(" ");

    const searchInputs = document.querySelectorAll('.search-input-container > input');

    searchInputs.forEach(searchInput => {
      if (searchInput && searchInput.value !== queryValue) {
        searchInput.value = queryValue;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        // 模拟 ESC 键按下
        searchInput.dispatchEvent(new KeyboardEvent('keydown', {
          key: 'Escape',
          code: 'Escape',
          keyCode: 27,
          bubbles: true
        }));
      }
    });
  }

  function openGraphWithQuery() {
    app.commands.executeCommandById("graph:open");

    setTimeout(() => {
      convertToObsidianQuery();
    }, 100);
  }

  // 添加重置函数
  function resetForm() {
    const container = document.querySelector('.search-section');
    if (!container) return;
    const templateRow = container.querySelector('.form-row');
    if (!templateRow) return;
    // 清空现有内容
    container.innerHTML = '';
    // 添加初始行
    for (let i = 0; i < 2; i++) {
      const newRow = templateRow.cloneNode(true);
      container.appendChild(newRow);
      initializeRow(newRow, options[0], true);
    }
    // 触发 change 事件以确保 UI 更新
    container.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // 把所有函数暴露到全局作用域
  window.addRow = addRow;
  window.removeRow = removeRow;
  window.handleTypeIconClick = handleTypeIconClick;

  window.openGraphWithQuery = openGraphWithQuery;
  window.convertToObsidianQuery = convertToObsidianQuery;
  window.resetForm = resetForm;
  window.clearDate = clearDate;

  // 修改初始化逻辑
  (function initialize() {
    resetForm();
  })();

};

```

## 脚本配置

该脚本主要是通过 QuickAdd Macro 运行的，配置流程如下：

1. 将脚本代码保存为 js 文件
2. 将该 js 文件放置到 QuickAdd 设置的模版路径中
3. 添加一个 QuickAdd Macro 动作
   1. ![241027_QuickAdd脚本-搜索语法转换工具之高级搜索.md](https://cdn.pkmer.cn/images/202501151925895.png!pkmer)
4. 设置 Macro 动作，将刚刚的定义的脚本选择进来
   1. ![241027_QuickAdd脚本-搜索语法转换工具之高级搜索.md](https://cdn.pkmer.cn/images/202501151925292.png!pkmer)
5. 配置一个快捷键或设置一个按钮 (通过 Commanders 或 Note toolbar 插件) 来启动该命令。

## 存在问题

1. 不能实现比较复杂的分组组合语法
2. 如果全局搜索界面关闭后控件会消失，需要重新运行该脚本。

## Reference

- Obsidian 官方文档：[Search](https://help.obsidian.md/Plugins/Search)
- [[Obsidian全局搜索功能]]

[^1]: ![241027_QuickAdd脚本-搜索语法转换工具之高级搜索.md](https://cdn.pkmer.cn/images/202501151925709.png!pkmer)