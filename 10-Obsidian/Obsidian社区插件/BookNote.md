---
uid: 20230329145808
title: Obsidian 插件：BookNote（在 Obsidian 中阅读PDF）
description:
tags:
author: OS
type: other
draft: false
modified: 20230329151248
public: yes
---

# Obsidian 插件：BookNote（在 Obsidian 中阅读 PDF）

## 概述

支持在 Obsidian 中阅读 PDF，并在上面标注记录在 OB 的笔记文档中。

> [!插件名片]

> -   插件名称：BookNote

> -   插件作者：围城

> -   插件说明：Obsidian 读书标注软件，适用 PDF，MS Office 等

> -   插件项目地址：[点我跳转]()

## 效果&特性

-   目前支持可以对 pdf、office 等文档进行标注和管理。
-   可以用来管理指定目录下的文档，这个目录可以是库外目录，电脑上的任意路径都可以。
-   点击记录的回链笔记，可以跳转到 对应的文档位置。【前提：你的文档没有做路径移动】

## 准备

1.webview 安装包

2.booknote 插件压缩包

## 安装

下面演示使用 **本地服务** 如何部署，以 Windows 为例：

1. 安装 webview

因为插件使用 webview 服务，所以需要先安装 webview 环境。

解压到电脑任意目录即可，这里要记住解压的路径目录。

1. 安装 booknote 插件

通过

## 软件设置

1. 插件设置

注意开启使用本地服务器，其中 webview 路径就是安装步骤 1 中的解压路径。

![Pasted image 20230122232511](https://s1.vika.cn/space/2023/03/15/7288f36ec19f49a0b4adaaf3da2f30fd)

![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGVjZDQwZjZiNzM3MWZjZjRkOGE0YTQ5NmNlZjNhMWFfR0Q2cmhEdVVBZlJpZ3BJYzc3a3Z1RUIzeWlsOVVpTWNfVG9rZW46Ym94Y25JWTdOR0NSUDhJeXhZS2xPRThSTHFlXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

2. 重启 OB

## 使用方法

1. OB 页面按 Ctrl+P
   ![Pasted image 20230122232525](https://s1.vika.cn/space/2023/03/15/ac4f8df46e404d90a00aa89a63cf708f)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=YjljM2JhNzYxNzNkYjZkMjE5ZThiMmEzYTVhNzZkNjlfUjJjMTRhbHo2Z1dOa010VThUWXBIU0haRTJMTkFFeDJfVG9rZW46Ym94Y25nWGpGeDdzV1FYVWpkZVZSdzdSTFBmXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)
2. 开启后侧边栏出现 B 图标
   ![Pasted image 20230122232529](https://s1.vika.cn/space/2023/03/15/99808b07ca8a4a11bdf52e2aa70e4fef)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=YmQ4YWFkNjJkNDc2MTkwOWZjOTY3ZmNhMzJmN2NkYTlfbnN5c0lFTjFQN0taT0I3NjdSWUFDcFdwdGZBbGR6MkRfVG9rZW46Ym94Y25OYUd1WGJFako5YlVlcmJxeDdYUjdkXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

3. 点击即可看到你的书库目录，目前支持显示 pdf，xlsx，docx，pptx 文档显示。

**双击** 文件即可在 OB 中打开。

![Pasted image 20230122232555](https://s1.vika.cn/space/2023/03/15/7a0372d23dd748e3ba926af4ee671dff)

![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=YjcwNzhmNzFhZjk4ZDcxNDVjMjcxYmNhNGYzMGU5ZGVfNGFXRVBJOTZpQjBDSWFIcTg2S0tJR1lva2E5UHBYUFpfVG9rZW46Ym94Y25LWkN1djJndEVsWVI0UWd3cDVKUktkXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

1. 浏览添加注释，高亮段落
   ![Pasted image 20230122232600](https://s1.vika.cn/space/2023/03/15/057685cc00884f50ac3a07c994a770ae)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=MjNlMGQ2Njk4NDVhOWIyMTJmNDFlNjAwOTYyZTIwYzVfaXQxb3RXcFZ4eGZOcWdQbldYU2c4YmpJZXRwS0NGQlZfVG9rZW46Ym94Y25zZ3pUazhXRTRDQ2Q5bGhZTWhBd2ZnXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

2. 回链到 md 文档

目前两种方式

-   复制回链，在任意文档手动粘贴。
-   按住 ctrl 点击 复制回链 可以在当前激活的文档中 **所在光标处** 自动添加回链。
    ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=NDYwN2JiYzQ5Y2ZhOWM4MDE2MTMxZTE4OWM1ZDQwMTBfczkxdGtGc1ZrUnlQNzFoREh5VE9SYkFOOHRNMUJrTXhfVG9rZW46Ym94Y25wSXlud1g1QkJVZHN1Q0ptSDhaRnRiXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)
    ![Pasted image 20230122232621](https://s1.vika.cn/space/2023/03/15/4563f7da89b6491690ef2bda2c0e5c9d)
    md 文档中的回链信息
    ![Pasted image 20230122232628](https://s1.vika.cn/space/2023/03/15/8bcd3d8c4e4843cb99b60aa2af2c1678)
    ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=YTFkNTRhMzgwZDQ3NjJhMTRlMTdhZDczZGJmOTZjOTVfRjhCUDZ2cVAyU1BKTjdwbWF3SkJSaGw4SzNaWWQ3TUhfVG9rZW46Ym94Y25JZ0RzSk1Ja044SGJoeWFYTVZ0VXZiXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)
    ![Pasted image 20230122232633](https://s1.vika.cn/space/2023/03/15/da72ba4293164a67a31bd7f3fb4eadd4)
    ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=N2Q4NjgwNWY0NWVhMWI2NzBmNjg3OTdmYmVlODYxY2JfaGlaUmtqMW04M2dXNktEY0ZGWVBGNXAwZ0hGWUFQQ1dfVG9rZW46Ym94Y242MFpQa3I3cVBxT3FRZEt6Q0cxSVVjXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

1. pdf，office 文档添加 Obsidian 链接
   ![Pasted image 20230122232638](https://s1.vika.cn/space/2023/03/15/fcdf73d541154ea19bcc56c91590c323)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=MDljZTIwOWQ2MzE5MjA3ZjI2YTI5NDNiNWY5NDZmMWZfVHo1Z2tjVkQ3aUJjSGNHTkh5TWVtamxpUEtYYVBnVnFfVG9rZW46Ym94Y25wU0xiRmhPblEyQW8zaXlSQ1gxelFoXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

即可实现 pdf 跳转 Ob

1. 可以添加维护，书籍对应文档的 yaml 信息 1. ctrl+p 开启高级浏览器
   ![Pasted image 20230122232647](https://s1.vika.cn/space/2023/03/15/859cec9243a64c8ca651a09da02072e0)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=MzNmOGYxMTlmOWMyZjgxMWRiNTlmNzg1NWQ0YzFhNWJfTTZHWTJzUFZrWWEzNUhFa2NQSFp1aDZFT3BaQlR6MmxfVG9rZW46Ym94Y25jY3hyZ1phNWoxeWREMExxTmplQ0llXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

2. 点击文档，选择编辑
   ![Pasted image 20230122232652](https://s1.vika.cn/space/2023/03/15/d628ce4e9cff46378ef0c72a50919834)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=YjRiNzAyZmY0ZGE0YmUyYjM2OTczYmY0ODc1MjczYWVfUXpCc2hRVkFXVGh4bGY3RWd6bXE1MEtlcHJ4eGkxUElfVG9rZW46Ym94Y25HUnlxcm54S1ZTSEpXS0UxalphaE1kXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

3. 添加字段
   ![Pasted image 20230122232658](https://s1.vika.cn/space/2023/03/15/e34f369029f94a58860a110709f35122)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=N2U1ZGU2MmQ5N2JjMjlkMWJjN2YzMjIxNzAyMTMwOGRfZ0hsVTFMTlZkVHVYNWw1VzA2TjhsdnJ0aTRneGoyMFlfVG9rZW46Ym94Y25KVWZMazNFQ1hSbkFVbm16VkVOZnJnXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

4. md 文档自动填充 yaml 信息

在 ob 库的 booknote 目录 会生成 md 文档并添加 yaml 信息，这个文档跟文件是关联的。

![Pasted image 20230122232708](https://s1.vika.cn/space/2023/03/15/2b7bba95a2984ce49a7d11bcf1bf36e3)

![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=NDI3YTI4OTUwNTA4M2JiOTFiNjhlM2RlM2Y5YWI1Nzdfb2d1SWlCcDZwa25jM1FtWkUzMmR2QWZuYUgweDFHZ0RfVG9rZW46Ym94Y25RYlREMFIzSjJsVldWcGc2Z3RPcUhmXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

### 截图标注

目前截图标注只针对 pdf 文档有效，框选后复制回链即可把图片插入 md 文档中

1. 手动截图标注。
   ![](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/preview/boxcnbKbCa8kdE7rDNbcXqhtSUh/?preview_type=16)
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=YTYxZDE3NzZkNzljMjNiYTFkZDA2ZWM1MjFhYjcxMzZfcFZrSkRrMDFSWGtJZnlrVTh3NE81TmlDYXZPSU9sSVBfVG9rZW46Ym94Y25iS2JDYThrZEU3ckROYmNYcWh0U1VoXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)
   ![[豆瓣信息2.gif]]
2. 自 ![[8f7769eb-a2fa-4eea-9c09-b70677f91249.gif]] 动截图标注
   ![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=OWExMTczMjhiMDU2YTE1OGY4ZWEwYjJkZWEzMzBjMWFfT0tLTktDMzBuc1pXZktvWnVVOVE0ZU4ycHY5cFFReW1fVG9rZW46Ym94Y25QaGtUelR1dUlFaVd6TnF5WEltaFRkXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

标注的内容格式可以根据设置的模板变量自定义

![Pasted image 20230122232839](https://s1.vika.cn/space/2023/03/15/19d45d8e1a374fa08e1e2616cb793132)

![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=NjgyZmQ3ODVlMDMyY2E2MTllZjUxNzg4YWNmYTMwYTlfTGkwZFhRb3BsVlhva1ZxY1J3VUI4QnV2R0FJVVhCZmlfVG9rZW46Ym94Y25BSGhFZE9JTk9BYnhjWnNQYkw0Z1NjXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

目前支持的模板变量有

| 模板变量名称 | 解释           |
| ------------ | -------------- |
| page         | 页码           |
| url          | 回链链接       |
| content      | 选文摘录的内容 |
| img          | 区域摘录的截图 |
| comment      | 注释           |
| width        | 截图宽度       |
| height       | 截图高度       |

## 视频

<https://www.bilibili.com/video/BV1NY411x73B/?p=1&share_medium=android&share_plat=android&share_session_id=3f15e411-752c-4cff-b0e9-a23eb1408530&share_source=COPY&share_tag=s_i&timestamp=1638931312&unique_k=1sBOI4f>
