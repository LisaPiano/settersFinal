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
}

const student = new Student(3.9, 29);

console.log(student.level);