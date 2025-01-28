

<template>
  <header>
    <div class="side">
      <div class="item" @click.stop="store.sidebarKey = !store.sidebarKey;store.sidebarPinned = false;"
           :class="{'active': store.sidebarKey && !store.sidebarPinned}">
        <span class="hamb"></span>
        <span class="hamb"></span>
        <span class="hamb"></span>
      </div>

    </div>
    <div class="side">
      <div class="item">
        <span>
          <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.87 27.16">
    <g id="c">
        <path
            d="M12.93,27.16c-2.67,0-4.85-2.18-4.85-4.85,0-.54.43-.97.97-.97s.97.43.97.97c0,1.61,1.3,2.91,2.91,2.91s2.91-1.3,2.91-2.91c0-.54.43-.97.97-.97s.97.43.97.97c0,2.67-2.18,4.85-4.85,4.85Z"/>
        <path
            d="M23.61,23.28H2.26C1.02,23.28,0,22.27,0,21.02c0-.66.29-1.29.79-1.72,1.97-1.66,3.09-4.08,3.09-6.64v-3.61C3.88,4.06,7.94,0,12.93,0s9.05,4.06,9.05,9.05v3.61c0,2.56,1.12,4.98,3.08,6.63.52.44.8,1.07.8,1.73,0,1.25-1.02,2.26-2.26,2.26ZM12.93,1.94c-3.92,0-7.11,3.19-7.11,7.11v3.61c0,3.13-1.37,6.09-3.76,8.11-.05.04-.12.12-.12.25,0,.18.15.32.32.32h21.34c.18,0,.32-.15.32-.32,0-.13-.07-.21-.11-.25-2.39-2.02-3.77-4.98-3.77-8.11v-3.61c0-3.92-3.19-7.11-7.11-7.11Z"/>
    </g>
</svg>
        </span>
        <span class="badge">10</span>
      </div>
      <div class="item">
        <span>
          <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.16 27.16">
    <g id="c">
        <path
            d="M3.13,21.19c-.91,0-1.79-.23-2.6-.68-.41-.21-.57-.75-.33-1.15.82-1.31,1.12-2.91.74-4.42C.56,13.37,0,12.05,0,10.4.01,4.6,4.85-.11,10.64,0c5.6.11,10.22,4.82,10.22,10.42,0,7.32-7.67,12.45-14.44,9.63-.93.73-2.11,1.13-3.29,1.13h0ZM2.03,19.4c1.28.4,2.71.08,3.69-.87.24-.23.6-.29.91-.15,5.8,2.77,12.62-1.57,12.62-7.95,0-4.76-3.87-8.71-8.64-8.81C5.7,1.52,1.63,5.49,1.61,10.4c0,1.57.61,2.83.94,4.32.35,1.57.17,3.23-.53,4.68Z"/>
        <path
            d="M24.03,27.16c-1.19,0-2.36-.4-3.29-1.13-3.6,1.5-7.88.82-10.83-1.73-.34-.29-.37-.8-.08-1.14.29-.34.8-.37,1.14-.08,2.62,2.26,6.45,2.77,9.57,1.28.3-.15.67-.09.91.15.98.95,2.42,1.27,3.69.87-.82-1.71-.93-3.67-.3-5.49,0-.02.01-.03.02-.05.46-1.09.7-2.26.7-3.46,0-2.12-.71-4.07-2.04-5.66-.29-.34-.24-.85.1-1.14.34-.29.85-.24,1.14.1,1.55,1.85,2.4,4.23,2.41,6.69,0,1.41-.27,2.78-.81,4.07-.57,1.65-.31,3.42.61,4.89.25.4.09.93-.33,1.15-.8.45-1.69.68-2.6.68h0Z"/>
    </g>
</svg>
        </span>
        <span class="badge">9</span>
      </div>
      <div class="item userCombo">
        <span>
          <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.93 25.93">
    <g id="c">
        <path
            d="M0,25.93v-4.51c0-4.01,8.56-6.2,12.96-6.2s12.96,2.19,12.96,6.2v4.51H0ZM12.96,17.31c-4.67,0-10.87,2.34-10.87,4.11v2.42h21.73v-2.42c0-1.77-6.19-4.11-10.87-4.11ZM12.96,12.41c-3.42,0-6.2-2.78-6.2-6.2S9.54,0,12.96,0s6.2,2.78,6.2,6.2-2.78,6.2-6.2,6.2ZM12.96,2.27c-2.17,0-3.94,1.77-3.94,3.94s1.77,3.94,3.94,3.94,3.94-1.77,3.94-3.94-1.77-3.94-3.94-3.94Z"/>
    </g>
</svg>
        </span>
        <span class="txt">آقای فلانی</span>
      </div>
    </div>
  </header>
</template>

<script>
import {useStore} from "@/pinia";

export default {
  name: "DashboardHeader",
  mounted() {
    this.getHeaderHeight()
  },
  setup() {
    const store = useStore()
    return {store}
  },
  methods: {
    getHeaderHeight() {
      return this.$emit("header-size", document.querySelector('header').offsetHeight)
    }
  }
}
</script>


<style scoped lang="scss">
header {
  position: relative;
  z-index: 3;
  background: var(--lod);
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  .side {
    width: 50%;
    padding: 15px 20px;
    display: flex;

    &:nth-child(2) {
      justify-content: flex-end;

      .item {
        margin-right: 25px;
      }
    }

    &:nth-child(1) {
      justify-content: flex-start;

      .item {
        margin-left: 20px;
      }
    }

    .item.active {
      .hamb:nth-child(1) {
        transform: rotate(45deg) translateY(5px) translateX(5px);
      }

      .hamb:nth-child(2) {
        transform: rotate(-45deg) translateY(1px) translateX(-1px);
      }

      .hamb:nth-child(3) {
        opacity: 0;
      }
    }

    .item:has(.hamb) {
      display: block;
      cursor: pointer;


      .hamb {
        transform: translateY(4px);
        margin-bottom: 3px;
        width: 20px;
        height: 0.7mm;
        background: #3d3d3d;
        border-radius: 10px;
        transition: all 0.2s ease-in-out;
      }
    }

    .item {
      display: flex;
      gap: 10px;
      position: relative;

      span {
        width: 20px;
        height: 20px;
        display: flex;
        cursor: pointer;
      }

      span.txt {
        width: max-content;
        font-size: 0.8em;
      }

      span.badge {
        user-select: none;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12px;
        height: 12px;
        background: var(--primary);
        border-radius: 20px;
        top: -3px;
        right: -3px;
        font-size: 0.7em;
        color: var(--baseColor);
      }
    }

    .userCombo {
      cursor: pointer;
    }
  }
}
</style>
