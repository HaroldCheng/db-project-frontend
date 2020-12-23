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

**店铺列表**

请求地址：shop_list

店铺信息格式：

```js
res:{
    data:{
        shop_list:[ //对象数组
            {
                id:1,
                name:"shop1",
                sale_number:100
            },
            {
                id:2,
                name:"shop2",
                sale_number:10000
            }
        ],
            shop_total:10000 //店铺总量
    },
      meta:{ //状态信息
            msg:"信息传递成功",
                status:200 //500表示失败
        }
}
```

**用户VIP注册**

请求地址：vip_list

请求参数：vipID

响应信息格式：

```js
res{
data:xxx,//这里不需要响应数据，返回响应信息就可以
meta:{
msg:"注册成功！",
status:200
}
}
```

---

date: 12-23

**历史消费信息统计表**

请求地址：`client/money_info/`

请求参数：`[plat_id,user_id]` 第一个是平台id，第二个是用户id

响应信息格式：

```js
res{
    data:{
        money_info:[
            {
                name:'杨国富麻辣烫',
                value:10000
            },
            {
                name:'羊羊羊不麻不辣不烫',
                value:2000
            }
        ]
    }，
   status:200
}
```

data中的money_info是一个对象数组，每个对象表示一个商家的名称和消费量，注意`name`和`value`的名称不能改，否则统计图插件无法识别

