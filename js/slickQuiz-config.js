// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  "info": {
    "name": "Test Your Knowledge!!",
    "main": "<p>Think you know about potato history? Find out with this quiz!</p>",
    "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
    "level1": "Ready Potato",
    "level2": "Potato Contender",
    "level3": "Amateur Potato",
    "level4": "Newb Potato",
    "level5": "Stay in school, kid..." // no comma here
  },
  "questions": [{ // Question 1 - Multiple Choice, Single True Answer
      "q": "Where was the potoato first domesticated?",
      "a": [{
          "option": "Peru",
          "correct": false
        },
        {
          "option": "Argentina",
          "correct": false
        },
        {
          "option": "Germany",
          "correct": true
        },
        {
          "option": "Ireland",
          "correct": false
        } // no comma here
      ],
      "correct": "<p><span>That's right!</span> The potato was first domesticated in Peru between 8000 and 5000 BC.</p>",
      "incorrect": "<p><span>Uhh no.</span> The potato was first domesticated in Peru between 8000 and 5000 BC.</p>" // no comma here
    },
    { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
      "q": "Which of the following best represents your preferred breakfast?",
      "a": [{
          "option": "a",
          "correct": false
        },
        {
          "option": "a",
          "correct": true
        },
        {
          "option": "a",
          "correct": false
        },
        {
          "option": "a",
          "correct": true
        } // no comma here
      ],
      "select_any": true,
      "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
      "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
    },
    { // Question 3 - Multiple Choice, Multiple True Answers, Select All
      "q": "Where are you right now? Select ALL that apply.",
      "a": [{
          "option": "a",
          "correct": true
        },
        {
          "option": "a",
          "correct": false
        },
        {
          "option": "a",
          "correct": true
        },
        {
          "option": "a",
          "correct": true
        } // no comma here
      ],
      "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
      "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
    },
    { // Question 4
      "q": "How many inches of rain does Michigan get on average per year?",
      "a": [{
          "option": "149",
          "correct": false
        },
        {
          "option": "32",
          "correct": true
        },
        {
          "option": "3",
          "correct": false
        },
        {
          "option": "1291",
          "correct": false
        } // no comma here
      ],
      "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
      "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
    },
    { // Question 5
      "q": "Is Earth bigger than a basketball?",
      "a": [{
          "option": "Yes",
          "correct": true
        },
        {
          "option": "No",
          "correct": false
        } // no comma here
      ],
      "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
      "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
    } // no comma here
  ]
};