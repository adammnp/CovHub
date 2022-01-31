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
                content = `${content}<section class =".col-md-6 d-flex flex-column justify-content-between m-5 border bg-white border-primary rounded w-25" style="height:300px;opacity:0.9" id='${response[i].PostID}'>
                <div class="opacity-100">${response[i].Username}</div>
                <div class="opacity-100">${response[i].PostContent}</div>
                <div class="opacity-100">${response[i].NumberOfLikes}</div></section>
                `
                
                $("#data").html(content);
                
            }

        })
    }
})