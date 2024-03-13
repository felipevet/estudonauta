function tabuada() {
    var entUsr = document.querySelector('input#txt-ent')
    var result = document.querySelector(`div#res`)
    var tab = document.querySelector(`select#seltab`)
    if (entUsr.value.length == 0) {
        window.alert(`[ERRO] Digite um número para o cálculo da tabuada.`)
    } else {
        var num = Number(entUsr.value)
        var tot = 0
        tab.innerHTML = ""
        for (var i = 0; i <= 10; i++) {
            tot = i * num
            let item = document.createElement('option')
            item.text = ` ${num} X ${i} = ${tot}`
            item.value = `tab${i}`
            tab.append(item)
        }
    }
}