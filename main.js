
var tabela = document.querySelector(".tabela");

var fruta = document.querySelector("#frutaInput");
var botaoAdiciona = document.querySelector("#botaoAdiciona");

botaoAdiciona.addEventListener("click", function(){
    var tr = document.createElement("tr");
    var td = document.createElement("td");

    tr.classList.add("fruta-linha")
    td.classList.add("fruta-iten");

    td.textContent = fruta.value;
    tr.appendChild(td);

    tabela.appendChild(tr)

    fruta.value = ""
});