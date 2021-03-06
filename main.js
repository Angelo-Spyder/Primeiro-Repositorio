
var tabela = document.querySelector(".tabela");
var frutasTr = document.querySelectorAll(".fruta-linha")
var tabelaConteudo = document.querySelector(".tabelaConteudo")

var erro = document.querySelector(".erro")

var fruta = document.querySelector("#frutaInput");
var botaoAdiciona = document.querySelector("#botaoAdiciona");

botaoAdiciona.addEventListener("click", function(event){

    if(fruta.value.length == 0){
        erro.textContent = "[ERRO] escreva algo"
        return
        
    }
    erro.innerHTML = ""

    var tr = criaTr();
    var td = criaTd();

    tr.appendChild(td);
    tabelaConteudo.appendChild(tr)
    tabela.appendChild(tabelaConteudo)

    fruta.value = ""
    console.log(tabela)
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

frutasTr.forEach(function(fr){
    tabelaConteudo.addEventListener("dblclick", function(event){    
        event.target.parentNode.classList.add("invisivel");
        setTimeout(function(){
            event.target.remove()
        },500);
    });
});