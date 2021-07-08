


let inputHomem = document.getElementById("Homem");

let inputMulheres = document.getElementById("Mulher");

let inputCrianca = document.getElementById("Crianca");

let inputTempo = document.getElementById("Duracao");

let inputAcompanhamento = document.getElementById("Extra");

let resultado = document.getElementById("resultado"); 



function calcular(){
    let homem = inputHomem.value

    let mulher = inputMulheres.value

    let crianca = inputCrianca.value

    let acompanhamento = inputAcompanhamento.value

    let tempo = inputTempo.value
    
    let totalPessoas = parseFloat(homem) + parseFloat(mulher) + (parseFloat(crianca) / 2)

    let totalPessoasC =  parseFloat(homem) + parseFloat(mulher);
    
    let resultadoCarne = totalPessoas * calcularTempo(tempo);

    let resultadoCerveja = totalPessoasC * calcularTempoCerveja(tempo)

    let paragrafo2 = document.getElementById("Cerveja")

    let paragrafo = document.getElementById("Carne")

    let resultadoBebida = totalPessoas * calcularTempo(tempo);



    resultado.innerHTML = `<p>${resultadoCarne/1000}Kg de carne </p>`

    resultado.innerHTML += `<p>${Math.ceil(resultadoCerveja/355)} Latas de Cerveja </p>`

    resultado.innerHTML += `<p>${Math.ceil(resultadoBebida/2000)} Garrafas de bebidas</p>`



function calcularTempo(tempo){
    
   if (tempo >= 6 ){
    let qtdCarne =  650;
    return qtdCarne
    console.log(qtdCarne)
   }else{
       let qtdCarne = 400
       return qtdCarne;
       console.log(qtdCarne)

   }


}
function calcularTempoCerveja(tempo){
    if (tempo >= 6 ){
    
     return  2000
     
    }else{
        return 1200
       
       
 
    }
 }
 function calcularTempoBebida(tempo){
    if (tempo >= 6 ){
    
     return  1500
     
    }else{
        return 1000
       
       
 
    }
 }

}




