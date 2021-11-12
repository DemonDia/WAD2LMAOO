<template>
    <div class = "page">
        <Navbar :pageType = "'Review'"/>
        <h1 id = "review">Review</h1>
        <div class = "projectsContainer">
            
            <div class = "projectReviewContainer" v-for="(proj,key) in proj_names" v-bind:key="key">
                <div class = " projectName">
                    <h4 >{{key}}</h4>
                </div>

                <div class="album">                    
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6 " v-for="(emp,index) in proj" v-bind:key="index">
                                <router-link class="nav-link" :to="`/review/${emp.name}`">
                                <div class="empCard shadow-sm">
                                    <img :src="emp.image" width="100%" height="225" background="#55595c" color="#eceeef" class="card-img-top rounded" text="Thumbnail" >
                                    <div class="inline pt-3">
                                        <small>{{emp.name}}</small><br>
                                        <small>{{emp.position}}</small>
                                    </div>
                                </div>
                                </router-link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    margin-bottom: 50px;
    width: 90vw;
    margin: 10px auto;
    align-items: center;
}
.projectName{
    background: black;
    color: white;
    margin-bottom: 30px;
    padding: 10px;
    border-radius:10px;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
}

.empCard {
    width: 270px;
    margin: 20px auto;
    height: 320px
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