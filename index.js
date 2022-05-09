function add(x,n){
    let resultado = x + n 
    return resultado
}


function multiply(n){
    var res = 1
    for(var i = 0; i < n.length; i++) res *= n[i];
    return res;
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
