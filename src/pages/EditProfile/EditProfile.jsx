import React from 'react'
import { Card } from '../../components/Card/Card'
import EditProfileForm from '../../components/Form/EditProfileForm/EditProfileForm'

export default function EditProfile() {
  return (
    <Card title="Editar perfil">
      <EditProfileForm />
    </Card>
  )
}
