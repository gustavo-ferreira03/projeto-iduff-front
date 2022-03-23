import React from 'react'
import styles from './EditProfileForm.module.css'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

export default function EditProfileForm() {
  return (
    <form className={styles.form}>
        <div className={styles}>
            <p>Edite os dados cadastrados para sua conta do IDUFF</p>
            <Input 
              inputDirection="input--column"
              inputSize="input--medium"
              label="Nome Completo"
              type="text"
            />
            <div>
                <p>Nacionalidade: Brasil/BR</p>
                <p>Estado: Rio de Janeiro</p>
                <div>
                    <p>RG: 12.123.123-1</p>
                    <p>CPF: 123.123.123-11</p>
                </div>
            </div>
            <p>Dados para contato</p>
            <div>
                <div>
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--large"
                        label="Rua"
                        type="text"
                    />
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--small"
                        label="Nº"
                        type="number"
                    />
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--large"
                        label="Rua"
                        type="text"
                    />
                </div>
                <div>
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--medium"
                        label="Complemento"
                        type="text"
                    />
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--medium"
                        label="Estado"
                        type="text"
                    />
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--medium"
                        label="CEP"
                        type="number"
                    />
                </div>
                <div>
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--medium"
                        label="Telefone"
                        type="number"
                    />
                    <Input 
                        inputDirection="input--column"
                        inputSize="input--medium"
                        label="Celular"
                        type="number"
                    />
                </div>
            </div>
        </div>
        <Button
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
        >Salvar</Button>
    </form>
  )
}
