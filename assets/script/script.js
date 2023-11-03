function addComment() {
        let nomPrenom = document.getElementById('inputNomFormulaire')
        let areaText = document.getElementById('textAreaFormulaire')

        let prenom = document.getElementById('prenom')
        let nom = document.getElementById('nom')
        let textarea = document.getElementById('textarea')

        let prenomText = document.createTextNode(prenom.value)
        let nomText = document.createTextNode(nom.value)
        let TxtArea = document.createTextNode(textarea.value)

        nomPrenom.appendChild(prenomText)
        nomPrenom.appendChild(nomText)
        areaText.appendChild(TxtArea)
        
 }