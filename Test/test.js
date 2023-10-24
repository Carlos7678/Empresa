const assert = require('chai').assert;
const { Director, Trabajador, Ingeniero } = require('../funciones.js'); 
const chai = require('chai');
chai.should();


describe('Director', function () {
  it('Crear director con ese nombre', function () {
    const director = new Director('Carlos');
    assert.equal(director.nombre, 'Carlos');
  });

  it('Agregar informe a un director', function () {
    const director = new Director('Ana');
    director.informes.push('Informe de ventas');
    assert.include(director.informes, 'Informe de ventas');
  });

  it('Crear director sin nombre', function () {
    const director = new Director();
    assert.equal(director.nombre, '');
  });
});

describe('Trabajador', function () {
  it('Crear trabajador con ese nombre', function () {
    const trabajador = new Trabajador('Juan');
    assert.equal(trabajador.nombre, 'Juan');
  });

  it('Agregar proyecto a un trabajador', function () {
    const trabajador = new Trabajador('María');
    trabajador.proyectos.push('Proyecto');
    assert.include(trabajador.proyectos, 'Proyecto');
  });

  it('Crear trabajador sin nombre', function () {
    const trabajador = new Trabajador();
    assert.equal(trabajador.nombre, '');
  });
});

describe('Ingeniero', function () {
  it('Crear ingeniero con ese nombre y lenguaje de programación', function () {
    const ingeniero = new Ingeniero('Luis');
    ingeniero.LenguajeProgramacion = 'JavaScript';
    assert.equal(ingeniero.nombre, 'Luis');
    assert.equal(ingeniero.LenguajeProgramacion, 'JavaScript');
  });
});

// Otras pruebas que fallarán inicialmente:
describe('Director', function () {
  it('Crear director con ese nombre', function () {
    const director = new Director('Carlos');
    assert.equal(director.nombre, 'Juan'); 
  });
});

describe('Trabajador', function () {
  it('Crear trabajador con ese nombre', function () {
    const trabajador = new Trabajador('Juan');
    assert.equal(trabajador.nombre, 'Pedro'); 
  });
});

describe('Ingeniero', function () {
  it('Crear ingeniero con ese nombre y lenguaje de programación', function () {
    const ingeniero = new Ingeniero('Luis');
    ingeniero.LenguajeProgramacion = 'JavaScript';
    assert.equal(ingeniero.nombre, 'Miguel'); 
    assert.equal(ingeniero.LenguajeProgramacion, 'Python'); 
  });
});

describe("test", () => {
  it("should have a 'nombre' property that is a string", () => {
    const ingeniero = new Ingeniero('Luis');
    ingeniero.should.have.property('nombre');
    ingeniero.nombre.should.be.a("string");
  });
});

describe("test", () => {
  it("should have a 'nombre' property that is a string", () => {
    const ingeniero = new Ingeniero('Alberto');
    ingeniero.should.have.property('nombre');
    ingeniero.nombre.should.be.a("number");
  });
});