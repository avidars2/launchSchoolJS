let studentFunc = require('./04-student');
let createStudent = studentFunc.createStudent;

function createSchool() {
  const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
  let createCourse = (courseName, code) => {return {name: courseName, code: code}};
  //name, year for student

  return {
    students: [],
    courses: [createCourse('Math', 101),
      createCourse('Advanced Math', 102),
      createCourse('Physics', 202),
    ],

    addStudent(name, year) {
      if (validYears.includes(year)) {
        let newStudent = new createStudent(name, year);
        this.students.push(newStudent);
        return newStudent;
      } else return console.log('Invalid Year.');
    },
    enrollStudent(student, courseID) {
      //Take a student
      //Take a course id
      //If student exists and course ID is valid, add course
      //to student array

      let course = this.courses.find(courseObjs => courseObjs.code === courseID);
      let courseCopy = JSON.parse(JSON.stringify(course));
      student.addCourse(courseCopy); //Potential implementation
      //IF student object and course object is passed
      
    },
    addGrade(student, courseID, grade) {
      let findCourseByID = (course) => course.code === courseID;
      //Takes a student object
      //Takes a course  object
      //Searches if  courseobject is in student courses property
      // If so, sets grade property to 'grade'
      let course = this.courses.find(findCourseByID);
      let courseObj = student.courses.find(subject => subject.code ===  course.code);
      if (courseObj) {
        courseObj.grade = grade;
      }
    },
    getReportCard(student) {
      //Look at student's courses array
      //For each object, get grade property
      //If doesn't exist, print 'Name: In Progress'
      //If exists, print 'Name: Grade'

      for (let courseObj of student.courses) {
        console.log(`${courseObj.name}: ${courseObj.grade ?? 'In Progress'}`);
      }
    },
    courseReport(courseName) {
      let findCourseByName = (course) => course.name === courseName
      //Look at course array for list of course names
      // Find courseName in array
      //if doesn't exist, return undefined
      //if exists, iterate through students courses looking for
      //students who have a course with a matching name
      //If found, return the student object
      
      //with list of student objects, make list of name and grades
      //With list of grades, add up and divide by # of students

      let courseObj = this.courses.find(findCourseByName);
      if (courseObj) {
        let studentsTakingCourse = this.students.filter(student => student.courses.find(findCourseByName));
        //List of student objects who took course [{}, {}]

        //For each student object, make a list of names and grades
        let nameGradeList = studentsTakingCourse.map(student => {
          let nameAndGrade = [];

          student.courses.forEach(course => {
            if (course.name === courseName) {
              nameAndGrade.push(student.name, course.grade);
            }
          })
          return nameAndGrade;
        })
        
        let gradeAverage = nameGradeList.reduce((acc, studentGradeArr) => {
          return acc + studentGradeArr[1];
        }, 0) / nameGradeList.length;
        
        if (!Number.isNaN(gradeAverage)) {
          console.log(`=${courseObj.name}=`);
          nameGradeList.forEach(nameAndGrade => {
            console.log(`${nameAndGrade[0]}: ${nameAndGrade[1]}`);
          })
          console.log(`---\nCourse Average: ${gradeAverage}`);
        }
      }

    },

    massEnroll(studentArr, courseCode) {
      studentArr.forEach(student => this.enrollStudent(student, courseCode));
    }

  }
}

// Example student:
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }
let school = createSchool();
let kim = school.addStudent('Kim', '2nd');
let paul = school.addStudent('Paul', '3rd');
let mary = school.addStudent('Mary', '1st');

school.massEnroll([kim, paul, mary], 101);
school.massEnroll([paul, kim], 102);
school.enrollStudent(paul, 202);
school.addGrade(kim, 101, 93);
school.addGrade(kim, 102, 90);
school.addGrade(paul, 101, 95);
school.addGrade(paul, 102, 90);
school.addGrade(mary, 101, 91);
// school.getReportCard(kim);
school.getReportCard(paul);
// school.getReportCard(mary);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
