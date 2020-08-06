import React from 'react'
import FormFile from './FormFile'

function FormRegistration() {
   return (
      <>
         <FormFile
            inputs={{ email: "", password: "", userName: "" }}
            form="registration"
            header="הרשמה" />
      </>
   );
}

export default FormRegistration