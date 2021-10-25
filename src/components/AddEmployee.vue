<template>
    <div class = "page">
        <Navbar/>
        <div class = "add-employee-container">
            <h2>Add Employee</h2>
            <div class = "card onboarding-form">
                <table class = "form-table">
                    <tr>
                        <td id = "impt-info">
                            <table class ="input-table">
                                <tr>
                                    <th>Name:</th>
                                    <td><input type  ="text" placeholder = "Employee Name" class = "form-control"/></td>

                                </tr>
                                <tr>
                                    <th>DOB:</th>
                                    <td><input type ="date" class = "form-control"></td>

                                </tr>

                                <tr>
                                    <th>Contact no:</th>
                                    <td><input type ="number" maxlength="8" placeholder = "+65 XXXX XXXX"
                                    class = "form-control"></td>

                                </tr>
                                <tr>
                                    <th>Home Address:</th>
                                    <td><input type  ="text" placeholder = "Address" class = "form-control"/></td>


                                </tr>

                                <tr>
                                    <th>Username:</th>
                                    <td><input type  ="text" placeholder = "Username" class = "form-control"/></td>

                                </tr>

                                <tr>
                                    <th>Password:</th>
                                    <td><input type  ="password" placeholder = "Enter password" class = "form-control"/></td>
                                </tr>
                                <tr>
                                    <th>Comments:</th>
                                    <td><textarea class="textarea" role="textbox"></textarea></td>
                                </tr>
                            </table>


                        </td>
                        <td id = "add-photo">
                            <div class = "card add-photo">
                                <!-- Employee Image -->
                                
                            </div>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </td>
                    </tr>

                </table>
                <div class = "button-container">
                    <router-link to = "/employees" class = "btn fire-btn">Cancel</router-link>
                <!-- <button class = "btn fire-btn">Cancel</button> -->
                <button class = "btn view-btn" v-on:click = "submit">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./Navbar.vue"
import mixin from "../mixin"
export default {
    name:"AddEmployee",
    components:{
        Navbar
    },
    mixins:[mixin],

    methods:{
        submit(){
            this.$router.push("/employees")
        }
    },
      beforeMount(){
       this.getUserType()
        if(this.usertype !== "employer"){
            this.$router.push("/")
        }
  },

}
</script>
<style scoped>
.page{
    min-height: 100vh;
    width:100%;
    background:rgba(248, 248, 248, 1);
    /* display: flex; */
}
.add-employee-container{
    margin-top:80px;
    display: grid;
    align-content: center;
}
.onboarding-form{
    background:#F8F8F8;
    margin: auto;
    width:90%;
    padding:10px;
    align-items: center;
}

/* form */
.form-table{
    /* background:yellow; */
    width:90%;
}
#impt-info{
    width:60%;
}
.form-table tr td{
    padding:10px;
}
/* impt data */
.input-table{
/* width: 60%; */
width: 100%;
/* background:purple; */

}
textarea{
        width: 100%;

}
.input-table tr th{
    text-align: right;
}
/* photo */
.add-photo{
    background:white;
    height: 400px;
}
#add-photo{
    height:100%;
    /* background:purple; */
}

/* buttons */
.button-container{
    display: flex;
    justify-content:space-evenly;
    width:100%;
    margin:10px;

}


.view-btn{
    background: #6360FF;
border-radius: 5px;
width:200px;
padding:10px;
color: white;
margin: 5px;
}
.fire-btn{
  border-radius: 5px;
width:200px;
padding:10px;
color: white;
background:  rgba(147, 7, 7, 1);
margin: 5px;

}
</style>