import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Newsletter() {
  const SignupSchema = Yup.object().shape({
     firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  /* const formik = useFormik({
     initialValues: {
       email: '',
     },
     Newsletter={SignupSchema},
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   }); */
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      validateOnChange={true}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <Form>
          <Field name="firstName" OnChange={handleSubmit} />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default Newsletter;
