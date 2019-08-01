//funkcije za slajder
var slika=2;

//funkcije za klikove na strelice
$(document).ready(function funkcija() {
    $('#banLevo').click(function (){
         slika--;
         if(slika<0)slika=4;
         var link="URL(images/slika"+slika+".jpg)";

          $('#slider').css({'background-image':link});
          });

     $('#banDesno').click(function (){
         slika++;
         if(slika>4)slika=0;
         var link="URL(images/slika"+slika+".jpg)";
         $('#slider').css({'background-image':link});


    });

});

    //promena linkova slika za tajmer
    function tajmSlajder(){
        slika++;
        if(slika==5)slika=1;
        var link="URL(images/slika"+slika+".jpg)";

              $('#slider').css({'background-image':link});


    }
    //promena slika na svake 4 sekunde
    window.setInterval(tajmSlajder,4000);





//funkcija za back to top dugme
$("#dugme").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  });




/*****funkcije za dropdown meni*****/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
    $("#myDropdown").mouseleave(function(){
        document.getElementById("myDropdown").classList.remove("show");
    });
});
/************/




/****** animacije na autorskoj strani *************/

$(document).ready(function(){
  $("#sredina").click(function(){
      $("#moje").slideToggle(2500);
      $("#sredina img").slideToggle(2500);
  });
});


/******************   **************/





/********* animacije na pocetnoj stranici ************/
  $("#pocetniDeo").hover(function(){
$(".slikaPocetna").animate({
 width:'150px'
},1000);

$(".slikaPocetna").animate({
 width:'360px'
},500);

  });


$("#sadrzaji").click(function(){
 $(".cinjenice").animate({
  width:'700px'
 });

 $(".cinjenice").animate({
  width:'800px'
 });

});
