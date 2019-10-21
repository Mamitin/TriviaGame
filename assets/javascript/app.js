//create vars
var gotRight = 0;
var gotWrong = 0;
var secondsLeft = 10;
var timerHandle;

//start game after page finishes loading
$(document).ready(function () {
    //create toggle
    $('#gamePanel').toggle();
    //call startGame function
    startGame();
    //call gameListeners function
    gameListeners();
    //call gameGo
    gameGo();
})

//create funtion startGame
function startGame() {
    var questionEl = '';
    var elPossibilities = [];
    //create for loop to iterate through the question & possibilities
    for (i = 0; < questionList.length; i++) {
        questionEl += '<div class="question" id="q' + i + '">' + questionList[i].question;
        elPossibilities = questionList[i].possibilities;
        for (j = 0; j < elPossibilities.length; j++) {
            questionEl += '<input type="radio" class="i' + i + '" value="' + j + '">' + elPossibilities[j] + '</input>';
        }

        questionEl += '</div>';
        //console.log(questionEl);
    }

    question += '<button id="answer">Answer</button>';
    $('#questions').html(questionEl);
}

//create var for question list
var questionList = [
    //create question
    {
        question: "What color is Marge's hair?",
        //create list of multiple choice answers
        possibilities: ['blue', 'pink', 'green'],
        //answer to question
        answer: 0
    },
    {
        question: "In which town do the Simpsons reside?",
        possibilities: ['Shelbyville', 'Springfield', 'Seinfeld'],
        answer: 1
    },
    {
        question: "How old is Bart Simpson?",
        possibilities: ['10', '12', '11'],
        answer: 0
    },
    {
        question: "Which one of these is not a catchphrase bart uses?",
        possibilities: ['Aye Carumba!', 'Dont have a cow, man!', 'Woohoo!'],
        answer: 2
    },
    {
        question: "What is the name of the Simpsons next door neighbor?",
        possibilities: ['Barney Gumble', 'Ned Flanders', 'Principal Skinner'],
        answer: 1
    },
    {
        question: "Who is Mr. Burns assistant?",
        possibilities: ['Seymour Skinner', 'Barnard Gumble', 'Waylon Smithers'],
        answer: 2
    },
    {
        question: 'Who runs the Kwik-E-Mart?',
        possibilities: ['Apu', 'Roger', 'Mr. Burns'],
        answer: 0
    },
    {
        question: "What is the name if the school bus driver?",
        possibilities: ['Otto', 'Martin', 'Cletus'],
        answer: 0
    },
    {
        question: "What is the name of the clown on Channel 6?",
        possibilities: ['Gabbo', 'Krusty', 'Bonko'],
        answer: 1
}]

//create function gameListeners
function gameListeners() {
$('#answer').click(gameSubmit);
$('#startButton').click(gameGo);
}

//create function gameGo
function gameGo() {
    $('#splash').toggle();
    $('#gamePanel').toggle();
}

//create function timerSeconds

//create if or else statements within timerSeconds function

//create function gameSubmit