<template>
  <div>
    <Header />
    <SideBar />
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import { Watch } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'

  @Component({
    components: {
      Header,
      SideBar
    }
  })
export default class Index extends Vue {

  }
</script>
<style scoped>

</style>
