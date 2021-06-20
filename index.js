var readLineSync = require('readline-sync');

var score = 0;

var userName = readLineSync.question('Hey Hi.......May i know your name please? ');

console.log('Hi ' + userName + '... Good Day!! Lets play a game to know how well you know Raaji \n');


console.log('Here are the Questions..\n');

var questions = [{
  question: 'What is Raaji original name? ',
  answer: 'Sravanthi'
}, {
  question: 'What is her age? ',
  answer: '24'
}, {
  question: 'Where to i work? ',
  answer: 'NCR Corporation'
}, {
  question: 'Who is her favorite hero? ',
  answer: 'Mahesh'
}, {
  question: 'What is my favorite color? ',
  answer: 'Blue'
} ]

for(var i = 0; i < questions.length; i++)
{
  var currentQuestion = questions[i];

  play(currentQuestion.question, currentQuestion.answer)

}

function play(question, answer) {
   
   var userAnswer = readLineSync.question(question);

   if(userAnswer === answer)
   {
     console.log('Your Right!!');
     score ++
   }
   else
   {
     console.log("Wrong");
   }

  console.log("current Score: ", score);
  console.log("------------------------");
}

console.log("Heyyyyy Your Scrore is: ", score);