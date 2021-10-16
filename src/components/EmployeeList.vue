<template>
<div class = "page">
    <div class = "employeeContainer">
        <h1>EmployeeList</h1>
        <div class = "filter-container">
            <div><label>Search</label><input type = "text" class = "form=control" placeholder="Search by name:"/></div>
            <div><label>Sort by:</label>
             <select class = "form=control">
                <option>Name</option>
                <option>ID</option>
                <option>Date employed</option>
                <option>ID</option>
            </select>           
            
            </div>
            <div><label>Order:</label>
            <select class = "form=control">
                <option>Ascending</option>
                <option>Descending</option>
            </select>
            </div>
            
        </div>

    </div>

</div>
    
</template>
<script>
export default {
    name:"EmployeeList"

}
</script>
<style>

.page{
    min-height: 100vh;
    width:100%;
    background:rgba(248, 248, 248, 1);
    /* display: flex; */
}
.employeeContainer{
    margin-top:80px;
}
</style>