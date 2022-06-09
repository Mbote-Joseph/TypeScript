interface Student {
  readonly id: number;
  name: string;
}

const foo = (student: Student) => {
  console.log(student.id);
  console.log(student.name);
};

const student = {
  id: 1,
  name: "John",
};

foo(student);
student.name = "Jane";
console.log(student.name);
