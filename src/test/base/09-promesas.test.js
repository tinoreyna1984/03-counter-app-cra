/* eslint-disable jest/no-conditional-expect */
/* eslint-disable no-unused-vars */
import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  test("obtener un heroe de forma asincrona", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  test("obtener un error si no se encuentra el heroe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((e) => {
      expect(e).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
