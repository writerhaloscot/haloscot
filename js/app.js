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


    // PRESS RELEASES
    var press = [
        ['Interviews'],
        ['Ginger Nuts of Horror', 'https://gingernutsofhorror.com/interviews/into-the-breach-once-more-five-minutes-with-author-halo-scot'],
        ['Armed with A Book', 'https://www.armedwithabook.com/halo-scot-on-writing-and-life-experiences/'],
        ['Beltana Book Burrow', 'https://beltanabookburrow.com/2020/04/08/halo-scot-has-answers/'],
        ['Awesome Gang', 'https://awesomegang.com/halo-scot/'],
        ['Writer Q&amp;A 2020 No. 7: Halo Scot by Wes Platt', 'https://www.patreon.com/posts/writer-q-2020-no-35957027'],
        ['Necessary Whimsy', 'https://necessarywhimsy.com/2020/05/23/author-interview-halo-scott/'],

        ['Reviews'],
        ['Games, Brrraaains &amp; A Head-Banging Life', 'https://www.gbhbl.com/horror-book-review-edge-of-the-breach-rift-cycle-book-1-halo-scot/'],
        ['Morgan K Tanner, Author', 'https://morganktanner.com/2020/02/23/book-review-edge-of-the-breach-by-halo-scot/'],
        ['Sahreth (Baphy) Bowden, Author', 'https://baphy1428.com/2020/01/21/edge-of-the-breach-by-halo-scot-book-review/'],
        ['Andy James Trevors, Author', 'https://www.ajtrevors.com/post/edge-of-the-breach-by-halo-scot-review'],
        ['Ria&rsquo;s Readviews', 'https://www.youtube.com/watch?v=MaZiM8VO8G4'],
        ['Mary Cook, Author', 'https://www.youtube.com/watch?v=TFqGuHGZyOE'],
        ['Corey Toomey, Author', 'https://www.youtube.com/watch?v=NmcJDWjxiH0'],
        ['Quinn Buckland, Author', 'https://youtu.be/N7MOUWumu8g'],
        ['Jason Kilgore, Author', 'https://jasonkilgore.blogspot.com/2020/06/review-of-edge-of-breach-by-halo-scot.html'],

        ['Features'],
        ['Queer Indie', 'https://queerindie.com/'],
        ['BookCon', 'https://www.bookcon.com/en/Sessions/89123/Queer-Indie-Write-the-Rainbow'],
        ['University of Edinburgh Alumni bookshelf', 'https://www.ed.ac.uk/alumni/services/news/alumni-bookshelf/february-2020'],
        ['The Writing Community Chat Show Podcast', 'https://anchor.fm/writingcommunitychatshow/episodes/03-Halo-interview-ecll67/a-a1u74aq'],
        ['The Mother Load by LWB Podcast', 'https://www.spreaker.com/user/themotherload/eps-303-halo-scot-author'],
        ['Amy-Alex Campbell&rsquo;s Queerantine Reads', 'https://amyalexcampbell.com/queerantine-reads/'],
        ['Awesome Gang', 'https://awesomegang.com/edge-of-the-breach-by-halo-scot/'],
        ['Discount Book Man', 'https://discountbookman.com/edge-of-the-breach-by-halo-scot/'],
        ['Book Review Universe', 'https://bookreviewuniverse.com/edge-of-the-breach-by-halo-scot/'],
        ['My Book Place', 'https://mybookplace.net/edge-of-the-breach-by-halo-scot/'],
        ['Kari L. Wood', 'https://karilwood.com/blog-1/f/edge-of-the-breach'],
        ['Henry Black', 'https://henryblackwriter.wordpress.com/2020/01/31/indie-authors-of-the-month-january-2020/'],
        ['Book Recs for Your COVID-19 Lockdown by K. Daniels', 'https://kdanielsbooks.wordpress.com/2020/04/08/book-recs-for-your-covid-19-lockdown/'],
        ['Queer Sci Fi', 'https://www.queerscifi.com/announcement-edge-of-the-breach-by-halo-scott/'],
        ['#WrongPlaceWrongTime', 'https://thewrongplaceatthewrongtime.blogspot.com/2020/03/read-first-chapter-of-edge-of-breach.html'],
        ['Summon fantasy', 'https://www.summonfantasy.com/book-recommendations/edge-of-the-breach-rift-cycle-book-1-by-halo-scot'],
        ['May Book Recommendations by Melissa Hawkes', 'https://www.melissahawkes.com/post/may-book-recommendations'],
        ['The Yuppie Flu', 'https://www.youtube.com/watch?v=ZGZww7jMI94'],
        ['Spells and Spaceships', 'https://spellsandspaceships.home.blog/2020/04/24/hidden-gems-issue-1/'],
        ['Top 3 Indie Books of 2020 (January-June) on HanWritesBooks.com', 'https://www.hanwritesbooks.com/post/my-top-3-indie-books-of-2020-january-june']
    ];
    var pressHTML = '';

    for (var i = 0; i < press.length; i++) {
        var p = press[i];
        var t = '';
        var u = '';

        if (p == 'Interviews' || p == 'Reviews' || p == 'Features') {
            pressHTML += '<h3>' + p + '</h3>';
        } else {
            for (var j = 0; j < p.length; j++) {
                if (j == 0) {
                    t = p[j];
                } else {
                    u = p[j];
                }
            }
            pressHTML += '<p class="press-item"><a href="' + u + '" target="_blank">' + t + '&nbsp;&rsaquo;</a></p>';
        }
    }

    $('#press').html(pressHTML);


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