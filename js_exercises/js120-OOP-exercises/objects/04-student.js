function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},

    info() {
      //return name and year in sentence
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      console.log(this.courses);
      return this.courses;
    },

    addCourse(...courseObj) {
      //push courseObj into courses
      courseObj.forEach(course => this.courses.push(course));
    },

    addNote(code, note) {
      //Looks at courses for code
      //Once code is found, gets 'name'
      //Adds/References name to 'notes' object
      //Adds 'note' to array for 'name' property
      let course = this.courses.find(courseObj => courseObj.code === code);
      if (course) {
        (this.notes[course.name] = this.notes[course.name] || []).push(note);
      }
    },

    viewNotes() {
      for (let note in this.notes) {
        console.log(`${note}: ${this.notes[note].join('; ')}`)
      }
    },
    
    updateNote(code, note) {
      let course = this.courses.find(courseObj => courseObj.code === code);
      if (course) {
        this.notes[course.name] = [note];
      }
    }
  }
}


/**
Create an object factory for a student object. The student object should have the following methods and 
it should produce the expected results demonstrated in the sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
 */

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

module.exports = {createStudent};