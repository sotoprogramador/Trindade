// Alert e Prompt
var nome = prompt("Digite o seu nome por favor :")
alert("SEJA BEM VINDO/a: " + nome)

document.getElementById("search-button").addEventListener
("click", function() 
{let searchTerm = document.getElementById("search-input").value;

    if (searchTerm.trim() !== "") {
        alert("voce  pesquisou por:" + searchTerm);
        //Aqui voce pode adicionar logica para buscar resultados
    }  else {
        alert("Digite  algo para pesquisar!");
    }
});