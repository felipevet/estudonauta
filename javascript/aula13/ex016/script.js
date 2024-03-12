function contar() {
    var txtStart = document.querySelector('input#txt-start')
    var txtEnd = document.querySelector('input#txt-end')
    var txtPass = document.querySelector('input#txt-pass')
    var resp = document.querySelector('div#res')
    var parTxt = document.querySelector('p#txt')
    
    if(txtStart.value.length == 0 || txtEnd.value.lenght == 0 || txtPass.value.lenght == 0) {
        parTxt.innerHTML = `Impossível contar!!!`
    } else if(Number(txtPass.value) == 0 ) {
        window.alert(`Passo inválido! Considerando PASSO = 1 !`)
        parTxt.innerHTML = `Contando ... `
        for(var i = Number(txtStart.value); i <= Number(txtEnd.value); i++) {
            resp.innerHTML += ` ${i} &#128073; `
        }
        resp.innerHTML += ` &#9873;`
    } else {
        parTxt.innerHTML = `Contando ... `
        for(var i = Number(txtStart.value); i <= Number(txtEnd.value); i += Number(txtPass.value)) {
            resp.innerHTML += ` ${i} &#128073; `
        }
        resp.innerHTML += ` &#9873;`
    }
    
}