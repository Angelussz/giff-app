// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import {config} from 'dotenv'
config({
    path: '.env'
})

// jest.mock('./src/helpers/get',()=>({
//     getEnviroments: () => ({...process.env})
// }))