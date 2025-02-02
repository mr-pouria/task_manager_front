<script>
export default {
  name: "LoginBox",
  props: ["preload"],
  data() {
    return {
      mappedData: [],
      temp: []
    }
  },
  watch: {
    preload: {
      handler() {
        this.mappedData = []
        this.temp = []
        this.preload.filter((itm) => itm.flag).forEach((item) => {
          item.fields.forEach((field) => {
            if (field.name !== undefined) {
              this.mappedData.push({name: field.name, value: field.value})
            }
          })
          if (item.isNeedPreviousData) {
            this.preload.filter((i) => i.id === item.prevId).forEach((j) => {
              j.fields.forEach((fld) => {
                if (fld.name !== undefined) {
                  this.temp.push({name: fld.name, value: fld.value})
                }
              })
            })
          }
        })
      },
      deep: true
    }
  }
}
</script>

<template>
  <div class="login-box" v-for="(item , index) in preload.filter((itm)=> itm.flag)" :key="index">
    <h1>{{ item.title }}</h1>
    <form @submit.prevent="item.buttons[item.mainBtnFunction].onClick(mappedData , temp)">
      <div class="holder" v-for="(itm , inx) in item.fields">
        <label>{{ itm.title }}</label>
        <div class="icons" v-if="itm.icons">
          <img v-for="icon in itm.icons" :width="icon.width" :height="icon.height" @click="icon.onClick(icon , itm)"
               :src="require(`../assets/icons/${icon.fileName}`)" alt=""/>
        </div>
        <input :type="itm.inputType" :maxlength="itm.maxLength" :inputmode="item.inputMode"
               @keydown="($event)=>{itm.onInput? itm.onInput($event,itm.value) : null}"
               v-model="itm.value">
      </div>
      <div class="helpers" v-if="item.helperLinks">
        <button type="button" v-for="value in item.helperLinks" @click="value.onClick()">{{ value.title }}</button>
      </div>
      <div class="buttons">
        <button
            :style="{background:q.styleChanging ? 'transparent' : 'var(--primary)',border:q.styleChanging ? '1px solid var(--primary)':'none' , color:q.styleChanging ? 'var(--primary)':''}"
            v-for="(q , a) in item.buttons.filter((k , c) => c !== item.mainBtnFunction)" @click="q.onClick(item.id)">
          {{ q.title }}
        </button>
        <button
            :style="{background:i.styleChanging ? 'transparent' : 'var(--primary)',border:i.styleChanging ? '1px solid var(--primary)':'none' , color:i.styleChanging ? 'var(--primary)':''}"
            v-for="(i , x) in item.buttons.filter((j , z) => z === item.mainBtnFunction)" type="submit">
          {{ i.title }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">

.login-box {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: irsans-bold;
    font-size: 1.3em;
    color: var(--primary);
    margin-bottom: 50px;
  }

  padding: 0 100px;

  form {
    width: 100%;

    .holder {
      width: 100%;
      margin-top: 15px;
      position: relative;

      &:first-child {
        margin-top: 0;
      }

      .icons {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        gap: 5px;
        align-items: center;

        img {
          cursor: pointer;

        }
      }

      label {
        display: block;
        color: var(--lightTextColor);
        font-size: 0.9em;
        margin-bottom: 3px;
      }

      input {
        width: 100%;
        border: none;
        padding: 6px;
        background: var(--lod);
        border-radius: 4px;
        color: var(--lightTextColor);
        font-family: irsans-light;
        font-size: 0.85em;
      }
    }

    .helpers {
      margin-top: 4px;

      button {
        display: block;
        background: transparent;
        border: none;
        font-size: 0.7em;
        color: var(--primary);
        cursor: pointer;
        margin-top: 2px;

        &:first-child {
          margin-top: 0px;
        }
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 20px;

      button {
        width: 100%;
        padding: 6px;
        cursor: pointer;
        font-size: 0.8em;
        background: var(--primary);
        border: none;
        border-radius: 4px;
        color: #ffffff;
        font-family: irsans-regular;
      }
    }
  }
}
</style>