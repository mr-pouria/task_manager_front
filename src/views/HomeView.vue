<script>

import Header from "@/components/Header.vue";
import HomeIntroduction from "@/components/HomeIntroduction.vue";
export default {
  name: "HomeView",
  components:{
    HomeIntroduction,
    Header,
  }
}
</script>

<template>
  <div class="outer">
    <Header/>
    <HomeIntroduction :heightEffect="123"/>
  </div>
</template>

<style scoped lang="scss">
  .outer {
    padding: 20px 40px;
  }
</style>