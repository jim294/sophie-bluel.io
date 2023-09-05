async function getAllWorks() {
    // Récupération des données provenant du back-end pour les travaux
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();
    return works;
};


async function loginUser(userData) {
    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    
    const data = await response.json();
    
    if (response.ok) {

        token = data.token;
        console.log(token)
        window.localStorage.setItem("appToken",token)

        return "userisconnected";
        // Rediriger l'utilisateur vers une page appropriée
    } else {
        return "badcredentials"
    }
}

async function deletePhoto(id) {
    let storedToken = window.localStorage.getItem("appToken");
     let bearer = "Bearer " + storedToken;
     let httpOptions = "";

     if (storedToken !== null) {
         const headersContent = {
             "Accept": "*/*",
             "Authorization": bearer,
         };
         const headers = new Headers(headersContent);
         httpOptions = {
             method: "DELETE",
             headers: headers,
             body: id
         };
     }
     
         const response = await fetch("http://localhost:5678/api/works/"+id, httpOptions);
         console.log(response.status);
         
         if (response.status === 200) {
             alert('image correctement retirée');
         
         } else {
             alert(response.status);
             throw new Error(response.status);
         }
}


async function addPhoto(FormData) {
    // récupérations des autres éléments constitutifs des options de la requête
     let storedToken = window.localStorage.getItem("appToken");
     let bearer = "Bearer " + storedToken;
     let httpOptions = "";

     if (storedToken !== null) {
         const headersContent = {
             "Accept": "*/*",
             "Authorization": bearer,
         };
         const headers = new Headers(headersContent);
         httpOptions = {
             method: "POST",
             headers: headers,
             body: FormData
         };
     }
     
         const response = await fetch("http://localhost:5678/api/works", httpOptions);
         console.log(response.status);
         
         if (response.status === 201) {
             alert('image correctement ajoutée');
         
         } else {
             alert(response.status);
             throw new Error(response.status);
         }
        }



