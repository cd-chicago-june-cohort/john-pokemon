$(document).ready(function() {

    

    var $body = $("body");

    for (var i = 1; i < 152; i++) {
        var url = "http://pokeapi.co/media/img/";
        url += i;
        url += ".png";
        var str = "<img alt='pokemon' src='";
        str += url;
        str += "'/>";
        $body.append(str);
    }


});