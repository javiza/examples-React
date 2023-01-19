//rfc
import {useHistory} from 'react-router-dom'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//esquema yup para que se compare el password y email y valide
const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('invalid email format')//en caso de que sea error y no sea un string
            .required('email is required'),
        password: Yup.string()
            .required('Pasword is required')

    }
)

//formulario formik

const Loginformik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
    const history = useHistory();
    return (
      <div>
        <h4>Login Formik</h4>
        <Formik
          initialValues={initialCredentials}

          //validar formik a travez de un esquema **yup validation schema**
          validationSchema = {loginSchema}

          // onsubmit Event
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            //aca cuando me logeo estos datos quedan registrados en el loocalstore del navegador
            await localStorage.setItem('credentials', values);
            history.push('/profile');
          }}
        >
        {/* we obtain props from formik */}

          {({ values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur}) => (

                <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="your@email.com" />
              {/*email errors */}
              {errors.email && touched.email && 
              (
                <ErrorMessage name='email' component='div' ></ErrorMessage>

                )
              }

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            
            
            />
             {/*password errors */}
             {errors.password && touched.password && 
              (
                
                <ErrorMessage name='password' component='div'></ErrorMessage>
              
              
                )
              }
            <button type="submit">Login</button>
            {isSubmitting ? (<p>Login your credentiales...</p>): null}
          </Form>
          )}

        </Formik>
      </div>
    );
}

export default Loginformik;
