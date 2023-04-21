$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (data) {
    const events = data.eventos;
    const now = new Date(data.fechaActual);

    const upcoming = events.filter(event => new Date(event.fecha) > now);
    upcoming.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    for (let i = 0; i <= upcoming.length; i++) {
      $('#proximos').append(`<div class="col-12 my-2">
                                <div class="card">
                                  <div class="card-body">
                                    <h3 class="card-title text-primary">
                                      <a href="detalle.html?id=${upcoming[i].id}">${upcoming[i].nombre}</a>
                                    </h3>
                                    <p class="card-text text-muted">${upcoming[i].fecha} - ${upcoming[i].lugar}</p>
                                    <p class="card-text">${upcoming[i].descripcion}</p>
                                    <p class="card-text text-info fw-bold">Costo: $ ${upcoming[i].precio}</p>
                                    </div>
                                </div>
                              </div>
                            `);
    };
  });
});