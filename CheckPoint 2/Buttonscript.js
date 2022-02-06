

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
                    let objectid = `${response[i]._id}`;
                    let postid=`${response[i].PostID}`;
                let username=`${response[i].Username}`;
                let pc=`${response[i].PostContent}`;
                let nol = `${response[i].NumberOfLikes}`;
                    content = `${content}<section class =".col-md-6 d-flex flex-column justify-content-between m-5 border bg-white border-primary rounded w-25" style="height:300px;opacity:0.9" id='${response[i].PostID}'>
                <div class="opacity-100">${response[i].Username}</div>
                <div class="opacity-100">${response[i].PostContent}</div>
                <div class="opacity-100 likes">${response[i].NumberOfLikes}</div>
                <a href="#clickedlike" class="button" data-id='${response[i]._id}' data-user='${response[i].Username}' 
                data-postid='${response[i].PostID}' data-content='${response[i].PostContent}'
                data-likes='${response[i].NumberOfLikes}'> Like </a>
            </section>`
            $("#data").html(content);
                }
            })
        
    }
    $("#clickedlike").on("click", ".button", function (e) {
        let objectid =  $(this).data("id");
        let postid=$(this).data("postid");
        let username=$(this).data("user");;
        let pc=$(this).data("content");
        let nol = $(this).data("likes");
        likedbleh(postid,username,pc,nol,objectid);
    })
    function likedbleh(postid,username,Content,numberoflikes,objectid)
    {
        var jsondata =
        {
            "PostID":postid,
            "Username":`"${username}"`,
            "PostContent":`"${Content}"`,
            "NumberOfLikes":numberoflikes+1
        };
        var settings = {
            "async": true,
            "crossDomain": true,
            "url":`"https://interactivedevweek12-0d3a.restdb.io/rest/covid-thread/${objectid}"`,
            "method": "PUT",
            "headers": {
              "content-type": "application/json",
              "x-apikey": "61d256e9ccd0211b320894a3",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
          }
        $.ajax(settings).done(function(response) {
            console.log(response);
            location.reload();
            Getdata();
        });

    }

                
  
    
})