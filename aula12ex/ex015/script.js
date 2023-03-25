function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if (minuto >= 10) {
        msg.innerHTML = `Agora são ${hora}:${minuto}`
    } else {
        msg.innerHTML = `Agora são ${hora}:0${minuto}`
    }
    
    if (hora > 5 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
