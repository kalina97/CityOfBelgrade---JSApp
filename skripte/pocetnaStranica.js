/******* Dinamicko ispisivanje sadržaja na početnoj stranici ********/

function prikaziSadrzaj(){

var sadrzaj = [

  {
    tekst: " U Beogradu i dan danas postoje ostaci antičkog grada. Savremeni Beograd počiva na mnogim ostacima nekada moćnog Singidunuma. Prve temelje ovog grada postavili su Rimljani u 1. veku pre nove ere, a do danas skoro da ne postoje lokacije u starom delu Beograda koje ne kriju ostatke iz rimskog perioda. Singidunum je dobio ime po keltskom plemenu 'Singi' koje je nekada davno živelo na ovim prostorima.",

    src: "images/pocetna1.jpg",

    alt: "Singidunum"

  },

  {
    tekst:"Rimski bunar jedna je od najvećih turističkih atrakcija za koju su vezane mnoge legende, što ovu građevinu čini još interesantnijom. Do dna bunara i nazad vode 212 stepenika složenih u dve spirale tako da se oni koji silaze i oni koji se penju ne susreću i ne smetaju jedni drugima dok nose teške sudove sa vodom. Inače, bunar je dubok čak 62 metra, što je za 10 metara niže od najniže tačke u Beogradu.",

    src: "images/pocetna2.jpg",

    alt: "Rimski bunar"

  },

  {
    tekst:"Hram Svetog Save je najveća pravoslavna građevina na Balkanu. Ovaj hram koji se nalazi na Vračaru jedan je od najpoznatijih simbola Beograda. Ukupna visina hrama iznosi 82 metra, kupola mu je visine 70 metara i ima pozlaćeni krst od 12 metara, čime zauzima status najveće pravoslavne građevine na Balkanu. U ovom velelepnom objektu su spaljene mošti prvog srpskog arhiepiskopa, Svetog Save.",

    src: "images/pocetna3.jpg",

    alt: "Hram Svetog Save"

  }

];
    var prikazSadrzaja = "";
  		for(var i=0; i< sadrzaj.length; i++){
  			prikazSadrzaja += '<div class="blokovi">'
    	 + '<img src="'+ sadrzaj[i].src +'" class="slikaPocetna" alt="'+ sadrzaj[i].alt +'"/>'
			 + '<p>' + sadrzaj[i].tekst + '</p>'
       + '</div>';


  		}

  		document.getElementById('pocetniDeo').innerHTML= prikazSadrzaja;

}


























//////**********************************************************//////////////
