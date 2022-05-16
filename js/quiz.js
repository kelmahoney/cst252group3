//Jeremy
// 4.27.22
//Function that builds quiz
function quizBuilder(){
  const output = [];

  questions.forEach(
    (currentQuestion, questionNumber) => {
    //variable to store the list of possible answers
    const answers = [];

    for(letter in currentQuestion.answers){

      // ...add circle button thing
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    /*output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <p class="answers"> ${answers.join('')} </p>`
    );*/
    $('#quiz').append("<p>"+currentQuestion.question+"</p>")
    $('#quiz').append("<p>"+answers.join('')+"</p>")

    //append right and wrong answers responses to quiz
    $('#quiz').append('<p id="wrong'+ questionNumber +'">'+currentQuestion.wrongAnswerResponse+ '</p>')

    $('#quiz').append('<p id="right'+ questionNumber +'">'+currentQuestion.rightAnswerResponse+ '</p>')
    //hide right and awrong answer responses
    $('#wrong' + questionNumber).hide();
    $('#right' + questionNumber).hide();
  });
}

//Function that displays results
function resultDisplay(){
    // get answer containers
    const answerholders = quizholder.querySelectorAll('.answers');

    //keep track of user answers
    let correctAnswers = 0;
    let numOfQuestions = questions.length;

    questions.forEach(
      (currentQuestion, questionNumber) => {
        // find selected answer
          //const answerholder = answerholders[questionNumber];
          var selector = `input[name=question${questionNumber}]:checked`;
          var userAnswer = $(selector).val();


      //if answer is correct
      if(userAnswer == currentQuestion.rightAnswer){
        //increments correct answers tally
        correctAnswers++;
        //show right answer response and hide wrong answer response
        $("#right" + questionNumber).show();
        $("#wrong" + questionNumber).hide();
      }

      else{
        //show wrong answer response and hide right answer response
        $("#wrong" + questionNumber).show();
        $("#right" + questionNumber).hide();
      }

    });
    //tell user how many questions they got correct
    $('#quiz').append("<p> You got "+correctAnswers + "/"+ numOfQuestions +" answers correct!</p>")
}

//reference HTML variables
const quizholder = document.getElementById("quiz");
const resultsholder = document.getElementById("results");
const submitButton = document.getElementById("submit");
const questions = [
    {
      question: "What approaches are there to reducing plastic pollution?",
      answers: {
        a: "Pulling plastics from the ocean",
        b: "Preventing Plastics from making their way into waterways",
        c: "Organizing beach cleanups",
        d: "All of the above"
      },
      rightAnswer: "d",
      rightAnswerResponse: "Organizing beach cleaups, pulling plastics from the ocean, and preventing plastics from ending up in waterways are all ways to reduce plastic pollution.",
      wrongAnswerResponse: "Not quite!"
    },
    {
      question: "What is the biggest concern about people's attempts to clean the ocean?",
      answers: {
        a: "Pulling plastics out of the water does nothing to remove degraded microplastics",
        b: "It's too difficult",
        c: "Plastic pollution is increasing each year",
      },
      rightAnswer: "a",
      rightAnswerResponse: "Pulling plastics out of the ocean is helpful, but there is no way to remove the degraded microplastics in the ocean on a large scale.",
      wrongAnswerResponse: "Try again!"
    },
    {
    question: "What percent of plastic is recycled?",
    answers: {
      a: "52%",
      b: "24%",
      c: "9%",
      d: "3%"
    },
    rightAnswer: "c",
    rightAnswerResponse: "Unfortunately only a very small percentage of all plastic waste gets recycled.With making sure you properly dispose of your plastic waste, you too can make a difference.",
    wrongAnswerResponse: "Incorrect!"
    },
    {
    question: "How many tons of plastic are estimated to be in the ocean?",
    answers: {
      a: "20 million tons",
      b: "15 trillion tons",
      c: "14 million tons",
      d: "5 thousand tons"
    },
    rightAnswer: "c",
    rightAnswerResponse: "The amount when last counted was standing at nearly 14 million tons of plastic waste in our oceans.",
    wrongAnswerResponse: "Close, but no dice!"
    },
    {
    question: "What percent of plastic ends up in the ocean?",
    answers: {
      a: "40%",
      b: "30%",
      c: "20%",
      d: "10%"
    },
    rightAnswer: "d",
    rightAnswerResponse: "While this seems like a small amount this actually comes to be nearly 14 million tons of plastic floating in our oceans. With the help of professional ocean clean up crews and your own contributions at home we can help reduce this number.",
    wrongAnswerResponse: "Hazard another guess!"
    },
    {
    question: "True or false: Plastic is more harmful than microparticles from the plastic?",
    answers: {
      a: "True",
      b: "False",

      },
    rightAnswer: "b",
    rightAnswerResponse: "Microplastics tend to be more harmful because they can carry traces of metal and potentially harmful chemicals. If released these chemicals can become toxic to the environment it’s in.",
    wrongAnswerResponse: "Give it another shot!"
    },
    {
    question: "True or false: Plastic pollution in the ocean has an impact on climate change?",
    answers: {
      a: "True",
      b: "False",
      },
    rightAnswer: "a",
    rightAnswerResponse: "Plastic Pollution causes climate change because of the amount of gas emissions released into the atmosphere, causing damage to the ozone layer.",
    wrongAnswerResponse: "Try once more with feeling!"
    },
    {
    question: "How can we lessen our impact on plastic pollution?",
    answers: {
      a: "Pick up trash from the beach",
      b: "Adhere to local guidelines",
      c: "Reduce our plastic consumption",
      d: "All of the above"
      },
      rightAnswer: "d",
      rightAnswerResponse: "All of these options are great was to help minimize your own plastic pollution.",
      wrongAnswerResponse: "Don't give up!"
    }
];



//Calls function to display the quiz immediately
quizBuilder();

//Runs the result displaying function when the button is pressed
submitButton.addEventListener("click", resultDisplay);
