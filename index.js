$(document).ready(function() {

    var strVal;



    function getData(strVal) {

        var s = strVal;
        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch= " + s + " &srprop=size%7Cwordcount%7Ctimestamp%7Csnippet&prop=info&inprop=url&format=json&callback=?", function(js) {
            console.log("function");

            var arr = [];
            console.log(js);
            arr = Object.keys(js.query.pages);

            //console.log(arr);
            //JSON.stringify(js.query.pages);

            $("#name").html("<center>" + "<h4>" + "Searching about " + s + " " + "</h4>" + "</center>" + "<hr>");

            var disp = "";
            for (var i = 0; i < arr.length; i++) {

                var valu = arr[i];
                // console.log(valu);
                var url = js.query.pages[valu].fullurl;
                var tit = js.query.pages[valu].title;


                disp += (i + 1) + " &nbsp&nbsp ." + "<h4>" + tit.link(url) + " &nbsp&nbsp ." + js.query.pages[valu].pageid + "&nbsp " + js.query.pages[valu].title + "</h4>" + "<hr>";
                console.log(typeof disp);




                /* $("#updateWiki").before(    (i +1) +  "<h4>"+  " &nbsp&nbsp ." +tit.link(url) +   " &nbsp&nbsp ." + js.query.pages[valu].title + "</h4>" + "<hr>");

                   }*/

                //alert(js.query);tit.link(url)

            }

            $("#updateWiki").html("<div class=\"panel panel-default\" " + "<div class=\"panel-body\">" + disp + "</div" + "</div");
            //);

        });
    }



    $("#searchVal").keydown(function(event) {

        var strVal = $("#searchVal").val();

        if (event.which === 13) {

            getData(strVal);

        }
    });



    $("#press").click(function() {

        strVal = $("#searchVal").val();
        console.log(strVal);
        getData(strVal);

    });


});
//json&callback=?
