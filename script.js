$(document).ready(function() 
{
	$('.next').hide();
	$('.finalScore').hide();
	
	
	
	
	//----------------------------------       QUESTION CREATION Object FUNCTION     ------------------------------//
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
	
	var question2 = new questionSet("2. Where did Mini originate?","USA","United Kingdom","Japan","Germany",1);
	
	var question3 = new questionSet("3. Test","one","two","three","four",0);
	
	var listOfQuestions = [question1,question2,question3];
	
	var questionArray = [question1,question2,question3];
	
	var userAnswers = new Array(3);
	
	var questionAnswerArray = [question1.correctAnswer,question2.correctAnswer,question3.correctAnswer];
	
	
	//----------------------------------       START BUTTON FUNCTION     ------------------------------//
    $('.start').click(function() 
	{
		$('h2').hide();
		var questionNumber = 0;
		var radioAnswer
		$('.question').append(question1.question);
		for (questionNumber in question1.answerArray)
		{
			$('.answer').append("<div class='herp'><input type='radio' name = 'q1' value ="+questionNumber+">"+question1.answerArray[questionNumber]+"</input></div>");
		}
		
		
        $('.start').hide();
		$('.next').unbind('.click');
		$('.next').show();
    });
	
	var questionOrder = 1;
	
	
	
	//----------------------------------       NEXT BUTTON FUNCTION     ------------------------------//
	
	
	$('.next').click(function()
	{
		if ($('input[type=radio]:checked').size() > 0)
		{
		
		var currentQuestion = questionArray[questionOrder];
		
		
		
		
		
		if(questionArray[questionOrder+1] === undefined)
		{
			$('.next').hide();
			$('.finalScore').show();
		}
		
		var currentQuestionUserAnswer = $('input[name=q1]:checked').val();
		console.log("User's selected value: "+ currentQuestionUserAnswer);
		userAnswers[questionOrder -1] = currentQuestionUserAnswer;
		console.log("User's Answer Array: " + userAnswers);
		
		
		console.log(currentQuestion);
		
		questionOrder++;
		
		questionNumber = 0;
		
		$('.question').replaceWith("<p class='question'>"+currentQuestion.question+"</p>");	
		
		
		
		$('.herp').remove();
		for (questionNumber in currentQuestion.answerArray)
		{
			$('.answer').append("<div class='herp'><input type='radio' name = 'q1' value ="+questionNumber+">"+currentQuestion.answerArray[questionNumber]+"</input></div>");
		}
		
		}
	});
	
	//----------------------------------       CALCULATE BUTTON FUNCTION     ------------------------------//
	
	$('.finalScore').click(function()
	{
		$('.question').hide();
		$('.herp').hide();
		var currentQuestionUserAnswer = $('input[name=q1]:checked').val();
		console.log("User's selected value: "+ currentQuestionUserAnswer);
		userAnswers[questionOrder -1] = currentQuestionUserAnswer;
		console.log("User's Answer Array: " + userAnswers);
		
		var score = 0;
		var questionCheck = 0;
		for(questionCheck = 0; questionCheck <3; questionCheck++)
		{
			if (userAnswers[questionCheck] == questionAnswerArray[questionCheck])
			{
				score++;
			}
		}
		
		var result = (score/3)*100;
		
		console.log(score);
		$('.finalScore').hide();
		$('.finalResult').replaceWith("Your score is: " + result + "%");
		 
		 
	});
	
	
	
});

