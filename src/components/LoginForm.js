import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import { useStateValue } from "./stateProvider";

function LoginForm() {

    let navigate = useNavigate();
    const [{}, dispatch] = useStateValue();
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
                //console.log(response);
                if (response.data.length > 0) {
                    if (values.password == response.data[0].password) {
                        dispatch({
                            type: "SET_USER",
                            user: values.email,
                        });
                        navigate('/');
                    } else {
                        alert('Identifiants incorrects');
                    }
                } else {
                    alert('Identifiants incorrects');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {

            });
    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <LoginHeader
                    heading="Connexion à votre compte"
                />
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => {
                            return <Form className='mt-8 space-y-6'>
                                <FormikControl
                                    control='input'
                                    type='email'
                                    label='Email'
                                    placeholder='Email'
                                    name='email' />

                                <FormikControl
                                    control='input'
                                    type='password'
                                    label='Mot de passe'
                                    placeholder='Mot de passe'
                                    name='password' />

                                <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 mt-10' type='submit' disabled={!formik.isValid}>Se Connecter</button>
                            </Form>
                        }
                    }
                </Formik>
            </div>
        </div>
    )
}

export default LoginForm