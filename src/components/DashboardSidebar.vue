<script>
import SidebarSubMenu from "@/components/SidebarSubMenu.vue";
import {useStore} from "@/pinia";

export default {
  name: "DashboardSidebar",
  props: ['headerSize'],
  components: {
    SidebarSubMenu
  },
  methods: {
    hide() {
      if (this.store.sidebarKey && !this.store.sidebarPinned) {
        this.store.sidebarKey = false
        this.subMenuEvent(null, -1)
      }
    },
    nestedArrayLoop(data) {
      data.forEach(item => {
        if (item.nested) {
          item.nestedKey = false;
          this.nestedArrayLoop(item.nested.data);
        } else if (Array.isArray(item)) {
          this.nestedArrayLoop(item);
        }
      });
    },
    subMenuEvent(param, index) {
      this.subMenuData.forEach((itm, indx) => {
        if (indx !== index) {
          itm.key = false
        }
      })
      if (param !== null) {
        param.key = !param.key
      }
      if (index !== -1) {
        this.nestedArrayLoop(this.subMenuData[index].data)
      }
    }
  },
  data() {
    return {
      subMenuData: [

        {
          data: [
            {
              title: "سرویس های فعال",
              path: '/dashboard',
              key: false,
              nested: {
                data: [{
                  title: "سرویس های فعال",
                  path: "/dashboard",
                  nested: {data: [{title: "test", path: "/dashboard"}]}
                }]
              }
            },
            {
              title: "سرویس های درحال انقضا", path: '/dashboard'
            },
            {title: "تمامی سرویس ها", path: '/dashboard'}
          ]
        },
        {
          data: [{title: "ثبت تیکت جدید", path: "/dashboard"},
            {
              title: "تیکت های جاری", path: '/dashboard'
            },
            {title: "تمامی تیکت ها", path: '/dashboard'}
          ]
        },
        {
          data: []
        }

      ]
    }
  },
  setup() {
    const store = useStore()
    return {store}
  }

}
</script>

<template>


  <aside :style="{height:`calc(100vh - ${headerSize}px)`}"
         :class="{'active':store.sidebarKey,'pinned':store.sidebarPinned}"
         v-click-outside="hide"
  >


    <h5><span></span>
      سرویس ها
      <span></span></h5>
    <ul>
      <li>
        <div class="combo" @click.stop="subMenuEvent(subMenuData[0] , 0)"
             :style="{opacity:subMenuData[0].data.length > 0 ? '1' : '0.5', cursor : subMenuData[0].data.length > 0 ? 'pointer' : 'default'}">
          <span>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.87 23.03">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <rect x=".78" y=".78" width="8.97" height="8.97" rx="2.06" ry="2.06"
            style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.56px;"/>
      <rect x="13.12" y=".78" width="8.97" height="8.97" rx="2.06" ry="2.06"
            style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.56px;"/>
      <rect x=".78" y="13.28" width="8.97" height="8.97" rx="2.06" ry="2.06"
            style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.56px;"/>
      <rect x="13.12" y="13.28" width="8.97" height="8.97" rx="2.06" ry="2.06"
            style="fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 1.56px;"/>
    </g>
  </g>
</svg>
          </span>
          <span class="txt">سرویس های من</span>
          <span v-if="subMenuData[0].data.length > 0">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.84 9.67">
  <g id="Layer_1-2" data-name="Layer 1">
    <polyline points="17.09 .75 8.92 8.92 .75 .75"
              style="fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
  </g>
</svg>
          </span>
        </div>
        <Transition>
          <SidebarSubMenu :data="subMenuData[0]"
                          v-if="subMenuData[0].key && (store.sidebarKey || store.sidebarPinned)"/>
        </Transition>
      </li>
      <li>
        <router-link to="/">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="18px"
                 style="scale: 1.2" fill="#3d3d3d"><path
                d="M444-288h72v-156h156v-72H516v-156h-72v156H288v72h156v156Zm36.28 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
        </span>
          <span class="txt">ثبت سرویس جدید</span>
        </router-link>
      </li>

    </ul>
    <h5><span></span>
      پشتیبانی
      <span></span></h5>
    <ul class="lastLevel">
      <li>
        <div class="combo" @click.stop="subMenuEvent(subMenuData[1] , 1)"
             :style="{opacity:subMenuData[1].data.length > 0 ? '1' : '0.5', cursor : subMenuData[1].data.length > 0 ? 'pointer' : 'default'}">
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
          <span class="txt">تیکت ها</span>
          <span v-if="subMenuData[1].data.length > 0">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.84 9.67">
  <g id="Layer_1-2" data-name="Layer 1">
    <polyline points="17.09 .75 8.92 8.92 .75 .75"
              style="fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
  </g>
</svg>
          </span>
        </div>
        <Transition>
          <SidebarSubMenu :data="subMenuData[1]"
                          v-if="subMenuData[1].key && (store.sidebarKey || store.sidebarPinned)"/>
        </Transition>

      </li>
      <li>
        <div class="combo"
             :style="{opacity:subMenuData[2].data.length > 0 ? '1' : '0.5', cursor : subMenuData[2].data.length > 0 ? 'pointer' : 'default'}">
          <span>
           <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#3d3d3dx"><path
               d="M384-144H216q-29.7 0-50.85-21.15Q144-186.3 144-216v-168q40-2 68-29.5t28-66.5q0-39-28-66.5T144-576v-168q0-29.7 21.15-50.85Q186.3-816 216-816h168q0-40 27.77-68 27.78-28 68-28Q520-912 548-884.16q28 27.84 28 68.16h168q29.7 0 50.85 21.15Q816-773.7 816-744v168q40 0 68 27.77 28 27.78 28 68Q912-440 884.16-412q-27.84 28-68.16 28v168q0 29.7-21.15 50.85Q773.7-144 744-144H576q-2-40-29.38-68t-66.5-28q-39.12 0-66.62 28-27.5 28-29.5 68Zm-168-72h112q20-45 61.5-70.5T480-312q49 0 90.5 25.5T632-216h112v-240h72q9.6 0 16.8-7.2 7.2-7.2 7.2-16.8 0-9.6-7.2-16.8-7.2-7.2-16.8-7.2h-72v-240H504v-72q0-9.6-7.2-16.8-7.2-7.2-16.8-7.2-9.6 0-16.8 7.2-7.2 7.2-7.2 16.8v72H216v112q45 20 70.5 61.5T312-480q0 50.21-25.5 91.6Q261-347 216-328v112Zm264-264Z"/></svg>
               </span>
          <span class="txt">آموزش</span>
          <span v-if="subMenuData[2].data.length > 0">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.84 9.67">
  <g id="Layer_1-2" data-name="Layer 1">
    <polyline points="17.09 .75 8.92 8.92 .75 .75"
              style="fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
  </g>
</svg>
          </span>
        </div>
      </li>
      <li>
        <router-link to="/">
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
          <span class="txt">اعلان ها</span>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/">
          <span>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px"><path
    d="M 13.1875 3 L 13.03125 3.8125 L 12.4375 6.78125 C 11.484375 7.15625 10.625 7.683594 9.84375 8.3125 L 6.9375 7.3125 L 6.15625 7.0625 L 5.75 7.78125 L 3.75 11.21875 L 3.34375 11.9375 L 3.9375 12.46875 L 6.1875 14.4375 C 6.105469 14.949219 6 15.460938 6 16 C 6 16.539063 6.105469 17.050781 6.1875 17.5625 L 3.9375 19.53125 L 3.34375 20.0625 L 3.75 20.78125 L 5.75 24.21875 L 6.15625 24.9375 L 6.9375 24.6875 L 9.84375 23.6875 C 10.625 24.316406 11.484375 24.84375 12.4375 25.21875 L 13.03125 28.1875 L 13.1875 29 L 18.8125 29 L 18.96875 28.1875 L 19.5625 25.21875 C 20.515625 24.84375 21.375 24.316406 22.15625 23.6875 L 25.0625 24.6875 L 25.84375 24.9375 L 26.25 24.21875 L 28.25 20.78125 L 28.65625 20.0625 L 28.0625 19.53125 L 25.8125 17.5625 C 25.894531 17.050781 26 16.539063 26 16 C 26 15.460938 25.894531 14.949219 25.8125 14.4375 L 28.0625 12.46875 L 28.65625 11.9375 L 28.25 11.21875 L 26.25 7.78125 L 25.84375 7.0625 L 25.0625 7.3125 L 22.15625 8.3125 C 21.375 7.683594 20.515625 7.15625 19.5625 6.78125 L 18.96875 3.8125 L 18.8125 3 Z M 14.8125 5 L 17.1875 5 L 17.6875 7.59375 L 17.8125 8.1875 L 18.375 8.375 C 19.511719 8.730469 20.542969 9.332031 21.40625 10.125 L 21.84375 10.53125 L 22.40625 10.34375 L 24.9375 9.46875 L 26.125 11.5 L 24.125 13.28125 L 23.65625 13.65625 L 23.8125 14.25 C 23.941406 14.820313 24 15.402344 24 16 C 24 16.597656 23.941406 17.179688 23.8125 17.75 L 23.6875 18.34375 L 24.125 18.71875 L 26.125 20.5 L 24.9375 22.53125 L 22.40625 21.65625 L 21.84375 21.46875 L 21.40625 21.875 C 20.542969 22.667969 19.511719 23.269531 18.375 23.625 L 17.8125 23.8125 L 17.6875 24.40625 L 17.1875 27 L 14.8125 27 L 14.3125 24.40625 L 14.1875 23.8125 L 13.625 23.625 C 12.488281 23.269531 11.457031 22.667969 10.59375 21.875 L 10.15625 21.46875 L 9.59375 21.65625 L 7.0625 22.53125 L 5.875 20.5 L 7.875 18.71875 L 8.34375 18.34375 L 8.1875 17.75 C 8.058594 17.179688 8 16.597656 8 16 C 8 15.402344 8.058594 14.820313 8.1875 14.25 L 8.34375 13.65625 L 7.875 13.28125 L 5.875 11.5 L 7.0625 9.46875 L 9.59375 10.34375 L 10.15625 10.53125 L 10.59375 10.125 C 11.457031 9.332031 12.488281 8.730469 13.625 8.375 L 14.1875 8.1875 L 14.3125 7.59375 Z M 16 11 C 13.25 11 11 13.25 11 16 C 11 18.75 13.25 21 16 21 C 18.75 21 21 18.75 21 16 C 21 13.25 18.75 11 16 11 Z M 16 13 C 17.667969 13 19 14.332031 19 16 C 19 17.667969 17.667969 19 16 19 C 14.332031 19 13 17.667969 13 16 C 13 14.332031 14.332031 13 16 13 Z"/></svg>
               </span>
          <span class="txt">تنظیمات</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <span>

<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.18 19.18">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path
          d="M11.53,13.02c-.5,0-.9.4-.9.9v2.19c0,.7-.57,1.27-1.27,1.27H3.07c-.7,0-1.27-.57-1.27-1.27V3.07c0-.7.57-1.27,1.27-1.27h6.29c.7,0,1.27.57,1.27,1.27v1.89c0,.5.4.9.9.9s.9-.4.9-.9v-1.89c0-1.69-1.37-3.07-3.07-3.07H3.07C1.37,0,0,1.38,0,3.07v13.04c0,1.69,1.37,3.07,3.07,3.07h6.29c1.69,0,3.07-1.38,3.07-3.07v-2.19c0-.5-.4-.9-.9-.9Z"/>
      <path
          d="M18.91,8.93l-3.2-3.2c-.35-.35-.91-.35-1.26-.01-.36.35-.35.94,0,1.3l1.67,1.67h-7.8c-.5,0-.9.4-.9.9s.4.9.9.9h7.8l-1.68,1.68c-.35.35-.35.92,0,1.27s.92.35,1.27,0h0l3.2-3.2c.36-.36.36-.95,0-1.31,0,0,0,0,0,0h0Z"/>
    </g>
  </g>
</svg>
               </span>
          <span class="txt">خروج</span>
        </router-link>
      </li>
    </ul>

  </aside>
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

.dock {
  position: absolute;
  top: 50%;
  width: 15px;
  height: 60px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &.active {
    transform: translateX(-220px);
  }

  &.rotated {
    span {
      rotate: 180deg;
      margin-left: 0;
      margin-right: 8px;
    }
  }

  span {
    transition: all 0.3s ease-in-out;
    margin-left: 8px;
    width: 100%;
    display: flex;
  }
}

aside {
  user-select: none;
  position: absolute;
  background: var(--lod);
  min-width: 0;
  width: 0;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  box-shadow: -1px 1px 2px 0 var(--boxShadow);
  visibility: hidden;

  h5 {
    margin: 20px 15px 20px 20px;
    font-family: irsans-light;
    color: var(--lightTextColor);
    font-size: 0.7em;
    display: flex;
    align-items: center;

    &:first-child {
      margin-top: 30px;
    }

    span {
      display: block;
      width: 100%;
      height: 0.1pc;
      background: #cfcfcf;
      margin-right: 10px;

      &:first-child {
        width: 10%;
        margin-left: 10px;
      }
    }
  }

  &.pinned {
    position: relative;
  }


  &.active {
    min-width: 220px;
    width: 220px;
    opacity: 1;
    visibility: visible;
  }

  ul {

    &.lastLevel {
      flex: 1;
      padding: 0 0 20px 0;

    }

    li {
      position: relative;


      &:first-child {
        a, .combo {
          padding-top: 0;
        }
      }

      a, .combo {
        display: flex;
        align-items: center;
        padding: 12px 22px;
        cursor: pointer;
        overflow: hidden;

        span:has(svg) {
          min-width: 18px;
          min-height: 22px;
          display: flex;
          align-items: center;

        }

        span {
          font-size: 0.7em;
          color: var(--lightTextColor);

          svg {
            fill: var(--lightTextColor);

            rect, polyline {
              stroke: var(--lightTextColor) !important;
            }
          }

          &:has(svg):last-child {
            rotate: 90deg;
          }

          &.txt {
            flex: 1;
            padding-right: 10px;
            font-family: irsans-bold;
          }
        }

        span:has(svg):last-child {
          max-width: 15px;
          min-width: 15px;
        }
      }
    }
  }
}
</style>