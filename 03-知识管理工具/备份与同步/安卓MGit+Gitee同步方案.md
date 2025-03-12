---
uid: 20250224192337
title: 安卓 MGit+Gitee 同步方案
tags: ["同步"]
description: 安卓 MGit+Gitee 同步方案
author: 星蓝
type: basic
draft: false
editable: false
modified: 20250313001918
---

# 安卓 MGit+Gitee 同步方案

下载链接：[Releases · Zacharia2/MGit](https://github.com/Zacharia2/MGit/releases)、<https://wwzl.lanzouw.com/b02xe3gbij> 密码:g2wr

先说优点，MGit+Gitee 同步好处就是快，以及附加历史版本，可以随时回滚查看历史记录。用来同步 obsidian、logseq 等笔记库是一个不错的选择。

## MGit 介绍

MGit 是一款 Git 客户端安卓应用。拥有常用的拉取、推送、提交、合并、克隆、比较、衍合、择取、创建新的分支、添加本地仓库、重置更改等等功能。

## 快速开始

### 功能与维护介绍

当前维护者为 maks/MGit，我在其基础上增加、修改并尝试修复一些 bug。设备要求你的安卓设备版本必须 ≥ Android12。

新增功能：同步、撤销提交、Tokens 设置、默认仓库目录，并所有依赖的软件包进行升级。问题修复：修复暂存所有文件过慢问题、修复 inlater has been closed 导致的解压缩问题、修复 avatar 全球通用头像、修复仓库列表打开远程地址问题、修改提交命令中的暂存所有已跟踪的文件选项为暂存所有文件选项，减少一步暂存所有文件的步骤，以及优化一些使用体验等等。

### 使用多远程同步

国内推荐使用 Gitee 作为同步使用的默认远程仓库；用 Github 作为工作和备份用的远程仓库，可定时用桌面端 Git 命令或 Git 图形工具对 Github 进行同步推送。

在桌面端使用 git remote add 添加多远程仓库 Gitee 和 Github。移动端只使用默认默认的 Gitee 远程仓库。

安装并打开 MGit，点击顶部导航栏右侧菜单中的设置，配置 Git 用户名和用户邮箱。若你的仓库是私有的，则需要配置 token 账户和 token 秘钥。Token 在 Gitee 中点击用户头像 - 设置 - 令牌，然后点击生成令牌。此令牌专用于访问你的私有库。设置好后，点击导航栏最右侧菜单、点击克隆、填入克隆地址，等待克隆完成。你也可以选择导入，在导入时勾选导入为外部仓库。

![231cb8aad9da334174cf4d73d2fbfcde|500](https://cdn.pkmer.cn/images/202503130019234.jpg!pkmer)

在仓库列表中，点击仓库可以进入仓库详情页，在详情页可以左右滑动，从左到右分别有三个页面依次为：文件、提交、状态。可以在“文件”查看仓库中的文件，在“提交”可以查看提交的历史，在“状态”可以查看你的修改。

![0897d8ada69b06708e91a605e58489a8|500](https://cdn.pkmer.cn/images/202503130019235.jpg!pkmer)

一般点击仓库后进入仓库详情页，滑动到状态查看修改状态，点击 未暂存 DIFF 按钮 可以看到有没有修改的还没暂存的文件。

通常的使用方式是使用仓库详情页中最上面导航栏最右侧的菜单按钮（如上图所示），打开菜单后点击同步按钮，然后软件就会自动按照同步策略进行同步。现在一切准备就绪，好好享用安卓版本的快速同步功能吧！

### 令牌的创建

#### Gitee 令牌

登录你的 Gitee 账户，然后打开 [私人令牌 - Gitee.com](https://gitee.com/profile/personal_access_tokens) ，点击创建私人令牌。

![Pasted image 20250224195839](https://cdn.pkmer.cn/images/202503130019236.png!pkmer)

私人令牌描述随便填，令牌过期时间可以选择一年，确认一下权限，权限需要包含对仓库的读写操作，点击提交即可。

#### Github 令牌

登录你的 github 账户，然后打开 [Fine-grained Personal Access Tokens](https://github.com/settings/personal-access-tokens)

![Pasted image 20250224193208](https://cdn.pkmer.cn/images/202503130019237.png!pkmer)

点击创建，然后 Token name 随便写，Expiration 过期时间可以写一年，Repository access 可以选择全部或者特定的几个， Permissions 权限的 Repository permissions 需要勾选 Commit statuses、Contents、Custom properties、Environments、Metadata、Pull requests 等。最后生成 token 即可。

### 参考解释

1. **外部仓库和内部仓库的区别**：在于是否存储在软件自己的内部存储私有目录中，内部存储私有目录一般可以看做：data/data/package_name、android/data/package_name。
2. **Token**：就是令牌，令牌有令牌账户和令牌密钥两部分组成。令牌账户一般为 github 的用户名或者 gitee 的用户名。github 有两种令牌，preview 和 classic，任选择一种方式使用就好，需要勾选必要权限。要非常注意的是**Token 千万不能公开出去！！！**，不然 GitHub 和 Gitee 的个人信息都会泄漏，而且一公开出去就可能有影响。因为谷歌好像是每分钟都会保存网页的。如果泄漏了一定要及时修改账号密码，并删除 Token，确保信息和仓库不会受到损失。
3. **git remote**：git 是一个分布式的版本管理工具，自然支持多个远程仓库。作为笔记软件使用方面的话，选稳定点的仓库作为主力仓库就好了。
4. **丢弃修改**：在 mgit 中分为两种情况，一种情况是文件为被 git 跟踪，这需要先暂存所有文件让 git 跟踪后，在使用重置（hard）丢弃修改，另一种情况是已经被 git 跟踪的文件，直接使用重置丢弃修改即可。
5. **推荐单用户单进程的使用方式**：Fork maks/MGit，为了满足自己对笔记快捷同步方案的需要。从这个最初目的来说，当前版本比较适合单线程使用。
	1. 安卓，桌面端与云端三者不要有冲突，最好一个个来处理。每增加或修改了什么内容，先同步到云端。再从云端拉取到本地。
	2. 具体使用是：安卓修改完点同步，电脑端需要先拉取，然后修改完后在推送，然后安卓点同步，然后再修改，依次类推。
	3. 合并分支虽然 mgit 提供了，但 mgit 没有实现合并分支需要的编辑器，只能外部编辑。
	4. 单用户是因为为了图方便而全局使用一个令牌，所以如果你有不同的仓库用了不同的仓库使用了不同的令牌，这虽然也可以用，只是麻烦点，因为全局令牌不符合将会弹出对话框提示用户输入令牌。
6. **Gitee 可能的仓库审查**：Gitee 可能会审查公开和私有仓库。
7. **关于使用配额**：[Gitee 使用配额说明](https://gitee.com/help/articles/4125#article-header0)，单仓库大小上限为 500M。Github 免费账户：单个仓库的存储容量限制为 1GB。