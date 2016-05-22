/**
 * Created by Love Barca on 5/22/2016.
 */
 $(document).ready(function() {
            $('#a').click(function () {
                $('#a').css("z-index", "1").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#a1').css("left", "600px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#a2').css("left", "650px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b').css("z-index", "1").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b1').css("z-index", "2").css("left", "600px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b2').css("z-index", "3").css("left", "650px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
            });
            $('#a1').click(function () {
                $('#a1').css("z-index", "2").css("left", "50px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#a').css("left", "0px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#a2').css("left", "650px").css("z-index", "3").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b1').css("z-index", "2").css("left", "50px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b').css("z-index", "1").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b2').css("z-index", "3").css("left", "650px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
            });
            $('#a2').click(function () {
                $('#a2').css("z-index", "3").css("left", "100px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#a').css("left", "0px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#a1').css("left", "50px").css("z-index", "2").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b2').css("z-index", "3").css("left", "100px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b').css("z-index", "1").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
                $('#b1').css("z-index", "2").css("left", "50px").css("transition", "all 0.5s").css("-webkit-transition", "all 0.5s").css("-moz-transition", "all 0.5s");
            });

        });
