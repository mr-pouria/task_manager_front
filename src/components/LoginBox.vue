<script>
export default {
  name: "LoginBox",
  props: ["preload"]
}
</script>

<template>
  <div class="login-box" v-for="(item , index) in preload.filter((itm)=> itm.flag)" :key="index">
    <h1>{{ item.title }}</h1>
    <form @submit.prevent="item.buttons[item.mainBtnFunction].onClick(item.id)">
      <div class="holder" v-for="(itm , inx) in item.fields">
        <label>{{ itm.title }}</label>
        <input :type="itm.inputType" :inputmode="item.inputMode" @keydown="($event)=>{itm.onInput? itm.onInput($event,itm.value) : null}"
               v-model="itm.value">
      </div>
      <div class="buttons">
        <button :style="{background:q.styleChanging ? 'transparent' : 'var(--primary)',border:q.styleChanging ? '1px solid var(--primary)':'none' , color:q.styleChanging ? 'var(--primary)':''}" v-for="(q , a) in item.buttons.filter((k , c) => c !== item.mainBtnFunction)" @click="q.onClick(item.id)">
          {{ q.title }}
        </button>
        <button  :style="{background:i.styleChanging ? 'transparent' : 'var(--primary)',border:i.styleChanging ? '1px solid var(--primary)':'none' , color:i.styleChanging ? 'var(--primary)':''}"  v-for="(i , x) in item.buttons.filter((j , z) => z === item.mainBtnFunction)" type="submit">
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
      margin-bottom: 15px;

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