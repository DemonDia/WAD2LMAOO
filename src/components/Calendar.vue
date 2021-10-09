<template>
<div>
    <input type = "date" class = "form-control" placeholder="Choose a date" v-model="chooseDate"/>
    <!-- {{convertDate}} -->

    <!-- <div>
        {{convertDate.getMonth()}}
    </div> -->
    <!-- {{getDays}} -->
    <table class=  "table">
  <thead>
    <tr>
      <th scope="col">Mon</th>
      <th scope="col">Tues</th>
      <th scope="col">Wed</th>
      <th scope="col">Thurs</th>
      <th scope="col">Fri</th>
      <th scope="col">Sat</th>
      <th scope="col">Sun</th>
      <!-- <th scope="col">Wed</th> -->
    </tr>
  </thead>
  <!-- <tbody v-for="dey in getDays.length" :key="dey"> -->
    <tbody>
      <tr v-for="week in getDays" :key ="week">
          <td v-for= "day in week" :key = "day">{{day}}</td>
          
          <!-- <td v-if = "getDays[dey-1].week ===1">getDays[dey-1]</td> -->
          <!-- <td v-if = "getDays[dey-1].week ===1">{{getDays[dey-1]}}</td> -->
      </tr>

  </tbody>
    </table>
</div>

</template>
<script>
export default {
    name:"Calendar",
    data(){
        return {
            date: new Date(),
            chooseDate:null,
            days:[]
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
            console.log("start",startDate)
            console.log("end",endDate)
            var loop = startDate;
            var week = 1;
            while(loop <=endDate){
                
                days.push({"date":loop.getDate(),"day":loop.getDay(),"week":week,"task":[]})
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
<style>

</style>