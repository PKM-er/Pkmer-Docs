---
uid: 20230508235538
title: Syncthing
description: 
author: windilycloud
type: other
draft: false
editable: false
modified: 20230509000844
---

# Syncthing

## 云端搭建

- 官方参考资料：[syncthing/README-Docker.md](https://github.com/syncthing/syncthing/blob/main/README-Docker.md)

==运行 docker 命令==

```bash
docker run -d -p 8384:8384 -p 22000:22000/tcp -p 22000:22000/udp -p 21027:21027/udp \
    -v /wherever/st-sync:/var/syncthing \
    --hostname=my-syncthing \
    syncthing/syncthing:latest
```

其中 `-d` 参数是后台运行 docker， 8384 是 UI 界面端口，22000 和 21027 是上传下载端口， hostname 是主机名称，可随意更改。

确保服务器打开三个端口后，访问 `<服务器地址>:8384` 便可打开 UI 界面。点击右上角操作按钮，获得设备 ID，添加到其他设备，则会在远程设备中显示已有设备。点击添加文件夹，便可创建一个同步文件夹，展开这个文件夹，便可有选项进行配置。如下图所示：

![Pasted image 20230508235815](https://cdn.pkmer.cn/images/Pasted%20image%2020230508235815.png)