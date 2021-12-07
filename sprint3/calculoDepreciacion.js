var precioI = parseInt (prompt('digite el precio inicial'));
var precioFi = parseInt (prompt('digite el precio final'));
var vidaUti = parseInt (prompt('digite la vida util del bien en años'));
var numeroPeriodo = parseInt (prompt('digite un periodo a calcular en años'));

const calcularDepreciacionNIIF = (precioInicial,precioFinal,vidaUtil,numeroPeriodoAconsultar)=>{
    if (vidaUtil == 0 | vidaUtil < 0){
        console.log (0);
        return 0;
    }
    else if(numeroPeriodoAconsultar > vidaUtil){
        console.log (precioFinal);
        return precioFinal;
    }
    else {
        var importeDepreciable = precioInicial - precioFinal;
        var depreciacionAcumulada = (importeDepreciable / vidaUtil)*numeroPeriodoAconsultar;
        var valorEnPeriodo = precioInicial - depreciacionAcumulada;
        console.log(valorEnPeriodo);
        return valorEnPeriodo;
    }
}

const calcularDepreciacionNIIFEnDolares = (precioInicial,precioFinal,vidaUtil,numeroPeriodoAconsultar)=>{
    if (precioInicial < 0){
        var error="ERROR";
        throw error;
    }
    else { 
        var importeDepreciable = precioInicial - precioFinal;
        var depreciacionAcumulada = (importeDepreciable / vidaUtil)*numeroPeriodoAconsultar;
        var valorEnPeriodo = precioInicial - depreciacionAcumulada;
        console.log(valorEnPeriodo);
        var conversionDolares = valorEnPeriodo / 3778;
        console.log (conversionDolares);
        return conversionDolares;
    }
}

calcularDepreciacionNIIF(precioI,precioFi,vidaUti,numeroPeriodo);
calcularDepreciacionNIIFEnDolares(precioI,precioFi,vidaUti,numeroPeriodo);

module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;