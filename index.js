let daily= document.getElementById("day");
let week= document.getElementById("wee");
let monthly= document.getElementById("mon");



var w1= document.getElementById('w1');
var w2= document.getElementById('w2');
var s1= document.getElementById('s1');
var s2= document.getElementById('s2');
var p1= document.getElementById('p1');
var p2= document.getElementById('p2');
var e1= document.getElementById('e1');
var e1= document.getElementById('e2');
var so1= document.getElementById('so1');
var so2= document.getElementById('so2');
var sel1= document.getElementById('sel1');
var sel2= document.getElementById('sel2');

daily.addEventListener("click", function() {
   
    document.getElementById('w1').innerHTML="5hrs";
    document.getElementById('w2').innerHTML="Last Day-"+ "7hrs";

    document.getElementById('s1').innerHTML="0hrs";
    document.getElementById('s2').innerHTML="Last Day-"+ "1hrs";

    document.getElementById('p1').innerHTML="1hrs";
    document.getElementById('p2').innerHTML="Last Day-"+ "2hrs";


    document.getElementById('e1').innerHTML="1hrs";
    document.getElementById('e2').innerHTML="Last Day-"+ "1hrs";

    document.getElementById('so1').innerHTML="1hrs";
    document.getElementById('so2').innerHTML="Last Day-"+ "3hrs";

    document.getElementById('sel1').innerHTML="0hrs";
    document.getElementById('sel2').innerHTML="Last Day-"+ "1hrs";

});


week.addEventListener("click", function() {
   
    document.getElementById('w1').innerHTML="32hrs";
    document.getElementById('w2').innerHTML="Last Week-"+ "36hrs";

    document.getElementById('s1').innerHTML="4hrs";
    document.getElementById('s2').innerHTML="Last Week-"+ "7hrs";

    document.getElementById('p1').innerHTML="10hrs";
    document.getElementById('p2').innerHTML="Last Week-"+ "8hrs";


    document.getElementById('e1').innerHTML="4hrs";
    document.getElementById('e2').innerHTML="Last Week-"+ "5hrs";

    document.getElementById('so1').innerHTML="5hrs";
    document.getElementById('so2').innerHTML="Last Week-"+ "10hrs";

    document.getElementById('sel1').innerHTML="2hrs";
    document.getElementById('sel2').innerHTML="Last Week-"+ "2hrs";

});

monthly.addEventListener("click", function() {
   
    document.getElementById('w1').innerHTML="103hrs";
    document.getElementById('w2').innerHTML="Last Month-"+ "128hrs";

    document.getElementById('s1').innerHTML="13hrs";
    document.getElementById('s2').innerHTML="Last Month-"+ "19hrs";

    document.getElementById('p1').innerHTML="23hrs";
    document.getElementById('p2').innerHTML="Last Month-"+ "29hrs";


    document.getElementById('e1').innerHTML="11hrs";
    document.getElementById('e2').innerHTML="Last Month-"+ "18hrs";

    document.getElementById('so1').innerHTML="21hrs";
    document.getElementById('so2').innerHTML="Last Month-"+ "23hrs";

    document.getElementById('sel1').innerHTML="7hrs";
    document.getElementById('sel2').innerHTML="Last Month-"+ "11hrs";

});