---
uid: 2023120522252341
title: Obsidian 插件：【Readme】Hexo Auto updater
tags: ['obsidian插件', 'readme']
description: Hexo插件，可以实现自动更新。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Hexo Auto updater

> [!Note] 插件名片
> - 插件名称：Hexo Auto updater
> - 插件作者：Zhenjia Zhou
> - 插件说明：Hexo 插件，可以实现自动更新。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lifeodyssey/obsidian-hexo-auto-update)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hexo-auto-updater)

## 概述

Hexo 插件，可以实现自动更新。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lifeodyssey/obsidian-hexo-auto-update/main/README.md)

---

## Readme(翻译）

下面是 [[hexo-auto-updater]] 插件的自述翻译

# Obsidian-Hexo 集成插件

Obsidian-Hexo 集成插件允许您监控 Obsidian 保险库中的更改，特别是 _posts 文件夹，并自动提交并推送到您的 Hexo 博客存储库，无需设置本地 node.js 环境，并加快从写作到发布的速度。

## 特点

### 无需本地环境

当你想要发布博客时，Hexo 需要很多依赖，并且经常会引入许多版本冲突。

这个插件允许你在不设置本地环境的情况下发布博客。你只需要一个 GitHub 账号和源 markdown 文件。编译将在 GitHub Actions 服务器上运行。

### 与 Obsidian 的集成

Obsidian 是一款很棒的笔记应用，也是一款很棒的写博客工具。这个插件允许你在 Obsidian 中编写博客文章，并通过一键发布到博客，无需在应用之间切换，也无需手动提交和推送更改。

### 自动部署

推送的更改将触发 GitHub Actions 工作流程，该工作流程将自动编译并部署您的博客到 GitHub Pages。

### 云存储支持

该插件支持云存储，如 iCloud、Dropbox、OneDrive 等。您可以使用云存储在设备之间同步您的 Obsidian 保险库。在我的情况下，我将 Obsidian 保险库和博客源文件都存储在 OneDrive 中。

### 未来功能列表

- [ ] 在 Windows 上启用该功能。目前仅支持 macOS。
- [ ] 对代码质量进行单元测试、集成测试和相关 CI。
- [ ] 在 Github Actions 中将 Obsidian 风格的内部链接转换和替换为 Hexo 风格的 URL。

## 安装

### 先决条件

在这个插件中，我们需要两个仓库。一个是源文件仓库，另一个是博客仓库。

博客源文件仓库是您用来存储博客源文件的仓库。它可以是私有的。另一个仓库用于存储编译后的静态网页文件。请按照 [GitHub Pages](https://pages.github.co) 的要求进行操作。

然后，请使用以下命令生成 SSH 密钥对：

``ssh-keygen -t rsa -b 4096 -C “example@email.com” -f deploy-key ``

### GitHub 仓库设置

在用于存储博客源文件的仓库中，请执行以下操作：

1. 将密钥添加到仓库的密钥中，按照此 [链接](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) 进行操作。
2. 设置 GitHub Actions。在仓库的顶层目录中，创建一个名为.github/workflows 的文件夹。在该文件夹中，创建一个名为 hexo.yml 的文件。将以下内容复制到文件中。

```
name: deploy blog

on:
  push:
    branches:
      - main

env:
  GIT_USER: exampleuser
  GIT_EMAIL: exampleuser@email.com
  THEME_REPO: https://github.com/next-theme/hexo-theme-next
  THEME_BRANCH: master
  DEPLOY_REPO: exampleuser/exampleuser.github.io
  DEPLOY_BRANCH: master

jobs:
  build:
    name: Build on node ${{ matrix.node_version }} and ${{ matrix.os }}
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest]
        node_version: [18.x]

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Checkout deploy repo
        uses: actions/checkout@v3
        with:
          repository: ${{ env.DEPLOY_REPO }}
          ref: ${{ env.DEPLOY_BRANCH }}
          path: .deploy_git

      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node_version }}

      - name: Set up SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.PRIVIATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

      - name: Configuration environment
        run: |
          sudo timedatectl set-timezone "YOUR TIME ZONE"
          git config --global user.name $GIT_USER
          git config --global user.email $GIT_EMAIL

      - name: Install dependencies
        run: |
          sudo apt-get install pandoc
          npx npm-check-updates -u  
          npm install hexo-cli -g
          npm install

      - name: Deploy hexo
        run: |
          eval "$(ssh-agent -s)"
          ssh-add ~/.ssh/id_rsa
          npm run clean
          npm run build
          npm run deploy
```

请将用户名、电子邮件和私钥名称替换为您自己的内容。

在用于存储编译后的静态网页文件的仓库中，请按照此 [链接](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys) 将公钥添加到仓库的部署密钥中。

### Obsidian 设置

在 Obsidian 中安装插件，并使用选择按钮选择目标文件夹（我建议选择 Hexo 根路径中的 ``source`` 文件夹）。

### 写作和发布

从 GitHub 仓库下载最新版本。

从 zip 文件中提取 obsidian-hexo-integration 文件夹到您的 vault 的插件文件夹：<vault>/.obsidian/plugins/

注意：在某些操作系统上，它可能是一个隐藏文件夹。

重新加载 Obsidian

如果插件安装正确，您将在设置选项卡中看到一个新的 Obsidian Hexo Integration 选项。

使用方法

安装完插件后，进入设置并指定 Hexo 博客源路径。插件将监视 _posts 目录中的更改，并自动提交和推送更改到您的博客仓库。

支持

请为支持打开一个问题。

## 贡献

请使用 Github Flow 进行贡献。创建一个分支，添加提交，并打开一个拉取请求。

请用适当的内容替换占位符，并确保根据您的插件功能详细说明特性和用法。
