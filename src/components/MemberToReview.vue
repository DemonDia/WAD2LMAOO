<template>
    <div class = "page">
        <Navbar :pageType = "'Review'"/>
        <div class = "review-container card">
            <h2>Reviewing for</h2>
            <div class="row justify-content-center">
                <div class="col-sm-3 mt-4 mb-4 imagepos">
                    <img :src="userimg" id="person-image" class="img-fluid rounded float-start border-2 border-dark person-image" alt="...">
                </div>
                <div class="card col-sm-9 mx-2 mt-4 empDetails"> 
                    <ul class="list-group list-group-flush" >
                        <li class="list-group-item">
                            <div class="my-1 row mx-3">
                                <label class="col-sm-4 col-form-label"><b>Name:</b></label>
                                <div class="col-sm-8 details">{{id}}</div>
                            </div>
                        </li>
                         <li class="list-group-item bg-light">
                            <div class="my-1 row mx-3 ">
                                <label class="col-sm-4 col-form-label"><b>Department:</b></label>
                                <div class="col-sm-8 details">{{details.department_id}}</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="my-1 row mx-3">
                                <label class="col-sm-4 col-form-label"><b>Position:</b></label>
                                <div class="col-sm-8 details">{{details.position}}</div>
                            </div>
                        </li>
                        <li class="list-group-item bg-light">
                            <div class="my-1 row mx-3">
                                <label class="col-sm-4 col-form-label"><b>Employment Type:</b></label>
                                <div class="col-sm-8 details">{{details.employment_type}}</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="my-1 row mx-3">
                                <label class="col-sm-4 col-form-label"><b>Email:</b></label>
                                <div class="col-sm-8 details">{{details.email}}</div>
                            </div>
                        </li>
                        <!-- <li class="list-group-item bg-light">
                            <div class="my-1 row mx-3">
                                <label class="col-sm-4 col-form-label"><b>Password:</b></label>
                                <div class="col-sm-8 details">{{details.password}}</div>
                            </div>
                        </li> -->
                        <li class="list-group-item">
                            <div class="my-1 row mx-3">
                                <label class="col-sm-4 col-form-label"><b>Current Points:</b></label>
                                <div class="col-sm-8 details">{{details.current_pts}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class = "card member-card">
                <h3 class = "member-name">{{id}}</h3>
                <div class = "person-image"><img :src="userimg"></div> 
            </div> -->           
            <table class = "review-form">
                <tr>
                    <th><label class="reviewLabel">Additional Comments: </label></th>
                    <td><textarea class="textarea" role="textbox" placeholder="Goals Accomplished/Areas of Improvement/Additional Comments" v-model="comments"></textarea></td>
                </tr>      

                <tr>
                    <th><label class="reviewLabel">Overall Rating: </label></th>
                    <td>
                        <vue3StarRatings v-model="rating"  v-bind:step = "step" :disableClick = "true"/>
                        
                    </td>
                </tr>            
            </table> 
             <!-- {{rating}} -->
             <div class = "btn-container">
                 <router-link class = 'btn btn-danger reviewBtn' to="/review">
                 Cancel
                 </router-link>
                 <button class=  'btn btn-primary reviewBtn'
                 style = "background:#504DFF"
                 @click="submit(id)">Submit</button>
             </div>
        </div>
    </div>
</template>
<script>
// import Rating from 'v-rating';
import vue3StarRatings from "vue3-star-ratings";
import mixin from "../mixin"
import Navbar from "./Navbar.vue"
import firebase from 'firebase/compat'
export default {
    name:"MemberToReview",
    components:{
        Navbar,
        vue3StarRatings
    },
    props: ['id'],
    mixins:[mixin],
    data(){
        return{
            details: [],
            rating:0,
            comments: "",
            userimg: null,
            step:1
        }
    },
//       beforeMount(){
//        this.getUserType()
//         if(this.usertype !== "employer"){
//             this.$router.push("/")
//         }
//   },

    methods:{
        submit(id){
            console.log(id)
            var myref = firebase.database().ref("reviews/").push()
            var key = myref.key;
            firebase.database().ref('users/').on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    var user = childSnapshot.val();
                    if (id == user.name) {
                        console.log("details",this.userimg)
                        var userid = user.user_id
                        firebase.database().ref('reviews/').push({
                            review_id:key,
                            comments: this.comments,
                            rating: this.rating,
                            user_id: userid
                        })
                    }
                    
                })
            }) 
            alert("You have submitted review for " + this.id); // need get the name of user
            this.$router.push("/review")
        }
    },
    created() {
        
        firebase.database().ref('users/').on('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                var user = childSnapshot.val();
                if (this.id == user.name) {
                    this.userimg = user.image
                    this.details = user
                    
                }
                
            })
        })

    }

}
</script>
<style scoped>

 .page{
        min-height: 100vh;
        width:100%;
        /* background:rgba(248, 248, 248, 1); */
        background: #FFFAFA;
        /* display: flex; */
    }
.review-container{
    /* background:red; */
    margin-top:80px;
    display:grid;
    justify-items: center;
    /* width: min-content; */
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    overflow:hidden;
    /* height: 700px; */
}

/* .empDetails{
    width: 800px;
} */

h2{
    margin:10px;
}
/* member card */
.member-card{
    width:300px;
    border-radius:10px;
}
.person-image{
    width:auto;
    height:200px;
    background: #EFEFEF;
    display: flex;
    justify-content: center;
    overflow: hidden;
    /* object-fit:contain; */

}
.member-name{
    padding:10px;
    background: #6B8AFA;
    border-radius: 10px 10px 0px 0px;
    margin:0px;
    color:white;
}

/* review form */
.review-form{
    /* margin:10px; */
    /* background:orange; */
    /* height:1000px; */
    width:137%;
    margin-top: 30px;
    margin-right: 90px;
    /* padding:20px; */
}

.form-row{
    display: flex;
    align-items: center;
    width:100%;
    justify-content: center;
    margin:10px;
}
textarea{
    resize: both;
}
th{
    text-align: end;
    width:40%;
}
th label{
    margin:10px;
}
td{
    text-align: start;
}
td textarea{
    width: 60%;
    /* margin:10px; */
}
/* .form-row textarea, .form-row label{
    margin:10px;
} */
/* rating */
.vue3-star-ratings__wrapper{
padding: 0;
    margin: 0px;
    width: max-content;    
}

vue3StarRatings{
    margin-left: 0px;
}

/* for button */
.btn-container{
    /* margin-left: 680px; */
    margin-top: 20px;
    /* margin:10px; */
    width:80%;
    /* background: black; */
    display: flex;
    justify-content: center;
    height: 50px;
    margin-bottom: 100px;
    /* justify-content: space-evenly; */
}

.reviewBtn{
    margin-left: 40px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>