$(document).ready(function() {
    /* Login Function */
    $("#login").on("click", function(event) {
        event.preventDefault();
        var loginInfo = {
            loginName: $("#userName").val().trim(),
            loginPass: $("#password").val().trim()
        };
        console.log(loginInfo);
        $("#userName").val("");
        $("#password").val("");
    });
    /* Create Account Function */
    $("#createUser").on("click", function(event) {
        event.preventDefault();
        var newUser = {
            userName: $("#newUserName").val().trim(),
            userPass: $("#newPassword").val().trim(),
            repeatPass: $("#newRepeatPassword").val().trim(),
            userEmail: $("#newEmail").val().trim()
        };
        console.log(newUser);
        $("#newUserName").val("");
        $("#newPassword").val("");
        $("#newRepeatPassword").val("");
        $("#newEmail").val("");
    })
    /* Search Event Function */
    $("#searchEvent").on("click", function(event) {
        event.preventDefault();
        var searchEvent = {
            name: $("#searchEventName").val().trim(),
            location: $("#searchLocation").val().trim(),
            time: $("#searchTime").val().trim(),
            category: $(':radio[name=category]:checked').val()
        };
        console.log(searchEvent);
        $("#searchEventName").val("");
        $("#searchLocation").val("");
        $("#searchTime").val("");
        $('input[name=category]').attr('checked', false);
    });
});