$(function(){

console.log("slub");

//var date = new Date(2017, 9, 14, 14,);
//var howMuchTime = Math.ceil(date - today);
var countDown=setInterval(function(){
(function time(){
 var today = new Date();
 var mr = new Date(2017, 9, 14, 14,);
 var element = document.querySelector('#test1');
 var dayDiff = Math.floor((mr.getTime()-today.getTime())/(1000 * 60 * 60 * 24));
 var hoursDiff = Math.floor((mr.getTime()-today.getTime())% (1000 * 60 * 60 * 24)/ (1000 * 60 * 60));
 var minutesDiff = Math.floor((mr.getTime()-today.getTime())% (1000 * 60 * 60)/ (1000 * 60));
 var secundDiff = Math.floor((mr.getTime()-today.getTime())%(1000 * 60) / 1000);
 element.innerHTML =
 dayDiff+' dni '+hoursDiff+' godzin'+minutesDiff+' minut'+secundDiff+' sekund';

})();

}, 10);



});
//console.log(date);
//element.innerHTML = "Dzisiaj mamy" + today.getDate() + " "+ (today.getMonth()+1) +" "+
//today.getFullYear() + " "+ (today.getHours())+ " "+(today.getMinutes());
//console.log(today);
//console.log(out);
//$('#countingDown').text(out);
