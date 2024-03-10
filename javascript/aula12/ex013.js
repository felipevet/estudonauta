var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) {
    case 0: 
        console.log(`Hoje é Domingo`)
        break
    case 1:
        console.log(`Hoje é Segunda`)
        break
    case 2: 
        console.log(`Hoje é Terça`)
        break
    case 3: 
        console.log(`Hoje é Quarta`)
        break
    case 4:
        console.log(`Hoje é Quinta`)
        break
    case 5:
        console.log(`Hoje é Sexta`)
        break
    case 6:
        console.log(`Hoje é Sabado`)
        break
    default:
        console.log(`[ERRO] dia inválido`)
        break
}