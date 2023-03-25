function tabuada() {
    let f_num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (f_num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let num = Number(f_num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}