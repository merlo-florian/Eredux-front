import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input (props) {
  const { label, name, placeholder, ...rest } = props
  return (
    <div className='my-5'>
      <label htmlFor={name} className='sr-only'>{label}</label>
      <Field id={name} name={name} placeholder={placeholder} className='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm' {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input