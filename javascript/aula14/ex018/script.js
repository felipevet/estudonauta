var vet = []
function adicionar() {
    var n = document.querySelector('input#txtNum')
    var res = document.querySelector('div#resp')
    var num = Number(n.value)
    var tab = document.querySelector(`select#slc-res`)
    var conf = ''
    //res.innerHTML = ``
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
    }

    res.innerHTML = `A lista de números é: ${vet} `
    
}

/* 
let item = document.createElement('option')
                    item.text = `O valor ${num} foi adicionado.`
                    tab.append(item)

*/