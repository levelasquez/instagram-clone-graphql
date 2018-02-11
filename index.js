import express from 'express'
import bodyParser from 'body-parser'
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './schemas'
import resolvers from './resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
const PORT = 3000

const app = express ()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => console.log('Running GraphQL Server ...'))
