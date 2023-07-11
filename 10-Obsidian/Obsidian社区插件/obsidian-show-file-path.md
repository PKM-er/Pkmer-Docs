---
uid: 20230530200529
title: Obsidian 插件：Show Current File Path 显示当前文件的路径
tags: [Obsidian, 插件,文件管理]
description: Obsidian 插件：Show Current File Path 显示当前文件的路径
author: OS
type: basic
draft: false
editable: false
modified: 20230603015653
---

# Obsidian 插件：Show Current File Path 显示当前文件的路径

做为自己知识的管理员，很多时候我们在编写笔记，处理文档时候，需要像开发人员和系统管理员，及时了解当前工作环境的情况。需要类似“显示正在编辑的文件所在的路径”的功能，也就是在编辑器或终端中显示当前工作目录的路径。这项功能带来的实际好处是让用户可以更加清晰地知道自己正在哪个文件夹里工作，及时了解当前工作环境的情况，方便对文件进行操作，同时也避免了不必要的操作失误。

例如，在处理系统故障或代码调试等任务时，快速识别工作目录，可以更高效地定位问题和进行解决；而在通过命令行进行文件操作时，当前目录路径的显示同样可以让用户避免误操作，提高工作效率。

因此，显示正在编辑的文件所在的路径，不仅能提高工作效率，避免操作失误，还可以便于用户实时了解当前工作环境的情况，并准确快速地进行操作，Show Current File Path 插件就是为此而生。

> [!Note] 插件名片
> - 插件名称：Show Current File Path
> - 插件版本：0.5.2
> - 插件作者：Ravi Mashru
> - 插件描述：显示正在编辑的文件所在的路径
> - 插件项目地址：[点我跳转](https://github.com/ravimashru/obsidian-show-file-path)

> [!Tip] 提示
> - 如果你只是想显示路径，那么 Obsidian 现在的版本已经默认支持此功能
> - 如果你想获得复制物理路径的功能，那么请活用此插件

## 效果&特性

- 会在笔记编辑器窗口的右下角，状态栏中显示当前笔记的路径信息

## 使用

- 安装插件并启用后，即可使用
- 会在笔记编辑器窗口的右下角，状态栏中显示当前笔记的路径信息，如图
- 点击此信息调，则复制笔记的路径信息
![image.png](https://cdn.pkmer.cn/images/20230530201602.png!pkmer)

> [!Tip] 提示
> - 这样的路径信息无法直接粘贴成为内链
> - 这个路径默认是相对路径，即从仓库的根目录计算开始

- 设置
	- Show file name：支持控制是否显示最后文件/笔记名称
	- Show icons：支持控制是否在路径中显示文件夹和文档去别的图标
	- Copy absolute path：支持设置是否使用绝对路径
		- 打开此选项获得的便是这个笔记/文件的，绝对路径地址，是从你本地存储位置的磁盘路径计算开始

>[!Tip] 关联推荐
> - [[quick-explorer]]：在应用标题栏和笔记标题栏增加面包屑导航功能，提供了笔记和目录快速切换的能力
> - [[novel-word-count]]：在 Obsidian 的文件资源管理器窗格中显示每个文件、文件夹和保险库的字数，以及更多其他信息。
> - [[obsidian-collapse-all-plugin]]：单击对应图标或者使用命令，展开或关闭文件管理器中的文件夹
> - [[pane-relief]]：每个窗格的历史记录、用于窗格移动和导航的快捷键等
> - [[recent-files-obsidian]]：显示最近打开的文件列表
> - [[obsidian-gallery]]：让你的笔记变成画廊
> - [[obsidian-tagfolder]]：通过笔记中的标签，重新组织所有的笔记
> - [[chronology]]：按照月历模式导航，轻松了解编辑修改锅的笔记内容。
> - [[hidden-folder-obsidian]]：在文件管理器中快速隐藏文件夹
> - [[hidden-folder-obsidian]]：快速隐藏文件夹