<template>
  <div>
    <div class="navi">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item>用户基本信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="infoTable">
      <el-card>
      <el-table>
        <el-table-column label="用户编号" width="150px"> </el-table-column>
        <el-table-column label="用户姓名" width="150px"> </el-table-column>
        <el-table-column label="用户电话" width="150px"> </el-table-column>
        <el-table-column label="用户性别" width="150px"> </el-table-column>
        <el-table-column label="用户地址" width="150px"> </el-table-column>
      </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "vthsll",
    };
  },
  created() {
    this.getUserInfo()
    console.log("debug")
  },
  methods:{
   getUserInfo() {
     const res = this.$axios.get('http://localhost:8080/#/userInfo')//请求地址和参数
     console.log(res)
   }
  }
};
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