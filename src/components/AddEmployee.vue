<template>
    <div class = "page" style="background:#FFFAFA">
        <Navbar :pageType = "'Employees'"/>
        <div class = "add-employee-container">
            <h1 id = "add-emp-header" class="mb-4">Add Employee</h1>
            <div class="row">
            <div class = "col-12 col-md-9 col-lg-7 card onboarding-form mb-5">
                
                <table class = "form-table">
                    <tr>
                        <td id = "impt-info">
                            <table class ="input-table">
                                <tr>
                                    <th>Name:</th>
                                    <td><input type  ="text" placeholder = "Employee Name" class = "form-control" v-model="name"/></td>
                                </tr>
                                <tr>
                                    <th>DOB:</th>
                                    <td ><input type ="date" class = "form-control" v-model="dob"></td>
                                </tr>

                                <tr>
                                    <th>Contact no:</th>
                                    <td>
                                        
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">+65</span>
  <input type ="number" maxlength="8" placeholder = "XXXX XXXX" class = "form-control" v-model="phone_no">
</div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        </td>
                                </tr>
                                <tr>
                                    <!-- <th>Home Address:</th>
                                    <td><input type  ="text" placeholder = "Address" class = "form-control"/></td> -->
                                    
                                    <th>Department:</th>

                                    <td class="text-start">
                                        <select v-model="selected" >
                                            <option disabled value="">Please select a department</option>
                                            <option v-for="dept in departments" v-bind:key="dept.department_id">{{dept.department_name}}</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Email:</th>
                                    <td><input type  ="email" placeholder = "Email" class = "form-control" v-model="email"/></td>
                                </tr>

                                <tr>
                                    <th>Password:</th>
                                    <td>
                                        <input type ="password" placeholder = "Enter password" class = "form-control" v-model="password"/>
                                        <!-- <input type="checkbox" @click="showPw()"> Show Password -->
                                    </td>
                                   
                                </tr>

                                <tr>
                                    <th>Position:</th>
                                    <td><input type="text" placeholder = "Position" class = "form-control" v-model="position"/></td>
                                    <!-- <td><input type="text" placeholder="Position" v-model="position"/></td> -->
                                </tr>

                                <tr>
                                    <th>Photo:</th>
                                    <td id = "add-photo" class="text-start">
                                        <!-- <div class = "card add-photo"> -->
                                            <!-- <img :src="image" width="80px"> -->
                                            <!-- Employee Image -->
                                        <!-- </div> -->
                                        <!-- <input type="file" class="form-control-file" id="exampleFormControlFile1"> -->

                                        <input type="file" @change="uploadImg">
                                        
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                </table>
                <div class = "button-container justify-content-center">
                    <router-link to = "/employees" class = "btn btn-danger
                     fire-btn">Cancel</router-link>
                    <!-- <button class = "btn fire-btn">Cancel</button> -->
                    <button class = "btn view-btn" v-on:click ="submit()">Add</button>
                </div>
            </div>
        </div>
        </div>
    </div>
   
</template>
<script>
import Navbar from "./Navbar.vue"
import mixin from "../mixin"
import firebase from "firebase/compat"
import "firebase/compat/auth"

// import axios from 'axios'

export default {
    name:"AddEmployee",
    components:{
        Navbar
    },
    mixins:[mixin],
    data() {
        return {
            name: '',
            dob: '',
            phone_no: null,
            user_id: '',
            email: '',
            password: '',
            // department: '',
            position: '',
            num: 0,
            departments: [],
            selected: "",
            btnText : "",
            image:null,

            selectedFile: null
        }
    
    },
    methods:{

        // showPw(){
        //     console.log(this.password)
            // if(this.type === 'password') {
            //     this.type = 'text'
            //     this.btnText = 'Hide Password'
            // } 
            // else {
            //     this.type = 'password'
            //     this.btnText = 'Show Password'
            // }
        // },

        uploadImg(e){
            console.log(e)
            let file = e.target.files[0]
            
            var storageRef = firebase.storage().ref('employees/'+file.name)

            let task = storageRef.put(file)

            task.on('state_changed', snapshot => {
                console.log(snapshot)
            }, (error) => {
                console.log(error)
            },() =>{
                task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.image = downloadURL
                })
            })
        },

        // previewImage(event){
        //     this.uploadValue=0;
        //     this.picture=null;
        //     this.imageData=event.target.files[0]
        // },
 validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
},
        submit(){
            // firebase
            // .auth()
            // .createUserWithEmailAndPassword(this.email, this.password)
            // .then(data => {
            //     console.log(data)
            // });
            // var myref = firebase.database().ref('/users').push()
            // var key = myref.key;


// validation 




           // dob
            let date = this.dob.split("-");
            console.log(this.dob)
            date = new Date(date[0],date[1]-1,date[2])
            console.log(date)

            let currDate = new Date()
            console.log(currDate)





// department cannot be blank
// email must b
if(this.name === ""){
    alert("Name cannot be empty")
}
else if(this.dob === ""){
    alert("Date of birth cannot be empty")
}
else if(date > currDate){
    alert("Invalid date!")
}
else if(!this.phone_no){
    alert("Phone number cannot be empty")
}
else if(this.phone_no.toString().length !== 8){
    alert("Phone number is invalid/Not a Singaporean number!")
}
else if(!this.selected){
    alert("Department cannot be empty")
}
else if(this.selected === "Management"){
    alert("Department cannot be management")
}
else if(this.email === ""){
    alert("Email cannot be empty")
}
else if(this.validateEmail(this.email)=== false){
    alert("Please use a valid email")
}
else if(this.password === ""){
    alert("Password cannot be empty")
}
else if(this.position === ""){
    alert("Position cannot be empty")
}
else if(this.position === "Project Manager"){
    alert("Position cannot be Project Manager")
}
else{



    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((userCredential)=>{
        var key = userCredential.user.uid
    var newData = {
        current_pts: 0,
        department_id: this.selected,
        email: this.email,
        employment_type: "Full Time",
        name: this.name,
        password: this.password,
        phone_no: this.phone_no,
        position: this.position,
        user_id: key,
        user_type: "employee",
        image: this.image
    }


                var updates = {};
            updates['/users/' + key] = newData;

            firebase.database().ref().update(updates)

            // this.num++
            firebase.auth().signInWithEmailAndPassword("amy_tan@gmail.com", "77jtdef0")

            this.$router.push("/employees")



    }
    ).catch((error)=>{
        console.log(error.code)
        console.log(error.message)
    })

}
            
            // this.picture=null;
            // const storageRef=firebase.storage().ref('${this.imageData.name}').put(this.imageData);
            // storageRef.on('state_changed', snapshot => {
            //     this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100
            // }, error=>{console.log(error.message)},
            // ()=>{this.uploadValue=100;
            // storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            //     this.picture=url;
            // })})

            // const fd = new FormData();
            // fd.append('image', this.selectedFile, this.selectedFile.name)

            // axios.post('https://projeck-aff0e-default-rtdb.asia-southeast1.firebasedatabase.app/users', fd)
            // .then(res => {
            //     console.log(res)
            // });
        

        },
        onFileChange() {
            const reader = new FileReader()
            reader.readAsDataURL(this.file)
            reader.onload = e => {
                this.image = e.target.result
                console.log(this.image)
            }
        },
    },
      beforeMount(){
          console.log(firebase.auth())
  },
    created() {
        firebase.database().ref('department/').on('value', (snapshot) => {
            this.departments = []
            snapshot.forEach((childSnapshot) => {
                var dept = childSnapshot.val();
                this.departments.push(dept);
            });
        }); 
    }

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
    /* max-width: 100%; */
    height: auto;
    /* width: auto; */
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
    overflow: hidden;
    
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
    /* width: 50%; */
    /* padding:10px; */
    align-items: center;
    /* max-width: 100%; */
    /* width: auto; */
    
}

@media (max-width: 800px) {
    .onboarding-form{
        width: auto;
    }
}

/* form */
.form-table{
    width:100%;
    
}
#impt-info{
    width:60%;
}
.form-table tr td{
    padding:10px;
    width: 80%
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
    text-align: left;
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
    color: white;
    background:#504DFF;
    margin: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.fire-btn{
    border-radius: 5px;
    width:100px;
    padding:10px;
    color: white;
    margin: 15px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);

}
</style>