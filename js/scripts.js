$(".single-item").slick({
  dots: true
});

// SLICK QUIZ
$(function() {
  $('#slickQuiz').slickQuiz({
    // options
  });
});

var quizJSON = {
  "info": {
    "name": "Test Your Knowledge!!",
    "main": "<p>Think you know about potato history? Find out with this super crazy knowledge quiz!</p>",
    "results": "<h5><a href=https://www.washingtonpost.com/history/2018/10/08/christopher-columbus-potato-that-changed-world/?noredirect=on&utm_term=.f4b5fd7954f7>Learn More</a></h5><p>It's almost impossible imagining the world without the potato. Would the Industrial Revolution ever have happened? Would World War II have been lost by the Allies without the easy-to-grow crop that fed the Allied troops? Would it even have started? When you think about it like this, many major milestones in world history can all be at least partially attributed to the simple spud from the Peruvian hilltops.</p>",
    "level1": "Jedi Potato",
    "level2": "Knight Potato",
    "level3": "Padawan Potato",
    "level4": "Youngling Potato",
    "level5": "Stay in school, lil' potato..." // no comma here
  },
  "questions": [{ // Question 1 - Multiple Choice, Single True Answer
      "q": "Where was the potato first domestiated?",
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
      "correct": "<p><span>Correct!</span> The Irish Potato Famine occured from 1854-1852.</p>",
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