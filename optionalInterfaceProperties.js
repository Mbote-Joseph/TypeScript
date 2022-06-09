var registerStudent = function (info) {
    var newStudent = { id: info.id, name: info.name, favoriteColor: "none" };
    if (info.favoriteColor) {
        newStudent.favoriteColor = info.favoriteColor;
    }
    return newStudent;
};
var studentA = registerStudent({ id: 1, name: "John" });
var studentB = registerStudent({ id: 2, name: "Jane", favoriteColor: "red" });
console.log(studentA);
console.log(studentB);
