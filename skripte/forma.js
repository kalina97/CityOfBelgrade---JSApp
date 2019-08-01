
window.onload = function()
{
	document.querySelector(".potvrdiFormu").addEventListener("click", provera);
}
function provera()
{
	var imePrezime,reImePrezime,brojMobilnog, reBrojMobilnog, email, reEmail,poruka;

	imePrezime = document.getElementById("imePrezime");
	brojMobilnog = document.getElementById("phone");
	email = document.getElementById("mail");
	reImePrezime = /^[A-ZČĆŠŽ][a-zčćšž]{2,9}(\s[A-ZČĆŠŽ][a-zčćšž]{2,14})+$/;
	reBrojMobilnog = /^\+3816[01234569]\/[0-9]{6,7}$/;
	reEmail = /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
	poruka = document.getElementById("poruka");

	if(!reImePrezime.test(imePrezime.value))
	{
		imePrezime.style.border= "2px solid red";
		imePrezime.style.borderRadius = "5px";
		document.getElementById('eror').innerHTML = "Unesite pravilno ime i prezime!";
	}
	else
	{
	  imePrezime.style.border = "2px solid #00ff00";
		imePrezime.style.borderRadius = "5px";
   document.getElementById('eror').innerHTML = "";
	}


	if(!reBrojMobilnog.test(brojMobilnog.value))
	{
	brojMobilnog.style.border = "2px solid red";
	brojMobilnog.style.borderRadius = "5px";
	document.getElementById('erorFon').innerHTML = "Unesite pravilno broj telefona!";
	}
	else
	{
		brojMobilnog.style.border = "2px solid #00ff00";
		brojMobilnog.style.borderRadius = "5px";
		document.getElementById('erorFon').innerHTML = "";
	}

	if(!reEmail.test(email.value))
	{
		email.style.border = "2px solid red";
		email.style.borderRadius = "5px";
		document.getElementById('erorMail').innerHTML = "Unesite pravilno email adresu!";
	}
	else
	{
		email.style.border = "2px solid #00ff00";
		email.style.borderRadius = "5px";
		document.getElementById('erorMail').innerHTML = "";
	}

	if(poruka.value == ""){
		poruka.style.border = "2 px solid red";
		poruka.style.borderRadius = "5px";
		document.getElementById('erorPoruka').innerHTML = "Morate uneti neku poruku!";
	}
	else{
		poruka.style.border = "2px solid #00ff00";
		poruka.style.borderRadius = "5px";
		document.getElementById('erorPoruka').innerHTML = "";
	}


}
