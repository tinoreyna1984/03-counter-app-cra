import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("pruebas de desestructuración", () => {
  test("retornaArreglo debe retornar un string y un numero", () => {
    const arr = retornaArreglo(); // ['ABC', 123]

    expect(arr).toEqual(["ABC", 123]);
  });

  test("se puede desestructurar los valores de retornaArreglo", () => {
    const [letras, numero] = retornaArreglo(); // ['ABC', 123]

    expect(letras).toEqual("ABC");
    expect(numero).toEqual(123);
  });
});
