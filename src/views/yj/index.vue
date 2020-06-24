<template>
<div>
   <ToolBar>
        <div class="g-f-s g-mt-25">
            <el-date-picker
                v-model="year"
                type="year"
                placeholder="选择年">
            </el-date-picker>
            <p class="g-pl-20 ">预警结果:</p>
        </div>
        <div class="cont">
            <p  @click="showDig(), dialogStatus = '0'"><el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"   ></el-progress></p>
            <p  @click="showDig(), dialogStatus = '1'"><el-progress :text-inside="true" :stroke-width="20" :percentage="50"  :color="customColors"></el-progress></p>
        </div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="预算编制" name="first">
                    <div class="table">
                    <h3>一、合法性预警</h3>
                        <el-table
                           border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>二、合规性提醒</h3>
                        <el-table
                           border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>三、合理性提示</h3>
                        <el-table
                            border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>四、风险预警</h3>
                        <el-table
                             border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="预算执行" name="second">
                    <div class="table">
                    <h3>一、执行进度预警</h3>
                        <el-table
                             border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>二、异常预警</h3>
                        <el-table
                             border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>三、预算批复及公开情况预警</h3>
                        <el-table
                            border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="决算编制" name="third">
                    <div class="table">
                    <h3>一、合法性预警</h3>
                        <el-table
                            border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>二、合规性提醒</h3>
                        <el-table
                             border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>三、合理性提示</h3>
                        <el-table
                              border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                <div class="table">
                        <h3>四、风险预警</h3>
                        <el-table
                             border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="预警指标"
                                width="500">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-dialog :title="titleMap[dialogStatus]" :visible.sync="dialogFormVisible">
        <el-table
                 border
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="指标项目"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="指标结果">
                </el-table-column>
            </el-table>
        </el-dialog>
  </ToolBar>
</div>
</template>
<script>
import ToolBar from '~/components/ToolBar/ToolBar.vue';

export default {
    data() {
        return {
            year:'',
            activeName: 'first',
            tableData:[],
            customColors: '#FFD700',
            dialogStatus:'0',
            dialogFormVisible:false,
            titleMap:['红色预警详情','黄色预警详情']
        }
    },
    components: {
        ToolBar
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      showDig(){
          this.dialogFormVisible = true;
      }
    }
}
</script>

<style scoped >
.table{
     margin: 20px;
}
h3{
    margin-bottom: 20px;
}

.cont /deep/ .el-progress-bar__outer{
    width: 400px;
    background-color: #A9A9A9;
    top: -50px;
    position: relative;
    left: 340px;
    margin-top: 10px;
}
.cont{
    height: 30px;
}
</style>

