function add(x,n){
    let resultado = x + n 
    return resultado
}


function multiply(x,n){
    var res = 0
    for(let i = 0; i < x; i++){
    res = add(res, n)
    }
    return res
 }



function power(x,n){
    let res = 0
    for (let i = 0; i < n; i++) {
        res = multiply(res, x)
    }
    return res
}

let fatorial = n => {
    let res = 1
    for (let i = n; i >= 2; i--) {
        res = multiply(res, i)
    }
    return res
}

function fibonacci(x) {
    let List = [0, 1]
    for (let i = 2; i <= x; i++) {
        List.push(add(List[i - 1], List[i - 2]))
    }
    return List[x]
}