const works = await getAllWorks();
const formulairePhoto = document.getElementById("formPhoto")

/* Retourner sur la page principale */
const logoutBtn = document.querySelector(".logout-btn")
logoutBtn.addEventListener("click", async function () {

    const connectedToken = window.localStorage.getItem('appToken')
    console.log(connectedToken)
    if(connectedToken){
        window.localStorage.removeItem("appToken")
        window.location.href = "index.html";
    }

})

/* focus sur l'input "nom" de Contact */
const contactElement = document.getElementById("contact-btn");
contactElement.addEventListener("click", async function () {
    document.getElementById('name').focus();
});

/*                  Modal                      */

/* validation de l'ajout de photo */

const validationPhoto = document.querySelector(".validation-photo");
const selectName = document.getElementById("nameModal");
const selectCategorie = document.getElementById("categorieSelect");
const imageModal = document.querySelector(".photo-after")

const ajouterPhotoBtn = document.getElementById("ajouterPhotoBtn");
const inputPhoto = document.getElementById("inputPhoto");

ajouterPhotoBtn.addEventListener("click", async function () {
    inputPhoto.click();
});
inputPhoto.addEventListener("change", async function (event) {
    const selectedFile = event.target.files[0];


    const imageUrl = URL.createObjectURL(selectedFile);

   
    if (selectedFile) {
        document.querySelector(".validation-photo").style.disabled= false;
        /* const imageURL = URL.createObjectURL(selectedFile);  */// Créer une URL locale pour le fichier
        // Créer un élément d'image pour afficher la photo sélectionnée
        const ajoutPhotoBefore = document.querySelector(".ajout-photo-before");
        ajoutPhotoBefore.style.display = "none"
        const ajoutPhotoAfter = document.querySelector(".ajout-photo-after");
        ajoutPhotoAfter.style.display = "block"
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.classList.add("uploaded-image"); // Ajouter une classe pour le style CSS si nécessaire
        // Ajouter l'élément d'image à l'endroit approprié dans votre page  
        ajoutPhotoAfter.appendChild(imageElement)
        
        let categoryId = 0;

        selectCategorie.addEventListener("change", async function () {
            const selectedCategoryId = parseInt(selectCategorie.value); // Convertir en nombre
            if (!isNaN(selectedCategoryId)) {
                categoryId = selectedCategoryId;
            } else {
                categoryId = ""; // Réinitialiser si la conversion échoue
            }
        });
        formulairePhoto.addEventListener("submit", async function (e) {
            e.preventDefault()

            if (selectName.value === "" || selectCategorie.value === "") {
                alert("Vous n'avez pas rempli tous les champs")
            } else {

                 let imageName = selectedFile.name;
                //imageName = imageName.slice(0,-4);
                const newimageUrl = `http://localhost:5678/images/${imageName}`
                console.log(selectName.value)
                console.log(selectCategorie.value)
                console.log(newimageUrl)
                let formData = new FormData(formulairePhoto)

                formData.append("image",newimageUrl)
                formData.append("title",selectName.value)
                formData.append("category",parseInt(selectCategorie.value))

                await addPhoto(formData)
            }
        })
        
        




        /* async function addPhotoList() {
            const formData = new FormData();
            formData.append('image', imageElement.src);
            formData.append('title', selectName.value);
            formData.append('category', categoryId);
          
            console.log(formData)
            const requestOptions = {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,'Content-Type': 'multipart/form-data'
              },
              body: formData
            };
          
            try {
              const response = await fetch('http://localhost:5678/api/works', requestOptions);
              if (response.ok) {
                console.log('Données envoyées avec succès.');
              } else {
                console.error('Erreur lors de l\'envoi des données.');
              }
            } catch (error) {
              console.error('Erreur lors de la requête:', error);
            }
          } */

/*           async function loginUser(userData) {
            try {
                const response = await fetch("http://localhost:5678/api/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });
        
                const data = await response.json();
        
                if (response.ok) {
                    // Authentification réussie
                    console.log("Connexion réussie :", data);
                    window.location.href = "../../index.html";
                    await init(works);
        
                    // Rediriger l'utilisateur vers une page appropriée
                } else {
                    // Authentification échouée
                    // Afficher un message d'erreur à l'utilisateur
                    alert("Erreur dans l’identifiant ou le mot de passe", data);
                    const emailInput = document.querySelector(".login-email");
                    emailInput.value = ""; // Efface l'email saisi
                    emailInput.focus(); // Place le curseur dans le champ de saisie de l'email
                    document.querySelector(".login-password").value = ""; // Efface le mot de passe saisi
                }
            } catch (error) {
                console.error("Erreur :", error);
            }
        } */







/*         async function addPhotoList() {
            
            const photo = {
                "image" :imageElement.src,
                "title" :selectName.value,
                "category" :categoryId,
            }
console.log(photo)
console.log(token)
            const formData = new FormData();
            formData.append('photo', JSON.stringify(photo));
console.log(formData)
            fetch("http://localhost:5678/api/works", {
                method: "POST",
                headers: {'Authorization': `Bearer ${token}`},
                body: formData
            })
        } */
    } else {
        /*document.querySelector(".validation-photo").style.disabled= true;*/
    }
});
const imageElement= document.querySelector(".uploaded-image")

/* Click sur modifier entraine l'ouverture de la modal */
const modalContainer = document.querySelector(".modal-container");
const modalContainerAjout = document.querySelector(".modal-container-ajout");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalTriggersAjout = document.querySelectorAll(".modal-trigger-ajout")

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

/* attention particuliere pour la row */
async function toggleModal() {
    modalContainer.classList.toggle("active");
    modalContainerAjout.classList.remove("active");
    const triPhoto = document.querySelector(".tri-photos")

    for (let i = 0; i < works.length; i++) {
        const listElements = works[i];
        const imageElement = document.createElement("img");
        imageElement.src = listElements.imageUrl;
        const nomElement = document.createElement("p");
        nomElement.innerText = "éditer";
        const deletePhoto = document.createElement("i")
        deletePhoto.classList.add("fa-regular");
        deletePhoto.classList.add("fa-trash-can");


        const elementPhoto = document.createElement("div")
        elementPhoto.style.position = "relative"

        triPhoto.appendChild(elementPhoto);
        elementPhoto.appendChild(imageElement);
        elementPhoto.appendChild(nomElement);
        elementPhoto.appendChild(deletePhoto);
    }

    const lien = document.querySelector(".supprimer-photos");
    lien.addEventListener("click", async function () {
        document.querySelector(".tri-photos").innerHTML = "";
    })
}

modalTriggersAjout.forEach(triggerAjout => triggerAjout.addEventListener("click", toggleModalAjout))

async function toggleModalAjout() {
    modalContainer.classList.remove("active");
    modalContainerAjout.classList.toggle("active")
    document.querySelector(".tri-photos").innerHTML = "";
}








