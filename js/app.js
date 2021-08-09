$(function () {


    // LOAD INCLUDES
    var m = '<meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8">';
    var s = '<link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Text:400|Roboto:400,400i,500&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" crossorigin="anonymous">';
    var v = 'img/favicon.png';
    var c = 'css/style.css?v=1.1.4';
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
        ['Ginger Nuts of Horror', 'https://gingernutsofhorror.com/interviews/into-the-breach-once-more-five-minutes-with-author-halo-scot'],
        ['Armed with A Book', 'https://www.armedwithabook.com/halo-scot-on-writing-and-life-experiences/'],
        ['Beltana Book Burrow', 'https://beltanabookburrow.com/2020/04/08/halo-scot-has-answers/'],
        ['Awesome Gang', 'https://awesomegang.com/halo-scot/'],
        ['Writer Q&amp;A 2020 No. 7: Halo Scot by Wes Platt', 'https://www.patreon.com/posts/writer-q-2020-no-35957027'],
        ['Necessary Whimsy', 'https://necessarywhimsy.com/2020/05/23/author-interview-halo-scott/'],
        ['&ldquo;Write Your Way&rdquo; Guest Post on HanWritesBooks.com', 'https://www.hanwritesbooks.com/post/write-your-way-halo-scot'],
        ['Secret Books', 'https://youtu.be/PESfJlNaf_Y'],
        ['Boomers on Books', 'https://youtu.be/cv30TN8VzUE'],
        ['Indie Deep Dive: Edge of the Breach – Halo Scot', 'https://jonfordauthor.com/blogpost/author-interview/indie-deep-dive-edge-of-the-breach-halo-scot/'],

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
        ['A.J. Calvin&rsquo;s Book Reviews: May 2021', 'https://ajcalvin.net/book-reviews-may-2021/'],
        ['A D Green', 'https://adgreenauthor.com/2021/06/04/into-the-breach-by-halo-scot/'],

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

        if (p == 'Interviews' || p == 'Reviews' || p == 'Features' || p == 'Poetry') {
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

    var letterHTML = '<p>Hey there,</p><p>I&rsquo;m Halo, a Renaissance soul. I bushwhack my way through life&mdash;no highways for me. I have been a student, a teacher, a musician, a photographer, a coder, and now, an author. It took some time to find my direction, but each experience enabled me and pushed me closer to the truth.</p><p>I write about the dark, about the taboo and the unorthodox. A few years back, when the urge to write became too desperate to ignore, I found the pen a lifeline and the words a lighthouse.</p><p>Writing is therapy for me, a pressure relief valve for emotions, for the inevitable existential crisis that comes with personal growth. Writing orders my thoughts as I explore my darkest fears, my deepest desires, through fantasy. Writing unveils truth. The stories are an outlet, a voice, for our subconscious. We admit to the page what we are not ready to admit to ourselves, and then the page becomes a mirror.</p><p>Thank you for reading, and <strong>welcome to the breach</strong>.</p><p><em>Halo Scot</em></p><hr class="sub" /><p><strong>Halo Scot is the author of the <a href="https://author.to/HaloScot" target="_blank">Rift Cycle</a>: a grimdark, science-fantasy series with psychological horror, mental illness, and LGBTQ+ themes. As a murderer of characters and destroyer of (fantasy) worlds, Halo spends too much time scheming and not enough time adulting.</strong></p><p><strong>Halo has been featured in Publishers Weekly&rsquo;s Indie Spotlight and, as a founding member of <a href="https://queerindie.com/" target="_blank">QueerIndie.com</a>, in Pop Pride Week, an event hosted by ReedPop, BookCon, and New York Comic Con.</strong></p>';

    var excerptHTML = '<h3>EXCERPT 1</h3><p><strong><span class="hide-mobile">Chapter </span>1: Pain Made a Man</strong> <br /> <em>Kyder, Age 9 &#9644; Jul. 7, 7009</em></p><p>Her body is stone. Her eyes glass. She doesn&rsquo;t see me. Doesn&rsquo;t want me. Yet her blood runs through me, a river of pain.</p><p>I call her mother, but she calls me nothing. She hopes to forget me. Hopes I will disappear. Conceived in violence, I am a constant reminder of the crime that made me.</p><p>&ldquo;Come,&rdquo; she orders me. Like a dog. And I jog at her heels, obedient.</p><p>She won&rsquo;t use my name. It&rsquo;s a reminder I exist. The meaning behind it is empty, anyway. She refused to name me, so the hospital staff did. Julian Kyder&mdash;Julian after the doctor who delivered me and Kyder after the hospital. Forever marked by the circumstances of my birth.</p><p>She tried to abort, but I survived. She put me up for adoption, but no one took me. She tried to release me into the system, but they were already at overcapacity. We&rsquo;re trapped. Stuck together as two halves of misery. The doctor told me I am a miracle. She told me I am a curse.</p><p>&ldquo;This way.&rdquo;</p><p>She leads me along the edge of the Shelf toward the market. With each step, my feet crunch along the parched gravel. To our left, cliffs drop hundreds of meters into the Ruined Sea, a toxic cesspool that encircles the island. In the distance, Mount Erebus puffs ash into the blanched sky, a grandfather smoking the last bit of a cigar.</p><p>We mutilated our world, bombarded the planet for centuries with nuclear weapons until we ran out of missiles, until Earth flipped upside-down. The only habitable continent is Antarctica, now the North Pole, and even here, the war melted the desolate wasteland into a scorching desert. Humans near extinction, huddled near the top of the planet like exiles. But we deserve it.</p><p>A circular wound punctures the sky at its zenith, ever-present. It&rsquo;s the Rift&mdash;a dark, festering mass opened by the end of the war one thousand years ago. The hole in the sky is the size of my fist from here, unassuming from the ground, yet world-changing to civilization. It&rsquo;s a gateway to the other realms, though the gods are mostly silent, indifferent, rarely speaking and never interfering. They care as little about this place as I do.</p><p>Sweat trickles down my back. I pull my robe tight around myself, hoping to block out the sun. It&rsquo;s summer, so there&rsquo;s no respite from the heat. The days are endless. They bleed into each other like ink on a page, no distinction between the lines. Night won&rsquo;t come for another few months, and soon after it does, it won&rsquo;t leave till winter&rsquo;s done.</p><p>Some call it balance. Day and night. Light and dark. Sun and stars. Birth and death. People look for meaning when it&rsquo;s only chaos disguised as order&hellip;</p><hr class="sub" /><h3>EXCERPT 2</h3><p><strong><span class="hide-mobile">Chapter </span>2: Love Made a Woman</strong> <br /> <em>Rune, Age 11 &#9644; Aug. 23, 7014</em></p><p>My room is on the top floor of the hospital. Bedridden, I spend most of my time counting starboats. There are seven million people in Zawad and at least as many starboats. The hovering vessels ship residents across the city in multi-level traffic patterns. There are ferries for the public, yachts for the wealthy, brigs for retro types, gondolas for romantic types, and kayaks for racers&mdash;all airborne. I sometimes blur my eyes and imagine they are lost species of birds from the golden days of Earth.</p><p>A stab of pain interrupts my daydreaming. My stomach cramps, and I collapse forward, grabbing my waist.</p><p>&ldquo;Shh, shh, <em>mon c&oelig;ur</em>.&rdquo; My mother wakes from beside me and gently strokes my bald head. &ldquo;What hurts?&rdquo;</p><p>&ldquo;Everything, <em>Maman</em>,&rdquo; I say. My chest, my head, my very bones. I sweat with fever, my frail body slick and clammy. No matter what I eat, no matter how much I sleep, I remain emaciated, weak, tired. I used to be strong, graceful. Now, I catch colds every other week. Bruises mottle my dark skin. Blood leaks from my nose, and I shove a wad of gauze into my nostrils to ebb the flow.</p><p>I was diagnosed with leukemia a year ago. I&rsquo;m stage four. It&rsquo;s terminal. My twin brother, Syh, lays beside me with the same fate, but he is somehow able to rest. My father curls around his bony frame, asleep from exhaustion. My parents are both spring-born doctors who work at the hospital. They can&rsquo;t save us, and it torments them. Our curse is too strong.</p><p><em>Maman</em> gazes at me with agonizing helplessness. Tears glisten in her eyes, the eyes we share, a rich sapphire like the night sky in winter.</p><p>&ldquo;Rune, I would give all the <em>&eacute;toiles dans le ciel</em> to save you,&rdquo; she says. &ldquo;I would tear down the sun and shatter <em>la lune</em> if it would make you whole again. But I am human, flawed, limited. <em>Pardonne-moi</em>.&rdquo;</p><p>When she is upset, she peppers her speech with French, the language of our ancestors, the language lost like the rest of our culture.</p><p>&ldquo;It is not your fault, <em>Maman</em>,&rdquo; I say.</p><p>Though it is a cruel irony. Give two healers the two children they cannot save. And give those twins immense power they can never use. We are winter-born, birthed at midnight on the solstice, shields of untold potential who will remain mysteries. We will never join the Star Guild, never set foot in the Four Towers of Ma&rsquo;at. The hospital is the last place we will see. My mind lingers on the macabre. I need a distraction.</p><p>&ldquo;Tell me a story,&rdquo; I say&hellip;</p>';

    // lazy load press, letter
    $('.toggle').on('click', function (e) {
        e.preventDefault();
        var a = '#' + $(this).data('acc');
        var d = '';

        switch (a) {
        case '#press':
            d = pressHTML;
            break;
        case '#letter':
            d = letterHTML;
            break;
        case '#excerpt':
            d = excerptHTML;
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

});