function carregar() {
    var hr = new Date()
    var hora = hr.getHours()
    var min = hr.getMinutes()
    var back = document.querySelector('section#corpo')
    var img = document.querySelector('#img')
    var msg = document.querySelector('div#msg')
    
    if (hora < 12 && min > 0){
        back.style.background = 'yellow'
        msg.innerHTML = `Bom dia!!! Agora são ${hora}:${min}Hs`
        img.src = `assets/manha.jpg`
    } else if (hora <19 && min > 0) {
        back.style.background = 'orange'
        msg.innerHTML = `Boa tarde!!! Agora são ${hora}:${min}Hs`
        img.src = `assets/tarde.jpg`
    } else {
        back.style.background = 'gray'
        msg.innerHTML = `Boa noite!!! Agora são ${hora}:${min}Hs`
        img.src = `assets/noite.jpg`
    }
}