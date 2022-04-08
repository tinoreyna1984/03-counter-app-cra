import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    test('getSaludo debe retornar \'Hola <mi nombre>\'', () => { 
        const nombre   = 'Fernando';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
     })

     // Prueba cuando el argumento está vacío 
    test('getSaludo debe retornar \'Hola Tino\' si no paso argumento de nombre', () => { 
        const nombre   = 'Tino';
        const saludo = getSaludo();

        expect(saludo).toBe('Hola ' + nombre);
     })

     // Prueba similar a la anterior, pero sin variable de nombre 
    test('getSaludo debe funcionar como en la prueba anterior, pero sin variable de nombre', () => { 
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Tino');
     })
 });
