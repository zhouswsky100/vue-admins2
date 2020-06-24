<template>
<div >
    <ToolBar>
      <div style="float: left">
          <el-select v-model="select" size="small" clearable placeholder="请选择分类" @change="changeSel()" style="width: 140px">
            <el-option
                    v-for="item in $Config.fgData"
                    :label="item.label"
                    :key=" item.value"
                    :value="item.value">
            </el-option>
          </el-select>
          <el-input
                  placeholder="请输入文件名称"
                  size="small"
                  style="width: 240px"
                  v-model="input"
                  clearable>
          </el-input>
          <el-button type="success" icon="el-icon-search" size="small"  @click="changeSel()"></el-button>
          <el-button type="success" icon="el-icon-refresh" size="small"  @click="clearSel()"></el-button>
      </div>
    </ToolBar>
    <div class="g-mt-10">
         <el-table
             border
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="No"
                width="100">
            </el-table-column>
              <el-table-column
                prop="date"
                label="标题"
                width="300">
            </el-table-column>
           
             <el-table-column
                prop="date"
                label="文号及日期"
                width="200">
            </el-table-column>
             <el-table-column
                prop="date"
                label="发文单位"
                width="200">
            </el-table-column>
               <el-table-column
                prop="date"
                label="发布时间"
                width="200">
            </el-table-column>
        </el-table>
    </div>
    <div class="g-mt-10">
        <el-pagination
        :current-page.sync="currentPage2"
        :page-sizes="pagesize"
        :page-size="1000"
        background
        layout="sizes, prev, pager, next"
        :total="total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
  import ToolBar from '~/components/ToolBar/ToolBar.vue';
  export default {
    data() {
      return {
        input:'',
        select:'',
        currentPage2: 5,
        tableData:[],
        pagesize:[10, 20, 30, 40,50,60,70,80,90,100],
        total:100
      }
    },
    methods: {
      changeSel(){
          console.log(this.select)
          console.log(this.input)
      },
      clearSel(){
          this.select = ''
          this.input = ''
      },
    },
    components: {
        ToolBar
    }
  }
</script>