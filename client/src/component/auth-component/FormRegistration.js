import React, { useState } from 'react'
import FormFile from './FormFile'
import priorityApi from '../../apis/priority'

function FormRegistration() {
   const [errorEmail, setErrorEmail] = useState(null)

   const sendRegistration = async (email, password, user) => {
      try {
         const response = await priorityApi.post('/users', {
            email,
            password,
            name: user
         })
         return response
      } catch (error) {
         setErrorEmail(error.response.data.error)
      }
   }
   
   return (
      <>
         <FormFile
            errorEmail={errorEmail}
            sendRegistration={sendRegistration}
            inputs={{ email: "", password: "", user: "" }}
            form="registration"
            header="הרשמה" />
      </>
   );
}

export default FormRegistration