---
uid: 20241224232247
title: QuickAdd 脚本 - 常驻一些 YAML 属性与格式化
tags: [quickadd脚本, YAML, properties]
description: 常驻一些 YAML 属性与格式化
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241224232356
---

# QuickAdd 脚本 - 常驻一些 YAML 属性与格式化

主要用 Linter 格式化在 YAML 处理方面在一些区域块 (Kanban 和 Lineage 中) 编辑会出现问题，在区域块中添加 yaml 属性，于是我只能关闭关于 Linter 处理 YAML 部分的功能，虽然 TP 能实现一部分功能，但是还是有点不太满意，所以按照自己的需求写了一个 YAML 相关的脚本用来固定和更新一些 YAML 属性值。

## 脚本功能

这个脚本的主要功能是处理当前文件的 YAML 元数据，用于确保文件的 YAML 元数据完整且一致，特别是在文件的标题和日期信息方面。

![241220_QuickAdd脚本：常驻一些YAML属性与格式化.md](https://cdn.pkmer.cn/images/202412242322933.png!pkmer)

具体来说，它执行以下操作：

- 固定一些 YAML 属性：
  - 确保某些固定的 YAML 属性（如 uid、banner、title 等）存在，如果不存在则设置为空字符串。
  - 默认设置的是 `"uid", "banner", "title", "aliases", "tags", "url", "description", 'cssclasses', "date", "created", "modified"`
- 自动获取 title 以及更新 aliases
  - 设置 title 为第一个一级标题或文件名，并在 title 更新时将旧的 title 移动到 aliases 中。
- 插入创建时间（ctime）和更新修改时间（mtime）
  - 时间属性来自 ob 记录的文档的信息
  - 时间格式为 `YYYY-MM-DD HH:mm:ss`
- 设置 uid 为当前时间的特定格式（`YYYYMMDDHHmmssSSS`）。
- 去除重复值：从所有数组属性中去除重复值。

> [!tip]+ 脚本可以在阅读模式下触发

## 脚本源码

```js
// ! 固定的YAML属性
const fixedProperties = ["uid", "banner", "title", "aliases", "tags", "url", "description", 'cssclasses', "date", "created", "modified"];
module.exports = async (QuickAdd, settings, params) => {
  // 保存文件
  await app.commands.executeCommandById('editor:save-file');
  await new Promise(r => setTimeout(r, 300));

  // 获取当前文件信息
  const file = app.workspace.getActiveFile();
  if (!file) {
    return; // 如果获取不到文件信息，则不执行后续代码
  }
  const ctime = new Date(file.stat["ctime"]);
  const mtime = new Date(file.stat["mtime"]);

  // 获取文件缓存的元数据
  const cachedMetadata = await app.metadataCache.getFileCache(file);
  const headings = await cachedMetadata.headings;

  // 处理 YAML 属性  
  await app.fileManager.processFrontMatter(file, fm => {
    fixedProperties.forEach(prop => {
      if (!fm[prop]) {
        fm[prop] = ''; // 设置默认值为空字符串
      }
    });

    //! 设置 title 为第一个一级标题或文件名，且如果更新自动移动到aliases中
    // 或从第一个一级标题获取，如果有多个一级标题则还是文件名
    const fileName = file.basename.replace(/^[\d\.\_\-]+/, '');

    if (headings) {
      const levelOneHeadings = headings.filter(h => h.level === 1);
      const newTitle = levelOneHeadings.length === 1 ? levelOneHeadings[0].heading : fileName;
      if (fm.title && fm.title !== newTitle) {
        // 如果 title 已存在且与新获取的值不一致
        if (!Array.isArray(fm.aliases)) {
          fm.aliases = []; // 确保 aliases 是一个数组
        }
        fm.aliases.push(fm.title); // 将当前 title 添加到 aliases 中
      }
      fm.title = newTitle;
    } else {
      const newTitle = fileName;
      if (fm.title && fm.title !== newTitle) {
        if (!Array.isArray(fm.aliases)) {
          fm.aliases = [];
        }
        fm.aliases.push(fm.title);
      }

      fm.title = newTitle;
    }

    // ! 设置一些日期属性
    // 设置 uid 为 YYYYMMDDHHmmSSS 格式
    if (!fm["uid"]) {
      fm.uid = moment().format('YYYYMMDDHHmmssSSS');
    }
    // 如果 date 不存在，则设置为 ctime 格式化后的值
    if (!fm["date"]) {
      fm["date"] = moment(ctime).format('YYYY-MM-DD');
    }
    // 如果 created 不存在，则设置为 ctime 格式化后的值
    if (!fm["created"]) {
      fm["created"] = moment(ctime).format('YYYY-MM-DD HH:mm:ss');
    }

    // 设置 modified 为 mtime 格式化后的值
    fm["modified"] = moment(mtime).format('YYYY-MM-DD HH:mm:ss');

    // !去除所有数组属性中的重复值
    for (const key in fm) {
      if (Array.isArray(fm[key])) {
        fm[key] = [...new Set(fm[key])];
      }
    }

  });
};
```