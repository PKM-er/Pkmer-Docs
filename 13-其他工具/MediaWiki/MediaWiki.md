---
uid: 20240513192351
title: MediaWiki
tags: [MediaWiki]
description: MediaWiki
author: 星蓝
type: other
draft: false
editable: false
modified: 20240513192733
---

# MediaWiki

为什么要使用 MediaWiki？MediaWiki 完美阐述了如何灵活运用页面组织页面的方式，对页面的理解和引用很丰富以及合适。一个页面可以承担某个具体的作用，比如所有分类页。一个页面中可以组织其他页面。MediaWiki 适合长文。除去不考虑维护 MediaWiki 的要求来说，适合作为个人的本地知识库使用。

Farm And Interwiki（农场和内部维基）＞Namespace（命名空间）＞ Category（目录，类别，范畴）＞ Property（属性，语义 MediaWiki）

在 MediaWiki 中所有的一切都是页面，包括设置，甚至是用户页。设置这个页面是一种特殊页。所有的一切都可以用页面组织页面。而页面是通过名称空间按照专用于一个用途的原则进行分组的。对于 WIKI 而言，页面是没有层级关系的。

![4df25d353a7f5161bcffcbb09571779.png|1000](https://cdn.pkmer.cn/images/4df25d353a7f5161bcffcbb09571779.png!pkmer)

MediaWiki 的强势可能在于快速检索,就像搜索引擎一样的功能。

但若考虑在对 MediaWiki 的维护的角度上看，MediaWiki 需要有一定要求计算机水平，最低要求是编程初学者，熟悉 pnpm 项目或者 composer 包管理软件的使用。可以不用掌握编程语言，但对程序设计有一点点认识，稍微接近开发者。

## 需要用到的工具

- scoop（diffutils（diff3.exe），ImageMagick（可选））
- git
- phpstudy（Nginx1.25.2、Apache2.4.43、mysql8、php8.0.2nts，composer）

## 一、依赖软件的准备

本文主要解决的问题是：在 Windows 上安装 MediaWiki。

MediaWiki 需要的软件较多，一般都是服务器端的软件环境，例如 diffutils、Nginx1.25.2、Apache2.4.43、mysql8、php8.0.2nts，composer、git。本文通过使用 phpstudy——服务器集成环境对软件包的安装过程进行简化，使安装更容易且快。

MediaWiki 是一款主要使用 PHP 语言开发的全平台服务器软件，其插件通常也是用 PHP 编写的。因此，一个 PHP 软件包管理工具——composer，成为了必不可少的工具。这些插件一般可以通过 composer 进行安装。对于使用过 nodejs+pnpm 的人来说，他们可以很快地上手 composer，因为 composer 与 pnpm 之间的差异几乎可以忽略不计。例如：

- composer install 与 pnpm install 功能相似
- composer require 与 pnpm add 功能相似
- composer.json 文件与 pnpm 的 package.json 文件作用相似

除了 composer 之外，git 版本管理工具也是必不可少的。有些插件可以通过 git 方便地拉取最新发布的版本分支，从而对本地插件进行升级。例如，CodeMirror 插件和 Citizen 主题就可以通过这种方式进行更新。

MediaWiki 的下载地址是：[https://m.mediawiki.org/wiki/Download](https://m.mediawiki.org/wiki/Download)。请注意，您需要从 MediaWiki 官网下载安装包。对于 git 版本的安装包，您需要使用 composer 来安装依赖项才能使用。下载完成后，请妥善保存安装包以备后用。

为了简化 diff3、git、ImageMagick 等软件的安装过程，我们首先介绍 scoop 的安装方法。如果您已经安装了上述软件，或者打算通过手动方式安装，那么您可能不需要安装 scoop。scoop 的主要作用是方便安装和管理这些软件。接下来，我们将介绍 phpstudy 的安装，以及如何在 phpstudy 中安装 Nginx、mysql8、php8.0.2nts、composer 等多个软件包。

通过这些工具和软件的安装，您可以更轻松地搭建和管理 MediaWiki 环境，确保您的维基平台运行稳定且高效。

- 本文使用 D 盘作为根目录，在 D 盘中安装 phpstudy 和 MediaWiki。安装目录如下：
	- `D:\phpstudy_pro`
	- `D:\phpstudy_pro\mediawiki-1.41.1`
	- `D:\phpstudy_pro\Extensions`
- 本文中 Nginx1.25.2、Apache2.4.43、mysql8、php8.0.2nts，composer 等软件包都会被 phpstudy 自动安装在 `D:\phpstudy_pro\Extensions` 目录下。
	- 本文使用 php 版本为 php8.0.2nts。
		- 其中主程序存放目录为 `D:\phpstudy_pro\Extensions\php\php8.0.2nts`，在下文中简称“PHP 主程序目录”
		- 在 PHP 主程序目录位置打开 powershell 执行 `php -v` 显示为 `PHP 8.0.2 (cli) (built: Feb  3 2021 18:36:37) ( NTS Visual C++ 2019 x64 )`
		- 其中 php 扩展的存放目录为 `D:\phpstudy_pro\Extensions\php\php8.0.2nts\ext`。
	- 本文主要使用的服务器软件为 Nginx1.25.2。

### （一）安装 scoop 软件包管理工具

[duzyn/scoop-cn: 中国用户能用的 Scoop 应用库，每日同步 Scoop 的官方库，加速应用的下载速度 (github.com)](https://github.com/duzyn/scoop-cn)

##### 1. 安装 Scoop 的前提条件

[PowerShell](https://learn.microsoft.com/zh-cn/powershell/) 版本在 5.1 或以上，如果没有 PowerShell 大于 5.1 版本，可以下载安装 [PowerShell Core](https://github.com/PowerShell/PowerShell)。运行以下命令查看：

```powershell
$PSVersionTable.PSVersion.Major # should be >= 5.1
```

其次，允许本地运行 PowerShell 脚本，以管理员打开 PowerShell，运行以下命令，回答 Y：

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

##### 2. 安装 Scoop 和 scoop-cn

此方法会把安装 Scoop 过程中的地址都换成中国可快速访问的地址，并设置好 Scoop，添加本仓库。打开 PowerShell，输入以下命令下载安装 Scoop：

```powershell
irm https://mirror.ghproxy.com/https://raw.githubusercontent.com/duzyn/scoop-cn/master/install.ps1 | iex
```

或使用 jsDelivr 的地址：

```powershell
irm https://cdn.jsdelivr.net/gh/duzyn/scoop-cn/install.ps1 | iex
```

安装成功后，会提示“scoop and scoop-cn was installed successfully!”

### （二）安装 MediaWiki 必要软件

#### 1. 安装 diff3 文本差异对比工具

diffutils 下载地址： <https://steffen.gulpe.de/gnu-tools-for-windows/i686-w64-mingw32/>

1. scoop 安装
	1. 打开 powershell，使用 scoop-cn 源安装，输入 `scoop install scoop-cn/diffutils`
	2. 等待安装成功即可。
2. 手动安装
	1. 打开 diffutils 下载地址： <https://steffen.gulpe.de/gnu-tools-for-windows/i686-w64-mingw32/>
	2. 下载 diff3.exe 并放置到 `C:\Windows` 目录下，即可安装成功。

#### 2. 安装 git 版本控制工具

[Git - 安装 Git (git-scm.com)](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

1. scoop 安装
	1. 打开 powershell，使用 scoop-cn 源安装，输入 `scoop install scoop-cn/git`
	2. 等待安装成功即可。
2. 手动安装
	1. 打开下载地址， <https://git-scm.com/download/win> 选择你需要的版本下载。
	2. 下载完成后双击打开安装包安装即可。

#### 3. 安装 phpstudy

[小皮面板(phpstudy) - 让天下没有难配的服务器环境！ (xp.cn)](https://www.xp.cn/)

打开下载链接：[Windows版phpstudy下载 - 小皮面板(phpstudy) (xp.cn)](https://www.xp.cn/download.html) ，本文选择 64 位 phpstudy 版本下载 <https://public.xp.cn/upgrades/phpStudy_64.zip> 。下载完成后，双击安装，本文安装到 D 盘根目录下，`D:\phpstudy_pro`，如上文所述。

##### 1）安装 phpstudy 中的服务端软件

Nginx1.25.2、Apache2.4.43、mysql8、php8.0.2nts，composer

打开 phpstudy 软件，点击**软件管理**，选择对应软件安装即可，其中要注意的是 php 版本应为 8.0.2nts，不要使用最新版本。

##### 2）安装 PHP 扩展：APCu NTS 64 位

打开仓库链接： <https://github.com/krakjoe/apcu/releases> ，下载最新发布的 apcu-8.0-x64-nts.zip Windows 版 dll 压缩包，只需要将 `php_apcu.dll` 文件放到 `phpstudy_pro\Extensions\php\php8.0.2nts\ext` 目录，然后在**phpstudy 软件 - 网站 - 管理 -php 扩展**中启用即可。压缩包的另一个文件是程序调试文件，不需要。

PHP 主程序目录位置打开 powershell 执行 `php -v`，若正常显示 `PHP 8.0.2 (cli) (built: Feb  3 2021 18:36:37) ( NTS Visual C++ 2019 x64 )` 即可安装成功。

## 二、安装 MediaWiki

请将下载好的 MediaWiki 解压到 `D:\phpstudy_pro` 目录下本文使用的 MediaWiki 版本为 mediawiki-1.41.1，解压好的目录为 `D:\phpstudy_pro\mediawiki-1.41.1`。

- 设置站点：打开 phpstudy 软件，点击 **网站 ->管理 ->修改**，根目录改为 `D:\phpstudy_pro\mediawiki-1.41.1`。php 版本选择 php8.0.2nts。点击确定完成配置。完整本地 MeidaWiki 站点的创建。其中域名和端口要记好，一会访问本地 MediaWiki 时要用到。本文的域名和端口号为 `localhost:8089`
- 设置数据库：在 phpstudy 软件中，点击 **数据库 -> 变更 root 默认密码 -> 创建数据库**，数据库名，本文选 mw，用户名 mw，密码 123456，点击确定完成 MediaWiki 需要的数据库的创建。

点击 phpstudy 软件的首页，启动 Apache2.4.43 和 MySQL 数据库，打开浏览器输入 `localhost:8089` 打开本地 MediaWiki，按照指示完成 MediaWiki 的安装。除了不用安装的插件，剩下的都要安装，其中不需要的插件为：

```php
// wfLoadExtension( 'AbuseFilter' );
// wfLoadExtension( 'CodeEditor' );
// wfLoadExtension( 'LoginNotify' );	//通知用户来自陌生设备和/或IP地址的可疑登录
// wfLoadExtension( 'SecureLinkFixer' );	//如果域始终需要HTTPS，则将URL重写为HTTPS
// wfLoadExtension( 'Thanks' );		//添加感谢用户进行编辑、评论等行为的链接。
```

在数据库部分，记得将，数据库名 mw，用户名 mw，密码 123456，填入对应表单中，若填入错误则需要再最后阶段重来一遍。

现在到了最后一步，你已经按照 MediaWiki 的安装流程完成了所有的安装步骤，它将下载一个 `LocalSettings.php` 文件到你的计算机下，将它移动到 `D:\phpstudy_pro\mediawiki-1.41.1` 文件夹下，然后重新打开浏览器即可得到一个本地的 MediaWiki 笔记软件。

### MediaWiki 的设置 LocalSettings.php 文件

> 尽量使用英语和谷歌引擎检索问题，会很快。

这里，需要在 LocalSettings.php 文件底部加入允许跨域、会话缓存类型为 CACHE_DB 的选项，，防止后续登录的问题。

1. 似乎您的登录会话有问题； 为了防止会话劫持，这个操作已经被取消。 请重新提交表单。

```php
## 在LocalSettings.php文件底部加入这两行配置
## 网络设置
$wgAllowCrossOrigin = true;    //允许跨域
$wgSessionCacheType = CACHE_DB;//会话缓存类型为CACHE_DB
```

关于 MediaWiki 的调试，需要时可以用：

```php
## Debug调试配置开关
$wgShowExceptionDetails = true;
$wgDebugToolbar = true;
$wgDevelopmentWarnings = true;
```

在众多 MediaWiki 主题中，最为美观的几个主题中，Citizen 主题无疑是首屈一指的选择，紧随其后的是 vector-2022 主题。其他值得注意的主题包括：

- MonoBook：经典且功能齐全的默认主题。
- Timeless：一个现代且响应式的主题，旨在提供清晰的用户界面。
- Vector：MediaWiki 的默认主题，以其简洁和易用性而受到欢迎。
- Lakeus：一个注重设计和用户体验的主题。
- MediaWikiBootstrap：基于 Bootstrap 框架的主题，提供了灵活的布局和丰富的定制选项。

这些主题不仅提升了 MediaWiki 的外观，还增强了用户体验，使您的维基更加吸引人且易于导航。

### MediaWiki 插件

推荐的插件：SemanticMediaWiki、CodeMirror、SyntaxHighlight_GeSHi、Popups

许多 MediaWiki 插件通过 Composer 进行安装，但由于网络问题，这一过程可能并不总是顺畅。为了解决这个问题，可以尝试使用阿里云的 Composer 镜像：[https://developer.aliyun.com/composer](https://developer.aliyun.com/composer)。这个镜像提供了一个稳定的国内源，可以加快软件包的下载速度。

如果在安装过程中遇到版本问题，这通常是由于镜像仓库中的软件包版本低于项目要求所致。要解决这个问题，您需要编辑项目的 composer.json 文件，将软件包的版本要求降低到与镜像仓库中可用的版本相匹配。这样，Composer 就能成功安装所需的软件包，而不会因为版本不兼容而失败。

[MediaWiki升级，composer update报错 - 心站日志 | 心种子技术站 (mindseed.cn)](https://tech.mindseed.cn/MediaWiKi/880.html) ，一般全局配置镜像地址，若遇到版本问题，修改版本后使用 composer update 即可成功。

#### 全局配置镜像地址

- 所有项目都会使用该镜像地址：

```
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

- 取消配置：

```
composer config -g --unset repos.packagist
```

更新 Citizen 主题，复刻 v2.12.0 升级主题。

```sh
git clone https://gerrit.wikimedia.org/r/mediawiki/extensions/CodeMirror --branch REL1_41

git clone -b v2.12.0 --depth=1 https://github.com/StarCitizenTools/mediawiki-skins-Citizen.git Citizen
```

## MediaWiki 离线阅读工具

存储 openZIM，阅读 Kiwix

## 安装完成

恭喜现在已经可以在你的电脑中使用 MW 了。每次打开 MW，只需打开浏览器输入 `localhost:8089` 即可打开 MW。