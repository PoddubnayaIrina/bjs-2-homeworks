function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.push(...marks);
  } else return 0;
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined || this.marks.length === 0){
    return 0;
  } else {
    let sum = 0;
    for(let i = 0; i < this.marks.length; i++){
      sum += this.marks[i];
    }
    return sum / this.marks.length
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
