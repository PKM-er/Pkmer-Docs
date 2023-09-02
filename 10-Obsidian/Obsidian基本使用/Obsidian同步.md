---
uid: 20230606212614
title: Obsidian 同步
tags: [同步, Obsidian]
description: Obsidian同步方式汇总
author: windilycloud
type: basic
draft: false
editable: false
modified: 20230607140423
---

# Obsidian 同步

## 太长不看

- 稳定，安全，全平台，价格贵，不折腾：Obsidian 官方同步
- 稳定，安全，全平台，价格便宜，不折腾：Obsidian 官方同步合租
- 稳定，安全，全平台，价格免费，折腾：Git 配合自建的仓库托管
- 稳定，较安全，全平台，价格免费，较折腾：Git 配合 Github，Gitee 这样的第三方仓库托管，这里的较安全主要考虑到 Gitee，Github 有一定审核。但可以使用 git-crypt 进行加密处理。
- 稳定，安全，非 IOS 平台，价格免费，不折腾：[[Syncthing]]
- 稳定，安全，全平台，价格还行，较折腾：Obsidian 插件，Remotely Save，Obsidian liveSync，折腾的点在全平台同步，须配合其它软件使用
- 较稳定，安全，非 Linux 平台，价格还行，不折腾：icloud，onedrive
- 较稳定，较安全，全平台 (须配合其它软件使用)，价格还行，较折腾：支持 webdav 或 S3 的所有第三方工具，如坚果云，teracloud，折腾的点在全平台同步，须配合其它软件使用。webdav是非增量同步，S3是增量同步
	- 须同步 IOS 或者后台同步：webdav 或 S3 配合 Obsidian 插件
	- 无须同步 IOS：webdav 或 S3 就够了
- 较稳定，安全，全平台 (须配合其它软件使用)，免费，折腾：支持 webdav 的所有开源自建方式，比如 alist，nextcloud，cloudflare 等
	- 须同步 IOS 或者后台同步：webdav 或 S3 配合 Obsidian 插件
	- 无须同步 IOS：webdav 或 S3 就够了

有些我并没有尝试过的就没列举了，比如百度网盘，局域网映射文件夹等

==推荐方式==

- 非技术背景
	- 苹果全家桶：icloud
	- 全平台： Obsidian 官方同步合租，在各大群聊或者论坛找人，教育优惠平摊下来一个月几块钱
- 有技术背景
	- 有 IOS 同步需求：建议试试 Obsidian 插件，不习惯最好放弃
	- 无 IOS 同步需求：Syncthing，进阶可以自建中继服务器

==名词解释==

- 稳定：稳定指有版本管理，在同步过程中较少出现问题的同步方式；较稳定指同步过程中会有比较明显的限制以及社区反应出现较多问题的同步方式，如同步频率，同步挂起，同步慢等；不稳定指较大概率出现问题的同步方式
- 安全：最安全是端到端加密或者无中间服务器，传输过程中加密；较安全是有内容审核，明文存储，加密传输；不安全指有泄露事件
- 全平台：指三大桌面平台 Win，Mac，Linux 和二大移动端平台 Android，IOS
- 折腾：涉及到服务器自建的属于折腾，涉及到代码或无 UI 界面操作的属于较折腾，无任何自建和代码操作有 UI 界面的属于不折腾
- 增量同步：当修改一个文件时，无须同步整个文件即可实现同步

## 官方同步

- 参考链接：[Obsidian Sync](https://obsidian.md/sync)
- 端到端加密
- 版本管理
- 跨所有平台同步
- 离线可用
- 多人协作
- 提供五个同步库，每个 10G 大小，每个库可以单独设置密码，可与人合租

价格：

- 年付八美元每月，月付十美元每月
- 教育优惠六折，不可与早鸟价叠加
- 早鸟价五折，早鸟帐号已停止发放

缺点：

- 不是多线程同步，在初次同步时有点慢

## 插件同步

- [obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync)：自托管 LiveSync 是一个社区实现的同步插件。 自托管或购买 CouchDB 当中间服务器。可在所有与 Obsdian 兼容的平台上使用。目前仍在积极开发。
- [remotely-save](https://github.com/remotely-save/remotely-save)：支持 S3，webdav，onedrive，dropbox，目前能满足基本使用，开发进度停滞。

通过插件同步需要配合其它第三方工具，可以自建也可以使用第三方。

## 第三方同步

只列举比较主流的，Google Drive，Dropbox 这些被墙了的也不予考虑。

### icloud

对于苹果用户来说，最简单最方便的方法是将 vault 保存在 iCloud 中，让 iCloud 同步。不过社区反馈使用下来发现存在如下几个问题：

1. 不好与 Linux 同步，在 Windows 上小问题也不断
2. 每次 iPhone 打开 Obsidian 都需要同步 iCloud，当 vault 较大时，时间会很久。尤其是移动端，较大程度拖慢了 Obsidian 的启动速度
3. 偶尔出现多文件的情况，原因是 iCloud 不会自己同步，会挂起
4. iCloud 没有版本管理功能，如果不小心误删文件或者同步出错会比较头大

==安全性==

- [标准数据保护](https://support.apple.com/zh-cn/HT202303#standard) 是你帐户的默认设置。你的 iCloud 数据会被加密，而加密密钥会安全储存在 Apple 数据中心，因此我们可以协助你进行数据恢复，并且只有部分数据会进行端对端加密。
- [iCloud 高级数据保护](https://support.apple.com/zh-cn/HT202303#advanced) 是一个可选设置，用于提供我们最高级别的云数据安全。如果你选择启用“高级数据保护”，那么对于你的大多数 iCloud 数据，只有你的受信任设备可以访问对应的加密密钥，因此这些 iCloud 数据均受端对端加密保护。这时额外的受保护数据包括 iCloud 云备份、“照片”中的数据、“备忘录”中的数据等。

### 坚果云

==使用限制==

- 免费版没有版本管理功能
- 文件上传大小限制：当前 WebDAV 客户端和网页端上传大小的限制是一致的，默认为 500M（私有云可以通过相关设置调整）。
- 访问频率限制：由于 WebDAV 协议比较占用系统资源，免费版用户限制访问频率为每 30 分钟不超过 600 次请求。付费用户限制访问频率为每 30 分钟不超过 1500 次请求。
- 同步目录数限制：目前坚果云的 WebDAV 协议单次请求文件数（包含文件和文件夹）为 750 个，支持分多页多次加载。如果您使用 WebDAV 的三方工具未实现按分页多次加载，可能会出现文件同步不完整的情况，建议您使用坚果云客户端进行直接同步。

### OneDrive

Onedrive 在很多平台都有官方客户端，但并没有 Linux 上的正式版本。为了实现 Onedrive 的访问，需要借助第三方软件。

目前，有几种实现方式：

1. Free OneDrive Client for Linux：一款命令行配置 Onedirve 工具，支持 OneDrive Personal, OneDrive for Business, OneDrive for Office365 and SharePoint。
2.  rclone：同样是命令行工具，但是支持的平台多，支持超过 40+ 平台。
3. Onedriver：一款**有 GUI 界面**的 Onedrive 客户端

### Git 及托管服务

> Git 是一款版本控制软件。
> GitHub 是最大的 Git 版本库托管商，是成千上万的开发者和项目能够合作进行的中心。 大部分 Git 版本库都托管在 GitHub，很多开源项目使用 GitHub 实现 Git 托管、问题追踪、代码审查以及其它事情。
> 简单来说，Github 是就是云端存储，和本地通过 Git 这款软件进行操作

- [obsidian-git](https://github.com/denolehov/obsidian-git)：一款 Obsidian 插件，配合 Git 实现备份到 Github，同时支持行级别的版本管理
- [用 Git 在 Android 和 Windows 间同步 Obsidian 数据库](https://sspai.com/post/68989#!)：可以通过这篇文章详细了解如何实现，Git 支持多种操作系统（Windows、macOS、Linux、Android、iOS），可以按需托管在国内外多家平台上（国外的 [GitHub](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2F)、[GitLab](https://sspai.com/link?target=https%3A%2F%2Fabout.gitlab.com%2F)，国内的 [Gitee](https://sspai.com/link?target=https%3A%2F%2Fgitee.com%2F)、[CODING](https://sspai.com/link?target=https%3A%2F%2Fcoding.net%2Fproducts%2Frepo)）
- Working Copy：IOS 上的 Git 工具
- MGit：Android 上的 Git 工具

## 自建同步

### webdav 类

webdav 类须配合 Obsidian 插件自动同步移动端，或者使用 webdav 提供商本身提供的客户端。非增量同步。

- FolderSync：这款软件目前支持多个 Google Drive，Dropbox，Amazon S3，SugarSync，Box.net，OneDrive，FTP，FTPS，SFTP，WebDAV 和 Windows 共享帐户。移动端 app，需要付费去广告，不是很推荐
- Nextcloud：企业级云盘，支持 webdav，并不只是弹出的云盘，可以云端协作
- Cloudflare：企业级云盘，支持 webdav
- Alist：网盘聚合，提供 webdav 服务，[基于Alist为同步核心的方案](https://zhuanlan.zhihu.com/p/590686830) 这个方案比较复杂

### S3

webdav 类须配合 Obsidian 插件自动同步移动端，或者使用 webdav 提供商本身提供的客户端。同步是增量同步。

- Amazon Simple Storage Service (Amazon S3)
- 阿里云OSS
- 腾讯云 COS

费用上差不多，10G存储包含流量，每月20万次请求，一年50块钱左右。

### P2P

- [[Syncthing]]：点对点同步方案，适用于 Android、Mac、Windows、Linux，增量同步
- [微力同步](http://www.verysync.com/)：支持 Win、Mac、Linux 以及 Android、iOS 平台，增量同步

## 视频

<iframe src="https://player.bilibili.com/player.html?aid=574602710&bvid=BV1qz4y1W7mf&cid=1229764901&page=1&autoplay=false"  autoplay="false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>