# wuhan-ncov-2020
## 武汉新型冠状病毒实时省市数据+新闻

## 程序基本介绍
Docker + reactjs

- [x] Backend: RESTful APIs, https://github.com/hehez/ncov
- [ ] Frontend, 开发中 https://github.com/hehez/ncov-web


## 快速上手指南
### 要求
安装 Docker

### 部署运行
修改 https://github.com/hehez/ncov-web/blob/32a937a15698b91ef0586727d9499d4c699e9db6/package.json#L6， 把`localhos`改为

如果把前端后端同时部署在MAC电脑上,
```bash
host.docker.internal
```

如果把前端后端同时部署在Linux电脑上,例如CentOS,
```bash
172.17.0.2
```

启动
```
make start
```

删除
```bash
make stop
```

### 例子
https://ncov.page/
