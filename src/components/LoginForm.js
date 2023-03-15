import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function LoginForm() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Format invalide').required('Champ obligatoire'),
        password: Yup.string().required('Champ obligatoire')
    })

    const onSubmit = values => {
        console.log('Form data: ', values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email' />

                        <FormikControl
                            control='input'
                            type='password'
                            label='Mot de passe'
                            name='password' />

                        <button type='submit' disabled={!formik.isValid}>Se Connecter</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default LoginForm