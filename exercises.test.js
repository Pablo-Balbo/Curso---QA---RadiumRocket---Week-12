import * as exercises from "./exercises";

//1

test('Echo Hello World!', () => {
  expect(exercises.texto('Hello World!')).toEqual('Hello World!');
});

//2

test('adds 1 + 2 to equal 3', () => {
  expect(exercises.suma(1, 2)).toBe(3);
});

//3

test('sustract 8 - 2 to equal 6', () => {
  expect(exercises.resta(8, 2)).toBe(6);
});

//4

test('multiply 5 * 3 to equal 15', () => {
  expect(exercises.multiplicacion(5, 3)).toBe(15);
});

//5

describe('Multiplication table', () => {
    test('divide 100 / 4 to equal 25', () => {
      expect(exercises.division(100, 4)).toBe(25);
    });
    test('divide 100 / 0 to equal 25', () => {
      expect(exercises.division(100, 0)).toBe('No se puede dividir por 0');
    });
});

//6

describe('Dinamic Multiplication table', () => {
    test('Multiplication table with defined multiplicator', () => {
        expect(exercises.tablaMultiplicar(5, 4)).toEqual([0, 5, 10, 15, 20]);
    });
    test('Multiplication table without defined multiplicator (default = 10)', () => {
        expect(exercises.tablaMultiplicar(5, )).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });
});

//7

test('Two to the eighth power equals 256', () => {
  expect(exercises.potencia(2, 8)).toBe(256);
});

//8

test('Nested function', () => {
    expect(exercises.anidada(2, 4)).toBe(20);
});

//9

test('Add zeros to the left', () => {
    expect(exercises.cerosIzq(126, 10)).toBe('0000000126');
});