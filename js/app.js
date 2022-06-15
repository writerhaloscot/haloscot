$(function () {


    // LOAD INCLUDES
    var m = '<meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8">';
    var s = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@700&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossorigin="anonymous">';
    var v = 'img/favicon.png';
    var c = 'css/style.css?v=1.22';
    var h = 'includes/header.html';
    var f = 'includes/footer.html';

    if (window.location.pathname != '/') {
        v = '../' + v;
        c = '../' + c;
        h = '../' + h;
        f = '../' + f;
    }

    $('head').prepend(m + s);
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

    // SCROLL SECTION
    $('body').on('click', '.scrollSection', function (e) {
        e.preventDefault();
        var h = $(this).attr('href');
        var p = $(h).offset().top;
        $('html, body').animate({
            scrollTop: p - 50
        });
    });


    // PRESS RELEASES
    var press = [
        ['Interviews'],
        ['The Writing Community Chat Show', 'https://anchor.fm/writingcommunitychatshow/episodes/03-Halo-interview-ecll67/a-a1u74aq'],
        ['Story of a Storyteller', 'https://storyofastoryteller.buzzsprout.com/1229831/5314054-s1-ep4-halo-scot-is-a-storyteller'],
        ['The Tiny Bookcase', 'https://buzzsprout.com/1129067/8142253'],
        ['Boomers on Books', 'https://youtu.be/cv30TN8VzUE'],
        ['The Shadow&rsquo;s Project Limited', 'https://youtu.be/GHfMmQHXSnQ'],
        ['Ginger Nuts of Horror', 'https://gingernutsofhorror.com/interviews/into-the-breach-once-more-five-minutes-with-author-halo-scot'],
        ['Armed with A Book', 'https://www.armedwithabook.com/halo-scot-on-writing-and-life-experiences/'],
        ['Beltana Book Burrow', 'https://beltanabookburrow.com/2020/04/08/halo-scot-has-answers/'],
        ['Awesome Gang', 'https://awesomegang.com/halo-scot/'],
        ['Writer Q&amp;A 2020 No. 7: Halo Scot by Wes Platt', 'https://www.patreon.com/posts/writer-q-2020-no-35957027'],
        ['Necessary Whimsy', 'https://necessarywhimsy.com/2020/05/23/author-interview-halo-scott/'],
        ['Secret Books', 'https://youtu.be/PESfJlNaf_Y'],
        ['Indie Deep Dive: Edge of the Breach – Halo Scot', 'https://jonfordauthor.com/blogpost/author-interview/indie-deep-dive-edge-of-the-breach-halo-scot/'],
        ['Self-Published Fantasy Month', 'https://www.selfpublishedfantasymonth.com/interview-with-halo-scot/'],
        ['What The Book', 'https://www.podbean.com/ei/pb-rm2j3-11d7f10'],
        ['Steve Talks Books', 'https://youtu.be/0STUKc9adEQ'],
        ['Steve Talks Books SPOILER Discussion', 'https://youtu.be/u3nZEzY3rYk'],
        
        ['Guest Posts'], 
        // ['&ldquo;Write Your Way&rdquo; on HanWritesBooks.com', 'https://www.hanwritesbooks.com/post/write-your-way-halo-scot'],
        ['&ldquo;The best dystopian books to devour your soul&rdquo; on Shepherd.com', 'https://shepherd.com/best-books/dystopian-books-to-devour-your-soul'],

        ['Reviews'],
        ['GBHBL Reviews', 'https://www.gbhbl.com/?s=halo+scot'],
        ['Morgan K Tanner Reviews', 'https://morganktanner.com/?s=halo+scot'],
        ['Sahreth (Baphy) Bowden Reviews', 'https://baphy1428.com/?s=halo+scot+book+review+rift+cycle'],
        ['Christine Morgan&rsquo;s World of Words', 'https://christinemariemorgan.wordpress.com/2021/03/11/reviews-march-2021/'],
        ['Andy James Trevors', 'https://www.ajtrevors.com/post/edge-of-the-breach-by-halo-scot-review'],
        ['Ria&rsquo;s Readviews', 'https://www.youtube.com/watch?v=MaZiM8VO8G4'],
        ['Mary Cook', 'https://www.youtube.com/watch?v=TFqGuHGZyOE'],
        ['Daniel Forbes', 'https://youtu.be/8j1qwKr8kbE'],
        // ['Corey Toomey', 'https://www.youtube.com/watch?v=NmcJDWjxiH0'],
        // ['Quinn Buckland', 'https://youtu.be/N7MOUWumu8g'],
        ['Jason Kilgore', 'https://jasonkilgore.blogspot.com/2020/06/review-of-edge-of-breach-by-halo-scot.html'],
        ['Bookish Bellee', 'https://bookishbellee.wordpress.com/2020/09/20/edge-of-the-breach-by-halo-scot-review/'],
        ['A.J. Calvin: Book Reviews, May 2021', 'https://ajcalvin.net/book-reviews-may-2021/'],
        ['A.J. Calvin: The Heartbeat of a Million Dreams by Halo Scot', 'https://ajcalvin.net/book-review-the-heartbeat-of-a-million-dreams-by-halo-scot/'],
        ['A D Green', 'https://adgreenauthor.com/2021/06/04/into-the-breach-by-halo-scot/'],
        ['KittyLisha Reviews', 'https://kittylishareviews.blogspot.com/2021/08/book-review-edge-of-breach-by-halo-scot.html'],
        ['K.B. Davenport', 'https://davenportbooks.wixsite.com/home/post/indie-review-edge-of-the-breach-by-halo-scot'],
        ['Riv Rains', 'https://rivrains.com/edge-of-the-breach-book-review/'],
        ['J.D. Cunegan: Book Review', 'https://jdcuneganbooks.com/2022/02/02/book-reviews-xv/'],
        ['J.D. Cunegan: My Favorite Self- and Independently-Published Books', 'https://jdcunegan.medium.com/my-favorite-self-and-independently-published-books-7105d9da7abe'],
        ['Evelyn Chartres: Evelyn Reads the Rift Cycle', 'https://evelynchartres.com/tag/halo-scot/'],
        ['Steve Talks Books: Creeping Death Review', 'https://www.creepingdeath.org/forum/index.php?/blogs/entry/938-edge-of-the-breach-by-halo-scot/'],
        ['Steve Talks Books: YouTube Review', 'https://youtu.be/PfgkEJJOdkE'],

        ['Features'],
        ['Publishers Weekly&rsquo;s Indie Spotlight: End of June 2021', 'https://www.publishersweekly.com/pw/by-topic/authors/pw-select/article/86757-indie-spotlight-end-of-june-2021.html'],
        ['Queer Indie', 'https://queerindie.com/'],
        ['BookCon', 'https://www.facebook.com/bookcon/videos/191013518970325'],
        ['Media Death Cult', 'https://youtu.be/8F5bLxSW-8s'],
        ['RedStarReviews: SPSFC (Self-Published Science Fiction Competition)', 'https://redstarreviews.com/2021/08/'],
        ['University of Edinburgh Alumni Bookshelf', 'https://www.ed.ac.uk/alumni/services/news/alumni-bookshelf/february-2020'],
        ['The Mother Load by LWB Podcast', 'https://www.spreaker.com/user/themotherload/eps-303-halo-scot-author'],
        ['Amy-Alex Campbell&rsquo;s Queerantine Reads', 'https://amyalexcampbell.com/queerantine-reads/'],
        ['Discount Book Man', 'https://discountbookman.com/edge-of-the-breach-by-halo-scot/'],
        ['Book Review Universe', 'https://bookreviewuniverse.com/edge-of-the-breach-by-halo-scot/'],
        ['Kari L. Wood', 'https://karilwood.com/blog-1/f/edge-of-the-breach'],
        ['Henry Black', 'https://henryblackwriter.wordpress.com/2020/01/31/indie-authors-of-the-month-january-2020/'],
        ['Book Recs for Your COVID-19 Lockdown by K. Daniels', 'https://kdanielsbooks.wordpress.com/2020/04/08/book-recs-for-your-covid-19-lockdown/'],
        ['Queer Sci Fi', 'https://www.queerscifi.com/announcement-edge-of-the-breach-by-halo-scott/'],
        ['#WrongPlaceWrongTime', 'https://thewrongplaceatthewrongtime.blogspot.com/2020/03/read-first-chapter-of-edge-of-breach.html'],
        ['Summon Fantasy', 'https://www.summonfantasy.com/book-recommendations/edge-of-the-breach-rift-cycle-book-1-by-halo-scot'],
        ['May Book Recommendations by Melissa Hawkes', 'https://www.melissahawkes.com/post/may-book-recommendations'],
        ['The Yuppie Flu', 'https://www.youtube.com/watch?v=ZGZww7jMI94'],
        ['Spells and Spaceships', 'https://spellsandspaceships.home.blog/2020/04/24/hidden-gems-issue-1/'],
        ['Top 3 Indie Books of 2020 (January-June) on HanWritesBooks.com', 'https://www.hanwritesbooks.com/post/my-top-3-indie-books-of-2020-january-june'],
        ['Dark Fantasy Author Samantha Kroese&rsquo;s Recommended Indie Reads', 'https://vnvstables.wixsite.com/authorsnkroese/post/updated-recommended-indie-author-reading-list'],
        ['Jon Ford', 'http://jonfordauthor.com/links-to-my-friends/'],
        ['Lord Veil', 'https://youtu.be/LAAdsX9SoYk'],
        ['Lord Veil&rsquo;s Devil&rsquo;s Night Reading', 'https://youtu.be/duOFoPsvUZk'],
        ['Author Samantha Kroese&rsquo;s Top Ten Reads for 2020', 'https://vnvstables.wixsite.com/authorsnkroese/post/a-year-of-reading-indie'],
        ['Footnote Management&rsquo;s 2020 Indie Book Releases', 'https://footnotesmgmt.com/blog/2020-indie-book-releases'],
        ['The Year in a Book-Shelf (2020) by Author Rory Michaelson', 'https://www.rorymichaelson.com/post/the-year-in-a-book-shelf-2020'],
        ['Ria&rsquo;s Readviews: Best Books of 2020', 'https://riasreadviews.com/best-books-of-2020/'],
        ['A.J. Calvin&rsquo;s #IndieApril 2021 Reading List', 'https://ajcalvin.net/my-indieapril-2021-reading-list/'],
        ['Celthric', 'https://celthric.com/edge-of-the-breach-by-halo-scot/'],
        ['Book Club News', 'https://bookclubnews.com/halo-scot/'],
        ['Rory Michaelson: Queer in a Bookcase 2021', 'https://www.rorymichaelson.com/post/queer-in-a-bookcase-2021'],
        ['Esteban Q Mathieus', 'https://eqmauthor.com/2021/12/31/rift-cycle-halo-scot/'],
        ['The Road to Nathan', 'https://theroadtonathan.com/indie-books-ive-read'],
        ['Reads Rainbow: The Heartbeat of a Million Dreams', 'https://readsrainbow.com/2022/01/book-releases-2022-sapphic-releases-january-to-june'],

        ['Poetry'],
        ['The Organic Poet: Born a Flame (Poem)', 'https://www.theorganicpoet.com/post/born-a-flame-halo_scot'],
        ['The Organic Poet: Bleeding Soul (Poem)', 'https://www.theorganicpoet.com/post/bleeding-soul-halo_scot'],
        ['The Organic Poet: Severed Star (Poem)', 'https://www.theorganicpoet.com/post/severed-star-halo_scot'],

        ['WCCS'],
    ];
    var pressHTML = '';

    for (var i = 0; i < press.length; i++) {
        var p = press[i];
        var t = '';
        var u = '';

        if (p == 'Interviews' || p == 'Guest Posts' || p == 'Reviews' || p == 'Features' || p == 'Poetry') {
            pressHTML += '<h3>' + p + '</h3>';
        } else if (p == 'WCCS') {
            pressHTML += '<h3><a class="button" style="display:inline-block !important;margin-top: 0;" href="https://www.thewritingcommunitychatshow.com/" target="_blank">WCCS</a> Swag</h3><p class="press-item"><a href="https://teespring.com/halo-collection?tsmac=store&pid=227" target="_blank">Use promo code <strong>HALO2020</strong> to get 15% off the WCCS Halo collection&nbsp;›</a></p>';
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


    // lazy load press, letter
    $('.toggle').on('click', function (e) {
        e.preventDefault();
        var a = '#' + $(this).data('acc');
        var d = '';

        switch (a) {
        case '#press':
            d = pressHTML;
            break;
        }

        if (!$(a).hasClass('content-loaded')) {
            $(a).html(d);
            $(a).addClass('content-loaded');
        }

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(a).slideUp();
        } else {
            $(this).addClass('open');
            $(a).slideDown();
        }
    });

    // POP UP
    $('.pop-up-content').on('click', function (e) {
        e.stopPropagation();
    });
    $('.pop-up-btn').on('click', function (e) {
        e.preventDefault();
        $('#' + $(this).data('pop')).fadeIn();
    });
    $('.pop-up-close').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.pop-up').fadeOut();
    });
    $('.pop-up').on('click', function (e) {
        e.preventDefault();
        $(this).fadeOut();
    });


    // FREE FORM, change folder/pw as needed
    $('#eotb').on('submit', function (e) {
        e.preventDefault();
        var pw = 'WeAreMonsters!!';
        var pw_input = $(this).find('.form-pw').val();

        if (pw_input == pw) {
            $(this).find('.form-error').hide();
            $(this).find('.form-success').show();
            window.location.href = "/free/file9183765/eotb.zip";
        } else {
            $(this).find('.form-error').show();
            $(this).find('.form-success').hide();
        }
    });
    // END FREE FORM
    
    // IWKY FORM, change folder/pw as needed
    $('#iwky').on('submit', function (e) {
        e.preventDefault();
        var pw = 'TeamCorpse!FTW';
        var pw_input = $(this).find('.form-pw').val();

        if (pw_input == pw) {
            $(this).find('.form-error, .form-pw, .form-btn').hide();
            $('.form-desc').hide();
            $(this).find('.form-success, .form-files').show();
            var iwky = $('#iwky').html();
            $('#iwky').html(iwky + '<p class="form-files"><a href="/team-corpse-iwky/file882022/iwky.epub" download class="button">epub</a> <a href="/team-corpse-iwky/file882022/iwky.mobi" download class="button blue">mobi</a> <a href="/team-corpse-iwky/file882022/iwky.pdf" download class="button white">pdf</a><span>Welcome to Team Corpse! Here is your Murder Court membership card. Click to download.</span><a href="/img/team-corpse-card.png" download><img src="/img/team-corpse-card.png"></a></p>');
        } else {
            $(this).find('.form-error, .form-pw, .form-btn').show();
            $('.form-desc').show();
            $(this).find('.form-success, .form-files').hide();
        }
    });
    // IWKY FREE FORM

});