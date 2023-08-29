async function cursor() {
    document.addEventListener("DOMContentLoaded", function () {
        const emailInput = document.getElementById("email-login");
        if (emailInput) {
            emailInput.focus();
        }
    })
};

await cursor()

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("input[type='submit']");
    loginButton.addEventListener("click", loginUser);
});

async function login() {
    const email = document.getElementById("email-login").value;
    const password = document.querySelector(".login-password").value;

    const loginData = {
        "email": "email",
        "password": "password"
    };
    await loginUser(loginData)
    await cursor()
}

