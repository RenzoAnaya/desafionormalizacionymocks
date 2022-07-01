import {normalize, schema} from 'normalizr';
import {inspect} from 'util';

const mensajesOriginal = {};


const mensajesSchema = new schema.Entity('mensajes')

const autoresSchema = new schema.Entity('autores')




const autoresNormalized = normalize(mensajesOriginal, autoresSchema);

function print(objeto){
    console.log(inspect(objeto,false,12,true))
};

print(autoresNormalized)