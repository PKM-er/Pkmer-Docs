---
uid: 2023120719403465
title: Obsidian 插件：【Readme】Plugin Update Tracker
tags: ['obsidian插件', 'readme']
description: 了解安装的插件有更新时，并评估升级的风险。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Plugin Update Tracker

> [!Note] 插件名片
> - 插件名称：Plugin Update Tracker
> - 插件作者：Steven Swartz
> - 插件说明：了解安装的插件有更新时，并评估升级的风险。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/swar8080/obsidian-plugin-update-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-update-tracker)

## 概述

了解安装的插件有更新时，并评估升级的风险。

![Plugin Update Tracker](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/swar8080/obsidian-plugin-update-tracker/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-plugin-update-tracker]] 插件的自述翻译

# Obsidian 插件更新跟踪器

- [安装链接](#installation)
- [功能](#features)

  * [了解已安装插件的更新情况](#know-when-installed-plugins-have-updates)
  * [查看更新列表](#view-a-list-of-updates)
  * [阅读发布说明以查看变更内容](#read-the-release-notes-to-see-whats-changed)
  * [安装插件更新](#install-plugin-updates)
  * [评估升级的风险性](#evaluate-the-riskiness-of-upgrading)

      - [新版本的统计信息](#statistics-on-new-versions)
      - [在显示更新之前等待几天](#wait-a-few-days-before-showing-updates)
      - [查看插件不同版本之间的代码更改](#view-code-changes-between-versions-of-a-plugin)

  * [查看并安装新的测试版插件版本](#view-and-install-new-beta-plugin-versions)
  * [忽略特定的插件更新](#ignore-specific-plugin-updates)
  * [自定义插件外观](#customizing-plugin-appearance)

- [使用公共API检查插件更新](#using-the-public-api-to-check-for-plugin-updates)

# 安装

访问此网址：obsidian://show-plugin?id=obsidian-plugin-update-tracker

# 特点

## 知道已安装插件是否有更新

**桌面：**

这个小图标被添加到状态栏中：

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_0.png!pkmer)：当有 5 个插件有更新时

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_1.png!pkmer)：当所有插件都是最新版本时

**移动设备/平板电脑：**

当至少有一个更新可用时，显示此带状操作：

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_2.png!pkmer)

查看更新列表

当有更新可用时，点击插件图标查看列表：

<img width="1169" alt="image" src="https://user-images.githubusercontent.com/17691679/198849416-6186f041-eac5-431b-8e39-b1ae4d41a656.png">

阅读发布说明以查看有哪些变化

发布说明以 markdown 格式安全呈现

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_3.png!pkmer)

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_4.png!pkmer)

安装插件更新

![Screen_Recording_2022-10-29_at_3_43_48_PM_AdobeExpress (1)](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_5.gif)

评估升级的风险性

#### 新版本的统计数据

下载量更多的旧版本很可能更稳定和安全

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_6.png!pkmer)

等待几天后再显示更新

点击*Code Changes*将会带您到一个类似于<https://github.com/blacksmithgu/obsidian-dataview/compare/0.5.43...0.5.46#files_bucket 的页面。>

<sub>⚠️ git diff 中的代码可能与已安装的代码不同。Obsidian 会从 GitHub 发布中下载一个单独的 `main.js` 文件，作者可以在其中添加任何代码。</sub>

忽略特定插件更新

隐藏您不想安装的新插件版本，使其不在插件图标计数和更新列表中显示。

查看和安装新的测试版插件版本

默认情况下，新的测试版插件版本是隐藏的，但可以通过更改此设置来显示：

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_7.png!pkmer)

测试版更新将显示警告：

![image](https://cdn.pkmer.cn/covers/obsidian-plugin-update-tracker_1_8.png!pkmer)

自定义插件外观

以下是内置的设置：

<img width="783" alt="image" src="https://user-images.githubusercontent.com/17691679/202866307-2461f38b-5413-47d8-a331-79e5a90791cf.png">

### 自定义 CSS 片段

外观也可以使用 Obsidian CSS 片段进行自定义（转到*设置>外观>CSS 片段*）

存在以下 CSS 选择器：

- *.status-bar-item.plugin-obsidian-plugin-update-tracker*：+ 状态栏插件图标的容器
- *.plugin-update-tracker-icon--loading*：加载状态下的插件图标容器（⌛）
- *.plugin-update-tracker-icon--no-updates-available*：没有可用更新时的插件图标容器（✓）
- *.plugin-update-tracker-icon--updates-available*：有可用更新时的插件图标容器
- *.plugin-update-tracker-icon-plug-icon*：插头图标（<img width="14" alt="image" src="https://user-images.githubusercontent.com/17691679/211116452-04d72518-4229-4013-88e5-ef4edc0b135c.png">）
- *.plugin-update-tracker-icon-chip*：插头图标右侧的状态图标

**示例**

将图标放置在状态栏的末尾：

```
.status-bar-item.plugin-obsidian-plugin-update-tracker {
 order: 101;
}
```

将图标放置在状态栏的开头：

```
.status-bar-item.plugin-obsidian-plugin-update-tracker {
 order: -1;
}
```

使用公共 API 检查插件更新

用于获取插件版本信息的 API 对任何人都是免费的。这对于以自定义方式通知插件用户有关更新可能是有帮助的。

使用缓存 + AWS Lambda 来降低成本，避免触发 github 速率限制，并实现自动扩展。目前，缓存值在最多 `Math.ceil(number of requested plugins / 50) * 30` 分钟内使用，并且最多处理 300 个插件。然而，大量的缓存未命中仍然可能导致高延迟。

示例请求：

```
POST https://jc5gpa3gs7o2uge6iq5mgjd53q0daomi.lambda-url.us-east-1.on.aws

{
    "currentPluginVersions": [
        {
            "obsidianPluginId": "dataview",
            "version": "0.5.44"
        },
        {
            "obsidianPluginId": "obsidian-excalidraw-plugin",
            "version": "1.7.25"
        }
    ]
}
```

示例响应，其中包含大于请求版本的插件的最新 10 个版本的信息：

```
[
    {
        "obsidianPluginId": "dataview",
        "pluginName": "Dataview",
        "pluginRepositoryUrl": "https://github.com/blacksmithgu/obsidian-dataview",
        "pluginRepoPath": "blacksmithgu/obsidian-dataview",
        "newVersions": [
            {
                "releaseId": 79493021,
                "versionName": "0.5.47",
                "versionNumber": "0.5.47",
                "minObsidianAppVersion": "0.13.11",
                "notes": "# 0.5.47\n\nImproves `date + duration` behavior when either the date or duration are null.\n",
                "areNotesTruncated": false,
                "downloads": 45232,
                "fileAssetIds": {
                    "manifestJson": 80616557,
                    "mainJs": 80616558
                },
                "publishedAt": "2022-10-11T06:24:26Z",
                "updatedAt": "2022-10-11T06:24:26Z"
            },
            {
                "releaseId": 76774596,
                "versionName": "0.5.46",
                "versionNumber": "0.5.46",
                "minObsidianAppVersion": "0.13.11",
                "notes": "# 0.5.46\n\n- Fix #1412: Fix bad `file.cday` and `file.ctime` comparisons due to wrong timezone being set. Ugh.\n",
                "areNotesTruncated": false,
                "downloads": 43628,
                "fileAssetIds": {
                    "manifestJson": 77407853,
                    "mainJs": 77407852
                },
                "publishedAt": "2022-09-10T00:17:38Z",
                "updatedAt": "2022-09-10T00:17:38Z"
            },
            {
                "releaseId": 76553504,
                "versionName": "0.5.45",
                "versionNumber": "0.5.45",
                "minObsidianAppVersion": "0.13.11",
                "notes": "# 0.5.45\n\n- #1400: Properly use the group by field for the group name.\n- Fix bad table highlighting in some themes.\n",
                "areNotesTruncated": false,
                "downloads": 4199,
                "fileAssetIds": {
                    "manifestJson": 77205985,
                    "mainJs": 77205984
                },
                "publishedAt": "2022-09-08T05:24:23Z",
                "updatedAt": "2022-09-08T05:24:23Z"
            }
        ]
    },
    {
        "obsidianPluginId": "obsidian-excalidraw-plugin",
        "pluginName": "Excalidraw",
        "pluginRepositoryUrl": "https://github.com/zsviczian/obsidian-excalidraw-plugin",
        "pluginRepoPath": "zsviczian/obsidian-excalidraw-plugin",
        "newVersions": [
            {
                "releaseId": 80829877,
                "versionName": "Excalidraw 1.7.26",
                "versionNumber": "1.7.26",
                "minObsidianAppVersion": "0.15.6",
                "notes": "## Fixed\r\n- Transcluded block with a parent bullet does not embed sub-bullet [#853](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/853)\r\n- Transcluded text will now exclude ^block-references at end of lines\r\n- Phantom duplicates of the drawing appear when \"zoom to fit\" results in a zoom value below 10% and there are many objects on the canvas [#850](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/850)\r\n- CTRL+Wheel will increase/decrease zoom in steps of 5% matching the behavior of the \"+\" & \"-\" zoom buttons.\r\n- Latest updates from Excalidarw.com\r\n  - Freedraw flip not scaling correctly [#5752](https://github.com/excalidraw/excalidraw/pull/5752)\r\n  - Multiple elements resizing regressions [#5586](https://github.com/excalidraw/excalidraw/pull/5586)\r\n\r\n## New - power user features\r\n- Force the embedded image to always scale to 100%. Note: this is a very niche feature with a very particular behavior that I built primarily for myself (even more so than other features in Excalidraw Obsidian - also built primarily for myself 😉)... This will reset your embedded image to 100% size every time you open the Excalidraw drawing, or in case you have embedded an Excalidraw drawing on your canvas inserted using this function, every time you update the embedded drawing, it will be scaled back to 100% size. This means that even if you resize the image on the drawing, it will reset to 100% the next time you open the file or you modify the original embedded object. This feature is useful when you decompose a drawing into separate Excalidraw files, but when combined onto a single canvas you want the individual pieces to maintain their actual sizes. I use this feature to construct Book-on-a-Page summaries from atomic drawings.\r\n- I added an action to the command palette to temporarily disable/enable Excalidraw autosave. When autosave is disabled, Excalidraw will still save your drawing when changing to another Obsidian window, but it will not save every 10 seconds. On a mobile device (but also on a desktop) this can lead to data loss if you terminate Obsidian abruptly (i.e. swipe the application away, or close Obsidian without first closing the drawing). Use this feature if you find Excalidraw laggy.",
                "areNotesTruncated": false,
                "downloads": 877,
                "fileAssetIds": {
                    "manifestJson": 82708877,
                    "mainJs": 82708880
                },
                "publishedAt": "2022-10-29T12:36:26Z",
                "updatedAt": "2022-10-29T12:36:10Z"
            }
        ]
    }
]
```