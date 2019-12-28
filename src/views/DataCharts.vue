<template>
  <div id="frame">
    <div id="totalData">
      <el-row class="first-row">
        <el-row class="row-num" :gutter="20">
          <el-col :span="4"><span>1.7</span></el-col>
          <el-col :span="4"><span>0.8</span></el-col>
          <el-col :span="4"><span>0</span></el-col>
          <el-col :span="4"><span>4</span></el-col>
          <el-col :span="4"><span>2</span></el-col>
          <el-col :span="4"><span>0</span></el-col>
        </el-row>
        <el-row class="row-title" :gutter="20">
          <el-col :span="4"><span>总专注时间(h)</span></el-col>
          <el-col :span="4"><span>本周专注时间(h)</span></el-col>
          <el-col :span="4"><span>今日专注时间(h)</span></el-col>
          <el-col :span="4"><span>总完成任务数</span></el-col>
          <el-col :span="4"><span>本周完成任务数</span></el-col>
          <el-col :span="4"><span>今日完成任务数</span></el-col>
        </el-row>
      </el-row>
    </div>
    <pie-charts />
    <line-charts />
  </div>
</template>
<script>
import PieCharts from '../components/PieCharts'
import LineCharts from '../components/LineCharts'
export default {
  name: 'DataCharts',
  components: { LineCharts, PieCharts }
}
</script>

<style scoped>
  #frame{
    margin-left: auto;
    margin-right: auto;
    width: 1080px;
    text-align: center;
  }
#totalData{
  background-color: white;
  margin-top: 50px;
  padding-top: 10px;
  }
  .first-row{
    line-height: 50px;
    margin-top: 10px;
  }
  .row-num{
    font-size: 40px;
    color: #c6e2ff;
  }
  .row-title{
    font-size: 13px;
    color: #c5c5c5;
  }

</style>
