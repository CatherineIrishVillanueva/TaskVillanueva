import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signIn } from '../redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const SignInSchema = Yup.object().shape({
  emailOrMobile: Yup.string().required("Mobile Number or Email is required"),
  password: Yup.string().min(8).required("Please Enter Password")
});

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values) => {
    const error = await dispatch(signIn(values));
    if (!error) {
      history.push("/welcome");
    } else {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
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
            <div class="mb-4">
              <h2 class="text-2xl text-center font-bold text-black typing-text">Login</h2>
            </div>
            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailOrMobile"
                name="emailOrMobile"
                type="text"
                placeholder="Enter Email/Mobile Number"
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
                className="bg-blue-500 align-item-center hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                style={{ fontSize: '18px' }}
                title={'Click to Login'}
              >
                Login
                <FontAwesomeIcon icon={faSignIn} className="text-green-300" style={{ width: '19px', height: '19px', marginLeft: '4px' }} />
              </button>
              <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
