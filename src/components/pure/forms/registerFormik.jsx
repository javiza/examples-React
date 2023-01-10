// rfc
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// models

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                .min(6, 'username too short')
                .max(10, 'username too long')
                .required('username is required'),
            email: Yup.string()
                .email('invalid email format')
                .required('émail is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'you must select a Role: User/Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'password to short')
                .required('password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value =>(value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'password must match!!'//mensaje error
                    )

                }).required('you must confirm the password')  
        }

    )

    const submit = (values) => {
        alert('Register user')
    }
    return (
      <div>
        <h4>register formik</h4>
        <Formik
          initialValues={initialValues}
          //validar formik a travez de un esquema **yup validation schema**
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur }) => (
            <Form>
              <label htmlFor="username">Username</label>
              <Field
                id="username"
                type="text"
                name="username"
                placeholder="your username"
              />
                {
                errors.username && touched.username &&
                (
                  <ErrorMessage name= "username" component = 'div'></ErrorMessage>
                )
              }
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
              />
              {
                errors.email && touched.email &&
                (
                  <ErrorMessage name= "email" component = 'div'></ErrorMessage>
                )
              }
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="password password"
              />
               {
                errors.password && touched.password &&
                (
                  <ErrorMessage name= "password" component = 'div'></ErrorMessage>
                )
              }
               <label htmlFor="confirm">Password</label>
              <Field
                id="confirm"
                type="password"
                name="confirm"
                placeholder="confirm password"
              />
               {
                errors.confirm && touched.confirm &&
                (
                  <ErrorMessage name= "confirm" component = 'div'></ErrorMessage>
                )
              }
              <button type='submit'>register account</button>
              {isSubmitting ? (<p>sending your credentials...</p>): null}
            </Form>
          )}
        </Formik>
      </div>
    );
}

export default RegisterFormik;
