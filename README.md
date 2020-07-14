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