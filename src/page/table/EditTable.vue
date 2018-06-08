<template>
  <div>
    <el-dialog title="编辑列表" :visible.sync="dialogFormVisible">
      <el-form :model="addForm">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="addForm.date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="省份" :label-width="formLabelWidth" prop="provinceId">
          <el-cascader
            :options="options2"
            v-model="selectedOptions3"
          ></el-cascader>
        </el-form-item>
        <el-form-item label='地址' :label-width="formLabelWidth">
          <el-input v-model="addForm.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label='邮编' :label-width="formLabelWidth">
          <el-input v-model="addForm.zip" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-table
      :data="tableData"
      border
      style="width: 100%;">
      <el-table-column
        fixed
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row, selectedOptions3)" type="text" size="small">编辑</el-button>
          <el-button @click="del(scope.$index, tableData)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { tableList } from '../../until/morkData.js'
import city from '../../until/city.js'
  @Component({
    components: {
    }
  })
export default class EditTable extends Vue {
  addForm = {
    name: '',
    provinceId: ''
  }
  tableData = tableList
  dialogFormVisible = false
  formLabelWidth = '120px'
  options2 = city
  selectedOptions3 = []

  edit (row) {
    this.dialogFormVisible = true
    this.addForm = row
    this.selectedOptions3.push(row.province, row.city.split('/')[0], row.city.split('/')[1])
  }

  del (index, rows) {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      rows.splice(index, 1)
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
  }
</script>
<style scoped>
</style>
