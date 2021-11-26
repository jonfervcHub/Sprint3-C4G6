//alert("ok Script");

//const HTMLResponse = document.querySelector("#app");
//const API_URL = "https://misiontic2022upb.vercel.app/api/logistics";


async function mostrarProductos(){
    
        let response = await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
        let productosAPI = await response.json();
        
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
        //console.log("Array Final");
        
        //return console.log(productosConDepreciación);
        //console.log(productosAPI);
        return console.log(productosConDepreciación);
}

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

//calcularDepreciacionNIIF(precioI,precioFi,vidaUti,numeroPeriodo);

mostrarProductos();

//Module.exports.mostrarProductos = mostrarProductos;
/*
let productosConDepreciacion = [...productosAPI];
        let valoresDepreciados = new Object();
        let conjuntoVD = [];
        let unionFinal = [];
        productosAPI.map((producto) =>{
            console.log("Calculando Depreciacion para:   " + producto.nombre);
                
            valoresDepreciados.valorDDD = calcularDepreciacionNIIF(
                producto.precioInicial,
                producto.precioFinal,
                producto.vidaUtil,
                producto.periodo_consultado
                );
            conjuntoVD.push(valoresDepreciados);
        });
        unionFinal = Object.assign(productosConDepreciacion,conjuntoVD);
        console.log("Array Original");
        alert(productosConDepreciacion);
        console.log(productosConDepreciacion);
        console.log("Array Depreciacion");
        alert(conjuntoVD);
        console.log(conjuntoVD);
        console.log("Array Resultado");
        alert(unionFinal);
        console.log(unionFinal);
*/