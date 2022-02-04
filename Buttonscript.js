const APIKEY = "61d256e9ccd0211b320894a3";
function likedbleh(postid,username,Content,numberoflikes)
    {
        var jsondata =
        {
            "PostID":postid,
            "Username":username,
            "PostContent":Content,
            "NumberOfLikes":numberoflikes
        }
        var settings = {
            "async": true,
            "crossDomain": true,
            "url":`"https://interactivedevweek12-0d3a.restdb.io/rest/covid-thread/${postid}"`,
            "method": "PUT",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
          }
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    }
$(document).ready(function () {
    
    const APIKEY = "61d256e9ccd0211b320894a3";
    Getdata();
    
    function Getdata(limit = 10, all = true) {
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedevweek12-0d3a.restdb.io/rest/covid-thread",
            "method": "GET", //[cher] we will use GET to retrieve info
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
            $.ajax(settings).done(function (response) {
                let content = "";
                
                for (var i = 0; i < response.length && i < limit; i++) {
                    let postid=`${response[i].PostID}`;
                let username=`${response[i].Username}`;
                let pc=`${response[i].PostContent}`;
                let nol = `${response[i].NumberOfLikes}`;
                    content = `${content}<section class =".col-md-6 d-flex flex-column justify-content-between m-5 border bg-white border-primary rounded w-25" style="height:300px;opacity:0.9" id='${response[i].PostID}'>
                <div class="opacity-100">${response[i].Username}</div>
                <div class="opacity-100">${response[i].PostContent}</div>
                <div class="opacity-100 likes">${response[i].NumberOfLikes}</div>
                <a href="#" onclick="likedbleh(${postid},'${username}','${pc}',${nol})" class="button"> Like </a>
            </section>`
            $("#data").html(content);
                }
            })
        
    }
    
    
                
  
    
})