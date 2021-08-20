import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    text: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
