function myFunction() {
  alert("Thank you for your feedback!");
  var animation = document.getElementById('lottie');
   animation.style.display = "block";
   setTimeout(function(){
    window.location.reload(1);
 }, 1500);
}
const togglebutton =document.getElementById("toggle");
const nav=document.getElementById("hehexd");
const words=document.getElementsByClassName("wordchange");
togglebutton.addEventListener('click',()=>{
  nav.classList.toggle('covid-background-2');
  nav.classList.toggle('text-white');
})  

   
$('#swag input[required]').on('input propertychange paste change', function() {

    var empty = $('#swag').find('input[required]').filter(function() {
      return this.value == '';
    });
  
    $('#register').prop('disabled', (empty.length))
  
  })