<template>
<div style = "width:100%;">
    <Navbar/>
    <h1 id = "calendar-name">Calendar</h1>
    <div class='Authentication mt-4'>
      Authentication
      <button v-if='!authorized' @click="handleAuthClick" class="btn btn-primary">Sign In</button>
      <button v-if='authorized' @click="handleSignoutClick" class="btn btn-primary">Sign Out</button>
    </div>
    <hr>
    <button v-if='authorized' @click="getData" :events="events" class="btn btn-primary">Get Data</button>
    <div class="item-container" v-if="authorized && items">
      <pre v-html="items"></pre>
    </div>
    <div id = "calendar-contaner">
<div id = "date-selector">
    <label>Select date:</label>
<input type = "date" class = "form-control" v-model="chooseDate"/>
</div>

<div id = "cal-table-container">

    <table class=  "table table-bordered">
  <thead>
    <tr>
        <th scope="col">Sun</th>
      <th scope="col">Mon</th>
      <th scope="col">Tues</th>
      <th scope="col">Wed</th>
      <th scope="col">Thurs</th>
      <th scope="col">Fri</th>
      <th scope="col">Sat</th>
      

    </tr>
  </thead>

    <tbody :events = "events">
      <tr v-for="week in getDays" :key ="week">
          <!-- 7 days in a week -->
          <td v-for = "number in 7" :key = "number">
            <div v-if = "(week.map(day => day.day).includes(number-1))" class = "cal-date mt-0 p-0">
              <!-- default -->
              <div v-if = "(week.filter(day => day.day ===number-1)[0].date === date.getDate())&&
                (week.filter(day => day.day ===number-1)[0].year === date.getFullYear())&&
                (week.filter(day => day.day ===number-1)[0].month === date.getMonth())" id = "today-date">
                <div v-if = "week.filter(day => day.day ===number-1)[0].task.length === 0" class="mt-2 p-0">
                  <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  <span v-for= "event in events" :key= "event">
                    <span v-if= "week.filter(day => day.day ===number-1)[0].fulldate == event.date">
                      <div class="container rounded mt-0 p-1 mb-1 bg-secondary text-white">
                          <span class="pl-1 timing text-start text-wrap"  v-if="event.start != ''">{{event.start}}-{{event.end}}</span>
                          <span class="details text-start text-wrap">{{event.name}}</span>
                      </div>
                    </span>
                  </span>
                </div>

                <!-- that day has task(s) due -->
                <div v-else class = "have-task mt-2 p-0">
                  <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  <span v-for= "event in events" :key= "event">
                    <span v-if= "week.filter(day => day.day ===number-1)[0].fulldate == event.date">
                      <div class="container rounded mt-0 p-1 mb-1 bg-secondary text-white">
                          <span class="pl-1 timing text-start text-wrap"  v-if="event.start != ''">{{event.start}}-{{event.end}}</span>
                          <span class="details text-start text-wrap">{{event.name}}</span>
                      </div>
                    </span>
                  </span>
                </div>
              </div>

              <div v-else>
                <div v-if = "week.filter(day => day.day ===number-1)[0].task.length === 0" class="mt-2 p-0">
                  <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  <span v-for= "event in events" :key= "event">
                    <span v-if= "week.filter(day => day.day ===number-1)[0].fulldate == event.date">
                      <div class="container rounded mt-0 p-1 mb-1 bg-secondary text-white">
                          <span class="pl-1 timing text-start text-wrap"  v-if="event.start != ''">{{event.start}}-{{event.end}}</span>
                          <span class="details text-start text-wrap">{{event.name}}</span>
                      </div>
                    </span>
                  </span>
                </div>

                <!-- that day has task(s) due -->
                <div v-else class = "have-task mt-2 p-0">
                  <h5>{{week.filter(day => day.day ===number-1)[0].date}}</h5>
                  <div v-for= "event in events" :key= "event">
                    <span v-if= "week.filter(day => day.day ===number-1)[0].fulldate == event.date">
                      <div class="container rounded mt-0 p-1 mb-1 bg-secondary text-white">
                          <span class="pl-1 timing text-start text-wrap"  v-if="event.start != ''">{{event.start}}-{{event.end}}</span>
                          <span class="details text-start text-wrap">{{event.name}}</span>
                      </div>
                    </span>
                  </div>
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
import mixin from "../mixin"

const CLIENT_ID = '982308349419-7k83791ugki6rdmf76bjl9eifu4slgaa.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD6tq50J6q5MyUrhey-1se4vvWeoeUvjxc';
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default {
    name:"Calendar",
    mixins:[mixin],
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
            items: undefined,
            api: undefined,
            authorized: false,
            events: []
            }
    },
    created() {
    this.api = window.gapi;
    this.handleClientLoad();
    },
    methods: {
    /**
     *  On load, called to load the auth2 library and API client library.
     */
    handleClientLoad() {
      this.api.load('client:auth2', this.initClient);
    },

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    initClient() {
      let vm = this;

      vm.api.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(response => {
        // Listen for sign-in state changes.
        vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
        console.log(response);
      });
    },

    /**
     *  Sign in the user upon button click.
     */
    handleAuthClick(event) {
      Promise.resolve(this.api.auth2.getAuthInstance().signIn())
        .then(response => {
          this.authorized = true;
          console.log(response,event)
        });
    },

    /**
     *  Sign out the user upon button click.
     */
    handleSignoutClick(event) {
      Promise.resolve(this.api.auth2.getAuthInstance().signOut())
        .then(response => {
          this.authorized = false;
          console.log(response,event)
        });
    },

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    getData() {
      let vm = this;
      const events = []
      vm.api.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        // 'maxResults': 10,
        'orderBy': 'startTime'
      }).then(response => {
        var items = response.result.items;
        // vm.items = this.syntaxHighlight(response.result.items);
        // console.log(vm.items);
        for (var i=0;i<items.length;i++) {
          var both_start = Object.keys(items[i].start) 
          if (both_start.length > 1) {
            var start = items[i].start.dateTime
            var end = items[i].end.dateTime
            events.push({
              name: items[i].summary,
              date: start.substr(0,start.indexOf('T')),
              start: start.substr((start.indexOf('T'))+1,5),
              end: end.substr((start.indexOf('T'))+1,5),
            })
          } else {
            events.push({
              name: items[i].summary,
              date: items[i].start.date,
              start: ""
            })
          }
        }
        console.log(events)
        this.events = events
        // console.log(items.start.dateTime, items.end.dateTime);
      });
    },
  },
  beforeMount(){
       this.usertype = this.getUserType()
        if(this.usertype === "na"){
            this.$router.push("/authenticate")
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
            var actual_mth = month + 1;
            var str_month = actual_mth;
            console.log(actual_mth)
            if (actual_mth <= 9) {
              str_month = '0'+actual_mth  
              console.log(str_month)  
            }
            while(loop <=endDate){
                console.log(year,actual_mth,str_month)
                var date = loop.getDate()
                var str_date = date
                if (date <= 9) {
                  str_date = '0'+date
                }
                days.push({"date":date,"year":year,"month":month,"day":loop.getDay(),"week":week,"task":[],"fulldate":year+'-'+str_month+'-'+str_date})
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
            console.log(days)
            return days
            // return [startDate,endDate]
        }
    },
    
}
</script>
<style scoped>
table{
    table-layout: fixed
}
#calendar-name{
    width: max-content;
    margin: auto;
    margin-top: 80px;
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
    text-align: center;
}
td{
    width:100px;
    height:150px;
    background:white;
    text-align: center;
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

.timing {
  font-size: 14px;
  text-align: left;
  display: block;
}

.details {
  font-size: 15px;
  display: block;
  text-align: left;
}

.container {
  display:block;

  overflow:auto;

  height: auto;
}
</style>