var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var studentGrade = {
  student: student.value,
  grade: grade.value,
  comment: comment.value.trim()
};

//Local Storage needs JSON.strignify() to convert an object into a string so we ca stored in local storage 
//JSON is a data format that we are able to stored as strinds and also send over the wired.
// we needed it so java Script know how to corrected 

localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});

//JASON.parse - allows you to get back the data and returns it inot an object

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}


