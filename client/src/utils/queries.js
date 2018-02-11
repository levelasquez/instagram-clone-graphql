import gpl from 'graphql-tag'

export default {
  queries: {},
  mutations: {
    createUser: gpl`
    mutation($username: String!, $password: String!, $fullname: String!, $email: String!) {
      createUser(username: $username, password: $password, fullname: $fullname, email: $email)
    }
  `,
  },
  subscriptions: {},
}
