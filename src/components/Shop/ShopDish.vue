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
        <el-table :data="dishList">
          <el-table-column label="菜品编号" prop="id" width="200px"></el-table-column>
          <el-table-column label="菜品名称" prop="name" width="200px"></el-table-column>
          <el-table-column label="菜品单价" prop="price" width="200px"></el-table-column>
          <el-table-column label="菜品销量" prop="saleNumber" width="200px"></el-table-column>
          <el-table-column label="操作" width="200px">
            <template slot-scope="scope">
              <el-button type="primary" round size="small" @click="deleteDish(scope.row.id)">删除菜品</el-button>
            </template>
          </el-table-column>
        </el-table>
        <p>
          <el-button type="primary" round size="small" @click="createDish">增加菜品</el-button>
        </p>
      </el-card>
    </div>
    <el-dialog title="增加菜品"
               :visible.sync="addDiaVisible"
                width="50%"
                @close="addDishClosed">
      <p>请输入你想增加的菜品信息</p>
      <el-form ref="addDishFormRef" label-width="90px">
        <el-form-item label="菜品名称">
          <el-input v-model="addDishInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="菜品单价">
          <el-input v-model="addDishInfo.price"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" round @click="addCheck">确定</el-button>
        <el-button type="info" round @click="addCancel">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props:['shopId'],
  data() {
    return {
      dishList: [
        {
          id: 1,
          name: '',
          price: 12,
          saleNumber: 12
        }
      ],
      addDiaVisible:false,
      addDishInfo:{
        shopId:1,
        name:'',
        price:12
      }
    }
  },
  created() {
    this.getDishList()
  },
  methods: {
    async getDishList() {
      const {data: res} = await this.$axios.post('shop/dish_list/', [this.shopId])
      if (res.status !== 200) return this.$message.error("获取菜品列表失败！")
      this.$message.success("获取菜品列表成功！")
      this.dishList = res.data.dish_list
    },
    createDish() {
      this.addDiaVisible = true
    },
    async addCheck() {
      this.addDishInfo.shopId = this.shopId
      const {data:res} = await this.$axios.post('shop/add_dish/',this.addDishInfo)
      if(res.status !== 200) return this.$message.error("添加菜品失败！")
      this.$message.success("添加成功")
      this.dishList = res.data.dish_list
    },
    addCancel() {
      this.addDiaVisible = false
    },
    addDishClosed() {
      this.$refs.addDishFormRef.resetFields()
    },
    deleteDish:async function(id) {
      const {data:res} = await this.$axios.post('shop/delete_dish/',[id, this.shopId])
      if(res.status !== 200) return this.$message.error("删除失败")
      this.$message.success("删除成功")
      this.dishList = res.data.dish_list
    },
    goBack() {
      this.$router.push('/shopHome')
    }
  }
}
</script>

<style lang="less" scoped>
.shopTable {
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
}
</style>