import React from 'react'
import { Form, Field, Formik } from 'formik'
import './FormFile.css'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const validationSchema = yup.object({
   email: yup.string().email().required(),
   password: yup.string().required("Please provide a valid password"),
   userName: yup.string().required()
})

const displayErrors = (errors, touched) => {
   if (errors.email && touched.email) return <>{errors.email}</>
   if (errors.password && touched.password) return <>{errors.password}</>
   if (errors.userName && touched.userName) return <>user name is required</>
}

const displayFileUserName = () => {
   return (<>
      <Field
         className="form-control"
         autoComplete="off"
         placeholder="user name"
         name='userName'
         type="text" />
      <br />
   </>
   )
}

const displayButtonLogin = () => {
   return (
      <>
         <div>
            <Link to="/">
               <button className="sign-up-button">
                  התחברות
         </button>
            </Link>
         </div>
      </>
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

const displayForm = (form, header, inputs, endpoint, operator) => {
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
               validationSchema={validationSchema}
               onSubmit={(data, { setSubmitting, resetForm }) => {
                  setSubmitting(true)
                  setSubmitting(false)
                  resetForm()
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
                        {errors ? displayErrors(errors, touched) : null}
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   );
}

function FormFile(props) {

   const { form, header, inputs, endpoint, operator } = props

   return <>{displayForm(form, header, inputs, endpoint, operator)}</>
}

export default FormFile