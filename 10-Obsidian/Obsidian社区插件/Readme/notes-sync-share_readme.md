---
uid: 20240227160841
title: Obsidian 插件：【Readme】Notes Sync Share
tags: ['obsidian插件', 'readme']
description: 在您自己的私人服务中同步和共享（发布）您的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Notes Sync Share

> [!Note] 插件名片
> - 插件名称：Notes Sync Share
> - 插件作者：Alt-er
> - 插件说明：在您自己的私人服务中同步和共享（发布）您的笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Alt-er/obsidian-sync-share)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notes-sync-share)

## 概述

在您自己的私人服务中同步和共享（发布）您的笔记。

![Notes Sync Share](https://cdn.pkmer.cn/covers/notes-sync-share.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Alt-er/obsidian-sync-share/master/README.md)

---

## Readme(翻译）

下面是 [[notes-sync-share]] 插件的自述翻译

[简体中文](/README-zh_CN.md)

# 笔记同步分享

**笔记同步分享**是一个 Obsidian 插件，它允许您将笔记同步和分享（发布）到您自己的私有服务。通过这个插件，您可以轻松将 Obsidian 笔记同步到自托管的服务，并完全掌控您的数据。

## 特点

- **同步**：无缝同步您的 Obsidian 笔记到您的私有服务。您的笔记将始终在多个设备上保持最新。
- **发布和分享**：轻松地将选定的笔记发布和分享到您的私有服务。与他人分享您的知识或与团队成员合作。
- **隐私和控制**：保持您的笔记安全和私密。您的数据存储在您自己的自托管服务中，使您对信息拥有完全控制权。

注意：同步和分享功能可以独立使用，您可以只使用其中一个，例如：只使用分享功能，而使用其他 Obsidian 插件完成同步功能是可能的。

截图

### 配置

![配置](https://cdn.pkmer.cn/covers/notes-sync-share_2_0.png!pkmer)

### 同步和历史记录

![SyncAndHistory](https://cdn.pkmer.cn/covers/notes-sync-share_2_1.gif)

### 分享

![分享](https://cdn.pkmer.cn/covers/notes-sync-share_2_2.gif)

## 入门指南

1. 在您的 Obsidian 应用中安装 **Notes Sync Share** 插件。
2. 部署后端服务。
3. 使用您私有服务的 URL 和凭据配置插件设置。
4. 选择您想要同步或发布的笔记。
5. 尽情享受您的笔记的无缝同步和共享。
后端服务部署
在部署之前先试用一下

试用作者的后端服务：`https://share.alter.run`，将此地址配置到您的插件中。

注意：为了更好地保护隐私，最好使用您自己部署的服务。

使用 docker

#### 快速开始

要快速启动 Obsidian Sync Share 服务器，请执行以下命令：

```shell
docker run -d \
--name obsidian-sync-share-server \
-p 80:8080 \
-v "/root/obsidian-sync-share-server/user_store:/app/user_store" \
alterzz/obsidian-sync-share-server
```

该命令将在后台启动一个容器，将主机上的端口 80 映射到容器中的端口 8080，并将主机上的/root/obsidian-sync-share-server/user_store 目录挂载到容器中的/app/user_store 目录。

#### 配置 https

```shell
docker run -d \
--name obsidian-sync-share-server \
-p 443:8080 \
-v "/root/obsidian-sync-share-server/user_store:/app/user_store" \
-v "/root/obsidian-sync-share-server/share.alter.run.jks:/app/cert.jks" \
-e server.ssl.key-store-type=JKS \
-e server.ssl.key-store=/app/cert.jks \
-e server.ssl.key-store-password=xxxx \
alterzz/obsidian-sync-share-server
```

该命令允许您指定配置服务器的其他参数。以下是每个参数的说明：

- -p 443:8080：将主机上的端口 443 映射到容器中的端口 8080。根据需要修改主机端口。
- -v "/root/obsidian-sync-share-server/user_store:/app/user_store"：将主机上的/root/obsidian-sync-share-server/user_store 目录挂载到容器中的/app/user_store 目录。根据需要调整主机目录路径。
- -v "/root/obsidian-sync-share-server/share.alter.run.jks:/app/cert.jks"：将主机上的 share.alter.run.jks 文件挂载到容器中的/app/cert.jks 文件。根据需要更新主机文件路径。
- -e server.ssl.key-store-type=JKS：将 SSL 密钥库类型设置为 JKS。如果使用其他类型，请进行修改。
- -e server.ssl.key-store=/app/cert.jks：指定容器内 SSL 密钥库文件的位置。根据需要进行调整。
- -e server.ssl.key-store-password=xxxx：设置 SSL 密钥库的密码。将 xxxx 替换为实际密码。

#### 其他配置

`-e JAVA_OPTS=-Xmx512m` 限制内存

尝试访问

使用您的服务器 IP 或域名访问您的服务，端口是之前在 Docker 中配置的监听端口

http://{您的服务器 IP}

或者

https://{您的服务器 IP}

删除或重建

```shell
docker stop obsidian-sync-share-server
docker rm obsidian-sync-share-server
```

# 重建

#


# 查看日志

docker logs obsidian-sync-share-server

### 源代码部署

请访问 [obsidian-sync-share-web](https://github.com/Alt-er/obsidian-sync-share-web)。

请访问 [obsidian-sync-share-server](https://github.com/Alt-er/obsidian-sync-share-server)。

同步到远程 Git

#### 配置

请前往插件配置页面，并配置以下配置。

注意：每次同步时都会使用强制推送

- 远程 Git 仓库地址
- 用户名和访问令牌

#### 获取 GitHub 访问令牌

- 打开 GitHub 网站并登录您的账户。
- 点击右上角的个人头像，选择“Settings”。
- 在左侧边栏中选择“Developer settings”。
- 在左侧边栏中选择“Personal access tokens”。
- 点击“Generate new token”。
- 在“Note”字段中输入一个描述性的名称，以便记住此访问令牌的用途。
- 从列表中选择所需的权限（例如，读取仓库、写入仓库等）。
- 在页面底部点击“Generate token”。
- 复制生成的访问令牌。

#### 获取 GitLab 访问令牌

- 打开 GitLab 网站并登录您的账户。
- 点击右上角的个人头像，选择“设置”。
- 在左侧边栏中选择“访问令牌”。
- 在“名称”字段中输入一个描述性的名称，以便记住此访问令牌的用途。
- 在“范围”部分中，选择所需的权限（例如 API、仓库等）。
- 在页面底部点击“创建个人访问令牌”。
- 复制生成的访问令牌。
反馈和贡献

如果您遇到任何问题，有建议，或者想要为**Notes Sync Share**的开发做出贡献，请访问 [GitHub存储库](https://github.com/Alt-er/obsidian-sync-share)。非常感谢您的反馈和贡献。

## 许可证

该插件以 [MIT许可证](https://github.com/Alt-er/obsidian-sync-share/blob/master/LICENSE) 发布。

---

**Notes Sync Share**与 Obsidian 或 Obsidian 团队无关，也没有得到他们的认可。这是由 Alt-er 开发的独立插件。
