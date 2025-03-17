---
uid: 20250217095038
title: Obsidian 插件：Vault Full Statistics
tags: ['导航与状态栏', '数据分析', '界面优化', 'obsidian插件']
description: 状态栏项目，包含库的完整统计信息，如笔记数量、文件、附件、链接、标签和库的质量。
author: Kris20030907
type: other
draft: false
editable: false
modified: 20250217095231
---

# Vault Full Statistics - 全面统计你的 Obsidian 知识库

## 概述

Vault Full Statistics 插件为 Obsidian 提供了详细的统计信息，显示在状态栏中。它可以统计笔记数量、附件数量、文件数量、链接数量、字数、文件总大小、标签数量以及新特性“库质量”（链接数量与笔记数量的比值）。此插件适用于需要全面了解笔记库状态的用户，帮助他们更好地管理和优化笔记内容。安装简单，可以通过 BRAT 插件或手动下载并放置在指定目录中。用户可通过点击或悬停状态栏项目查看不同的统计信息，满足个性化需求。

> [!Note] 插件名片
> - 插件名称：Vault Full Statistics
> - 插件作者：Mikhail Savin
> - 插件说明：状态栏项目，包含库的完整统计信息，如笔记数量、文件、附件、链接、标签和库的质量。
> - 插件分类：[' 导航与状态栏 ', ' 数据分析 ', ' 界面优化 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/jtprogru/obsidian-vault-full-statistics-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-full-statistics)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jtprogru/obsidian-vault-full-statistics-plugin/main/README.md)

在 Pkmer 社区官方插件内即可安装使用！

![vault-full-statistics|400](https://cdn.pkmer.cn/images/20250217095538.png!pkmer)


> 深度解析你的数字花园生长状态，让每个数据都成为优化知识管理的指南针

## 插件定位

一款专注于 **实时数据监测** 的 Obsidian 状态栏增强插件，通过 8 大核心指标帮助用户：

- 📈 量化知识库成长轨迹
- 🔍 诊断笔记网络健康度
- 🎯 定位内容优化方向

## 功能全景图

### 核心统计指标

| 指标类型        | 统计维度             | 分析价值               |
|-----------------|----------------------|------------------------|
| 基础规模        | 笔记/文件/附件数量   | 知识库体量评估         |
| 连接密度        | 内部链接/标签数量    | 知识网络复杂度分析     |
| 内容质量        | 库质量（链接笔记比） | 内容关联性健康度检测   |
| 创作效能        | 总字数/文件大小      | 输出能力可视化         |

### 特色功能解析

#### 1. 库质量评分系统

**计算公式**：`库质量 = 链接总数 / 笔记总数`
通过这个独创指标可以：
- ✅ **0.5-1.5**：健康区间（知识网络适度连接）
- ⚠️ **<0.5**：需加强笔记间关联
- ⚠️ **>1.5**：可能存在过度链接

#### 2. 智能状态栏交互

- **单击切换**：轮播查看不同统计维度
- **悬停明细**：显示指标计算逻辑与优化建议
- **右键菜单**：快速导出当前快照数据（CSV/JSON）

### 实际效果

鼠标悬停：

![image.png](https://cdn.pkmer.cn/images/20250217095619.png!pkmer)

动态：

![413505512-72dfa732-41ec-4282-b29e-5893e8af5255.gif](https://cdn.pkmer.cn/images/413505512-72dfa732-41ec-4282-b29e-5893e8af5255.gif!pkmer)

### 自定义展示数据

打开插件设置，勾选 `Show individual items` 选项即可自由决定展示数据：

![image.png](https://cdn.pkmer.cn/images/20250217095803.png!pkmer)

### 高级技巧

```javascript
// 示例：通过 Dataview 扩展统计（需配合 Dataview 插件）
```dataview
TABLE length(file.outlinks) AS 外链数 
WHERE file = this.file
```

### 实战应用场景

**案例：知识库健康诊断**
某用户统计发现：
- 总笔记：327 篇
- 内部链接：89 个
- 库质量值：0.27

## 插件生态位分析

| 特性    | 官方统计插件 | Tracker | 本插件  |
| ----- | ------ | ------- | ---- |
| 实时可见性 | ❌      | ❌       | ✅    |
| 交互便捷性 | ⭐⭐     | ⭐⭐      | ⭐⭐⭐⭐ |
| 数据维度  | 基础统计   | 习惯追踪    | 网络分析 |
| 学习成本  | 低      | 高       | 中    |

## 使用建议

**推荐人群**
🧑💻 数字花园维护者
📚 学术论文写作者
🔗 双链笔记深度用户

**配置推荐**

```yaml
# 示例配置（.obsidian/settings.json）
{
  "statDisplayOrder": ["notes", "links", "quality"],
  "qualityWarningThreshold": 0.5,
  "autoRefreshInterval": 300
}
```

