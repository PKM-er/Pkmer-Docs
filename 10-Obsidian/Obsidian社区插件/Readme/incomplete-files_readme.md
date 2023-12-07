---
uid: 2023120719311425
title: Obsidian 插件：【Readme】Incomplete files
tags: ['obsidian插件', 'readme']
description: 基于规则的跟踪您的未完成文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Incomplete files

> [!Note] 插件名片
> - 插件名称：Incomplete files
> - 插件作者：Hananoshika Yomaru
> - 插件说明：基于规则的跟踪您的未完成文件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HananoshikaYomaru/obsidian-incomplete-files)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?incomplete-files)

## 概述

基于规则的跟踪您的未完成文件

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HananoshikaYomaru/obsidian-incomplete-files/master/README.md)
>

---

## Readme(翻译）

下面是 [[incomplete-files]] 插件的自述翻译

## Obsidian 不完整文件

该插件可以根据给定的规则帮助发现您的不完整文件。

✅ 强大而简单

![CleanShot 2023-11-17 at 14 22 52](https://cdn.pkmer.cn/covers/incomplete-files_1_0.gif!pkmer)

演示：<https://www.youtube.com/watch?v=GO3N-IdBNVA&ab_channel=YomaruHananoshika>

## 特点

1. 基于规则的不完整文件检测
2. 显示所有存在问题的不完整文件
3. 非侵入式，您只需安装插件，无需进行其他操作
4. 不完整文件视图：以列表形式查看所有不完整文件
   1. 查看该文件的最后更新时间
5. 实时更新您的不完整文件
6. 高度优化，分析文件速度快

## 规则

| 规则名称 | 描述 | 默认值 |
| -- | -- | -- |
| 空内容 | **此规则无法关闭**。当文件没有内容时，被视为不完整。 | ✅ |
| 标题为空 | 当标题没有内容时，被视为不完整。 | ✅ |
| 语法不完整 | 当文件具有不完整的语法时，被视为不完整。不完整的语法为 `%% INCOMPLETE(表示问题的字符串) %%` 或 `%% INCOMPLETE %%` | ✅ |

安装

通过社区插件商店

等待 Obsidian 团队的批准：<https://github.com/obsidianmd/obsidian-releases/pull/2681>

### 通过 BRAT

1. 安装 BRAT 插件
2. 进入插件选项，添加 beta 插件，复制并粘贴此存储库的链接。
3. 插件将自动出现在已安装的社区插件列表中，启用此插件。

### 手动安装

1. 切换到 `.obsidian/plugins` 目录
2. 克隆该仓库
3. `cd obsidian-incomplete-files && bun install && bun run build`
4. 完成！🎉
贡献

### 如何开始

1. 将此存储库克隆到您的插件中
2. 运行 `bun install`
3. 运行 `bun dev`

### 创建一个新规则

1. 在 `INCOMPLETE_ISSUE_TYPE` 中添加一个新的枚举
2. 同时在 `settingSchemas.ts` 中添加
3. 创建你的扫描器

```ts
export const issueScanners = [
	checkEmptyContent,
	checkEmptyContentHeading,
	checkIncompleteSyntax,
];

// 这是你可以参考的接口
export type IssueScanner = {
	issueType: INCOMPLETE_ISSUE_TYPE;
	func: ScanFunction;
	icon: string;
	setting: {
		name: string;
		description: string;
		default: boolean;
	};
};
```

1. 为你的扫描器创建一个测试用例
2. 在你的开发存储库中进行测试
3. 完成！🎉
如果您喜欢这个插件，请通过在 Github 上赞助我或在 [https://www.buymeacoffee.com/yomaru](https://www.buymeacoffee.com/yomaru) 上给我买杯咖啡来支持我的工作和热情。

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/hananoshikayomaru)
