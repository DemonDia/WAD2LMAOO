<template>
<div class = "page" v-if = "usertype !== 'na'" >
    <div class="container">
        <Navbar/>
    </div>
    <div class="mt-5">
        <input type="text" placeholder="Filter by date/status/person" class="FilterEmp" v-model="filter" />
        <table class="table table-hover mt-2 table-striped">
            <thead>
                <tr class="table-warning">
                    <th scope="col" >Employee ID<button class="button" @click="sortTable('empIndex', direction)"><img src="../assets/sort.png"></button></th>
                    <th scope="col" >Employee Name<button class="button" @click="sortTable('person', direction)"><img src="../assets/sort.png"></button></th>
                    <th scope="col" >Date Onboarded<button class="button" @click="sortTable('date', direction)"><img src="../assets/sort.png"></button></th>
                    <th scope="col" >Points<button class="button" @click="sortTable('points', direction)"><img src="../assets/sort.png"></button></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in filteredRows" :key="`task-${index}`">
                    <td>{{ row.empIndex}}</td>
                    <td>{{ row.person }}</td>
                    <td>{{ row.date }}</td>
                    <td>{{ row.points }}</td>
                    <td><button type="button" class="btn btn-warning btnWarn">Edit</button><button type="button" class="btn btn-danger btnDanger">Remove</button></td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</div>
    
</template>
<script>
import Navbar from "./Navbar.vue"
// import AddItem from "./AddItem.vue"
import mixin from "../mixin"
export default {
    name:"EmployeeList",
    components:{
        Navbar,
    },
    mixins:[mixin],
    beforeMount(){
        this.getUserType()
        if(this.usertype != "employer"){
            this.$router.push("/")
        }
    },
    methods: {
        sortTable(key,direction) {
            this.sort = `${key} > ${direction}`
            if (direction === 'asc') {
                this.rows.sort((a, b) => a[key] > b[key] ? 1: -1)
                this.direction = 'desc';
            } else {
                this.rows.sort((a, b) => a[key] < b[key] ? 1: -1)
                this.direction = 'asc';
            }
        }
    },

    data(){
        return{
        arr:[],
        filter: '',
            sort: '',
            direction: 'asc',
            columns: ['empIndex','date','points','person', ],
            rows: [
                {empIndex: '1', date:'04/08/1998', points: '450', person: 'James'},
                {empIndex: '2', date:'27/03/1984', points: '1000', person: 'Peter'},
                {empIndex: '3', date:'08/06/1992', points: '645',person: 'Crystal'},
                {empIndex: '4', date:'27/07/2000', points: '920', person: 'John'},
                {empIndex: '5', date:'24/04/2007', points: '310', person: 'Kelly'},
                {empIndex: '6', date:'23/09/2016', points: '400', person: 'Den'}
            ]
        }
    },
    computed: {
        filteredRows() {
                return this.rows.filter(row => {
                const date = row.date.toString().toLowerCase();
                const person = row.person.toLowerCase();
                const searchTerm = this.filter.toLowerCase();

                return date.includes(searchTerm) || person.includes(searchTerm) ;
                
            });
        },
//           
  }

}
</script>
<style scoped>
.table{
    table-layout:fixed;
    width:80%;
    margin: 100px auto ;
}

thead,
tr,
tbody,
td {
  text-align: center;
}

th {
    text-align: center;
    padding-left: 40px ;
}

.page{
    min-height: 100vh;
    width:100%;
    /* display: flex; */
}

img {
    width: 20px;
}

.button {
    border: none;
    background-color: transparent;
}

.FilterEmp{
    margin-top: 20px;
    width: 80%;
    height: 6vh;
    margin-bottom: 30px;
}

.btn{
    width: 100px;
}

.btnWarn{
    margin-right: 10px;
}
</style>