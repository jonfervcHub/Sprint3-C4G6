alert("ok Script");

const HTMLResponse = document.querySelector("#app");
const API_URL = "https://misiontic2022upb.vercel.app/api/logistics";

async function mostrarProductos(){
    try{
        const response = await fetch(`${API_URL}/products`
            );
        const usuarios = await response.json();
        console.log(response);
        const tpl = usuarios.map((user) => `
        <li>
        ID: ${user.id},
        Producto: ${user.nombre},
        Precio Inicial: ${user.precioInicial},
        Precio Final: ${user.precioFinal},
        Vida Util: ${user.vidaUtil},
        Periodo Consultado: ${user.periodo_consultado},
        </li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;          
        return usuarios;
    }catch(err){
        console.log(err);
    }

}

mostrarProductos();