// Login

document
  .getElementById("form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.getElementById("text").value;
    let password = document.getElementById("password").value;
    let rememberPassword = document.getElementById("remember-password");

    if (usuario === password && usuario !== "") {
      window.location.href = "index.html";
    } else if (usuario === "" && password === "") {
      document.getElementById("massage-error").innerHTML =
        "Por favor, preencha todos os campos";
    } else {
      document.getElementById("massage-error").innerHTML =
        "Usuário ou senha incorreto! Dica: adm = senha.";
      rememberPassword.classList.toggle("rememberActive");
    }
  });
