import mongoose from 'mongoose';

// Mandatory imports (define moongose schemas)
import {} from '../models'

import { database } from '../config/config'

const { name, username, password, host, port } = database;

// MongoDB connection.
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${name}`, function (error) {
    if (error) console.error(error);
    else console.log('Mongo connected.');
});
