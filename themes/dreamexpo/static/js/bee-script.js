/**
 * Script.js
 */
$(document).ready(function () {
    function computePath(path) {
        if (path.indexOf("http") > -1) {
            return path;
        } else if (window.location.pathname.indexOf("hugo/") > -1) {
            return "/hugo" + path;
        }
        return path
    }

    $('.bee-admin').each(function () {
        if ($BeeIsServer == 'true') {
            $(this).removeClass('bee-admin')
        } else if (window.location.pathname.indexOf("hugo/") > -1) {
            $(this).removeClass('bee-admin')
        }
    });

    $(".bee-open").on('click', function (event) {
        window.location = computePath($(this).data('path') + "/");
        event.preventDefault();
    });
    $(".bee-window-open").on('click', function (event) {
        window.open(computePath($(this).data('path') + "/"), "_blank");
        event.preventDefault();
    });

    $(".bee-edit-open").on('click', function (event) {
        var $path = $(this).data('path');
        if (!$path) {
            $path = $BeeFilePath; // défini dans footer.html
        }
        if ($BeeIsServer == 'true') {
            $path = "http://localhost:8080/victor/document/" + $path;
        } else if (window.location.pathname.indexOf("hugo/")) {
            $path = "/victor/document/" + $path;
        }
        window.open($path, 'hugo-edit', 'left=' + (screen.availWidth - 1024 - 5) + ',top=5,width=1024,height=1014,scrolling=yes,scrollbars=yes,resizeable=yes');
        event.preventDefault();
    });

    // CLIC IMAGE POPUP
    $('.bee-modal-image').on('click', function (event) {
        var $pdf = $(this).data('pdf');
        var $src = $(this).data('img');
        if (!$src) {
            $src = $(this).find('img').attr('src');
        }
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

    // MODAL PALYER
    $('.bee-modal-player').on('click', function (event) {
        // titre du morceau
        $('#bee-modal-player').find('p').html($(this).data('base'));
        // path du morceau
        $('.bee-player').data('path', $(this).data('path'));
        $('#bee-modal-player')
            .modal({
                closable: false,
                onDeny: function () {
                    $player.stop();
                    return true;
                },
                onVisible: function () {
                    return true;
                }
            }).modal('show');
        event.preventDefault();
    });
    /**
     * Clic sur un player parmi les players
     * data-path="path du fichier" (http ou /path..)
     * data-loop="false" (true par défaut)
     */
    $('.bee-player').on('click', function (event) {
        $player.click($(this));
        event.preventDefault();
    });
    var $player = {
        selector: null,
        path: null,
        isContextLoaded: false,
        isSourceLoaded: false,
        isLoop: true,
        context: null,
        source: null,
        getPath: function (selector) {
            $path = selector.data('path')
            if ($path.indexOf("http") > -1) {
                return $path;
            } else if (window.location.pathname.indexOf("hugo/") > -1) {
                return "/hugo" + $path;
            }
            return $path;
        },
        init: function (selector) {
            this.selector = selector;
            this.path = this.getPath(selector);
            if (!this.isContextLoaded) {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                this.context = new AudioContext();
                this.isContextLoaded = true;
                if (selector.data('loop') == "false") {
                    this.isLoop = false;
                }
            }
            // console.log(this.path, 'init ok');
        },
        loadSource: function () {
            // console.log(this.path, 'source loading...');
            this.isSourceLoaded = false;
            // Requête asynchrone sur le serveur
            var $request = new XMLHttpRequest();
            $request.open('GET', this.path, true);
            $request.responseType = 'arraybuffer';
            $request.onload = function () {
                // Nous sommes dans un événement -> pas d'utilisation de this
                $player.context.decodeAudioData($request.response, function (buffer) {
                    $player.source = $player.context.createBufferSource();
                    $player.source.buffer = buffer;
                    $player.source.connect($player.context.destination);
                    if ($player.isLoop) $player.source.loop = true;
                    $player.isSourceLoaded = true;
                    $player.source.start(0);
                    $player.uiPlay();
                }, function (e) {
                    console.log("Erreur lors du décodage des données audio ", e.err);
                });
            }
            this.uiWait();
            $request.send();
        },
        stop: function () {
            if (this.isSourceLoaded) {
                this.source.stop(0);
                this.source.disconnect(0);
                this.context.resume();
            }
            this.uiInit();
        },
        uiWait: function () {
            // notched circle loading
            this.uiInit();
            this.selector.children('i').removeClass('file audio outline orange');
            this.selector.addClass('warning');
            this.selector.children('i').addClass('notched circle loading');

        },
        uiPause: function () {
            this.uiInit();
            this.selector.children('i').removeClass('play file audio outline orange');
            this.selector.addClass('success');
            this.selector.children('i').addClass('play');
        },
        uiPlay: function () {
            this.uiInit();
            this.selector.children('i').removeClass('play file audio outline orange');
            this.selector.addClass('error');
            this.selector.children('i').addClass('pause');
        },
        uiInit: function () {
            $('.bee-player').each(function () {
                $(this).removeClass('success error warning');
                $(this).children('i').removeClass('pause play notched circle loading');
                $(this).children('i').addClass('file audio outline orange');
            })
        },
        click: function (selector) {
            if (this.getPath(selector) == this.path) {
                // clic sur le player en cours
                if (!this.isSourceLoaded) {
                    return
                }
                // Pause ou Start du player
                if (this.context.state === 'running') {
                    this.context.suspend();
                    this.uiPause();
                } else if (this.context.state === 'suspended') {
                    this.context.resume();
                    this.uiPlay();
                }
            } else {
                // clic sur un nouveau player
                // arrêt du player en cours
                if (this.isSourceLoaded) {
                    this.stop();
                }
                // démarrage d'un nouveau player
                this.init(selector);
                this.loadSource();
            } // end if CurrentPlayer
        },
    } // end $player

});