
const loopFor=() => {
    for (let i=0;i<100;i=i+10) {
        console.log(i+5)
    }

}
for (let e=0;e<10;e=e+1) {

    if (e==4) {
        nome="João"
    }
    if (e==5&&nome=="João") {
        console.log("O nome é João, pode parar.")
        break;
    }
    console.log(e)
}

const imprimirPar=(num) => {
    for (let i=num;i>=0;i--) {
        if (i%2==0) {
            console.log(i)
        }
    }
}
imprimirPar(40)