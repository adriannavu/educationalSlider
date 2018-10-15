//initialize Slick slider$
$(".single-item").slick({
  dots: true,
  draggable: true
});

// When user clicks on potato, make it grow
$(document).ready(function() {
  $("#growing-potato1").mouseenter(function() {
    $("#growing-potato1").animate({
      height: '100px',
      width: '100px',
    });
  });
});

$(document).ready(function() {
  $("#growing-potato2").mouseenter(function() {
    $("#growing-potato2").animate({
      height: '100px',
      width: '100px',
    });
  });
});

$(document).ready(function() {
  $("#growing-potato3").mouseenter(function() {
    $("#growing-potato3").animate({
      height: '100px',
      width: '100px',
    });
  });
});

$(document).ready(function() {
  $("#growing-potato4").mouseenter(function() {
    $("#growing-potato4").animate({
      height: '100px',
      width: '100px',
    });
  });
});

// EUROPE SLIDE
// Quiz to see if user can differentiate between potato plant and belladonna plant

var myQuestions = [{
  question: "Can you identify the potato plant?",
  answers: {
    A: 'The first plant?',
    B: 'Or maybe the second plant?',
  },
  correctAnswer: 'B'
}];

var quizContainer = document.getElementById('plantQuiz');
var resultsContainer = document.getElementById('plantQuizResults');
var submitButton = document.getElementById('plantQuizSubmit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {

        // ...add an html radio button
        answers.push(
          '<label>' +
          '<input type="radio" name="question' + i + '" value="' + letter + '">' +
          letter + ': ' +
          questions[i].answers[letter] +
          '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>' +
        '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer) {

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }

    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + '. (A) is belladonna. (B) is potato.';
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
  }

}

// PEASANT SLIDE
//drag and drop potatoes onto table
function allowDrop(ev) {
  ev.preventDefault();
  console.log('allowDrop activated');
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log('drag activated');
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  peasantsGroup.innerHTML = '<img src="img/peasant.png" alt="peasant icon"><img src="img/peasant.png" alt="peasant icon"><img src="img/peasant.png" alt="peasant icon">';
  console.log('drop activated');
}

// IRISH SLIDE
// When user clicks preFamineIreland, display PostFamineIreland instead with legend
preFamineIrelandImg.addEventListener('click', function() {
  console.log('preFamineIrelandClicked');
  preFamineIrelandImg.style.display = 'none';
  postFamineIrelandImg.style.display = 'block';
  preFamineIrelandText.style.display = 'none';
  postFamineIrelandText.style.display = 'block';
  postFamineIrelandLegendIcons.style.display = 'block';
});

postFamineIrelandImg.addEventListener('click', function() {
  console.log('postFamineIrelandClicked');
  postFamineIrelandImg.style.display = 'none';
  preFamineIrelandImg.style.display = 'block';
  postFamineIrelandText.style.display = 'none';
  preFamineIrelandText.style.display = 'block';
  postFamineIrelandLegendIcons.style.display = 'none';
});

// Initiate Quiz
$(function() {
  $('#slickQuiz').slickQuiz({
    // options
  });
});

// Quiz questions and answers
var quizJSON = {
  "info": {
    "name": "Test Your Knowledge!!",
    "main": "<p>Think you know about potato history? Find out with this super crazy knowledge quiz!</p>",
    "results": "<h5><a href=https://www.washingtonpost.com/history/2018/10/08/christopher-columbus-potato-that-changed-world/?noredirect=on&utm_term=.f4b5fd7954f7>Learn More</a></h5><p>It's almost impossible imagining the world without the potato. Would the Industrial Revolution ever have happened? Would World War II have been lost by the Allies without the easy-to-grow crop that fed the Allied troops? When you think about it like this, many major milestones in world history can all be at least partially attributed to the simple spud from the Peruvian hilltops.</p>",
    "level1": "Jedi Potato",
    "level2": "Knight Potato",
    "level3": "Padawan Potato",
    "level4": "Youngling Potato",
    "level5": "Stay in school, lil' potato..." // no comma here
  },
  "questions": [{ // Question 1 - Multiple Choice, Single True Answer
      "q": "Where was the potato first domesticated?",
      "a": [{
          "option": "Argentina",
          "correct": false
        },
        {
          "option": "Germany",
          "correct": false
        },
        {
          "option": "Peru",
          "correct": true
        },
        {
          "option": "Ireland",
          "correct": false
        } // no comma here
      ],
      "correct": "<p><span>That's right!</span> The potato was first domesticated in Peru between 8000 and 5000 BC.</p>",
      "incorrect": "<p><span>Uhh no.</span> The potato was first domesticated in Peru between 8000 and 5000 BC. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
    },
    { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
      "q": "How did potatoes travel to Europe?",
      "a": [{
          "option": "Floated across the sea",
          "correct": false
        },
        {
          "option": "Transported by Spanish sailors",
          "correct": true
        },
        {
          "option": "Christopher Columbus brought them by plane",
          "correct": false
        },
        {
          "option": "Trick question; potatoes never made it to Europe",
          "correct": false
        } // no comma here
      ],
      "select_any": true,
      "correct": "<p><span>Nice!</span> Spanish sailors returning from the Andes brought potatoes to Europe in 1536.</p>",
      "incorrect": "<p><span>Nope.</span> Spanish sailors returning from the Andes brought potatoes to Europe in 1536.</p>" // no comma here
    },
    { // Question 3 - Multiple Choice, Multiple True Answers, Select All
      "q": "What plant did Europeans compare potatoes to when they arrived in 1536?",
      "a": [{
          "option": "Belladonna",
          "correct": true
        },
        {
          "option": "Hemlock",
          "correct": false
        },
        {
          "option": "Poison Ivy",
          "correct": false
        },
        {
          "option": "English Yew",
          "correct": false
        } // no comma here
      ],
      "correct": "<p><span>Brilliant!</span> Europeans though potatoes were too closely related to the deadly nightshade plant, Belladonna, to consume them in 1536.</p>",
      "incorrect": "<p><span>Not Quite.</span> It was actually Belladonna, otherwise known as nightshade. But nice try.</p>" // no comma here
    },
    { // Question 4
      "q": "When did the Irish Potato famine begin?",
      "a": [{
          "option": "1848",
          "correct": false
        },
        {
          "option": "1845",
          "correct": true
        },
        {
          "option": "1843",
          "correct": false
        },
        {
          "option": "1842",
          "correct": false
        } // no comma here
      ],
      "correct": "<p><span>Correct!</span> The Irish Potato Famine occured from 1845-1852.</p>",
      "incorrect": "<p><span>Fail.</span> Sorry. You lose. The Irish Potato Famine occured from 1854-1852.</p>" // no comma here
    },
    { // Question 5
      "q": "The potato received credit for population booms in parts of Europe that helped fuel the __________.",
      "a": [{
          "option": "Industrial Revolution",
          "correct": true
        },
        {
          "option": "Revolutions of 1848",
          "correct": false
        },
        {
          "option": "American Revolution",
          "correct": false
        },
        {
          "option": "Technological Revolution",
          "correct": false
        } // no comma here
      ],
      "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
      "incorrect": "<p><span>ERRRR!</span> Europe's new large, sustainable, and well-fed population after the influx of Irish immigrants actually helped fuel the Industrial Revolution, remember?</p>" // no comma here
    } // no comma here
  ]
};