// Hemos omitido los acentos en los comentarios por compatibilidad
//Define las variables que necesites

$(document).ready(function () { 

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (data) {

    //Guarda el resultado en variables
    const events = data.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    const now = new Date(data.fechaActual);

    //Filtra los eventos en proximos y pasados comparando con la fecha dada
    const upcoming = events.filter(event => new Date(event.fecha) > now);
    const passed = events.filter(event => new Date(event.fecha) <= now);

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    upcoming.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    passed.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    //Recorre el arreglo y concatena el HTML para cada evento
    //Extrae solo dos eventos
    for (let i = 0; i < 2; i++) {

      //Modifica el DOM agregando el html generado
      $("#proximos").append(`
                              <div class="col-12 col-md-6 my-2">
                                <div class="card">
                                  <div class="card-body">
                                    <h3 class="card-title text-primary">
                                      <a href="detalle.html?id=${upcoming[i].id}">${upcoming[i].nombre}</a>
                                    </h3> 
                                    <p class="card-text text-muted">${upcoming[i].fecha}</p>
                                    <p class="card-text">${upcoming[i].descripcion}</p>
                                  </div>
                                </div>
                              </div>
                            `);
    };

    for (let i = 0; i < 2; i++) {
      $("#pasados").append(`
                          <div class="col-12 col-md-6 my-2">
                            <div class="card">
                              <div class="card-body">
                                <h3 class="card-title text-primary">
                                  <a href="detalle.html?id=${passed[i].id}">${passed[i].nombre}</a>
                                </h3>
                                <p class="card-text text-muted">${passed[i].fecha}</p>
                                <p class="card-text">${passed[i].descripcion}</p>
                              </div>
                            </div>
                          </div>
                        `);
    };
  });
});