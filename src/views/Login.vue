<template>
  <div id="frame">
    <el-form ref="accountForm" :model="accountForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item :label="$t('m.username')" prop="username">
        <el-input v-model="accountForm.username" placeholder="用户名或邮箱地址" />
      </el-form-item>
      <el-form-item :label="$t('m.password')" prop="password">
        <el-input v-model="accountForm.password" type="password" placeholder="密码" show-password />
      </el-form-item>
      <el-form-item>
        <el-button @click="login">登陆</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      accountForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {

    },
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
#frame{
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}
</style>
