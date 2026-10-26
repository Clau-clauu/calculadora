document.getElementById("calcularnovo").style.display = "none";

function calcularMedia() {
    //Pega os valores digitados pelo usuário
    let nome = document.
    getElementById("nome").value;
    let disciplina = document.
    getElementById("disciplina").value;

    //Pega os valores digitados pelo usuário e converte para número
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);

    if (nome == "" || disciplina == "" || n1 == "" 
        || n2 == "" || n3 == "" || n4 == "") {
        alert("Preencha todos os campos!");
    }

    else{
        let soma = n1 + n2 + n3 + n4;
        let media = soma / 4;

        let situacao;
        let classeSituacao; //aquii//

        if (media >= 7){
        situacao ="Aprovado";
        classeSituacao = "aprovado";}

        else if (media >= 5){
            situacao = "Recuperação";
            classeSituacao = "recuperacao";
        }
        else{
            situacao = "Reprovado";
            classeSituacao = "reprovado";
        }

            let resultado = document.getElementById("resultado");

            resultado.innerHTML = "Aluno: " + nome + "<br><br>" +
            "Disciplina: " + disciplina + "<br><br>" +
            "Média: "+ media + "<br><br>" + "situação: <span class='" + 
            classeSituacao + "'>" + situacao + "<span>";

        document.getElementById("calcularnovo").style.display = "block";
        document.getElementById("calcular").style.display = "none";
}

}

function calcularNovo() {
    let nome = document.getElementById("nome").value = "";
    let disciplina = document.getElementById("disciplina").value = "";
    let n1 = Number(document.getElementById("nota1").value = "");
    let n2 = Number(document.getElementById("nota2").value = "");
    let n3 = Number(document.getElementById("nota3").value = "");
    let n4 = Number(document.getElementById("nota4").value = "");

    let resultado = document.getElementById("resultado")
    .textContent = "Preencha os dados acima e clique em calcular a média";

    document.getElementById("calcularnovo").style.display = "none";
        document.getElementById("calcular").style.display = "block";

}

/*function calcular() {
    
    
    document.getElementById("resultado").innerHTML = 
    "A média do aluno é: " + resultado;

    const corResultado = document.getElementById("resultado")*/