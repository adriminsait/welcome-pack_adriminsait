window.onload = function(){

    fetch("/listarProductos").then(res => {
        res.json().then(json => {
            listarProductos(json);
        })
    })
}

function listarProductos(res){

    var contenido = `
    
        <table class='table'>
            <thead>
                <tr>
                    <th>Id Producto</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Fecha Vencimiento</th>
                </tr>
            </thead>

    `

    contenido += '<tbody>'

    var data;
    for(let i = 0; i < res.length; i++){
        data=res[i];
    }

    contenido += '</tbody>'

    contenido += '</table>'

    document.getElementById("divProducto").innerHTML = contenido

}