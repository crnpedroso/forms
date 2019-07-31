 let nome = document.querySelector("#nome")
 let email = document.querySelector("#email")
 let confirmarEmail = document.querySelector("#confirmar email")
 let sexo = document.querySelector(".sexo")
 let acessar = document.querySelector("button")
 let cadastro = document.querySelector("div")
 let texto = document.querySelector("h2")
 let section = document.querySelector("section")
 let reset = document.querySelectorAll(".reset")

if(localStorage.email){
    cadastro.style.display = "none";
    texto.innerHTML = "seja bem vindo";
}

else{
    cadastro.style.display ="block";
    section.style.display ="none";
    texto.innerHTML ="confirmação de email incorreta"
}

function cadastrar(){
    localStorage.setItem("email", email.value);
    if(localStorage.email){
        cadastro.style.display = "none";
        section.style.display="block"
        texto.innerHTML=`Seja bem vindo ${localStorage.email}`;
    }
}

function limparStorage(){
    localStorage.clear();
}

reset[0].onclick = limparStorage;
reset[1].onclick = limparStorage;
acessar.onclick = cadastrar;