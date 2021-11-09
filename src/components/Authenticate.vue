<template>
<div class="page-container" >
    <div  class = "authenticate-container">
        <div id = "register" v-if="status === 'register'">
            <!-- <h3>Register</h3> -->
        
            <form id = "registerForm">
                <h3>Register</h3>
                <label>Email:</label>
                <input class = "form-control" type = "email" placeholder="Email" v-model="email"/>

                <label>Company:</label>
                <input class = "form-control" type = "text" placeholder="Company name" v-model="compName"/>

                <label>Password:</label>
                <input class = "form-control" min = "8" type = "password" placeholder="Password" v-model="pass"/>

                <label>Confirm Password:</label>
                <input class = "form-control" type = "password" placeholder="Re-enter password" v-model="cfmPass"/>
                <div class="alert alert-danger" role="alert" v-if="isError">
                    {{msgOutput}}
                </div>
                <div class="alert alert-success" role="alert" v-if="isSuccess">
                    Success!
                </div>
                <button class = "btn" @click = register>Sign up</button>
            </form>
            <div id ="registerActionContainer">
            Already have an account? Click  <a style = "color:blue" href = "#" @click = changePage>here</a> to login.
            </div>
        </div>
        <div id = "login" v-else >
            <!-- <h3>Register</h3> -->
        
            <form id = "loginForm" @submit.prevent="Login">
                <img src="../assets/projeck.png" id="form-logo">
                <h2>Welcome to Projeck</h2>
                <p id="sub-header"> Login with your Projeck account</p>
                <label class="my-2">Email:</label>
                <input class = "form-control" type = "email" placeholder="Email" v-model="email"/>
                <label class="my-2">Password:</label>
                <input class = "form-control" type = "password" placeholder="Password" v-model="pass"/>
                <div class="alert alert-danger" role="alert" v-if="isError">
                {{msgOutput}}
                </div>
                <div class="alert alert-success" role="alert" v-if="isSuccess">
                Success!
                </div>
                <button class = "btn" @click="login()">Login</button>
            </form>
            <div id ="loginActionContainer">
                Don't have an account? Click  <a style = "color:black" href = "#" @click = changePage>here</a> to join us today!
            </div>
            
        </div>
    </div>
</div>

</template>

<script>
import mixin from "../mixin"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
export default {
    name:"Authenticate",
    mixins:[mixin],
    data(){
        return{
            status:"login",
            email:"",
            compName:"",
            pass:"",
            cfmPass:"",
            isError:false,
            isSuccess:false,
            // errorMsg:[],
            msgOutput:""
        }
    },
    beforeMount(){
        if((this.usertype === "employer")||(this.usertype === "employee")){
            this.$router.push("/home")
        }
    },
    
    methods:{
        // login(){
        //     if(this.status ==="login"){
        //         if(!this.validateEmail(this.email)){
        //             this.isError = true
        //             this.msgOutput = "Invalid email."
                    
        //         }
        //         if(this.pass ===""){
        //             this.isError = true
        //             this.msgOutput = "Password cannot be empty."
        //         }
        //         else{
        //         // check if account exists
        //         var match = this.accountList.filter(
        //             account => account.email === this.email
        //         )
        //         console.log(match.length)

        //         // check if any match
        //         if(match.length === 0){
        //             // this.errorMsg = "No such account exists"
        //             this.isError = true
        //             this.msgOutput = "No such account exists"
        //         }
        //         else{
        //             // check if pass is correct
        //             if(match[0].password !== this.pass ){
        //                 //  wrong pass
        //             this.isError = true
        //             this.msgOutput = "Wrong password"
        //             }
        //             else{
        //             this.isError = false
        //             this.isSuccess = true
        //             this.email = ""
        //             this.pass = ""
        //             console.log("yay")
        //             sessionStorage.setItem("loggedUser",
        //             JSON.stringify(match[0]))
        //             this.loggedUser =  JSON.parse(sessionStorage.loggedUser)
        //             this.$router.push("/home")
        //             } 
                    
                
        //         }

        //         // this.isError = false
        //         // this.isSuccess = true
        //         // this.email = ""
        //         // this.pass = ""

        //     }
        //         // check for email and pass
        //     }
        // },
        login() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.pass)
            .then(() => {
                // alert('Successfully logged in');
                sessionStorage.setItem("loggedUser",
                    JSON.stringify(this.email))
                    this.loggedUser =  JSON.parse(sessionStorage.loggedUser)
                    this.$router.push("/home")
            })
            .catch(error => {
                console.log(error.code)
                switch (error.code) {
                    case 'auth/invalid-email':
                        this.isError = true
                        this.msgOutput = 'Invalid email'
                        break
                    case 'auth/user-not-found':
                        this.isError = true
                        this.msgOutput = 'No account with that email was found'
                        break
                    case 'auth/wrong-password':
                        this.isError = true
                        this.msgOutput = 'Incorrect password'
                        break
                    default:
                        this.isError = true
                        this.msgOutput = 'Email or password was incorrect'
                        break
                    }
            });
        },
        register(){
            if(this.status ==="register"){
                // check for email, company, password and cfm pass
                  if(!this.validateEmail(this.email)){
                    this.isError = true
                    this.errorMsg.push("Invalid email.")
                    
                }
                 if(this.compName === ""){
                    this.isError = true
                    this.errorMsg.push("Company name cannot be empty.")
                }
                 if(this.pass ===""){
                    this.isError = true
                    this.errorMsg.push("Password cannot be empty.")
                }
                else if(this.pass === this.cfmPass){
                    this.isError = true
                    this.errorMsg.push("Passwords do not match.")
                }
            }
            if(this.isError){
                this.isSuccess = false

                this.msgOutput = this.errorMsg.join(" ")
            }else{
                this.isError = false
                this.isSuccess = true
                
            this.email = ""
            this.compName = ""
            this.pass = ""
            this.cfmPass = ""
            }
        },
        changePage(){
            if(this.status === "register"){
                this.status = "login"
            }
            else{
                this.status = "register"
            }
            this.isError = false
            this.isSuccess = false
            this.email = ""
            this.compName = ""
            this.pass = ""
            this.cfmPass = ""
            this.errorMsg = []
        },
//         validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
    }
}
</script>
<style scoped>
/* universal */
.page-container{
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
}
.alert{
    margin-top:10px;
}
.authenticate-container{
    border-radius: 10px;
    background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%);
    width:60vh;
    /* height:60vh; */
    /* align-self: center; */
    /* margin: auto; */
    /* justify-self: center; */
    color:white;
    box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
}
#form-logo{
    /* width: 50px; */
    max-width: 100%;
    height: auto;
    margin: auto;
    padding-bottom: 20px;
}
#sub-header{
    font-size: 13px;
    color: rgb(240, 240, 240);
}
.btn{
    /* background: #504DFF; */
    background: rgb(253, 198, 97);
    color: black;
    margin-top:10px;
    border: 1px solid black;
    width:180px;
    justify-self: center;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.19);
}
/* btn */
.btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.btn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.btn:hover span {
  padding-right: 25px;
}
.btn:hover span:after {
  opacity: 1;
  right: 0;
}
/* end btn */
label{
    text-align: start;
}
form{
    display: grid;
    /* justify-content: center; */
    padding:30px;
    width:100%;
}
/* register */
#registerForm{
    background: white;
    /* background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%); */
    color: black;
}
#registerActionContainer{
    /* background: white; */
    color:white;
    padding:10px;
}
/* login */
#loginForm h3{
    color: white;
}
#loginForm label{
    
    color: white;
}
#loginActionContainer{
    background: rgb(255, 236, 185);
    color:black;
    padding:7px;
    font-size: 13px;
}


</style>