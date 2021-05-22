import * as yup from 'yup';

let addTodoValidation = yup.object().shape({
  title: yup
    .string()
    .min(5, 'Minimim 5 karakter girmelisiniz')
    .required('Title alanı boş bırakılamaz'),
  description: yup
    .string()
    .min(5, 'Minimum 5 Karakter girmelisiniz')
    .required('Description alanı boş bırakılamaz'),
});

export default addTodoValidation;
