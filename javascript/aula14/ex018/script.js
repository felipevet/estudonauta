var vet = []
function adicionar() {
    var n = document.querySelector('input#txtNum')
    var res = document.querySelector('div#resp')
    res.innerHTML = ``
    let num = Number(n.value)
    var tab = document.querySelector(`select#slc-res`)
    var conf = ''
    if (n.value.length == 0) {
        window.alert(`[ERRO] Digite um valor`)
    } else {
        if (num <= 0 || num > 100) {
            window.alert(`Número inválido ou já está na lista`)
        } else {
            for(var cont in vet) {
                if(num == vet[cont]) {
                   conf = true
                } 
            }
            if(conf == true) {
                window.alert(`Número inválido ou já está na lista`)
            } else {
                vet.push(num)
                let item = document.createElement('option')
                item.text = `O valor ${num} foi adicionado.`
                tab.append(item)
            }
        }
        n.value = ""
        n.focus()
    }    
}
function finalizar() {
    var res = document.querySelector('div#resp')
    var n = document.querySelector('input#txtNum')
    let num = Number(n.value)
    var tot = 0
    var media = 0
    var menor = vet[0]
    var maior = vet[0]   
    if (vet.length == 0) {
        window.alert(`Adicione valores antes de finalizar!!`)
    } else {
        res.innerHTML = `Ao todo temos ${vet.length} números cadastrados <br>`
    for(var cont in vet) {
        if (maior< vet[cont] ) {
            maior = vet[cont]
        }
    }
    res.innerHTML+= `O maior valor informado foi ${maior}<br>`
    for(var cont in vet) {
        if (menor > vet[cont]) {
            menor = vet[cont]
        }
    }
    res.innerHTML+= `O menor valor informado foi ${menor}<br>`
    for(var cont in vet) {
        tot += vet[cont]
    }
    res.innerHTML+= `Somando todos os valores, temos ${tot}<br>`
    res.innerHTML+= `A média dos valores digitados é ${media = tot/vet.length}`
    }
}