<script >
export default {
  name: "SidebarSubMenu",
  props:["data","current"]
}
</script>

<template>
  <div class="sub-menu" v-click-outside="(()=>{if(current.currentIndex !== -1){current = -1}})">
    <ul>
      <li v-for="(item, index) in data.data" :key="index"><router-link :to="item.path">{{item.title}}</router-link></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .sub-menu {
    position: absolute;
    width: 180px;
    top: -5px;
    left: -185px;
    background: var(--lod);
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    ul li a{
      color: var(--lightTextColor);
      font-size: 0.7em;
      padding: 8px 10px;
      display: block;
    }
  }
</style>