<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/platHome' }">平台管理者主页</el-breadcrumb-item>
                <el-breadcrumb-item>平台骑手基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
                <el-table :data="riderList">
                    <el-table-column label="骑手编号" prop="id" width="80px"> </el-table-column>
                    <el-table-column label="骑手姓名" prop="name" width="100px"> </el-table-column>
                    <el-table-column label="骑手电话" prop="tel" width="100px"> </el-table-column>
                    <el-table-column label="骑手性别" prop="gender" width="100px"> </el-table-column>
                    <el-table-column label="骑手地址" prop="address" width="100px"> </el-table-column>
                    <el-table-column label="骑手星级" prop="star" width="100px"> </el-table-column>
                    <el-table-column label="骑手该季度配送量" prop="orderNumber" width="200px"> </el-table-column>
                  <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                      <el-button type="primary" round size="small" @click="killRider(scope.row.id)">开除骑手</el-button>
                      <el-button type="primary" round size="small" @click="modifyStar(scope.row.star,scope.row.id)">修改星级</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-card>
          <el-dialog title="修改骑手星级"
                     :visible.sync="modifyDiaVisible"
                     width="50%"
                     @close="modifyStarInfoClosed">
            <p>请修改该骑手的星级</p>
            <el-form :model="modifyStarInfo" ref="modifyInfoFormRef" label-width="90px">
              <el-form-item label="新的星级">
                <el-input v-model="modifyStarInfo.star"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer">
              <el-button type="primary" round @click="modifyCheck">确定</el-button>
              <el-button typpe="info" round @click="modifyCancel">取消</el-button>
            </span>
          </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
  props:['platId'],
  data() {
    return {
      riderList:[
        {
          id:1,
          name:'',
          tel:'',
          gender:'',
          address:'',
          star:3,
          orderNumber:1232
        }
      ],
      modifyStarInfo:{
        id:1,
        star:45
      },
      modifyDiaVisible:false
    }
  },
  created() {
    this.getRiderList()
  },
  methods:{
    async getRiderList() {
      const{data:res} = await this.$axios.post('plat/rider_list/',[this.platId])
      if(res.status !== 200) return this.$message.error("获取骑手列表失败")
      this.$message.success("获取骑手列表成功")
      this.riderList = res.data.rider_list
    },
    killRider:async function(id) {
      const {data:res} = await this.$axios.post('plat/rider_kill/',[id])
      if(res.status!==200) return this.$message.error("开除骑手失败！")
      this.$message.success("开除骑手成功！")
      this.riderList = res.data.rider_list
     },
    modifyStar:function (star,id) {
      this.modifyDiaVisible = true
      this.modifyStarInfo.id = id
      this.modifyStarInfo.star = star
    },
    modifyStarInfoClosed() {
      this.$refs.modifyInfoFormRef.resetFields()
    },
    async modifyCheck(){
      const {data:res} = await this.$axios.post('plat/edit_rider_star/',this.modifyStarInfo)
      if(res.status !== 200) return this.$message.error("修改星级失败！")
      this.$message.success("修改星级成功")
      this.riderList = res.data.rider_list
      this.modifyDiaVisible = false
    },
    modifyCancel(){
      this.modifyDiaVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
    .infoTable {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>