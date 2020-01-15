
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var colors = ['black' , 'white' , 'red' , 'green' , 'blue'];

for (var i=0;i<5;i++) {
	document.body.style.backgroundColor = colors[i];
	sleep(100);
}