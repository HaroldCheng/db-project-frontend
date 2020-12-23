<template>
<div>
    <div class="navi">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item>消费情况</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="moneySats">
      <el-card>
        <div id="main" style="width: 600px;height:400px;"></div>
      </el-card>
    </div>
</div>

</template>

<script>
let echarts = require('echarts')  //使用import无用，why?
export default {
  data(){
    return{
      platId:1,
      userId:0,
      moneyInfo:[
        {name:'杨国富麻辣烫', value:100},
        {name: '羊羊羊不麻不辣不烫', value:50},
        {name: '洋洋嘛', value:50}
      ]
    }
  },
 async mounted() {
    const myChart = echarts.init(document.getElementById('main'))
    const {data:res} = await this.$axios.post("client/money_info/",[this.platId,this.userId])
    if(res.status !== 200) {
      return this.$message.error("获取消费信息失败！")
    }
    this.$message.success("获取消费信息成功！")
    this.moneyInfo = res.data.money_info
    const option = {
      series: {
        type: 'pie',
        data: this.moneyInfo
      }
    }
    myChart.setOption(option)
  },
  methods:{
  goBack() {
    this.$router.push('/userHome')
  }
}
}
</script>

<style lang="less" scoped>
.moneySats{
      margin-left: 40px;
  margin-top: 40px;
  width: 80%;
}
</style>