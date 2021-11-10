<template>
    <div class = "projectReviewContainer">
        <div class = "projectName">
            <h3>Project name</h3>
            
        </div>
        <div class = "projectMembers">
            <router-link class = "nav-link" to="/review/member">
            <ProjectMember/>
            </router-link>
            <router-link class = "nav-link" to="/review/member">
            <ProjectMember/>
            </router-link>
                        <router-link class = "nav-link" to="/review/member">
            <ProjectMember/>
            </router-link>
                        <router-link class = "nav-link" to="/review/member"> 
            <ProjectMember/>
            </router-link>
                        <router-link class = "nav-link" to="/review/member">
            <ProjectMember/>
            </router-link>
                        <router-link class = "nav-link" to="/review/member">
            <ProjectMember/>
            </router-link>

        </div>
    </div>
</template>
<script>

import ProjectMember from "./ProjectMember.vue";
export default {
    name:"ProjectToReview",
    components:{
        ProjectMember
    }
}
</script>
<style>
/* h3{
    color: white;
} */
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
    max-width:20%;
    background: black;
    color: white;
    /* background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%); */
    /* margin:10px; */
    margin-left: 15px;
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
    overflow-x: scroll;
}
</style>