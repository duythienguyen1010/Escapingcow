//Contain functionality for support page
$(document).ready(function() {

    //Add animation to the title and the nav bar
    textAnimate()

    //Add event listener to the button
    $("#contactBtn").mouseover(buttonHover);
    $("#contactBtn").mouseleave(buttonLeave);
    $("#contactBtn").click(function() {
        window.location.href = "https://webpages.uncc.edu/hnguye91/Escapingcow/contact.html";
    });

    //Create and accordion widget to the FAQ
    $("#drop_down").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true
    });

    //default video
    getVideo("What is Python")

    $("#search_btn").click(function () {
        var queue = $("#search").val()
        getVideo(queue)
    });
})

//Function to call AJAX on youtube API
function getVideo(key) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyC5bFob-WRaYk7bTNBkosjZIPfE-XUhJpw',
            q: key,
            part: 'snippet',
            maxResults: 1,
            type: 'video',
            videoEmbeddable: true,
        },
        success: function(data){
            embedVideo(data)
        },
        error: function(response){
            console.log("Request Failed");
        }
    });
}

//Function to manipulate the html on successful AJAX call
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('#vid_title').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
