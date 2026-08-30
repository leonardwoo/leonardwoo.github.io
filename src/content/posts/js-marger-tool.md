---
title: 一个JS合并打包工具
date: 2026-08-30
summary: 记录我 VibeCoding 的过程
tags: [前端]
---

这个玩意起因是我有一个JS工具包叫 [pika-js](https://srl.cx/fZlMml7f) 用来处理DOM和文本的小工具。
在此之前我一直都是写在一个Class里用 Terser 压缩发布的。
但是添加的功能越来越多之后，每次在一个大文件里找对应的函数并修复或者添加新函数的时候就越来越难受了。
然后我去问了 Gemini 它给我的方法要不ESM那种，要不就没法像之前那样容易使用的。
我决定做个新的打包工具给 pika-js 用。

新工具叫 [func-marger](https://srl.cx/fDnSIEq3) ，可以把一个文件夹中的一堆JS文件中的函数打包成一个类中的静态函数。
使用文档可以[查看这个](https://github.com/leonardwoo/func-marger)。

这个玩意是靠 ChatGPT 和 Gemini 搓出来的，即将发布的 0.2.0 除了打包还包含压缩、混淆和sourcemap
（主要是不想一天发俩版本）。

我不知道 Gemini 有什么执念，非得塞给我一个 `window.ClassName` 给我，说是跨环境和浏览器全局赋值。
但是copyright注释那个就不太对，被我删掉了，可能过两个版本会增加吧。
