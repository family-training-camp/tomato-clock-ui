<template>
  <el-dialog
    :title="dialogFormType==='login'?'用户登录':'用户注册'"
    :visible.sync="showDialog"
    top="300px"
    width="300px"
    center
    @close="close"
  >
    <el-form
      v-if="dialogFormType === 'login'"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
    >
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名或邮箱地址" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="密码" show-password />
      </el-form-item>
      <el-form-item>
        <el-row class="link">
          <el-col :span="12">
            <el-link :underline="false" @click="register">账号注册</el-link>
          </el-col>
          <el-col :span="12">
            <el-link :underline="false" style="float: right">忘记密码</el-link>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item style="text-align: center" class="form-button">
        <el-button style="width: 200px" round @click="submitLogin">登陆</el-button>
      </el-form-item>
    </el-form>

    <el-form
      v-else
      ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
    >
      <el-form-item prop="username">
        <el-input v-model="registerForm.username" placeholder="用户名或邮箱地址" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="registerForm.password" type="password" placeholder="密码" show-password />
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input v-model="registerForm.confirmPassword" type="confirmPassword" placeholder="密码" show-password />
      </el-form-item>
      <el-form-item>
        <el-row class="link">
          <el-col style="text-align: center">
            已有账号,
            <el-link :underline="false" @click="login">马上登录</el-link>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item style="text-align: center" class="form-button">
        <el-button style="width: 200px" round @click="submitRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: 'LoginAndRegisterDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    formType: {
      type: String,
      default: 'login'
    }
  },
  data() {
    return {
      dialogFormType: 'login',
      showDialog: this.visible,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      registerRules: {}
    }
  },
  watch: {
    visible(val) {
      this.showDialog = val
    },
    formType(val) {
      this.dialogFormType = val
    }
  },
  methods: {
    login() {
      this.dialogFormType = 'login'
    },
    register() {
      this.dialogFormType = 'register'
    },
    submitLogin() {
      this.$message.success('登录成功')
      this.$refs.loginForm.resetFields()
      this.close()
    },
    submitRegister() {
      this.$message.success('注册成功')
      console.log(this.$refs)
      this.$refs.registerForm.resetFields()
      this.close()
    },
    close() {
      if (this.$refs.loginForm) {
        this.$refs.loginForm.clearValidate()
      }
      if (this.$refs.registerForm) {
        this.$refs.registerForm.clearValidate()
      }
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

  /deep/ .el-dialog--center {
    border-radius: 20px;
  }

  /deep/ .el-button.is-round {
    background: -webkit-linear-gradient(left, #add1a1, #78b798);
    color: white;
    border: 0px;
  }

  .form-button {
    position: absolute;
    left: 17%;
  }

  .link {
    line-height: 15px;
    font-size: 12px;
  }

  /deep/ .el-link.el-link--default {
    font-size: 12px;
    color: #9fa7ac;
  }
</style>
