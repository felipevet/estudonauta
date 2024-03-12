function contar() {
    var start = document.querySelector('input#txt-start')
    var end = document.querySelector('input#txt-end')    
    var pass = document.querySelector('input#txt-pass')
    var res = document.querySelector('div#res')

    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        window.alert(`[ERRO!!!] Verifique os campos digitados e tente novamente`)
        res.innerHTML `Impossível contar!!`
    } else {
        res.innerHTML = `contando ... <br>`
        let ini = Number(start.value)
        let fim = Number(end.value)
        let pas = Number(pass.value)

        if (pas <= 0) {
            window.alert(`Passo inválido!! Considerando PASSO 1`) 
            pas = 1
        }
        
        if (ini < fim) { //contagem crescente
            for (let c = ini; c <= fim; c += pas) {
                res.innerHTML += ` ${c} &#128073; `
            }
        } else { //contagem decrescente
            for (let c = ini; c >= fim; c -= pas) {
                res.innerHTML += ` ${c} &#128073; `
            }
        }
    }
    res.innerHTML += ` &#9873;`
}