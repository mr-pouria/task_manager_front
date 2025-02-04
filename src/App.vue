<template>
  <router-view/>
</template>


<script>
import axios from "axios";
import {useStore} from "@/pinia";
import {createToast} from "mosha-vue-toastify";
export default  {
 setup(){

   const store = useStore();
   if (localStorage.getItem("theme") === undefined) {
     localStorage.setItem("theme","light")
   }
   return {store}
 },
  created() {
    axios.interceptors.response.use((response)=>
    {
      return response
    } , (error)=>{
      createToast(error.response.data.errMsg)
      if (error.response.status === 401) {
        this.store.isAuthenticated = false
        this.$router.push("/login")
      }
      return Promise.reject(error)
    })
    this.store.setColors()
  }
}
</script>