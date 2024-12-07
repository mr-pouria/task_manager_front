<script>
export default {
  name: "HomeIntroduction",
  props : ['heightEffect']
}
</script>

<template>
 <section :style="{ height: `calc(100vh - ${heightEffect}px)` }">
    <div class="introduction-wrapper">

    </div>
   <div class="carousel-wrapper"></div>
 </section>
</template>

<style scoped lang="scss">
  section {

  }
</style>