
import { getGifs } from "../../src/helpers/getGifs"

// import { geto } from "../../src/helpers/get"

describe('Pruebas  en GetGifs', () => { 
    it('Debe retornar un arreglo de gifs', async() => { 
        const gifs = await getGifs("saitama");
        
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        })
        

     })
 })