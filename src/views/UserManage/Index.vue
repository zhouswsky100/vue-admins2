<template>
  <div class="user-list">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="dialogStatus='create',editUser()">添加</el-button>
      <div style="float: right">
        <el-input
            placeholder="请输入用户昵称！"
            size="small"
            style="width: 140px"
            v-model="params.name"
            @clear="searchUser"
            clearable>
        </el-input>
        <el-button @click="searchUser" type="success" icon="el-icon-search" size="small"></el-button>
      </div>
    </ToolBar>
    <el-table
        :data="usersData"
        border
        ref="table"
        style="width: 100%">
      <el-table-column
          prop="username"
          label="账号名称">
      </el-table-column>
      <el-table-column
          prop="role.name"
          label="用户角色">
      </el-table-column>
         <el-table-column
          prop="role.id"
          label="角色代码">
      </el-table-column>
      <el-table-column
          prop="mobile"
          label="手机">
      </el-table-column>
      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>
      <el-table-column
          label="操作"
          :render-header="tableAction"
          width="180">
        <template slot-scope="scope">
            <el-button @click="resetting(scope.row.id)" type="warning" style="transition: .4s;"  :ref="scope.row.id"  icon="el-icon-refresh" size="small" circle></el-button>
            <el-button @click="dialogStatus='edit', editUser(scope.row)" type="primary" icon="el-icon-edit" size="small" circle></el-button>
            <el-button @click="deleteUser(scope.row.id)"  type="danger" icon="el-icon-delete" circle size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="txtMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="userForm" :rules="rules" :model="userAdd" label-position="left" label-width="150px" style="width: 400px; margin-left:50px;">
        <el-form-item label="账号" prop="username">
          <el-input v-model="userAdd.username" />
        </el-form-item> 
         <el-form-item label="密码"  v-show="dialogStatus=='create'" prop="password">
          <el-input type="password" v-model="userAdd.password" />
        </el-form-item>
         <el-form-item label="确认密码" v-show="dialogStatus=='create'" prop="password1">
          <el-input type="password" v-model="userAdd.password1" />
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="userAdd.mobile" />
        </el-form-item>
         <el-form-item label="邮箱" prop="email">
          <el-input v-model="userAdd.email" />
        </el-form-item>
         <el-form-item label="角色" prop="role_id">
            <el-select v-model="userAdd.role_id" placeholder="请选择">
              <el-option
                v-for="item in roleList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确认
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ToolBar from '~/components/ToolBar/ToolBar.vue';
  import HelpHint from '~/components/HelpHint/HelpHint.vue';

  export default {
    data() {
      var password = (rule, value, callback) => {
        let  self = this;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(value.length<6){
             callback(new Error('密码至少6位数'));
          }
          if (self.userAdd.password !== '') {
              this.$refs.userForm.validateField('password1');
          }
          callback();
        }
      };
      var password1 = (rule, value, callback) => {
        let  self = this;
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== self.userAdd.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        params: {
          name: '',
        },
        usersData:[],
        userAdd: {
          username: '',
          password: '',
          password1: '',
          mobile: '',
          email: '',
          role_id: '',
        },
        roleList:[],
        dialogStatus: 'create',
        dialogFormVisible:false,
        txtMap:{
          create:"新增",
          edit:'编辑'
        },
        rules: {
          username:  [{ required: true, message: '用户名必须输入', trigger: 'blur' }],
          password: [{ required: true, validator: password, trigger: 'blur'}],
          password1 : [{ required: true,validator: password1, trigger: 'blur' }],
          mobile :[{ required: true, message: '手机号必须输入', trigger: 'blur' }],
          email:[{  type: 'email', message: '邮件不正确', trigger: 'blur' }],
        },
      }
    },
    components: {
      ToolBar,HelpHint
    },
    methods: {
      searchUser(){
      },
      createData(){
        this.$refs.userForm.validate(valid => {
          if (valid) {
            this.getHttpPost(this.userAdd,'userAdd',true,'post').then(res => {
              this.loginLoading = false;
              if(res.code==0){
                  this.$message({
                    message: '添加成功',
                    type: 'success'
                  });
                }
              },error=>{
                this.$message.error('网络开小差了');
          })
          } 
        })
      },
      updateData(){
         let param ={
            role_id:this.userAdd.role.id,
            mobile :this.userAdd.mobile,
            email:this.userAdd.email,
            username :this.userAdd.username,
         }
          this.getHttpPost(param,'userChange',true,'put').then(res => {
              this.loginLoading = false;
              if(res.code==0){
                  this.$message({
                    message: '更新成功',
                    type: 'success'
                  });
                }
              },error=>{
                this.$message.error('网络开小差了');
          })
      },
      tableAction(){
        return this.$createElement('HelpHint',{
            props:{
              content:'重置密码为888888/ 编辑用户 / 删除用户'
            }
          },'操作');
      },
      editUser(data) {
        if(this.dialogStatus!= 'create'){
           this.userAdd = data
           sessionStorage.id = this.userAdd.id
        }
           this .dialogFormVisible = true
      },
      deleteUser(id) {
          sessionStorage.id =id
          this.getHttpPost({},'userSwitch',true,'put').then(res => {
              this.loginLoading = false;
              if(res.code==0){
                  this.$message({
                    message: '状态修改成功',
                    type: 'success'
                  });
                }
              },error=>{
                this.$message.error('网络开小差了');
          })
      },
      resetting(id) {
          sessionStorage.id =id
          this.getHttpPost({},'userResetPwd',true,'put').then(res => {
              this.loginLoading = false;
              if(res.code==0){
                  this.$message({
                    message: '重置成功',
                    type: 'success'
                  });
                }
              },error=>{
                this.$message.error('网络开小差了');
          })
      },
      initRoList(){
          this.getHttpPost({},'roleSelect',true,'get').then(res => {
              this.loginLoading = false;
              if(res.code==0){
                   this.roleList = res.data
                }
              },error=>{
                this.$message.error('网络开小差了');
          })
          this.getHttpPost({},'userList',true,'get').then(res => {
              this.loginLoading = false;
              if(res.code==0){
                   this.usersData = res.data
                }
              },error=>{
                this.$message.error('网络开小差了');
          })
      }
    },
    mounted() {
      this.initRoList()
    },
  }
</script>
<style lang="less">

</style>
