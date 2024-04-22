---
uid: 2024042221325058
title: Obsidian 插件：【Readme】my anime list text exporter
tags: ['obsidian插件', 'readme']
description: 为您的笔记添加动漫数据。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】my anime list text exporter

> [!Note] 插件名片
> - 插件名称：my anime list text exporter
> - 插件作者：XmoncocoX
> - 插件说明：为您的笔记添加动漫数据。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Xmoncoco/my_anime_list_text_exporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?my_anime_list_text_exporter)

## 概述

为您的笔记添加动漫数据。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Xmoncoco/my_anime_list_text_exporter/main/README.md)

---

## Readme(翻译）

下面是 [[my_anime_list_text_exporter]] 插件的自述翻译

# 将我的动漫清单转换为黑曜石

这个插件可以从你的动漫清单中在黑曜石中创建一个页面。

## 路线图

- [x] 有一个指向 jikan 的链接
- [x] 为每部动画创建一个页面
- [ ] 在插件中添加设置
    - [x] 添加动画列表的路径
    - [ ] 选择要添加的标签
    - [ ] 创建一个自定义模板
    - [ ] 检查列表设置
- [x] 在每个页面中添加标签
- [x] 在每个页面中添加简介
- [ ] 在动画页面中添加链接
- [ ] 在页面中添加角色
- [ ] 添加一种方式将动画放入检查列表

## 构建

```bash
git clone https://github.com/Xmoncoco/my_anime_list_to_obsidian.git
cd my_anime_list_to_obsidian
npm install
npm run dev
```

## 安装

### 来自 Obsidian 社区插件页面（推荐）（尚未提供）

1. 打开 Obsidian
2. 转到设置 > 第三方插件
3. 确保安全模式为**关闭**
4. 点击浏览社区插件
5. 搜索“将我的动漫列表添加到 Obsidian”

### 来自 GitHub 代码

1. 从 [GitHub 发布页面] 下载最新版本
2. 将 zip 存档解压缩到 `<vault>/.obsidian/plugins/` 中，以便 `main.js` 文件位于 `<vault>/.obsidian/plugins/my_anime_list_to_obsidian/`
3. 删除除了 'main.js' 和 'manifest.json' 文件之外的所有文件
4. 进入 Obsidian
5. 进入设置 > 插件
6. 激活插件

## 使用方法

1. 打开命令面板（ctrl + p 或 cmd + p）
2. 搜索“为动漫创建笔记”
3. 输入动漫名称
4. 点击提交。
就是这样。

## 贡献

欢迎贡献！如果您有功能请求、错误报告或想要改进插件，请随时 fork 存储库并提交 pull 请求。

## 许可证

该项目根据 MIT 许可证进行许可。有关更多详细信息，请参阅 LICENSE 文件。
