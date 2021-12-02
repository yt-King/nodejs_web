# git的使用

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

## 1.git的安装

使用库安装：

sudo apt update

sudo apt-get install git

测试：

git --version

## 2.git工作流程

![image-20211124171132252](image-20211124171132252.png)

![image-20211128161841610](image-20211128161841610.png)

## 3.git常用命令

1)git项目创建

新建一个目录，再次目录下执行：git init

2)add

![image-20211128162928517](image-20211128162928517.png)

3)commit

提交文件到本地库

提交所有在staging area 的文件到registory

```java
git commit -m [message] //message是提交时的备注
```

![image-20211128164017588](image-20211128164017588.png)

4)push

本地仓库提交到远程仓库并合并

前提：有远程仓库

![image-20211128170045936](image-20211128170045936.png)

url栏里就是远程仓库地址

![image-20211128170733972](image-20211128170733972.png)

注意事项：github页面上将master分支名称改成了“main”，但push时还是要用master，对应web页面上的main

![image-20211128171440821](image-20211128171440821.png)

push命令正确，认证失败，需要token

![image-20211128171935830](image-20211128171935830.png)

选择Personal access tokens 并创建一个token

![image-20211128172103946](image-20211128172103946.png)

新建完成

![image-20211128172444951](image-20211128172444951.png)

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：将token当成密码

![image-20211128173054431](image-20211128173054431.png)

推送成功
