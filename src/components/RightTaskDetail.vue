<template>
  <div id="frame">
    <el-drawer
      :title="taskName"
      :visible.sync="display"
      direction="rtl"
      :before-close="handleClose"
    >
      <el-divider />
      <el-row class="row tomatoNum">
        <el-col :span="10"><i class="icon el-icon-timer" />番茄数</el-col>
        <el-col :span="4" :offset="10">{{ pomodoroNum }}</el-col>
      </el-row>
      <el-row class="row tag">
        <el-col :span="10"><i class="icon el-icon-collection-tag" />标签</el-col>
        <el-col :span="4" :offset="10">{{ tag }}</el-col>
      </el-row>
      <el-row class="row remain"><i class="icon el-icon-bell" />提醒</el-row>
      <el-divider />
      <el-row class="row endDate">
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="到期日"
        />
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'RightTaskDetail',
  data() {
    return {
      display: false,
      taskName: this.$store.state.tasks.selectedTask.name,
      pomodoroNum: this.$store.state.tasks.selectedTask.pomodoroNum,
      endDate: '',
      tag: this.$store.state.tasks.selectedTask.tag
    }
  },
  computed: {
    open() {
      return this.$store.state.tasks.displayRightTaskDetail
    }
  },
  created() {
    this.display = this.open
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$store.commit('closeRight')
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
/deep/.el-divider--horizontal{
  margin: 0;
}
  .row{
    line-height: 30px;
    font-size: 15px;
    color: rgb(197, 197, 197);
    margin-top: 10px;
    margin-left: 20px;
  }
  .icon {
    margin-right: 10px;
  }
  /deep/.el-date-editor{
    outline: none;
  }
  .endDate{
    margin-left: 10px;
    border-color: white;
  }
</style>
