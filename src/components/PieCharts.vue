<template>
  <div id="pie-charts">
    <el-row class="pie title"><el-col :span="4">任务标签时间分布(h)</el-col></el-row>
    <el-row>
      <el-col :span="16" :offset="13">
        <el-button-group name="pie">
          <el-button :class="{selected:isSelected}" @click="pieOfDay">日</el-button>
          <el-button @click="pieOfWeek">周</el-button>
          <el-button @click="pieOfMonth">月</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <ve-pie :data="pieData" />
  </div>
</template>

<script>
export default {
  name: 'PieCharts',
  data() {
    return {
      isSelected: true,
      pieData: {},
      pieDayData: {},
      pieWeekData: {},
      pieMonthData: {}
    }
  },
  created() {
    this.axios.get('http://mock-api.com/NnX4Gkny.mock/statistic/pie?data=day').then(response => {
      this.pieData = response.data
      this.pieDayData = response.data
    }).catch(error => {
      console.log(error)
    })
    this.axios.get('http://mock-api.com/NnX4Gkny.mock/statistic/pie?data=week').then(response => {
      this.pieWeekData = response.data
    }).catch(error => {
      console.log(error)
    })
    this.axios.get('http://mock-api.com/NnX4Gkny.mock/statistic/pie?data=month').then(response => {
      this.pieMonthData = response.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    pieOfDay() {
      this.pieData = this.pieDayData
    },
    pieOfWeek() {
      this.isSelected = false
      this.pieData = this.pieWeekData
    },
    pieOfMonth() {
      this.isSelected = false
      this.pieData = this.pieMonthData
    }
  }
}
</script>

<style scoped>
  #pie-charts{
    margin-top: 50px;
    background-color: white;
  }
  .title{
    line-height: 40px;
    border-bottom: #c5c5c5 1px solid;
    margin-bottom: 15px;
  }
  .selected{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff
  }
</style>
