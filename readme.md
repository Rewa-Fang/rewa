## mac本地环境搭建 

### 软件安装：

| software | version | path |  
| ----- | ----- | ----- |  
| nodejs | 10.15.0 | /usr/local/bin/node |   
| npm | 6.4.1 | /usr/local/bin/npm |    
| mysql | 8.0.13 | /usr/local/mysql/bin/mysql |   
| nginx | 1.15.8 | /usr/local/Cellar/nginx/1.15.8 |   


### nginx服务器相关配置：

```
//配置一个用来测试的端口
server{
    listen 8090;
    server_name localhost;
    location / {
        root /Users/www/test;  # 新建一个项目默认目录
        index index.html index.htm;	#设置默认页面
    }
}
//默认配置 
server {
    listen       8080;
    server_name  localhost;
    location / {
        root   /Users/www/default;  #项目默认路径
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /Users/www/default;
    }
}
```


