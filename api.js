async function getAllWorks() {
    // Récupération des données provenant du back-end pour les travaux
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();
    return works;
};

async function loginUser(userData) {
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
            window.location.href = "connect.html";
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
}
