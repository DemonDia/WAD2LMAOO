<template>
<div class = "page">
    <Navbar/>
    <div class = "employeeContainer">
        <h1>Employee List</h1>
        <div class = "filter-container">
            <div><label>Search:</label><input type = "text" class = "form=control" placeholder="Search by name:"/></div>
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
        <div class = "employee-container">
            <AddItem :itemType="'employee'" />
                        <div class = "card employee-box">
                <h3>Thomas Tan</h3>
                <table class = "table employee-table">
                    <!-- <tr>
                        <th>Employee Name:</th>
                        <td>Thomas Tan</td>
                    </tr> -->
                    <tr>
                        <th>Employee ID:</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Date onboarded:</th>
                        <td>21/5/2021</td>
                    </tr>
                    <tr>
                        <th>Points:</th>
                        <td>21/5/2021</td>
                    </tr>
                </table>
                <button class = "btn view-btn">Edit</button>
                <button class = "btn fire-btn">Fire</button>
            </div>
                        <div class = "card employee-box">
                <h3>Thomas Tan</h3>
                <table class = "table employee-table">
                    <!-- <tr>
                        <th>Employee Name:</th>
                        <td>Thomas Tan</td>
                    </tr> -->
                    <tr>
                        <th>Employee ID:</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Date onboarded:</th>
                        <td>21/5/2021</td>
                    </tr>
                    <tr>
                        <th>Points:</th>
                        <td>21/5/2021</td>
                    </tr>
                </table>
                <button class = "btn view-btn">Edit</button>
                <button class = "btn fire-btn">Fire</button>
            </div>


                        <div class = "card employee-box">
                <h3>Thomas Tan</h3>
                <table class = "table employee-table">
                    <!-- <tr>
                        <th>Employee Name:</th>
                        <td>Thomas Tan</td>
                    </tr> -->
                    <tr>
                        <th>Employee ID:</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Date onboarded:</th>
                        <td>21/5/2021</td>
                    </tr>
                    <tr>
                        <th>Points:</th>
                        <td>21/5/2021</td>
                    </tr>
                </table>
                <button class = "btn view-btn">Edit</button>
                <button class = "btn fire-btn">Fire</button>
            </div>


                        <div class = "card employee-box">
                <h3>Thomas Tan</h3>
                <table class = "table employee-table">
                    <!-- <tr>
                        <th>Employee Name:</th>
                        <td>Thomas Tan</td>
                    </tr> -->
                    <tr>
                        <th>Employee ID:</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Date onboarded:</th>
                        <td>21/5/2021</td>
                    </tr>
                    <tr>
                        <th>Points:</th>
                        <td>21/5/2021</td>
                    </tr>
                </table>
                <button class = "btn view-btn">Edit</button>
                <button class = "btn fire-btn">Fire</button>
            </div>


        </div>

    </div>

</div>
    
</template>
<script>
import Navbar from "./Navbar.vue"
import AddItem from "./AddItem.vue"
export default {
    name:"EmployeeList",
    components:{
        Navbar,
        AddItem
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

/* filter */
.filter-container{
    width:100%;
    display: flex;
    justify-content: center;
    display: flex;

}
.filter-container div{
    margin:5px;
    /* padding:10px; */
}

/* employee container */
.employeeContainer{
    margin-top:80px;
    
    
}
.employee-container{
    margin:10px;
    background: white;
    display: flex;
    flex-wrap: wrap;
}

/* individual employee */
.employee-box{
    width:288px;
    height:360px;
    /* background:red; */
    display: flex;
    padding:10px;
    margin:10px;
background: linear-gradient(57.11deg, #86B0FF -4.9%, #6461FF 101.23%, rgba(133, 175, 255, 0.61) 101.24%, rgba(52, 97, 184, 0.64) 101.24%);
color: white;
align-items: center;
}
.employee-table{
    width:100%;
    background:white;
    /* align-self: center; */
}
tr th{
    width:40%;
    text-align: right;
}
.view-btn{
    background: #6360FF;
border-radius: 5px;
width:200px;
padding:10px;
color: white;
margin: 5px;
}
.fire-btn{
  border-radius: 5px;
width:200px;
padding:10px;
color: white;
background:  rgba(147, 7, 7, 1);
margin: 5px;

}


</style>