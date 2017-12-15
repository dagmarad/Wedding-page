$(function(){


//var date = new Date(2017, 9, 14, 14,);
//var howMuchTime = Math.ceil(date - today);
function time(mr, element){
  if(element !== null){
 var today = new Date();
 var dayDiff = Math.floor((mr.getTime()-today.getTime())/(1000 * 60 * 60 * 24));
 var hoursDiff = Math.floor((mr.getTime()-today.getTime())% (1000 * 60 * 60 * 24)/ (1000 * 60 * 60));
 var minutesDiff = Math.floor((mr.getTime()-today.getTime())% (1000 * 60 * 60)/ (1000 * 60));
 var secundDiff = Math.floor((mr.getTime()-today.getTime())%(1000 * 60) / 1000);
 if (dayDiff!=1){
   var dayForm = "dni";
 } else {
   var dayForm="dzień";
 }
 if (hoursDiff==1){
   var hoursForm = "godzinę";
 } else if (hoursForm>1&&hoursForm<5||hoursForm>21) {
   var hoursForm="godziny";
 }else {
   var hoursForm="godzin";
 }
 if (minutesDiff==1){
   var minutesForm = "minutę";
 } else if (minutesDiff >1&&minutesDiff <5||minutesDiff >21&&minutesDiff<25
 ||minutesDiff >31&&minutesDiff<35 ||minutesDiff >41&&minutesDiff<45
||minutesDiff >51&&minutesDiff<55) {
   var minutesForm ="minuty";
 }else {
   var minutesForm ="minut";
 }
 if (secundDiff==1){
   var secondForm = "sekundę";
 } else if (secundDiff >1&&secundDiff <5||secundDiff >21&&secundDiff<25
 ||secundDiff >31&&secundDiff<35 ||secundDiff >41&&secundDiff<45
||secundDiff >51&&secundDiff<55) {
   var secondForm ="sekundy";
 }else {
   var secondForm ="sekund";
 }

 element.innerHTML =
 dayDiff+' '+dayForm+', <span>'+hoursDiff+'</span> '+hoursForm+', <span>'+minutesDiff+'</span> '+ minutesForm+ ' i <span>'+secundDiff+'</span> '+secondForm;
  }
}

var countDown=setInterval(function(){
  time(new Date(2018, 9, 14, 14), document.querySelector('#test1'));
  time(new Date(2018, 9, 14, 15), document.querySelector('#test2'));
  time(new Date(2018, 9, 28, 18), document.querySelector('#test3'));
}, 1000);
time(new Date(2018, 9, 14, 14), document.querySelector('#test1'));
time(new Date(2018, 9, 14, 15), document.querySelector('#test2'));
time(new Date(2018, 9, 28, 18), document.querySelector('#test3'));





});
//console.log(date);
//element.innerHTML = "Dzisiaj mamy" + today.getDate() + " "+ (today.getMonth()+1) +" "+
//today.getFullYear() + " "+ (today.getHours())+ " "+(today.getMinutes());
//console.log(today);
//console.log(out);
//$('#countingDown').text(out);
