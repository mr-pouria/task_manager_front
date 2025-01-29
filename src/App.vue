<template>
  <router-view/>
</template>


<script setup>
import {onMounted} from "vue";
import {useStore} from "@/pinia";
const store = useStore();
if (localStorage.getItem("theme") === undefined) {
  localStorage.setItem("theme","light")
}

onMounted(()=>{
  store.setColors()
})
</script>