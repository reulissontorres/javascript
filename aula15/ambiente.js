let vetor = [7, 3, 5, 2, 9]
console.log('Vetor original:')
console.log(vetor)
console.log('Vetor ordenado:')
vetor.sort()
console.log(vetor)
console.log('Push 4 e inserir 1 na posição [3]:')
vetor.push(4)
vetor[3] = 1
console.log(vetor)
console.log(`Agora o vetor tem ${vetor.length} elementos`)
pos = vetor.indexOf(0)
if (pos < 0) {
    console.log('O numero não existe no vetor!')
} else {
    console.log(`O numero ${vetor[pos]} está na posição ${pos}`)
}