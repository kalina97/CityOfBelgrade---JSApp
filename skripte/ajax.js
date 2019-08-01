$(document).ready(function(){

//dinamicko ispisivanje na stranici o istoriji
  $.ajax({
  		type: 'GET',
  		url: 'istorija.json',
  		success: function(podaci){
  			var ispis = "";


  			for(var i=0;i<podaci.length;i++){
  				ispis += '<div id="istorijaTekst">'
		+ '<img src="'+ podaci[i].src +'" alt="'+ podaci[i].alt +'"/>'
   + '<p>'+ podaci[i].tekst +'</p>'
 + '</div>';
  			}

  			$('#history').html(ispis);
  		},
      error:function(greske){
        console.log(greske);
      }
  	});


//dinamicko ispisivanje na stranici o kulturi

$.ajax({
    type: 'GET',
    url: 'kultura.json',
    success: function(podaci){
      var ispis = "";


      for(var i=0; i<podaci.length; i++){
      ispis += '<div id="cultureOne">'
      		+ '<img src="'+ podaci[i].src + '" alt="'+ podaci[i].alt + '"/>'
      	    + '<p>' + podaci[i].tekst + '</p>'
             + '</div>';
      }

      $('#culture').html(ispis);
    },
    error:function(greske){
      console.log(greske);
    }
  });


//dinamicko ispisivanje na stranici o znamenitostima
  
  
  
$.ajax({
    type: 'GET',
    url: 'obelezja.json',
    success: function(podaci){
      var ispis = "";


      for(var i=0; i<podaci.length; i++){
      ispis += '<div id="markeri">'
    + '<h2>' + podaci[i].naslov + '</h2>'
    +'<p>' + podaci[i].tekst + '</p>'
    +'<a href="'+ podaci[i].src +'" data-title="'+ podaci[i].naslov +'" data-lightbox="gallery">'
	+'<img src="' + podaci[i].src +'" alt="'+ podaci[i].alt + '"/>'
     +'</a>'
	 + '</div>';   
      } 

      $('#obelezja').html(ispis);
    },
    error:function(greske){
      console.log(greske);
    }
  });












});
