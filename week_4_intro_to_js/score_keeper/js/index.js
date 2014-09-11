var score = 0;

function reset() {
	//reset score to zero
	score = 0;
	document.getElementById('result').innerHTML = score;
	}

function addFive() {
	//add 5 to the score
	score += 5;
	document.getElementById('result').innerHTML = score;
	}

function addTen() {
	//add 10 points
	score += 10;
	document.getElementById('result').innerHTML = score;
	}

function minusOne() {
	//subract 1 point
	score--;
	document.getElementById('result').innerHTML = score;	
	}

document.getElementById('zero').onclick = reset;
document.getElementById('add5').onclick = addFive;
document.getElementById('add10').onclick = addTen;
document.getElementById('sub1').onclick = minusOne;