---
uid: 20231122214716
title: 通过简悦 Simpread 进行网页剪藏的折腾分享
tags: [简悦, 网页剪藏, 配置经验]
description: 简悦的配置经验分享
author: 唐温如Twenru
type: tutorial
draft: false
editable: false
modified: 20231124221331
---

# 通过简悦 Simpread 进行网页剪藏的折腾分享

## 写在前面

这只是入门配置教程而已，别怕！

简悦有相当多的功能、设置和操作模式，本文只分享我通过 Obsidian 和简悦在网页剪藏方面的探索使用。本文以以下需求为目标结合官网教程和自己些许使用心得写就，[官方文档](https://www.yuque.com/kenshin/simpread) 和 [GitHub](https://github.com/Kenshin/simpread/discussions) 上有大量功能介绍和使用教程，想折腾的读者请自行浏览学习，也可按照简悦提供的 [配置教程](https://www.yuque.com/kenshin/simpread/wq35mh) 进行折腾。

- 网页文章以 md 格式存储于本地
- 网页文章以 md html 格式同步
- Obsidian 端文章收藏，文本内容直接高亮和标注
- 浏览器拓展稍后读，文本导出、内容高亮和标注自动导入

涉及环境、软件和插件：

- 操作系统：win10 (其他平台自行选择)
- 软件：
	- Obsidian
		- SimpRead Sync(未上架社区插件市场的 Obsidian 插件)
	- 简悦 (Simpread, 浏览器拓展程序)
	- 简悦·同步助手
	- 坚果云

## 简悦

### 下载 简悦

[官网页面](https://simpread.pro/)，点击**免费使用**会自行下滑到浏览器拓展程序下载界面，按需选择对应拓展程序下载安装。

安装后浏览器拓展程序窗口会出现对应图标，以下是以 chrome 浏览器为例。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231324220.png!pkmer)

### 购买 简悦

[官网页面](https://simpread.pro/pro.html)，点击**马上升级**会自行跳转到高级帐户购买界面，按需选择是否购买。

购买后会获得下图由数字和字母构成的兑换码，本文以高级账户的功能为例。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231324798.png!pkmer)

### 激活 简悦

按照 [官网教程](https://www.yuque.com/kenshin/simpread/xi8yds) 绑定简悦高级帐户。

### 配置 简悦 (前)

#### 复制 Uid

绑定简悦高级账户后，在选项页 → 账户 → 用户信息处复制你的 UID 到剪切板。

> [!warning] 注意
> 初次使用高级账户应该是没有相应设置的，此 3 级标题下的步骤是将简悦作者提供的配置覆盖在你账户里。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231324816.png!pkmer)

#### 下载配置库

从作者提供的 [百度云](https://pan.baidu.com/s/1SkFLJ21CKFL4lhWPhEg0iA?pwd=99mq) 下载配置库。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231325024.png!pkmer)

下载解压后的目录结构如下：

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231326180.png!pkmer)

其中，simpread_config.json 为简悦配置文件，导入后即可使用。

> [!warning] 注意
> simpread_config.json 是很重要的文件，请勿更改文件内容。

#### 导入配置库

在浏览器拓展程序栏右键点击简悦——偏好设置——共通，打开如下界面，在红框处从本地导入 simpread_config.json 配置文件，并刷新。

> [!warning] 注意
> 有成功提示，右上角可能会有黄色提示，无视即可。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231326566.png!pkmer)

#### 将配置覆盖到自己账户

点击账户 → 用户信息，修改为你自己的高级账户 UID 并保存。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231326774.png!pkmer)

配置正确时账户右上角没有小锁，参考 [恢复高级帐户资格](https://www.yuque.com/kenshin/simpread/wq35mh#74e49885:~:text=%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%88%B0%E3%80%82-,%E6%81%A2%E5%A4%8D%E9%AB%98%E7%BA%A7%E8%B4%A6%E6%88%B7%E8%B5%84%E6%A0%BC,-%E5%AF%BC%E5%85%A5%E5%B9%B6%E5%88%B7%E6%96%B0)。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231326719.png!pkmer)

#### 导入插件

插件管理界面，点击从配置文件导入插件，并确认。

> [!warning] 注意
> 下两图中账户未解锁是本人为避免配置冲突未登录账户，正常流程应为解锁状态。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231327532.png!pkmer)

插件管理界面会有 9 个插件显示 (导入成功)。具体功能请自行研究。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231327914.png!pkmer)

## Simpread Sync

### 启用 Simpread Sync 插件

在*下载配置库*的文件目录。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231334859.png!pkmer)

simpread 文件夹是 Ob 插件，只需将本文件夹及其内容移动或复制到自己的库 plugins 文件夹下。obsidian42-brat 插件用来安装未上架社区插件市场的插件，请通过社区插件市场安装 banners 和 dataview 的最新版本。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231334697.png!pkmer)

点击**刷新**文件夹，**启用**插件。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231335165.png!pkmer)

### 配置 Simpread Sync 插件

实现剪藏同步功能此插件只需更改图中三处设置。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231335454.png!pkmer)

- Server port 默认即可，若与其他软件冲突按需修改
- Customize base folder 设置为你 Ob 库中存储 md 文件的位置即可
- SimpRead config path 与坚果云、同步助手等路径指向位置应一致，不过**路径书写方式有所不同**

## 坚果云

其他同步方案请自行官网教程探索。

### 下载、安装、注册、登录坚果云

略 [官网](https://www.jianguoyun.com/s/downloads)。

### 配置坚果云

1. 创建同步文件夹 SimpRead
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231336994.png!pkmer)

2. 将配置库中 output 文件夹移动到 SimpRead 文件夹
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231336657.png!pkmer)
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231336981.png!pkmer)

> [!warning] 注意
> simpread_config.json 配置文件不要移动，后续会从浏览器拓展覆盖。

### 坚果云授权

1. 登录坚果云 web 获取用户名和密码
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231337176.png!pkmer)
2. 选项卡——服务——授权管理，输入用户名和密码绑定坚果云信息，授权成功会有提示
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231337885.png!pkmer)

## 简悦·同步助手

### 下载 简悦·同步助手

[官网页面](http://ksria.com/simpread/wiki/#/Download?id=%e5%90%8c%e6%ad%a5%e5%8a%a9%e6%89%8b)，下载简悦·同步助手。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231337153.png!pkmer)

解压后的目录结构如下，点击 exe 文件即可运行：

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231337508.png!pkmer)

### 配置 简悦·同步助手

在通用里设置开机自启，将同步文件夹路径和导出路径设置**与坚果云设置一致**，端口号不变即可；下图仅供参考，其他设置自行研究。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231338825.png!pkmer)

## 配置 简悦 (后)

### 同步设置

选项卡——共通——验证部分![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231338629.png!pkmer)

- 授权验证·简悦同步助手， ==此处端口号与同步助手保持一致，默认为 7026==
- 开启自动同步
- 通过同步助手覆盖配置文件，此时*同步文件夹 SimpRead*里应该生成新的 simpread_config.json 文件

> [!warning] 注意
> 这个新文件可以下图处作为你个人登录配置使用，请误删除；此步骤和**下图右**导出配置文件到本地作用一致。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231338373.png!pkmer)

### 导出设置

以 [pkmer官网文章](https://pkmer.cn/Pkmer-Docs/50-%E6%95%99%E7%A8%8B/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E6%95%99%E7%A8%8B/) 为例，连续 按 a 两次进入**阅读模式**，esc 退出此模式；其他快捷键自行研究。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231340835.gif!pkmer)

> [!note] 补充
> 上图中，下方的简悦插件 live-ditor 可以很方便对文本进行操作。

更改 *导入到 Obsidian 选项* 设置：

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231340752.png!pkmer)

以下 7 处设置可参照图中填写，其中 1 为自己 Ob 库名称，2、4 处的路径和端口号与 Simpread Sync 插件保持一致，==端口号都为 7027==。

![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231341469.png!pkmer)

以下为我个人 Metadata 模板配置，删除了调用 banner 插件生成头图的部分，供读者参考。

```yaml
uid: {{now|yyyyddmmHHMMss}}
title: {{title}}
aliases: 
source: {{url}}
author: 
attribute: 
type: 
tags: {{tags}}
created: 2023-11-24 21:51:24 
modified: 2023-11-24 21:51:24 
description: {{desc}}
archive: false
```

> [!warning] 注意
> 勿遗漏代码块标识；占位符使用可参照 [metadata用法](https://github.com/Kenshin/simpread/discussions/2902#discussioncomment-2590065)。

## 使用

1. aa 进入浏览器阅读模式，高亮、标注
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231341561.gif!pkmer)
2. 快捷键 ob 保存文章到 Ob 库
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231341320.gif!pkmer)
3. 在库内对已剪藏文章高亮或标注 (需要阅读模式快捷键 dd 保存文章到稍后读)
![通过简悦Simpread进行网页剪藏的折腾分享](https://cdn.pkmer.cn/images/202311231342975.gif!pkmer)

> [!note] 补充
> 上图中外部链接可以在浏览器中打开，未演示；标注模板是在 Simpread Sync 插件中修改，请自行研究。

## 写在末尾

1. 由于不是初次配置，有些细节可能没有注意到，有问题进 QQ 群问吧
2. 上述 3 个使用介绍可能没用到上述所有配置
3. Ob 使用初期可能会陷入插件、外观的陷阱，等脱离这陷阱有会掉入疯狂收藏的时期，且折腾且珍惜
