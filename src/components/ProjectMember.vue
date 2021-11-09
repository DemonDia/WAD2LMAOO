<template>

<div class = "card project-member">
    <h3>Member Name</h3>
    <img src = "../assets/john.png">
    <button type = "button" class = "btn btn primary review-btn">Review </button>
</div>
    
</template>
<script>
export default {
    name:"ProjectMember"
}
</script>
<style scoped>
h3{
    height: fit-content;
    background: #6B8AFA;
    padding:5px;
    border-radius: 10px;
    align-self: start;

}
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
border:none; background: #6B8BFA;
font-size:20px;
color: white;
align-self: end;
}
</style>
