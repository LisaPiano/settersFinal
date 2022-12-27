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
    } else if (this.credits >=61 && this.credits <= 90) {
      return "Junior"; 
    } else if (this.credits >30 && this.credits <=60) {
      return "Sophomore";
    } else {
      return "Freshman";
    }
  }
}

const student = new Student(3.9, 40);

console.log(student.level);