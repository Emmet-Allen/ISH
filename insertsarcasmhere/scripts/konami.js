function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {
	alert('Either you spend too much time playing video games or you looked at the source code.');
	console.log("I'm watching you.");
	
	var audio = new Audio('FF_victory.mp3');
	audio.play();
		
	})
