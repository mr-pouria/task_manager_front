import {defineStore} from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStore = defineStore('store', {
    state: ()=>({
        sidebarKey:true,
        sidebarPinned:true
    }),
    actions: {
        darkModeHandler(){
            if (localStorage.getItem("theme") === undefined){
                localStorage.setItem("theme", "light")
            }
            if (localStorage.getItem("theme") === "light") {
                localStorage.setItem("theme" , "dark")


            } else {
                localStorage.setItem("theme","light")
            }
            this.setColors()




        },
        setColors() {
            if (localStorage.getItem("theme") === "light") {
                document.body.style.setProperty("--primary", "#00a6fb")
                document.body.style.setProperty("--lightTextColor", "#3d3d3d")
                document.body.style.setProperty("--baseColor", "#f4f4f4")
                document.body.style.setProperty("--lod", "#ffffff")
                document.body.style.setProperty("--lodReversed", "#000000")
                document.body.style.setProperty("--boxShadow", "rgba(61, 61 ,61 , 0.3)")
            } else if (localStorage.getItem("theme") === "dark") {
                document.body.style.setProperty("--primary", "#0086cc")
                document.body.style.setProperty("--lightTextColor", "#ffffff")
                document.body.style.setProperty("--baseColor", "#303030")
                document.body.style.setProperty("--lod", "#3c3c3c")
                document.body.style.setProperty("--lodReversed", "#ffffff")
                document.body.style.setProperty("--boxShadow", "rgba(255,255,255,0.3)")
            } else {

            }
        }
    }
})