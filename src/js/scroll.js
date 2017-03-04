(function () {
   'use strict'
   
   var startButton = document.getElementById('startButton');
   var start = document.getElementById('start');
   startButton.onclick = zenscroll.to(start);
});