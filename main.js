class Tarea {
  constructor(name, prioridad, hora) {
    this.name = name;
    this.prioridad = prioridad;
    this.hora = hora;
  }
}

class Interfaz {
  addTarea(tarea) {
    const listaTareas = document.getElementById("task-list");
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
            <strong>Tarea</strong>: ${tarea.name}
            <strong>Prioridad de tarea</strong>: ${tarea.prioridad}
            <strong>Hora a realizar</strong>: ${tarea.hora}
            <a href="#" class="btn btn-danger rounded-4" name="remove">Eliminar</a>
            </div>
        </div>
    `;
    listaTareas.appendChild(element);
  }

  reset() {
    document.getElementById("task-form").reset();
  }

  removeTarea(element) {
    if (element.name === "remove") {
      element.parentElement.parentElement.parentElement.remove();
      this.mensaje("Tarea eliminada ❌​", "danger");
    }
  }

  mensaje(mensaje, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2 fw-bold`;
    div.appendChild(document.createTextNode(mensaje));

    const contenedor = document.querySelector(".container");
    const app = document.querySelector("#app");
    contenedor.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }
}

document.getElementById("task-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;
  const prioridad = document.getElementById("prioridad").value;
  const hora = document.getElementById("hora").value;

  const tarea = new Tarea(name, prioridad, hora);

  const interfaz = new Interfaz();

  interfaz.addTarea(tarea);

  interfaz.reset();

  interfaz.mensaje("Tarea agregada ✔️", "success");

  e.preventDefault();
});

document.getElementById("task-list").addEventListener("click", function (e) {
  const interfaz = new Interfaz();
  interfaz.removeTarea(e.target);
});
