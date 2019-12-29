<template>
  <div>
    <el-row class="top-row">
      <el-col :span="8">
        <span>
          <i class="el-icon-user" /> </span>&nbsp; <el-link class="loginBtn" :underline="false" @click="login">
            {{ $t('m.login') }}
          </el-link>&nbsp;
        <el-link class="registerBtn" :underline="false" @click="register">
          {{ $t('m.register') }}
        </el-link>
      </el-col>
      <el-col :span="6" :offset="10">
        <span @click="addTaskCard">
          <i class="el-icon-plus" />
        </span>
        <span @click="dataCharts"><i class="el-icon-s-data" /></span>
        <el-switch
          v-model="value1"
          :active-text="$t('m.chinese')"
          :inactive-text="$t('m.english')"
          @change="switchLanguage"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TopNavBar',
  data() {
    return {
      value1: true
    }
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    register() {
      this.$router.push('/register')
    },
    switchLanguage() {
      const m = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = m
      this.chinese = !this.chinese
    },
    addTaskCard() {
      this.$router.push('/addTaskCard')
    },
    dataCharts() {
      this.$router.push('/dataCharts')
    }
  }
}
</script>

<style scoped>
.top-row {
  line-height: 45px;
  background-color: white;
}
.el-icon-user {
  font-size: 20px;
  margin-left: 15px;
}
.el-switch{
  margin-left: 20px;
}
  .el-icon-plus{
    margin-left: 10px;
    font-size: 20px;
  }
  .el-icon-s-data{
    font-size: 20px;
    margin-left: 10px;
  }

</style>
