import { getImagen } from "../../base/11-async-await"

describe('pruebas con async y await', () => { 

test('debe de retornar el url ', async () => { 


const url = await getImagen();
//console.log(url);
expect(url.includes('https://')).toBe(true);
    
 })


})