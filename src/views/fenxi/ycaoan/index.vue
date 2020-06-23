<template>
  <div>
      <div id="main" style="width: 300px;height:400px;"></div>
      <div id="main2" style="width: 300px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import charData from '../../../moke/chart.js'
export default {
  data () {
    return {
         chartAllData: charData.getChatData(),
    }
  },
  mounted() {
        var myChart = echarts.init(document.getElementById('main'));
        var myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.setOption(this.chartAllData.orgOption1)
        myChart.setOption(this.chartAllData.orgOption2);
  }
}
</script>

<style>

</style>