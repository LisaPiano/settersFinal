// class Pie{
//     constructor(flavor, size, spiceLevel){
//     this.flavor = flavor;
//     this.size = size;
//     this.spiceLevel = spiceLevel;
// }
// }
// const apple = new Pie('apple', 'medium', 'hot');
// console.log(apple);

class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }
  get level() {
    if(this.credits > 90){
      return "Senior";
    } else if (this.credits >=61) {
      return "Junior"; 
    } else if (this.credits >=30) {
      return "Sophomore";
    } else {
      return "Freshman";
    }
  }

  get name(){
    return this._name;
  }
  get major(){
    return this._major;
  }

  set name(name){
    this._name = name;
    console.log(`The name of the student is: ${name}`);
  }

  set major(major){
    if(this.level == "Junior" || this.level == "Senior"){
       this._major = major;
       } else {
      this._major = "none";
    }
 
  }
  


}

const student = new Student(3.9, 10);
student.name = "Fred";
student.major = "computer programming";

console.log(student.level);
console.log(student.name);
console.log(student.major);