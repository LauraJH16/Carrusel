$(document).ready(function () {
    var icon1 = $('.icon-1');
    var icon2 = $('.icon-2');
    var icon3 = $('.icon-3');
    var icon4 = $('.icon-4');
    var icon5 = $('.icon-5');
    var image = $('.image');
    var left = $('.icon-left');
    var right = $('.icon-right');
    var i = 1;

    $(icon1).click(function () {
        $(image).attr('src', "assets/images/1.jpg");
        $(icon2).text('panorama_fish_eye');
        $(icon3).text('panorama_fish_eye');
        $(icon4).text('panorama_fish_eye');
        $(icon5).text('panorama_fish_eye');
        $(icon1).text('lens');
        i = 1;
    });

    $(icon2).click(function () {
        $(image).attr('src', "assets/images/2.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon3).text('panorama_fish_eye');
        $(icon4).text('panorama_fish_eye');
        $(icon5).text('panorama_fish_eye');
        $(icon2).text('lens');
        i = 2;
    });

    $(icon3).click(function () {
        $(image).attr('src', "assets/images/3.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon2).text('panorama_fish_eye');
        $(icon4).text('panorama_fish_eye');
        $(icon5).text('panorama_fish_eye');
        $(icon3).text('lens');
        i = 3;
    });

    $(icon4).click(function () {
        $(image).attr('src', "assets/images/4.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon2).text('panorama_fish_eye');
        $(icon3).text('panorama_fish_eye');
        $(icon5).text('panorama_fish_eye');
        $(icon4).text('lens');
        i = 4;
    });

    $(icon5).click(function () {
        $(image).attr('src', "assets/images/5.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon2).text('panorama_fish_eye');
        $(icon3).text('panorama_fish_eye');
        $(icon4).text('panorama_fish_eye');
        $(icon5).text('lens');
        i = 5;
    });

    function index(){
        if (i == 1) {
            $(image).attr('src', "assets/images/1.jpg");
            $(icon2).text('panorama_fish_eye');
            $(icon3).text('panorama_fish_eye');
            $(icon4).text('panorama_fish_eye');
            $(icon5).text('panorama_fish_eye');
            $(icon1).text('lens');
        }

        if (i == 2) {
            $(image).attr('src', "assets/images/2.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon3).text('panorama_fish_eye');
        $(icon4).text('panorama_fish_eye');
        $(icon5).text('panorama_fish_eye');
        $(icon2).text('lens');

        }
        if (i == 3) {
            $(image).attr('src', "assets/images/3.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon2).text('panorama_fish_eye');
        $(icon4).text('panorama_fish_eye');
        $(icon5).text('panorama_fish_eye');
        $(icon3).text('lens');
        }
        if (i == 4) {
            $(image).attr('src', "assets/images/4.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon2).text('panorama_fish_eye');
        $(icon3).text('panorama_fish_eye');
        $(icon5).text('panorama_fish_eye');
        $(icon4).text('lens');
        }
        if (i == 5) {
            $(image).attr('src', "assets/images/5.jpg");
        $(icon1).text('panorama_fish_eye');
        $(icon3).text('panorama_fish_eye');
        $(icon4).text('panorama_fish_eye');
        $(icon2).text('panorama_fish_eye');
        $(icon5).text('lens');
        }
    }

    $(right).click(function () {
        $(image).attr('src', "assets/images/" + (i++) + ".jpg");
        index();
    });

    $(left).click(function () {
        $(image).attr('src', "assets/images/" + (i--) + ".jpg");
        index();
    });





});