---
uid: 20240622170004
title: 用 alfred 随机启动一个知识软件
tags: [教程]
description: 介绍用 alfred 随机启动一个知识软件
author: Dusk
type: other
draft: false
editable: false
modified: 20240715091203
---

# 教程：用 alfred 随机启动一个知识软件

## 引言

前阵子人有些懒，闲下来面对电脑都不知要做些什么。突然想到当我自己不知道要做些什么的时候，可以让电脑来给我决定哇。

在 mac 端，先后尝试了「快捷捷径」、「自动操作」、「alfred」等软件，最终折腾完后，还是 alfred 更合适些（也是唯一在 ChatGPT 帮助下，成功编写好脚本的）

## 效果展示

好，老规矩，先秀效果图。

1，双击 cmd，呼出 alfred，输入「r」，按回车

![](https://cdn.pkmer.cn/images/202407150913557.png!pkmer)

2，屏幕当中会弹出个「小框框」，当你点击后，就会直接跳转到相应的软件中去，然后和自己说先来个 5 分钟热身，再慢慢进入「知识的整理与回顾」状态么

![](https://cdn.pkmer.cn/images/202407150913558.png!pkmer)

3，目前我是放了这五个软件，并写了相关的提示语，读者可以根据需求再自行配置下：

1. 整理 Things3 里的一则 Projects 推进笔记
2. 复习下 Readwise 的高亮笔记
3. 复习 Anki 15 分钟
4. 打开 Reader 看会书
5. 打开 Heptabase 的一个白板进行修改

好，直接贴配置吧，毕竟「talk is cheap. show me the code.」

### alfred 端

很简洁，两个动作块。含义就是：输入命令，然后调用 python。

各动作块的配置如下：

![](https://cdn.pkmer.cn/images/202407150913559.png!pkmer)

![](https://cdn.pkmer.cn/images/202407150913561.png!pkmer)

![](https://cdn.pkmer.cn/images/202407150913562.png!pkmer)

### python 代码

有一说一，感觉用 ChatGPT 写 python 代码感觉是相对比较靠谱的，用来写 mac 的「快捷捷径」、「自动操作」，则不知是否我操作的问题，总是运行不起来

```
import random
import subprocess
import tkinter as tk
from tkinter import messagebox

# 定义任务列表和对应的操作
tasks = [
    {"task": "整理 Things3 里的一则 Projects 推进笔记", "command": ["open", "-a", "Things3"]},
    {"task": "复习下 Readwise 的高亮笔记", "command": ["open", "-a", "Google Chrome", "https://readwise.io/dailyreview"]},
    {"task": "复习 Anki 15 分钟", "command": ["open", "-a", "Anki"]},
    {"task": "打开 Reader 看会书", "command": ["open", "-a", "Google Chrome", "https://read.readwise.io/new/read/01hxrq3g90h1r8e5g26bndqs3r"]},
    {"task": "打开 Heptabase 的一个白板进行修改", "command": ["open", "-a", "Heptabase"]},
]

# 检查应用程序是否存在的函数
def check_application(app_command):
    try:
        subprocess.check_call(app_command)
        return True
    except subprocess.CalledProcessError as e:
        return False

# 随机选择一个任务
selected_task = random.choice(tasks)

# 检查选中的应用程序是否存在
app_command = selected_task['command']
if not check_application(['open', '-Ra', app_command[2] if 'https://' in app_command else app_command[2]]):
    root = tk.Tk()
    root.withdraw()
    root.attributes("-topmost", True)  # 确保窗口在最前面
    messagebox.showerror("错误", f"找不到应用程序：{app_command[2] if 'https://' in app_command else app_command[2]}")
    root.destroy()
    exit()

# 在屏幕中央显示选中的任务
def show_task_popup(task):
    root = tk.Tk()
    root.withdraw()  # 隐藏主窗口

    # 获取屏幕宽高
    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()

    # 设定窗口宽高
    window_width = 300
    window_height = 100

    # 计算窗口位置
    position_top = int(screen_height/2 - window_height/2)
    position_right = int(screen_width/2 - window_width/2)

    root.geometry(f'{window_width}x{window_height}+{position_right}+{position_top}')

    root.attributes("-topmost", True)  # 确保窗口在最前面
    root.update_idletasks()
    root.deiconify()
    root.lift()
    root.focus_force()
    messagebox.showinfo("选中的任务", f"当前任务：{task}", parent=root)
    root.destroy()  # 销毁窗口

show_task_popup(selected_task['task'])

# 打开对应的应用程序或网页
try:
    subprocess.Popen(selected_task["command"])
except Exception as e:
    root = tk.Tk()
    root.withdraw()
    root.attributes("-topmost", True)  # 确保窗口在最前面
    messagebox.showerror("错误", f"无法打开应用程序：{selected_task['task']}", parent=root)
    root.destroy()
    exit()

```