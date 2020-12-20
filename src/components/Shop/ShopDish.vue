<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/shopHome' }">店铺主页</el-breadcrumb-item>
                <el-breadcrumb-item>店铺菜品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="shopTable">
            <el-card>
                <el-row :gutter="20">
                    <el-col :span="20">
                        <div>
                            <p>
                                <el-table>
                                    <el-table-column label="菜品编号"></el-table-column>
                                    <el-table-column label="菜品名称"></el-table-column>
                                    <el-table-column label="菜品价格"></el-table-column>
                                </el-table>
                            </p>
                            <el-button type="primary" @click="goDish">添加菜品</el-button>

                            <el-button type="primary" @click="goDish">删除菜品</el-button>
                        </div>
                    </el-col>
                </el-row>

            </el-card>
        </div>
    </div>
</template>

<script>
export default {
        methods: {
            goBack() {
                this.$router.push('/shopHome')
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