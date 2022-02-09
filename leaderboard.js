
 let scores=[];
 function updateLeaderboardView() { let leaderboard = document.getElementById("leaderboard");
 leaderboard.innerHTML = "";

 scores.sort(function(a, b){ return b.score - a.score  });
 let elements = []; // we'll need created elements to update colors later on
 // create elements for each player
 for(let i=0; i<scores.length; i++) {
     let name = document.createElement("div");
     let score = document.createElement("div");
     name.classList.add("name");
   
     score.classList.add("score");
   
     name.innerText = i+1 +`) ` + scores[i].name;
     score.innerText = scores[i].score;

     let scoreRow = document.createElement("div");
     scoreRow.classList.add("d-flex");
     scoreRow.classList.toggle("flex-row");
     scoreRow.classList.toggle("w-25");
     scoreRow.classList.toggle("mb-5");
     scoreRow.classList.toggle("bleh");
     scoreRow.classList.toggle("rounded-pill");
     scoreRow.classList.toggle("justify-content-around");
     scoreRow.appendChild(name);
     scoreRow.appendChild(score);
     leaderboard.appendChild(scoreRow);

     elements.push(scoreRow);
     let colors = ["gold", "silver", "#cd7f32"];
    
 }
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
            scores.push({name:`${response[i].Username}`,score:`${response[i].NumberOfLikes}`})
            $("#data").html(content);
            }
            updateLeaderboardView();
    })
    

    }
   

                
  
    
})