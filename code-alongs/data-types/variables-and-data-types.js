// variables are something we can assign a value to that may or may not change
// When using variables in javascript we must declare them at first use
// We declare variables using const, let or var.
// const is used when the value will not change (in the current scope)
// let is used to declare a variable whose value can change

// string
let studentName = 'Deon'
// number
let grade = .97
// boolean
let present = true
// array
let kids = [
  'Winter',
  'Sky',
  'Zion'
]
console.log(kids[0])

// object
let student1 = {
  studentName: 'Charles',
  grade: .96,
  inClass: true
}
console.log(student1.studentName + ' has a grade of ' + student1.grade)

let student2 = {
  studentName,
  grade,
  inClass: present
}
console.log(student2.studentName + ' has a grade of ' + student2.grade)
console.log(student2)

let student3 = {
  studentName: 'Vian',
  grade: 1,
  inClass: true
}
console.log(student3.studentName + ' has a grade of ' + student3.grade)

let arrayOfStudents = [student1, student2, student3]
console.log(arrayOfStudents[2].studentName)

arrayOfStudents.forEach(student=>console.log(student.studentName + ' has a grade of ' + student.grade * 100))
arrayOfStudents.forEach(student=>console.log(student.grade * 100))

