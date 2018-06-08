<template>
  <div class="header">
    <h2>后台管理系统</h2>
    <div class="userIcon">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../assets/img/bg.png">
          <b>element_admin</b>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  @Component
export default class Header extends Vue {
  }
</script>

<style scoped>
.header {
  height: 80px;
  background-color: #333;
  width: 100%;
}
.header h2 {
  float: left;
  padding: 0px 0px 0px 50px;
  color: #fff;
}
.user-logo {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
.userIcon {
  float: right;
  margin: 8px 60px 0px 0px;
  cursor: pointer;
}
.userIcon b {
  color: #fff;
  margin-left: 10px;
}
</style>
