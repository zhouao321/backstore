import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//懒加载
const login =()=>import('../pages/login/login') 
const index =()=>import('../pages/index/index')
const home =()=>import('../pages/home/home')
const menu =()=>import('../pages/menu/menu')
const role =()=>import('../pages/role/role')
const manger =()=>import('../pages/manger/manger')
const classify =()=>import('../pages/classify/classify')
const spec =()=>import('../pages/spec/spec')
const goods =()=>import('../pages/goods/goods')
const vip =()=>import('../pages/vip/vip')
const banner =()=>import('../pages/banner/banner')
const seckil =()=>import('../pages/seckil/seckil')

export const indexRouters=[
  {
    path:'menu',
    component:menu,
    name:'菜单管理'
  },
  { 
    path:'role',
    component:role,
    name:'角色管理'
  },
  {
    path:'manger',
    component:manger,
    name:'管理员管理'
  },
  {
    path:'classify',
    component:classify,
    name:'商城分类'
  },
  {
    path:'spec',
    component:spec,
    name:'商品分类'
  },
  {
    path:'goods',
    component:goods,
    name:'商品管理'
  },
  {
    path:'vip',
    component:vip,
    name:'会员管理'
  },
  {
    path:'banner',
    component:banner,
    name:'轮播图管理'
  },
  {
    path:'seckil',
    component:seckil,
    name:'秒杀活动'
  },
]
export default new Router({
  routes: [
    {
      path:'/',
      component:login
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'',
          redirect:'home'
        },
        {
          path:'home',
          component:home
        },
          ...indexRouters
      ]
    }
  ]
})
