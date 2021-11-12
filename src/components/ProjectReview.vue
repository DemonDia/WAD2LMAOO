<template>
    <div class = "page">
        <Navbar :pageType = "'Review'"/>
        <h1 id = "review">Review</h1>
        <div class = "projectsContainer">
            <!-- <ProjectToReview/>
            <ProjectToReview/> -->
            <!-- <ProjectToReview/>
            <ProjectToReview/>
            <ProjectToReview/> -->
            
            <div class = "projectReviewContainer" v-for="(proj,key) in proj_names" v-bind:key="key">
                <div class = " projectName mx-3">
                    <h4 >{{key}}</h4>
                </div>
                <!-- <div class = "projectMembers "> -->
                    <div class="album">
                                <div class="container">
                                 <div class="row">   
                    
                        <!-- <main role="main" class="d-inline-flex emp_card"> -->
                                
                                        <div class="col-xl-3 col-lg-4 col-md-6 "><router-link class = "nav-link" v-for="(emp,index) in proj" v-bind:key="index"  :to="`/review/${emp.name}`">
                                            <div class="card shadow-sm">
                                                <img :src="emp.image" width="100%" height="225" background="#55595c" color="#eceeef" class="card-img-top" text="Thumbnail" >
                                                <div class="inline pt-3">
                                                    <h6>{{emp.name}}</h6>
                                                    <small>{{emp.position}}</small>
                                                </div>

                                                <div class="card-body">
                                                <p class="inline card-text">          
                                                    <!-- enter anything here -->
                                                </p>
                                                </div>
                                            </div>
                                        </router-link></div>
                               

                        <!-- </main> -->
                    </div>
                         </div>
                                
                            </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>
<script>
// import ProjectToReview from "./ProjectToReview.vue";
import mixin from "../mixin"
import Navbar from "./Navbar.vue";
import firebase from "firebase/compat"
export default {
    name:"ProjectReview",
    components:{
        // ProjectToReview,
        Navbar
    },
    mixins:[mixin],
    //       beforeMount(){
    //    this.getUserType()
    //     if(this.usertype != "employer"){
    //         this.$router.push("/")
    //     }
        // else{
        //     this.$router.push("/authenticate")
        // }
//   },
    data() {
        return {
            proj_names: {}
        }
    },
    created() {
        firebase.database().ref('projects/').on('value',(snapshot) => {
            var names = []
            this.project_name = {}
            snapshot.forEach((childSnapshot) => {
                var proj = childSnapshot.val();
                this.proj_names[proj.project_name] = [];
                firebase.database().ref('tasks/').on('value', (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        var task = childSnapshot.val();
                        if (task.project_name == proj.project_name && !names.includes(task.user_name)) {
                            names.push(task.user_name);
                            // console.log(names)
                            firebase.database().ref().child("users").orderByChild("user_id").equalTo(task.user_id).on("value", function(snapshot) {
                                if (snapshot.exists()) {
                                    console.log("exists");
                                }
                                else {
                                    console.log("doesn't exist");
                                    firebase.database().ref('tasks/').on('value', (snapshot) => {
                                        snapshot.forEach((childSnapshot) => {
                                            var user = childSnapshot.val();
                                            if (user.user_id == task.user_id) {
                                                var key = user.task_id
                                                firebase.database().ref('tasks/' + key).remove()
                                            }
                                            
                                        })
                                    })
                                }
                            });
                            firebase.database().ref('users/' + task.user_id).on('value', (snapshot) => {
                                var user = snapshot.val();
                                this.proj_names[proj.project_name].push(
                                    {
                                        name: task.user_name, 
                                        position: user.position, 
                                        image: user.image
                                    }
                                )
                            });
                        }
                    })
                })
                names = []
            })
            
        });
        console.log(this.proj_names)
    }
}
</script>
<style>
.page{
        min-height: 100vh;
        height:auto;
        /* width:100%; */
        /* background:rgba(248, 248, 248, 1); */
        /* max-width:100vw; */
}
.projectsContainer{
    margin-top: 80px;
    display: grid;
    align-items:flex-start;
    height:100%;
}

.projectReviewContainer{
    display:block;
    /* height:400px; */
    margin-bottom: 50px;
    width: 90vw;
    margin: 10px auto;
    align-items: center;
}
.projectName{
    display: block;
    /* max-width:50%; */
    background: black;
    color: white;
    /* background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%); */
    /* margin:10px; */
    /* margin-left: 15px; */
    margin-bottom: 30px;
    padding: 10px;
    border-radius:10px;
    height:13%;
}
.projectMembers{
    display: flex;
    /* background:blue; */
    /* max-width: 90%; */
    /* margin: 10px; */
    height: 50%;
    overflow-x: None;
    
}

/* h3{
    height: fit-content;
    background: #6B8AFA;
    padding:5px;
    border-radius: 10px;
    align-self: start;

} */
.project-member{
    width:200px;
    /* height: 100%; */
    margin-left:10px;
    flex-shrink: 0;
    padding:5px;
    display: grid;

    
    border-radius: 10px 10px 0px 0px;

    /* position: fixed; */
}
.review-btn{
padding:10px;
height: fit-content;
/* height: 60px; */
border:none; 
background: #6B8BFA;
font-size:20px;
color: white;
align-self: end;
}

.card {
    width: 270px;
    margin: 20px auto;
    height: 500px;
}

.card-img-top {
    width: 268px;
    object-fit: cover;
}

#review{
    width: max-content;
    margin: auto;
    margin-top: 80px;
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
</style>