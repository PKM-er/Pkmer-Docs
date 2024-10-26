---
uid: 20241026225253
title: QuickAdd 脚本 - 基于关联性图形文件来定位笔记的脚本
tags: [quickadd脚本, 工作流, 数据查询]
description: 通过直观的图片可视化展示，便能更快速、方便地定位到相关笔记。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20241026225951
---

# QuickAdd 脚本 - 基于关联性图形文件来定位笔记的脚本

有些时候，你只隐约记得笔记中的某张图片，但对具体的笔记或内容却不太清楚，不知道从何入手时，这个脚本可以帮助你通过图片轻松定位到相关笔记。

![24.10.25_QuickAdd脚本-基于关联性图形定位笔记的方案.md](https://cdn.pkmer.cn/images/202410262253101.png!pkmer)

> 目前，只通过 QuickAdd 的 Macro 脚本来实现，功能较为有限，期望有大佬能够开发成插件，实现更多功能，例如图片的排序和文件类型筛选。理想状态是借鉴 Eagle 素材管理界面的设计，提供更为灵活、直观的图片管理体验。

## 功能

**通过图片定位笔记**：通过直观的图片可视化展示，便能更快速、方便地定位到相关笔记。

![24.10.25_QuickAdd脚本-基于关联性图形定位笔记的方案.md](https://cdn.pkmer.cn/images/202410262253029.gif)

- 基于文件夹中笔记的检索：
	- 脚本会搜索文件夹内的所有笔记与之关联的图形文件。
		- 如果当前笔记是 FolderNote 时，会自动展开并展示该文件夹内的所有图形文件。
		- 如果当前笔记不是 FolderNote，则会显示选择框，默认选中当前笔记的父文件夹。
	- 特别适配了 Excalidraw，可以直接在可视化界面查看嵌入的图形文件
	- 不支持 Canvas 文件。
	- 支持的图形文件类型：`svg, gif, png, jpeg, jpg, webp, mp4`。
- 图片的搜索定位
	- 图片右下角的🔍按钮被单击时会激活 Obsidian 的搜索功能，以便快速定位使用该图片的笔记。
	- 图片可单击放大。
	- 每页图片最多有 50 个，大于 50 个则出现换页器。

## 注意事项

- 只会显示当前文件夹内的笔记中引用的图片。
- 以下情况的图片将不会被显示：
	1. 引用的笔记不在当前文件夹下。
	2. 当前文件夹下的图片未被任何笔记引用。

## QuickAdd Macro

```js
module.exports = async () => {
  const quickAddApi = app.plugins.plugins.quickadd.api;
  const path = require('path');
  const attachmentTypes = ['svg', 'gif', 'png', 'jpeg', 'jpg', 'webp', 'mp4'];
  const itemsPerPage = 50;

  // 获取ob的目录路径
  const listPaths = app.vault.getAllFolders().map(f => f.path);
  // listPaths.unshift("./");

  let choicePath = "";
  // 获取笔记的基本路径
  try {
    const activeFilePath = await app.workspace.getActiveFile().path;
    const fileName = path.basename(activeFilePath);
    const isFolderNote = path.basename(path.dirname(activeFilePath)) === fileName.replace(".md", "").replace(".canvas", "");
    if (isFolderNote) {
      choicePath = path.dirname(activeFilePath);
    } else {
      listPaths.unshift(path.dirname(activeFilePath));
    }
  } catch (error) {
    console.error("获取活动文件路径时出错:", error);
  }

  // 判断是否是文件夹笔记，如果为FolderNote则直接使用当前路径，否则弹出文件夹选择器
  if (!choicePath) {
    choicePath = await quickAddApi.suggester(listPaths, listPaths);
  }
  if (!choicePath) return;

  console.log(`选择路径: ${choicePath}`);

  // 记录开始时间
  const startTime = performance.now();

  // 获取文件数据
  const files = await app.vault.getFiles();
  const fileData = getMediaPathsbyFolderPath(files, choicePath, attachmentTypes);
  console.log(`获取了${fileData.length}个媒体文件`);
  await displayMedia({ fileData, attachmentTypes, itemsPerPage });

  // 创建一个 <style> 元素
  const style = document.createElement('style');
  // 定义 CSS 样式
  const css = `
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;
  gap: 10px 10px;
  width: 100%;


  .file-card {
    border: 1px solid var(--background-modifier-border);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: var(--background-primary);
    flex: 0 1 auto;
    height: 200px;
    width: 300px;
    box-sizing: border-box;

    .media-element, .image-element {
      display: block;
      width: 100%;
      cursor: pointer;
      object-fit: contain;
      max-width: 100%;
    }
  }
}

.pagination-container {
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 20px;

  .pagination-list {
    display: flex;
    justify-content: center;
  }
}

.media-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  img, video {
    max-width: 80%;
    max-height: 80%;
  }
}
  `;

  // 将 CSS 样式添加到 <style> 元素中
  style.appendChild(document.createTextNode(css));

  // 将 <style> 元素添加到文档的 <head> 中
  document.head.appendChild(style);

  // !计算加载时间
  const endTime = performance.now();
  const loadTime = ((endTime - startTime) / 1000).toFixed(2);

  // !显示加载时间
  new Notice(`✔ ${fileData.length}个文件已加载完毕! 加载时间: ${loadTime}秒`);



  async function displayMedia({ fileData, attachmentTypes, itemsPerPage = 10, page: currentPage = 1 }) {
    // !计算总页数
    const totalPages = Math.ceil(fileData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = fileData.slice(startIndex, endIndex);

    // ! 新建tab页
    const isFile = await app.workspace.getActiveFile();
    const leaf = await app.workspace.getLeaf(Boolean(isFile));
    await app.workspace.setActiveLeaf(leaf);
    const container = leaf.view.containerEl.children[1];
    container.innerHTML = '';

    // 创建卡片容器
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    // 使用 Promise.all 并行处理文件卡片创建
    const cardPromises = paginatedData.map(async ({ imgPath }) => {
      const file = await app.vault.getFileByPath(imgPath);
      return createFileCard(file, attachmentTypes);
    });

    const cards = await Promise.all(cardPromises);
    cards.forEach(card => cardContainer.appendChild(card));

    container.appendChild(cardContainer);

    // 添加分页控件
    if (fileData.length > itemsPerPage) {
      createPaginationControls({ fileData, totalPages, currentPage, itemsPerPage, cardContainer, attachmentTypes });
    }

  };

  function createFileCard(file, attachmentTypes) {
    const card = document.createElement("div");
    card.className = "file-card";
    card.style.position = "relative";

    let mediaElement = createMediaElement(file, attachmentTypes);
    if (mediaElement) {
      card.appendChild(mediaElement);
      const searchButton = createSearchButton(file);
      card.appendChild(searchButton);
    }

    return card;
  }

  function createPaginationControls({ fileData, totalPages, currentPage, itemsPerPage, cardContainer, attachmentTypes }) {
    const paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination-container";
    paginationContainer.style.display = "flex";
    paginationContainer.style.flexWrap = "wrap";

    const prevButton = document.createElement("button");
    prevButton.className = "pagination-button";
    prevButton.textContent = "上一页";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        displayMedia({ fileData, attachmentTypes, itemsPerPage, page: currentPage - 1 });
      }
    });
    paginationContainer.appendChild(prevButton);

    const paginationList = document.createElement("div");
    paginationList.className = "pagination-list";
    paginationList.style.display = "flex";
    paginationList.style.flexWrap = "wrap";
    paginationList.style.margin = "0 10px";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.className = "pagination-button";
      pageButton.textContent = i;
      pageButton.style.margin = "2px";
      pageButton.style.padding = "5px 10px";
      pageButton.style.border = "none";
      pageButton.style.borderRadius = "3px";
      pageButton.style.cursor = "pointer";
      pageButton.style.backgroundColor = i === currentPage ? "#0033cc" : "#e0e0e0";
      pageButton.style.color = i === currentPage ? "#ffffff" : "#000000";

      pageButton.addEventListener("click", () => {
        displayMedia({ fileData, attachmentTypes, itemsPerPage, page: i });
      });

      paginationList.appendChild(pageButton);
    }
    paginationContainer.appendChild(paginationList);

    const nextButton = document.createElement("button");
    nextButton.className = "pagination-button";
    nextButton.textContent = "下一页";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        displayMedia({ fileData, attachmentTypes, itemsPerPage, page: currentPage + 1 });
      }
    });
    paginationContainer.appendChild(nextButton);

    // 将分页控件作为兄弟元素添加到现有的 container 之后
    cardContainer.insertAdjacentElement('afterend', paginationContainer);
    console.log('分页控件添加到 DOM 中');
  }

  function createMediaElement(file, attachmentTypes) {
    let mediaElement;
    if (file.name.endsWith(".mp4")) {
      mediaElement = document.createElement("video");
      mediaElement.src = app.vault.getResourcePath(file);
      mediaElement.className = "media-element";
      mediaElement.controls = true;
    } else if (attachmentTypes.some(ext => file.name.endsWith(ext))) {
      mediaElement = document.createElement("img");
      mediaElement.src = app.vault.getResourcePath(file);
      mediaElement.className = "image-element";
      mediaElement.addEventListener("click", () => {
        openMediaInModal(mediaElement.src);
      });
    }
    return mediaElement;
  }

  function createSearchButton(file) {
    const searchButton = document.createElement("button");
    searchButton.innerHTML = "🔍";
    searchButton.className = "search-button";
    searchButton.style.position = "absolute";
    searchButton.style.bottom = "10px";
    searchButton.style.right = "10px";
    searchButton.addEventListener("click", () => {
      const searchQuery = encodeURIComponent(file.name);
      const searchUrl = `obsidian://search?vault=${encodeURIComponent(app.vault.getName())}&query="${searchQuery}"`;
      window.open(searchUrl, '_blank');
    });
    return searchButton;
  }

  function openMediaInModal(src) {
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "media-modal-overlay";

    let mediaElement;
    if (src.endsWith(".mp4")) {
      mediaElement = document.createElement("video");
      mediaElement.controls = true;
    } else {
      mediaElement = document.createElement("img");
    }
    mediaElement.src = src;
    modalOverlay.appendChild(mediaElement);

    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        document.body.removeChild(modalOverlay);
        window.isModalOpen = false;
      }
    });

    document.body.appendChild(modalOverlay);
  }

  function getFilePath(files, baseName) {
    let files2 = files.filter(f => path.basename(f.path).replace(".md", "") === path.basename(baseName).replace(".md", ""));
    let filePath = files2.map((f) => f.path);
    return filePath[0];
  }

  function getMediaPathsbyFolderPath(files, folderPath, attachmentTypes) {
    const selectFiles = folderPath === "./"
      ? files
      : files.filter(file => file.path.startsWith(`${folderPath}`));
    let allImgs = [];

    for (const file of selectFiles) {
      const cache = app.metadataCache.getFileCache(file);
      if (!cache) continue;

      let embeds = [];
      let links = [];

      const noteName = path.basename(file.path, path.extname(file.path));
      if (cache.embeds) {
        embeds = cache.embeds.map(e => ({
          link: e.link,
          position: e.position,
          noteName: noteName
        }));
      }
      if (cache.links) {
        links = cache.links.map(l => ({
          link: l.link,
          position: l.position,
          noteName: noteName
        }));
      }

      const allLinks = [...embeds, ...links];

      const media = allLinks.filter(link => {
        const fileExtension = path.extname(link.link).split('.').pop();
        return attachmentTypes.includes(fileExtension);
      });
      // console.log(`媒体文件: ${media}`);
      media.forEach(i => {
        const imgPath = getFilePath(files, i.link);
        if (imgPath) {
          allImgs.push({
            imgPath,
            notePath: file.path,
            position: i.position,
            noteName: i.noteName
          });
        }
      });
    }

    const uniqueMedia = [...new Set(allImgs.map(JSON.stringify))].map(JSON.parse);
    console.log(`找到的唯一图片数量: ${uniqueMedia.length}`);
    return uniqueMedia;
  }
};
```

## 参考资料

1. [[QuickAdd脚本-移动子笔记或附件到当前文件夹]]

