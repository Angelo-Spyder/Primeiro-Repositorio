
var tabela = document.querySelector(".tabela");

var fruta = document.querySelector("#frutaInput");
var botaoAdiciona = document.querySelector("#botaoAdiciona");

botaoAdiciona.addEventListener("click", function(event){

    if(fruta.value.length == 0){

        return
        
    }

    var tr = criaTr();
    var td = criaTd();

    tr.appendChild(td);
    tabela.appendChild(tr)

    fruta.value = ""
});

function criaTr(){
    var tr = document.createElement("tr");
    tr.classList.add("fruta-linha");

    return tr;
}

function criaTd(){
    var td = document.createElement("td");
    td.classList.add("fruta-iten");
    td.textContent = fruta.value;

    return td;
}