function object(name, born, majors, gender){
    student = Object();
        student.name = name;
        student.born = born;
        student.majors = majors;
        student.gender = gender;
    return student;
}
myObject  = object("Trung", 2000, "Information technology", "male");
ourObject = object("CNTTK44", 2000, "Information technology", "male and female");
console.log(myObject);
console.log(ourObject);
