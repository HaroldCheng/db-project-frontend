<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/riderHome' }">骑手主页</el-breadcrumb-item>
                <el-breadcrumb-item>本月业绩</el-breadcrumb-item>
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
      data(){
        return{
          riderId:3,
          perfInfo:[
            {
              name:'',
              value:12
            },
            {
              name:'',
              value:124
            }
          ]
        }
      },
        methods: {
            goBack() {
                this.$router.push('/riderHome')
            }
        },
      async mounted() {
        const myChart = echarts.init(document.getElementById('main'))
        const {data:res} = await this.$axios.post('rider/perf_info/',[this.riderId])
        if(res.status !== 200) return this.$message.error("获取业绩信息失败!")
        this.$message.success("获取消费信息成功!")
        this.perfInfo = res.data.perf_info
        const option = {
          title:{
            text:'各平台营收情况'
          },
          series:{
            type:'bar',
            data:this.perfInfo
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