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
	var question1 = new questionSet("Who makes the Focus?","Ford","Chevrolet","GMC","Pontiac",0);
	question1.showQuestion();
	question1.showAnswers();
	question1.showCorrectAnswer();
	var question2 = new questionSet("Where did Mini originate?","USA","United Kingdom","Japan","Germany",1);


    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});

