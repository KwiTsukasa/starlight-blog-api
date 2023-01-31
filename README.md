## 技术总览

`Node`、`Ts`、`Nest.js`、`TypeORM`、`MySQL`、`Express`

## 项目简介

此项目为`starlight-blog`服务端,基于`Node`、`Ts`开发

使用服务端框架`Nest.js`构建项目以及`ORM`框架`TypeORM`快速生成`SQL`语句以及映射`SQL`库表字段关系

使用`@nestjs/passport`以及`@nestjs/jwt`实现全局路由token认证拦截

使用插件`svg-captcha`快速生成验证码图片

## 插件

- `svg-captcha` 验证码图片生成

- `@nestjs/passport` 基于`nest`的前置路由认证守卫

- `@nestjs/jwt` 基于`nest`的`jwt`认证策略

## 运行项目

```bash
# 运行
$ npm run start

# 开发环境
$ npm run start:dev

# 生产环境
$ npm run start:prod
```

## 测试

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
