## 前端接口

前端接收的数据类型

```js
res:{
    data:{ //里面可以定义一系列对象
        
    },
      meta:{ //状态信息
            msg:"",
                status:200 //500表示失败
        }
}
```



**用户登录**

请求地址：login_user

用户输入格式：
````js
      userForm: {
        name: "",
        pass: "",
      },
````

后端给前端的响应数据

```js
res{
data:xxx,//这里不需要响应数据
meta:{
msg:"登录成功",
status:200
}
}
```



**用户信息请求**

请求地址：user_info

用户信息格式：

```js
res:{
    data:{ //里面可以定义一系列对象
   userInfo:{ //user's info object
        id:'',
        name:'',
        tel:'',
        gender:'',
        address:''
      }
    },
      meta:{ //状态信息
            msg:"",
                status:200 //500表示失败
        }
}
```

