const idUser = document.getElementsByName("idUser")[0];

function changeToCNPJ() {
  idUser.placeholder === "CPF"
    ? (idUser.placeholder = "CNPJ")
    : (idUser.placeholder = "CNPJ");
}

function changeToCPF() {
  idUser.placeholder === "CNPJ"
    ? (idUser.placeholder = "CPF")
    : (idUser.placeholder = "CPF");
}
