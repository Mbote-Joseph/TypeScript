interface Info {
  id: number;
  name: string;
  favoriteColor?: string;
}

const registerStudent = (
  info: Info
): { id: number; name: string; favoriteColor: string } => {
  let newStudent = { id: info.id, name: info.name, favoriteColor: "none" };

  if (info.favoriteColor) {
    newStudent.favoriteColor = info.favoriteColor;
  }

  return newStudent;
};

const studentA = registerStudent({ id: 1, name: "John" });
const studentB = registerStudent({ id: 2, name: "Jane", favoriteColor: "red" });
console.log(studentA);
console.log(studentB);
