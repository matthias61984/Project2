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
            userEmail: $("#newEmail").val().trim()
        };
        console.log(newUser);
        $("#newUserName").val("");
        $("#newPassword").val("");
        $("#newRepeatPassword").val("");
        $("#newEmail").val("");
        $.ajax({
            method: "POST",
            url: "/api/user",
            data: newUser
        })
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
        $.ajax({
            method: "READ",
            url: "/api/events",
            data: searchEvent
        })
    });
    /* Create Event Function */
    $("#createEvent").on("click", function(event) {
        event.preventDefault();
        var newEvent = {
          name: $("#addEventName").val().trim(),
          location: $("#addLocation").val().trim(),
          time: $("#addTime").val().trim(),
          category: $(':radio[name=category]:checked').val(),
          description: $("#addDescription").val().trim(),
        };
        console.log(newEvent);
        $.ajax({
            method : "POST",
            url : "/api/events",
            data : newEvent
        })
          .then(function() {
            var row = $("<div>");
            row.addClass("event");
            row.append("<p>" + newEvent.name + "</p>");
            row.append("<p>" + newEvent.location + "</p>");
            row.append("<p>" + newEvent.time + "</p>");
            row.append("<p>" + newEvent.category + "</p>");
            row.append("<p>" + newEvent.description + "</p>");
            $("#eventsList").prepend(row);
          });
        $("#addEventName").val("");
        $("#addLocation").val("");
        $("#addTime").val("");
        $('input[name=category]').attr('checked', false);
        $("#addDescription").val("");
    });
});