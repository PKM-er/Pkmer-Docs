---
uid: 20230803212259
title: Obsidian 插件：【Readme】Douban
tags: ['效率', '第三方工具集成', '笔记文件处理', '信息收集', 'obsidian插件', 'readme']
description: 在Obsidian使用并导入豆瓣中的 电影/书籍/音乐/电视剧/日记/游戏 甚至是 你标记过的书影音 , 包含你的评分/发布日期/演员表等信息.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Douban

> [!Note] 插件名片
> - 插件名称：Douban
> - 插件作者：Wanxp
> - 插件说明：在Obsidian使用并导入豆瓣中的 电影/书籍/音乐/电视剧/日记/游戏 甚至是 你标记过的书影音 , 包含你的评分/发布日期/演员表等信息.
> - 插件分类：['效率', '第三方工具集成', '笔记文件处理', '信息收集', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Wanxp/obsidian-douban)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-douban-plugin)

## 概述

在Obsidian使用并导入豆瓣中的 电影/书籍/音乐/电视剧/日记/游戏 甚至是 你标记过的书影音 , 包含你的评分/发布日期/演员表等信息.

![Douban](https://cdn.pkmer.cn/covers/obsidian-douban-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Wanxp/obsidian-douban/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-douban-plugin]] 插件的自述翻译



# Obsidian 豆瓣插件

<p align="center">    
    <a href="https://github.com/Wanxp/obsidian-douban/releases/latest">    
      <img src="https://img.shields.io/github/manifest-json/v/Wanxp/obsidian-douban?color=blue">    
   </a>    
    <img src="https://img.shields.io/github/release-date/Wanxp/obsidian-douban">    
   <a href="https://github.com/Wanxp/obsidian-douban/blob/master/License">    
      <img src="https://img.shields.io/github/license/Wanxp/obsidian-douban">    
   </a>    
   <img src="https://img.shields.io/github/downloads/Wanxp/obsidian-douban/total">    
   <a href="https://github.com/Wanxp/obsidian-douban/issues">    
      <img src="https://img.shields.io/github/issues/Wanxp/obsidian-douban">    
   </a>    
   <br>    
   <img src="https://img.shields.io/tokei/lines/github/Wanxp/obsidian-douban">    
   <a href="https://www.codefactor.io/repository/github/wanxp/obsidian-douban">    
   <img src="https://www.codefactor.io/repository/github/wanxp/obsidian-douban/badge" alt="CodeFactor" />    
   </a>    
</p>    

在[Obsidian](https://obsidian.md/)使用并导入豆瓣中的 _电影/书籍/音乐/电视剧/日记/游戏_ 甚至是 _你标记过的书影音_ , 包含你的评分/发布日期/演员表等信息.   
![background](./doc/background.png)

---  
关于当前的插件如果有任何疑问, 缺少想要的导入内容或者想要什么功能, 欢迎提issues或加入到开发当中.  
如果觉得喜欢或对您有帮助，欢迎一键三连-点亮 ⭐Star

- [异常, 问题 & 新的想法](https://github.com/Wanxp/obsidian-douban/issues)
- 阅读其它语言的介绍请点击 [English](./doc/README.en.md) | [简体中文](./README.md)

## 功能
- [x] 同步个人看过的电影
- [x] 同步个人阅读过的书籍
- [x] 同步个人听过的音乐
- [x] 导入电影
- [x] 导入电视剧
- [x] 导入书籍
- [x] 导入音乐
- [x] 导入日记
- [x] 导入游戏
- [x] 导入个人的评论,评论时间,阅读状态,个人评分
- [x] 支持保存封面至本地
- [x] 支持自定义参数
- [ ] 广播

## How to use

### 同步
- Sync personal records of movies, books, games, and music    
  Sync data from Douban (refer to [Using the Timeline Plugin to Build a Reading/Movie Timeline](./doc/Obsidian-Douban-TimeLine.md) for how to use the Timeline plugin to create a timeline)    
  ![Sync Data From Douban](doc/img/sync_data_from_douban.gif)

### 搜索
- Search for data and create notes  
  ![search_and_create](doc/img/search_and_create_note.gif)
- Search by current file name  
  ![Search Movie By File Name](doc/img/search_by_file_name.gif)

- Search by input text  
  ![Search Movie By Input Text](doc/img/search_by_input.gif)

## 设置
- 设置案例1(自定义模板)    
  ![设置案例1](doc/img/setting_zh.gif)


- 设置案例2(其它配置)    
  ![设置案例2](doc/img/setting_en.gif)

支持的字段
(若有缺少想导入的字段, 欢迎提issues反馈)

| 字段               | 电影                | 电视剧              | 书籍                | 音乐             | 日记             | 游戏            | 广播 |
|------------------|-------------------|------------------|-------------------|----------------|----------------|---------------| ---- |
| id               | 豆瓣ID              | 豆瓣ID             | 豆瓣ID              | 豆瓣ID           | 豆瓣ID           | 豆瓣ID          | -    | 
| title            | 电影名称              | 电视剧名称            | 书名                | 音乐名            | 日记标题           | 游戏名称          | -    |   
| type             | 类型                | 类型               | 类型                | 类型             | 类型             | 类型            | -    |   
| score            | 评分                | 评分               | 评分                | 评分             | 评分             | 评分            | -    |   
| image            | 封面                | 封面               | 封面                | 封面             | 图片             | 封面            | -    |    
| url              | 豆瓣网址              | 豆瓣网址             | 豆瓣网址              | 豆瓣网址           | 豆瓣网址           | 豆瓣网址          | -    |    
| desc             | 简介                | 简介               | 内容简介              | 简介             | 简介             | 简介            | -    |    
| publisher        | -                 | -                | 出版社               | 出版者            | 发布者            | 发行商           | -    |    
| datePublished    | 上映日期              | 上映日期             | 出版年               | 发行时间           | 发布时间           | 发行日期          | -    |    
| yearPublished    | 上映年份              | 上映年份             | 出版年份              | 发行年份           | 发布年份           | 发行年份          | -    |    
| genre            | 类型                | 类型               | -                 | 流派             | -              | 类型            | -    |   
| currentDate      | 今日日期              | 今日日期             | 今日日期              | 今日日期           | 今日日期           | 今日日期          |      |  
| currentTime      | 当前时间              | 当前时间             | 当前时间              | 当前时间           | 当前时间           | 当前时间          |      |   
| myTags           | 我标记的标签            | 我标记的标签           | 我标记的标签            | 我标记的标签         | -              | 我标记的标签        |      |  
| myRating         | 我的评分              | 我的评分             | 我的评分              | 我的评分           | -              | 我的评分          |
| myState          | 状态:想看/在看/看过       | 状态:想看/在看/看过      | 状态:想看/在看/看过       | 状态:想听/在听/听过    | -              | 状态:想玩/在玩/玩过   |      |    
| myComment        | 我的评语              | 我的评语             | 我的评语              | 我的评语           | -              | 我的评语          |      |  
| myCollectionDate | 我标记的时间            | 我标记的时间           | 我标记的时间            | 我标记的时间         | -              | 我标记的时间        |      |   
| 扩展1              | 导演       | 导演      | 原作者        | 表演者     | 作者      | 别名    |      |   
| 扩展2              | 编剧         | 编剧        | 译者     | 专辑类型 | 作者网址 | 开发商 |      |    
| 扩展3              | 主演          | 主演         | isbn         | 介质      | 日记内容   | 平台   |      |    
| 扩展4              | 原作名 | 原作名 | 原作名 | 唱片数    |                |               |      |   
| 扩展5              | 国家        | 国家       | 副标题      | 条形码    |                |               |      |   
| 扩展6              | 语言       | 语言      | 页数      |                |                |               |      |    
| 扩展7              | 片长           | 片长          | 丛书         |                |                |               |      |    
| 扩展8              | 又名        | 又名       | 目录           |                |                |               |      |    
| 扩展9              | IMDb              | IMDb             | 定价          |                |                |               |      |     
| 扩展7              |                   | 集数       | 装帧        |                |                |               |      |    
| 扩展8              |                   |                  | 出品方     |                |                |               |      |    

- 注: myTags, myRating, myState, myComment, myCollectionDate 参数均为在插件中登录后可用

## How to Install

### 从Obsidian插件中心
1. Enter the Obsidian plugin center.
2. Search for obsidian-douban.
3. Install.
4. Enable the plugin.

### 手动安装

1. Download `main.js`, `manifest.json`, `styles.css` from the [Github release](https://github.com/Wanxp/obsidian-douban/releases) page.
2. Copy the downloaded files to the `/.obsidian/plugins/obsidian-douban` path in your Obsidian document root directory. If the folder does not exist, create it. (Note that the `.obsidian` folder may be a hidden folder.)
3. Enable the current plugin in the Obsidian plugin center.

## 如何开发调试

1. 进入你的Obsidian测试文档文件夹下的`/.obsidian/plugins/`
2. 克隆代码      
   `git clone git@github.com:Wanxp/obsidian-douban.git`
3. 进入代码文件夹      
   `cd obsidian-douban`
4. 安装依赖      
   `npm install`
5. 构建插件      
   `npm run build`
6. 运行插件      
   `npm run dev`
7. 进入Obsidian插件中心重新加载当前插件
8. 享受开发吧

## 交流社群
<img src="doc/img/obsidian-douban-qq-qr_code.svg" width="300px"> <img src="doc/img/obsidian-douban-discord-qr_code.svg" width="300px">

## 免责声明
1. Before using this plugin, it is strongly recommended to backup your data in at least one way to prevent any unexpected situations.
2. This program does not crawl any content such as books, movies, or music. It is only for technical research purposes. It does not infringe upon the copyright of authors or the official interests of Douban. If there is any infringement, please contact me to delete it.
3. This program is for learning and communication purposes only.
4. Although every effort is made to avoid it, there may still be possible omissions. Therefore, any losses caused by using the plugin are the responsibility of the user. For the impact of different operations, please refer to the  section.
5. Using or modifying this plugin is considered as agreeing to the above disclaimer.

## <span id="impact" >影响</span>
注意: 除了在同步书影音数据时勾选 `替换同名文档` 有可能会修改同路径同文档名的笔记外，其余操作均不会修改已有笔记。

| 操作      | 条件               | 影响                        | 举例                                                                                            |
|---------|------------------|---------------------------|-----------------------------------------------------------------------------------------------|
| 导入书影音数据 | 默认条件             | 新建一条名为所选条目的笔记             | 如搜索蝙蝠侠并选中导入，则会创建笔记 《蝙蝠侠》                                                                      |
| 导入书影音数据 | 已有同名笔记           | 无任何影响，提示已经存在同名笔记，不会修改已有笔记 | 如搜索蝙蝠侠并选中导入，但因存在同路径同名称笔记，则会不会创建笔记                                                             |
| 导入书影音数据 | 配置 `笔记名称`值包含路径   | 若没有此路径则会创建对应文件名           | 如搜索蝙蝠侠并选中导入，配置`笔记名称`值为`/data/{{type}}/{{title}}`，则会创建文件夹`data/电影`                             |
| 导入书影音数据 | 配置 `保存图片附件`值为勾选 | 则会在`附件存放位置`指定位置保存封面图片     | 如搜索蝙蝠侠并选中导入，配置`附件存放位置`值为`assets`，则会在`assets`文件夹中保存封面文件`p462657443.jpg`                        |
| 同步书影音数据 | 以上所有             | 以上所有                      | 以上所有                                                                                          |
| 同步书影音数据 | `替换同名文档`值为勾选     | 已经存在 **同路径同文档名** ，直接覆盖    | 如已经存在在`data/Movie/蝙蝠侠.md`,配置`笔记名称`值为`/data/{{type}}/{{title}}`, 同步书影音记录时勾选 `替换同名文档`, 则`data/Movie/蝙蝠侠.md`会被替换成最新 |

## Acknowledgements

### IDE支持
[<image src="doc/img/jb_beam.svg"> </image>](https://www.jetbrains.com/?from=obsidian-douban)



