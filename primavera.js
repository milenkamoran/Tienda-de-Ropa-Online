$(document).ready(function(){

    mostrarDataJSON();
    
    $("#botonBuscar").click(function(e){
        e.preventDefault();
        var tipoPrenda = $("#campoBuscar").val().toLowerCase(); //nombrePokemon guardamos el nombre del pokemon en minuscula
        if (tipoPrenda) {
            
          buscarPrendaJSON(tipoPrenda);
        }
        
    })
    
    
    })

    function limpiar(){ //JQUERY
        $("#contenedorFlexPrendas").empty();
        $("#campoBuscar").val("");
        
        
        /*if(barras){
            barras.destroy();
        }
        if(pastel){
            pastel.destroy();
        }*/
        
    }


    
    function mostrarDataJSON(){
         $.ajax({
            type: "GET",
            url: "data.json",
            dataType: "json",
            async: true,
            success: function(prendas){
                mostrarDataHtml(prendas);
            }
         })
    }







    function mostrarDataHtml(prendas){

        let prendasPrimavera = prendas.filter(function(prenda){
            return prenda.Temporada === "Primavera";
        })
      
       

        for(let i=0;i<prendasPrimavera.length;i++){
            
            crearPrendaHtml(prendasPrimavera[i]);
            //nombre.append(prendas[i].Prenda);
            //$("#divGrande").append(nombre);
        }
        
    }
    
    
    function crearPrendaHtml(prenda){
    
        
        

        let divcardprenda = $("<div></div>");
        divcardprenda.addClass("card");




        let imgprenda = $("<img></img>");
        imgprenda.attr("src",prenda.Imagen)
        imgprenda.addClass("img");

        divcardprenda.append(imgprenda);

        let tipo = $("<p></p>")
        tipo.addClass("parrafo")
        tipo.append("<b> Prenda: </b>" + prenda.Tipo + " ");

        divcardprenda.append(tipo)


        let colores = $("<p></p>");
        colores.addClass("parrafo");
        colores.append("<b> Colores: </b>" + prenda.Colores + " ");
         
        divcardprenda.append(colores);

        let tallas = $("<p></p>");
        tallas.addClass("parrafo");
        tallas.append("<b> Tallas: </b>" + prenda.Tallas + " ");

        divcardprenda.append(tallas);

        let precio = $("<p></p>");
        precio.addClass("parrafo");
        precio.append("<b> Precio: </b>" + prenda.Precio + " ")
       
        divcardprenda.append(precio)

        $("#contenedorFlexPrendas").append(divcardprenda);
}


function buscarPrendaJSON(tipoPrenda){
    $.ajax({
        type: 'GET',
        url: 'data.json',
        dataType: "json",
        async: true,
        success: function(prenda){

            buscarPrendaInformativa(prenda,tipoPrenda)
        }


});
}


function buscarPrendaInformativa(prenda,tipoPrenda){

    limpiar();

    let prendasEncontrada = prenda.filter( pre => pre.Nombre == tipoPrenda);


    if(prendasEncontrada){
        for(i=0;i<prendasEncontrada.length;i++){
            crearPrendaHtml(prendasEncontrada[i]);
        }
    }

}

