// Homens: 140g de linguiça - 70g de pão de alho - 70g de queijo coalho - 350g de Carne Bovina - 70g de frango
// Mulheres: 100g de linguiça - 50g de pão de alho - 50g de queijo coalho - 250g de Carne Bovina - 50g de frango

// Crianças de 4 a 10 anos contam como 1/2 pessoa
// Crianças abaixo de 4 anos não contam
// Menores estão no meio entre homens e mulheres em qtde
// Duração maior que 5 horas, aumentar 50%
// 1.7 litro de Cerveja por Homem - 1.4 litro por Mulher
// 2 litros de Refrigerante por Menor

let inputHomens = document.getElementById("homens")
let inputMulheres = document.getElementById("mulheres")
let inputMenores = document.getElementById("menores")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function linguicaPH(duracao){
    let linguica = 140
    if(duracao >= 5){
        linguica = linguica * 1.5
        return linguica
    }else{
        return linguica
    }
}

function linguicaPM(duracao){
    let linguica = 100
    if(duracao >= 5){
        linguica = linguica * 1.5
        return linguica
    }else{
        return linguica
    }
}

function linguicaPMenor(duracao){
    let linguica = 120
    if(duracao >= 5){
        linguica = linguica * 1.5
        return linguica
    }else{
        return linguica
    }
}

function paoDeAlhoPH(duracao){
    let paoDeAlho = 70
    if(duracao >= 5){
        paoDeAlho = paoDeAlho * 1.5
        return paoDeAlho
    }else{
        return paoDeAlho
    }
}

function paoDeAlhoPM(duracao){
    let paoDeAlho = 50
    if(duracao >= 5){
        paoDeAlho = paoDeAlho * 1.5
        return paoDeAlho
    }else{
        return paoDeAlho
    }
}

function paoDeAlhoPMenor(duracao){
    let paoDeAlho = 60
    if(duracao >= 5){
        paoDeAlho = paoDeAlho * 1.5
        return paoDeAlho
    }else{
        return paoDeAlho
    }
}

function queijoPH(duracao){
    let queijo = 70
    if(duracao >= 5){
        queijo = queijo * 1.5
        return queijo
    }else{
        return queijo
    }
}

function queijoPM(duracao){
    let queijo = 50
    if(duracao >= 5){
        queijo = queijo * 1.5
        return queijo
    }else{
        return queijo
    }
}

function queijoPMenor(duracao){
    let queijo = 60
    if(duracao >= 5){
        queijo = queijo * 1.5
        return queijo
    }else{
        return queijo
    }
}

function carnePH(duracao){
    let carne = 350
    if(duracao >= 5){
        carne = carne * 1.5
        return carne
    }else{
        return carne
    }
}

function carnePM(duracao){
    let carne = 250
    if(duracao >= 5){
        carne = carne * 1.5
        return carne
    }else{
        return carne
    }
}

function carnePMenor(duracao){
    let carne = 300
    if(duracao >= 5){
        carne = carne * 1.5
        return carne
    }else{
        return carne
    }
}

function frangoPH(duracao){
    let frango = 70
    if(duracao >= 5){
        frango = frango * 1.5
        return frango
    }else{
        return frango
    }
}

function frangoPM(duracao){
    let frango = 50
    if(duracao >= 5){
        frango = frango * 1.5
        return frango
    }else{
        return frango
    }
}

function frangoPMenor(duracao){
    let frango = 60
    if(duracao >= 5){
        frango = frango * 1.5
        return frango
    }else{
        return frango
    }
}

function cervejaPH(duracao){
    let cerveja = 1.7
    if(duracao >= 5){
        cerveja = cerveja * 1.5
        return cerveja
    }else{
        return cerveja
    }
}

function cervejaPM(duracao){
    let cerveja = 1.4
    if(duracao >= 5){
        cerveja = cerveja * 1.5
        return cerveja
    }else{
        return cerveja
    }
}

function refri(duracao){
    let refri = 2
    if(duracao >= 5){
        refri = refri * 1.5
        return refri
    }else{
        return refri
    }
}

function calcular(){
    let homens = inputHomens.value
    let mulheres = inputMulheres.value
    let menores = inputMenores.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    
    let qtdeLinguica = (linguicaPH(duracao) * homens + linguicaPM(duracao) * mulheres + linguicaPMenor(duracao) * menores + (linguicaPMenor(duracao) / 2) * criancas) / 1000

    let qtdePaoDeAlho = (paoDeAlhoPH(duracao) * homens + paoDeAlhoPM(duracao) * mulheres + paoDeAlhoPMenor(duracao) * menores + (paoDeAlhoPMenor(duracao) / 2) * criancas) / 1000

    let qtdeQueijo = (queijoPH(duracao) * homens + queijoPM(duracao) * mulheres + queijoPMenor(duracao) * menores + (queijoPMenor(duracao) / 2) * criancas) / 1000

    let qtdeCarne = (carnePH(duracao) * homens + carnePM(duracao) * mulheres + carnePMenor(duracao) * menores + (carnePMenor(duracao) / 2) * criancas) / 1000

    let qtdeFrango = (frangoPH(duracao) * homens + frangoPM(duracao) * mulheres + frangoPMenor(duracao) * menores + (frangoPMenor(duracao) / 2) * criancas) / 1000

    let qtdeCerveja = ((cervejaPH(duracao) * homens + cervejaPM(duracao) * mulheres)* 1000) / 350

    let qtdeRefri = (refri(duracao) * menores + (refri(duracao) / 2) * criancas) / 2

    resultado.innerHTML += `<p>${qtdeLinguica}kg de Linguiça</p>`
    resultado.innerHTML += `<p>${qtdePaoDeAlho}kg de Pão de Alho</p>`
    resultado.innerHTML += `<p>${qtdeQueijo}kg de Queijo Coalho</p>`
    resultado.innerHTML += `<p>${qtdeCarne}kg de Carne Bovina</p>`
    resultado.innerHTML += `<p>${qtdeFrango}kg de Frango</p>`
    resultado.innerHTML += `<p>${qtdeCerveja.toFixed(0)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdeRefri.toFixed(0)} garrafas de Refrigerante</p>`
}