//create vars
var gotRight;
var gotWrong;
var unanswered;
var secondsLeft = 5;
var timerHandle;

//start game after page finishes loading
$(document).ready(function () {
   // $("#simpsonImg").html('<img src="/assets/css/images/simpsons.jpg" id="simpsonsImg"/>');
    //create toggle
    $('#questions').toggle();
    $('.allDone').toggle();
    //call startGame function
    startGame();
    //call gameListeners function
    gameListeners();
})

//create funtion startGame
function startGame() {
    console.log("startGame works");
    var questionEl = '';
    var elPossibilities = [];
    //create for loop to iterate through the question & possibilities
    for (i = 0; i < questionList.length; i++) {
        questionEl += '<div class="question" id="q" + i + >' + questionList[i].question + "</br>";
        elPossibilities = questionList[i].possibilities;
        for (j = 0; j < elPossibilities.length; j++) {
            questionEl += '<input type="radio" class="i' + i + '" name="' + j + '"value"' + j + '">' + elPossibilities[j] + '</input>' + " ";
        }
        questionEl += '</div>';
        //console.log(questionEl);        
    }

    /*$('input:radio').click(function(){
        $('input:radio').not(this).prop('checked', false);*/
    

    questionEl += '<button id="answer">Answer</button>';
    $('#questions').html(questionEl);

};

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
        question: "What is the name of the school bus driver?",
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
    console.log("gameListeners works");
    $('#answer').click(gameDone);
    $('#startButton').click(gameGo);
}

//create function gameGo
function gameGo() {
    console.log("gameGo works");
    $('#splash').toggle();
    timerSeconds();
    $('#questions').toggle();
}


//create function for countdown
function timerSeconds() {
    timerHandle = setInterval(countTimerSeconds, 1000)
}


//create function timerSeconds
function countTimerSeconds() {
    secondsLeft--;
    $('#timer').html("Time Remaining: " + secondsLeft);
    console.log(secondsLeft)
    if (secondsLeft === 0) {
        gameDone();
    }
}



function gameDone() {
    clearInterval(timerHandle);
    $('#timer').hide()
    var checkedAnswer;
    gotRight = 0;
    gotWrong = 0;
    unanswered = 0;
    for (k = 0; k < questionList.length; k++) {
        checkedAnswer = $('.i' + k + ':checked');
        //console.log(checkedAnswer);
        //console.log(checkedAnswer.val());
        //console.log((checkedAnswer.val() === undefined));
        if (checkedAnswer.val() === undefined) {
            unanswered++;
        } else if (checkedAnswer.val() == questionList[k].answer) {
            gotRight++;
        } else {
            gotWrong++;
        }
    }
    //unanswered = questionList.length - gotRight - gotWrong;
    console.log(unanswered);
    $('#questions').toggle();
    $('.allDone').toggle();
    $('#right').html(gotRight);
    $('#wrong').html(gotWrong);
    $('#unanswered').html(unanswered);
}

