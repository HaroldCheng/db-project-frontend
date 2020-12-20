<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/shopHome' }">店铺主页</el-breadcrumb-item>
                <el-breadcrumb-item>店铺基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
                <el-table>
                    <el-table-column label="店铺编号" width="150px"> </el-table-column>
                    <el-table-column label="店铺名称" width="150px"> </el-table-column>
                    <el-table-column label="店铺电话" width="150px"> </el-table-column>
                    <el-table-column label="店铺地址" width="150px"> </el-table-column>
                    <el-table-column label="菜品数量" width="150px"> </el-table-column>
                </el-table>
                <el-button type="primary" class="button">编辑信息</el-button>
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
  }
};
</script>

<style lang="less" scoped>
    .myInfo {
        margin-top: 40px;
        margin-left: 80px;
    }
    .button {
        margin-top: 40px;
    }

    .infoTable {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>