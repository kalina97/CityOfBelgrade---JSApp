
//**** Dinamicko ispisivanje galerije     *******/

function prikaziSlike(){
  var slike = [

    {
      src: "images/crkva.png",

      alt: "Crkva Sv.Marka",

      naslov:"Crkva Svetog Marka"

    },

    {

      src: "images/hram.jpg",

      alt: "Hram Sv.Save",

      naslov:"Hram Svetog Save"

    },

    {

      src: "images/kalis.jpg",

      alt: "Kalemegdan",

      naslov:"Kalemegdan"

    },

    {
      src: "images/knez.jpg",

      alt: "Trg republike",

      naslov:"Trg republike"

    },

    {
      src: "images/knezmih.jpg",

      alt: "Knez Mihailova",

      naslov:"Knez Mihailova ulica"

    },

    {
      src: "images/kosutnjak.jpg",

      alt: "Košutnjak",

      naslov:"Košutnjak"
    },

    {
      src: "images/most.jpg",

      alt: "Most na Adi",

      naslov:"Most na Adi"

    },

    {
      src: "images/posta.jpg",

      alt: "Glavna pošta",

      naslov:"Glavna pošta"

    },

    {
      src: "images/skupstina.jpg",

      alt: "Skupština Srbije",

        naslov:"Skupština Srbije"

    },

    {
      src: "images/slavija.jpg",

      alt: "Trg Slavija",

        naslov:"Trg Slavija"

    },

    {
      src: "images/vuk.jpg",

      alt: "Vukov spomenik",

       naslov:"Vukov spomenik"

    },

    {
      src: "images/zemun.jpg",

      alt: "Kula Gardoš - Zemun",

        naslov:"Kula Gardoš -Zemun"
    }

  ];


  var prikazSlika = "";
		for(var i=0; i< slike.length; i++){
			prikazSlika += '<a href="'+ slike[i].src +'" data-title="'+ slike[i].naslov +'" data-lightbox="gallery">'
     + '<img src="'+ slike[i].src+'" alt="'+ slike[i].alt+'"/>'
     + '</a>';
		}

		document.getElementById('galeri').innerHTML= prikazSlika;

}
/*******************************/
