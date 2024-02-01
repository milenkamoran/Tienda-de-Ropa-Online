$(document).ready(function(){

    
    
    
    $("#botonBuscar").click(function(e){
        e.preventDefault();
        var tipoPrenda = $("#campoBuscar").val().toLowerCase(); //nombrePokemon guardamos el nombre del pokemon en minuscula
        if (tipoPrenda) {
            
          buscarPrendaJSON(tipoPrenda);
        }
        
    })



    })

    function limpiar(){ //JQUERY
        $("#contacto").empty();
        $("#campoBuscar").val("");
        
        
    }


    function crearPrendaInformativa(prenda){
        
        let divcardprenda = $("<div></div>");
        divcardprenda.addClass("card");




        let imgprenda = $("<img></img>");
        console.log(prenda.Imagen)
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




        $("#contacto").append(divcardprenda);


    }




    function buscarPrendaJSON(tipoPrenda){

        $.ajax({
            type: 'GET',
            url: 'data.json',
            dataType: "json",
            async: true,
            success: function(prenda){
               
                buscarPrendaInformativa(prenda,tipoPrenda);
            }
        });
    }




    function buscarPrendaInformativa(prenda,tipoPrenda){
        limpiar();
        
        let prendasEncontrada = prenda.filter( pre => pre.Nombre == tipoPrenda);
        
        
        if(prendasEncontrada){
            for(i=0;i<prendasEncontrada.length;i++){
                crearPrendaInformativa(prendasEncontrada[i]);
            }
            
        }
        else{
            alert("No encontrado");
        }
    }