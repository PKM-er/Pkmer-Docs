---
uid: 20240531210252
title: QuickAdd 脚本 -canvas 节点大小自适应文字
tags: [quickadd脚本]
description: 尝试让canvas的每个节点大小自适应文字长度，重改canvas排版
author: calmwaves
type: other
draft: false
editable: false
modified: 20240531212001
---

# QuickAdd 脚本 -canvas 节点大小自适应文字

## 效果展示

![](https://cdn.pkmer.cn/images/PixPin_2024-05-31_21-15-55.gif!pkmer)

原理就是首先设定卡片的固定宽度，然后根据 canvas 里的文本长度，计算卡片高度。

每列四个卡片，然后就重起一列排列。

由于 css 中的字体大小，行高等设定，计算出来的结果并不完全准确，再加上添加图片，链接等阅读模式下对于高度影响过大，因此卡片大小并不能完全自适应内容。

可改参数：`node.width` `fontsize` `nodesPerColumn` `columnSpacing` `spacing`

```js
module.exports = async (params) => {
  async function updateJSONFile() {
    try {
      // 读取文件内容
      const fileContent = await app.vault.cachedRead(app.workspace.getActiveFile());
      // 解析JSON内容
      const jsonObj = JSON.parse(fileContent);

      let currentY = 0; // 用于跟踪当前累积的高度
      const spacing = 20; // 行之间的间距
      const nodesPerColumn = 4; // 每列的节点数
      const initialX = 0; // 初始x坐标
      const columnSpacing = 100; // 列之间的间距

      // 遍历nodes数组，更新每个元素
      jsonObj.nodes.forEach((node, index) => {
        // 根据text长度和文字大小计算height
        const textLength = node.text.length;

        node.width = 600; // 修改width属性
        const fontsize = 16; // 一个文字的大小是16px
        const lineNumber = node.width / fontsize; // 计算每行可以容纳的字符数
        const lines = Math.ceil(textLength / lineNumber); // 计算总行数
        const newlineCount = node.text.split("\n").length - 1; // 计算换行符的数量
        node.height = (lines + newlineCount) * fontsize * 1.15; // 根据总行数和换行符数量计算height
        node.height = Math.round(node.height);

        // 如果是新的列的第一个节点，重置currentY
        if (index % nodesPerColumn === 0) {
          currentY = 0;
        }

        // 更新node的y坐标
        node.y = currentY;

        // 计算当前节点所在的列
        const column = Math.floor(index / nodesPerColumn);
        // 计算当前列的x坐标
        node.x = initialX + column * (node.width + columnSpacing);

        // 更新currentY以供下一个node使用，包括间距
        currentY += node.height + spacing;
      });

      // 将修改后的JSON对象转换回字符串
      const updatedContent = JSON.stringify(jsonObj, null, 2); // 使用两个空格缩进

      // 写入文件
      await app.vault.modify(app.workspace.getActiveFile(), updatedContent);
      // console.log('文件已更新');
    } catch (error) {
      console.error("更新文件时出错:", error);
    }
  }

  // 调用函数
  updateJSONFile();
};

```