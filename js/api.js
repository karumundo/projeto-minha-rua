const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUf = document.querySelector("#UF");

const BASE_URL = "https://brasilapi.com.br/api"
inputCep.onkeyup = async (evento) => {
   //conferindo se o cep contém 8 digitos
    if (inputCep.value.length < 8){
       return;
   }
   //fazendo uma requisicao a api APIBRASIL para buscar as informações com o CEP
   const resposta = await fetch (`${BASE_URL}/cep/v1/${inputCep.value}`, {
       method: "GET",
   });
   // extraindo o json da resposta
   const conteudoResposta = await resposta.json();
   inputCep.value = conteudoResposta.cep;   
   inputRua.value = conteudoResposta.street;
   inputComplemento.value = conteudoResposta.city;
   inputBairro.value = conteudoResposta.neighborhood;
   inputUf.value = conteudoResposta.state;
   console.log(conteudoResposta);
   alert ("Cep completo: " + inputCep.value);
}