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
                <el-table>
                    <el-table-column label="用户编号" width="150px"> </el-table-column>
                    <el-table-column label="用户姓名" width="150px"> </el-table-column>
                    <el-table-column label="用户电话" width="150px"> </el-table-column>
                    <el-table-column label="用户性别" width="150px"> </el-table-column>
                    <el-table-column label="用户地址" width="150px"> </el-table-column>
                    <el-table-column label="用户本季度消费" width="150px"> </el-table-column>
                </el-table>
                <el-button type="primary" class="button">拉黑用户</el-button>
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