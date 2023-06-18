import * as yup from 'yup';

const text = (name: string) => yup.string().required(`${name} is a required field`);
const optionText = (name: string) => yup.string();
const email = () => yup.string().email('Email is invalid').required('Email is a required field');
const checkbox = () => yup.boolean().isTrue().required();
const password = () =>
    yup
        .string()
        .required('Password is a required field')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.');

const schema = yup.object().shape({
    firstName: yup.string().required('FirstName is a required field'),
    lastName: yup.string().required('LastName is a required field'),
    email: yup.string().email('Email is invalid').required('Email is a required field'),
    phoneNumber: yup.string().required('Email is a required field'),
    term: yup.boolean().isTrue().required(),
    password: yup
        .string()
        .required('Password is a required field')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const validationRules = { text, email, checkbox, password, optionText };
export default validationRules;
