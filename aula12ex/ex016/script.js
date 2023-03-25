function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (f_ano.value.length == 0 || Number(f_ano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var f_sex = document.getElementsByName('txtano')
        var idade = ano - Number(f_ano.value)
        var gênero_mas = document.getElementById('mas')
        var gênero_fem = document.getElementById('fem')
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (gênero_mas.checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 11) {
                // Criaça
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (gênero_fem.checked) {
            gênero = 'Mulher'
            
            if (idade >= 0 && idade < 11) {
                // Criaça
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }   
}