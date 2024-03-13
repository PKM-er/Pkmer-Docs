---
uid: 2023080322142099
title: Obsidian 插件：Audio Notes
tags: ['obsidian插件', 'readme']
description: 为音频文件创建笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Audio Notes

> [!Note] 插件名片
> - 插件名称：Audio Notes
> - 插件作者：Jason Maldonis
> - 插件说明：为音频文件创建笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jjmaldonis/obsidian-audio-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-audio-notes)

## 概述

为音频文件创建笔记。

![Audio Notes](https://cdn.pkmer.cn/covers/obsidian-audio-notes.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jjmaldonis/obsidian-audio-notes/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-audio-notes]] 插件的自述翻译

![版本](https://img.shields.io/badge/version-0.7.2-blue)

![许可证](https://img.shields.io/badge/license-MIT-brightgreen)

# Obsidian 音频笔记

<strong>音频笔记</strong>是 Obsidian 笔记应用的一个插件。

什么是音频笔记？

<strong>音频笔记</strong>使您在收听播客和其他音频文件时轻松记录笔记。

看看吧！

![](assets/audio-notes-example.gif)

<strong>音频笔记</strong>是一个包含音频引用的标注，配有嵌入式音频播放器以重播引用。它看起来像这样：

![](assets/renderedNote.png)

您可以使用下面描述的语音转文本软件为音频文件生成转录。一旦您有了转录，<strong>音频笔记</strong>将自动生成您的笔记的引用！

要创建音频笔记，您必须指定一个音频文件，并可以设置一些其他属性。所有属性都使用类似标注的代码块进行设置：

![](assets/unrenderedNote.png)

* `audio`：（必需）音频文件名。它可以是本地文件或在线音频文件的链接。
  * （可选）您可以在文件名的末尾添加 `#t=<start>,<end>` 来设置引用的开始和结束时间。例如，您可以添加 `t=1:20,1:30` 以在 1:20 开始音频片段，并在 1:30 结束。如果您不想设置结束时间，可以简单地使用 `t=<start>`。
  * （可选）您可以在文件名的末尾添加 `&s=<playback-speed>`，在 `#t=<start>,<end>` 之后，以指定播放速度。如果您没有开始和结束时间，可以在文件名的末尾添加 `#s=<playback-speed>`。播放速度默认为 `1.0`。
* `title`：（可选）您的笔记的标题。
* `transcript`：（可选）转录的文件名。有关详细信息，请参见下文。
* `author`：（可选）用作引用作者的文本。
* `liveUpdate: true`：（可选）如果您在代码块中添加了 `liveUpdate: true` 属性，引用将在音频播放时自动更新（有关更多信息，请参见下文）。

如何使用插件

找到您想要记录笔记的.mp3（或.m4a 或.m4b）文件，并将其移动到您的保险库中。您可能希望生成一个转录文件，以便让<strong>音频笔记</strong>自动插入音频的转录（见下文）。

一旦您的.mp3 文件在您的保险库中，运行命令“在新文件中创建新的音频笔记”。选择一个 mp3 文件后，将创建一个新的音频笔记，看起来像这样：

```audio-note
audio: assets/276-paul-grahams-essays-part-2-ads.mp3
title: Founders Podcast, Episode 276 - Paul Graham's Essays Part 2
transcript: assets/276-paul-grahams-essays-part-2-ads.json
```

现在您可以开始听了。

当您想要记录音频中所说的内容时，请暂停播放器并运行命令“在当前时间（+/- 15 秒）创建新的音频笔记”。根据文件中第一个音频播放器的当前时间，在文件末尾添加一个新的音频笔记。

您可以随心所欲地编辑新创建的音频笔记！您可以更改文本和音频片段的开始/结束时间。如果您扩展了音频并需要重新生成包含更多单词的引用，您可以删除引用，然后使用命令“重新生成当前音频笔记”或“重新生成所有音频笔记”从您设置的开始/结束时间重新创建引用。

现在您可以随时随地听您的笔记 :)

### 将热键绑定到音频播放器控制

如果您正在使用计算机，您可以使用热键来控制当前播放的音频播放器。以下是我使用的热键：

- `Ctrl + Shift + Right Arrow`：快进
- `Ctrl + Shift + Left Arrow`：快退
- `Ctrl + Shift + Up Arrow`：加速
- `Ctrl + Shift + Down Arrow`：减速
- `Ctrl + Shift + =`：将播放器重置为起始时间
- `Ctrl + Shift + Space`：切换播放/暂停
- `Ctrl + Shift + N`：在当前时间创建新的音频注释
- `Ctrl + Shift + G`：重新生成当前音频注释

### 阅读的实时更新

如果您喜欢在听的同时阅读，您可以在代码块中添加 `liveUpdate: true` 属性。

当打开此功能时，音频笔记中的引用将随着音频播放而自动更新。（注意：字幕只有在音频播放时才会更改。）

在移动设备上使用

（仅在 Android 上进行了测试）

如果您在手机上收听播客或其他音频文件，能够在手机上做笔记非常重要。

下面的工作流程遵循 [Tiago Forte](https://fortelabs.com/) 的 CODE 过程：捕捉、组织、提炼和表达。您可以快速捕捉您关心的信息，并在稍后进行组织、提炼和表达，而不会在收听播客/音频时丢失思路。这有助于避免 [门效应](https://en.wikipedia.org/wiki/Doorway_effect#:~:text=The%20doorway%20effect%20is%20a,remained%20in%20the%20same%20place.)。

这是我发现的最好的做笔记的方法：

1. 在手机上安装 Audio Notes，并将“创建新的音频笔记…”命令固定在命令列表的顶部（使用核心插件“命令面板”）。
2. 在您的计算机上预加载.mp3 和转录，并在您的存储库中创建一个新的笔记，其中包含初始的音频笔记。
3. 将您的存储库同步到手机上。
4. 在手机上打开 Obsidian 并出发散步！使用刚刚创建并同步到手机上的音频笔记代码块在 Obsidian 中收听.mp3。
5. 当您听到想要记住的内容时，暂停音频并向下滑动，在 Obsidian 笔记的末尾创建一个新的音频笔记。您可以在此时在新生成的笔记下方添加任何个人想法。
6. 完成后，将您的笔记同步回计算机并编辑引用。
7. 通过突出显示或总结您最想记住的内容来完成笔记。

点击下方查看在手机上使用<strong>音频笔记</strong>的视频。

[<img src="assets/audio-notes-example-mobile_exported_0.jpg" style="width:200px" target="_blank">](https://audio-notes-public.s3.amazonaws.com/audio-notes-example-mobile.mp4)

在 YouTube 视频上做笔记

如果你在观看带字幕的 YouTube 视频，你可以在上面做笔记，<strong>音频笔记</strong>会自动将字幕插入到你的笔记中。

1. 安装 Media Extended 插件。
2. 在你的笔记中嵌入一个 YouTube 视频，使用 `![](https://www.youtube.com/watch?v=ji5_MqicxSo)`。
3. 运行命令 `Media Extended: Open Media from Link`，并将 YouTube 视频的 URL 粘贴到框中。开始听。
4. 当你准备好做笔记时，运行命令 `Audio Notes: (Media Extended YouTube Video) Create new Audio Note at current time (+/- 15 seconds)` 来创建一个新的音频笔记，其中包含 YouTube 视频的字幕。
5. 在听 YouTube 视频时，你可能想使用 `liveUpdate: true` 属性。

## 快速语音消息

Obsidian 提供了一个名为*音频录制器*的核心插件，允许您直接在 Obsidian 中录制语音消息，但它缺少一些功能。我们扩展了*音频录制器*的功能，以在 Obsidian 笔记中添加语音消息的转录。

我们还添加了在录制过程中暂停和恢复录制的功能，以防您被打断。

### 使用方法

首先，您需要从 [Deepgram AI](https://dpgr.am/obsidian) 获取一个 API 密钥。这需要花费一些费用，但非常实惠。作为试用期的一部分，他们还会免费提供多达 12,000 分钟的转录服务，具体取决于您选择的其他选项。在创建 Deepgram API 密钥后，将其添加到您的音频笔记插件设置中。

然后，您可以使用命令“生成带有转录的快速音频录制”，或者您可以单击侧边栏中的麦克风图标。这将弹出一个模态框，让您选择转录的选项。（要了解有关每个选项的更多信息，请访问模态框中的相应链接。）在选择要添加的选项后，您可以点击绿色的麦克风按钮开始录制。

录制完成后，点击停止按钮。转录需要几秒钟的时间准备好，准备好后，您可以点击“保存”按钮，将音频和转录添加到您的文档中。

生成文本记录有三种方法：使用 Deepgram 插件的<strong>音频注释</strong>功能从 URL 生成文本记录，使用现有的.srt 文件，或者自己生成文本记录。

如果您的音频文件可在网上获取，您可以使用 Deepgram AI 来转录它们。（注意：我们正在努力允许您转录不在线的预录音频文件。）

您可以使用“在线转录 mp3 文件”命令或“在新文件中创建新的音频笔记”命令来转录播客或音频。转录将以 JSON 格式保存在您的保险库中，并可用于将来的音频笔记。

首先，您需要从 Deepgram AI 获取 API 密钥。它需要付费，但价格非常实惠。在试用期内，根据您选择的其他选项，他们还会免费提供高达 12,000 分钟的转录服务。创建 Deepgram API 密钥后，将其添加到您的音频笔记插件设置中。

### 使用现有的 .srt 文件

如果您已经有了以 .srt 格式的剧本，您可以直接使用它，只需将文件名放在 `transcript: <your .srt file>` 属性中即可。

### 自己生成转录文本

这个过程可能会很困难，因为安装 OpenAI Whisper 很困难，但是下面是它的工作原理：

你可以使用 OpenAI Whisper 从计算机上的音频文件生成转录文本。

运行 OpenAI Whisper 需要 Python 3.9。我建议使用 [miniconda](https://docs.conda.io/en/latest/miniconda.html) 来安装 Python 3.9。一旦安装了 Python，使用 `pip install git+https://github.com/openai/whisper.git` 来安装 OpenAI Whisper。你可能还需要安装 `ffmpeg`，这更加困难。请参阅 OpenAI Whisper 的文档获取更多信息。

下面的 Python 脚本将对你的音频文件进行语音识别，并将转录文本保存到你的保险库中。一旦转录文本在你的保险库中，音频笔记插件就可以使用它来自动生成文本。

你可以使用 `pip install tkinter` 来安装 `tkinter`，以便显示一个“选择文件”对话框，而不是在代码中设置文件名。

```
import whisper
import json

```

# 如果已安装 tkinter，则显示一个“选择文件”对话框

try:

    import tkinter as tk

    from tkinter.filedialog import askopenfilename

    root = tk.Tk()

    root.withdraw()

    audio_filename = askopenfilename()

    print(f"You selected: {audio_filename}")

except ImportError:

    audio_filename = r"<path-to-audio-file-in-your-vault>.mp3"

# 设置以下信息以进行语音识别

model_name = "small.en" # 请参阅 <https://github.com/openai/whisper> 获取其他选项

start: float = None # （可选）设置开始时间（以秒为单位）

end: float = None # （可选）设置结束时间（以秒为单位）

# 加载音频文件并根据需要进行裁剪

audio = whisper.load_audio(audio_filename)

samples_per_second = 16_000

if end is not None:

    audio = audio[:int(end * samples_per_second)]

if start is not None:

    audio = audio[int(start * samples_per_second):]

# 加载模型。它可能有多个 GB 的大小

model = whisper.load_model(model_name)

# 生成转录文本。这可能需要很长时间

result = model.transcribe(audio, verbose=False)

# 将转录保存为与音频文件同名的 .json 文件

for segment in result["segments"]:

    del segment["id"]

    del segment["seek"]

    del segment["tokens"]

    del segment["temperature"]

    del segment["avg_logprob"]

    del segment["compression_ratio"]

    del segment["no_speech_prob"]

    if start is not None:

        segment["start"] += start

        segment["end"] += start

output_filename = ".".join(audio_filename.split(".")[:-1]) + ".json"

with open(output_filename, "w") as f:

    json.dump(result, f)

print("Done!")
