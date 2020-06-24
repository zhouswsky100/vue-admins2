<template>
<div>
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small">上传文件</el-button>
      <div style="float: right">
          <el-select v-model="select" size="small" clearable placeholder="请选择分类" @change="changeSel()" style="width: 140px">
            <el-option
                    v-for="item in $Config.contentData"
                    :label="item.label"
                    :key=" item.value"
                    :value="item.value">
            </el-option>
          </el-select>
          <el-input
                  placeholder="搜索标题"
                  size="small"
                  style="width: 240px"
                  v-model="input"
                  clearable>
          </el-input>
          <el-button type="success" icon="el-icon-search" size="small"  @click="changeSel()"></el-button>
      </div>
    </ToolBar>
    <el-table
            :data="tableData3"
            border
            style="width: 100%">
      <el-table-column
              prop="date"
              label="No"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="文件名称"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="文件大小">
      </el-table-column>
        <el-table-column
              prop="address"
              label="文件类型	">
      </el-table-column>
        <el-table-column
              prop="address"
              label="上传用户	">
      </el-table-column>
         <el-table-column
              prop="address"
              label="上传时间">
      </el-table-column>
      <el-table-column
              label="操作"
              :render-header="tableAction"
              width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="info" icon="el-icon-info" size="small" circle></el-button>
          <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" size="small" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import ToolBar from '~/components/ToolBar/ToolBar.vue';
  import HelpHint from '~/components/HelpHint/HelpHint.vue';
  export default {
    data() {
      return {
         input:'',
         select:'',
         tableData3: []
      }
    },
    methods: {
      handleClick(row) {
        this.$alert(row, '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      },
      changeSel(){
          console.log(this.select)
          console.log(this.input)
      },
      clearSel(){
          this.select = ''
          this.input = ''
      },
      tableAction(){
        return this.$createElement('HelpHint',{
          props:{
            content:'下载 / 删除'
          }
        },'操作');
      },
    },
    components: {
        ToolBar,HelpHint
    }
  }
</script>