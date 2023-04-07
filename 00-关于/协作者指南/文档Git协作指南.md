---
uid: 20230404000634
title: Git 协作指南（Step by step）
description: 一份Step by step Git协作指南
author: Jason-XJ
type: tutorial
draft: false
editable: true
modified: 20230407215747
---

# Git 协作指南（Step by step）

> [!info]
> 本指南是针对 [[文档协作流程#有 Git 协作经验的协作者]] 的辅助文件

## Git 协作前置条件

### Step 1: 下载并安装 Git 软件

在 [git 官网](https://git-scm.com/downloads) 下载对应安装软件包（以下主要展示 Windows 平台相关截图，Mac 版本后续根据需要增加）

![Pasted image 20230404001904](https://s1.vika.cn/space/2023/04/06/d9f053056e354881a34eeeb4dfcd0061)

![Pasted image 20230404001927](https://s1.vika.cn/space/2023/04/06/50bd9d8c98cb4fdbabc4f23f1a7faa06)

![Pasted image 20230405204550](https://s1.vika.cn/space/2023/04/06/e06d243725f84d1d891d5b72300bcedb)

==如果你是 Git 小白，强烈建议安装过程中全部选项均选择默认设置，其中默认编辑器建议选择 notepad（如下图，实际我们在协作过程中不需要用到任何编辑器，选择 Windows 自带工具即可）==。

![Pasted image 20230405204933](https://s1.vika.cn/space/2023/04/06/494874f57f3a44e0a66ced373ec182ec)

### Step 2: 注册 GitHub 账号

进入 [GitHub官网](https://github.com/)，注册/登陆账号

![Pasted image 20230405205740](https://s1.vika.cn/space/2023/04/06/64bd5acb0a0842dd9a7c3f010d53df74)

### Step 3: Fork 项目文档

进入 PKMer 项目 [GitHub文档页面](https://github.com/PKM-er/Pkmer-Docs)，点击 fork 按钮，将项目文档 fork 至个人 GitHub 账户。

![Pasted image 20230405210151](https://s1.vika.cn/space/2023/04/06/d46e7a2b4fb3490082fccac26b7f3d3d)

### Step 4: Clone 项目文档至本地

进入个人 GitHub 账户下的项目文档（点击 GitHub 页面右上角个人头像即可跳转），复制 clone 连接

![Pasted image 20230405210556](https://s1.vika.cn/space/2023/04/06/5674edc160f549ae89d3f46da6286d79)

![Pasted image 20230405210624](https://s1.vika.cn/space/2023/04/06/8abbad15f6714735835a95a4ff15d4a7)

![Pasted image 20230405210650](https://s1.vika.cn/space/2023/04/06/7fca63e8552d4d38944dd3ebf5c5dffc)

![Pasted image 20230405210801](https://s1.vika.cn/space/2023/04/06/88ae17efdbb64773b47e74af7a5ea90d)

选择本地目录（根据个人喜好选择，同步的文件夹也是支持的），右键打开命令行（即选择 Git Bash Here），输入 `git clone <连接>`，(不带尖括号)，即可 clone 文件至本地

![屏幕截图 2023-04-05 211236](https://s1.vika.cn/space/2023/04/06/627b56d6b7a74725a3790e2aee98dd21)

![Pasted image 20230405211624](https://s1.vika.cn/space/2023/04/06/0a26c42cbf554345bbdd57b82b4020b2)

![Pasted image 20230405211747](https://s1.vika.cn/space/2023/04/06/545a183b9a8345eea64752ad9791451f)

### Step 5: Obsidian 打开文档

在 obsidian 中打开仓库选择刚才 clone 的文件夹，即可打开这个项目，打开后请选择信任仓库作者并启用插件

![Pasted image 20230405212018](https://s1.vika.cn/space/2023/04/06/3a40270880fc43059df5dacb89b3554a)

![Pasted image 20230405212127](https://s1.vika.cn/space/2023/04/06/541d2829272142a6bdceacb851cc4b75)

> [!info] 注意
> 上述步骤为 Git 协作前置条件，即意味着只用配置一次，后续协作不用再次配置。

## Git 协作具体流程

### Step 1: 同步主分支

进入 GitHub 个人项目主页，选择选择 Pkmer-Docs 项目，点击 Sync fork 更新个人库 （注：下面截图已同步，故无同步按钮）

![Pasted image 20230405212732](https://s1.vika.cn/space/2023/04/06/c637c2f39b9343b0b2ccd26c68769cb1)

更新完毕后回到 obsidian 拉取（`pull`）更新到本地，即 `ctrl + p` 打开命令窗口，输入 `Obsidian Git: Pull`，回车即可更新本地库

![Pasted image 20230405212919](https://s1.vika.cn/space/2023/04/06/c6fe8541a4f644e5b286e250f5b4f971)

![Pasted image 20230405212947](https://s1.vika.cn/space/2023/04/06/eb791ac2788c4309b292458b2086816f)

### Step 2: 新建分支

在 obsidian 中 `ctrl + p` 打开命令窗口，输入 `create new branch`，回车，接着输入新分支名 (一般是对你想要修改内容的简短总结，如 `doc-md-tutorial` 表示一个 md 教程的文档，记得用英文)

![Pasted image 20230405213104](https://s1.vika.cn/space/2023/04/06/215208b3f4f941d18075e45e5981b569)

![Pasted image 20230405213153](https://s1.vika.cn/space/2023/04/06/e6155c3299da4ecea27a4d3c13acf53f)

![Pasted image 20230405213250](https://s1.vika.cn/space/2023/04/06/5cb406d748574832bcac88619d50fb54)

![Pasted image 20230405213314](https://s1.vika.cn/space/2023/04/06/f4508cc09d1b40b7ac9cee42eeab2c06)

### Step 3: 根据 `issue` 领取的主题，更新文档，为 PKMer 文档添砖加瓦

进入 PKMer 项目 [GitHub文档](https://github.com/PKM-er/Pkmer-Docs)，进入 issue，选择领取或新建 issue（防止内容重复和冲突，避免重复劳动，建议新建的 issue 在管理员回复同意后再进行撰写）

![Pasted image 20230405214533](https://s1.vika.cn/space/2023/04/06/0b97608c5ede4079a90cdd64f8fadd78)

![Pasted image 20230405214638](https://s1.vika.cn/space/2023/04/06/3ac6d3fa26c8456abcebf0a0f9c795eb)

![Pasted image 20230405215347](https://s1.vika.cn/space/2023/04/06/1118dd134f384a4b92920b20f7039b96)

当管理员回复同意后即可开始创作（这里为做演示，自己进行了同意 ![[0F6877FF.png]]）

![Pasted image 20230405215454](https://s1.vika.cn/space/2023/04/06/cfbcbabca3614c84bd1c818616d4a30e)

### Step 4: 上传到个人 GitHub

文档创作完成，obsidian 中 `ctrl + p` 打开命令窗口，输入并选择 `commit all changes with specific message`，接着输入你做出的修改概要 (如：添加了一个 md 教程)

![Pasted image 20230405213602](https://s1.vika.cn/space/2023/04/06/33d39d56966b46ef83630d1b18994944)

![Pasted image 20230405213630](https://s1.vika.cn/space/2023/04/06/d6da77a969db42f4837d80cfedf40655)

==注：==右上角会显示相关信息包括修改了多少文档等，其中 `fatal: bad revision 'null'` 是由于插件本身的问题导致，属于正常（后续我们也将尽可能将其修复）

![Pasted image 20230405213651](https://s1.vika.cn/space/2023/04/06/c620c6b677104938a7fbf210119308fa)

上传分支（此处需要输入 step 2 中分支名称，注意不要输错）

![Pasted image 20230405213908](https://s1.vika.cn/space/2023/04/06/8a2f8274123e446d86a611f8c72d3e83)

![Pasted image 20230405214057](https://s1.vika.cn/space/2023/04/06/097ceb389de74d218b02c06e25a1eb45)

![Pasted image 20230405214130](https://s1.vika.cn/space/2023/04/06/7083f7db92794da097fbed8485c415de)

### Step 5: `PR` 至 PKMer 项目文档

`PR`：Pull Request 的简称，即申请合并到 Pkmer Github 主项目，登录到个人 Github 项目的网站，会有一个 `Pull Request` 的绿色提示，点击后按照指示操作即可

![Pasted image 20230405221733](https://s1.vika.cn/space/2023/04/06/51c5cf366d9a4492ba9ae771d8d89556)

![Pasted image 20230405221833](https://s1.vika.cn/space/2023/04/06/aac9f4ad5f6b4ccd9b94ae08af8d84c2)

![Pasted image 20230405221957](https://s1.vika.cn/space/2023/04/06/1b33f27da4a7465485aa821e252be128)

### Step 6: 沟通交流与合并

`PR` 之后维护者会对内容进行 `review`，通过 `PR` 里面进行沟通交流做出相应修改，最后维护者会将您的贡献合并到主项目。

![Pasted image 20230405232750](https://s1.vika.cn/space/2023/04/06/84466740c5174ca78085331c60c3f5d5)

==注==：同一分支，pr 一次即可，pr 后如果需要修改，在本地相应分支修改后重复 Step 4 即可（commit 和 push 都要操作）,下图展示了根据意见返修并 commit 和 push 操作后，GitHub pr 中更新信息。

![Pasted image 20230405233047](https://s1.vika.cn/space/2023/04/06/517c0dee6a384022afe651f0aaae048f)

管理员将 pr 合并（merge）到主分支之后，该 pr 会自动被关闭，即完成了对主分支的更新。

![Pasted image 20230405233541](https://s1.vika.cn/space/2023/04/06/ab9d78a73efb4e96a01a5ecd1a0a6623)

### Step 7: 删除分支

GitHub 完成更新后，返回 obsidian 界面，切换回主分支：`ctrl + p` 打开命令窗口，输入 `Switch branch`（也可以直接点击 obsidian 有下角），选择 `main` 主分支，再次 `ctrl + p` 打开命令窗口，输入 `Delete branch`，选择删除对应分支，完成后自动回到 main 主分支。

![Pasted image 20230405220900](https://s1.vika.cn/space/2023/04/06/fb0b56520b084cd88d579cf0dd0f19fa)

![Pasted image 20230405221003](https://s1.vika.cn/space/2023/04/06/9c88b543d0a94f9a96624ad23433cb1a)

![Pasted image 20230405220921](https://s1.vika.cn/space/2023/04/06/364586df1143422c84a6a58b8025271f)

![Pasted image 20230405221056](https://s1.vika.cn/space/2023/04/06/7d46a1e0d1cf49f58a888226363ca02a)

![Pasted image 20230405221116](https://s1.vika.cn/space/2023/04/06/bc25e4ad3ee64aec9af1ca5c98ed7e02)

![Pasted image 20230405221412](https://s1.vika.cn/space/2023/04/06/c4ee6294cc1348c5bddfb39d36768b65)

![Pasted image 20230405221427](https://s1.vika.cn/space/2023/04/06/ee011a4de23348919c3315a9e583b18e)

至此，你就完成了一次对项目文档的一次更新！感谢你对社区的贡献！