# School Management Website

link to the github repository : https://github.com/Alan-Casasnovas0/SE_School_System/tree/Front-%26-Back
(Be careful, the project is in the `Front-&-Back` branch)

**CDOF1**

- **Noémie MAZEPA** 
- **Lorrain MORLET** 
- **Noëmie NURIJANYAN** 
- **Alan CASASNOVAS** 
- **Luca CAVALIERE**


## Project Overview

This project is a website for a School Management System designed to simplify administrative, academic, and student processes. 
The website provides different user experiences for **Admins**, **Teachers**, and **Students**. It focuses on efficiency, security, and a user-friendly interface to manage school operations effectively.


## Features for the different users:
- **Admin**: View all enrolled students, accept/reject new applications.
- **Teacher**: Add grades for students in specific subjects and assign homework.
- **Student**:  
  - **Not enrolled**: Submit applications for enrollment.  
  - **Enrolled**: View homework and grades.


## Software Requirements Specification: 
- **Backend**: the backend is built using TypeScript with Express.js. It handles all server-side logic, including CRUD operations to manage data stored in a MySQL database. These requests ensure smooth communication between the database and the frontend, retrieving and updating information as needed.
- **Frontend**: we used Angular to build the frontend, creating different components for each page and feature. This makes the site modular, responsive, and easy for users to interact with.  
- **Database**: The MySQL database stores everything, like student info, grades, homework, and applications. It's designed to be fast and reliable, so the system can access and update data without any problem.


## Website Features and Pages

### 1. **Home Page**
- Allows potential futur students to **submit an application** for admission.
![Home Page](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/welcome.png)

### 2. **Login/Connection Page**
- Role-specific login for **Admins**, **Teachers**, and **Students**.
- Ensures a secure access using role authentication.
![Login Page](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/login.png)

### 3. **Admin Page**
- View all enrolled students.
- Accept or reject student applications.
![Admin Dashboard](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/manager.png)
![Admin Dashboard](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/manager2.png)
![Admin Dashboard](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/manager3.png)

### 4. **Teacher Page**
- Assign homework to specific subjects.
- Enter and update grades for students.
![Teacher Dashboard](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/teacher1.png)
![Teacher Dashboard 2](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/teacher2.png)

### 5. **Student Page**
- **The student needs to be enrolled to access this page**:
  - View assigned homework.
  - Check grades for completed courses.
![Student Dashboard](https://github.com/Alan-Casasnovas0/SE_School_System/blob/Front-%26-Back/images/student.png)


## Task distribution
- **Frontend**: Luca, Alan and Noëmie worked all 3 on the frontend, they created the pages and thought out the style of the website
- **Backend and database**: Lorrain and Noémie worked on the backend and the database. They wrote all of the CRUD requests to get, update or delete values in the mySQL database connected to the backend.
- **Connexion of the 2 parts**: we all worked on this part. We communicated a lot to understand what everyone had done on their part and connect everything together.
