var colors = ['#f3d0ce', '#d0ecf2', '#d5ece1'];
var currentIndex = 0;
setInterval(function () {
   document.body.style.backgroundColor = colors[currentIndex];
   currentIndex = (currentIndex + 1) % colors.length;
}, 2000);