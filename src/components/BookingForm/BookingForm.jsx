import Button from '../Button/Button';
import formCss from './BookingForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const testSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short name!')
    .max(50, 'Too long name!')
    .required('Name is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .min(5, 'Too short email!')
    .max(50, 'Too long email!')
    .required('Email is required'),
  date: Yup.date().required('Booking date is required'),
  comment: Yup.string().max(300, 'Too long comment!'),
});

const BookingForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, email, date, comment } = values;
    const formData = { id: nanoid(), name, email, date, comment };
    dispatch({ type: 'ADD_BOOKING', payload: formData });
    toast.success('Booking successfully submitted!', {
      position: 'top-right',
      autoClose: 3000, // 3 seconds
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={testSchema}
      >
        <Form className={formCss.form}>
          <h2 className={formCss.header}>Book your campervan now</h2>
          <p className={formCss.subheader}>
            Stay connected! We are always ready to help you.
          </p>

          <div className={formCss.fieldWrapper}>
            <Field
              type="text"
              className={formCss.formInput}
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage name="name" component="p" className={formCss.error} />
          </div>

          <div className={formCss.fieldWrapper}>
            <Field name="email">
              {({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={formCss.formInput}
                  placeholder="Email*"
                />
              )}
            </Field>
            <ErrorMessage
              name="email"
              component="p"
              className={formCss.error}
            />
          </div>

          <div className={formCss.fieldWrapper}>
            <Field name="date">
              {({ field }) => (
                <input
                  {...field}
                  type="text"
                  onFocus={e => (e.target.type = 'date')}
                  onBlur={e => (e.target.type = 'text')}
                  className={formCss.formInput}
                  placeholder="Booking date*"
                />
              )}
            </Field>
            <ErrorMessage name="date" component="p" className={formCss.error} />
          </div>

          <div className={formCss.fieldWrapper}>
            <Field name="comment">
              {({ field }) => (
                <textarea
                  {...field}
                  className={`${formCss.formInput} ${formCss.commentInput}`}
                  placeholder="Comment"
                  rows="4"
                />
              )}
            </Field>
            <ErrorMessage
              name="comment"
              component="p"
              className={formCss.error}
            />
          </div>

          <Button className="submitForm" type="submit">
            Send
          </Button>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default BookingForm;
