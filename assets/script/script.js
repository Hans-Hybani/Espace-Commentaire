function addComment() {
        let NewCommentaire = document.getElementById('liste_de_commentaire')

        let prenom = document.getElementById('prenom')
        let nom = document.getElementById('nom')
        let textarea = document.getElementById('textArea')

        let hr = document.createElement("hr")
        let retourLigne = document.createElement("br")
        let area = document.createElement("p")
        
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
                alert("Veuillez remplire tout les champs")
        }else{
                NewCommentaire.appendChild(hr)
                NewCommentaire.appendChild(prenomText)
                NewCommentaire.appendChild(espaceT)
                NewCommentaire.appendChild(nomText)
                NewCommentaire.appendChild(retourLigne)
                area.appendChild(TxtArea) 
                NewCommentaire.appendChild(area)
                
                NewCommentaire.classList.add("nomPrenomStyle")
                area.classList.add("areaTextStyle")
                
        }
 }
function removeText() {
        document.getElementById('prenom').value = ""
        document.getElementById('nom').value = ""
        document.getElementById('textArea').value = ""
}
 function Run() {
        addComment()
        removeText()
}

