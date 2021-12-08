//Contains Functionality for index page
$(document).ready(function() {

    //Event handler for the buttons
    $("#row1-button").mouseover(buttonHover)
    $("#row1-button").mouseleave(buttonLeave)
    $("#row1-button").click(function() {
        window.location.href = "https://webpages.uncc.edu/hnguye91/Escapingcow/game.html"
    })

    $("#row2-button").mouseover(buttonHover)
    $("#row2-button").mouseleave(buttonLeave)
    $("#row2-button").click(function() {
        window.location.href = "https://webpages.uncc.edu/hnguye91/Escapingcow/aboutus.html"
    })

    //Add animation to the nav bar and title
    textAnimate()
})
