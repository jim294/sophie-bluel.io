const elements = await getAllWorks();

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

const ajouterPhotoBtn = document.getElementById("ajouterPhotoBtn");
const inputPhoto = document.getElementById("inputPhoto");

ajouterPhotoBtn.addEventListener("click", function() {
    inputPhoto.click();
});

inputPhoto.addEventListener("change", function(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const imageURL = URL.createObjectURL(selectedFile); // Créer une URL locale pour le fichier
        // Créer un élément d'image pour afficher la photo sélectionnée
        const imageElement = document.createElement("img");
        imageElement.src = imageURL;
        imageElement.classList.add("uploaded-image"); // Ajouter une classe pour le style CSS si nécessaire
        
        // Ajouter l'élément d'image à l'endroit approprié dans votre page
        const ajoutPhotoDiv = document.querySelector(".ajout-photo");
        ajoutPhotoDiv.appendChild(imageElement);
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

const modalContainer = document.querySelector(".modal-container");
const modalContainerAjout = document.querySelector(".modal-container-ajout");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalTriggersAjout = document.querySelectorAll(".modal-trigger-ajout")

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal() {
    modalContainer.classList.toggle("active")
}

modalTriggersAjout.forEach(triggerAjout => triggerAjout.addEventListener("click", toggleModalAjout))

async function toggleModalAjout() {
    modalContainer.classList.remove("active");
    modalContainerAjout.classList.toggle("active")
}