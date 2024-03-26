---
uid: 20231109234445
title: Thino 安装、Pro 激活与 Web 服务
tags:
  - Obsidian
  - Obsidian插件
  - Thino
description: Thino 安装、Pro 激活与 Web 服务
author: Bon,OS,PKMer
type: other
draft: false
editable: false
modified: 20240213101101
id: 9c21b56556dce6f9
---

# Thino 安装、Pro 激活与 Web 服务

### 购买模式

- Thino 基础版是免费的，已经在 Obsidian 官方市场，PKMer market 等位置更新。但==请注意==，基础版不会对基础特性进行新增，除非有重大原因和体验问题，否则只会进行稳定性修复
- Thino Pro：
	- 后续所有新特性会在这里更新，可独立购买
	- 以上，Thino 基础版和 Thino Pro 的更新日志参考 [[0x-thino-changelog]]，[购买链接](https://pkmer.cn/products/thino/#price)
	- 大版本买断：
		- 指的是 2.x 版本内所有版本不需要再额外付费
		- 注意买断不等于订阅，即便推出了 3.x ，2.x 依然是可用的
- Thino Web 服务
	- 包含微信同步，你可以通过关注 Thino 助手，然后直接在微信中转发聊天内容给 Thino 助手，并同步到 Thion 中。
	- Thino 同步服务，Thino 中信息多端同步，可独立购买。
	- 针对提前支持 Thino Pro 的用户会免费试用到 Thino Web 服务价格出台为止。目前定价尚未公布
- 未来，也许整合 PKMer 会员打包购买，会包括 Thino Pro 和 Thino Web 服务，设置一个打包的优惠价格，目前定价尚未决定

## 安装

- Thino 已经上线如下渠道
	- Obsidian 官方市场
	- [PKMer market 插件](https://pkmer.cn/products/market/)
	- Github 项目：这可能需要你手动安装到自己的 Obsidian 仓库
		- 你可以参考其他插件的手动安装方法如：[[PKMer插件电脑端安装手把手教程]]、[[PKMer插件安卓端安装手把手教程]]

## 激活

![image.png](https://cdn.pkmer.cn/images/20240322200322.png!pkmer)

- 基于内侧用户的反馈，会有离线的场景要求，以及适配更多手机、电脑设备。PKMer 社区共同决定将验证激活方式进行升级。
- 激活数量的限制是 6 个设备，你可以在个人中心，Thino Tab 中找到 【已激活设备列表】
	- 列明当前总计激活的设备
	- 最高可激活的设备：6
	- 以及具体都是哪些设备

> [!warning] 注意
> - 2.2.1 及之后的版本开始激活码是离线的，所以 Thino 可以完全离线可使用，公司、局域网的都不怕了。
> - 这是一个大升级，牵扯了插件和网站的升级。
> - 这是一个巨大的让利给用户，因为一定会存在破解、作恶，所以希望所有社区用户积极抵制盗版，并维护作者和 PKMer 社区利益。

### Thino Pro 验证激活

简易使用步骤如下：

1. 下载：
	1. 先从个人中心获取 对应的 Thino 版本，后续可能会上架到 Obsidian 市场
	2. 安装到你的插件目录，可以参考 [[Obsidian社区插件的安装]]
2. 激活：
	1. 【插件中操作】在插件设置中，General 中 `获取 Thino id`
	2. 【网站中操作】在网站个人中心中 Thino 页面，点击 `获取 Thino 激活码`
	3. 【网站中操作】在弹出的界面中，填写 ①②步骤中 获得的 Token 粘贴到对话框，点击 `生成并复制激活码`
	![image.png](https://cdn.pkmer.cn/images/20240201112456.png!pkmer)
	4. 【插件中操作】把 ③中获得的 `激活码` 粘贴到 【插件】设置对话框，点击 `去验证`
	![image.png](https://cdn.pkmer.cn/images/20240201112644.png!pkmer)
	5. 【插件中操作】完成激活后即可使用所有 Pro 功能

激活后你会看到

![image.png](https://cdn.pkmer.cn/images/20240130151004.png!pkmer)

### Thino Web 服务

#### 同步功能激活

1. 购买 Web 服务或购买 PKMer 会员打包服务
	- 同步服务内测阶段，针对已经购买本地版用户，可以暂时免费使用，后续定价出来后，会提前通知免费结束及后续购买策略
2. 激活同步：
	1. 【网站操作】在个人中心 Thino 相关页面中，找到一键激活同步，如果你找不到这个页面，你也可以选择在插件中点击 link 按钮由插件帮助你跳转到对应页面
	2. 【网站操作】`点击激活同步`。你会发现插件的 Sync Thino 变为 `unlink` 状态，表明已经链接到 Web 服务。
	3. 【插件操作】进入插件设置，`General` 中在 Sync Status 中点击 `Start`
![image.png](https://cdn.pkmer.cn/images/20240130152845.png!pkmer)

> [!warning] 注意
> - 同步是需要两端都使用相同账号，并开启、启用同步功能
> - 只在一端开启同步，机器也是不知道同步到哪里的

#### 绑定微信

绑定微信后，可以发送微信内容到订阅号，并同步到 Thino

- 目前支持单个账号绑定，如果需要换绑需要回到个人中心，点击 `换绑`

## 2.2 及之前版本

> [!note] 提示
> 鼓励用户升级到新版，后续此激活方式将会在未来下线。

### 获取安装包

- 如果你已经购买内测来支持社区发展，可以进入个人中心
![image.png](https://cdn.pkmer.cn/images/20231109142108.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20231109142144.png!pkmer)

### 提示验证是怎么回事

- 这是考虑到内测用户权力，社区认为杰出贡献和为了支持社区长久发展，购买内测同学，应该享有这样的权力。
- 验证方式确保了，不会所有人获得插件后都能二次分发，稀释用户利益。

### 验证流程

- 打开插件后会提示此内容
![image.png](https://cdn.pkmer.cn/images/20231109141944.png!pkmer)
- 点击“去验证”会跳转到浏览器中 pkmer 的个人中心【如图】
	- 如果你没有登录，或者登录过期，需要你在网站上先登录
![image.png](https://cdn.pkmer.cn/images/20231109142108.png!pkmer)

- 点击插件权益下的【获取内测版】
- 点击激活 Thino
![image.png](https://cdn.pkmer.cn/images/20231109142144.png!pkmer)
