<template>
<div class = "page">
    <Navbar/>
    <div class = "employeeContainer">
        <h1 id = "emplist-header"  class="mb-4">Employee List</h1>
        <div class = "filter-container-fluid">
            <div class="row w-100 m-0">
                <div class = "col-lg-4 mb-3">
                    <label class="px-2">Search: </label><input type = "text" class = "form=control" placeholder="Search by name"/>
                </div>

                <div class="col-lg-4 mb-3">
                    <label class="px-2">Sort by: </label>
                    <select id="sortby" class = "form=control">
                        <option>Name</option>
                        <option>ID</option>
                        <option>Date employed</option>
                        <option>ID</option>
                    </select>           
                </div>

                <div class="col-lg-4 mb-1">
                    <label class="px-2">Order: </label>
                    <select id="orderby" class = "form=control">
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>
            </div>
            
        </div>
        <div class = "employee-container-fluid">
            <div class="row w-100 m-0">
                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <div class="col-xl-3 col-lg-3 col-md-6">
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
                        <div class="row m-1">
                            <button class = "btn view-btn col">Edit</button>
                            <button class = "btn fire-btn col">Remove</button>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <div class="col-xl-3 col-lg-3 col-md-6">
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
                        <div class="row m-1">
                            <button class = "btn view-btn col">Edit</button>
                            <button class = "btn fire-btn col">Remove</button>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <div class="col-xl-3 col-lg-3 col-md-6">
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
                        <div class="row m-1">
                            <button class = "btn view-btn col">Edit</button>
                            <button class = "btn fire-btn col">Remove</button>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-xl-3 col-lg-4 col-md-6 w-auto m-0"> -->
                <div class="col-xl-3 col-lg-3 col-md-6 ">
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
                        
                        <div class="row m-1">
                            <button class = "btn view-btn col">Edit</button>
                            <button class = "btn fire-btn col">Remove</button>
                        </div>
                        
                    </div>
                </div>
                <div class="add-emp col-xl-3 col-lg-4 col-md-6 m-0">
                    <div>
                        <router-link to ="/employees/add"
                            style = "text-decoration: none;">
                            <AddItem :itemType="'employee'" />
                        </router-link>
                    </div>
                </div>
            </div>
            
            
        </div>

    </div>

</div>
    
</template>
<script>
import Navbar from "./Navbar.vue"
import AddItem from "./AddItem.vue"
import mixin from "../mixin"
export default {
    name:"EmployeeList",
    components:{
        Navbar,
        AddItem
    },
    mixins:[mixin],
    beforeMount(){
        this.getUserType()
        if(this.usertype != "employer"){
            this.$router.push("/")
        }
    }

}
</script>
<style scoped>
.add-emp{
    width: 330px;
}
#sortby{
    width: 150px;
    height: 29px;
}
#orderby{
    width: 150px;
    height: 29px;
}
#emplist-header{
    width: max-content;
    margin: auto;
    margin-top: 80px;
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
.page{
    min-height: 100vh;
    width:100%;
    background:white
    /* display: flex; */
}

/* filter */
.filter-container{
    width:100%;
    display: flex;
    justify-content: space-between;

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
    /* display: flex; */
    padding:10px;
    margin:10px;
    background: linear-gradient(57.11deg, #86B0FF -4.9%, #6461FF 101.23%, rgba(133, 175, 255, 0.61) 101.24%, rgba(52, 97, 184, 0.64) 101.24%);
    color: white;
    /* align-items: center; */
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
    /* background: #6360FF; */
    background: rgb(253, 198, 97);
    border-radius: 5px;
    width:200px;
    padding:10px;
    color: black;
    margin: 5px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);
}
.fire-btn{
    border-radius: 5px;
    width:200px;
    padding:10px;
    color: black;
    background:  rgb(255, 153, 153);
    margin: 5px;
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19);

}


</style>