# Edge 浏览器插件

Sinan Edge 插件提供了便捷的书签管理功能，用户可以通过插件快速访问和管理自己的书签,可以将书签同步至Sinan服务,也可以将Sinan书签导入至Edge,并优化搜索体验。可以通过拼音和首字母进行搜索。



## 功能特点

- 快速访问和管理书签
- 支持书签同步至Sinan服务
- 支持将Sinan书签导入至Edge
- 优化搜索体验，支持拼音和首字母搜索

## 商店安装

审核中

## 手动安装插件

1. 进入 https://github.com/PeixyJ/sinan-chrome-extension-v2
2. 找到 Releases
3. 下载最新版本的压缩包并解压
4. 打开 Edge 浏览器，输入 edge://extensions/ 进入扩展管理页面
5. 开启右上角的开发者模式
6. 点击“加载已解压的扩展程序”，选择解压后的文件夹
7. 完成安装

![alt text](<../static/CleanShot 2025-09-04 at 10.06.52@2x.png>)

## 使用说明

配置 Sinan Edge 插件

点击浏览器右上角的插件图标,配置服务器地址和 [API 密钥](/guide/account-settings.html#插件密钥),如果使用官方服务则不需要配置Url 如果使用的自建服务则需要配置Url.
![alt text](<../static/CleanShot 2025-09-04 at 10.23.29.png>)

## 自动同步

设置自动同步指的是当浏览器保存书签时，Sinan Edge 插件会自动将书签同步到 Sinan 服务，确保书签在不同设备间的一致性。同步过来的书签会变成 包含了空间和标签的拼音和简写 如下

`Vitepress-Vitepress-vitepress-前端开发-qianduankaifa-qdkf-文档-wendang-wd`

> [!info]
> 收藏时假如书签是收藏至 Sinan 目录下则不会同步至 Sinan 服务。

## 同步间隔

用户可以在设置中调整书签同步的时间间隔，默认情况下，Sinan Edge 插件会每隔 5 分钟自动同步一次书签。用户也可以手动触发同步操作。

同步逻辑为删除所有书签下Sinan目录的书签，然后重新添加。

## 删除书签目录

删除书签目录则为删除 Sinan 目录下的所有书签。

## 搜索书签

在浏览器中url输入框输入 `bm` 加空格后，插件会自动弹出书签搜索框，用户可以输入关键词进行搜索。

![alt text](<CleanShot 2025-09-04 at 10.24.10.png>)

## 启动页

Sinan插件会提供一个启动页面,该启动页面为用户收藏的书签,按使用频率进行排序。

![alt text](<CleanShot 2025-09-04 at 10.24.28.png>)