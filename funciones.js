// funciones.js

function Empleado(nombre) {
  this.nombre = nombre || "";
  this.departamento = "Informatica";
}

function Director(nombre) {
  Empleado.call(this, nombre);
  this.informes = [];
}

Director.prototype = new Empleado();
Director.prototype.constructor = Director;

function Trabajador(nombre) {
  Empleado.call(this, nombre);
  this.proyectos = [];
}

Trabajador.prototype = new Empleado();
Trabajador.prototype.constructor = Trabajador;

function Ingeniero(nombre) {
  Trabajador.call(this, nombre);
  this.LenguajeProgramacion = "";
  this.departamento = "Ingeniería";
}

Ingeniero.prototype = new Trabajador();
Ingeniero.prototype.constructor = Ingeniero;


module.exports = {
  Director,
  Trabajador,
  Ingeniero,
};
