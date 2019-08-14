### 把static 和预览用的mixin components 整理成一个包放在资源市场
路径：[https://market.awebide.com/package/@v2-lib/v2sual](https://market.awebide.com/package/@v2-lib/v2sual)

1.对外的项目是以node_modules的存在，不允许修改

2.对内放在project/v2sual的文件夹下，修复了bug或添加功能直接发布到资源市场，方便项目更新

  `注意`：内测为了统一路径，不使用node_modules的情况下，使`@v2-lib/v2sual` 指向`project/v2sual` 而不是node_modules，要做以下修改：

  - 要在项目的vue.config.js修改下别名，如图
  ![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-08/5d4bf28a252bb.png)

 - 在v2sual的package.json 添加，如图

![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-08/5d4bf2dff419c.png)

log:
6.0.1 添加组件动画的绑定
