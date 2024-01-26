const questions = [
    {
        question: "Which is the skeleton of a web application?",
        option1: 'HTML',
        option2: 'CSS',
        option3: 'JavaScript',
        option4: 'React',
        correct: 'a'
    },
    {
        question: "What is the functionality of a web application?",
        option1: 'HTML',
        option2: 'CSS',
        option3: 'JavaScript',
        option4: 'React',
        correct: 'c'
    },
    {
        question: "What is the design of a web application?",
        option1: 'HTML',
        option2: 'CSS',
        option3: 'JavaScript',
        option4: 'React',
        correct: 'b'
    },
    {
        question: "What is the name of a frontend framework?",
        option1: 'HTML',
        option2: 'CSS',
        option3: 'JavaScript',
        option4: 'React',
        correct: 'd'
    },
    {
        question:"Who is the father of HTML?",
        option1:'Rasmus Lerdorf',
        option2:'Tim Berners-Lee',
        option3:'Brendan Eich',
        option4:'Sergey Brin',
        correct:'2'
    }
];

let i = 0;
var optionInput = document.getElementsByClassName("options");

var correct = 0;
var Incorrect = 0;

function load() {
    var currentQuestion = questions[i];
    var paraElement = document.getElementById("para");
    paraElement.innerText = `${i + 1}) ${currentQuestion.question}`;

    optionInput[0].nextElementSibling.innerText = currentQuestion.option1;
    optionInput[1].nextElementSibling.innerText = currentQuestion.option2;
    optionInput[2].nextElementSibling.innerText = currentQuestion.option3;
    optionInput[3].nextElementSibling.innerText = currentQuestion.option4;
}

function submitAnswer() {
    // Get the selected option
    var selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        // Check if the selected option is correct
        var userAnswer = selectedOption.value;
        var correctAnswer = questions[i].correct;

        if (userAnswer === correctAnswer) {
            // Correct answer logic (if needed)
            correct++;
        } else {
            // Incorrect answer logic (if needed)
            Incorrect++;
        }

        // Move to the next question
        i++;

        // Check if there are more questions
        if (i < questions.length) {
            selectedOption.checked = false;
            load();
            // Clear the selected option
        } else {
            endQuiz();
        }
    } else {
        alert("Please select an option before submitting.");
    }
}


function endQuiz() {
    var finalResult = "Quiz completed!"; 
    var resultElement = document.getElementById("result");
    var box = document.getElementsByClassName("box")[0]; 

    box.style.filter = "blur(20px)";
    resultElement.innerHTML = `${finalResult} <br><br> Correct: ${correct} <br>Incorrect: ${Incorrect}`;
    resultElement.style.display = "block";
}
