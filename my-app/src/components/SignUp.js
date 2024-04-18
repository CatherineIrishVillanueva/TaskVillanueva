import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { signUp } from '../redux/actions/authActions';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(3).required("Please Enter Name"),
  mobile: Yup.string().matches(/^[0-9]+$/, "Mobile number must contain only digits").min(11, "Mobile number must be at least 11 digits").required("Please Enter Mobile Number"),
  email: Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
  address: Yup.string().required("Please Enter Address"),
  gender: Yup.string().required("Please Select Gender"),
  password: Yup.string().min(8).required("Please Enter Password"),
  birthdate: Yup.date().required("Please Enter Birthdate")
});

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const error = await dispatch(signUp(values));
    if (error) {
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
    } else {
      resetForm();
      toast.success('✨ Account Registration Successfully! ✨', {
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
          name: '',
          mobile: '',
          email: '',
          address: '',
          gender: '',
          password: '',
          birthdate: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="">
            <div class="mb-4">
              <h2 class="text-2xl text-center font-bold text-black typing-text">Registration</h2>
            </div>
            <div className="mb-4 w-91">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
              />
              {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
            </div>

            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Enter Mobile Number"
                autoComplete="off"
              />
              {errors.mobile && touched.mobile && <div className="text-red-500">{errors.mobile}</div>}
            </div>

            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                autoComplete="off"
              />
              {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
            </div>

            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                name="address"
                type="text"
                placeholder="Enter Address"
                autoComplete="off"
              />
              {errors.address && touched.address && <div className="text-red-500">{errors.address}</div>}
            </div>

            <div className="mb-4">
              <Field as="select" name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              {errors.gender && touched.gender && <div className="text-red-500">{errors.gender}</div>}
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
              {errors.password && touched.password && <div className="text-red-500">{errors.password}</div>}
            </div>

            <div className="mb-4">
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="Enter Birthdate"
                autoComplete="off"
              />
              {errors.birthdate && touched.birthdate && <div className="text-red-500">{errors.birthdate}</div>}
            </div>

            <div className='text-center'>
              <button
                className="bg-blue-500 align-item-center hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                style={{ fontSize: '17.5px', height: '37px', lineHeight: '5px' }}
                title={'Click to Register'}
              >
                Register
                <FontAwesomeIcon icon={faPlay} className="text-green-300" style={{ width: '18px', height: '18px', marginLeft: '4px' }} />
              </button>
              <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
