//Hemos omitido los acentos en los comentarios por compatibilidad
//Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (data) {

    //Guarda el resultado en una variable
    const events = data.eventos;

    //Crea un string que contenga el HTML que describe el detalle del evento
    var id = location.search.match(/id=(\d)*/)[1]
    
    //Busca el elemento en el arreglo
    const event = events.find(function (element) {
      return element.id == id;
    });

    //Modifica el DOM agregando el html generado dentro del div con id=evento
    $('#evento').append(`<div class="col-12 my-2">
                            <div class="card">
                              <div class="card-body">
                                <h3 class="card-title">${event.nombre}</h3>
                                <p class="card-text text-muted">${event.fecha} - ${event.lugar}</p>
                                <p class="card-text">${event.descripcion}</p>
                                <p class="card-text text-info">Costo: $${event.precio}</p>
                                <p class="card-text text-warning">Invitados: ${event.invitados}</p>
                                </div>
                            </div>
                          </div>
                        `);
  });
});
