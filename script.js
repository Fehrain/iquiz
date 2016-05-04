$(document).ready(function() 
{
	function questionSet(question,answer1,answer2,answer3,answer4,correctAnswer)
	{
		this.question = question;
		this.answer1 = answer1;
		this.answer2 = answer2;
		this.answer3 = answer3;
		this.answer4 = answer4;
		this.correctAnswer = correctAnswer;
		var answerArray = [this.answer1,this.answer2,this.answer3,this.answer4];
		this.answerArray = answerArray;
		this.showQuestion = function(){
			console.log(this.question);
		}
		this.showAnswers = function()
		{
			var arrayIndex = 0;
			for (arrayIndex in answerArray)
			{
				console.log(answerArray[arrayIndex]);
				}
			}
		this.showCorrectAnswer = function()
		{
			console.log("The correct answer is: " + answerArray[this.correctAnswer]);
			
		}
	}
	var question1 = new questionSet("1. Who makes the Focus?","Ford","Chevrolet","GMC","Pontiac",0);
	/*question1.showQuestion();
	question1.showAnswers();
	question1.showCorrectAnswer();*/
	var question2 = new questionSet("2. Where did Mini originate?","USA","United Kingdom","Japan","Germany",1);
	/*question2.showQuestion();
	question2.showAnswers();
	question2.showCorrectAnswer();*/
	var question3 = new questionSet("3. Test","one","two","three","four",0);
	var listOfQuestions = [question1,question2,question3];
	var questionArray = [question1,question2,question3];
	//console.log(questionArray);
    $('.start').click(function() {
		
		var questionNumber = 0;
		var radioAnswer
		$('.question').append(question1.question);
		for (questionNumber in question1.answerArray)
		{
			$('.answer').append("<div class='herp'><input type='radio' name = 'q1' value ="+questionNumber+">"+question1.answerArray[questionNumber]+"</input></div>");
		}
		
		
        $('.start').hide();
		$('.next').append("<br><button type='button' class='nextButton'>Next</button>");
    });
	
	var questionOrder = 1;
	$('.next').click(function()
	{
		
		
		var currentQuestion = questionArray[questionOrder];
		console.log(currentQuestion);
		questionOrder++;
		questionNumber = 0;
		$('.question').replaceWith("<p class='question'>"+currentQuestion.question+"</p>");	
		//$('.answer').replaceWith("<div class='answer'><div><input type='radio' name = 'q1' value ="+questionNumber+">"+currentQuestion.answerArray[questionNumber]+"</input></div></div>");
		/*$('.answer').replaceText(function(){
			var answerIndex = 0;
			console.log("hi");
			console.log(currentQuestion.answerArray);
			for(answerIndex in currentQuestion.answerArray)
			{
				console.log(answerIndex);
				$('div').add("<div><input type='radio' name = 'q1' value ="+questionNumber+">"+currentQuestion.answerArray[answerIndex]+"</input></div>")
			}*/
		$('.herp').remove();
		for (questionNumber in currentQuestion.answerArray)
		{
			$('.answer').append("<div class='herp'><input type='radio' name = 'q1' value ="+questionNumber+">"+currentQuestion.answerArray[questionNumber]+"</input></div>");
		}
	});
});

