var readlineSync = require('readline-sync');
let score = 0;
let highScoreArr = [
  {
    name : 'Dablue',
    scored : 2
  },
  {
    name : 'XYZ',
    scored : 1
  }
];

// THE QUESTONS AND ANSWERS
let quizArr = [
  { 
    question : 'Do you know Doraemon? ',
    answer : 'Yes'
  }, 
  { 
    question : 'Who is the best friend of Doraemon? ',
    answer : 'Nobita'
  },
  { 
    question : 'Who teases Nobita? ',
    answer : 'Gian'
  },
  { 
    question : "What is the name of Gian's partner in crime? ",
    answer : 'Suneo'
  },
  { 
    question : 'Is Suneo poor or rich? ',
    answer : 'Rich'
  }
];

function breakLine() {
  console.log('===============');
};

function welcome() {
  
  console.log('Welcome to the Doraemon Quiz-Game!');
  let userName = readlineSync.question('What is your name? ');
  
  console.log('Hello! ' + userName.toUpperCase());
  
  let funArr =['Ready', 'Steady', 'Go!'];
  
  for (let i=0; i<funArr.length; i++) {
    console.log(funArr[i]);
  };
  
  breakLine();
};

// THE GAME
function checks(ques, ans) {
  var input = readlineSync.question(ques);
  
  if (input.toLowerCase() === ans.toLowerCase()) {
    console.log('Right answer!'); 
    score++;
  } 
  else {
    console.log('Wrong answer!');
  }
  
   breakLine();
};

function prompt() {
  
  for (let i=0; i<quizArr.length; i++) {
     var quiz = quizArr[i];  
     checks(quiz.question, quiz.answer);
  }
  
};

// GAME END
function conclude() {
  
  console.log('Thanks! for playing the quiz.');
  console.log('Your score is ' + score);
  breakLine();

  var highScore = highScoreArr[0];
  
  console.log('High-score : ' + highScore.scored + ' scored by ' + highScore.name);
  
  if(score >= highScore.scored) {
    
    console.log('Congrats!! You have beaten the High- score. Send me a screenshot, so that I update the High-score.');
    
  };
  
};

welcome();
prompt();
conclude();
