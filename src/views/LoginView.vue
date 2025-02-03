<script>
import LoginBox from "@/components/LoginBox.vue";
import SERVER from "@/server"
import {createToast} from "mosha-vue-toastify";
import {useStore} from "@/pinia";
export default {
  name: "LoginView",
  components: {LoginBox},
  setup(){
    const store = useStore()

    return {store}
  },

  methods: {
    flagConverter(id) {
      let current = id
      for (let i = 0; i < this.preload_data.length; i++) {
        if (this.preload_data[i].id === current) {
          this.preload_data[i].flag = true
        } else {
          this.preload_data[i].flag = false
        }
      }
    },
    reset(){
      this.preload_data = [
        {
          id: 1,
          flag: true,
          title: "ورود | ثبت نام",
          isNeedPreviousData:false,
          prevId:null,
          fields: [
            {
              title: "شماره همراه", name:"phoneNumber" ,maxLength:11 , value: "", inputType: "text", inputMode: "numeric" , onInput: (event, value) => {
                this.numberValidation(event, value, 11, "phone")
              }
            }
          ],
          mainBtnFunction: 0,
          buttons: [
            {
              title: "مرحله بعد", onClick: (mappedData) => {
                this.checkPhoneNumber(mappedData)
              }
            },
          ],

        },


        {
          id: 2,
          flag: false,
          title: "ثبت نام",
          isNeedPreviousData:true,
          prevId:1,
          fields: [
            {
              title: "کد پیامک شده را وارد نمایید", name:"code" ,maxLength:6 , value: "", inputType: "text", onInput: (event, value) => {
                this.numberValidation(event, value, 6, "code")
              }
            }
          ],
          mainBtnFunction: 0,
          buttons: [
            {
              title: "مرحله بعد", name:"code" ,onClick: (mappedData , temp) => {
                this.checkVCode(mappedData , temp)
              },
            },

            {
              title: "ویرایش شماره", styleChanging:true , onClick: (id) => {
                this.editPhoneNumber()
              },
            },

          ]
        },


        {
          id: 3,
          flag: false,
          title: "ثبت نام",
          fields: [
            {title:"نام" , value: "" ,name: "firstName", maxLength:50 ,inputMode: "text" , inputType: "text" , onInput:null },
            {title:"نام خانوادگی" , name: "lastName", value: "" , maxLength:50 , inputMode: "text" , inputType: "text" , onInput:null },
            {title:"رمز عبور" , name: "password", value: "" ,
              icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ]
              , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null },
            {title:"تکرار رمز عبور" , name:"reEnterPassword",value: "" , icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null, }
          ],
          mainBtnFunction: 0,
          isNeedPreviousData:true,
          prevId: 1,
          buttons: [
            {title: "ثبت نام" , onClick:(data , temp)=>{this.register(data , temp)}},
            {title: "انصراف" , onClick:()=>{this.flagConverter(1)} , styleChanging:true},
          ]
        },


        {
          id:4,
          flag:false,
          title:"ورود",
          fields: [
            {title:"رمز عبور خود را وارد نمایید",  icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , maxLength:100 , inputType: "password" , inputMode: "text" , onInput: null}
          ],
          helperLinks:[
            {title:"رمز عبور خود را فراموش کرده اید؟" , onClick:(data , temp)=>{this.forgotPassword(data , temp)}}
          ],
          mainBtnFunction: 0,
          buttons: [
            {title:"ورود" , onClick:()=>{}},
            {title:"مرحله قبل", onClick:()=>{},styleChanging: true}
          ]
        },


        {
          id: 5,
          flag: false,
          title: "بازیابی رمز عبور",
          fields: [
            {title:"رمز عبور" ,  icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , value: "" , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null },
            {title:"تکرار رمز عبور" ,   icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , value: "" , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null }
          ],
          mainBtnFunction: 0,
          buttons: [
            {title: "تایید"  ,onClick:(id)=>{this.register(id)}},
            {title: "انصراف" , onClick:()=>{} , styleChanging:true},
          ]
        },

      ]
    },
    getDataFromMappedData(mapped , name){
     return mapped.filter((tmp) => tmp.name === name)[0].value
    },
    numberValidation(event, value, length, type) {
      if ((value.length === 0 && event.key !== "0" && event.key !== "Tab" && event.key !== "Enter" && type === "phone") || !((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) && !(event.key === "Backspace" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Tab" || event.key === "Enter") && (!event.ctrlKey) && (value.length >= length && !(event.key === "Backspace" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Tab" && event.key === "Enter") && (!event.ctrlKey))) {
        event.preventDefault()
        return null
      }
    },
    sendVCode(phone) {
      SERVER.sendVerificationCode(phone)
          .then((res)=>{
            createToast(res.data.msg)
          })
          .catch((err)=>{})
    },
    checkVCode(data , temp){
      SERVER.checkValidationCode(this.getDataFromMappedData(temp , "phoneNumber"),this.getDataFromMappedData(data , "code"))
          .then((res)=> {
              this.hashCode = res.data.data.hashCode
              this.flagConverter(this.toGoAfterValidation)
          })
          .catch((err)=>{

          })
    },
    checkPhoneNumber(data) {
      try {
        SERVER.isRegisterOrNot(this.getDataFromMappedData(data , "phoneNumber"))
            .then((res)=>{
              if (res.data.data.isRegistered) {
                this.flagConverter(4)
              } else {
                this.flagConverter(2)
                this.sendVCode(this.getDataFromMappedData(data , "phoneNumber"))
              }

            })
            .catch((err)=>{

            })

      }catch (e) {
        createToast("تمامی فیلد هارو پر کن")
      }
    },
    editPhoneNumber() {
      this.flagConverter(1)
    },
    register(data , temp){
      if (this.getDataFromMappedData(data, "password") !== this.getDataFromMappedData(data,"reEnterPassword")) {
        return createToast("خطا! مغایرت در رمز و تکرار رمز عبور")
      }
      SERVER.register(this.getDataFromMappedData(temp, "phoneNumber") , this.getDataFromMappedData(data , "firstName") , this.getDataFromMappedData(data , "lastName") , this.getDataFromMappedData(data,"password") , this.hashCode)
          .then((res)=>{
            localStorage.setItem("token" , res.data.data.token)
            this.store.isAuthenticated = true
            this.$router.push("/")
          })
          .catch((err)=>{

          })
    },
    forgotPassword(data , temp){
      this.flagConverter(2)
      this.toGoAfterValidation = 5
      this.sendVCode(this.getDataFromMappedData(temp , "phoneNumber"))
    },
    togglePassword(param , input) {
      param.fileName === 'visibility.svg' ? param.fileName = 'visibility_off.svg' : param.fileName = 'visibility.svg'; param.fileName === 'visibility.svg' ? input.inputType = 'password' : input.inputType = 'text'
    },
    login(data , temp){
      SERVER.login(this.getDataFromMappedData(temp , "phoneNumber") , this.getDataFromMappedData(data , "password"))
          .then((res)=>{
            this.store.isAuthenticated = true
            localStorage.setItem("token" , res.data.data.token)
            this.$router.push("/")
          })
          .catch((res)=>{

          })
    },
    changeUserPassword(data , temp){
      SERVER.changePassword(this.getDataFromMappedData(temp , "phoneNumber") , this.hashCode , this.getDataFromMappedData(data , "password"))
          .then((res)=>{
            this.flagConverter(1)
            createToast(res.data.msg)
          })
          .catch((err)=>{

          })
    }


  },
  data() {
    return {
      hashCode:null,
      toGoAfterValidation:3,
      preload_data: [
        {
          id: 1,
          flag: true,
          title: "ورود | ثبت نام",
          isNeedPreviousData:false,
          prevId:null,
          fields: [
            {
              title: "شماره همراه", name:"phoneNumber" ,maxLength:11 , value: "", inputType: "text", inputMode: "numeric" , onInput: (event, value) => {
                this.numberValidation(event, value, 11, "phone")
              }
            }
          ],
          mainBtnFunction: 0,
          buttons: [
            {
              title: "مرحله بعد", type:"submit" , onClick: (mappedData) => {
                this.checkPhoneNumber(mappedData)
              }
            },
          ],

        },
        {
          id: 2,
          flag: false,
          title: "احراز هویت",
          isNeedPreviousData:true,
          prevId:1,
          fields: [
            {
              title: "کد پیامک شده را وارد نمایید", name:"code" ,maxLength:6 , value: "", inputType: "text", onInput: (event, value) => {
                this.numberValidation(event, value, 6, "code")
              }
            }
          ],
          mainBtnFunction: 0,
          buttons: [
            {
              title: "مرحله بعد", name:"code" , type:"submit" , onClick: (mappedData , temp) => {
                this.checkVCode(mappedData , temp)
              },
            },

            {
              title: "ویرایش شماره",  type:"button" , styleChanging:true , onClick: (id) => {
                this.editPhoneNumber()
              },
            },

          ]
        },
        {
          id: 3,
          flag: false,
          title: "ثبت نام",
          fields: [
            {title:"نام" , value: "" ,name: "firstName", maxLength:50 ,inputMode: "text" , inputType: "text" , onInput:null },
            {title:"نام خانوادگی" , name: "lastName", value: "" , maxLength:50 , inputMode: "text" , inputType: "text" , onInput:null },
            {title:"رمز عبور" , name: "password", value: "" ,
              icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ]
              , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null },
            {title:"تکرار رمز عبور" , name:"reEnterPassword",value: "" , icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null, }
          ],
          mainBtnFunction: 0,
          isNeedPreviousData:true,
          prevId: 1,
          buttons: [
            {title: "ثبت نام" , type:"submit" ,  onClick:(data , temp)=>{this.register(data , temp)}},
            {title: "انصراف" , type:"button" ,  onClick:()=>{this.flagConverter(1);this.reset()} , styleChanging:true},
          ]
        },
        {
          id:4,
          flag:false,
          title:"ورود",
          isNeedPreviousData:true,
          prevId: 1,
          fields: [
            {title:"رمز عبور خود را وارد نمایید", name:"password" ,icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , maxLength:100 , inputType: "password" , inputMode: "text" , onInput: null}
          ],
          helperLinks:[
            {title:"رمز عبور خود را فراموش کرده اید؟" , onClick:(mapped , temp)=>{this.forgotPassword(mapped , temp)}}
          ],
          mainBtnFunction: 0,
          buttons: [
            {title:"ورود" , type:"submit" ,  onClick:(mapped,temp)=>{this.login(mapped,temp)}},
            {title:"مرحله قبل", type:"button" , onClick:()=>{this.flagConverter(1);this.reset()},styleChanging: true}
          ]
        },


        {
          id: 5,
          flag: false,
          title: "بازیابی رمز عبور",
          isNeedPreviousData:true,
          prevId:1,
          fields: [
            {title:"رمز عبور" , name:"password" , icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , value: "" , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null },
            {title:"تکرار رمز عبور" , name: "reEnterPassword" , icons:[
                {fileName:"visibility.svg" , width:20 , height: 20 , onClick:(param , input)=>{this.togglePassword(param , input)}},
              ] , value: "" , maxLength:100 , inputMode: "text" , inputType: "password" , onInput:null }
          ],
          mainBtnFunction: 0,
          buttons: [
            {title: "تایید"  , type:"submit" , onClick:(mapped , temp)=>{this.changeUserPassword(mapped , temp)}},
            {title: "انصراف" , type:"button" ,  onClick:()=>{this.flagConverter(1);this.reset()} , styleChanging:true},
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