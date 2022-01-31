$(document).ready(function () {
    const APIKEY = "61d256e9ccd0211b320894a3";
    getdata();
    function getdata(limit = 10, all = true) 
    {
        let settings =
        {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedevweek12-0d3a.restdb.io/rest/covid-thread",
            "method": "GET", //[cher] we will use GET to retrieve info
            "headers":
            {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
        $.ajax(settings).done(function (response)
        {
            let content = "";

            for (var i = 0; i < response.length && i < limit; i++) {
                content = `${content}<section class =".col-md-6 flex-column m"id='${response[i].PostID}'>
                <div>${response[i].Username}</div>
                <div>${response[i].PostContent}</div>
                <div>${response[i].NumberOfLikes}</div>
                `
                $("#data").html(content);
                
            }

        })
    }
})