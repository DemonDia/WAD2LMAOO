<template>
    <div class = "page">
        <Navbar/>
        <div class = "add-employee-container">
            <h1 id = "add-emp-header"  class="mb-4">Add Employee</h1>
            
            <div class = "card onboarding-form mb-5">
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
                                    <td ><input type ="date" class = "form-control"></td>
                                </tr>

                                <tr>
                                    <th>Contact no:</th>
                                    <td><input type ="number" maxlength="8" placeholder = "+65 XXXX XXXX" class = "form-control"></td>
                                </tr>
                                <tr>
                                    <th>Home Address:</th>
                                    <td><input type  ="text" placeholder = "Address" class = "form-control"/></td>
                                </tr>

                                <tr>
                                    <th>Email:</th>
                                    <td><input type  ="text" placeholder = "Email" class = "form-control"/></td>
                                </tr>

                                <tr>
                                    <th>Password:</th>
                                    <td><input type  ="password" placeholder = "Enter password" class = "form-control"/></td>
                                </tr>

                                <tr>
                                    <th>Comments:</th>
                                    <td><textarea class="textarea" role="textbox"></textarea></td>
                                </tr>

                                <tr>
                                    <th>Photo:</th>
                                    <td id = "add-photo">
                                        <div class = "card add-photo">
                                            <!-- Employee Image -->
                                        </div>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                </table>
                <div class = "button-container justify-content-center">
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

table {
  /* border: 1px solid black; */
  table-layout: fixed;
  width: 200px;
}

td {
  /* border: 1px solid black; */
  width: 100px;
  overflow: hidden;
}
th{
    /* border: 1px solid black; */
    width: 20px;
    overflow: hidden;
}
.card{
    max-width: 100%;
    height: auto;
}


#add-emp-header{
    width: max-content;
    margin: auto;
    /* margin-top: 80px; */
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
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
    width: 50%;
    /* padding:10px; */
    align-items: center;
}

/* form */
.form-table{
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
    padding-right: 8px;
    /* width: 40px; */
}

/* photo */
.add-photo{
    background:white;
    height: 200px;
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
/* #exampleFormControlFile1{
    text-align: right;
} */

/* .view-btn{
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

} */
.view-btn{
    /* background: #6360FF; */
    background: rgb(253, 198, 97);
    border-radius: 5px;
    width:100px;
    padding:10px;
    color: black;
    margin: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.fire-btn{
    border-radius: 5px;
    width:100px;
    padding:10px;
    color: black;
    background:  rgb(255, 153, 153);
    margin: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);

}
</style>