<template>
  <div id="frame">
    <el-form
      ref="accountForm"
      :model="accountForm"
      status-icon
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="accountForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱地址" prop="email">
        <el-input v-model="accountForm.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="accountForm.confirmPassword" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        var regUpper = /[A-Z]/
        var regLower = /[a-z]/
        var regNum = /[0-9]/
        var regTeShu = new RegExp('[`~!@#$^&*()=|{}\':;\',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“\'。，、？]')
        var complex = 0
        if (regLower.test(value)) {
          ++complex
        }
        if (regUpper.test(value)) {
          ++complex
        }
        if (regNum.test(value)) {
          ++complex
        }
        if (regTeShu.test(value)) {
          ++complex
        }
        if (complex < 2) {
          callback(new Error('密码必须包含大写字母，小写字母，数字，特殊符号中任意2种'))
        } else {
          if (this.accountForm.confirmPassword !== '') {
            this.$refs.accountForm.validateField('confirmPassword')
          }
          callback()
        }
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.accountForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      accountForm: {
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 15, message: '用户名不能超过15个字符' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 20, message: '密码长度在6到20个字符' }
          // { pattern: /^(\w){6,20}$/, message: '只能输入字母、数字、下划线' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.accountForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: '恭喜你，用户注册成功',
            type: 'success'
          })
          setTimeout(() => {
            this.$router.push('/')
          }, 1500)
        }
      })
    },
    resetForm() {
      this.$refs.accountForm.resetFields()
    }
  }
}
</script>

<style scoped>
  #frame {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
</style>
