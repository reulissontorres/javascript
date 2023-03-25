var agora = new Date()
var hora = agora.getHours
if (hora < 5 || hora > 18) {
    console.log('Boa Noite!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else {
    console.log('Boa Tarde!')
}