import React from 'react'
import styles from './LoginForm.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import {api} from '../../services/api'

export default function LoginForm() {
  const [user, setUser] = useState({cpf: "", password: ""})

  function handleCPFChange(event) {
    setUser({...user, cpf: event.target.value})
    console.log(user)
  }

  function handlePasswordChange(event) {
    setUser({...user, password: event.target.value})
    console.log(user)
  }

  function handleLogin(event) {
    event.preventDefault()
    const data = {
      user: {...user}
    }
    api.post("/auth/login", data)
    .then(resp => console.log(resp))
  }


  return (
    <form className={styles.form} onSubmit={handleLogin}>
        <h2>Acesse o seu id<span className={styles.blue_text}>UFF</span></h2>
        <div>
          <div className={styles.input_container} onSubmit={handleLogin}>
            <Input
              onChange={handleCPFChange}
              inputDirection="input--column"
              inputSize="input--medium"
              label="CPF (Somente números)"
              type="number"
            />
            <Input 
              onChange={handlePasswordChange}
              inputDirection="input--column"
              inputSize="input--medium"
              label="Senha"
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
