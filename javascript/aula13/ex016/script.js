function contar() {
    var txtStart = document.querySelector('input#txt-start')
    var txtEnd = document.querySelector('input#txt-end')
    var txtPass = document.querySelector('input#txt-pass')
    var resp = document.querySelector('div#res')
    for(var i = Number(txtStart.value); i <= Number(txtEnd.value); i += Number(txtPass.value)) {
        resp.innerHTML += `Contando<br> ${i} &#128073; `
    }
    //resp.innerHTML = `${txtStart.value}, ${txtEnd.value}, ${txtPass.value}`
}