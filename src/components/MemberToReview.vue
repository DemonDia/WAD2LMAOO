<template>
    <div class = "page">
        <!-- <Navbar/> -->
        <div class = "review-container">
            <h2>[Project A] Reviewing for</h2>
            <div class = "card member-card">
                <h3 class = "member-name">Person name</h3>
                <div class = "person-image"></div>
            </div>            
            <!-- <div class = "review-form">
                <div class = "form-row">
                    <label>Goals Accomplished: </label>
                     <textarea class="textarea" role="textbox"></textarea>
                </div>
                <div class = "form-row">
                    <label>Areas of improvement: </label>
                     <textarea class="textarea" role="textbox"></textarea>
                </div>
                <div class = "form-row">
                    <label>Additional Comments: </label>
                     <textarea class="textarea" role="textbox"></textarea>

                </div>

            </div> -->
            <table class = "review-form">
                <tr>
                    <th align="left"><label>Goals Accomplished: </label></th>
                    <td><textarea class="textarea" role="textbox"></textarea></td>
                </tr>

                 <tr>
                    <th><label>Areas of improvement: </label></th>
                    <td><textarea class="textarea" role="textbox"></textarea></td>
                </tr>

                <tr>
                    <th><label>Additional Comments: </label></th>
                    <td><textarea class="textarea" role="textbox"></textarea></td>
                </tr>      

                <tr>
                    <th><label>Overall Rating: </label></th>
                    <td>
                        <vue3StarRatings v-model="rating" v-bind:showControl = null />
                        
                    </td>
                </tr>            
            </table>
             {{rating}}
             <div class = "btn-container">
                 <router-link class = 'btn btn-danger' to="/review">
                 Cancel
                 </router-link>
                 <!-- <button class=  'btn btn-danger'>Cancel</button> -->
                 <button class=  'btn btn-primary'
                 style = "background:#504DFF"
                 v-on:click = "submit">Submit</button>
             </div>
        </div>
    </div>
</template>
<script>
// import Rating from 'v-rating';
import vue3StarRatings from "vue3-star-ratings";
import mixin from "../mixin"
// import Navbar from "./Navbar.vue"
export default {
    name:"MemberToReview",
    components:{
        // Navbar,
        vue3StarRatings
    },
    mixins:[mixin],
    data(){
        return{
            rating:0
        }
    },
      beforeMount(){
       this.getUserType()
        if(this.usertype !== "employer"){
            this.$router.push("/")
        }
  },

    methods:{
        submit(){
            this.$router.push("/review")
        }
    }

}
</script>
<style scoped>

 .page{
        min-height: 100vh;
        width:100%;
        background:rgba(248, 248, 248, 1);
        /* display: flex; */
    }
.review-container{
    /* background:red; */
    margin-top:80px;
    display:grid;
    justify-items: center;
}
h2{
    margin:10px;
}
/* member card */
.member-card{
    width:300px;
    border-radius:10px;
}
.person-image{
    width:100%;
    height:300px;
    background: #EFEFEF;
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
    margin:10px;
    /* background:orange; */
    /* height:1000px; */
    width:80%;
    padding:20px;
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
    margin: 0;
    width: max-content;    
}

/* for button */
.btn-container{
    margin:10px;
    width:80%;
    /* background: black; */
    display: flex;
    justify-content: space-evenly;
}
</style>