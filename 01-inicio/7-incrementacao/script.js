let numero=[1,2,3,4,5,6,7,8]
for (let indice=0;indice<=7;indice++) {
    console.log(numero[indice])
}
let x=0
while (x<20) {
    x=x+1
    if (x%2==1) {
        continue
    }
    console.log(x)
}