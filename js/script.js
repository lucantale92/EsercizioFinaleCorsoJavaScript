/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) cambiare l'url dell'immagine di sfondo del div con id = "image". 
    al file sorgente dell'immagine di anteprima
    
    2) Cambiare il testo del div con l'id = "immagine". 
    con il testo alt dell'immagine di anteprima 
    */
let div = document.getElementById("image");
let src = previewPic.src;
let testo = previewPic.alt;

div.style.backgroundImage = "url('" + src + "')";

document.getElementById("image").innerText = testo;
	}

	function unDo(){
     /* In this function you should 
    1) Aggiornare l'url dell'immagine di sfondo del div con id = "image". 
    all'immagine originale.  Si può usare il codice css per vedere quale fosse l'URL originale
    
    2) Cambiare il testo del div con l'id = "immagine". 
    al testo originale.  È possibile utilizzare il codice html per vedere quale fosse il testo originale
    */

    let div = document.getElementById("image")

    div.style.backgroundImage = "none";

    div.innerText = "Hover over an image below to display here."
   
		
	}

    function onfocusFunzione (x){
    x.style.border = "10px solid yellow";
    }

    function onblurFunzione (x){
    x.style.border= "10px solid black"
    }

    function funzioneCaricamento () {
        
        let elementi = document.getElementsByClassName("preview");
        for (let i = 0; i < elementi.length; i++) {
            elementi[i].setAttribute("tabindex", "0");
        console.log(elementi[i])
        }
    }

