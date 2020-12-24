<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/platHome' }">平台管理者主页</el-breadcrumb-item>
                <el-breadcrumb-item>平台收益情况</el-breadcrumb-item>
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
let echarts = require('echarts')
export default {
  props:['platId'],
  data(){
    return{
      incomeDate:[

      ],
      incomeValue:[

      ]
    }
  },
methods:{
  goBack() {
    this.$router.push('/platHome')
  }
},
  async mounted() {
    const myChart = echarts.init(document.getElementById('main'))
    const {data:res} = await this.$axios.post('plat/income/',[this.platId])
    if(res.status !== 200) return this.$message.error("获取收入信息失败!")
    this.$message.success("获取收入信息成功!")
    this.incomeDate = res.data.income_date
    this.incomeValue = res.data.income_value
    const option={
      title:{
        text:'平台营收统计图'
      },
      xAxis:{
        data:this.incomeDate
      },
      yAxis:{},
      series:{
        name:'营收',
        type:'line',
        data:this.incomeValue
      },
      tooltip:{
        trigger:'axis',
        triggerOn:'mousemove'
      }
    }
    myChart.setOption(option)
  }
}
</script>

<style lang="less" scoped>
    .moneySats {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>