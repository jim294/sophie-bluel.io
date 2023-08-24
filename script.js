const reponse = await fetch('http://localhost:5678/api/works');
const elements = await reponse.json();

function init(elements) {
    
    const gallery = document.querySelector(".gallery");
    
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

const boutonFiltreTous = document.querySelector(".Tous_btn")
const boutonFiltreObjets = document.querySelector(".Objets_btn")
const boutonFiltreAppartements = document.querySelector(".Appartements_btn")
const boutonFiltreHotels = document.querySelector(".Hôtels-restaurants_btn")

boutonFiltreTous.addEventListener("click", function() {
    document.querySelector(".gallery").innerHTML = "";
    init(elements)
})

boutonFiltreObjets.addEventListener("click", function() {
    const elementsFiltres = elements.filter(function(element) {
        return element.categoryId == 1;
    })
    document.querySelector(".gallery").innerHTML = "";
    init(elementsFiltres)
})

boutonFiltreAppartements.addEventListener("click", function() {
    const elementsFiltres = elements.filter(function(element) {
        return element.categoryId == 2;
    })
    document.querySelector(".gallery").innerHTML = "";
    init(elementsFiltres)
})

boutonFiltreHotels.addEventListener("click", function() {
    const elementsFiltres = elements.filter(function(element) {
        return element.categoryId == 3;
    })
    document.querySelector(".gallery").innerHTML = "";
    init(elementsFiltres)
})

const contactElement = document.getElementById("contact-btn");
contactElement.addEventListener("click", ()=>{
    document.getElementById('name').focus();
});

