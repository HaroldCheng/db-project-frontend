<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/order' }"
          >商铺列表</el-breadcrumb-item
        >
        <el-breadcrumb-item>商家菜品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dishTable">
      <el-card>
        <el-row :gutter="20">
          <el-col :span="12">
              <p>
            <el-table>
              <el-table-column label="菜品名称"></el-table-column>
              <el-table-column label="菜品单价"></el-table-column>
            </el-table>
              </p>
            <el-button type="primary" plain @click="add2order">加入订单</el-button>
          </el-col>
          <el-col :span="12">
              <p>
            <el-table>
              <el-table-column label="菜品名称"></el-table-column>
              <el-table-column label="菜品单价"></el-table-column>
            </el-table>
              </p>
            <el-button type="primary" plain @click="add2order">加入订单</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      btnMsg1:"加入订单",
      btnMsg2:"已加入订单"
    }
  },
  methods:{
  }
};
</script>

<style lang="less" scoped>
.dishTable {
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
}
</style>