<script>
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import {store} from "core-js/internals/reflect-metadata";
import {useStore} from "@/pinia";


export default {
  name: "DashboardView",
  data(){
    return {
      headerSize : null
    }
  },
  methods:{
    store,
    getHeaderSize(param) {
      this.headerSize = param
    }
  },
  components:{
    DashboardSidebar,
    DashboardHeader
  },
  setup() {
    const store = useStore()
    return {store}
  }
}
</script>

<template>
  <div class="container">
    <DashboardHeader @header-size="getHeaderSize"/>
    <div class="inner" :style="{height:`calc(100vh - ${headerSize}px)`}">
      <DashboardSidebar :headerSize="headerSize"/>
      <div class="content" :style="{width:store.sidebarPinned ? 'calc(100% - 220px)' : '100%'}">

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
  .container {
    width: 100wv;
    height: 100vh;
    background: var(--baseColor);
    .inner {
      display: flex;
      .content {
        transition: all 0.2s ease-in-out;
        width: 100%;
        margin: 20px;
        background: var(--lod);
        border-radius: 10px;
      }
    }
  }
</style>