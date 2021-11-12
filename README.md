<!-- # WAD2 proj -->
<!-- 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/). -->

# Projeck

# Table of Contents
## 1. General Information 
## 2. Technologies/Language/Database Used
## 3. Project Setup
## 4. Login Details
### 4.1 Functions
#### 4.1.1 Employee (John)
#### 4.1.2 Employer (Amy)
## 5. Contributions
------------------------------------------------------------------

## 1. General Information
```
Projeck is created to serve the purpose of:
    a. Motivate the employees to work
    b. Tracking of task completion
    c. Better concentration and discipline to complete work
    d. Improve the interactions between the employers and employees
    e. To improve overall company productivity and work performances
```

## 2. Technologies/Language/Database Used
```
    a. Bootstrap 5.0
    b. Vue.js
    c. GitHub
    d. JavaScript
    e. HTML
    f. CSS
    g. Firebase
```

## 3. Project Setup
```
Open the terminal and install npm by typing 'npm install'
To run the program, type 'npm run serve' in the terminal
```

## 4. Login Details
```
We have separated the users into employer and employees, here are the login email and password

For employee
    Email: john_lim123@gmail.com
    Password: 11aa22bb

For employer
    Email: amy_tan@gmail.com
    Password: 77jtdef0

* Note: Please do not delete the 2 main characters, as known as John Lim and Amy Tan.
```

### 4.1 Functions
```
The following shows the funtions for employee and employer upon logging in
For Employee (John):
    a. Dynamic dashboard
    b. To-Do
    c. Calendar
    d. Profile

For Employer (Amy):
    a. Dynamic dashboard
    b. Projects
    c. Calendar
    d. Employee
    e. Review

Both employee and employer has a function where they can log out and will be brought back to login page.
```

#### 4.1.1 Employee (John)
```
1. Dynamic Dashboard
This shows the number of completed and incompleted tasks the employee has with respective dashboards that is imported from highcharts-vue. 

    a. Task Status 
    Shows the number of completed and incompleted task in a donut chart.

    b. Revenue Growth 
    Shows the revenue growth of the company.

    c. Task Distribution
    Shows the distribution of task according to the different projects that John is working on.

    d. Project Task List
    Shows the list of task John is working on which he can filter by task/status/person-in-charge.

2. To-Do
As the name suggest, it shows the to-do list of John which includes the task name, due date and a checkbox where he can check and click on submit once he is done. The list will populate automatically when he is assigned to a new task.

3. Calendar
Upon clicking on Calendar page, it shows a calendar and John has to login to his Google account under authentification - Sign in button. When signed in, John can click on Get Data button to allow his Google calendar to be synced to Projeck's calendar.

4. Profile
It shows the profile of the John - About Me, My Task and Reviews.

    a. About Me
    It shows John details such as name, department, position, employment type, email, password and current points.

    b. My Task
    Shows the current task John is working on.

    c. Reviews
    Shows the reviews received by his colleagues, however the reviews will be anonymous to safeguard reviewers and give them space to leave honest feedback. Reviews allows John to know his strengths and weaknesses so that he can continue to strive forward and to make room for improvements. At the top left hand corner, it shows the overall stars John has and this is calculated from star ratings divided by total number of reviews.
```

#### 4.1.2 Employer (Amy)
```
1. Dynamic Dashboard
This shows the number of completed and incompleted task the employee has with respective dashboards that is imported from highcharts-vue. The difference between John and Amy is that John is only able to see his task whereas Amy sees her subordinates and her own tasks.

    a. Task Status 
    Shows the number of completed and incompleted task in a donut chart.

    b. Revenue Growth 
    Shows the revenue growth of the company.

    c. Task Distribution
    Shows the distribution of task according to the different projects that Amy is working on.

    d. Project Task List
    Shows the list of task Amy and her subordinates is working on which she can filter by task/status/person-in-charge.

2. Projects
Since Amy is an employer, she is able to view the projects that she assigned to her subordinates. Amy is able to see the project information such as project name, team member, assigned date, project dateline, status, points and actions. Under actions, there are two things that can be clicked - view and delete. 

Upon clicking on view, Amy sees a more detailed information of the project where it is broken down into different segments called task. Amy can delete the task once it is completed, she can also update the project name, due date, assignment and reward points. Lastly, she can create new task where she fills in the task name, assignment, description, reward and due date.

3. Calendar
Upon clicking on Calendar page, it shows a calendar and Amy has to login to his Google account under authentification - Sign in button. When signed in, Amy can click on Get Data button to allow her Google calendar to be synced to Projeck's calendar.

4. Employees
Amy is able to see the list of employees and their respective details such as user ID, department and points. Amy can choose to edit or delete that particular employee. Edit button includes name, position and points. 

When a new employee just join the company, Amy can click on add employee and she has to create a new employee and enter details such as name, DOB, contact number, department, email, password, position and to upload a photo.

Since there are plenty of employees and we want to make it a more seamless search experience, we have added a searchbox at the top of the page where Amy is able to search the employees.

5. Review
Amy is able to give reviews to her subordinates based on the different projects. Upon clicking on an employee, Amy is redirected to review page where she can key in comments and rating for that employee. The stars are upon 5, the user is able to drag across the 5 stars to give a more precision rating.
```

## 5. Contributions
```
Projeck is contributed by the following 5 people
    1. Lee Siang Meng (01416080)
    2. Sherrill Tan (01414200)
    3. Shinta Bek (01424550)
    4. Huang Jing Yi (01413165)
    5. Veinna Tio (01422725)
```