<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item>商铺列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="shopTable">
      <el-card>
        <el-row :gutter="20">
          <el-col :span="20"
            ><div>
              <p>
                <el-table>
                  <el-table-column label="店铺编号"></el-table-column>
                  <el-table-column label="店铺名称"></el-table-column>
                  <el-table-column label="店铺销量"></el-table-column>
                </el-table>
              </p>
              <el-button type="primary" @click="goDish">查看详情</el-button>
              <el-button type="success" plain @click="regVIP">注册该商家会员</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20"
            ><div>
              <p>
                <el-table>
                  <el-table-column label="店铺编号"></el-table-column>
                  <el-table-column label="店铺名称"></el-table-column>
                  <el-table-column label="店铺销量"></el-table-column>
                </el-table>
              </p>
              <el-button type="primary"  @click="goDish">查看详情</el-button>
              <el-button type="success" plain @click="regVIP">注册该商家会员</el-button>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goDish() {
      this.$router.push("/dish")
    },
    regVIP() {
      this.$message("注册成功！")
    }
  }
};
</script>

<style lang="less" scoped>
.shopTable {
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
}
</style>