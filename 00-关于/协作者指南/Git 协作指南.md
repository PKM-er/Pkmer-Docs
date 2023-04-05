---
uid: 20230404000634
title: Git 协作指南（Step by step）
description: Git协作指南（Step by step）
author: Jason-XJ
type: other
draft: false
editable: true
modified: 20230405221532
---

# Git 协作指南（Step by step）

> [!info]
> 本指南是针对 [[文档协作流程#有 Git 协作经验的协作者]] 的辅助文件

## Git 协作前置条件

### Step 1: 下载并安装 Git 软件

在 [git 官网](https://git-scm.com/downloads) 下载对应安装软件包（以下主要展示 Windows 平台相关截图）

![[Pasted image 20230404001904.png]]

![[Pasted image 20230404001927.png]]

![[Pasted image 20230405204550.png]]

==如果你是 Git 小白，强烈建议安装过程中全部选项均选择默认设置，其中默认编辑器建议选择 notepad（如下图，实际我们在协作过程中不需要用到任何编辑器，选择 Windows 自带工具即可）==。

![[Pasted image 20230405204933.png]]

### Step 2: 注册 GitHub 账号

进入 [GitHub官网](https://github.com/)，注册/登陆账号

![[Pasted image 20230405205740.png]]

### Step 3: Fork 项目文档

进入 PKMer 项目 [GitHub文档页面](https://github.com/PKM-er/Pkmer-Docs)，点击 fork 按钮，将项目文档 fork 至个人 GitHub 账户。

![[Pasted image 20230405210151.png]]

### Step 4: Clone 项目文档至本地

进入个人 GitHub 账户下的项目文档（点击 GitHub 页面右上角个人头像即可跳转），复制 clone 连接

![[Pasted image 20230405210556.png]]

![[Pasted image 20230405210624.png]]

![[Pasted image 20230405210650.png]]

![[Pasted image 20230405210801.png]]

选择本地目录（根据个人喜好选择，同步的文件夹也是支持的），右键打开命令行（即选择 Git Bash Here），输入 `git clone <连接>`，(不带尖括号)，即可 clone 文件至本地

![[屏幕截图 2023-04-05 211236.png]]

![[Pasted image 20230405211624.png]]

![[Pasted image 20230405211747.png]]

### Step 5: Obsidian 打开文档

在 obsidian 中打开仓库选择刚才 clone 的文件夹，即可打开这个项目，打开后请选择信任仓库作者并启用插件

![[Pasted image 20230405212018.png]]

![[Pasted image 20230405212127.png]]

> [!info] 注意
> 上述步骤为 Git 协作前置条件，即意味着只用配置一次，后续协作不用再次配置。

## Git 协作具体流程

### Step 1: 同步主分支

进入 GitHub 个人项目主页，选择选择 Pkmer-Docs 项目，点击 Sync fork 更新个人库 （注：下面截图已同步，故无同步按钮）

![[Pasted image 20230405212732.png]]

更新完毕后回到 obsidian 拉取（`pull`）更新到本地，即 `ctrl + p` 打开命令窗口，输入 `Obsidian Git: Pull`，回车即可更新本地库

![[Pasted image 20230405212919.png]]

![[Pasted image 20230405212947.png]]

### Step 2: 新建分支

`ctrl + p` 打开命令窗口，输入 `create new branch`，回车，接着输入新分支名 (一般是对你想要修改内容的简短总结，如 `doc-md-tutorial` 表示一个 md 教程的文档，记得用英文)

![[Pasted image 20230405213104.png]]

![[Pasted image 20230405213153.png]]

![[Pasted image 20230405213250.png]]

![[Pasted image 20230405213314.png]]

### Step 3: 根据 `issue` 领取的主题，更新文档，为 PKMer 文档添砖加瓦

进入 PKMer 项目 [GitHub文档](https://github.com/PKM-er/Pkmer-Docs)，进入 issue，选择领取或新建 issue（防止内容重复和冲突，避免重复劳动，建议新建的 issue 在管理员回复同意后再进行撰写）

![[Pasted image 20230405214533.png]]

![[Pasted image 20230405214638.png]]

![[Pasted image 20230405215347.png]]

当管理员回复同意后即可开始创作（这里为做演示，自己进行了同意 ![[0F6877FF.png]]）

![[Pasted image 20230405215454.png]]

### Step 4: 上传到个人 GitHub

文档创作完成，obsidian 中 `ctrl + p` 打开命令窗口，输入并选择 `commit all changes with specific message`，接着输入你做出的修改概要 (如：添加了一个 md 教程)

![[Pasted image 20230405213602.png]]

![[Pasted image 20230405213630.png]]

注：右上角会显示相关信息包括修改了多少文档等，其中 `fatal: bad revision 'null'` 是由于插件本身的问题导致，属于正常（后续我们也将尽可能将其修复）

![[Pasted image 20230405213651.png]]

上传分支（此处需要输入 step 2 中分支名称，注意不要输错）

![[Pasted image 20230405213908.png]]

![[Pasted image 20230405214057.png]]

![[Pasted image 20230405214130.png]]

### Step 5: `PR` 至 PKMer 项目文档

`PR`：Pull Request 的简称，即申请合并到 Pkmer Github 主项目，登录到个人 Github 项目的网站，会有一个 `Pull Request` 的绿色提示，点击后按照指示操作即可

### Step 6: 沟通交流与合并

`PR` 之后维护者会对内容进行 `review`，通过 `PR` 里面进行沟通交流做出相应修改，最后维护者会将您的贡献合并到主项目。==注==：同一分支，pr 一次即可，pr 后如果需要修改，在本地相应分支修改后重复 Step 4 即可（commit 和 push 都要操作）。

### Step 7: 删除分支

切换回主分支，`ctrl + p` 打开命令窗口，输入 `Switch branch`（也可以直接点击 obsidian 有下角），选择 `main` 主分支，再次 `ctrl + p` 打开命令窗口，输入 `Delete branch`，选择删除对应分支，完成后自动回到 main 主分支。

![[Pasted image 20230405220900.png]]

![[Pasted image 20230405221003.png]]

![[Pasted image 20230405220921.png]]

![[Pasted image 20230405221056.png]]

![[Pasted image 20230405221116.png]]

![[Pasted image 20230405221412.png]]

![[Pasted image 20230405221427.png]]