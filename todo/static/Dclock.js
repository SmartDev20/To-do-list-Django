setInterval( function() {
   var now = new Date;
   var hour = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
   var period = 'AM'
   if (hour > 12) {
       hour -= 12;
       period = 'PM';
   }
   if (hour < 10) {
      hour = '0' + hour;
   }
   if (minute < 10){
      minute = '0' + minute;
   }
   if (second < 10) {
      second = '0' + second;
   }
   var clockTime = hour + ' : ' + minute + ' : ' + second  + ' ' + period;
   var clock = document.getElementById('clock') ;
   clock.innerText = clockTime ;
} , 1000 );

var now = new Date;
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();

var dateNow = day +' - ' + month + ' - ' + year ;
var nowDoc = document.getElementById('date')
nowDoc.innerText = dateNow;


