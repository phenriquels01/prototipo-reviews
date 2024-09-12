let enviar = document.getElementById("enviar");

enviar.addEventListener('click', formulario);

function formulario() {

    let nome_do_filme = document.getElementById("input1").value;
    let ano_lançamento = document.getElementById("input2").value;
    let diretor = document.getElementById("input3").value;
    let opiniao = document.getElementById("input4").value;


    let retangulo_cinza = document.createElement("div");
    retangulo_cinza.classList.add("retangulo_cinza"); 

    let retangulo_preto = document.createElement("div");
    retangulo_preto.classList.add("retangulo_preto"); 

    let retangulo_branco = document.createElement("div");
    retangulo_branco.classList.add("retangulo_branco"); 
    retangulo_branco.style.display = "flex";
    retangulo_branco.style.alignItems = "flex-start";

    let imagem = document.createElement("img");
    imagem.src = "https://i.ibb.co/X20G47B/2503529-1.png";
    imagem.alt = "claque";

    let textoContainer = document.createElement("div");
    textoContainer.style.flex = "1";

    let nome_retangulo = document.createElement("h1");
    nome_retangulo.textContent = "Título: " + nome_do_filme;

    let ano_retangulo = document.createElement("h3");
    ano_retangulo.textContent = "Ano de Lançamento: " + ano_lançamento;

    let diretor_retangulo = document.createElement("h3");
    diretor_retangulo.textContent = "Diretor: " + diretor;

    let opiniao_retangulo = document.createElement("p");
    opiniao_retangulo.textContent = opiniao;


    textoContainer.appendChild(nome_retangulo);
    textoContainer.appendChild(ano_retangulo);
    textoContainer.appendChild(diretor_retangulo);
    textoContainer.appendChild(opiniao_retangulo);
    retangulo_branco.appendChild(imagem);
    retangulo_branco.appendChild(textoContainer);


    retangulo_preto.appendChild(retangulo_branco);
    retangulo_cinza.appendChild(retangulo_preto);


    document.body.appendChild(retangulo_cinza);
    
}
