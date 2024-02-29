import * as Yup from 'yup';

export const loginValidation = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export const signupValidation = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});