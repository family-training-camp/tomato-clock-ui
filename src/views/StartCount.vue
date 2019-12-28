<template>
  <div id="frame">
    <el-row class="task">{{ task }}</el-row>
    <count-down />
  </div>
</template>

<script>
import CountDown from '../components/CountDown'
export default {
  name: 'StartCount',
  components: { CountDown },
  data() {
    return {
      task: this.$route.params.name
    }
  }
}
</script>

<style scoped>
.task{
  text-align: center;
  background-color: white;
  line-height: 50px;
  border-radius: 5px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top:50px ;
}
</style>
