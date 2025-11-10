
function calculategrade(){
let mark1=parseFloat(document.getElementById("mark1")).value;
let mark2=parseFloat(document.getElementById("mark2")).value;
let mark3=parseFloat(document.getElementById("mark3")).value;
let mark4=parseFloat(document.getElementById("mark4")).value;
let mark5=parseFloat(document.getElementById("mark5")).value;
let total=mark1+mark2+mark3+mark4+mark5;
let avg=total/5;

let grade;
if(avg<90){
    grade="A";
}else if (avg >= 75) grade = "B";
  else if (avg >= 50) grade = "C";
  else grade = "Fail";

  document.getElementById("result").innerHTML=
    "Total: " + total + "<br>Average: " + avg.toFixed(2) + "<br>Grade: " + grade;

}
