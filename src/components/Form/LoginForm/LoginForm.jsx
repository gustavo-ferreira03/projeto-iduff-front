import React from 'react'
import styles from './LoginForm.module.css'
import '../Form.css'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import {api} from '../../../services/api'

export default function LoginForm() {
  //MUDAR PARA CPF
  const [user, setUser] = useState({email: "", password: ""})

  function handleChange(event) {
    //MUDAR PARA CPF
    setUser({...user, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      user: {...user}
    }
    api.post("/auth/login", data)
    .then(resp => console.log(resp.data))
    .catch(error => console.log(error.message))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} onChange={handleChange}>
        <h2>Acesse o seu id<span className={styles.blue_text}>UFF</span></h2>
        <div>
          <div className={styles.input_container}>
            <Input
              inputDirection="input--column"
              inputSize="input--medium"
              label="CPF (Somente números)"
              name="email"
              // MUDAR PARA NUMBER
              type="text"
            />
            <Input 
              inputDirection="input--column"
              inputSize="input--medium"
              label="Senha"
              name="password"
              type="password"
            />
          </div>
          <div className={styles.button_container}>
            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
            >Logar</Button>
            <Link to="/">Esqueci minha senha</Link>
          </div>
        </div>
    </form>
  )
}
