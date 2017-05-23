import DataLoader from 'dataloader';

import { UserModel } from '../../models';


// Hemos creado nuestro dataloader, definiendo una función que va a recibir un array de keys y devuelve una promesa,
// que es getUsersById(keys) que es la consulta que realizamos a nuestra base de datos utilizando mongooose.
// Cuando la promesa se resuelve, iteramos por cada una de las keys y devolvemos el valor que hemos encontrado en el
// array devuelto desde base de datos, donde el id del objeto coincida con la key.
const getUsersById = keys =>
    UserModel.find({'_id': { $in: keys }}, (_, values) => values);

const UserLoader = new DataLoader(
        keys => getUsersById(keys).then(values =>
        keys.map(key =>
                values.find(elem => elem._id.toString() === key.toString())
        ))
);

export { UserLoader }
