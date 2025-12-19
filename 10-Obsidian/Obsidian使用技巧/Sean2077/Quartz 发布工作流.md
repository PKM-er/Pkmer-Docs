---
uid: 20251129103358
title: Obsidian  Quartz 构建的个人知识发布体系
tags: [发布,知识体系,Quartz]
description: Obsidian  Quartz v4 构建的个人知识发布体系
author: sean2077
type: advanced
draft: false
editable: false
modified: 20251129103358
---

# Obsidian + Quartz v4  构建的个人知识发布体系

## 概述

本文描述了基于 **Obsidian + Quartz v4** 构建的个人知识发布体系，采用双仓库架构，确保私有笔记与公开博客严格隔离。

**实施策略**：
1. **阶段一（当前）**：本地手动构建与发布，流程可控
2. **阶段二（未来）**：配置 CI/CD 自动化流水线

## 核心流程

### 阶段一：本地手动发布流程（当前）

```mermaid
flowchart LR
    A[Obsidian 编辑] --> B[本地 Quartz 构建]
    B --> C[本地预览检查]
    C --> D[Wrangler 部署]
    D --> E[Cloudflare Pages]
```

### 阶段二：CI 自动化流程（未来）

```mermaid
flowchart LR
    A[Obsidian 编辑] --> B[Git Push]
    B --> C[vault CI]
    C --> D[触发 quartz-site]
    D --> E[拉取 vault]
    E --> F[筛选 & 构建]
    F --> G[部署]
```

## 仓库架构

| 仓库             | 可见性           | 职责                               |
| ---------------- | ---------------- | ---------------------------------- |
| `obsidian-vault` | Private          | 存储所有笔记，包含私有内容         |
| `quartz-site`    | Private / Public | Quartz 配置 + 构建，拉取并筛选内容 |

> [!NOTE]
> 项目 [quartz-site](https://github.com/sean2077/quartz-site) 是 [Quartz](https://github.com/jackyzha0/quartz) 的魔改 Fork 版本。

## 工作流详解

### 阶段一：本地手动发布（当前）

1. **编辑**：在 `obsidian-vault` 中编辑笔记，添加 `publish: true`。
2. **构建**：在 `quartz-site` 目录运行构建命令，读取 `obsidian-vault` 内容。
   ```bash
   npx quartz build -d obsidian-vault
   ```
3. **预览**：本地检查生成结果。
   ```bash
   npx wrangler pages dev public
   ```
4. **部署**：使用 Wrangler 手动推送到 Cloudflare Pages。
   ```bash
   npx wrangler pages deploy public --project-name=quartz-site
   ```

> [!TIP]
> 将 `quartz-site` 替换成你的博客项目名称。

### 阶段二：CI 自动化（未来）

1. vault 提交触发 CI，检测是否有博客相关变更
2. 通过 `repository_dispatch` 触发 quartz-site workflow
3. quartz-site CI 拉取 vault 仓库（使用 Deploy Key）
4. Quartz 执行筛选（`publish: true`）、构建、部署

## 隐私安全机制

采用**白名单 + 黑名单双重防护**：

### 第一层：显式发布标记（白名单）

只有 Frontmatter 包含 `publish: true` 的笔记才会发布。使用 Quartz 内置的 `ExplicitPublish` 插件。

### 第二层：路径黑名单（绝对排除）

通过 `ignorePatterns` 配置，某些目录下的笔记无论是否有 `publish: true` 都不会发布（如 `0D 时记/`、`2A~2J 个人区/`）。

**双重保险**：
- 忘记加 `publish: true` → 第一层拦截
- 误加 `publish: true` 到私密目录 → 第二层拦截

### 第三层：构建前审查（可选）

部署前可生成待发布文件清单，人工确认或自动检查。

### 第四层：仓库隔离与权限控制

| 方案              | 风险等级 | 说明                  |
| ----------------- | -------- | --------------------- |
| Deploy Key (只读) | 中       | 密钥泄露 = vault 可读 |
| PAT               | 高       | 可能影响所有仓库      |
| GitHub App        | 低       | 可细粒度控制权限      |

**风险缓解**：Deploy Key 只读、定期轮换、开启安全监控。

> [!WARNING] 权限风险
> 只要 quartz-site 需要拉取 vault，就存在密钥泄露风险。如需更高安全性，可考虑 **Push 模式**：由 vault CI 主动推送筛选后的内容。

## 风险检查清单

- [ ] 博客文章都有 `publish: true`
- [ ] 私有笔记**没有** `publish: true`
- [ ] `ignorePatterns` 包含所有私密目录
- [ ] Quartz 启用 `ExplicitPublish` 插件
- [ ] 定期检查已发布内容

> [!WARNING] 安全原则
> **默认不发布，只有明确标记的才发布**。不要依赖黑名单排除私有内容。
