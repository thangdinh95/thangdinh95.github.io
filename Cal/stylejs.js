	var screen = document.getElementById("result");

function press(button) {
	if (screen.innerText.length < 13) {
		screen.innerText += button.innerHTML;
	}
}


document.getElementById("red").onclick = function () {
	if (screen.innerHTML == "") {
		alert('Input a number');
	} else {
	screen.innerHTML = "";
}
}


document.getElementById("equal").onclick = function(){
	if (screen.innerHTML == "") {
		alert('Input a number');
	} else {
	screen.innerHTML = eval(screen.innerHTML);
}
}


document.getElementById("red1").onclick = function(){
	screen.innerHTML = screen.innerHTML.slice(0,-1);
}


