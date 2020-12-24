<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/platHome' }">平台管理者主页</el-breadcrumb-item>
                <el-breadcrumb-item>平台用户基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
                <el-table :data="userList">
                    <el-table-column label="用户编号" prop="id" width="150px"> </el-table-column>
                    <el-table-column label="用户姓名" prop="name" width="150px"> </el-table-column>
                    <el-table-column label="用户电话" prop="tel" width="150px"> </el-table-column>
                    <el-table-column label="用户性别" prop="gender" width="150px"> </el-table-column>
                    <el-table-column label="用户地址" prop="address" width="150px"> </el-table-column>
                    <el-table-column label="用户本季度消费" prop="custom" width="150px"> </el-table-column>
                </el-table>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  props:['platId'],
  data() {
    return {
      userList:[
        {
          id:1,
          name:'',
          tel:'',
          gender:'',
          address:'',
          custom:12
        }
      ]
    }
  },
  created() {
    this.getUserList()
  },
  methods:{
    async getUserList(){
      const {data:res} = await this.$axios.post('plat/user_list/',[this.platId])
      if(res.status !== 200) return this.$message.error("获取用户列表失败！")
      this.$message.success("获取用户列表成功！")
        console.log(res.data.user_list)
      this.userList = res.data.user_list
    }
  }
}
</script>

<style lang="less" scoped>
    .myInfo {
        margin-top: 40px;
        margin-left: 80px;
    }
    .infoTable {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>