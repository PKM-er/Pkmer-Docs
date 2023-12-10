---
uid: 20231202225242
title: 搭建基于 Azure-OpenAI 的自用 ChatGPT
tags: [AI]
description: 搭建基于 Azure-OpenAI 的自用 ChatGPT，使用开源项目chatGPT Next Web
author: 一刀
type: practice
draft: false
editable: false
modified: 20231202225633
---

# 搭建基于 Azure-OpenAI 的自用 ChatGPT

国内访问 OpenAI 总是存在诸多阻碍，充值或者拼车使用也经常翻车，远不如 Azure OpenAI 稳定。Azure，也就是微软的云服务，可以用 docker 镜像生成 web app，非常方便。Azure OpenAI 也有 GPT3.5、GPT4 等模型。

### 第一步 注册 Azure 账号

[https://azure.microsoft.com/zh-cn/free/](https://azure.microsoft.com/zh-cn/free/)

### 第二步 申请 Azure OpenAI

[https://zhuanlan.zhihu.com/p/614242045](https://zhuanlan.zhihu.com/p/614242045)

注意，Azure OpenAI 申请通过后就可以用 GPT3.5 Turbo、GPT3.5 16K 等模型了。而 GPT4 则需要单独申请，一般 3-5 天就能通过。

### 第三步 创建 Web 应用

首先，在应用程序服务中创建一个 Web 应用。

![287450800-9749c016-b7b5-468d-9499-63800ceea3b8.png](https://cdn.pkmer.cn/images/202312022253758.png!pkmer)

然后，在创建 Web 应用界面选择订阅和资源组。通常新注册的账号只有一个订阅，资源组则需要新建一个。Web 应用名称即未来使用的网址，具有唯一性。比如，应用名称为 xxx，网址即为 xxx.azurewebsites.net。发布选 Docker 容器，操作系统选 Linux，区域可以选 East Asia。定价计划选免费 F1 就可以，足够用。如果是新注册的账号，微软会赠送 100 美元，可以选一个贵一点的，因为赠送的 100 美元一个月后就过期了。

![287450822-34108ee7-fd08-4c09-996f-ab861c710afd.png](https://cdn.pkmer.cn/images/202312022253335.png!pkmer)

在最上面一排的菜单里选 Docker ，_ 映像源 _ 选 Docker Hub，映像和标记为：yidadaa/chatgpt-next-web。

### 第四步 配置 Web 应用

Web 应用创建好之后，我们需要设置一些环境变量。先在主页选择刚建好的 Web 应用。在左侧菜单中选择配置。在配置中添加几个新应用程序设置。

|名称|值|备注|
|:-:|:-:|:-:|
|PORT|433||
|OPENAI_API_KEY|sk-xxx|如果用 OpenAI 的 Key，可以在这里输入|
|CODE|登录密码|可以设置多个密码，如 password1,password2|
|AZURE_API_KEY|Azure OpenAI 的秘钥|在已创建的 Azure OpenAI 中查看|
|AZURE_API_VERSION|API 版本|在已创建的 Azure OpenAI 中查看|
|AZURE_URL|[https://xxx.openai.azure.com/openai/deployments/name](https://xxx.openai.azure.com/openai/deployments/name)|xxx 为终结点，name 为 Azure OpenAI 中的部署名|

`AZURE_API_KEY`、`AZURE_API_VERSION`、`AZURE_URL` 这几个参数的位置比较难找，而且需要自己组合。可以参考以下的截图。

![287450844-db85b00b-f928-4d4e-b53f-faa396aa8d26.png](https://cdn.pkmer.cn/images/202312022255163.png!pkmer)

秘钥和终结点。

![287450868-04286179-a268-4a58-8b78-6c473eea9aa7.png](https://cdn.pkmer.cn/images/202312022255979.png!pkmer)

JSON 视图中可以找到 API 版本。

![287450882-5b029290-51fb-4c26-a821-765eec73c126.png](https://cdn.pkmer.cn/images/202312022256884.png!pkmer)

转到 Azure OpenAI Studio 可以查看模型和部署模型。模型部署后可以在部署菜单里找到部署名。

### 第五步 使用

属于你自己的 ChatGPT 已经搭建好了，通过 xxx.azurewebsites.net 即可访问。由于是 Web 应用，手机、电脑都可以用哦。

![287450921-6e4b62dd-24d0-465b-9028-7909d029cd66.png](https://cdn.pkmer.cn/images/202312022256035.png!pkmer)

Web 应用运行界面。

### 附录

1. [Azure OpenAI 服务定价](https://azure.microsoft.com/zh-cn/pricing/details/cognitive-services/openai-service/)
2. [ChatGPT Web App搭建](https://edi.wang/post/2023/5/18/deploy-chatgpt-next-web-to-azure-app-service-with-individual-account-login-in-3-minutes)