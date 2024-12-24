---
uid: 20241224232415
title: Obsidian 样式 - 隐私模式之全部变为点点点
tags: [安全与隐私, CSS片段]
description: 不太强制的隐私模式，文字部分变为点点点，保留一部分可读的部分，图片模式模糊化处理。
author: 熊猫别熬夜,Huajin
type: other
draft: false
editable: false
modified: 20241224232510
---

# Obsidian 样式 - 隐私模式之全部变为点点点

![241218_Obsidian样式：隐私模式.md](https://cdn.pkmer.cn/images/202412242324228.png!pkmer)

不太强制的隐私模式，文字部分变为点点点，保留一部分可读的部分，图片模式模糊化处理。

可用 Style setting 设置的选项：

![241218_Obsidian样式：隐私模式.md](https://cdn.pkmer.cn/images/202412242324756.png!pkmer)

```css
/* @settings
name: 【字体-熊猫】隐私模式
id: 202412181338
settings:
  - 
      id: privacy-mode
      title: 隐私模式
      description: 文字加密，图片模糊
      type: class-toggle
      addCommand: true
  - 
      id: privacy-mode-text
      title: 文本显示模式
      type: variable-select
      default: circle
      options:
          - 
              label: 类似密码输入的点来显示文本
              value: disc
          - 
              label: 小圆圈替换文本
              value: circle
          - 
              label: 方块替换文本
              value: square
  - 
      id: privacy-mode-image
      title: 图片是否模糊化
      type: class-toggle
      default: true
*/

/* .privacy-mode span,li,h3,h2, */
.privacy-mode {
  .el-p,
  span, li{
    -webkit-text-security: var(--privacy-mode-text);
  }
  h1,h2,h3,h4,h5,h6{
    -webkit-text-security: none !important;
  }
}

.privacy-mode.privacy-mode-image :is(.media-embed, .image-container) :is(img, video, svg, canvas) {
  filter: blur(5px) !important;
}
```