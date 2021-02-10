/**
 * Script.js
 */
$(document).ready(function () {
    $('.bee-admin').each(function () {
        if ($IsServer == 'true') {
            $(this).removeClass('bee-admin')
        } else if (window.location.pathname.indexOf("hugo/") > -1) {
            $(this).removeClass('bee-admin')
        }
    });

    $(".bee-open").on('click', function (event) {
        var $path = $(this).data('path') + "/";
        if (window.location.pathname.indexOf("hugo/") > -1) {
            $path = "/hugo" + $(this).data('path') + "/";
        }
        window.location = $path;
        event.preventDefault();
    });
    $(".bee-window-open").on('click', function (event) {
        var $path = $(this).data('path') + "/";
        if (window.location.pathname.indexOf("hugo/") > -1) {
            $path = "/hugo" + $(this).data('path') + "/";
        }
        window.open($path, "_blank");
        event.preventDefault();
    });

    $(".bee-edit-open").on('click', function (event) {
        var $path = $(this).data('path');
        if (!$path) {
            $path = $FilePath;
        }
        if ($IsServer == 'true') {
            var $url = "http://localhost:8080/victor/document/" + $path;
            window.open($url, 'hugo-edit', 'left=' + (screen.availWidth - 1024 - 5) + ',top=5,width=1024,height=1014,scrolling=yes,scrollbars=yes,resizeable=yes');
        } else if (window.location.pathname.indexOf("hugo/")) {
            var $url = "/victor/document/" + $path;
            window.open($url, 'hugo-edit', 'left=' + (screen.availWidth - 1024 - 5) + ',top=5,width=1024,height=1014,scrolling=yes,scrollbars=yes,resizeable=yes');
        }
        event.preventDefault();
    });

    // CLIC IMAGE POPUP
    $('.bee-modal-image').on('click', function (event) {
        var $pdf = $(this).data('pdf');
        var $src = $(this).find('img').attr('src');
        $('#bee-modal-image').find('img').attr('src', $src);
        if ($pdf) {
            $('#bee-modal-image').find('.approve').removeClass("bee-hidden");
        }
        $('#bee-modal-image')
            .modal({
                closable: true,
                onHide: function () {
                    return true;
                },
                onApprove: function () {
                    window.open($pdf, "_blank");
                }
            }).modal('show');
        event.preventDefault();
    });

    // diaporama
    if ($('#bee-diaporama')) {
        var $diapo_size = $('#bee-diaporama').data('size')
        var $heights = {
            mini: 35, tiny: 80, small: 150, medium: 300, large: 450, big: 600, huge: 800, massive: 960
        }
        var $height = $heights[$diapo_size]
        // console.log($height)
        $('#bee-diaporama .card').each(function () {
            $(this).attr('style', 'width:' + $height + 'px;')
        });
        $('#bee-diaporama img').each(function () {
            $(this).attr('style', 'height:' + $height + 'px;')
        });
    }

    // RETURN TO TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });

});