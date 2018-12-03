$(document).ready(function() {
    /* Login Function */
    $("#login").on("click", function(event) {
        event.preventDefault();
        var loginName = $("#userName").val().trim();
        var loginPass = $("#password").val().trim();
        console.log(loginName);
        console.log(loginPass);
        $("#userName").val("");
        $("#password").val("");
    });
    /* Create Account Function */
    $("#createUser").on("click", function(event) {
        event.preventDefault();
        var newUserName = $("#newUserName").val().trim();
        var newUserPass = $("#newPassword").val().trim();
        var repeatPass = $("#newRepeatPassword").val().trim();
        var newUserEmail = $("#newEmail").val().trim();
        console.log(newUserName);
        console.log(newUserPass);
        console.log(repeatPass);
        console.log(newUserEmail);
        $("#newUserName").val("");
        $("#newPassword").val("");
        $("#newRepeatPassword").val("");
        $("#newEmail").val("");
    })
    /* Search Event Function */
    $("#searchEvent").on("click", function(event) {
        event.preventDefault();
        var searchEvent = $("#searchEventName").val().trim();
        var searchLocation = $("#searchLocation").val().trim();
        var searchEvent = $("#searchTime").val().trim();
        var gameCategory = $(':radio[name=category]:checked').val();
        console.log(searchEvent);
        console.log(searchLocation);
        console.log(searchTime);
        console.log(gameCategory);
        $("#searchEventName").val("");
        $("#searchLocation").val("");
        $("#searchTime").val("");
        $('input[name=category]').attr('checked', false);
    });
});