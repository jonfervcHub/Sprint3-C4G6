alert("ok Script");

//const HTMLResponse = document.querySelector("#app");
//const API_URL = "https://misiontic2022upb.vercel.app/api/logistics";


async function mostrarProductos() {


    let productosConDepreciación = [];

    let response = await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
    let productosAPI = await response.json()
        .then(producto => {
            producto.forEach(element => {

                const valoresDepreciados = calcularDepreciacionNIIF(
                    element.precioInicial,
                    element.precioFinal,
                    element.vidaUtil,
                    element.periodo_consultado
                );
                productosConDepreciación.push({
                    "precioDepreciado": valoresDepreciados,
                    "precioInicial": element.precioInicial,
                    "precioFinal": element.precioFinal,
                    "vidaUtil": element.vidaUtil,
                    "periodo_consultado": element.periodo_consultado
                })
            });
        });
    //console.log(productosConDepreciación);
    return (productosConDepreciación);

    /*
    let productosConDepreciación = [];
    let precioDepreciado = [...productosAPI];
    let valoresDepreciados = new Object();
    let unionFinal = [];
    precioDepreciado.map((producto) =>{
        //console.log(producto);
           
        valoresDepreciados.precioDepreciado = calcularDepreciacionNIIF(
            producto.precioInicial,
            producto.precioFinal,
            producto.vidaUtil,
            producto.periodo_consultado
            );
        unionFinal = Object.assign(producto,valoresDepreciados);
        //console.log("Objeto Unido");
        //console.log(unionFinal);
        productosConDepreciación.push(unionFinal);
    });
    */

    //console.log("Array Final");

    //return console.log(productosConDepreciación);
    //console.log(productosAPI);
}

async function mostrarProductosPrecioDolares() {
    let productosConDepreciacion = [];
    let response = await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
    let productosAPI = await response.json();

    for (var i = 0; i < productosAPI.length;i++) {
        const valoresDepreciados = calcularDepreciacionNIIF(
            productosAPI[i].precioInicial,
            productosAPI[i].precioFinal,
            productosAPI[i].vidaUtil,
            productosAPI[i].periodo_consultado
        );
        var respuestaAPIDolares = await fetch("https://misiontic2022upb.vercel.app/api/logistics/to-dolar-converter/" + valoresDepreciados)
        var depreciacionEnDolares = await respuestaAPIDolares.json()
        productosConDepreciacion.push({
            "precioDepreciadoEnDolares": depreciacionEnDolares,
            "precioInicial": productosAPI[i].precioInicial,
            "precioFinal": productosAPI[i].precioFinal,
            "vidaUtil": productosAPI[i].vidaUtil,
            "periodo_consultado": productosAPI[i].periodo_consultado
        })
    }
    return (productosConDepreciacion);
}
/*
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
*/
//calcularDepreciacionNIIF(precioI,precioFi,vidaUti,numeroPeriodo);

//mostrarProductos().then(console.log);
//mostrarProductosPrecioDolares().then(console.log);

module.exports.mostrarProductos = mostrarProductos;
module.exports.mostrarProductosPrecioDolares = mostrarProductosPrecioDolares;