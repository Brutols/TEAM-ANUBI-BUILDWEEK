const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//TODO funzione che cicla tra le domande e mi va a mettere question, correct e incorrect answer nell'html
//TODO evento onclick su tutti i bottoni delle risposte
//TODO funzione che verifica se la risposta è corretta, manda avanti la domanda e salva il risultato in una variabile
//TODO counter da 30sec a 0sec (border per il bordino che si svuota)
let vote = 0;
let counter = 0;

let currentQuestionIndex;
console.log(currentQuestionIndex);

let checkAnswer = function (click) {
  if (
    click.target.innerText === questions[currentQuestionIndex].correct_answer
  ) {
    vote += 1;
  }
  questions.splice(currentQuestionIndex, 1);
  if (questions.length > 0) {
    showQuestion();
  } else {
    alert(`il tuo voto è: ${vote}`)
  }
};

let answerButtons;

const showQuestion = function () {
  // mostra domande e risposte in html
  document.querySelector("footer").innerHTML = `<p>QUESTION ${counter += 1}<font color="#af0089">/10</font></p>`
  document.querySelector(".buttons").innerHTML = "";
  const randomSelector = Math.floor(Math.random() * questions.length); //seleziona domanda randomica
  console.log(randomSelector);
  let currentQuestion = questions[randomSelector];
  console.log(currentQuestion);
  document.querySelector(".title").innerText = `${currentQuestion.question}`;
  let answers = [];
  answers.push(currentQuestion.correct_answer);
  for (let i = 0; i < currentQuestion.incorrect_answers.length; i++) {
    answers.push(currentQuestion.incorrect_answers[i]);
  }
  console.log(answers);
  let shuffle = function (array) {
    //randomizza l'array
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  shuffle(answers);
  console.log(answers);
  for (let i = 0; i < answers.length; i++) {
    document.querySelector(
      ".buttons"
    ).innerHTML += `<button class="tasto">${answers[i]}</button>`;
  }
  console.log(questions);
  console.log(questions.length);
  currentQuestionIndex = randomSelector;
  answerButtons = document.querySelectorAll(".tasto");
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].onclick = checkAnswer;
  }
  console.log(currentQuestionIndex);
  console.log(vote);
};

showQuestion();

let time = document.querySelector(".timer")
let counterTimer = 30;
var s;  // secondo
var ss; // secondi al clock
var hh; // ora al clock
var mm; // min al clock
var ms; // millisecondi al clock

let timer = function () {
    var data = new Date()
    ms = data.getMilliseconds();
    ss = data.getSeconds();
    mm = data.getMinutes();
    hh = data.getHours();

    if (counterTimer >= 0) { 

      if (ss!=s) {
        console.log( hh +':'+mm+':'+ss+':'+ms);
        s = ss
        time.innerText = counterTimer 
        counterTimer -= 1;
      }

    }
    else {     
      clearInterval(timer);
    }
  }
// window.setTimeout("timer()", 5000); avvia funzione dopo n secondi caricamento browser
  setInterval(timer, 10);


