import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import axios from 'axios';

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
        let splitAt = values.email.split('@');
        let name = splitAt[0];
        let domain = splitAt[1].split('.')[0];
        let ext = splitAt[1].split('.')[1];
        axios.get('http://localhost:3000/api/get/user_by_email/' + name + '/' + domain + '/' + ext)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
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