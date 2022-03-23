import React, { useState } from 'react'
import styles from './EditProfileForm.module.css'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

export default function EditProfileForm() {
    const [data, setData] = useState({})
    
    function handleChange(event) {
        setData({...data, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} onChange={handleChange}>
            <div className={styles.form_content}>
                <p>Edite os dados cadastrados para sua conta do IDUFF</p>
                <Input 
                    inputDirection="input--column"
                    inputSize="input--large"
                    label="Nome Completo"
                    name="name"
                    type="text"
                />
                <div className={styles.info_section}>
                    <p>Nacionalidade: Brasil/BR</p>
                    <p>Estado: Rio de Janeiro</p>
                    <div className={styles.form_row}>
                        <p>RG: 12.123.123-1</p>
                        <p>CPF: 123.123.123-11</p>
                    </div>
                </div>
                <div className={styles.form_rows}>
                    <p>Dados para contato</p>
                    <div className={styles.form_row}>
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--large"
                            label="Rua"
                            name="street"
                            type="text"
                        />
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--small"
                            label="Nº"
                            name="number"
                            type="number"
                        />
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--large"
                            label="Bairro"
                            name="neighborhood"
                            type="text"
                        />
                    </div>
                    <div className={styles.form_row}>
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--medium"
                            label="Complemento"
                            name="complement"
                            type="text"
                        />
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--medium"
                            label="Estado"
                            name="district"
                            type="text"
                        />
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--medium"
                            label="CEP"
                            type="number"
                        />
                    </div>
                    <div className={styles.form_row}>
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--medium"
                            label="Telefone"
                            name="phone"
                            type="number"
                        />
                        <Input 
                            inputDirection="input--column"
                            inputSize="input--medium"
                            label="Celular"
                            name="phone_2"
                            type="number"
                        />
                    </div>
                </div>
                <div className={styles.button_container}>
                    <Button
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--large"
                    >Salvar</Button>
                </div>
            </div>
        </form>
    )
}
