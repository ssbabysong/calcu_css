# calcu_css

封装的一个npm包，实现简单的计算模块
## npm 发布模块

1. 写package.json
2. $npm pack
## 发布的话：
1. npm adduser
2. npm publish
如果你以后修改了代码，然后想要同步到 npm 上的话请修改 package.json 中的 version 然后再次 publish

## 使用 cnpm 的注意报错：
```
no_perms Private mode enable, only admin can publish this module
```
## 设置回原本的就可以了
```
npm config set registry http://registry.npmjs.org
```
