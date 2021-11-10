<template>

<main role="main">
    <div class="album bg-light">
    <div class="card shadow-sm">
        <img src="../assets/john.png" width="100%" height="225" background="#55595c" color="#eceeef" class="card-img-top img-fluid" text="Thumbnail" >
        <div class="inline pt-3">
            <h6>John</h6>
            <small>Project Leader</small>
        </div>

        <div class="card-body">
        <p class="inline card-text">          
            <!-- enter anything here -->
        </p>
        </div>
    </div>
    </div>

</main>
    
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
border:none; 
background: #6B8BFA;
font-size:20px;
color: white;
align-self: end;
}
</style>
