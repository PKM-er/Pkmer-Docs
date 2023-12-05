---
uid: 2023120522244428
title: Obsidian 插件：【Readme】Desci
tags: ['obsidian插件', 'readme']
description: Obsidian的Web3、IPFS和Desci集成。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Desci

> [!Note] 插件名片
> - 插件名称：Desci
> - 插件作者：Taylor Hulsmans
> - 插件说明：Obsidian的Web3、IPFS和Desci集成。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Obsidian-Desci/Obsidian-Desci)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?desci)

## 概述

Obsidian的Web3、IPFS和Desci集成。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Obsidian-Desci/Obsidian-Desci/master/README.md)
> 

---

## Readme(翻译）

下面是 [[desci]] 插件的自述翻译


<p align="center">
<img src="https://obsidian-desci.github.io/Docs/img/obsidian-desci-md-banner.png" />
</p>
Obsidian-DeSci

Web3 x Obsidian.md x DeSci

从IPFS拉取数据，通过调用智能合约运行边缘计算任务，获取DeSci节点等等，更多功能即将推出！

📚 [阅读文档](https://obsidian-desci.github.io/Docs/)

🎥 [观看教程视频](https://www.youtube.com/@Obsidian-Desci-fs7uw)

🐦 [关注Twitter](https://twitter.com/Obsidian_Desci)

🌐 [加入Discord](https://discord.gg/3sFAbjF5uH)

科学技术栈需要升级。在一个熟悉且易于理解的界面中实现协作和可组合性。Obsidian Desci将新兴的分散科学生态系统中的技术联系在一起。
### 配置
- 私钥 - 一个在lalechuza测试网络上有少量ETH的以太坊地址的私钥
- Kubo RPC - 在后台运行IPFS守护进程，在这里设置默认的网关以使用IPFS
### 命令
在画布中，选择一个节点并按下Ctrl-P来搜索以下命令：
- runCowsay - 对画布节点的内容执行cowsay命令
- getDpid - 从beta.dpid.org获取一个desci节点
- runSDXL - 通过lilypad执行一个事务来运行稳定的扩散
- ipfsCat - 从ipfs中获取一个CID的内容
- ipfsDagGet - 获取引用一个dag的CID，并将子CID展开为节点
- ipfsAdd - 添加一个由CID引用的json对象
- ipfsKuboFetch - 如果helia无法获取内容，可以尝试调用kubo rpc来获取
## 如何使用

- 将此存储库克隆到您的vault的`.obsidian/plugins`文件夹中
- 确保您的NodeJS至少为v16（`node --version`）。
- 运行`npm i`或`yarn`以安装依赖项。
- 运行`npm run dev`以启动监视模式下的编译。
- 在新的终端中运行`docker compose -f docker-compose.dev.yaml up`以启动网关API。
- 在Obsidian中按下Ctrl-P并键入“open settings”。
- 启用社区插件。
- 在菜单中找到obsidian-lilypad（可能需要点击刷新才能看到）。
- 点击齿轮图标打开obsidian-lilypad设置，并添加具有LILETH的私钥，该私钥位于lalechuza测试网上。
- 创建一个新的画布。
- 在选择了一个节点的情况下，使用Ctrl-P并搜索命令的名称。
### Hardhat

这个仓库中有一个hardhat环境，可以用来构建Lilypad客户端并直接对modicum合约进行操作

- `cd ./hardhat`
- `cp .env.example .env` 并填写你的助记词
#### 命令
`npx hardhat run ./scripts/getModuleCost.js --network lilypad` 用于获取当前模块的成本

`npx hardhat run ./scripts/runFetchResults.js --network lilypad` 用于返回已完成运行的 cids

`npx hardhat run ./scripts/runCowsay.js --network lilypad` 用于测试 cowsay 任务
### 添加到社区插件
![output](https://github.com/Obsidian-Desci/Obsidian-Desci)
### 在未来
- IpfsDagify - 创建一个连接的画布节点的Dag，并上传到ipfs
- IPFSremotePin - 通过外部提供者固定内容
- runKamu - 创建一个自定义的lilypad作业，合并引用数据库的两个cid的内容
- Obsidian Sync IPFS - 使用IPFS支持Obsidian Sync
- Obsidian Multiplayer - 利用IPFS pubsub通过webrtc实现实时多人游戏
- LabDao蛋白质折叠工作流程
- Hypercerts
- Nanopubs


```json
{
    "fundingUrl": "joe-mcgee.radicle.eth"
}
```
## API文档

请参阅https://github.com/obsidianmd/obsidian-api

请参阅https://docs.lilypadnetwork.org/lilypad-v1-testnet/overview

请参阅https://docs.desci.com/learn/open-state-repository/pid

请参阅https://docs.kamu.dev/cli/

请参阅https://hypercerts.org/

请参阅https://nanopub.net/


<p align="center">
<img src="https://obsidian-desci.github.io/Docs/img/obsidian-desci-logo.png" height="50px" />
</p>



