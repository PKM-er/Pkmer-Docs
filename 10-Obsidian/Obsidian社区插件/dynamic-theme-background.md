---
uid: 20250812211425
title: Obsidian 插件：DTB-在 Obsidian 中打造你的专属壁纸库
tags: ['美化工具', '主题工具', 'obsidian插件']
description: 在 Obsidian 中打造你的专属壁纸库
author: Sean2077
type: auto
draft: false
editable: false
modified: 20250812211915
---

# Obsidian 插件：DTB- 在 Obsidian 中打造你的专属壁纸库

> [!Note] 插件名片
> - 插件名称：dynamic-theme-background
> - 插件作者：Sean2077
> - 插件说明：在 Obsidian 中打造你的专属壁纸库
> - 插件分类：[' 美化工具 ', ' 主题工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/sean2077/obsidian-dynamic-theme-background)
> - 国内下载地址：
> - 自述文件：[README](https://github.com/sean2077/obsidian-dynamic-theme-background/blob/master/README.zh.md)



## 介绍

Obsidian Dynamic Theme Background 插件旨在为用户提供一个高度可定制且智能的壁纸管理解决方案。通过集成多个知名壁纸源（如 Unsplash、Pixabay、Pexels、Wallhaven）以及支持自定义 API，用户可以轻松构建个性化的壁纸库。插件支持本地与远程图片的混合管理，允许用户根据时间段自动切换壁纸，营造不同的工作与休息氛围。

**核心目标**：让每一位 Obsidian 用户都能拥有属于自己的极致壁纸体验，让知识管理变得更加美好和富有灵感。

## ✨ 主要特性

- 🖼️ **强大的壁纸源支持，打造个性化壁纸库**
  - 🌐 **多源壁纸库**：集成 Unsplash、Pixabay、Pexels、Wallhaven 及自定义 API，轻松打造属于你的 Obsidian 壁纸库
  - 📁 **本地与远程图片混合管理**：支持本地图片与网络图片灵活添加，壁纸收集与管理更自由
- 🎨 **极佳的视觉体验与主题兼容性**
  - 🎚️ **壁纸属性自定义**：可调节模糊度、亮度、饱和度、色彩等参数，适配任意主题风格
  - 🧩 **极致主题兼容性**：所有样式均采用 Obsidian CSS 变量，完美融合各类主题，支持暗色/浅色模式
- ⚡ **高度可定制的壁纸更换规则，满足多样化需求**
  - ⏰ **智能时间段切换**：根据设定的时间段自动更换壁纸，营造不同工作/休息氛围
  - 🔄 **按时间间隔切换**：支持按分钟自动切换壁纸，定时刷新视觉体验
  - 🎲 **一键随机/手动切换**：命令面板快速切换壁纸，随时获取新灵感
- 🤝 **优异的用户体验设计，操作便捷直观**
  - 🚀 **性能优化**：异步加载、缓存机制，确保流畅体验
  - 🖼️ **提供丰富的默认壁纸和 API 示例**：让用户快速上手
  - 🏷️ **类型徽章与预览动画**：每个壁纸项均有类型徽章、预览动画，视觉反馈丰富
  - 🗂️ **批量操作与快捷命令**：支持批量添加、删除、切换壁纸，效率工具一应俱全
- 📦 **更丰富的背景体验（规划中）**
  - 🌦️ **天气等实时数据联动**：计划支持根据天气、时间等实时数据自动变换背景
  - 🎭 **主题包功能&主题包市场**：让用户可以获取他人定制的主题配置
  - 🎬 **动态图背景**：支持视频、GIF 等动态多媒体背景
  - 🎵 **音频背景**：为壁纸添加环境音效，打造沉浸式专注体验
  - 🤖 **AI 生成背景**：集成 AI 生成壁纸，个性化创作无限可能
  - 📱 **响应式与移动端适配**：桌面与移动端均有优雅布局和流畅交互
  - 🚧 **更多创新特性**：持续迭代，敬请期待！

## 🖼️ 效果预览

### 使用壁纸 API

![dtb-demo2](https://cdn.pkmer.cn/images/202508122109961.gif!pkmer)

### 与已有主题兼容

![dtb-demo](https://cdn.pkmer.cn/images/202508122109963.gif!pkmer)

## ⬇️ 安装

### 🛒 方法一：通过 Obsidian 插件市场安装

TODO：待 Obsidian 插件市场审核通过后

pull request: <https://github.com/obsidianmd/obsidian-releases/pull/7359>

### 🛠️ 方法二：通过 BRAT 插件安装

1. 安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件
2. 在 BRAT 插件中 Add beta plugin -> 输入本项目的 GitHub 地址 `https://github.com/sean2077/obsidian-dynamic-theme-background`，并安装
3. 在 Obsidian 中启用插件

### 📦 方法三：手动安装

1. 下载最新版本的 `main.js`、`manifest.json` 和 `styles.css` 文件
2. 在你的 Obsidian 库中创建文件夹：`.obsidian/plugins/obsidian-dynamic-theme-background/`
3. 将下载的文件放入该文件夹
4. 重启 Obsidian 并在设置中启用插件

## 🚀 使用

### ⚡ 快速开始

1. **启用插件**：在 Obsidian 设置中启用 Dynamic Theme Background 插件
2. **添加背景**：在插件设置页面添加你喜欢的壁纸（本地图片、网络图片或 API 壁纸）
3. **配置规则**：设置时间段切换规则或间隔切换模式
4. **享受体验**：使用命令面板快速切换，或让插件自动为你更换背景

### 💡 命令

在命令面板（Ctrl/Cmd + P）中输入 `dtb` 即可找到所有相关命令。

💡 **小贴士**：建议使用命令在新标签页打开设置页面，可以边预览边调整设置。

## ❓ 常见问题

- **背景显示模糊或不清晰？**
  - 可以在设置中调整模糊度参数，或选择更高分辨率的图片。
- **如何添加本地图片作为背景？**
  - 在设置页面点击 " 添加背景 "，选择 " 图片 " 类型，然后输入相对于库根目录的路径。
- **API 无法获取壁纸？**
  - 请检查网络连接，确认 API 密钥正确配置，并查看插件设置中的状态指示器。
- **API 启用失败？**
  - 启用 API 时，插件会尝试从指定源获取壁纸，如果失败会显示错误信息并回退到未启用状态。
- **插件与我的主题不兼容？**
  - 插件使用 Obsidian 标准 CSS 变量，应该与大多数主题兼容。如遇问题请在 GitHub 提交 issue。

## 📝 注意事项

1. **主题兼容性**：插件主要针对暗色主题优化，浅色主题使用时可能需要调整参数。
2. **样式覆盖说明**：插件会修改以下 CSS 变量来实现背景效果，请了解可能对现有主题的影响：

```css
.dtb-enabled :not(.modal):not(.modal *) {
    --background-primary: var(--dtb-bg-color) !important;
    --background-primary-alt: var(--dtb-bg-color) !important;
    --background-secondary: var(--dtb-bg-color) !important;
    --background-secondary-alt: var(--dtb-bg-color) !important;
}
.dtb-enabled .workspace::before {
    background-image: var(--dtb-bg-image);
    background-size: var(--dtb-bg-size);
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(var(--dtb-blur-depth)) brightness(var(--dtb-brightness)) saturate(var(--dtb-saturate));
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
```
