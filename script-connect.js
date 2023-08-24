const reponse = await fetch('http://localhost:5678/api/works');
const works = await reponse.json();

async function init(works) {
    
    const gallery = document.querySelector(".gallery");
    const boutonObjet = document.querySelector("Objets_btn")
    
    
    for (let i = 0; i < works.length; i++) {
        const listElements = works[i];
        const imageElement = document.createElement("img");
        imageElement.src = listElements.imageUrl;
        const nomElement= document.createElement("figcaption");
        nomElement.innerText= listElements.title;
        
        const figure = document.createElement("figure");
        gallery.appendChild(figure);
        figure.appendChild(imageElement);
        figure.appendChild(nomElement)
        

    }
}

init(works);

/*         boutonObjet.addEventListener("click", function(){
            
        }) */

const contactElement = document.getElementById("contact-btn");
contactElement.addEventListener("click", ()=>{
    document.getElementById('name').focus();
});


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('email-login').focus();
});

document.addEventListener("DOMContentLoaded", function() {
    const ajouterPhotoBtn = document.getElementById("ajouterPhotoBtn");
    ajouterPhotoBtn.addEventListener("click", function() {
        inputPhoto.click();
    });
});

inputPhoto.addEventListener("change", function(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        // Vous pouvez ajouter ici le code pour traiter le fichier sélectionné
        alert("Fichier sélectionné : " + selectedFile.name);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const categorieSelect = document.getElementById("categorieSelect");

    categorieSelect.addEventListener("change", function(event) {
        const selectedCategorie = event.target.value;
        if (selectedCategorie) {
            // Vous pouvez ajouter ici le code pour traiter la catégorie sélectionnée
            alert("Catégorie sélectionnée : " + selectedCategorie);
        }
    });
});