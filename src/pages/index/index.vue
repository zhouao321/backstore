<template>
 <div>
 <el-container>
  <el-aside width="200px">
       <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      unique-opened
      background-color="#20222A"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/menu">菜单管理</el-menu-item>
          <el-menu-item index="/index/role">角色管理</el-menu-item>
          <el-menu-item index="/index/manger">管理员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商城管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/classify">商品分类</el-menu-item>
          <el-menu-item index="/index/spec">商品规格</el-menu-item>
          <el-menu-item index="/index/goods">商品管理</el-menu-item>
          <el-menu-item index="/index/vip">会员管理</el-menu-item>
          <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
          <el-menu-item index="/index/seckil">秒杀活动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
 
  </el-aside>
  <el-container>
    <el-header>
      <div class="topbox">
        <div class="boxleft">admin</div>
        <div class="boxleft"><el-button type='primary'>退出</el-button></div>
      </div>
    </el-header>
    <el-main> 
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="login_button">
      <router-view></router-view>
    </div>
      
    </el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
 computed:{
   ...mapGetters({
     list:'user/list'
   })
 },
 ocmponents:{

 },
 data() {
 return {
 };
 },
 computed:{
 },
 watch:{
 },
 methods: {
   ...mapActions({
     requsetUserLogin:'user/requsetUserLogin'
   })
 },
 mounted(){
   this.requsetUserLogin()
 }
};
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #20222A;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100vh;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .login_button{
    margin-top: 20px;
  }

  .topbox{
    float: right;
  }
  .boxleft{
    float: left;
  }
</style>
