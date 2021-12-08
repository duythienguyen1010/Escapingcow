//Contain functionality for contact page & about us page
$(document).ready(function() {

    //Add animation to the title and the nav bar
    textAnimate()

    //Add Event listener to the submit button
    $("#contributor_btn").mouseover(buttonHover)
    $("#contributor_btn").mouseleave(buttonLeave)

    $("#developer_btn").mouseover(buttonHover)
    $("#developer_btn").mouseleave(buttonLeave)

    //Add Ajax function call on button clicks
    $("#people_btns input").click(function () {
        //get the file name then the url
        let fileName = $(this).attr("title") + ".json"
        let url = "json_files/" + fileName

        //Use ajax to retrieve data
        $.ajax({
            type: "get",
            // Modify the url
            url: url,
            dataType: "json",
            success: function(data) {
                // Clear the div data
                $("#people").html("");

                //update the div data using json file
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#people").append(
                            "<img src=\"" + value.image + "\" id=\"au1\">" +
                            "<h2 class=\"center\">" + value.full_name + "</h2>" +
                            "<h3 class=\"center\">" + value.department + " - " + value.bio + "</h3>" +
                            "<p>" + value.text1 + "</p>" +
                            "<p>" + value.text2 + "</p>"
                        )
                    })
                })
            }
        })
    })
})