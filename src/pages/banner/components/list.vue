<template>
 <div>
     <el-table
    :data="list"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="轮播图标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="img"
      label="图片">
      <template slot-scope="scope">
            <img :src='$preImg+scope.row.img' alt="">
        </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
      <template slot-scope="scope">
          <div>
               <el-switch
            v-model="scope.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2">
            </el-switch>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
          <div>
              <el-button type='primary' @click="update(scope.row.id)">修改</el-button>
              <el-button type='danger' @click="del(scope.row.id)">删除</el-button>
          </div>
      </template>
    </el-table-column>
  </el-table>
 </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {reqBannerDel} from '../../../util/request'
import {confirm, cancel} from '../../../util/alert'
export default {
 data() {
 return {
     
 };
 },
 computed:{
     ...mapGetters({
          list: 'banner/getBannerList'
      }),
     
 },
 watch:{
 },
 methods: {
     ...mapActions({
         bannerList: 'banner/bannerList'
     }),
      // 删除
      del(id) {
        // console.log(id);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 删除操作
          reqBannerDel({id:id}).then(res => {
            this.bannerList();
            confirm(res.data.msg);
          })
         
        })
      },
      // 更新
      update(id) {
          this.$emit('edit', id)
      }
 },
 mounted() {
     this.bannerList();
 }
};
</script>

<style lang='' scoped>
img {
  width: 100px;
}
</style>