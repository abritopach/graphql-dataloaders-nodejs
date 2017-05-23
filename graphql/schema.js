import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { UserSchema, UsersSchema, PostSchema, PostsSchema, CommentSchema, CommentsSchema } from './schemaTypes.js';

// Este campo query es un GraphQLObjectType donde, aparte del nombre y de la descripción, tenemos que definir una
// función fields, que devolverá un objeto con todos los esquemas que queramos proveer.
// En nuestro caso, tenemos los esquemas para usuarios, posts y comentarios.

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query type',
    fields: () => ({
        user: UserSchema,
        users: UsersSchema,
        post: PostSchema,
        posts: PostsSchema,
        comment: CommentSchema,
        comments: CommentsSchema
    })
});


// Definimos un esquema creando un nuevo GraphQLSchema, que es un objeto que, como mínimo, tiene un campo query
// donde se detallan los tipos de querys que se pueden realizar.

export const Schema = new GraphQLSchema({
    query: QueryType
});
