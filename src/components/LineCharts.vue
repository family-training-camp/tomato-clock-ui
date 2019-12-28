<template>
  <div id="line-charts">
    <el-row class="line title"><el-col :span="2">番茄曲线</el-col></el-row>
    <el-row>
      <el-col :span="16" :offset="13">
        <el-button-group name="line">
          <el-button :class="{selected:isSelectedDay}" @click="lineOfDay">日</el-button>
          <el-button @click="lineOfWeek">周</el-button>
          <el-button @click="lineOfMonth">月</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <ve-line :data="lineData" />
  </div>
</template>

<script>
export default {
  name: 'LineCharts',
  data() {
    return {
      isSelectedDay: true,
      lineData: {},
      lineDayData: {},
      lineWeekData: {},
      lineMonthData: {}
    }
  },
  created() {
    this.axios.get('http://mock-api.com/NnX4Gkny.mock/statistic/line?data=day').then(response => {
      this.lineData = response.data
      this.lineDayData = response.data
    }).catch(error => {
      console.log(error)
    })
    this.axios.get('http://mock-api.com/NnX4Gkny.mock/statistic/line?data=week').then(response => {
      this.lineWeekData = response.data
    }).catch(error => {
      console.log(error)
    })
    this.axios.get('http://mock-api.com/NnX4Gkny.mock/statistic/line?data=week').then(response => {
      this.lineMonthData = response.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    lineOfDay() {
      this.lineData = this.lineDayData
    },
    lineOfWeek() {
      this.isSelectedDay = false
      this.lineData = this.lineWeekData
    },
    lineOfMonth() {
      this.isSelectedDay = false
      this.lineData = this.lineMonthData
    }
  }
}
</script>

<style scoped>
  .title{
    line-height: 40px;
    border-bottom: #c5c5c5 1px solid;
    margin-bottom: 15px;
  }
  #line-charts{
    margin-top: 50px;
    background-color: white;
  }
  .selected{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff
  }
</style>
