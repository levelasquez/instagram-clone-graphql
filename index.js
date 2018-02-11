import express from 'express'
import bodyParser from 'body-parser'
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

import typeDefs from './schemas'
import resolvers from './resolvers'
import models from './models'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
const PORT = 3000

const app = express ()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: { models },
}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

mongoose.connect('mongodb://localhost:27017/instagram-clone')
  .then(() => app.listen(PORT, () => console.log('Running GraphQL Server ...')))
