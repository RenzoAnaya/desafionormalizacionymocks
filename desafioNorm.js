import {normalize, schema} from 'normalizr';
import {inspect} from 'util';

const mensajesOriginal = {};


const autoresSchema = new schema.Entity('autores');
const mensajesSchema = new schema.Entity('mensajes',{
    authorName: userSchema,
    text:[commentSchema]
})






const mensajesNormalized = normalize(mensajesOriginal, mensajesSchema);

function print(objeto){
    console.log(inspect(objeto,false,12,true))
};

print(mensajesNormalized)