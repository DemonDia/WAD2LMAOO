<template>
    <div class = "projectReviewContainer">
        <div class = "projectName">
            <h3>Project name</h3>
            
        </div>
        <div class = "projectMembers">
            <ProjectMember/>
            <ProjectMember/>
            <ProjectMember/>
            <ProjectMember/>
            <ProjectMember/>
            <ProjectMember/>

            <ProjectMember/>

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
h3{
    color: white;
}
.projectReviewContainer{
    display: flex;
    height:300px;
    margin:10px;
    width:100%;
    align-items: center;


}
.projectName{
    width:15%;
    background: linear-gradient(57.11deg, #6D9DF8 -4.9%, #6461FF 101.23%, rgba(109, 157, 248, 0.64) 101.24%, rgba(109, 157, 248, 0) 101.24%);
    /* margin:10px; */
    padding:10px;
    border-radius:10px;
    height:100%;
}
.projectMembers{
    display: flex;
    max-width:80%;
    /* background:blue; */
    margin:10px;
    height:100%;
    overflow-x: scroll;
}
</style>