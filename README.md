<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 22:05:46
 * @LastEditTime: 2019-08-12 00:20:58
 * @LastEditors: Please set LastEditors
 -->
## 项目介绍
一面而就项目是一款关于生活服务的微信小程序（为用户科学安排面试行程），基于webpack+原生api+mpvue+vuex框架

## 技术栈
- mpvue是本项目的核心框架 (由美团团队开源的一款使用 Vue.js 开发微信小程序的前端框架。支持scss、less编译，采用vue规范，熟悉vue即可上手)
- vuex(数据管理库, 响应式的原理使得数据驱动视图)
- flyio一个基于Promise的、强大的、支持多种JavaScript运行时的http请求库。
- moment(计算时间的插件)
- 引用腾讯地图可以对用户实时定位
- 本项目对微信小程序登陆流程(包括用户授权、获取用户手机号)、生物认证、模板推送等小程序原生api进行了较好的应用

## 项目运行

```
前端

git clone git@github.com:Katherinekali/The-interview-assistant.git

cd The-interview-assistant

npm install

npm start

(服务器地址是  fly.config.baseURL = 'https://sign.jasonandjay.com/'，在request文件里)
```
## 功能列表

- [x] 登录验证功能
- [x] 首页
    - [x] 添加地图
    - [x] 实时定位
- [x] 添加面试
     - [x] 列表渲染
     - [x] 添加面试
     - [x] 根据关键字搜索相关地址(腾讯地图的getLocation)
     - [x] 面试时间的选择器(moment)
      
- [x] 面试列表
    - [x] tab切换获取相应的数据接口进行渲染
    - [x] 点击详情进入
    - [x] 上拉加载更多
- [x] 面试详情
    - [x] 判断是否到达目的地进行打卡
    - [x] 改变面试的状态
    - [x] 点击电话可以拨打电话
- [x] 个人中心
    - [x] 指纹认证
    - [x] 客服中心
    


<figure >

</figure >

## 页面截图

|         首页         |          添加面试         |        面试列表          |     
| :------------------: | :----------------------: | :-------------------: | 
| ![](./imgs/home.png) | ![](./imgs/addSign.png) | ![](./imgs/list.png) |

|         面试详情         |             打卡          |        个人中心        |
| :-------------------: |  :-------------------------: |:------------------: |
| ![](./imgs/signDetail.png) |  ![](./imgs/card.png) |![](./imgs/personalCentert.png) |



## 关于您的建议

> -  正在更新维护状态，部分功能尚未完成。
> - 倘若您发现 Bug 或者有优化意见及其他宝贵意见，欢迎您提交 issue 或者联系我 qq = 1036877137 、Email = klf960421@163.com

## 未完成功能

> - 部分功能正在完善！

## End

> - 喜欢 The-interview-assistant，帮忙点个 Star 吧!
> - 作者还会不断更新， 您的支持是作者不断更新的动力!
> - Thanks!

## 作者

> Name: Katherinekali && xuyuanyuan
>
> QQ: 1036877137
>
> Email：klf960421@163.com
