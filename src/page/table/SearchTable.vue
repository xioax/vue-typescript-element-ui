<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="searchConName1" placeholder="请输入姓名"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="handleSearch1">搜索</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="data"
      border
      style="width: 100%;margin-top: 20px;"
      v-loading="loading"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { tableData } from '../../until/morkData.js'

  @Component({
    components: {
    }
  })
export default class SearchTable extends Vue {
  searchConName1 = ''
  tableData = tableData
  data = []
  loading = false

  mounted () {
    this.init()
  }

  init () {
    this.data = this.tableData
  }

  search (data, argumentObj) {
    let res = data
    let dataClone = data
    for (let argu in argumentObj) {
      if (argumentObj[argu].length > 0) {
        res = dataClone.filter(d => {
          return d[argu].indexOf(argumentObj[argu]) > -1
        })
        dataClone = res
      }
    }
    return res
  }
  handleSearch1 () {
    this.data = this.tableData
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.data = this.search(this.data, {name: this.searchConName1})
    }, 300)
  }
  }
</script>
<style scoped>

</style>
