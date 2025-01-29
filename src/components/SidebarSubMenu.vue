<script>

export default {
  name: "SidebarSubMenu",
  props: ["data", "current", "subKey"],
  methods: {
    hide(param, indx) {
      this.data.data.forEach((item, index) => {
        if (item.nestedKey !== undefined && index !== indx) {
          item.nestedKey = false
        }
        if (item.nested) {
          item.nested.data.forEach((i) => {
            i.nestedKey = false
          })
        }


      })
      param.nestedKey = !param.nestedKey
    },
    outsideClickHandle(param) {
      if (param.key) {
        param.key = false
        param.data.forEach((item) => {
          item.nestedKey = false
        })
      }
    }
  }


}
</script>

<template>
  <div class="sub-menu" v-click-outside="(()=>{outsideClickHandle(data)})">
    <ul>
      <li v-for="(item, index) in data.data" :key="index">
        <router-link :to="item.path" v-if="item.nested === undefined || item.nested.data.length <= 0">{{ item.title }}
        </router-link>
        <div class="nested-sub-menu" @click="()=>{hide(item , index);}" v-else>
          <span class="txt">{{ item.title }}</span>
          <span>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.84 9.67">
  <g id="Layer_1-2" data-name="Layer 1">
    <polyline points="17.09 .75 8.92 8.92 .75 .75"
              style="fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
  </g>
</svg>
          </span>
        </div>
        <Transition>
          <SidebarSubMenu :data="item.nested" :subKey="item.nestedKey"
                          v-if="(item.nested && item.nestedKey && item.nested.data.length > 0)"/>
        </Transition>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.sub-menu {
  position: absolute;
  width: 200px;
  top: 0;
  left: -205px;
  background: var(--lod);
  box-shadow: 0 0 2px 0 var(--boxShadow);
  border-radius: 5px;

  ul li {
    position: relative;
  }

  ul li a {
    color: var(--lightTextColor);
    font-size: 0.7em;
    padding: 8px 10px;
    display: block;
  }

  ul li .nested-sub-menu {
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    span.txt {
      color: var(--lightTextColor);
      font-size: 0.7em;
    }

    span:has(svg) {
      max-width: 15px;
      min-width: 15px;
      rotate: 90deg;

      svg g polyline {
        stroke: var(--lightTextColor) !important;
      }
    }
  }
}
</style>