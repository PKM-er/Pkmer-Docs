---
uid: 20230824140342
title: 关于 PDF Translate
tags: [zotero插件]
description: 
author: windingwind
type: other
draft: false
editable: false
modified: 20230824150953
---

# 关于 PDF Translate

Zotero PDF Translate 是由@windingwind 开发的，用于文献管理软件 Zotero 的翻译插件。它完全开源、免费，主要功能有：

- 划词翻译（自动/手动）
- 标题、摘要翻译与源文本/翻译结果显示切换
- 批注翻译（自动/手动）
- 支持 15+ 种翻译服务与 4+ 种字典服务
- 自定义翻译侧栏 UI，支持同时使用多种翻译引擎

插件深度集成了 Zotero 文献阅读功能。主页是 [https://github.com/windingwind/zotero-pdf-translate](https://github.com/windingwind/zotero-pdf-translate)

本文档主要介绍了翻译插件的基本功能，使用方法。

## 如何使用本文档

### 善用搜索

在 PC 端打开本文档，可在左侧大纲进行跳转与搜索。上方搜索栏可以搜索全文。

例如，如果你想了解关于“密钥设置”，则可直接在上方搜索栏中键入“密钥”。

## 下载&安装

Zotero 下载：[https://www.zotero.org](https://www.zotero.org)

GitHub 主页：[https://github.com/windingwind/zotero-pdf-translate](https://github.com/windingwind/zotero-pdf-translate)

插件国内镜像：[下载安装](https://pkmer.cn/products/zotero/zoteroMarket//?Zotero%20PDF%20Translate)

## 功能介绍

### 划词翻译

在阅读器界面，选中文本，即可进行翻译。

如果勾选了自动翻译，则结果在弹窗与右侧栏自动出现；否则点击翻译按钮或使用快捷键 `ctrl/command+T` 来手动翻译。可在设置中选择是否自动翻译。

![image.png|675](https://cdn.pkmer.cn/images/20230824141317.png!pkmer)

### 翻译引擎与字典引擎

对于单个词语，插件会首先尝试使用字典引擎进行翻译，包括详细的释义、音标、例句等（视具体选择的字典引擎而定）。

可在右侧栏切换翻译引擎与语言设置。可在设置中启用、调整或关闭字典引擎。

部分服务支持发音（服务名称带有🔊图标）。

> [!Tip] 提示
> - 有时候出现单个字/词能翻译，整句话不能翻译的情况，是因为单个词使用的字典引擎正常，而翻译引擎异常。请参见常见问题进行排查。

> [!Warning] 重要
> - ❗不带*的翻译引擎可能存在无法使用、结果不准确、时不时翻译失败的可能。建议使用带*的翻译引擎。
> - 💡带有 * 的翻译引擎需要设置密钥，否则无法使用。请在设置页面中根据格式要求输入对应服务的密钥，详见设置章节。

### 拼接文本并翻译

部分情况下，翻译内容跨页或跨节，不方便一次性选取。使用拼接文本可将多段选取内容一次性翻译。

在右侧栏勾选 `拼接选取`，或者在选中文本时按住 `alt` 键，即可多次拼接选中文本内容。

### 复制内容

弹窗中的内容可选中复制，也可双击复制全文。

也可以通过右侧栏下方按钮复制源文本，结果或两者。

### 弹窗大小

弹窗默认大小为自适应，可在设置中改为记住大小，并通过拖拽弹窗右下角的把柄来调整其长宽。

### 右侧栏

右侧栏包含了一些翻译选项，并有翻译源文本及结果。可在设置中自定义其中元素的显示与顺序。

### 批注翻译

批注翻译默认自动开启，会将新的批注文本进行翻译并将结果放在批注评论 (comment) 中。可在设置中关闭自动翻译批注，或设置批注翻译结果存放位置。

也可通过左侧批注栏中，每个批注左上角的按钮手动翻译批注。

翻译批注后，可在右侧栏中编辑源文本并重新翻译。翻译结果将会更新到批注中。可在设置中禁用这一行为。

### 翻译结果加入笔记

如果右侧栏已有笔记打开，在选中文本后，弹窗中会出现添加到笔记按钮。点击可将选中文本及其翻译添加到右侧笔记中。

可在设置中禁用这一行为。

### 标题翻译

在库视图中，选中一个或多个文献条目，右键点击，在菜单中选择标题翻译即可。快捷键为 ctrl/command+T。翻译结果将存在条目的短标题栏，并会在条目列表中显示。

快捷键还可以用于切换条目列表显示原标题/翻译后的标题。

### 摘要翻译

与标题翻译一样，选中文献条目后在右键菜单中选择更多翻译选项 - 翻译摘要即可。翻译结果将存在条目的摘要栏。

### 独立翻译窗口与多引擎结果对比

在阅读界面右侧栏单击“在独立窗口中打开”按钮，可打开独立窗口。

![image.png|375](https://cdn.pkmer.cn/images/20230824141851.png!pkmer)

右上角的 `📌` 按钮可固定窗口在阅读时始终置顶；

右上角的 `+` 按钮可添加一个对比翻译引擎。翻译时，可以同时对比多个翻译引擎的结果。

## 常用设置

在 `菜单栏-编辑-首选项` 打开设置页面。

基本栏中，包含了功能开关，翻译服务设置；高级栏中，包含了界面设置与策略设置。

![image.png|625](https://cdn.pkmer.cn/images/20230824142101.png!pkmer)

### 翻译服务设置

![image.png|650](https://cdn.pkmer.cn/images/20230824142115.png!pkmer)

### 密钥申请

![image.png|700](https://cdn.pkmer.cn/images/20230824143135.png!pkmer)

### 密钥申请：微软

#### 申请步骤

官方文档：[https://learn.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=csharp](https://learn.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=csharp)

1. 打开 [https://azure.microsoft.com/en-us/free/cognitive-services/](https://azure.microsoft.com/en-us/free/cognitive-services/) ，点击 start free. 登录或注册微软账号，选择 free subscription （免费订阅）.
![image.png|475](https://cdn.pkmer.cn/images/20230824143315.png!pkmer)
2. 打开 [https://portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation](https://portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation)
![image.png|600](https://cdn.pkmer.cn/images/20230824143334.png!pkmer)
![image.png|600](https://cdn.pkmer.cn/images/20230824143345.png!pkmer)

3. 点击 Next. 您不必更改额外内容。检查状态并单击创建。
![image.png|650](https://cdn.pkmer.cn/images/20230824143402.png!pkmer)

4. 等待服务就绪。你可以在 Azure 主页中看到你的新翻译服务。<https://portal.azure.com/#home>
![image.png|750](https://cdn.pkmer.cn/images/20230824143429.png!pkmer)
5. 单击上面显示的一项。复制密钥（KEY）。

![image.png|750](https://cdn.pkmer.cn/images/20230824143454.png!pkmer)

恭喜！现在，您可以在剪贴板中获取密钥。在设置界面的翻译引擎的密钥栏粘贴。单击“确定”。

#### 密钥格式

填入上面复制的 KEY。

例如，上面复制了 KEY 是 aabbcc112233，则填入 aabbcc112233。

### 密钥申请：DeepL

#### 申请方法

申请：<https://www.deepl.com/zh/pro-api?cta=header-pro-api/>

> [!Tip] 请注意
> - DeepL 需要特定地区银行卡才可以注册。
> - 有两类订阅：DeepL 客户端与 DeepL API。需要 API 订阅。同时请确认订阅类型是 Free 还是 Pro，选择对应的引擎。

#### 密钥格式

DeepL 的 API 验证密钥，在 DeepL 官网的账户信息页面可以看到。格式类似 xxx-xxx-xxx:fx。

### 密钥申请：有道智云

#### 申请步骤

登录 [https://ai.youdao.com/login.s](https://ai.youdao.com/login.s)

![image.png|525](https://cdn.pkmer.cn/images/20230824143821.png!pkmer)

登录后

![image.png|675](https://cdn.pkmer.cn/images/20230824143834.png!pkmer)

第一步：我们先创建应用 应用管理 -> 我的应用 -> 创建应用

![image.png|675](https://cdn.pkmer.cn/images/20230824143846.png!pkmer)

接入方式: 选 API

应用名称: 任意

![image.png|700](https://cdn.pkmer.cn/images/20230824143900.png!pkmer)

第二步：创建实例

接下来 " 自然语言翻译 " -> 翻译实例 -> 创建实例

![image.png|750](https://cdn.pkmer.cn/images/20230824143913.png!pkmer)

![image.png|800](https://cdn.pkmer.cn/images/20230824143925.png!pkmer)

第三步：去应用里面，绑定实例：

![image.png|850](https://cdn.pkmer.cn/images/20230824143942.png!pkmer)

最后一步：复制 " 应用 ID" 和 " 应用密钥 "

![image.png|775](https://cdn.pkmer.cn/images/20230824144000.png!pkmer)

#### 密钥格式

应用 ID#应用密钥#VOCABID(可选)

例如，你的应用 ID 是 112233，应用密钥是 aabbcc，则应该填入 `112233#aabbcc`。

如果你需要设置词典 id（VOCABID），例如你的词典 id 是 999，则填入 `112233#aabbcc#999`。词典 id 可省略。

#### 关于 VOCABID

登录控制台，选择文本翻译服务，点击右侧的术语表，选择新建，填写表名称和语言方向，添加需要的术语表，然后获取对应词表 id 即可。

#### 官方文档

[Official Document](https://ai.youdao.com/DOCSIRMA/html/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91/API%E6%96%87%E6%A1%A3/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1-API%E6%96%87%E6%A1%A3.html)

### 密钥申请：百度

#### 申请步骤

登录 [百度翻译开放平台(opens new window)](https://fanyi-api.baidu.com/api/trans/product/index)

申请时这样填:

![image.png|600](https://cdn.pkmer.cn/images/20230824144157.png!pkmer)

- 您的应用名称是什么：Zotero PDF Translate
- 有无应用相关的介绍链接：<https://github.com/windingwind/zotero-pdf-translate>
- 请简单介绍下您的应用：使用机器翻译功能，翻译文献
- 服务器地址: 留空不填

进入 [开发者信息(opens new window)](https://fanyi-api.baidu.com/api/trans/product/desktop?req=developer)

![image.png|625](https://cdn.pkmer.cn/images/20230824144807.png!pkmer)

![image.png|625](https://cdn.pkmer.cn/images/20230824144822.png!pkmer)

#### 密钥格式

APPID#密钥#ACTION(可选, 见<https://api.fanyi.baidu.com/doc/21,> 默认 0)

例如，你的 APPID 是 112233，密钥是 aabbcc，则应该填入 112233#aabbcc。

如果你需要设置自定义术语干预（ACTION），例如你的 action 是 999，则填入 112233#aabbcc#999。action 可省略，默认是 0。

### 密钥申请：百度垂直领域翻译

#### 申请步骤

与百度翻译相同，在此处申请：[https://fanyi-api.baidu.com/product/12](https://fanyi-api.baidu.com/product/12)

#### 密钥格式

APPID#密钥#DOMAIN_CODE

例如，你的 APPID 是 112233，密钥是 aabbcc，领域码（DOMAIN_CODE）是生物医药（medicine），则应该填入 `112233#aabbcc#medicine`。

| Domain Code | 领域     | 语言方向    |
|-------------|--------|---------|
| electronics | 电子科技领域 | 中文 -->英语 |
| finance     | 金融财经领域 | 中文 -->英语 |
| finance     | 金融财经领域 | 英语 -->中文 |
| mechanics   | 水利机械领域 | 中文 -->英语 |
| medicine    | 生物医药领域 | 中文 -->英语 |
| medicine    | 生物医药领域 | 英语 -->中文 |
| novel       | 网络文学领域 | 中文 -->英语 |

### 密钥申请：彩云

#### 申请步骤

登录 [彩云科技开放平台(opens new window)](https://dashboard.caiyunapp.com/user/sign_in/)

(登录之前需要 " 邮箱注册 " 和 " 邮箱验证 ", 这里就不演示了)

登录后会看到这个, 先填 "1. 账户信息 ":

![image.png](https://cdn.pkmer.cn/images/20230824145322.png!pkmer)

第一步请自己填写

![image.png|625](https://cdn.pkmer.cn/images/20230824145456.png!pkmer)

再填第二步 (2. 令牌的申请信息):

![image.png|650](https://cdn.pkmer.cn/images/20230824145507.png!pkmer)

第二步这样填:

先选择 " 彩云小译 API"（右侧那个）

然后其他信息这样填:

应用名: Zotero PDF Translate 应用链接: [https://github.com/windingwind/zotero-pdf-translate](https://github.com/windingwind/zotero-pdf-translate) 应用开发情况: 文献管理软件 Zotero 插件

![image.png|625](https://cdn.pkmer.cn/images/20230824145517.png!pkmer)

填完后长这样:

![image.png|625](https://cdn.pkmer.cn/images/20230824145542.png!pkmer)

提交即可，彩云会审核，耗时大概 1-2 天,

如果通过了会看到:

![image.png|700](https://cdn.pkmer.cn/images/20230824145559.png!pkmer)

点击红色箭头指向的 蓝色链接 进去 (令牌下面那一行)

![image.png|600](https://cdn.pkmer.cn/images/20230824145614.png!pkmer)

复制这个 Token 即可

![image.png|500](https://cdn.pkmer.cn/images/20230824145634.png!pkmer)

#### 密钥格式

填入上面的令牌 Token。例如，你的 token 是 112233aabbcc，则填入 112233aabbcc。

### 密钥申请：小牛

#### 申请方法

登录 [小牛(opens new window)](https://niutrans.vip/)

注册成为小牛翻译开放平台用户，登录小牛控制台，在<个人中心>页基本信息部分可看到，查看及复制前需先点击右侧显示，将**符号变为具体数字。注：APIKEY 在 24 小时之内只允许重置一次。

![image.png](https://cdn.pkmer.cn/images/20230824150020.png!pkmer)

#### 密钥格式

填入上面的 API-KEY。

### 密钥申请：腾讯

登录 [腾讯云(opens new window)](http://cloud.tencent.com/)

**访问管理 -> 用户 -> 用户列表**

为了安全新建一个 " 子用户 "。我这里是已经建立好了

![image.png](https://cdn.pkmer.cn/images/20230824150132.png!pkmer)

这个 " 子用户 " 只有 " 文本翻译 " 权限，没有其他任何权限

![image.png](https://cdn.pkmer.cn/images/20230824150144.png!pkmer)

"API 密钥 " -> 复制 SecretId 和 SecretKey

![image.png](https://cdn.pkmer.cn/images/20230824150152.png!pkmer)

别忘了启用翻译 API, 左上角搜索到之后进行启用

![image.png](https://cdn.pkmer.cn/images/20230824150210.png!pkmer)

#### 密钥格式

![image.png](https://cdn.pkmer.cn/images/20230824150225.png!pkmer)

SecretId#SecretKey#Region(可选, 默认 ap-shanghai)#ProjectId(可选, 默认 0)

例如，你这里的 SecretId 是 ABCD，SecretKey 是 112233，则填入 `ABCD#112233`。若无特殊不需要填写其他字段。

### 密钥申请：OpenL

#### 申请步骤

申请：[https://my.openl.club/login?next=/](https://my.openl.club/login?next=/)

![image.png](https://cdn.pkmer.cn/images/20230824150304.png!pkmer)

#### 密钥格式

service1,service2,...#API 密钥 (service codes 用 ',' 分隔).

支持的 service codes: deepl,youdao,tencent,aliyun,baidu,caiyun,wechat,sogou,azure,ibm,aws,google, 见 [Service Code](https://docs.openl.club/#/API/format?id=%e7%bf%bb%e8%af%91%e6%9c%8d%e5%8a%a1%e4%bb%a3%e7%a0%81%e5%90%8d)

例如，你需要使用 deepl 和 youdao，你的 API 密钥（上图粉红色一长串）是 112233，则填写 deepl,youdao#112233。其他更多或更少服务同理。

### 界面设置

可在此处调整侧栏的显示内容与翻译结果显示字号。右侧可预览字号与行间距。

![image.png|700](https://cdn.pkmer.cn/images/20230824143156.png!pkmer)

### 按文献语言禁用自动翻译

对文献条目的语言一栏匹配的文献，将禁用自动翻译。

例如，需要禁用中文文献的自动翻译，则推荐填写 `zh,zh_CN,zh-CN,中文,中文;`

![image.png|625](https://cdn.pkmer.cn/images/20230824143213.png!pkmer)

## 常见翻译问题

### 翻译错误

一个典型的翻译错误提示（中文或英文）：

```
[Request Error]
Engine not available, invalid secret, or request too fast.
Use another translation engine or post the issue here:
https://github.com/windingwind/zotero-pdf-translate/issues
The message below is not Zotero or the PDF Translate addon, but from
Google(API).（此处显示出现错误的翻译引擎）
Error: Request timed out（此处显示错误提示）
```

### 能翻译单个词语但不能翻译句子

单个词默认由词典引擎翻译，句子由翻译引擎翻译。此时是翻译服务出现问题，请参考下文解决办法。

### Google 翻译

任何问题都是因为中国大陆访问谷歌受到网络限制。

另外，谷歌翻译中国已宣布停止服务。

	●即使你能够访问谷歌翻译的网页？

请检查代理设置。

	●即使你之前可能能够使用？

网络限制随时可能发生变化。

Google 翻译出现问题时，请立刻考虑换一个翻译引擎。除非你愿意尝试修改 HOSTS 或具有代理能力，没有其他解决办法。

本文不提供相关操作的指导。

对于插件版本>=0.8.29，可在 Googel 或 Goolge(API) 的密钥/secret 栏填入代理网址（须有效）的方式解决 Google 翻译无法访问的问题。例如<https://translate.3822808.com> <https://translate.amz.wanghttps://gtranslate.cdn.haah.net> 等（以上网址来源网络，不确保有效性）>

### CNKI 翻译问题

当短时间内翻译频率过高，会触发人机验证。请到 [https://dict.cnki.net/index#](https://dict.cnki.net/index#) 手动翻译任意词语，通过人机验证后即可继续使用。

### 确认翻译引擎是否需要密钥

翻译引擎后面带 * 的都是需要密钥的引擎，需要自己自行注册账号获取密钥，获取密钥请参考：[https://zotero.yuque.com/books/share/4443494c-c698-4e08-9d1e-ed253390346d/ngu6mc](https://zotero.yuque.com/books/share/4443494c-c698-4e08-9d1e-ed253390346d/ngu6mc)

### 无需密钥的翻译服务

这些翻译服务采用模拟网页访问的方式，因此不稳定且可能由于大量访问被短暂封禁。遇到问题请考虑换用需要密钥的翻译服务。

对于短暂封禁：可等待一段时间；

对于服务被关闭：没有任何解决办法；

对于翻译结果质量较差：没有任何解决办法。

### 需密钥的翻译服务

请按以下顺序检查：

1 是否正确设置密钥？请根据 [https://zotero.yuque.com/books/share/4443494c-c698-4e08-9d1e-ed253390346d/ngu6mc](https://zotero.yuque.com/books/share/4443494c-c698-4e08-9d1e-ed253390346d/ngu6mc) 检查密钥格式是否正确。

2 登录对应翻译服务的官网，检查账户余量。部分翻译服务在开通账号后，还需要额外操作来领取免费翻译额度或开通翻译服务。（例如，小牛、百度等）

3 确认网络环境是否能够访问对应服务（例如，DeepL 在部分地区可能无法顺畅访问）

如果仍然无法解决问题，请到 [https://github.com/windingwind/zotero-pdf-translate/issues?q=](https://github.com/windingwind/zotero-pdf-translate/issues?q=) 搜索是否有相关问题。仍然无法解决，请提一个 issue，并附上出现问题的报错文本及截图。

## 常见功能问题

### 手动翻译

转到编辑 ->首选项 ->PDF Translate>基本，取消选中自动翻译，确定。单击弹出窗口或侧栏上的翻译按钮进行翻译。

### 翻译快捷键

选择一些文本后按快捷键 Ctrl+T。如果您在库视图中，将显示/隐藏标题的翻译。

### 拼接多次选中的文本并一起翻译

在 PDF 中选择文本时按 Alt/Option，或在侧栏中勾选拼接选取，然后翻译。

### 翻译结果不是我想要的语言

默认目标语言与 Zotero 语言相同。转到编辑 ->首选项 ->PDF Translate->基本，然后更改语言设置，确定。

### 更改字体大小或行间距

转到编辑 ->首选项 ->PDF Translate->高级并设置字体大小或行高。

### 手动调整/保持弹窗大小

转到编辑 ->首选项 ->PDF Translate->高级并设置记住弹窗大小。

弹窗右下角可拖动调整大小。

![image.png](https://cdn.pkmer.cn/images/20230824150949.png!pkmer)
