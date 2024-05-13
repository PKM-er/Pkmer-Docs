---
uid: 20240512102955
title: QuickAdd 脚本 - 带图复制 - 自动上传图片到图床
tags: [图床, 笔记分享]
description: 带图复制 - 自动上传图片到图床，便于复制到其他在线平台
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240512140551
---

# QuickAdd 脚本 - 带图复制 - 自动上传图片到图床

![2024-05-06_QuickAdd脚本-带图复制-自动上传图片到图床_IMG-1.gif](https://cdn.pkmer.cn/images/202405121043617.gif!pkmer)

## 需求分析

![2024-05-06_QuickAdd脚本-带图复制-自动上传图片到图床_IMG-4.png](https://cdn.pkmer.cn/images/202405121030951.png!pkmer)

有时候我们想要分享自己的笔记到网络上。但 Obsidian 笔记本身存在 WIKI 链接语法以及图片保存在本地，不太方便转换。希望有一种方法可以将包含本地图片的 Markdown 文章一键转换为在知乎、CSDN 等网站上能够正确显示图片的形式，以便分享更加便捷，内容展示更完整。

## 实现方法

最好的办法就是将图片上传到图床，但又不想改变笔记原来的结构，只想把图片保留到本地，因此该脚本的作用就是自动检测复制文本中存在的本地图片链接，将图片上传到图床替换为在线 Markdown 图片格式。

1. 检测本地图片链接
2. 图片上传至图床
	1. PS: 上传的是 PicGo 的接口，图床设置请自行了解
3. 替换 Markdown 文章中图片链接
4. 发送到剪切板并提示

> PS: 本方法灵感来源于 Ob 群友**新奥尔良烤乳猪**和**简哲**之间的讨论。

直接的 Markdown 可能不能直接转到知乎，微信等平台，目前还不支持自动识别 Markdown 语法，可以借助 [墨滴](https://www.mdnice.com/) 来辅助转换一下哈，这样各个平台都比较好转发，以及知乎、微信之类的会自动识别图片链接上传到它们自己的图床上。

## 脚本思路

最好的办法就是将图片上传到图床，但又不想改变笔记原来的结构，只想把图片保留到本地，因此该脚本的作用就是自动检测复制文本中存在的本地图片链接，将图片上传到图床替换为在线 Markdown 图片格式。

1. 检测本地图片链接
2. 图片上传至图床
    1. PS: 上传的是 PicGo 的接口，图床设置请自行了解
3. 替换 Markdown 文章中图片链接
4. 发送到剪切板并提示

> PS: 本方法灵感来源于 Ob 群友**新奥尔良烤乳猪**和**简哲**之间的讨论。

此脚本只为方便上传图片和复制格式为 Markdown 格式文本，直接的 Markdown 不能直接转到知乎，微信等平台，目前还不支持自动识别 Markdown 语法，但可以借助 [墨滴 5](https://www.mdnice.com/) 来辅助转换一下为对应的格式即可，同时知乎、微信之类的会自动识别图片链接上传到它们自己的图床上。

如果只是少数笔记需要发布的话，可以使用 [[copy-document-as-html_readme|copy document as html]] 插件来通过复制到微信公众号或 CSDN 等富文本编辑器支持的平台，知乎的话其实用 vscode 的 zhihu 插件，持富文本编辑器的直接粘贴 html 就会转换。

## 不足之处

- 相同文档多次复制会重复上传已有图片
- 如果一行多个图片的话，正则匹配不到

## 脚本源码

```js
const path = require('path');
const quickAddApi = app.plugins.plugins.quickadd.api;
const { editor, file, containerEl } = app.workspace.activeEditor;
const url = "http://127.0.0.1:36677/upload";

module.exports = async () => {
  const files = app.vault.getFiles();
  let selection = "";
  let content = "";
  selection = editor.getSelection();
  console.log(selection);
  for (let line of selection.split("\n")) {
    let embed = "";
    if (line) {
      embed = matchSelectionEmbed(line);
    }
    console.log(embed);
    if (embed && /\.(png|jpg|jpeg|gif|bmp)$/.test(embed)) {
      let wikiPath = getFilePath(files, embed); // 匹配Wiki链接
      // 获取绝对路径
      const imgPath = app.vault.adapter.getFullPath(wikiPath);
      console.log(imgPath);
      const data = await uploadFiles([imgPath], url);
      if (data.success) {
        const imgWiki = `[[${embed}]]`;
        const imgLink = `[${embed}](${data.result})`;
        line = line.replace(imgWiki, imgLink);
      } else {
        new Notice(`❌上传${imgPath.name}图片失败`);
      }
    }
    content += line + "\n";
  }
  console.log(content);
  copyToClipboard(content)
  new Notice(`✅复制成功`);
};


// 获取文件路径函数
function getFilePath(files, baseName) {
  let files2 = files.filter(f => path.basename(f.path).replace(".md", "") === baseName.replace(".md", ""));
  let filePath = files2.map((f) => f.path);
  return filePath[0];
}

function matchSelectionEmbed(text) {
  const regex = /\[\[?([^\]]*?)(\|.*)?\]\]?\(?([^)\n]*)\)?/;
  const matches = text.match(regex);
  if (!matches) return;
  if (matches[3]) return decodeURIComponent(matches[3]);
  if (matches[1]) return decodeURIComponent(matches[1]);
}

async function uploadFiles(imagePathList, url) {
  const response = await requestUrl({
    url: url,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ list: imagePathList }),
  });
  data = await response.json;
  return data;
};

function copyToClipboard(extrTexts) {
  const txtArea = document.createElement('textarea');
  txtArea.value = extrTexts;
  document.body.appendChild(txtArea);
  txtArea.select();
  if (document.execCommand('copy')) {
      console.log('copy to clipboard.');
  }else{
      console.log('fail to copy.');
  }
  document.body.removeChild(txtArea);
}

```

## Reference

- [[自定义Excalidraw脚本-上传画板中的图片到图床]]
- [[QuickAdd脚本-移动子笔记或附件到当前文件夹]]

