import { Schema } from './schema';
import { UserLoader } from './dataLoaders/userLoader';
import { PostLoader } from './dataLoaders/postLoader';
import { CommentLoader } from './dataLoaders/commentLoader';

const Loaders = {
    user: UserLoader,
    post: PostLoader,
    comment: CommentLoader
}

export { Schema, Loaders }
