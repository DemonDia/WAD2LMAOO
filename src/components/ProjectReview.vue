<template>
    <div class = "page">
        <Navbar/>
        <div class = "projectsContainer">
            <ProjectToReview/>
            <ProjectToReview/>
            <ProjectToReview/>
            <ProjectToReview/>
            <ProjectToReview/>

        </div>
    </div>
</template>
<script>
import ProjectToReview from "./ProjectToReview.vue";
import Navbar from "./Navbar.vue";
export default {
    name:"ProjectReview",
    components:{
        ProjectToReview,
        Navbar
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
</style>