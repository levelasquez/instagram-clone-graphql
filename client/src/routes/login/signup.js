import React from 'react'
import {
  Divider,
  Form,
  Button,
  Icon,
} from 'semantic-ui-react'

export default ({ styles, handleClick }) => (
  <div>
    <div style={styles.box}>
      <img src='images/logo.png' />
      <h4>Regístrate para ver fotos y videos de tus amigos.</h4>
      <Form>
        <Button color='facebook'>
          <Icon name='facebook' /> Iniciar sesión con facebook
        </Button>
        <Divider horizontal>O</Divider>
        <Form.Field>
          <Form.Input
            placeholder='Email'
            icon={<Icon
              name='remove circle outline'
              size='large'
              color='red'
            />}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            placeholder='Nombre'
            icon={<Icon
              name='remove circle outline'
              size='large'
              color='red'
            />}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            placeholder='Nombre de usuario'
            icon={<Icon
              name='remove circle outline'
              size='large'
              color='red'
            />}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type='password'
            placeholder='Contraseña'
            icon={<Icon
              name='remove circle outline'
              size='large'
              color='red'
            />}
          />
        </Form.Field>
        <Button type='submit' fluid primary>Registrate</Button>
      </Form>
    </div>
    <div style={styles.box}>
      ¿Tienes una cuenta? <a href='' onClick={handleClick}>Inicia sesión</a>
    </div>
  </div>
)
