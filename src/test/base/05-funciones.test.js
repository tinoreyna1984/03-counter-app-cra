import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(userTest).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const usuarioActivo = {
        uid: 'ABC567',
        username: "Tino"
    };
    const user = getUsuarioActivo('Tino');

    expect(usuarioActivo).toEqual(user);
  });
  
});
