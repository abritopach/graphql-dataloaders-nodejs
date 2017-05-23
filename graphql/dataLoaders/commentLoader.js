import DataLoader from 'dataloader';

import { CommentModel } from '../../models';

const getCommentsById = keys =>
    CommentModel.find({'_id': { $in: keys }}, (_, values) => values);

const CommentLoader = new DataLoader(
        keys => getCommentsById(keys).then(values =>
        keys.map(key =>
                values.find(elem => elem._id.toString() === key.toString())
        ))
);

export { CommentLoader }
