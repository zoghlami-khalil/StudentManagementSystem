var numberOfStudents=0
var students =[]


function createStudent(firstName, lastName, email, age, education) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.education=education;
    this.fullName = createFullName(firstName,lastName)
    this.skills = []    
}
    
function createFullName (firstName,lastName){
    return `${firstName} ${lastName}`
}

function addStudent(student) {
    students.push(student)
    numberOfStudents = students.length
}

function getNumberOfStudent() {
    console.log(numberOfStudents)
   }

function clearStudents() {
    students=[]
    numberOfStudents=0
   }


function getStudentsByInitials(firstInitial, secondInitial) {
    var array = []
    var i=0;
    while(i<students.length)
    {
        if (isFullName(students[i])[0][0] === firstInitial && isFullName(students[i])[1][0] === secondInitial) {array.push(students[i])}
        i++
    }
return array   
}    
   
function isFullName(name) {
    words = name.split(" ")
    return words
}


function exist(arr,element){
var i=0;
var test = false;
    for (i=0;i<arr.length;i++){
    if (arr[i]===element){test=true
    break;}
    }
return test
}

function addSkills(student, skills) {  
   var i;
   for(i=0;i<skills.length;i++){
    if(exist(student.skills,skills[i])===false){
        student.skills.push(skills[i])
    }
   } 
   }


function removeStudent(firstName) {
    var i
    for (i=0;i<students.length;i++){
        if (students[i].firstName === firstName){
            students.splice(i,1)
            numberOfStudents--;
        }
    }
}


function isStudentOlderThan(student,x) {
    
    if (student.age>x) {
        return true;}
        
    else {return false;}
   }


function doesStudentHaveSkills(student) {
    if (student.skills.length > 0) {
        return true
        
    }
    else {return false}
} 

function isStudentQualified(student) {
    if ((isStudentOlderThan(student,18) === true) && (doesStudentHaveSkills(student) === true)){
        return true
    }
    else {return false}
}
   
function numberOfStudentsOlderThan(age) {
   var i; var k=0;
    for (i=0;i<students.length;i++){
        if (isStudentOlderThan(students[i],age) === true ) {
            k++
        }
    } 
return k;   
}

function getStudentsWithSkills() {
    var i; var A = [];
    for(i=0;i<students.length;i++) {
        if ( doesStudentHaveSkills(students[i]) === true ) {
            A.push(students[i])    }
   }
return A
}



function getAllStudentsWithSkill(skill) {
    var i; var A = []
    for(i=0;i<students.length;i++) {
        if (students[i].skills.includes(skill) === true ) {
            A.push(students[i])
        }
    }
return A;
} 


var student1 = new createStudent("John", "Doe", "john.doe@gmail.com", 25,"CS")
var student2 = new createStudent("Jordon", "Sheckler", "rasheed_moriet@gmail.com", 21,"MATH")
var student3 = new createStudent("Larry", "Garrett", "lance_barte@gmail.com", 34,"BIOTECH")
var student4 = new createStudent("Helen", "Boggs", "kim.dougla10@yahoo.com", 22,"HISTORY")
var student5 = new createStudent("James", "Carter", "obie.murazi5@gmail.com", 27,"MEDICAL")

addStudent(student1)
addStudent(student2)
addStudent(student3)
addStudent(student4)
addStudent(student5)

addSkills(student1,["HTML","CSS","MATH"])
addSkills(student4,["DANCING","MATH"])
addSkills(student5,["BEATBOX","PAINTING","PRODUCING MUSIC"])


console.log(getAllStudentsWithSkill("MATH"))
