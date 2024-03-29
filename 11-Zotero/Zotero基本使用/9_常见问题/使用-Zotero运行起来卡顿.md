---
uid: 20230817145218
title: 【使用】Zotero 运行起来卡顿
tags: [zotero]
description: 
author: 摸鱼仙人
type: other
draft: false
editable: false
modified: 20230817160957
---

# 【使用】Zotero 运行起来卡顿

## 一、电脑问题

### (一) 硬件方面的猜想

1.系统如果是安装在机械硬盘，相较于固态硬盘运行速度有着很大的差别，固态硬盘会更快。（ps：我之前是安在机械的，后来换了固态，开机之前 5 分钟（机械）之后 10 几秒（固态））

2.zotero 程序安装在机械硬盘上，虽然系统是固态，但是受到机械运行速度限制会有所减慢

### (二) 系统方面的猜想

1.后台程序过多，导致系统运行速度变慢

2.系统需要更新，右下角出现黄色的显示

3.zotero 显卡使用的 windows 自动调控的，没有使用高性能显卡，没有调到性能模式

4.zoteo 打开久了受到 window 休眠的影响，会导致软件使用速度不佳

## 二、zotero 的问题

### (一) 插件方面的猜想

zotero 插件过多容易导致 zotero 运行速度缓慢，下面列举我遇到,会卡一下的插件

1.容易卡的茉莉花插件的使用中 pdftk 插件抓目录的时候会弹窗一下，执行 cmd 命令

2.插件 Better BibTex for Zotero 对文献进行设置 key，容易卡着

3.预览插件可能会导致 zotero 运行卡顿

### (二) Rss 订阅方面的猜想

如果在 Rss 订阅了很多的期刊，设置的更新时间间隔比较小的话，启动的时候期刊状态更新容易卡着

### (三) 同步方面的猜想

如果在 zotero 里面设置了自动同步的话，在文献进行同步更新的时候，占用系统资源造成系统卡死。这个常见于大量文献未能同步阶段，常见的就是使用 webdav 进行附件同步过程中

### (四) 文献数量方面的猜想

文献过多会，导致 zotero 运行速度缓慢

## 三、解决措施

(一) 开机启动项设置，利用管理软件进行开机启动项设置，这里推荐火绒吧（火绒相较于 360 体积小操作简单，但是清理和安全方面 360 占优势，不过 360 需要配置一下才能关闭广告设置）去官网下载火绒后，可以在功能里面看到一个启动项管理，在里面把不用的软件禁用一下，这样可以避免开机时候和使用的时候，应用程序过多

(二) 利用管理软件，对于系统垃圾进行清除，我之前帮同学清理过垃圾，才一个月没有帮，拿到以后 40 几 G 的垃圾

(三) 进行系统更新，虽然微软说是下载更新的时候，不影响电脑正常的使用，只是正常，降速了

(四) 在系统设置里面选择游戏 - 游戏模式 - 显示卡，再选择桌面应用，把 zotero.exe 放进去选择高性能显示卡

(五) 不需要的插件可以再插件选项中禁用

(六) 如果使用 webdav，那就先将文件同步好再去使用，如果上传流量没了等下月，去把设置里面的自动同步给关了

(七) 期刊设置时间适当延长一下

........

(N) 关于开机启动项的禁用进行补充一下，有些开机启动不要关，关也只关自己认识的

如 office clik run 那个关了，用 office 就会卡

打印什么的，这个不建议关，因为你不晓得那天需要用笔记本接打印机，我之前关了，结果有一天要接打印机，死活用不好，最后才发现我自己关了那个

如果你用了桌面管理软件的话，可以加入开机启动中，开机自动将桌面文件进行管理，比如我用的 360 桌面助手，就将它加入启动项里面了，不过有个不习惯的就是文件保存到桌面不能立即点，要等一会
