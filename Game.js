//Contains Functionality for game page
//Defined variables to count wrong answers and life remains
let wrongAnswer = 0
let life = 3

//Variable to hold 5 random quiz questions
const myQuiz = []

//List of pre-made questions
const questionList = [
    {
        'q':'What will be the output of the following code: \n' +
            'print type(type(int))',
        'options': [
            'type \'int\'',
            'type \'type\'',
            'Error',
            '0'
        ],
        'correctIndex': 1,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'What is the output of the following code: \n' +
            'L = [\'a\',\'b\',\'c\',\'d\']\n' +
            'print("".join(L))',
        'options': [
            'Error',
            'None',
            'abcd',
            '[‘a’,’b’,’c’,’d’]'
        ],
        'correctIndex': 2,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'What is the output of the following segment :\n' +
            'chr(ord(\'A\'))',
        'options': [
            'A',
            'B',
            'C',
            'D'
        ],
        'correctIndex': 0,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'What is the output of the following code:\n' +
            'print 9//2',
        'options': [
            '4.5',
            '4.0',
            '4',
            'Error'
        ],
        'correctIndex': 2,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'Which function overloads the >> operator?',
        'options': [
            'more()',
            'gt()',
            'ge()',
            'None of the above'
        ],
        'correctIndex': 3,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'Which operator is overloaded by the or() function?',
        'options': [
            '||',
            '|',
            '//',
            '/'
        ],
        'correctIndex': 1,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'Which of these is not a core data type?',
        'options': [
            'Lists',
            'Dictionary',
            'Tuples',
            'Class'
        ],
        'correctIndex': 3,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'What data type is the object below ?\n' +
            'L = [1, 23, ‘hello’, 1]',
        'options': [
            'List',
            'Dictionary',
            'Tuple',
            'Array'
        ],
        'correctIndex': 0,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'Which of the following function convert a string to a float in python?',
        'options': [
            'int(x [,base])',
            'long(x [,base] )',
            'float(x)',
            'str(x)'
        ],
        'correctIndex': 2,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
    {
        'q':'What is the output of the following program :\n' +
            'print "Hello World"[::-1]',
        'options': [
            'dlroW olleH',
            'Hello Worl',
            'd',
            'Error'
        ],
        'correctIndex': 0,
        'correctResponse':'You\'re correct, let\'s go!' ,
        'incorrectResponse':'Oh no! that\'s not right',
    },
]

//Function to generate an array contains 5 random integers from 0 to 9
function generateArr() {
    var arr = [];
    while(arr.length < 5){
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}

//function to generate and populate the constant with 5 random quiz questions
function generateQuestion(){
    let index = generateArr()

    for (let i = 0; i < 5; i++){
        myQuiz[i] = questionList[index[i]]
    }
}

//Ready function for the website
$(document).ready(function() {

    //call function to generate 5 random quiz questions
    generateQuestion()

    //preload the game over image
    let temp = new Image()
    temp.src = "images/gameOver.png"

    //Add animation to the nav bar and title
    textAnimate()

    //Add event listener to the game over button
    $("#game_over_btn").mouseover(buttonHover)
    $("#game_over_btn").mouseleave(buttonLeave)
    $("#game_over_btn").click(function (){
        window.location.reload()
    })

    //Create the quiz using dynamic quiz plug in
    $("#interface").quiz({
        questions: myQuiz,
        // allows incorrect options
        allowIncorrect:true,

        // counter settings
        counter:true,
        counterFormat:'%current/%total',

        // default selectors & format
        startScreen:'#quiz-start-screen',
        startButton:'#quiz-start-btn',
        homeButton:'#quiz-home-btn',
        resultsScreen:'#quiz-results-screen',
        resultsFormat:'You got %score out of %total correct! Moo Moo is now FREE!!!',
        gameOverScreen:'#quiz-gameover-screen',

        // button text
        nextButtonText:'Next',
        finishButtonText:'Finish',
        restartButtonText:'Restart'
    })

    //Add animation to the game display
    $("#quiz-start-btn").click(function() {

        //First animation when the game start
        $("#running_cow").animate({
            left: "+=10%",
        }, function (){
            $("#running_cow").animate({
                left: "-=10%",
            })
        })

        $("#chasing").animate({
            left: "+=10%"
        }, function (){
            $("#chasing").animate({
                left: "-=10%"
            })
        })
    })

    //Animated the game after every answer
    $("#quiz-next-btn").click(function() {

        //If the answer is wrong
        if ($("#quiz-response").text() === "Oh no! that\'s not right") {

            //Update the condition variable
            wrongAnswer += 1
            life -=1

            //update the position of the chef
            $("#chasing").animate({
                left: "+=20%"
            }, function () {

                //update the number of life remains
                if(life === 2) {
                    $("#life3").fadeOut()
                }
                else if(life === 1) {
                    $("#life2").fadeOut()
                }
                else if(life === 0) {
                    $("#life1").fadeOut()
                }

                //Load the game over screen when life ran out
                if (wrongAnswer === 3) {
                    $("#chasing").fadeOut(3000)
                    $("#running_cow").fadeOut(3000, function (){
                        $("#game_screen").animate({
                            width: "100%"
                        })
                        $("#game_screen").css("textAlign", "center")
                        $("#game_screen").css("background-image", "none")
                        $("#game_screen").html(
                            "<h1>Game Over!</h1>" +
                            "<p>Moo Moo has been caught " +
                            "and now praying for her life</p>" +
                            "<img alt=\"what_left\" src=\"images/gameOver.png\" id=\"game_over\">")
                    })
                    $("#interface").html("")
                    $("#restart").css("display", "block")
                }
            })
        }
    })

    //Restart option for the quiz if the game is beaten
    $("#quiz-restart-btn").click(function() {
        wrongAnswer = 0;
        life = 3;
        $("#chasing").animate({
            left: "0"
        })
        $("#life1").fadeIn()
        $("#life2").fadeIn()
        $("#life3").fadeIn()
    })

})
