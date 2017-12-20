$(document).ready(function () {
    var iconOne = $('.icon-1');
    var iconTwo = $('.icon-2');
    var iconThree = $('.icon-3');
    var iconFour = $('.icon-4');
    var iconFive = $('.icon-5');
    var image = $('.image');

    $(iconOne).click(function () {
        $(image).attr('src', "assets/images/img1.jpg");
        $(iconTwo).text('panorama_fish_eye');
        $(iconThree).text('panorama_fish_eye');
        $(iconFour).text('panorama_fish_eye');
        $(iconFive).text('panorama_fish_eye');
        $(iconOne).text('lens');
    });

    $(iconTwo).click(function () {
        $(image).attr('src', "assets/images/img2.jpg");
        $(iconOne).text('panorama_fish_eye');
        $(iconThree).text('panorama_fish_eye');
        $(iconFour).text('panorama_fish_eye');
        $(iconFive).text('panorama_fish_eye');
        $(iconTwo).text('lens');
    });

    $(iconThree).click(function () {
        $(image).attr('src', "assets/images/img3.jpg");
        $(iconOne).text('panorama_fish_eye');
        $(iconTwo).text('panorama_fish_eye');
        $(iconFour).text('panorama_fish_eye');
        $(iconFive).text('panorama_fish_eye');
        $(iconThree).text('lens');
    });

    $(iconFour).click(function () {
        $(image).attr('src', "assets/images/img4.jpg");
        $(iconOne).text('panorama_fish_eye');
        $(iconTwo).text('panorama_fish_eye');
        $(iconThree).text('panorama_fish_eye');
        $(iconFive).text('panorama_fish_eye');
        $(iconFour).text('lens');
    });

    $(iconFive).click(function () {
        $(image).attr('src', "assets/images/img5.jpg");
        $(iconOne).text('panorama_fish_eye');
        $(iconTwo).text('panorama_fish_eye');
        $(iconThree).text('panorama_fish_eye');
        $(iconFour).text('panorama_fish_eye');
        $(iconFive).text('lens');
    });
});