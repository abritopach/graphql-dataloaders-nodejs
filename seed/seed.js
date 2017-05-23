import seeder from 'mongoose-seeder';
import mongoose from 'mongoose';

// Mandatory import(define moongose schemas)
import {} from '../models';

import { database } from '../config/config'
import seedData from './seed.data.json';

const { name, username, password, host, port } = database;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${name}`);

function seedError(error) {
    mongoose.connection.close();
    console.log('Seed finished with errors: ${error}');
    process.exit(1); //eslint-disable-line
}


// // Tras crear la conexión con la base de datos, llamamos al método seed que nos provee la librería mongoose-seeder,
// pasándole como parámetro el json con los valores de prueba. Esta llamada es una promesa, que al resolverse nos pasa
// como parámetro de nuestro callback dbData que contiene los datos que se han añadido a base de datos.
seeder.seed(seedData, {dropDatabase: false}).then((dbData) => {
    const { users, posts, comments} = dbData;
    const { usera, userb, userc } = users;
    const { posta, postb, postc, postd } = posts;
    const { commenta, commentb, commentc, commentd, commente, commentf, commentg } = comments;

    // A partir de estos datos actualizamos las referencias necesarias: incluimos los comentarios y los posts
    // a los usuarios y añadimos el autor y los comentarios a los posts.
    usera.posts.push(...[posta, postb]);
    // Uso el operador de propagación spread (...) de ES6
    usera.comments.push(...[commenta, commentb, commentc, commentd]);
    userb.posts.push(postc);
    userb.comments.push(...[commente, commentf]);
    userc.posts.push(postd);
    userc.comments.push(commentg);
    posta.author = usera;
    posta.comments.push(...[commenta, commentb, commentf]);
    postb.author = usera;
    postb.comments.push(...[commentc, commentd, commente]);
    postc.author = userb;
    postc.comments.push(commentg);
    postd.author = userc;

    //console.log(users);

    // Ahora necesitamos actualizar cada uno de los documentos en base de datos. Cada llamada a save() es una promesa
    // que incluimos en nuestro array de promesas (Promise.all([promises])). Una vez se resuelvan todas, cerramos la
    // conexión, mostramos el mensaje de éxito o error según corresponda y terminamos el proceso.
    Promise.all([
        Object.keys(posts).map((post) =>
        {
            //console.log(posts[post]._id);
            posts[post].save()
        }),
        Object.keys(users).map((user) => users[user].save())
    ]).then(() => {
        mongoose.connection.close();
        console.log('Seed finished OK!');
        process.exit(0); //eslint-disable-line
    }).catch((error) => seedError(error));
}).catch((error) => seedError(error));
