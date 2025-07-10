function Person(first, last, age, gender) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;

  this.fullName = function () {
    // console.log(this.first + ' ' + this.last);
    return `${this.first} ${this.last}`;
  }

  this.communicate = function () {
    console.log(`Hi, I am ${this.first}`);
  }

  this.eat = function () {
    console.log(`${this.first} is eating.`);
  }

  this.sleep = function() {
    console.log(`${this.first} takes a nap...`);
  }
}

function Doctor(specialization, ...demographics) {
  Person.call(this, ...demographics);
  this.specialization = specialization;

  this.diagnose = function(patient={first: 'no one'}) {
    console.log(`${this.first} has diagnosed ${patient.first}`);
  }
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

function Professor(subject, ...demographics) {
  Person.call(this, ...demographics);
  this.subject = subject;

  this.teach = function() {
    console.log(`The ${this.age} year old professor teaches`)
  }

}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

function Student(degree, ...demographics) {
  Person.call(this, ...demographics);
  this.degree = degree;

  this.study = function() {
    console.log(`The ${this.gender} studies ${this.degree}`);
  }

}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function GraduateStudent(gradDegree, degree, ...demographics) {
  Student.call(this, degree, ...demographics);
  this.gradDegree = gradDegree;

  this.research = function() {
    console.log(`${this.first} is using my ${this.degree} to research for ${this.gradDegree}`);
  }
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;


// let fred = new Doctor('ortho', 'Fred', 'Jenkins', '9', 'Male');
// let sarah = new Person('Sarah', 'Jerkins', '11', 'Female');
// fred.diagnose(sarah);

// let melanie = new Student('Psych' ,'Mel', 'Mushy', '82', 'MaleFe');
// melanie.study();

// let phillipe = new GraduateStudent('Neuro', 'Communication', 'Phillipe', 'Chen', '24', 'Male');
// phillipe.research();

const person = new Person('Foo', 'Bar', 21, 'male');
console.log(person instanceof Person);       // logs true
console.log(person instanceof Doctor);       // logs false
console.log(person instanceof Professor);    // logs false
console.log(person instanceof Student);      // logs false
person.eat();                                // logs 'Eating'
person.communicate();                        // logs 'Communicating'
person.sleep();                              // logs 'Sleeping'
console.log(person.fullName());              // logs 'Foo Bar'

const doctor = new Doctor('Bar', 'Qux', 21, 'female', 'Pediatrics');
console.log(doctor instanceof Person);       // logs true
console.log(doctor instanceof Doctor);       // logs true
console.log(doctor instanceof Professor);    // logs false
console.log(doctor instanceof Student);      // logs false
doctor.eat();                                // logs 'Eating'
doctor.communicate();                        // logs 'Communicating'
doctor.sleep();                              // logs 'Sleeping'
console.log(doctor.fullName());              // logs 'Bar Qux'
doctor.diagnose();                           // logs 'Diagnosing'

const professor = new Professor('Bar', 'Foo', 48, 'female', 'Law');
console.log(professor instanceof Person);    // logs true
console.log(professor instanceof Professor); // logs true
console.log(professor instanceof Doctor);    // logs false
console.log(professor instanceof Student);   // logs false
professor.eat();                             // logs 'Eating'
professor.communicate();                     // logs 'Communicating'
professor.sleep();                           // logs 'Sleeping'
console.log(professor.fullName());           // logs 'Bar Foo'
professor.teach();                           // logs 'Teaching'

const graduateStudent = new GraduateStudent('Qux', 'Bar', 21, 'non-binary', 'BS Industrial Engineering', 'MS Industrial Engineering');
console.log(graduateStudent instanceof Person);          // logs true
console.log(graduateStudent instanceof Student);         // logs true
console.log(graduateStudent instanceof GraduateStudent); // logs true
console.log(graduateStudent instanceof Professor);       // logs false
console.log(graduateStudent instanceof Doctor);          // logs false
graduateStudent.eat();                                   // logs 'Eating'
graduateStudent.communicate();                           // logs 'Communicating'
graduateStudent.sleep();                                 // logs 'Sleeping'
console.log(graduateStudent.fullName());                 // logs 'Qux Bar'
graduateStudent.study();                                 // logs 'Studying'
graduateStudent.research();                              // logs 'Researching'