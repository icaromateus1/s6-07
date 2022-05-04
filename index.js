function add(x,n){
    let resultado = x + n 
    return resultado
}


function multiply(x,n){
    let resultado = x * n 
    return resultado
}

function power(x,n){
    let resultado = x ** n 
    return resultado
}

let fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}
