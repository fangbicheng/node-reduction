# 扣费系统后端

## 背景
一个扣费管理系统，实现扣费服务的开通、关闭及查询等接口

## 代码目录
```bash
+-- bin/                                    
+-- model/                                  
|   --- reduction.js                        ---扣费model
+-- public/                                 ---公共文件
+-- routers/                                ---路由文件
|   --- reduction.js                        ---扣费路由
+-- .views                                  ---界面文件
--- .app.js                                 ---入口文件
--- package.json
--- pm2.js                                  ---PM2配置文件
```

## 技术栈
```bash
语言：ES6
框架：Express
数据库：MongoDB
服务管理: PM2
```

## 总体架构
![](https://github.com/fangbicheng/node-reduction/blob/master/screenshots/architecture.png)

## 接口列表
### 1、开通服务

#### 请求URL:  
```
https://localhost:3000/api/reduction/open/:id
```

#### 示例：
 [https://localhost:3000/api/reduction/open/1](https://localhost:3000/api/reduction/open/1)

#### 参数类型：query

|方式|参数|是否必选|类型|
|:-----|:-----|:----:|:-----|
|POST   |  id  |   Y   | number |

### 2、关闭服务

#### 请求URL:  
```
https://localhost:3000/api/reduction/close/:id
```

#### 示例：
 [https://localhost:3000/api/reduction/close/1](https://localhost:3000/api/reduction/close/1)

#### 参数类型：query

|方式|参数|是否必选|类型|
|:-----|:-----|:----:|:-----|
|POST   |  id  |   Y   | number |

### 3、服务列表

#### 请求URL:  
```
https://localhost:3000/api/reduction/all
```

#### 示例：
 [https://localhost:3000/api/reduction/all](https://localhost:3000/api/reduction/all)

#### 参数类型：query

|方式|
|:-----|
|GET   |

### 4、服务详情

#### 请求URL:  
```
https://localhost:3000/api/reduction/detail/:id
```

#### 示例：
 [https://localhost:3000/api/reduction/detail/1](https://localhost:3000/api/reduction/detail/1)

#### 参数类型：query

|方式|参数|是否必选|类型|
|:-----|:-----|:----:|:-----|
|GET   |  id  |   Y   | number |


## 开发与运行
``` bash
# 普通方式启动
npm run start 

# 在PM2中启动服务
npm run build 

# 在PM2中停止服务
npm run stop 

# 在PM2中重启服务
npm run restart
```

## TODO
``` bash
1.XSS防御（Done）
2.CSRF防御（Done）
3.SSL安全加密
4.api参数校验
5.SQL注入防御
6.密码等隐私数据加密：crypto
7.登录鉴权
8.日志管理工具：log4js
9.异常错误处理，数据埋点上报
10.代码压缩：compression
11.代码规范检查ESLint
12.单元测试
13.开发环境代码变更自动重启（Done）
14.分离Model和Router，单独处理数据库操作（Done）
```