import React from 'react'
import FormFile from './FormFile'

function FormLogin() {
   return (
      <>
         <FormFile
            inputs={{email: "", password: ""}}
            header="התחברות"
            form="login" />
      </>
   );
}

export default FormLogin