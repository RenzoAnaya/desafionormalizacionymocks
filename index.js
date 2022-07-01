import express from 'express'
import {faker} from '@faker-js/faker/locale/es'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const app = express();

app.use(express.json())


app.use(express.static(__dirname + '/public'));
app.set('views',path.join(__dirname, 'views' ));
app.set('view engine', 'ejs');
let array = []
let mensajes = []
app.get ('/', (req,res)=>{
   
    for (let i=0; i<4; i++){
        const products = {
            productName: faker.vehicle.vehicle(),
            stock: faker.random.numeric(1),
            photoURL: faker.image.transport(400,400,true),
        }
        array.push(products)
        
    }
    res.json(array)
})

app.get('/api/productos-test',(req,res)=>{
    for (let i=0; i<4; i++){
        const products = {
            productName: faker.vehicle.vehicle(),
            stock: faker.random.numeric(1),
            photoURL: faker.image.transport(400,400,true),
        }
        array.push(products)
        
    }
    res.render('index',{
        array
    })
})

app.get('/api/mensajes-test',(req,res)=>{
    for (let i=0; i<1000; i++){
        const messages = {
            authorName: faker.vehicle.vehicle(),
            authorLastName: faker.vehicle.vehicle(),
            edad: faker.random.numeric(1),
            message: faker.random.numeric(1),
            avatar: faker.image.transport(400,400,true),
        }
        mensajes.push(messages)
        
    }
    res.render('mensajes',{
        mensajes
    })
})


const PORT = 8080

app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`)
})