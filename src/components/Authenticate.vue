<template>
<div class="page-container" >
    <!-- <div :style="{'background-image':'url(http://krisaru.com/wp-content/uploads/2011/11/background-website-light-blue-wallpapers-background2.jpg)'}">  -->
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
            
                <form id = "loginForm">
                    <h3>Login</h3>
                    <label>Email:</label>
                    <input class = "form-control" type = "email" placeholder="Email" v-model="email"/>
                    <label>Password:</label>
                    <input class = "form-control" type = "password" placeholder="Password" v-model="pass"/>
                    <div class="alert alert-danger" role="alert" v-if="isError">
                    {{msgOutput}}
                    </div>
                    <div class="alert alert-success" role="alert" v-if="isSuccess">
                    Success!
                    </div>
                    <button class = "btn" @click = login>Login</button>
                </form>
                <div id ="loginActionContainer">
                    Don't have an account? Click  <a style = "color:blue" href = "#" @click = changePage>here</a> to join us today!
                </div>
                
            </div>

        </div>
    <!-- </div> -->
</div>
</template>

<script>
import mixin from "../mixin"
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
        this.getUserType();
        if((this.usertype === "employer")||(this.usertype === "employee")){
            this.$router.push("/home")
        }
    },
    
    methods:{
        login(){
            if(this.status ==="login"){
                if(!this.validateEmail(this.email)){
                    this.isError = true
                    this.msgOutput = "Invalid email."
                    
                }
                if(this.pass ===""){
                    this.isError = true
                    this.msgOutput = "Password cannot be empty."
                }
                else{
                // check if account exists
                var match = this.accountList.filter(
                    account => account.email === this.email
                )
                console.log(match.length)

                // check if any match
                if(match.length === 0){
                    // this.errorMsg = "No such account exists"
                    this.isError = true
                    this.msgOutput = "No such account exists"
                }
                else{
                    // check if pass is correct
                    if(match[0].password !== this.pass ){
                        //  wrong pass
                    this.isError = true
                    this.msgOutput = "Wrong password"
                    }
                    else{
                    this.isError = false
                    this.isSuccess = true
                    this.email = ""
                    this.pass = ""
                    console.log("yay")
                    sessionStorage.setItem("loggedUser",
                    JSON.stringify(match[0]))
                    this.loggedUser =  JSON.parse(sessionStorage.loggedUser)
                    this.$router.push("/home")
                    }
                    
                
                }

                // this.isError = false
                // this.isSuccess = true
                // this.email = ""
                // this.pass = ""

            }
                // check for email and pass
            }
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
        validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    }
}
</script>
<style scoped>
/* universal */
.page-container{
    display: flex;
    align-items: center;
    margin: auto;
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

.btn{
    background: #504DFF;
    color: white;
    margin-top:10px;

    width:180px;
    justify-self: center;
}

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
    background: white;
    color:black;
    padding:10px;
}

</style>