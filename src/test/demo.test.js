describe("Pruebas en demo.test.js", () => {
  test("los strings deben ser iguales", () => {
    // 1. inicialización
    const mensaje1 = "Hola mundo";

    // 2. estímulo
    const mensaje2 = `Hola mundo`;

    // 3. observar el comportamiento
    expect(mensaje1).toBe(mensaje2); // ===
  });
});
