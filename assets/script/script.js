function addComment() {
        let nomPrenom = document.getElementById('inputNomFormulaire')
        let areaText = document.getElementById('textAreaFormulaire')

        let prenom = document.getElementById('prenom')
        let nom = document.getElementById('nom')
        let textarea = document.getElementById('textArea')

        let hr = document.createElement("hr")
        
        let prenomText = document.createTextNode(prenom.value)
        let nomText = document.createTextNode(nom.value)
        let espaceT = document.createTextNode(" ")
        let TxtArea = document.createTextNode(textarea.value)

        if(prenom.value == "" && (nom.value && textarea.value) !==""){
                alert("Veuillez entrer votre prénom")
        }else if(nom.value == "" && (prenom.value && textarea.value) !==""){
                alert("Veuillez entrer votre nom")
        }else if (textarea.value == "" && (prenom.value && nom.value) !=="") {
                alert("Veuillez entrer votre commentaire")
        }else if ((prenom.value && nom.value && textarea.value) == "") {
                alert("Veuillez remplire les deux autres champs")
        }else{
                nomPrenom.appendChild(hr)
                nomPrenom.appendChild(prenomText)
                nomPrenom.appendChild(espaceT)
                nomPrenom.appendChild(nomText)
                areaText.appendChild(TxtArea) 

                areaText.classList.add("areaTextStyle")
                nomPrenom.classList.add("nomPrenomStyle")
        }
 }
function removeText() {
        document.getElementById('prenom').value = "";
        document.getElementById('nom').value = "";
        document.getElementById('textArea').value = "";
}
 function Run() {
        addComment()
        removeText()
 }