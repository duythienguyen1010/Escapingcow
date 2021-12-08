//JS file contains general function across the whole site

//Function to change color of button on mouse hover
function buttonHover() {
    this.style.backgroundColor = 'brown';
}

//Function to change color of button on mouse leave
function buttonLeave() {
    this.style.backgroundColor = 'saddlebrown';
}

//Function to add animation to texts using textillate plug in
function textAnimate() {

    //Make some text fly in from right
    $('.title_right').textillate({
        in: {
            effect: 'fadeInRightBig',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: true,
            callback: function () {
                $("h1").css("color", "brown")
            }
        }
    })

    //Make some text fly in from left
    $('.title_left').textillate({
        in: {
            effect: 'fadeInLeftBig',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: true,
            callback: function () {}
        }
    })

}