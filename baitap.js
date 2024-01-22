//bài 1
function Information(id, name, phone, address){
    this.id = id;
    this.name = name;
    this.phone =phone;
    this.address = address;
}

let newInformation = new Information("" ,"");
newInformation.id = +prompt("nhập id: ");
newInformation.name = prompt("nhập tên: ");
newInformation.phone = prompt("nhập sdt: ");
newInformation.address = prompt("nhập địa chỉ: ");


console.log(newInformation);


//bài 2
let information={
    id:1,
    name:"Trang",
    phone:123456,
    address:"Sơn La",
}
 delete information.address;
 information.email = "example@example.com";

 console.log(information);


 //bài 3
var students = [];

var Students = parseInt(prompt("Nhập số lượng sinh viên:"));
function Student(id, name){
   this.id = id;
   this.name = name;
 }

for (var i = 1; i <= Students; i++) {

StudentId = prompt("Nhập mã sinh viên:");
StudentName = prompt("Nhập tên sinh viên:");
var student = new Student(StudentId, StudentName);

students.push(student);


}
console.log("Danh sách sinh viên:",students);



//bài 4
let product={
    id:1,
    name:"Trang",
    price:"20.000$",
    quantity:1,
}
console.log(product);
console.log(product.id);
console.log(product.name);
console.log(product.price);
console.log(product.quantity);



//bài 5

var books = [
    { author: "TB", name: "Yêu em" },
    { author: "AD", name: "vì sao tinh tú" },
    { author: "OO", name: "123 con ve" },
    { author: "PL", name: "206 meo meo" },
  ];
  

  var authorToSearch = prompt("Nhập tên tác giả:");
  

  var found = false;
  for (var i = 0; i < books.length; i++) {
    if (books[i].author === authorToSearch) {
      // Nếu tìm thấy, in ra thông tin sách và đánh dấu đã tìm thấy
      console.log("Sách tìm thấy:");
      console.log(books[i]);
      found = true;
    }
  }
  
  // Nếu không tìm thấy sách, in ra thông báo "Không tìm thấy sách"
  if (!found) {
    console.log("Không tìm thấy sách");
  }



  //bài 6
  function sortProducts(products) {
    products.sort(function(a, b) {
      return a.price - b.price;
    });
  }
  
  // Mảng sản phẩm ban đầu
  var products = [
    { id: 1, name: 'iPhone 12', price: 20000000 },
    { id: 2, name: 'iPhone 11', price: 10000000 },
    { id: 3, name: 'samsung note 10', price: 500000000 }
  ];
  

  sortProducts(products);
  
  for (var i = 0; i < products.length; i++) {
    console.log(i + ':', products[i]);
  }



//bài 7
const readline = require('readline-sync');

const users = [];


function isValidEmail(email) {
  // Sử dụng biểu thức chính quy để kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Hàm lấy thông tin từ người dùng
function getUserInfo() {
  const id = readline.question("Nhập ID: ");
  const userName = readline.question("Nhập tên người dùng: ");
  const email = readline.question("Nhập email: ");
  const password = readline.question("Nhập mật khẩu: ");


  if (!userName || userName.length < 3 || !email || !isValidEmail(email) || !password || password.length < 8) {
    console.log(" Vui lòng nhập lại.");
    return getUserInfo();
  }


  const user = {
    id: id,
    user_name: userName,
    email: email,
    password: password
  };

  return user;
}


const user = getUserInfo();
users.push(user);

console.log(users);



//bài 1-ss32 
var person = {
    name: "Trang",
    age: 18,
    address: "Trần Phú",
  };
  

  console.log("Tên: " + person.name);
  console.log("Tuổi: " + person.age);
  console.log("Địa chỉ: " + person.address);
  

  person.dateOfBirth = "15/06/2005";
  delete person.age;
  
 
  console.log("Sau khi thêm ngày sinh và xóa tuổi:",person);



  //bài 2
var phoneBook = {
    contacts: [
      {
        name: "hà",
        phone: "1237890",
        email: "huyen@gmail.com"
      },
      {
        name: "trang",
        phone: "9873210",
        email: "trang@gmai.com"
      }
    ]
  };
  
  for (var i = 0; i < phoneBook.contacts.length; i++) {
    var contact = phoneBook.contacts[i];
    console.log("Tên: " + contact.name);
    console.log("Điện thoại: " + contact.phone);
    console.log("Email: " + contact.email);
    console.log(""); // In một dòng trống giữa các liên lạc
  }
 



  //bài 4

function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }
  

  Book.prototype.displayInfo = function() {
    console.log("Tiêu đề: " + this.title);
    console.log("Tác giả: " + this.author);
    console.log("Năm xuất bản: " + this.publishedYear);
    console.log("-----------------------------");
  };
  
  //  thư viện
  function Library() {
    this.books = [];
  }
 //thêm
  Library.prototype.addBook = function(book) {
    this.books.push(book);
  };
  

  Library.prototype.displayBooks = function() {
    console.log("Danh sách sách trong thư viện:");
    console.log("-----------------------------");
    this.books.forEach(function(book) {
      book.displayInfo();
    });
  };
  

  var library = new Library();
  
  // Tạo một số đối tượng sách và thêm vào thư viện
  var book1 = new Book("Yêu nước", "TT", 2000);
  var book2 = new Book("Thương dân", "ATB", 2005);
  var book3 = new Book("Lá lành đùm lá rách", "ABC", 2010);
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
 
  library.displayBooks();




  //bài 3
  let phoneBook = {
    contacts: [
      {
        name: "hà",
        phone: "1237890",
        email: "huyen@gmail.com"
      },
      {
        name: "trang",
        phone: "9873210",
        email: "trang@gmai.com"
      }
    ],
  
    displayInfo: function() {
      for (let i = 0; i < this.contacts.length; i++) {
        let contact = this.contacts[i];
        console.log("Tên: " + contact.name);
        console.log("Điện thoại: " + contact.phone);
        console.log("Email: " + contact.email);
        console.log();
      }
    }
  };
  
  phoneBook.displayInfo();

