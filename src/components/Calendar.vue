<template>
<div style = "width:100%;">
    <Navbar/>
    <h1 id = "calendar-name">Calendar</h1>
    <div id = "calendar-contaner">
<div id = "date-selector">
    <label>Select date:</label>
<input type = "date" class = "form-control" v-model="chooseDate"/>
</div>

<div id = "cal-table-container">

    <table class=  "table table-bordered">
  <thead>
    <tr>
      <th scope="col">Mon</th>
      <th scope="col">Tues</th>
      <th scope="col">Wed</th>
      <th scope="col">Thurs</th>
      <th scope="col">Fri</th>
      <th scope="col">Sat</th>
      <th scope="col">Sun</th>

    </tr>
  </thead>

    <tbody>
      <tr v-for="week in getDays" :key ="week">
          <!-- 7 days in a week -->
          <td v-for = "number in 7" :key = "number">

            <div v-if = "(week.map(day => day.day).includes(number-1))" class = "cal-date">
<!-- default -->
<div v-if = "(week.filter(day => day.day ===number-1)[0].date === date.getDate())&&
    (week.filter(day => day.day ===number-1)[0].year === date.getFullYear())&&
    (week.filter(day => day.day ===number-1)[0].month === date.getMonth()) " id = "today-date">
                  <div v-if = "week.filter(day => day.day ===number-1)[0].task.length === 0">
                    <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  </div>

<!-- that day has task(s) due -->
                  <div v-else class = "have-task">
                    <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  </div>
</div>
<div v-else>
                  <div v-if = "week.filter(day => day.day ===number-1)[0].task.length === 0">
                    <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  </div>

<!-- that day has task(s) due -->
                  <div v-else class = "have-task">
                    <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  </div>
</div>

              </div>



              <div v-else class = "blank-space">
                  <!-- blank -->

              </div>

          </td>
          
      </tr>

  </tbody>
    </table>

</div>


    </div>
    
</div>

</template>
<script>
import Navbar from "./Navbar.vue"
export default {
    name:"Calendar",
    components:{
        Navbar
    },
    data(){
        return {
            date: new Date(),
            chooseDate:null,
            days:[],
            // where google calendar API will come in
            tasks: [],
            }
    },
    computed:{
        convertDate(){
            // array.rever
            if(this.chooseDate){
            var split_date = this.chooseDate.split("-")
            console.log(split_date)
            console.log(parseInt(split_date[0]),parseInt(split_date[1])-1,parseInt(split_date[2]))
            return new Date(parseInt(split_date[0]),parseInt(split_date[1])-1,parseInt(split_date[2]))
            }
            else{
                return new Date()
      
            }
            
        },
        getDays(){
            var year = this.convertDate.getFullYear()
            var month = this.convertDate.getMonth()
            // var firstday = 1;
            let days = []
            var startDate = new Date(year,month,1)
            var endDate = new Date(year,month+1,0)
            // console.log("start",startDate)
            // console.log("end",endDate)
            var loop = startDate;
            var week = 1;
            while(loop <=endDate){
                console.log(year,month)
                days.push({"date":loop.getDate(),"year":year,"month":month,"day":loop.getDay(),"week":week,"task":[]})
                let next = loop.setDate(loop.getDate()+1);
                loop = new Date(next)
                if(loop.getDay() == 0){
                    week += 1;
                }
            }
            days = days.sort()
            days = [days.filter(day => day.week === 1),days.filter(day => day.week === 2)
            ,days.filter(day => day.week === 3),days.filter(day => day.week === 4),
            days.filter(day => day.week === 5)]
            return days
            // return [startDate,endDate]
        }
    },
}
</script>
<style scoped>
#calendar-name{
        width: max-content;
    margin: auto;
    margin-top:60px;
    box-shadow: 0px 5px 0px rgba(83, 90, 249, 0.81);
}
#cal-table-container{
        background: #E3E9FF;
        margin:10px;

}

#date-selector label{
    width:auto;
    text-align:right;
    margin-right:10px;
}

#date-selector input{
    width:300px;
    
    margin-right:10px;
}
#date-selector{
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    /* margin: auto; */
    display: flex;
}
th{
    color:#8265E3;
}
table{
    /* background: #E3E9FF; */
}
#calendar-contaner{
    /* margin:10px; */
}

td{
    width:100px;
    height:150px;
    background:white;
}
td div{
    height:100%;
    width:100%;

}
/* .blank-space{
    background:rgb(133, 133, 133);
} */
.cal-date{
    /* background:rgb(228, 228, 228); */
    display:grid;
    align-items: start;
    padding:15px;
}
.have-task{
    background:rgb(0, 85, 124);
    color:white;
}
#today-date{
    border-top:5px rgb(82, 93, 243) solid;
}
</style>