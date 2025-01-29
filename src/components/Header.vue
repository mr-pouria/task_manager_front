<script>
import {useStore} from "@/pinia";
export default {
  name: "Header",
  setup() {
    const store = useStore()
    return {store}
  },
  mounted() {
    const switchToDarkMode = document.getElementById("switchToDarkMode")
    localStorage.getItem("theme") === "dark" ? switchToDarkMode.classList.remove("theme-toggle--toggled") : switchToDarkMode.classList.add("theme-toggle--toggled")
  },
  methods:{
    switchToDarkMode() {
      this.store.darkModeHandler()
      const switchToDarkMode = document.getElementById("switchToDarkMode")
      localStorage.getItem("theme") === "dark" ? switchToDarkMode.classList.remove("theme-toggle--toggled") : switchToDarkMode.classList.add("theme-toggle--toggled")
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="head-box">
        <div class="logo" @click="this.$router.push('/')">
         <span>
           <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.9 60.9"><g id="Layer_1-2"><rect
               width="60.9" height="60.9" rx="9.86" ry="9.86" style="fill:#00a6fb;"/><path
               d="M46.55,48.75h-14.35V12.16h14.35c.97,0,1.75-.78,1.75-1.75s-.78-1.75-1.75-1.75H14.35c-.97,0-1.75.78-1.75,1.75s.78,1.75,1.75,1.75h14.35v36.59h-14.35c-.97,0-1.75.78-1.75,1.75s.78,1.75,1.75,1.75h32.2c.97,0,1.75-.78,1.75-1.75s-.78-1.75-1.75-1.75Z"
               style="fill:#efefef;"/></g></svg>
         </span>
        </div>
        <div class="header-text" @click="this.$router.push('/')">
          <h1>تسکتاپ</h1>
          <h2>برنامه مدیریت وظیفه</h2>
        </div>
      </div>
      <div class="head-box">
        <ul>
          <li>درخواست</li>
          <li>قابلیت ها</li>
          <li>مشاوره</li>
          <li>ارتباط باما</li>
        </ul>
      </div>
      <div class="head-box">
        <button @click="switchToDarkMode()"
                  id="switchToDarkMode"
                  class="theme-toggle"
                  type="button"
                  title="Toggle theme"
                  aria-label="Toggle theme"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="1em"
                height="1em"
                fill="currentColor"
                class="theme-toggle__expand"
                viewBox="0 0 32 32"
            >
              <clipPath id="theme-toggle__expand__cutout">
                <path d="M0-11h25a1 1 0 0017 13v30H0Z"/>
              </clipPath>
              <g clip-path="url(#theme-toggle__expand__cutout)">
                <circle cx="16" cy="16" r="8.4"/>
                <path
                    d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"/>
              </g>
            </svg>
          </button>
        <button class="auth-btn">ورود</button>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
@import "src/assets/styles/toggleDarkModeIcon";
#switchToDarkMode {
  width: 40px;
  height: 35px;
  background: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border-radius: 8px;
  svg {
    width: 15px;
    height: 15px;
    fill: var(--lightTextColor);
  }
}


.header {
  background: var(--lod);
  padding: 15px 25px;
  border-radius: 6px;
  &__container {
    display: flex;
    .head-box:first-child {
      justify-content: start;

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        span {
          display: flex;
          width: 40px;
        }
      }

      .header-text {
        margin-right: 20px;
        cursor: pointer;
        h1 {
          color: var(--lodReversed);
          font-family: 'irsans-bold';
          font-size: 1.3em;
          text-align: center;
        }

        h2 {
          color: var(--lightTextColor);
          font-family: 'irsans-regular';
          font-size: 0.5em;
          text-align: center;
        }
      }
    }
    .head-box {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        display: flex;
        gap: 30px;
        li {
          color: var(--lodReversed);
          cursor: pointer;
          font-family: 'irsans-demiBold';
          font-size: 0.8em;
        }
      }
      button.auth-btn {
        width: 70px;
        height: 35px;
        border: none;
        border-radius: 6px;
        font-family: 'irsans-bold';
        cursor: pointer;
        background: var(--primary);
        color: #ffffff;
      }
    }
    .head-box:last-child {
      justify-content: end;
    }
  }
}

</style>