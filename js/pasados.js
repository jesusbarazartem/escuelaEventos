$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function (data) {
    const events = data.eventos;
    const now = new Date(data.fechaActual);

    const passed = events.filter(event => new Date(event.fecha) <= now);
    passed.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    for (let i = 0; i <= passed.length; i++) {
      $('#pasados').append(`<div class="col-12 my-2">
                                <div class="card">
                                  <div class="card-body">
                                    <h3 class="card-title text-primary">
                                      <a href="detalle.html?id=${passed[i].id}">${passed[i].nombre}</a>
                                    </h3>
                                    <p class="card-text text-muted">${passed[i].fecha} - ${passed[i].lugar}</p>
                                    <p class="card-text">${passed[i].descripcion}</p>
                                    <p class="card-text text-info fw-bold">Invitados: ${passed[i].invitados}</p>
                                    </div>
                                </div>
                              </div>
                            `);
    };
  });
});