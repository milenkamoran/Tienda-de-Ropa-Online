var barras;
var pastel;



$(document).ready(function(){


  
    mostrarGraficosJSON();
    
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
        
        
        if(barras){
            barras.destroy();
        }
        if(pastel){
            pastel.destroy();
        }
        
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




        $("#contenedorFlexPrendas").append(divcardprenda);


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




    function mostrarGraficosJSON(){
        $.ajax({
            type: 'GET',
            url: 'data.json',
            dataType: "json",
            async: true,
            success: function(prendas){
               
                mostrarGraficos(prendas);
            }
        });
    }
    
    function mostrarGraficos(prendas){
        let prendaVestido = prendas.filter(prenda => prenda.Tipo == "vestido");
        let cantidadVestido = prendaVestido.length;
        
        let prendaPantalon = prendas.filter(prenda => prenda.Tipo == "pantalones");
        let cantidadPantalon = prendaPantalon.length;

        let prendaShort = prendas.filter(prenda => prenda.Tipo == "short");
        let cantidadShort = prendaShort.length;

        let prendaBlusa = prendas.filter(prenda => prenda.Tipo == "blusa");
        let cantidadBlusa = prendaBlusa.length;

        const etiquetas=["VESTIDO","PANTALONES","SHORT","BLUSA"];

        const tipos={
            label:"CANTIDAD DE TIPOS DE PRENDA",//leyenda
            data:[ cantidadVestido,cantidadPantalon,cantidadShort,cantidadBlusa],//datos
            backgroundColor:["#B56AD4","#7BB9EC","#F590AE","#F5EF61"],
            borderColor:'#0C0B02',
            borderWidth:3,//ancho de linea
            
        };
        
        const graficoBarras=$("#graficoBarras");
        


        if(barras){
            barras.destroy();
        }
        
        barras = new Chart(graficoBarras,{
            type:'bar',
            data:{
                labels:etiquetas,
                datasets:[tipos]
                }
          
            });
        
            const graficoPastel = $("#graficoPastel");
        
            if(pastel){
                pastel.destroy();
            }
            pastel = new Chart(graficoPastel,{
                type: 'pie',
                data:{
                    labels: etiquetas,
                    datasets:[tipos]
                }
            })
            

barras.resize(1400,900);

pastel.resize(1200,1000);




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

















    }


    