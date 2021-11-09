// import Axios from "axios";
import firebase from "firebase/compat";
export default{
    methods:{
        getLoggedUser(){
            try{
                this.loggedUser = JSON.parse(sessionStorage.loggedUser)
                console.log("logged"+this.loggedUser)
            }
            catch{
                this.loggedUser = "na";
                this.usertype = "na"
            }
        },
        // getUserType(){
        //     try{
        //         this.loggedUser = JSON.parse(sessionStorage.loggedUser)
        //         this.usertype = this.loggedUser.user_type;
        //     }
        //     catch{
        //         this.usertype = "na"
        //     }

            // console.log(this.loggedUser)
            // if (this.loggedUser!= null){
            //     this.usertype = this.loggedUser.user_type;
            // }
            // else{
            //     this.usertype = "na"
            // }
            // console.log("user"+this.usertype)
        // },
        // logoutUser(){
        //     sessionStorage.removeItem("loggedUser");
        //     this.$router.push("/authenticate")
        // },

        // logout() {
        //     firebase
        //       .auth()
        //       .signOut()
        //       .then(() => {
        //         // alert('Successfully logged out');
        //         this.$router.push('/authenticate');
        //       })
        //       .catch(error => {
        //         alert(error.message);
        //         this.$router.push('/authenticate');
        //       });
        //   },

        getUserType(uid) {
            firebase.database().ref('users/' + uid + '/user_type').on('value', (snapshot) => {
                console.log("snapshotVal", snapshot.val())
                // this.loggedUser = JSON.parse(sessionStorage.loggedUser)
                return snapshot.val();
                // console.log(this.usertype)
              }, (errorObject) => {
                console.log('The read failed: ' + errorObject.name);
              }); 
        }
        
    },
    data(){

        return{
            loggedUser:null,
            user: null,
            usertype:"",
            accountList:[
                {
                    user_id:1, 
                    name:"John Lim", 
                    email:"john_lim123@gmail.com", 
                    phone_no:"91245675", 
                    password:"11aa22bb", 
                    department_id:1, 
                    position:"Accountant", 
                    user_type:"employee",
                    current_pts:6
                },

                {
                    user_id:2, 
                    name:"Amy Tan", 
                    email:"amy_tan@gmail.com", 
                    phone_no:"92567775", 
                    password:"77jtdef0", 
                    department_id:4, 
                    position:"Project Manager", 
                    user_type:"employer",
                    current_pts:null
                },

                {
                    user_id:3, 
                    name:"Francine Ang", 
                    email:"ang_francine@gmail.com", 
                    phone_no:"92229565", 
                    password:"yh73f064", 
                    department_id:2, 
                    position:"UX Designer", 
                    user_type:"employee",
                    current_pts:10
                },
                {
                    user_id:4, 
                    name:"Max Yeo", 
                    email:"maxyeo_2234@gmail.com", 
                    phone_no:"89976500", 
                    password:"2egyd756", 
                    department_id:3, 
                    position:"Software Developer", 
                    user_type:"employee",
                    current_pts:5
                }
            ],
            departments:[
                {department_id:1, department_name:"Finance"},
                {department_id:2, department_name:"UI/UX"},
                {department_id:3, department_name:"IT"},
                {department_id:4, department_name:"Management"}
            ],
            projects:[
                {
                    project_id:1, project_name:"Project 1", 
                    project_status:'Ongoing', assigned_date:'2021-10-11 13:23:44',
                     due_date:"2021-12-15", completion_date:null
                },

                {
                    project_id:2, project_name:"Project 2", 
                    project_status:'New', assigned_date:'2021-10-22 12:50:32',
                     due_date:"2022-02-01", completion_date:null
                },

                {
                    project_id:3, project_name:"Project 3", 
                    project_status:'New', assigned_date:'2021-10-22 12:50:32',
                     due_date:"2022-03-10", completion_date:null
                }

            ],
            tasks:[
            {
                task_id:1, project_id:1, user_id:4, 
                task_name:"Design software program", 
                due_date:'2021-10-31', task_status:'In Progress', 
                description:null, 
                created_at:"2021-10-12 11:43:14'", completion_date:null
            },
            {
                task_id:2, project_id:1, user_id:3, 
                task_name:"Prototype v1", 
                due_date:'2021-10-20', task_status:'Completed', 
                description:null, 
                created_at:"2021-10-12 11:43:14", completion_date:'2021-10-21 13:25:50'
            },
            {
                task_id:3, project_id:1, user_id:3, 
                task_name:"Prototype v2", 
                due_date:'2021-10-29', task_status:'In Progress', 
                description:null, 
                created_at:'2021-10-21 17:55:54', completion_date:null
            },

            {
                task_id:4, project_id:1, user_id:3, 
                task_name:"UI Testing", 
                due_date:'2021-10-31', task_status:'In Progress', 
                description:null, 
                created_at:"2021-10-12 11:43:14", completion_date:null
            },

            {
                task_id:5, project_id:3, user_id:3, 
                task_name:"Develop Persona", 
                due_date:'2021-11-05', task_status:'New', 
                description:null, 
                created_at:"2021-10-23 21:23:44", completion_date:null
            },

            {
                task_id:6, project_id:2, user_id:4, 
                task_name:"Develop software system", 
                due_date:'2021-11-21', task_status:'In Progress', 
                description:null, 
                created_at:"2021-10-26 13:13:54", completion_date:null
            },

            ],
            reviews:[
                {
                    review_id:1, user_id:3, 
                    comments:"Very hardworking individual, also getting work done ahead of time.",
                    ratings:5
                },

                {
                    review_id:2, user_id:3, 
                    comments:"Great person to work with.",
                    ratings:5
                },


                {
                    review_id:1, user_id:3, 
                    comments:"Not very efficient in completion of task.",
                    ratings:2
                },

                
            ],
            point_records:[
                {record_id:1,user_id: 1, points: 20, record_date: '2021-01-31'},
                {record_id:2,user_id: 1, points: 12, record_date: '2021-02-28'},
                {record_id:3,user_id: 1, points: 15, record_date: '2021-03-31'}
            ]

        }
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // console.log(user)
                this.usertype = this.getUserType(user.uid);
            } else {
                this.user = null;
            }
          });
    }
}