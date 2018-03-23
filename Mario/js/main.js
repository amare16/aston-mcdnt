$(document).ready(function () {
    $(document).keydown(function(key) {
        switch (parseInt(key.which, 10)) {
            case 37:
                $('div #marios').animate({left: "-=10px"}, 'fast');
                break;
            case 38:
                $('div #marios').animate({top: "-=10px"}, 'fast');
                break;

            case 39:
                $('div #marios').animate({left: "+=10px"}, 'fast');
                break;

            case 40:
                $('div #marios').animate({top: "+=10px"}, 'fast');
                break;
        }
    });


    function goombaLeft() {
        $("#goomba").animate({left: "+=-380"}, 1500, "swing", goombaRight);
    }

    function goombaRight() {
        $("#goomba").animate({left: "-=-370"}, 1500, "swing", goombaLeft);
    }
    goombaRight();
});

$(document).ready(function () {



    function goombaLeft() {
        $("#goomba").animate({left: "+=300"}, 1500, "swing", goombaRight);
    }

    function goombaRight() {
        $("#goomba").animate({left: "-=300"}, 1500, "swing", goombaLeft);
    }
    goombaRight();
});