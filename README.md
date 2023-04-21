# biographicalnotes

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve  nodejs版本问题，直接启动会报错 需添加以下代码：
```

"serve": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",

### 项目分析：

简历一般包括 头部，基础信息，教育经历，项目经历，工作经历，技能，自我评价 等等。。
将这些部分看成一个个的小模块进行组装，形成一份完整的简历

遇到的问题：
1.sass 通过 变量 设置颜色 并转存（color: var(--font-color)；）
