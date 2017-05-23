import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';


// Importamos los modelos que hemos generado anteriormente, ya que los necesitaremos para detallar las consultas que se
// han de realizar a base de datos para recuperar los datos que necesitemos.
import { UserModel, PostModel, CommentModel } from '../models'

const User = new GraphQLObjectType({
    name: 'User',
    description: 'General user of the app',

    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        id: { type: GraphQLString },
        // Use Data Loaders.
        contacts: {
            type: new GraphQLList(User),
            resolve: (user, args, {Loaders}) => Loaders.user.loadMany(user.contacts)
        },
        posts: {
            type: new GraphQLList(Post),
            resolve: (user, args, {Loaders}) => Loaders.post.loadMany(user.posts)
        },
        comments: {
            type: new GraphQLList(Comment),
            resolve: (user, args, {Loaders}) => Loaders.comment.loadMany(user.comments)
        }
    })
});

const UsersSchema = {
    type: new GraphQLList(User),
    args: {
        firstName: { type: GraphQLString },
        lastName:{ type: GraphQLString }
    },
    resolve: (root, args) => UserModel.find(args, (_, values) => values)
}

const UserSchema = {
    type: User,
    args: {
        id: { type: GraphQLString },
        email:{ type: GraphQLString }
    },
    resolve: (root, args) => UserModel.findOne(args, (_, value) => value)
}

const Post = new GraphQLObjectType({
    name: 'Post',
    description: 'Each content of the blog',

    fields: () => ({
        title: { type: GraphQLString },
        content : { type: GraphQLString },
        category : { type: GraphQLString },
        id: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        modifiedAt: { type: GraphQLString },
        // Use Data Loaders.
        comments: {
            type: new GraphQLList(Comment),
            resolve: (post, args, {Loaders}) => Loaders.comment.loadMany(post.comments)
        },
        author: {
            type: User,
            resolve: (post, args, {Loaders}) => Loaders.user.load(post.author)
        }
    })
});

const PostsSchema = {
    type: new GraphQLList(Post),
    args: {
        id: { type: GraphQLString },
        category: { type: GraphQLString}
    },
    resolve: (root, args) => PostModel.find(args, (_, values) => values)
}

const PostSchema = {
    type: Post,
    args: {
        id: { type: GraphQLString }
    },
    resolve: (root, args) => PostModel.findOne(args, (_, value) => value)
}

const Comment = new GraphQLObjectType({
    name: 'Comment',
    description: 'Comment',

    fields: () => ({
        comment: { type: GraphQLString },
        id: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        modifiedAt: { type: GraphQLString },
        // Use Data Loaders.
        likes: {
            type: new GraphQLList(User),
            resolve: (comment, args, {Loaders}) => Loaders.user.loadMany(comment.likes)
        },
        author: {
            type: User,
            resolve: (comment, args, {Loaders}) => Loaders.user.load(comment.author)
        },
        post: {
            type: Post,
            resolve: (comment, args, {Loaders}) => Loaders.post.load(comment.post)
        }
    })
});

const CommentsSchema = {
    type: new GraphQLList(Comment),
    args: {
        author: { type: GraphQLString },
        post: { type: GraphQLString }
    },
    resolve: (root, args) => CommentModel.find(args, (_, values) => values)
}

const CommentSchema = {
    type: Comment,
    args: {
        id: { type: GraphQLString }
    },
    resolve: (root, args) => CommentModel.findOne(args, (_, value) => value)
}

export { User, UserSchema, UsersSchema, Post, PostSchema, PostsSchema, Comment, CommentSchema, CommentsSchema };
