import React, { useEffect } from 'react';
import { Formik, Form, useField } from 'formik';
import "./styles.css"

const MyTextInput = ({...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
const BaseForm = ({initialValues, validationSchema}) => {
  const valuesNames = {};
  useEffect(()=>{
    initialValues.map(e => valuesNames[e.name]="")
  },[initialValues])
  
  return (
    <>
      <h1>Contact me!</h1>
      <Formik
        initialValues={valuesNames}
        validationSchema={validationSchema}
        
        onSubmit={(values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm(valuesNames)
        }}
      >
        <Form>
          {
            initialValues.map(e=>{
              return(
                <MyTextInput
                  /* label={e.label} */
                  name={e.name}
                  type={e.type}
                  placeholder={e.placeholder}
          />      
              )
            })
          }
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};


export default BaseForm;