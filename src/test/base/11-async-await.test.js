import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await", () => {
  test("Debe retornar el URL de la imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });
});
