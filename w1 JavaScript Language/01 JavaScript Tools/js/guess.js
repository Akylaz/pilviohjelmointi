let targetNumber = Math.floor(Math.random() * 10) + 1;
let tries = 0;

function init () {
	console.log("DU MÅSTE GUESSA DEN HÄR NUMBERNORNA!!: " + targetNumber);
	let form = document.getElementById("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		check(e.target[0].value)
		})
}

function check (value) {
	if(targetNumber == value) {
		showWin();
		tries = 0;
	} else {
		tries++;
		showError();
	}
	if(tries >= 5) {
		showLoss();
	}
}

function showWin () {
	alert("DUR HAR WINNAT EN RUMPADILDO");
	document.body.innerHTML = "<h1> DU WINNAR MÅNGA RUMPADILDORNARNORNERNA!! </h1>";
}

function showError () {
	alert("DUR HAR INTE WINNnnnnnnnnnnnnnnn.... *INSERT FATAL ERROR HERE*")
}

function showLoss () {
	alert("DUR HAR INTE WINNAT NÅGONTING!!")
	document.body.innerHTML = "<h1> DU WINNAR NÅGONTIG SOM DE FORM AV RUMPADILDORNARNORNERNA!!SÅ DU LOSSARNORNA!!!!!!!½!!!!\"%!\"\"#!\"#%!\"#%!\"¤\" </h1>";
}

init();
