<script>
import LoginBox from "@/components/LoginBox.vue";

export default {
  name: "LoginView",
  components: {LoginBox},
  methods: {
    numberValidation(event, value, length, type) {
      if ((value.length === 0 && event.key !== "0" && event.key !== "Tab" && event.key !== "Enter" && type === "phone") || !((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) && !(event.key === "Backspace" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Tab" || event.key === "Enter") && (!event.ctrlKey) || (value.length >= length && !(event.key === "Backspace" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Tab" && event.key === "Enter") && (!event.ctrlKey))) {
        event.preventDefault()
        return null
      } else {
        event.target.style.border = "none"
      }
    },
    checkPhoneNumber(id) {
      console.log(id)
      let current = id + 1
      for (let i = 0; i < this.preload_data.length; i++) {
        if (this.preload_data[i].id === current) {
          this.preload_data[i].flag = true
        } else {
          this.preload_data[i].flag = false
        }
      }
    },
    editPhoneNumber(id) {
      let current = id - 1
      for (let i = 0; i < this.preload_data.length; i++) {
        if (this.preload_data[i].id === current) {
          this.preload_data[i].flag = true
        } else {
          this.preload_data[i].flag = false
        }
      }
    }

  },
  data() {
    return {
      preload_data: [
        {
          id: 1,
          flag: true,
          title: "ورود | ثبت نام",
          fields: [
            {
              title: "شماره همراه", value: "", inputType: "text", inputMode: "numeric" , onInput: (event, value) => {
                this.numberValidation(event, value, 11, "phone")
              }
            }
          ],
          mainBtnFunction: 0,
          buttons: [
            {
              title: "مرحله بعد", onClick: (id) => {
                this.checkPhoneNumber(id)
              }
            },
          ],

        },


        {
          id: 2,
          flag: false,
          title: "ثبت نام",
          fields: [
            {
              title: "کد پیامک شده را وارد نمایید", value: "", inputType: "text", onInput: (event, value) => {
                this.numberValidation(event, value, 6, "code")
              }
            }
          ],
          mainBtnFunction: 0,
          buttons: [
            {
              title: "مرحله بعد", onClick: (id) => {
                this.checkPhoneNumber(id)
              },
            },

            {
              title: "ویرایش شماره", styleChanging:true , onClick: (id) => {
                this.editPhoneNumber(id)
              },
            },

          ]
        },


        {
          id: 3,
          flag: false,
          title: "ثبت نام",
          fields: [
            {title:"نام" , value: "" , inputMode: "text" , inputType: "text" , onInput:null },
            {title:"نام خواندگی" , value: "" , inputMode: "text" , inputType: "text" , onInput:null },
            {title:"رمز عبور" , value: "" , inputMode: "text" , inputType: "password" , onInput:null },
            {title:"تکرار رمز عبور" , value: "" , inputMode: "text" , inputType: "password" , onInput:null }
          ],
          mainBtnFunction: 0,
          buttons: [
            {title: "ثبت نام" , onClick:()=>{}},
            {title: "انصراف" , onClick:()=>{} , styleChanging:true},
          ]
        },

      ]
    }
  }
}
</script>

<template>
  <div class="login-container">
    <div class="wrapper">
      <LoginBox :preload="preload_data"/>
    </div>
    <div class="wrapper">
      <!--      <img src="@/assets/loginImg.png" alt="">-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100wv;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &:first-child {
      width: 35%;
    }

    &:nth-child(2) {
      width: 65%;
    }

    img {
      width: 100%;
      height: 95%;
    }
  }
}
</style>