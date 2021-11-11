<template>
    <div class = "page">
        <Navbar/>

        <div class = "add-employee-container">
            <h1 id = "add-emp-header" class="mb-4">Add Employee</h1>

            <div class = "card onboarding-form mb-5">
                
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
                                    <td><input type ="number" maxlength="8" placeholder = "+65 XXXX XXXX" class = "form-control" v-model="phone_no"></td>
                                </tr>
                                <tr>
                                    <!-- <th>Home Address:</th>
                                    <td><input type  ="text" placeholder = "Address" class = "form-control"/></td> -->
                                    
                                    <th>Department:</th>

                                    <td>
                                        <select v-model="selected" >
                                            <option disabled value="">Please select a department</option>
                                            <option v-for="dept in departments" v-bind:key="dept.department_id">{{dept.department_name}}</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Email:</th>
                                    <td><input type  ="text" placeholder = "Email" class = "form-control" v-model="email"/></td>
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
                                    <td id = "add-photo">
                                        <!-- <div class = "card add-photo"> -->
                                            <!-- Employee Image -->
                                        <!-- </div> -->
                                        <!-- <input type="file" class="form-control-file" id="exampleFormControlFile1"> -->

                                        <input type="file" @change="onFileSelected" accept="image/*">
                                        
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                </table>
                <div class = "button-container justify-content-center">
                    <router-link to = "/employees" class = "btn fire-btn">Cancel</router-link>
                    <!-- <button class = "btn fire-btn">Cancel</button> -->
                    <button class = "btn view-btn" v-on:click ="submit()">Add</button>
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
            // image:""

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

        onFileSelected(event){
            console.log(event)
            this.selectedFile = event.target.files[0]
        },

        // previewImage(event){
        //     this.uploadValue=0;
        //     this.picture=null;
        //     this.imageData=event.target.files[0]
        // },

        submit(){
            // firebase
            // .auth()
            // .createUserWithEmailAndPassword(this.email, this.password)
            // .then(data => {
            //     console.log(data)
            // });
            var myref = firebase.database().ref('/users').push()
            var key = myref.key;
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
                image: this.selectedFile.name
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

            const fd = new FormData();
            fd.append('image', this.selectedFile, this.selectedFile.name)

            // axios.post('https://projeck-aff0e-default-rtdb.asia-southeast1.firebasedatabase.app/users', fd)
            // .then(res => {
            //     console.log(res)
            // });
            
            var updates = {};
            updates['/users/' + key] = newData;

            firebase.database().ref().update(updates)

            // this.num++
            this.$router.push("/employees")

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
//       beforeMount(){
//        this.getUserType()
//         if(this.usertype !== "employer"){
//             this.$router.push("/")
//         }
//   },
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