function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var entNasc = document.getElementById('ent-usr')
    var res = document.getElementById('res')
    var nascimento = Number(entNasc.value)
    

    if (entNasc.value.length == 0 || nascimento > anoAtual) {
        window.alert(`[ERRO!!] Verifique os dados digitados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('rd-sexo')
        var idade = anoAtual - nascimento
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'assets/menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/adolescenteH.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'assets/menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/adolescenteM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) <strong>${genero}</strong> com <strong>${idade} anos</strong>`
        res.appendChild(img)
    }    
}