$(function () {


    // LOAD INCLUDES
    var m = '<meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8">';
    var s = '<link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Text:300|Roboto:300,300i,400&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" crossorigin="anonymous">';
    var v = 'img/favicon.png';
    var c = 'css/style.css?v=1.1.1';
    var h = 'includes/header.html';
    var f = 'includes/footer.html';
    var g = '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-152375493-1"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-152375493-1");</script>';

    if (window.location.pathname != '/') {
        v = '../' + v;
        c = '../' + c;
        h = '../' + h;
        f = '../' + f;
    }

    $('head').prepend(m + g + s);
    $('head').append('<link rel="shortcut icon" href="' + v + '" type="image/x-icon" /><link rel="stylesheet" href="' + c + '" />');
    $('#header').load(h);
    $('#footer').load(f);


    // SCROLL TO TOP
    $('body').on('click', '.scrollTop', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: '0px'
        });
    });


    // RANDOM NUMBERS
    /* function rand(n, l, u) {
        var lim = n;
        var nums = [];
        for (var i = 0; i < lim; i++) {
            var j = Math.floor(Math.random() * u) + l; // upp/low limits
            while (nums.indexOf(j) != -1) {
                j = Math.floor(Math.random() * u) + l;
            }
            nums[i] = j;
        }
        return nums;
    } */


    // MOODBOARD
    /* if ($('.moodboard').length > 0) {
        update_moodboard();
        $('.moodboard-btn').on('click', function (e) {
            e.preventDefault();
            update_moodboard();
        });
        function update_moodboard() {
            $('.moodboard').html('');
            var api = '584451-c934d8c19cd640e63fc04dd13';
            var rand_pics = rand(4, 0, pics.length - 1);
            for (var i = 0; i < rand_pics.length; i++) {
                var URL = "https://pixabay.com/api/?key=" + api + "&id=" + pics[rand_pics[i]];

                $.getJSON(URL, function (data) {
                    if (parseInt(data.totalHits) > 0) {
                        $.each(data.hits, function (i, hit) {
                            $('.moodboard').append('<div class="board-item"><div class="board-wrapper"><a href="' + hit.pageURL + '" target="_blank" class="moodboard-img" style="background-image:url(' + hit.webformatURL + ');"><span class="hide-SEO">Moodboard Image</span></a></div></div>');
                        });
                    }
                });
            }
        }
    } */


    // SOUNDBOARD
    /* if ($('.soundboard').length > 0) {
        update_soundboard();
        $('.soundboard-btn').on('click', function (e) {
            e.preventDefault();
            update_soundboard();
        });
        function update_soundboard() {
            $('.soundboard').html('');
            var rand_songs = rand(4, 0, songs.length - 1);
            for (var i = 0; i < rand_songs.length; i++) {
                $('.soundboard').append('<div class="board-item"><div class="board-wrapper"><iframe src="https://embed.music.apple.com/us/album/' + songs[rand_songs[i]] + '"></iframe></div></div>');
            }
        }
    } */
    
    
    // BOOKBOARD
    /* if ($('.bookboard').length > 0) {
        update_bookboard();
        $('.bookboard-btn').on('click', function (e) {
            e.preventDefault();
            update_bookboard();
        });
        function update_bookboard() {
            $('.bookboard').html('');
            var rand_books = rand(4, 0, books.length - 1);
            for (var i = 0; i < rand_books.length; i++) {
                $('.bookboard').append('<div class="board-item">' + books[rand_books[i]] + '</div>');
            }
        }
    } */
    
    
});
