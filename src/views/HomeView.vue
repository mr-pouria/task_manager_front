<script>

import Header from "@/components/Header.vue";
import HomeIntroduction from "@/components/HomeIntroduction.vue";
import Features from "@/components/Features.vue";
import SERVER from "@/server"
export default {
  name: "HomeView",
  components:{
    Features,
    HomeIntroduction,
    Header,
  },
  created() {
    SERVER.check()
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
        })
  }
}
</script>

<template>
  <div class="outer">
    <Header/>
    <HomeIntroduction :heightEffect="123"/>
    <Features/>
  </div>
</template>

<style scoped lang="scss">
  .outer {
    padding: 20px 40px;
  }
</style>