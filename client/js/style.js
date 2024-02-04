function toggleFormulaire(checkbox) {
    var formulaire = document.getElementById("formulaireOuvrier");
    if (checkbox.checked) {
        formulaire.classList.remove("hidden");
    } else {
        formulaire.classList.add("hidden");
    }
}
function afficherFormulaire() {
    var formulaire = document.getElementById("formulaire");
    var gestionIncident = document.getElementById("gestionIncident");
    
    if (gestionIncident.checked) {
        formulaire.style.display = "block";
    } else {
        formulaire.style.display = "none";
    }
    
}