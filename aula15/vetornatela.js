var num = [9, 1, 6, 3, 4]

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`Na posição ${pos} temos o ${num[pos]}`)
}
*/

for (pos in num) {
    console.log(`Na posição ${pos} temos o ${num[pos]}`)
}