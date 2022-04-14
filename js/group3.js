//crebit: dcode (https://www.youtube.com/watch?v=kp0LctdmwzE)//
//navigation
function activateNavigation() {
  const sections = document.querySelectorAll(".section");
  const navContainer = document.createElement("nav");
  const navItems = Array.from(sections).map((section) => {
    return `
                    <div class="nav-item" data-for-section="${section.id}">
                        <a href="#${section.id}" class="nav-link"></a>
                        <span class="nav-label">${section.dataset.label}</span>
                    </div>
                `;
  });

  navContainer.classList.add("nav");
  navContainer.innerHTML = navItems.join("");

  const observer = new IntersectionObserver(
    (entries) => {
      document.querySelectorAll(".nav-link").forEach((navLink) => {
        navLink.classList.remove("nav-link-selected");
      });

      const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];

      document
        .querySelector(
          `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
        )
        .classList.add("nav-link-selected");
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));

  document.body.appendChild(navContainer);
}

activateNavigation();

// end of navigation


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

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  });
  quizContainer.innerHTML = output.join('');
}

//Function that displays results
function resultDisplay(){


}

//reference HTML variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const questions = [
    {
      question: "What percent of plastic ends up in the ocean?",
      answers: {
        a: "Pulling plastics from the ocean",
        b: "Preventing Plastics from making their way into waterways",
        c: "Organizing beach cleanups",
        d: "All of the above"
      },
      rightAnswer: "d"
    },
    {
      question: "What is the biggest concern about people's attempts to clean the ocean?",
      answers: {
        a: "Pulling plastics out of the water does nothing to remove degraded microplastics",
        b: "It's too difficult",
        c: "Plastic pollution is increasing each year",
      },
      rightAnswer: "a"
    },
    {
    question: "What percent of plastic is recycled?",
    answers: {
      a: "52%",
      b: "24%",
      c: "9%",
      d: "3%"
    },
    rightAnswer: "c"
    },
    {
    question: "How many tons of plastic are estimated to be in the ocean?",
    answers: {
      a: "20 million tons",
      b: "15 trillion tons",
      c: "14 million tons",
      d: "5 thousand tons"
    },
    rightAnswer: "c"
    },
    {
    question: "What percent of plastic ends up in the ocean?",
    answers: {
      a: "40%",
      b: "30%",
      c: "20%",
      d: "10%"
    },
    rightAnswer: "d"
    },
    {
    question: "True or false: Plastic is more harmful than microparticles from the plastic?",
    answers: {
      a: "True",
      b: "False",

      },
    rightAnswer: "b"
    },
    {
    question: "True or false: Plastic pollution in the ocean has an impact on climate change?",
    answers: {
      a: "True",
      b: "False",
      },
    rightAnswer: "a"
    },
    {
    question: "How can we lessen our impact on plastic pollution?",
    answers: {
      a: "Pick up trash from the beach",
      b: "Adhere to local guidelines",
      c: "Reduce our plastic consumption",
      d: "All of the above"
      },
      rightAnswer: "d"
    }
];



//Calls function to display the quiz immediately
quizBuilder();

//Runs the result displaying function when the button is pressed
submitButton.addEventListener("click", resultDisplay);
