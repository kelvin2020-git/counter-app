import { retornaArreglo } from "../../base/07-deses-arr"

describe('Prueba de desestructuracion', ()=> { 

test('Debe de retornar un string y un numero ', ()=> {

const [a, b] = retornaArreglo();


  expect(a).toBe('ABC');
  expect(typeof a).toBe('string');


  expect(b).toBe(123);
  expect(typeof b).toBe('number');
  
 })


 })

