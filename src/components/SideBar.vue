<template>
  <div class="side">
    <el-menu
      :default-active="onRouter"
      class="el-menu-vertical-demo"
      router
    >
      <el-submenu v-for="(item, index) in items" :key="index" :index="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item v-for="(subItem, i) in item.sub" :key="i" :index="subItem.index">{{subItem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  @Component
export default class SideBar extends Vue {
    items = [{
      index: '1',
      title: '表格',
      icon: 'el-icon-tickets',
      sub: [
        {
          index: 'editTable',
          title: '可编辑表格'
        },
        {
          index: 'searchTable',
          title: '可查询表格'
        }
      ]
    }]

    get onRouter () {
      return this.$route.path.replace('/', '')
    }
  }
</script>

<style scoped>
.side {
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  width: 250px;
}
.el-menu {
  text-align: left;
  height: 100%;
}
</style>
