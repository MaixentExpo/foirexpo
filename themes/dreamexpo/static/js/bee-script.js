/**
 * Script.js
 */
$(document).ready(function () {
    $('.bee-edit').each(function () {
        var $isServer = $(this).data("isserver")
        var $location = window.location.pathname;
        if ($isServer) {
            $(this).removeClass('bee-edit')
        } else if ($location.indexOf("hugo/") > -1) {
            $(this).removeClass('bee-edit')
        }
    });
    $(".bee-edit-open").on('click', function (event) {
        var $isServer = $(this).data("isserver")
        var $path = $(this).data("path")
        var $location = window.location.pathname;
        if ($isServer) {
            var $url = "http://localhost:8080/victor/document/" + $path;
            window.open($url, 'hugo-edit', 'left=' + (screen.availWidth - 1024 - 5) + ',top=5,width=1024,height=1014,scrolling=yes,scrollbars=yes,resizeable=yes');
        } else if ($location.indexOf("hugo/")) {
            var $url = "/victor/document/" + $path;
            window.open($url, 'hugo-edit', 'left=' + (screen.availWidth - 1024 - 5) + ',top=5,width=1024,height=1014,scrolling=yes,scrollbars=yes,resizeable=yes');
        }
        event.preventDefault();
    });
});