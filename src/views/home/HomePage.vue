<template>
  <div id="frame">
    <el-row>
      <div id="top-bar">
        <el-col :span="3">
          <el-avatar shape="circle" :size="45">
            <i class="el-icon-potato-strips" />
          </el-avatar>
        </el-col>
        <el-col :span="4">首页</el-col>
        <el-col :span="6">联系我们</el-col>
        <el-col :span="4">关于我们</el-col>
      </div>
    </el-row>
    <el-row id="title">
      <el-col :offset="18" :span="6">
        <el-row><span class="tomato-clock">Tomato Clock</span></el-row>
        <el-row><span class="tomato">番茄工作法 + 任务清单</span></el-row>
        <el-row class="row-button">
          <el-button round size="mini" @click="login">登陆</el-button>
          <el-button round size="mini" @click="register">注册</el-button>
        </el-row>
      </el-col>
    </el-row>
    <login-and-register-dialog :visible="showLoginAndRegisterDialog" :form-type="dialogFormType" @close="closeLoginAndRegisterDialog" />

  </div>
</template>

<script>
import LoginAndRegisterDialog from './components/LoginAndRegisterDialog'
export default {
  name: 'HomePage',
  components: { LoginAndRegisterDialog },
  data() {
    return {
      showLoginAndRegisterDialog: false,
      dialogFormType: 'login'
    }
  },
  methods: {
    login() {
      this.dialogFormType = 'login'
      this.showLoginAndRegisterDialog = true
    },
    closeLoginAndRegisterDialog() {
      this.showLoginAndRegisterDialog = false
    },
    register() {
      this.dialogFormType = 'register'
      this.showLoginAndRegisterDialog = true
    }
  }
}
</script>

<style scoped>
#frame{
  min-height: 1080px;
  background:-webkit-linear-gradient(left, rgb(253, 132, 86), rgb(248, 115, 104));
}
  #top-bar{
    margin-left: 20px;
    padding-top: 20px;
    line-height: 45px;
    width: 500px;
    color: white;
  }
  .el-icon-potato-strips{
    font-size: 45px;
  }
  .home-page{
    color: white;
  }
  .contact{
    color: white;
    margin-left: 35px;
  }
.about{
  color: white;
}
#title{
  margin-top: 300px;
  margin-right: 200px;
}
  .tomato-clock{
    color: white;
    font-size: xx-large;
  }
  .tomato{
    font-size: medium;
    color: white;
    margin-left: 15px;
  }
  .row-button{
    line-height: 50px;
    margin-left: 20px;
    margin-top: 10px;
  }
</style>
