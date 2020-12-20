<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/platHome' }">平台管理者主页</el-breadcrumb-item>
                <el-breadcrumb-item>平台基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
                <el-table>
                    <el-table-column label="平台编号" width="150px"> </el-table-column>
                    <el-table-column label="平台名称" width="150px"> </el-table-column>
                    <el-table-column label="商家数量" width="150px"> </el-table-column>
                    <el-table-column label="骑手数量" width="150px"> </el-table-column>
                    <el-table-column label="用户数量" width="150px"> </el-table-column>
                    <el-table-column label="平台收入" width="150px"> </el-table-column>
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
      riderName: "vthsll",
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