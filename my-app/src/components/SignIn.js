import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signIn } from '../redux/actions/authActions';
import { useHistory } from 'react-router-dom';

const SignInSchema = Yup.object().shape({
  emailOrMobile: Yup.string().required("Mobile Number or Email is required"),
  password: Yup.string().min(8).required("Please Enter Password")
});

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values) => {
    const signInSuccess = await dispatch(signIn(values));
    if (signInSuccess) {
      history.push("/welcome");
    } else {

    }
  };

  return (
    <div className="bg-opacity-10 rounded-2xl relative z-2 backdrop-filter backdrop-blur-smn">
      <Formik
        initialValues={{
          emailOrMobile: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="">
            <h2 className="text-2xl mb-4 text-center font-bold text-white">Login</h2>
            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailOrMobile"
                name="emailOrMobile"
                type="text"
                placeholder="Enter Email or Mobile Number"
                autoComplete="off"
              />
              {errors.emailOrMobile && touched.emailOrMobile && <div className="text-red-500">{errors.emailOrMobile}</div>}
            </div>
            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
              />
              {errors.password && touched.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>

            <div className='text-center'>
              <button
                className="bg-blue-500 align-item-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
