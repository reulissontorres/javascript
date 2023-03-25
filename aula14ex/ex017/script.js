function contar() {
    let f_ini = document.querySelector('input#txti')
    let f_fim = document.querySelector('input#txtf')
    let f_pas = document.querySelector('input#txtp')
    let res = document.getElementById('res')
    

    if (f_ini.value.lenght == 0 || f_fim.value.lenght == 0 || f_pas.value.lenght == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert([ERRO] Insira os dados corretamente)
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(f_ini.value)
        let f = Number(f_fim.value)
        let p = Number(f_pas.value)

        if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c+=p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem reressiva
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}