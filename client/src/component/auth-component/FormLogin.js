import React, { useState, useEffect } from 'react'
import FormFile from './FormFile'
import priorityApi from '../../apis/priority'

function FormLogin(props) {
   const [regMess, setRegMess] = useState(undefined)
   const { state } = props.location

   const sendLogin = async (email, password) => {
      try {
         const response = await priorityApi.post('/users/login', {
            email,
            password
         })
         return response
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      if (state) {
         return setRegMess(state.detail)
      }else{
         return setRegMess(undefined)
      }
   }, [state])

   if (regMess) {
      setTimeout(() => {
         setRegMess(undefined)
      }, 2000)
   }

   console.log(state)
   return (
      <>
         <FormFile
            sendLogin={sendLogin}
            registerMessage={regMess}
            inputs={{ email: "", password: "" }}
            header="התחברות"
            form="login" />
      </>
   );
}

export default FormLogin