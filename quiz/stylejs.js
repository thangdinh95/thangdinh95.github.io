var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');

var question = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	question.textContent = (questionIndex +1) + '. ' + questions[questionIndex].question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
}
loadQuestion (currentQuestion);


var button = document.getElementsByTagName('button');  //[#op1, #opt2, #opt3];
for (var i = 0; i < button.length; i++) {				//next question
	button[i].onclick = function() {
		if (this.textContent == questions[currentQuestion].answer) {
			score += 1;
			if (score == 5) {
				congrats();
			}
		}

		if (currentQuestion < 4) {
			currentQuestion++;
			loadQuestion(currentQuestion); 
		} else if (currentQuestion == 4) {
			endGame();
		}
	}
}

function endGame () {
	var end = document.getElementById('end');
	container.style.display = 'none';
	end.style.display = '';
	result.style.display='';
	result.textContent="Your Score: " + score;
}

function congrats() {
	window.location.href = 'congrats.html';
}
