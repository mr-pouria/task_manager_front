import axios from "axios";
const base_url = "http://192.168.100.241:8080/api"
export default {
 isRegisterOrNot(phone) {
     const request = axios({
         url:base_url+"/checkRegisterOrNot",
         method:"POST",
         headers:{
             "Accept":"application/json"
         },
         data:{
             "phoneNumber":phone
         }
     })
     return request
 } ,
 sendVerificationCode(phone) {
     const request = axios({
         url:base_url+"/sendCode",
         method:"POST",
         headers:{
             "Accept":"application/json"
         },
         data:{
             "phoneNumber":phone
         }
     })
     return request
 } ,
 checkValidationCode(phone , code) {
     const request = axios({
         url:base_url+"/checkValidationCode",
         method:"POST",
         headers:{
             "Accept":"application/json"
         },
         data:{
             "phoneNumber":phone,
             "code":code
         }
     })
     return request
 },
 register(phone,fname,lname,password) {
     const request = axios({
         url:base_url+"/register",
         method:"POST",
         headers:{
             "Accept":"application/json"
         },
         data:{
             "phoneNumber":phone,
             "firstName":fname ,
             "lastName":lname,
             "password":password
         }
     })
     return request
 },
 login(phone,password){
     const request = axios({
         url:base_url+"/login",
         method:"POST",
         headers:{
             "Accept":"application/json"
         },
         data:{
             "phoneNumber":phone,
             "password":password
         }
     })
     return request
 }
}