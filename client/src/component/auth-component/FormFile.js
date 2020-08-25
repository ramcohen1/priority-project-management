import React from 'react'
import { Form, Field, Formik } from 'formik'
import './FormFile.css'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import history from '../../history'

const validationSchema = (form) => {
   const yupObj = {
      email: yup.string().email().required(),
      password: yup.string().min(8).required("Please provide a valid password"),

   }

   if (form === 'registration') yupObj.user = yup.string().required()

   return yup.object({ ...yupObj })
}

const displayErrors = (errors, touched, form) => {
   if (errors.email && touched.email) return <>{errors.email}</>
   if (errors.password && touched.password) return <>{errors.password}</>
   if (form === 'registration') {
      if (errors.user && touched.user) return <>user name is required</>
   }
}

const displayFileUserName = () => {
   return (<>
      <Field
         className="form-control"
         autoComplete="off"
         placeholder="user name"
         name='user'
         type="text" />
      <br />
   </>
   )
}

const displayButtonLogin = () => {
   return (
      <div>
         <Link to="/">
            <button className="sign-up-button">
               התחברות
         </button>
         </Link>
      </div>
   )
}

const displayButtonRegistration = () => {
   return (
      <div>
         <Link to="/registration">
            <button className="sign-up-button">
               הרשמה
         </button>
         </Link>
      </div>
   );
}

const displayForm = (form, header, inputs, sendRegistration,
   registerMessage, errorEmail, sendLogin) => {

   return (
      <div className="container-form-auth">
         <div className="container-title">
            <h1>{header}</h1>
         </div>
         <br />
         <div className="contact-form">
            <Formik
               className="form-formik"
               initialValues={{ ...inputs }}
               validationSchema={validationSchema(form)}
               onSubmit={async (data, { setSubmitting, resetForm }) => {
                  const { email, password } = data
                  setSubmitting(true)
                  console.log(data)
                  try {
                     if (form === 'registration') {
                        const { user } = data
                        const response = await sendRegistration(email, password, user)
                        if (response.status === 201) {
                           setSubmitting(false)
                           resetForm()
                           history.push({
                              pathname: '/',
                              state: { detail: 'registration succeeded!' }
                           })
                        }
                     }
                     if (form === 'login') {
                        const response = await sendLogin(email, password)
                        if (response.status === 200) {
                           setSubmitting(false)
                           history.push({
                              pathname: '/main-page'
                           })
                        }
                     }
                  } catch (error) {
                     console.log(error)
                  }
               }}>
               {({ values, errors, isSubmitting, touched }) => (
                  <Form>
                     <Field
                        className="form-control"
                        autoComplete="off"
                        placeholder="email"
                        name="email"
                        type="email" />
                     <br />
                     {form === 'registration' ? displayFileUserName() : null}
                     <Field
                        className="form-control"
                        autoComplete="off"
                        placeholder="password"
                        name="password"
                        type="password" />
                     <br />
                     <br />
                     <button className="submit-login" disabled={isSubmitting} type="submit">{header}</button>
                     {form === 'registration' ? displayButtonLogin() : null}
                     {form === 'login' ? displayButtonRegistration() : null}
                     <div className="error-form-login">
                        {errors ? displayErrors(errors, touched, form) : null}
                        {errorEmail ? <div style={{ color: 'red' }}>{errorEmail}</div> : null}
                        {registerMessage ?
                           <div style={{ color: 'green' }}>{registerMessage}</div>
                           : null}
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div >
   );
}

function FormFile(props) {

   const { form, header, inputs, registerMessage,
      sendRegistration, errorEmail, sendLogin } = props

   return <>{displayForm(form, header, inputs,
      sendRegistration, registerMessage, errorEmail,
      sendLogin)}</>
}

export default FormFile