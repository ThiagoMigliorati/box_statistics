const Plot = require('nodeplotlib')

var TotalAmostras = 1000000

var caixas_1 = [9,9,9,9,8,9,9,9,9,9]
var caixas_2 = [9,9,9,9,8,8,9,9,9,9]

var results = {
    result_1: [],
    result_2: []
}

const tester = (caixa) => {
    for(cx of caixa){
        if(Math.ceil( (Math.random() * (10 - 0) + 0) ) > cx)
            return true
    }
    return false
}

const resultados = (amostras) => {
    for(var i = 0; i < amostras; i++){
        results.result_1.push( tester(caixas_1))
        results.result_2.push( tester(caixas_2))
    }
}

resultados(TotalAmostras)

var percent_1 = results.result_1.reduce((total,elem)=>(total+= elem))
var percent_2 = results.result_2.reduce((total,elem)=>(total+= elem)) 

const data = [{
    x: [1, 2], 
    y: [(percent_1/TotalAmostras).toFixed(3), (percent_2/TotalAmostras).toFixed(3)], 
    type: 'bar'
    }];

Plot.plot(data);
