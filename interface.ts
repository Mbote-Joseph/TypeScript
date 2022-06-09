interface User {
  name: string;
  age: number;
  email: string;
}

function printAllUsers(user: User) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
}

let myUser = { name: "Jose", age: 30, email: "jose@gmail.com" };

printAllUsers(myUser);
