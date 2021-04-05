let contadorPrato = 0;
let contadorBebida = 0;
let contadorSobremesa = 0;
let contadorCheckPrato = 0;
let contadorCheckBebida = 0;
let contadorCheckSobremesa = 0;
let custoPrato = 0;
let custoBebida = 0;
let custoSobremesa = 0;
let custoTotal = 0;
let pratoEscolhido = "";
let bebidaEscolhida = "";
let sobremesaEscolhida = "";
let nome = "";
let endereco = "";

function selecionarPrato(nomeClasse){
    const seletor = nomeClasse;
    const opcao = document.querySelector(seletor);
    if(opcao.classList.contains("selecionado")){  // desmarca se clicar no q já tá marcado 
       limitadorCheckarPrato();
       opcao.classList.toggle("selecionado");
       contadorPrato = 0;
       habilitarBotao()
    }else{
    limitadorCheckarPrato();
    limitadorOpcaoPrato();
    opcao.classList.toggle("selecionado");
    checkarPrato();
    contadorPrato ++;
    habilitarBotao(); // habilita ou desabilita o botao
    }
}
function checkarPrato(){
    const check = document.querySelector(".selecionado.prato ion-icon");
    check.classList.toggle("escondido");
    contadorCheckPrato ++;
}
function limitadorCheckarPrato(){
    if(contadorCheckPrato>0){
        const check = document.querySelector(".selecionado.prato ion-icon");
        check.classList.toggle("escondido");
        contadorCheckPrato = 0;
    }
}
function limitadorOpcaoPrato(){  // n deixa marcar mais de um no mesmo menu
    if(contadorPrato>0){
        const opcao = document.querySelector(".selecionado.prato");
        opcao.classList.toggle("selecionado");
        contadorPrato=0;
        habilitarBotao();
    }
}

// MENU DAS BEBIDAS

function selecionarBebida(nomeClasse){
    const seletor = nomeClasse;
    const opcao = document.querySelector(seletor);
    if(opcao.classList.contains("selecionado")){ 
        limitadorCheckarBebida();
       opcao.classList.toggle("selecionado");
       contadorBebida = 0;
       habilitarBotao();
    }else{
        limitadorCheckarBebida();
        limitadorOpcaoBebida();
        opcao.classList.toggle("selecionado");
        checkarBebida();
        contadorBebida ++;
        habilitarBotao();
    }
}
function checkarBebida(){
    const check = document.querySelector(".selecionado.bebida ion-icon");
    check.classList.toggle("escondido");
    contadorCheckBebida ++;
}
function limitadorCheckarBebida(){
    if(contadorCheckBebida>0){
        const check = document.querySelector(".selecionado.bebida ion-icon");
        check.classList.toggle("escondido");
        contadorCheckBebida = 0;
    }
}
function limitadorOpcaoBebida(){  
    if(contadorBebida>0){
        const opcao = document.querySelector(".selecionado.bebida");
        opcao.classList.toggle("selecionado");
        contadorBebida=0;
        habilitarBotao();
    }
}

// MENU DAS SOBREMESAS

function selecionarSobremesa(nomeClasse){
    const seletor = nomeClasse;
    const opcao = document.querySelector(seletor);
    if(opcao.classList.contains("selecionado")){  
       limitadorCheckarSobremesa();
       opcao.classList.toggle("selecionado");
       contadorSobremesa = 0;
       habilitarBotao();
    }else{
        limitadorCheckarSobremesa();
        limitadorOpcaoSobremesa();
        opcao.classList.toggle("selecionado");
        checkarSobremesa();
        contadorSobremesa ++;
        habilitarBotao();
    }
}
function checkarSobremesa(){
    const check = document.querySelector(".selecionado.sobremesa ion-icon");
    check.classList.toggle("escondido");
    contadorCheckSobremesa ++;
}
function limitadorCheckarSobremesa(){
    if(contadorCheckSobremesa>0){
        const check = document.querySelector(".selecionado.sobremesa ion-icon");
        check.classList.toggle("escondido");
        contadorCheckSobremesa = 0;
    }
}
function limitadorOpcaoSobremesa(){  
    if(contadorSobremesa>0){
        const opcao = document.querySelector(".selecionado.sobremesa");
        opcao.classList.toggle("selecionado");
        contadorSobremesa=0;
        habilitarBotao();
    }
}
function habilitarBotao(){
    const botao = document.querySelector(".fechar");
    const textoBotao = document.querySelector(".texto-botao");
    if(contadorBebida===1 && contadorPrato===1 && contadorSobremesa===1){
        botao.classList.add("valido"); 
        botao.classList.remove("btn-disable");
        textoBotao.innerHTML= "Fechar pedido";
    }else{
        botao.classList.remove("valido");
        botao.classList.add("btn-disable"); 
        textoBotao.innerHTML= "Selecione os 3 itens para fechar o pedido";
    }
}

function atribuirDadosPrato(nome, preco){
    const nomePrato = document.querySelector(".nome-prato");
    const precoPrato = document.querySelector(".preco-prato");
    custoPrato=preco;
    preco = preco.toFixed(2);
    preco = preco.toString();
    preco = preco.replace(".",",");
    pratoEscolhido = nome;
    nomePrato.innerHTML= nome;
    precoPrato.innerHTML= "R$ " + preco;
}
function atribuirDadosBebida(nome, preco){
    const nomeBebida = document.querySelector(".nome-bebida");
    const precoBebida = document.querySelector(".preco-bebida");
    custoBebida=preco;
    preco = preco.toFixed(2);
    preco = preco.toString();
    preco = preco.replace(".",",");
    bebidaEscolhida = nome;
    nomeBebida.innerHTML= nome;
    precoBebida.innerHTML= "R$ " + preco;
}
function atribuirDadosSobremesa(nome, preco){
    const nomeSobremesa = document.querySelector(".nome-sobremesa");
    const precoSobremesa = document.querySelector(".preco-sobremesa");
    custoSobremesa=preco;
    preco = preco.toFixed(2);
    preco = preco.toString();
    preco = preco.replace(".",",");
    sobremesaEscolhida = nome;
    nomeSobremesa.innerHTML= nome;
    precoSobremesa.innerHTML= "R$ " + preco;
}
function continuar(){
    const teste = document.querySelector(".confirmacao");
    nome = prompt('Qual seu nome?');
    endereco = prompt('Qual seu endereço?');
    teste.classList.toggle("escondido");
}
function cancelar(){
    const teste = document.querySelector(".confirmacao");
    teste.classList.toggle("escondido");
}
function calcularCusto(){
    custoTotal = custoSobremesa + custoPrato + custoBebida;
    custoTotal = custoTotal.toFixed(2);
    custoTotal = custoTotal.toString();
    custoTotal = custoTotal.replace(".",",");
    const precoTotal = document.querySelector(".preco-total");
    precoTotal.innerHTML = "R$ " + custoTotal;
}
function enviarMensagem(){
  let celular = "5521965670919";  
  let texto = "Olá, gostaria de fazer o pedido:\n- Prato: " + pratoEscolhido + "\n- Bebida: " + bebidaEscolhida + "\n- Sobremesa: " + sobremesaEscolhida + "\nTotal: R$ " + custoTotal + "\n\nNome: " + nome + "\nEndereço: " + endereco;
  texto = window.encodeURIComponent(texto);
  window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto);
}
