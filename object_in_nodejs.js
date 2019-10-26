function object(name, born, majors, gender){
    student = Object();
        student.name = name;
        student.born = born;
        student.majors = majors;
        student.gender = gender;
    return student;
}
myObject  = object("Trung", 2000, "Information technology", "male");
console.log(myObject);
