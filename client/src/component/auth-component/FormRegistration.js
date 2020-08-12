import React from 'react'
import FormFile from './FormFile'

function FormRegistration() {
   return (
      <>
         <FormFile
            inputs={{ email: "", password: "", userName: "" }}
            operator="post"
            endpoint="/users"
            form="registration"
            header="הרשמה" />
      </>
   );
}

export default FormRegistration