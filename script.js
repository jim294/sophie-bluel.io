const elements = await getAllWorks();

async function init(elements) {
    const gallery = document.querySelector(".gallery");
    const boutonObjet = document.querySelector("Objets_btn")
    const headerElement = document.querySelector("header")
    const divElement = document.createElement("div");
    divElement.classList.add("edition");
    headerElement.appendChild(divElement);
    const buttonElement = document.createElement("button");
    const iconElement = document.createElement("i");
    iconElement.classList.add("fa-solid", "fa-pen-to-square");
    buttonElement.appendChild(iconElement);
    buttonElement.appendChild(document.createTextNode("Mode édition"));

    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("value", "Publier les changements");
    inputElement.setAttribute("name", "changement");

    divElement.appendChild(buttonElement);
    divElement.appendChild(inputElement);

    const titleDiv = document.querySelector(".title");
    headerElement.insertBefore(divElement, titleDiv);


    for (let i = 0; i < elements.length; i++) {
        const listElements = elements[i];
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

init(elements);

 function connected () {

    const divElement = document.querySelector(".edition");
    const loginPage = document.querySelector(".login-page")
    const indexPage = document.querySelector(".index-page")
    const titleProjet = document.querySelector(".titleProjet")
    const modify = document.querySelector(".modify")
    const photoBtn = document.querySelector(".photo-btn")
    const loginBtn = document.querySelector(".login-btn")
    const logoutBtn = document.querySelector(".logout-btn")
    divElement.style.display = "flex";
    loginPage.style.display = "none";
    indexPage.style.display = "block";
    titleProjet.style.display = "none";
    modify.style.display = "flex";
    photoBtn.style.display = "inline-flex";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
  
}

function deconnected () {

 // window.location.href = "index.html";

}

 function checkconnection(){
    let connectedToken = window.localStorage.getItem("appToken")
    console.log(connectedToken);

    if(connectedToken){
       connected();
    }
}

checkconnection();



const boutonFiltreTous = document.querySelector(".Tous_btn")
const boutonFiltreObjets = document.querySelector(".Objets_btn")
const boutonFiltreAppartements = document.querySelector(".Appartements_btn")
const boutonFiltreHotels = document.querySelector(".Hôtels-restaurants_btn")

boutonFiltreTous.addEventListener("click", async function() {
    document.querySelector(".gallery").innerHTML = "";
    await init(elements)
})

boutonFiltreObjets.addEventListener("click", async function() {
    const elementsFiltres = elements.filter(function(element) {
        return element.categoryId == 1;
    })
    document.querySelector(".gallery").innerHTML = "";
    await init(elementsFiltres)
})

boutonFiltreAppartements.addEventListener("click", async function() {
    const elementsFiltres = elements.filter(function(element) {
        return element.categoryId == 2;
    })
    document.querySelector(".gallery").innerHTML = "";
    await init(elementsFiltres)
})

boutonFiltreHotels.addEventListener("click", async function() {
    const elementsFiltres = elements.filter(function(element) {
        return element.categoryId == 3;
    })
    document.querySelector(".gallery").innerHTML = "";
    await init(elementsFiltres)
})

const contactElement = document.getElementById("contact-btn");
contactElement.addEventListener("click", async ()=>{
    document.getElementById('name').focus();
});


/* Partie Log-in */

const logIn = document.querySelector(".login-btn")


logIn.addEventListener("click", async function(){
    const loginPage = document.querySelector(".login-page")
    const indexPage = document.querySelector(".index-page")
    loginPage.style.display = "flex";
    indexPage.style.display = "none";
    const emailInput = document.getElementById("email-login");
    if (emailInput) {
        emailInput.focus();
    }
})


const loginButton = document.querySelector(".submitConnect");
loginButton.addEventListener("click", login);


async function login() {
    const email = document.getElementById("email-login").value;
    const password = document.querySelector(".login-password").value;

    const loginData = {
        "email": email,
        "password": password
    };

    const connexionState = await loginUser(loginData)

    if(connexionState =="userisconnected"){
        connected()
    }else{
        alert("Erreur dans l’identifiant ou le mot de passe", data);
        const emailInput = document.querySelector(".login-email");
        emailInput.value = ""; // Efface l'email saisi
        emailInput.focus(); // Place le curseur dans le champ de saisie de l'email
        document.querySelector(".login-password").value = ""; // Efface le mot de passe saisi
    }
}


