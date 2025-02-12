let person = {
    name: "Hashim",
    age: 25,
    isStudent:true,

    registeredCourses : {

        course1 :{
            title:"PF",
            isPassed:true

        }



    },

    displayName: function(){
        return this.name;


    }

};




//console.log(person);

let person1 = new Object();

person1.name="Talha";
person1.isStudent=true;
person1.gender="Male";

console.log(person1);

let person2 = Object.create(null);
person2.name="yousuf";

let idVal = "registeredCourses";
let sub = "subject1"

//console.log(person["registeredCourses"]["subject1"]);

console.log(person.displayName());


