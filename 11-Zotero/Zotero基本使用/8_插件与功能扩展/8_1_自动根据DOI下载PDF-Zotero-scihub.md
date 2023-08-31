---
uid: 20230817143445
title: 8.1- 自动根据 DOI 下载 PDF：Zotero-scihub
tags: [zotero]
description: 
author: 摸鱼仙人
type: other
draft: false
editable: false
modified: 20230817191753
---

# 8.1- 自动根据 DOI 下载 PDF：Zotero-scihub

## 一、项目地址

### （一）GitHub 地址

[ethanwillis/zotero-scihub: A plugin that will automatically download PDFs of zotero items from sci-hub (github.com)](https://github.com/ethanwillis/zotero-scihub)

### （二）下载地址

[https://zotero-chinese.gitee.io/zotero-plugins/#/](https://zotero-chinese.gitee.io/zotero-plugins/#/)

在这个页面中选择 Zotero Scihub，访问不了 GitHub 可以选择国内源就可以下载了

## 二、使用注意

### （一）常见设置

![22cf78a288eed4a2d0508b149b603e41_MD5](https://cdn.pkmer.cn/images/202308171542003.png!pkmer)

### （二）常见问题

1.会弹个 Error Javascipt 弹窗

最新版这个弹窗

![30bb0a7335be734d5259114d5d7d4671_MD5](https://cdn.pkmer.cn/images/202308171542004.png!pkmer)

旧版这个弹窗

![a4b57d02b154ccfc36e5688c05a86545_MD5](https://cdn.pkmer.cn/images/202308171542005.png!pkmer)

2.出现的原因

出自于 ethanwillis/zotero-scihub/-/blob/master/content/scihub.ts 中写到，当 scihub 网站要求验证码时候，会中断程序弹出 error

![0b3946ebcb208e166041089d3ffdb2ef_MD5](https://cdn.pkmer.cn/images/202308171542006.png!pkmer)

3.建议在知网抓取文献的时候，要把 scihub 自动抓取给关闭了，因为没有 scihub 一般没有收录中文文献。有时候一些英文文献很早的以及很新的没有收录的，还有一种情况就是访问次数过多以后，Sichub 服务器识别到了就拒绝了你的请求，就只有换另一个服务器了！

4\. 一个小的建议，毕竟 scihub 是一个免费的网站，不要短时间一下子下载太多了，这样子既能确保你可以愉快的下载，又不会对于 scihub 服务器造成压力，理性下载！

## 三、不使用插件的原始方法

### （一）操作步骤

1.在右上角点击编辑选项

![88d813acd7da85be032dff0d268d0f06_MD5](https://cdn.pkmer.cn/images/202308171542007.png!pkmer)

2.在编辑选择中，选择高级选项卡，最好点击“配置编辑器”

![32ef1fcda08bdf43219f774b68b30dc7_MD5](https://cdn.pkmer.cn/images/202308171542008.png!pkmer)

3.同意警告

![3e23c55fd4987633b19829dab87592d5_MD5](https://cdn.pkmer.cn/images/202308171542009.png!pkmer)

4.搜索 extensions.zotero.findPDFs.resolvers

![617dad0d91a6607d0b36bed6ae0aa34e_MD5](https://cdn.pkmer.cn/images/202308171542010.png!pkmer)

5.将这一串代码粘贴进去

{"name":"Sci-Hub","method":"GET","url":"[https://sci-hub.ru/{doi}","mode":"html","selector":"#pdf","attribute":"src","automatic](https://sci-hub.ru/%7Bdoi%7D%22,%22mode%22:%22html%22,%22selector%22:%22#pdf%22,%22attribute%22:%22src%22,%22automatic)":false}

```
{
    "name":"Sci-Hub",
    "method":"GET",
    "url":"https://sci-hub.ru/{doi}",
    "mode":"html",
    "selector":"#pdf",
    "attribute":"src",
    "automatic":true
}

```

6.其中 "url":"[https://sci-hub.ru/{doi}](https://sci-hub.ru/%7Bdoi%7D)", 可以进行替换源 "url":"[https://sci-hub.st/{doi}](https://sci-hub.st/%7Bdoi%7D)"

## 四、两种方法的区别

（一）插件直接在首选项插件选项里面，修改镜像网址就行了。而使用第二种的方式进行配置如果镜像寄了，还需要在重新来一遍进行配置替换镜像地址，操作更加繁琐。

（二）抓不到或者被拒绝访问以后，第二种不会弹弹窗。

（三）被 scihub 拒绝了，都还是一样抓取不到文献。

## 五、Scihub 官方镜像地址

- [sci-hub.se](https://sci-hub.se/)
- [sci-hub.st](https://sci-hub.st/)
- [sci-hub.ru](https://sci-hub.ru/)

## 六、补充资料

### 代码原截图

![1af6479ce455f3550d8832efe66c0c28_MD5](https://cdn.pkmer.cn/images/202308171542011.png!pkmer)

下一篇 [[8_2_中文文献增强-茉莉花插件]]