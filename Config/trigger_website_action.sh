#!/bin/bash
###
 # @Author: cumany cuman@qq.com
 # @Date: 2023-07-08 22:24:56
 # @LastEditors: cumany cuman@qq.com
 # @LastEditTime: 2023-07-08 23:22:58
 # @Description: 
### 

# 定义要触发的仓库信息
REPO_OWNER=PKM-er
REPO_NAME=Pkmer-Website

# 定义要触发的自定义事件类型
EVENT_TYPE=docs-updated
# 发送 Repository Dispatch 事件
curl -XPOST \
  -H "Authorization: token $ACCESS_TOKEN" \
  -H "Accept: application/vnd.github.everest-preview+json" \
  -H "Content-Type: application/json" \
  -d "{\"event_type\": \"$EVENT_TYPE\"}" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/dispatches"

