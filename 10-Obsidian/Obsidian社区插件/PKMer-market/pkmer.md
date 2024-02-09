---
uid: 20230726225239
title: Obsidian 插件：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件
tags: [Obsidian, 插件, PKMer, 下载, 插件安装]
description: 告别无法加载社区插件 ,无法加载社区主题的魔咒。完美解决国内 Obsidian 无法加载第三方插件和主题商城的问题。
author: PKMer
type: basic
draft: false
editable: false
modified: 20240105104312
---

# Obsidian 插件：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件

## 概述

长久一样来 Obsidian 做为一款优秀的免费笔记软件，惠及我们很多人，繁荣的社区插件，满足了我们各种各样的需求，开源插件带给了我们更多创造力，和工作流启发。

![Obsidian 插件：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件](https://cdn.pkmer.cn/images/202308021933370.png!pkmer)

但是因为网络原因，都会遇到上图显示的麻烦，提示 " 无法加载社区插件 "," 无法加载社区主题 " 的老生常谈的问题，为了彻底解决这个问题，Obsidian PKMer 首次使用国内 cdn 加速，提供了插件市场和主题市场，不需要魔法，完美解决 Obsidian 无法加载第三方插件。

![Obsidian 插件：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件 | 700 | cover](https:/cdn.pkmer.cn/images/202307270026698.png!pkmer)

> [!Note] 插件名片
> - 插件名称：PKMer
> - 插件版本：0.7.1
> - 插件作者：PKMer(windily-cloud&cumany)
> - 插件描述：这是一款 Obsidian 插件，旨在帮助国内用户轻松自由的访问优秀的 Obsidian 插件、主题
> - 插件项目地址：[点我跳转](https://pkmer.cn/products/market/)
> - 国内下载地址：[点我跳转](https://pkmer.cn/products/market/)

## 主要功能

![Obsidian 插件：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件 | 800](https://cdn.pkmer.cn/images/202307270052648.gif!pkmer)

- 插件图片浏览模式：
	- 提供丰富的插件浏览视图，帮助用户按标签、下载量、更新日期关注量等多维度找到想要的插件
	- 支持基础的插件名称搜索，同官方社区插件
- 插件文档：
	- 关联常用插件在 PKMer 的中文文档，由社区贡献者编写的，帮助用户上手使用插件
- 插件下载和更新：
	- 提供一键下载和更新插件，配合 CDN 获得极致的下载速度，彻底摆脱访问困难
- 支持多平台
	- 是的，支持桌面版 OB，移动端 OB （iOS、Android）都可以安装且成功更新的你插件和主题
- 与 pkmer.cn 网站联动:
	- 插件集市中的插件可以一键下载到 OB 中。

> [!important] 强烈推荐使用插件，体验更丝滑
> - 插件和网站保持同步
> - 自动检测需要更新的插件
> - 插件能够安装后，自动启用主题，插件因为考虑到安全因素，保持了跟官方一样，需要手动启动。
> - 插件能够检测自身版本，后续社区提供的新功能会保持更新

![Obsidian 插件：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件 | 800](https://cdn.pkmer.cn/images/202307270045035.gif!pkmer)

> [!Tip] 提示
> - 插件下载模式
> 	- 目前插件已经针对之前 memos 众筹用户、社区注册用户、社区贡献者们开放
> - Web 下载模式
> 	- 针对注册会员开放
> - 用量
> 	- 每个注册用户我们都提供免费额度 100 次/月，争取覆盖到大家的日常安装和更新
> 	- 但并不能做到无限，因为服务器有对应的少许成本，如果大家愿意，欢迎发电支持

## 实现原理

PKMer 从 Obsidian 官方发布的插件信息列表中，找到最近更新的插件版本，并获取最新的插件，放在云端以便下载 (这涉及到服务器、对象存储和 CDN 费用)。

在本插件内，用户点击下载按钮，如果用户 Obsidian 插件目录中，不存在名为插件 id 的目录，则会新建一个目录，在该插件内解压插件内容到该目录。如果存在名为插件 id 的目录，则会直接解压插件内容覆盖里面的 `main.js`, `manifest.json` 和 `styles.css` 三个文件，并不会删除和覆盖 `data.json` 等配置文件。

### 常见问题

感谢社区用户自行提交的指南，特此独立明示：

[[新手安装PKMer插件常见问题指南]]

[[PKMer插件电脑端安装手把手教程]] PC 端

[[PKMer插件安卓端安装手把手教程]] 移动端参考这里

## 相关视频

<iframe src="https://player.bilibili.com/player.html?aid=915396535&bvid=BV1Mu4y1v7FG&cid=1252667599&page=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

<iframe src="https://player.bilibili.com/player.html?aid=956765724&bvid=BV1qp4y1V7SL&cid=1222533808&page=1&autoplay=false" autoplay="false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

## 关于付费和价格

注册 [PKMer](https://pkmer.cn/) 的用户完全免费使用该插件及下载插件：

- 但为了防止滥用和过高的成本免费下载 100 次/月 插件，这个数量我们尽可能平衡了大家安装的插件和每个月大概可能需要更新的体量，也感谢所有社区支持者为大家助力了每月次数的增长。（[感恩好心人]([关于 PKMer](https://pkmer.cn/about/#support) ))
- PKMer 会员则限制 300 次/月 插件（视实际情况而定）。
- 如果你也有余力，也可以 [支持 PKMer](https://pkmer.cn/products/price/)

PKMer 会员除了付费获取外，可以通过为社区提供知识管理相关的文档，视频，翻译，开发 Obsidian 插件，协助运营 Pkmer 等多种方式免费获取，具体方式可参考 [社区指南](https://pkmer.cn/show/20230330155738) 参与贡献。

## 移动端安装及插件登录

安装手把手教程：[[PKMer插件安卓端安装手把手教程]]

1. 在 PC 端注册登录网站（关注微信公众号方式）
2. 进入个人中心，点击”获取 Token“
3. 进入移动端，PKMer 插件设置，将 Token 填写
4. 关闭插件，并重新加载插件；或者关闭 Obsidian 并杀掉程序

## 注意事项

本插件完全开源，云端下载的文件任何人都可通过文件哈希和原开源项目发布的文件哈希比对，以确保安全性。

1. PKMer 社区和为爱发电的贡献者们承担着成本，如无必要，尽量别挥霍下载资源（ PKMer 会员除外）
2. 插件解压缩会覆盖原来的文件，理论上会存在解压缩失败的情况，其风险和在 Obsidian 社区更新相当，如您的库非常重要，建议下载更新前及时备份
3. 插件仅获取正式的版本号，对于测试的版本号全都忽略。因此，某些上架后很久未更新，未发布正式版的插件，并未展示在其中。如实际有未收录的官方插件，欢迎反馈。

如有任何问题，可以加 [PKMer](https://pkmer.cn/) 网站上的 QQ 群和微信群进行联系。