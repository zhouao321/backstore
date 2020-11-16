<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="width">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="width">
          <el-tree
            :data="list"
            show-checkbox
            node-key="id"
            ref="tree"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="{ children: 'children', label: 'title' }"
          >
          </el-tree> 
        </el-form-item>
        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添加</el-button>
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {reqRoleAdd,reqRoleOne,reqRoleEdit} from "../../../util/request";
import {mapGetters,mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            list:'menu/list'
        })
    },
  props: ["info"],
  components: {},
  data() {
    return {
      width: "130px",
      form: {
        rolename: "",
        menus: [],
        status: 1,
      },
     
    };
  },
  methods: {
    // 关闭弹出
    hide() {
      this.info.isShow = false;
    },
     // 添加后清空数据
      empty() {
      this.form = {
        rolename: "",
        menus: "",
        status: 1,
      };
    },
    //添加数据到数据库
    add() {
      // 由于要的menus是字符串数组，所以需要把数据通过stringify转为字符串
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys()); 
      console.log(this.form);
      reqRoleAdd(this.form).then((res) => {
            this.reqRoleList() 
            //刷新之前先隐藏
            this.hide()
            this.empty()
      });
    }, 
    
    ...mapActions({
        reqMenuList:'menu/reqMenuList',
        reqRoleList:'role/reqRoleList'
    }),
    // 获取一条数据的方法
    look(id){
        reqRoleOne({id:id}).then(res=>{
        this.form = res.data.list
        this.form.menus =  this.$refs.tree.setCheckedKeys(JSON.parse(res.data.list.menus))
        this.form.id=id
        })
    },
    // 数据更改
    updata(form){
        this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
        reqRoleEdit(this.form).then(res=>{
            this.hide()
            this.reqRoleList()
            this.empty()
        })
    }
  },
  mounted() {
      this.reqMenuList()
  },
};
</script>
<style scoped>
</style>