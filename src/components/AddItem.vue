<template>
    <div class="card addCard" style="width: 18rem;" data-toggle="modal" data-target="#exampleModal">

  <div class = "card-body">
      <!-- <AccountCheckIcon/> -->
      <div class = "center">
          <div class = "circle">
        <span class="material-icons plusSign">
        add
        </span>
          </div>
          Add Project


      </div>


      </div>

  </div>

</template>
<script>
export default {
    name:"AddItem"
}
</script>
<style scoped>
.addCard{
    color: rgba(113, 152, 255, 1);
    margin:10px;
    border: none;
    border: 5px rgba(113, 152, 255, 1) solid;
}

.circle{
    width:100px;
    height:100px;
    border-radius:100%;
    border: 15px rgba(113, 152, 255, 1) solid;
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    /* position: absolute; */

}
.plusSign{
display: grid;
    font-size: 60px;
    align-content: center;
    font-weight: bolder;
}
.center{
    font-weight: bold;
}
</style>
<style>
.card{
    height:360px;
    
}
.card-body{
    display: grid;
    align-items: center;
    justify-content: center;
}
</style>