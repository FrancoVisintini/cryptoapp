import * as Yup from 'yup';
import BaseForm from '../commons/BaseForm/BaseForm';

const initialValues = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder:'John'
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder:'Smith'
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder:'john@mail.com'
    },
    {
        name: 'message',
        label: 'Message',
        type: 'text',
        placeholder:'Instert your message...'
    },
];

const validationSchema=Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    message: Yup.string()
        .max(250, 'Must be 250 characters or less')
        .required('Required')
  })

  export default function ContactForm(){
      return(
          <BaseForm
            initialValues={initialValues}
            validationSchema={validationSchema}
          />    
      )
  }