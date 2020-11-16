<template>
 <div>
   <el-button type="primary" @click="willAdd">添加</el-button>
   <v-list @edit='edit($event)'></v-list>
   <v-add :info='info' ref="one"></v-add>
 </div>
</template>

<script>
import vList from './components/list'
import vAdd from './components/add'
export default {
 components:{
   vList,
   vAdd
 },
 data() {
 return {
   info:{
     isShow:false, 
     isAdd:true //显示的是添加按钮
   }
 };
 },
 computed:{
 },
 watch:{
 },
 methods: {
   //点击添加出弹框 
   willAdd(){
     this.info.isShow = !this.info.isShow
     this.info.isAdd = true
   },
   //编辑
   edit(e){//此时获取的是数据的每一条数据的id
     this.info.isShow = true
     this.info.isAdd = false
     this.$refs.one.look(e)
   }
 },
};
</script>

<style lang='' scoped>

</style>
