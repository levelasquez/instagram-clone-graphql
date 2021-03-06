import React, { Component } from 'react'
import {
  Grid,
  Image,
} from 'semantic-ui-react'
import { graphql } from 'react-apollo'

import Signin from './login/signin'
import Signup from './login/signup'
import LostPassword from './login/lostPassword'

import queries from '../utils/queries'

const styles = {
  grid: {
    height: '100%',
    width: '900px',
    margin: '0 auto',
  },
  box: {
    background: 'white',
    border: '1px solid #e6e6e6',
    textAlign: 'center',
    marginBottom: '1em',
    padding: '1em',
  },
}

export class Login extends Component {
  state = {
    showLogin: true,
    showRegister: false,
    showLostPassword: false,
  }

  showRegister = event => {
    event.preventDefault()

    this.setState({
      showLogin: false,
      showRegister: true,
      showLostPassword: false,
    })
  }

  showLogin = event => {
    event.preventDefault()

    this.setState({
      showLogin: true,
      showRegister: false,
      showLostPassword: false,
    })
  }

  handleLogin = (event, args) => {
    console.log({ args })
  }

  handleRegister = async (event, args) => {
    console.log({ args })
    const response = await this.props.mutate({
      variables: args,
    })

    console.log({ response })
  }

  render() {
    const {
      showLogin,
      showRegister,
      showLostPassword,
    } = this.state

    return (
      <Grid
        columns={2}
        centered
        verticalAlign='middle'
        style={styles.grid}
      >
        <Grid.Row>
          <Grid.Column>
            <Image src='images/phone.png' fluid />
          </Grid.Column>
          <Grid.Column>
            {showLogin &&
              <Signin
                styles={styles}
                handleClick={this.showRegister}
                handleSubmit={this.handleLogin}
              />}
            {showRegister &&
              <Signup
                styles={styles}
                handleClick={this.showLogin}
                handleSubmit={this.handleRegister}
              />}
            {showLostPassword && <LostPassword styles={styles} />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default graphql(queries.mutations.createUser)(Login)
