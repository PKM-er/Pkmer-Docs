---
uid: 20230404000634
title: Git 协作手把手教程
description: 一份Step by step Git协作指南
author: Jason-XJ
type: tutorial
draft: false
editable: true
modified: 202304145
---

# Git 协作手把手教程

> [!info]
> 本指南是针对 [[文档协作流程#有 Git 协作经验的协作者]] 的辅助文件

## Git 协作前置条件

### Step 1: 下载并安装 Git 软件

在 [git 官网](https://git-scm.com/downloads) 下载对应安装软件包（以下主要展示 Windows 平台相关截图）

![Pasted image 20230404001904](https://cdn.pkmer.cn/images/a606bd544c15d812e569454115832188_MD5.png)

![Pasted image 20230404001927](https://cdn.pkmer.cn/images/9072f482454659a5adfb1d8604e1a92e_MD5.png)

![Pasted image 20230405204550](https://cdn.pkmer.cn/images/4a5a15afc57409c1f1a6e97647761ebc_MD5.png)

==如果你是 Git 小白，强烈建议安装过程中全部选项均选择默认设置，其中默认编辑器建议选择 notepad（如下图，实际我们在协作过程中不需要用到任何编辑器，选择 Windows 自带工具即可）==。

![Pasted image 20230405204933](https://cdn.pkmer.cn/images/31c8c3963249839a0490c7134eda0fe8_MD5.png)

### Step 2: 注册 GitHub 账号

进入 [GitHub官网](https://github.com/)，注册/登陆账号

![Pasted image 20230405205740](https://cdn.pkmer.cn/images/510df348e52b99635e1f77de59783c6e_MD5.png)

### Step 3: Fork 项目文档

进入 PKMer 项目 [GitHub文档页面](https://github.com/PKM-er/Pkmer-Docs)，点击 fork 按钮，将项目文档 fork 至个人 GitHub 账户。

![Pasted image 20230405210151](https://cdn.pkmer.cn/images/42df87eb73b71cc257c0bad4220604c8_MD5.png)

### Step 4: Clone 项目文档至本地

进入个人 GitHub 账户下的项目文档（点击 GitHub 页面右上角个人头像即可跳转），复制 clone 连接

![Pasted image 20230405210556](https://cdn.pkmer.cn/images/82c6ed7e3404f583d2dca51f267f1a42_MD5.png)

![Pasted image 20230405210624](https://cdn.pkmer.cn/images/eca52e15f75cba9836f776dddb903ecf_MD5.png)

![Pasted image 20230405210650](https://cdn.pkmer.cn/images/cbcb02a3482188e493fd975b97bc7809_MD5.png)

![Pasted image 20230405210801](https://cdn.pkmer.cn/images/e0c66791a056358f88955b95b3cb59b6_MD5.png)

选择本地目录（根据个人喜好选择，同步的文件夹也是支持的），右键打开命令行（即选择 Git Bash Here），输入 `git clone <连接>`，(不带尖括号)，即可 clone 文件至本地

![屏幕截图 2023-04-05 211236](https://cdn.pkmer.cn/images/35e19c0e8063fbfcb452f03e768d608c_MD5.png)

![Pasted image 20230405211624](https://cdn.pkmer.cn/images/b3e62f944e3015bfa754ace8fa56a08c_MD5.png)

![Pasted image 20230405211747](https://cdn.pkmer.cn/images/e26cb407526d220f6469349f4744b1f4_MD5.png)

### Step 5: Obsidian 打开文档

在 obsidian 中打开仓库选择刚才 clone 的文件夹，即可打开这个项目，打开后请选择信任仓库作者并启用插件

![Pasted image 20230405212018](https://cdn.pkmer.cn/images/70fca5c9b023bbc23d881a9bb5c041c1_MD5.png)

![Pasted image 20230405212127](https://cdn.pkmer.cn/images/c0807ac85b55c71178d486bcde68dc9e_MD5.png)

> [!info] 注意
> 上述步骤为 Git 协作前置条件，即意味着只用配置一次，后续协作不用再次配置。

## Git 协作具体流程

### Step 1: 同步主分支

进入 GitHub 个人项目主页，选择选择 Pkmer-Docs 项目，点击 Sync fork 更新个人库 （注：下面截图已同步，故无同步按钮）

![Pasted image 20230405212732](https://cdn.pkmer.cn/images/61e26795ff3a4fdedb90b1da428d48f3_MD5.png)

更新完毕后回到 obsidian 拉取（`pull`）更新到本地，即 `ctrl + p` 打开命令窗口，输入 `Obsidian Git: Pull`，回车即可更新本地库

![Pasted image 20230405212919](https://cdn.pkmer.cn/images/8f9ca0105a37cf4d1afb56ceefc778a6_MD5.png)

![Pasted image 20230405212947](https://cdn.pkmer.cn/images/d064d0054403a1e65ae7563f591d5e2a_MD5.png)

### Step 2: 新建分支

在 obsidian 中 `ctrl + p` 打开命令窗口，输入 `create new branch`，回车，接着输入新分支名 (一般是对你想要修改内容的简短总结，如 `doc-md-tutorial` 表示一个 md 教程的文档，记得用英文)

![Pasted image 20230405213104](https://cdn.pkmer.cn/images/ed8ceba128c9dc84114d40cf7b69d721_MD5.png)

![Pasted image 20230405213153](https://cdn.pkmer.cn/images/93e7c11d28e325003b3e77a33996f41f_MD5.png)

![Pasted image 20230405213250](https://cdn.pkmer.cn/images/654f550b104482d9a6fadfb48b624e02_MD5.png)

![Pasted image 20230405213314](https://cdn.pkmer.cn/images/04a23cba813f539771e1201909dbc0f2_MD5.png)

### Step 3: 根据 `issue` 领取的主题，更新文档，为 PKMer 文档添砖加瓦

进入 PKMer 项目 [GitHub文档](https://github.com/PKM-er/Pkmer-Docs)，进入 issue，选择领取或新建 issue（防止内容重复和冲突，避免重复劳动，建议新建的 issue 在管理员回复同意后再进行撰写）

![Pasted image 20230405214533](https://cdn.pkmer.cn/images/b6b8aeb73874c3e55dcc08f52516f80f_MD5.png)

![Pasted image 20230405214638](https://cdn.pkmer.cn/images/69b77c46a0dcdbfd23edbbb141867cd1_MD5.png)

![Pasted image 20230405215347](https://cdn.pkmer.cn/images/61d631103ec98d296c65d71bc9cad6ab_MD5.png)

当管理员回复同意后即可开始创作（这里为做演示，自己进行了同意 )

![image.png](https://cdn.pkmer.cn/images/20230429191320.png)

![Pasted image 20230405215454](https://cdn.pkmer.cn/images/13f4d8a21c148825ab823520abddc3c9_MD5.png)

### Step 4: 上传到个人 GitHub

文档创作完成，obsidian 中 `ctrl + p` 打开命令窗口，输入并选择 `commit all changes with specific message`，接着输入你做出的修改概要 (如：添加了一个 md 教程)

![Pasted image 20230405213602](https://cdn.pkmer.cn/images/d51f3dbdb0043d5a0462e20a05b0fa49_MD5.png)

![Pasted image 20230405213630](https://cdn.pkmer.cn/images/c4dd6d11b2357976bf60af6c32a8b0ce_MD5.png)

==注：==右上角会显示相关信息包括修改了多少文档等，其中 `fatal: bad revision 'null'` 是由于插件本身的问题导致，属于正常（后续我们也将尽可能将其修复）

![Pasted image 20230405213651](https://cdn.pkmer.cn/images/5b3e184a8ef4cb5e9e8dea74bd263c53_MD5.png)

上传分支（此处需要输入 step 2 中分支名称，注意不要输错）

![Pasted image 20230405213908](https://cdn.pkmer.cn/images/a3d07c0077c33949bf54f76ca41a7264_MD5.png)

![Pasted image 20230405214057](https://cdn.pkmer.cn/images/2b22d7d1ce3decd1d42643aa9f09c4f9_MD5.png)

![Pasted image 20230405214130](https://cdn.pkmer.cn/images/a919304a9fac1a983c41edd7b35f53d3_MD5.png)

### Step 5: `PR` 至 PKMer 项目文档

`PR`：Pull Request 的简称，即申请合并到 Pkmer Github 主项目，登录到个人 Github 项目的网站，会有一个 `Pull Request` 的绿色提示，点击后按照指示操作即可

![Pasted image 20230405221733](https://cdn.pkmer.cn/images/0eb9e66de25a2c8f1a76376b23dec80e_MD5.png)

![Pasted image 20230405221833](https://cdn.pkmer.cn/images/7497faa1c1c47fa720c5b02c83766785_MD5.png)

![Pasted image 20230405221957](https://cdn.pkmer.cn/images/88b8af12561124cacec96a24b199cc89_MD5.png)

### Step 6: 沟通交流与合并

`PR` 之后维护者会对内容进行 `review`，通过 `PR` 里面进行沟通交流做出相应修改，最后维护者会将您的贡献合并到主项目。

![Pasted image 20230405232750](https://cdn.pkmer.cn/images/5909be86ccf5dd0f3ce0ee4528851165_MD5.png)

==注==：同一分支，pr 一次即可，pr 后如果需要修改，在本地相应分支修改后重复 Step 4 即可（commit 和 push 都要操作）,下图展示了根据意见返修并 commit 和 push 操作后，GitHub pr 中更新信息。

![Pasted image 20230405233047](https://cdn.pkmer.cn/images/5adf14f6bbceff98153e00284252fbb0_MD5.png)

管理员将 pr 合并（merge）到主分支之后，该 pr 会自动被关闭，即完成了对主分支的更新。

![Pasted image 20230405233541](https://cdn.pkmer.cn/images/7f09a6a74501fa3660ded7137bc0b789_MD5.png)

### Step 7: 删除分支

GitHub 完成更新后，返回 obsidian 界面，切换回主分支：`ctrl + p` 打开命令窗口，输入 `Switch branch`（也可以直接点击 obsidian 有下角），选择 `main` 主分支，再次 `ctrl + p` 打开命令窗口，输入 `Delete branch`，选择删除对应分支，完成后自动回到 main 主分支。

![Pasted image 20230405220900](https://cdn.pkmer.cn/images/ad082535d3d485e75876171cbb0c7189_MD5.png)

![Pasted image 20230405221003](https://cdn.pkmer.cn/images/501381a4f9a595feb41089f9af9eb72a_MD5.png)

![Pasted image 20230405220921](https://cdn.pkmer.cn/images/a996ebace2430986ec19a483ff96bc4d_MD5.png)

![Pasted image 20230405221056](https://cdn.pkmer.cn/images/8a35b11ff8e00082f9dd8980fec2bef3_MD5.png)

![Pasted image 20230405221116](https://cdn.pkmer.cn/images/e1123e78d1a72631b1dd6fa50f60b522_MD5.png)

![Pasted image 20230405221412](https://cdn.pkmer.cn/images/249b9c48a29108868cf9eb44a662c311_MD5.png)

![Pasted image 20230405221427](https://cdn.pkmer.cn/images/da184256da76b1ff02ad0d9d4915870f_MD5.png)

至此，你就完成了一次对项目文档的一次更新！感谢你对社区的贡献！