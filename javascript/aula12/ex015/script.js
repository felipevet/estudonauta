function verificar() {
    var anoNasc = document.querySelector('input#txtidade')
    var data = new Date()
    var ano = data.getFullYear()
    var resp = document.getElementById('res')

    if(anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
        window.alert(`Verifique os dados digitados!`)
    } else {
        var fsex = getElementsByName('sexo')
        var idade = ano - Number(anoNasc.value)
        resp.innerHTML = `Idade calculada: ${idade}`
    }


}