//alert();
//animacije na stranici o istoriji
$(document).ready(function(){
   $("#history").hover(function(){
        $("#istorijaTekst img").slideDown(1000);
    },
	
	function(){
		$("#istorijaTekst img").slideUp(1000);
		
		
	});
	});

	
	//animacije na stranici o kulturi
	
   $("#culture").hover(function(){
        $("#cultureOne img").animate({
		width:'300px',
        height:'230px'		
		});
   },
   
	function(){
		$("#cultureOne img").animate({
		width:'400px',
        height:'330px'		
		});
		
	});	
	
