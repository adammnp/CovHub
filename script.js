const togglebutton =document.getElementById("toggle");
const nav=document.getElementById("hehexd");
const words=document.getElementsByClassName("wordchange");
togglebutton.addEventListener('click',()=>{
  nav.classList.toggle('covid-background-2');
  nav.classList.toggle('text-white');
})  

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

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
                <div class="opacity-100 name">${response[i].Username}</div>
                <div class="opacity-100">${response[i].PostContent}</div>
                <div class="opacity-100 likes">${response[i].NumberOfLikes}</div>
                <button class="btn btn-like" id="button${i}" onclick="getId(this)">
                <span class="btn-icon btn--icon-default">
                    <span class="fa fa-heart"></span>
                </span>
                <span class="btn-icon btn--icon-liked">
                    <span class="fa fa-heart"></span>
                </span>
                <span class="btn-content  btn-content--liked">
                    Liked
                </span>
                <span class="btn-content btn-content--default">
                    Like
                </span>
            </button></section>`
            $("#data").html(content);
            }

        })
        
    }
    
})
function myFunction(c) {
    x = document.getElementById(c);
    x.btn.classlist.toggle('liked');
}
function getId(c){
    myFunction(c);
}

/*
$("#data").on("click",".btn", function(e){
    let NumberOfLikes=$("likes").val();
    document.querySelectorAll(".btn").forOwn(elem => elem.addEventListener("click",
    () => {
    button = document.querySelector('.btn')
    button.classList.toggle('liked');
    }));
    $("likes").val(NumberOfLikes+1);
    const button = document.querySelector('.btn')
    button.addEventListener('click', () => {
        button.classList.toggle('liked')
        })
       
    button.remove();
})*/
