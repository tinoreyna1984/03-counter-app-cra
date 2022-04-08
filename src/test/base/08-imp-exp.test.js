/* eslint-disable no-unused-vars */
import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe("pruebas en funciones de heroes", () => {
  test("debe de retornar un heroe por id", () => {

    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find(item => id === item.id );
    
    expect(heroe).toEqual(heroeData);
  });
  test("debe de retornar undefined si el heroe no existe", () => {

    const id = 20;
    const heroe = getHeroeById(id);
    
    expect(heroe).toEqual(undefined);
  });
  test("debe de retornar un arreglo con los heroes de DC Comics", () => {

    const owner = 'DC';
    const heroesDc = getHeroesByOwner(owner);
    const heroesData = heroes.filter( (heroe) => heroe.owner === owner );
    
    expect(heroesDc).toEqual(heroesData);
  });
  test("al obtener un arreglo con heroes de Marvel, verificar que la longitud del mismo sea igual a 2", () => {

    const owner = 'Marvel';
    const heroesMarvel = getHeroesByOwner(owner);
    const heroesData = heroes.filter( (heroe) => heroe.owner === owner );
    
    expect(heroesMarvel.length).toBe(heroesData.length);
  });
});
