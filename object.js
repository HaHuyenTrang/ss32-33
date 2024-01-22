
// let person = {
//     //key:value
//     //
//     name: "Huyền Trang",
//     age: 19,
//     school: "PTIT",
//     curly: "hhh",
//     eat: function(){
//         console.log("tóp tép");
//     },
//     flirt: function(){
//         console.log("chào em, anh là bố của con em");
//     },
// };

// console.log(person);

// //dot notation (.) 
// person.height = 1.55;
// person.weight = "43kg";

// //read
// console.log("sau khi thêm chiều cao, cân nặng" ,person);

// console.log(`xin chào ${person.name} bạn thật beautiful`);

// //read all
// for(let key in person){
//     console.log(key, person[key] );
//     // console.log(key, person.key);
//     // console.log(key);

// }


// //update
// person.name ="mái iu";

// //delete
// delete person.curly;

// console.log(person);





// let Hoang ={
//     name: "Nguyễn Huy Hoàng",
//     age: "18+",
//     university: "PTIT",
//     charater: "nhiệt tình, hòa đồng, hay trêu bạn, hay đánh bạn",
//     eat: function(){
//         console.log("ăn như heooooo!!!!");
//     },
//     learn: function(){
//         console.log("thông minh!!!");
//     },
// };
 



// function student(name){
//     this.name = name;
//     this.introduce = function(){
//         console.log(`hello, my name is  ${this.name}`);
//     };
// }
// let student1 = new student("Huyền Trang");
// let student2 = new student("Hà Trang");
// let student3 = new student("Huyền Hà");

// console.log("student1: ", student1);
// console.log("student2: ", student2);
// console.log("student3: ", student3);

// student1.introduce();
// student2.introduce();
// student3.introduce();




// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     say (){
//         // console.log(this);
//         console.log("good morning");
//     }
// }

// let person = new Person("Trang", 18);

// console.log(person);
// person.say();









//danh sách sinh viên
// const students =[
//     {
//         id:1,
//         name: "Hà",
//     },
//     {
//         id:2,
//         name: "Huyền",
//     },
//     {
//         id:3,
//         name: "Trang",
//     },

// ];


// class Students{
//      constructor(id, name){
//         this.id = id;
//         this.name = name;
//      }
// }



// const students =[
//     new Students(1, "Hà"),
//     new Students(2, "Huyền"),
//     new Students(3, "Trang"),

// ];

// console.log(students);

// console.log(students[1]);
// console.log(students[1].id);
// console.log(students[1].name);


// for(let i =0; i<students.length; i++){
//     console.log(students[i]);
//     console.log(students[i].id);
//     console.log(students[i].name);
// }



// //create
// let newStudents = new Students("" ,"");
// newStudents.id = +prompt("nhập id: ");
// newStudents.name = prompt("nhập tên: ");

// students.splice(1,0, newStudents);//chèn vào 1 vị trí
// console.log(newStudents);


// //up date
// students[0].name = "L O V E";

// console.log(students);

//xóa đầu, cuối, bất kì
//students.pop()
//students.splice()
//student.shift()







let person = {
    //key:value
    //
    name: "Huyền Trang",
    age: 19,
    school: "PTIT",
    curly: "hhh",
    eat: function(){
        console.log("tóp tép");
    },
    flirt: function(){
        console.log("chào em, anh là bố của con em");
    },
    address:{
        number: 20,
        street:"Trần Phú",
        ward: "văn quán",
        district: "Hà Đông",
        city: "Hà Nội"
    }
};

console.log(person);


console.log( person.address.city );
//nested object//đối tượng lồng đối tượng





