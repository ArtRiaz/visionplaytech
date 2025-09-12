import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTheme, useMediaQuery } from '@mui/material';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import Popup from '../Popup/Popup';
import ReCAPTCHA from 'react-google-recaptcha';
import AOS from 'aos';
import 'aos/dist/aos.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^\+(?:[0-9] ?){6,14}[0-9]$/,
      'Phone number must be a valid international number with "+" and 7 to 15 digits'
    ),
  message: Yup.string()
    .required('Message is required')
    .min(2, 'Message must be at least 2 characters long')
    .max(250, 'Message must be less than 250 characters long'),
});

const MyForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('1280'));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log('Form submitted!', values);

    setIsSubmitting(true);

    // Имитация отправки без ReCAPTCHA и Telegram API
    setTimeout(() => {
      console.log('Message sent successfully');
      resetForm();
      setIsPopupOpen(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Общий стиль для всех TextField
  const inputStyles = {
    borderRadius: '12px',
    backgroundColor: '#fff',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#d1d5db',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#9ca3af',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ea580c',
      boxShadow: '0 0 0 3px rgba(234, 88, 12, 0.25)',
    },
    '& input::placeholder, & textarea::placeholder': {
      fontWeight: 400,
      fontSize: '16px',
      textTransform: 'uppercase',
      color: '#9ca3af',
    },
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <>
            <Form
              data-aos='zoom-in-up'
              id='form'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: isMobile ? '89px' : '178px',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '24px',
                  maxWidth: isMobile ? '358px' : '765px',
                  margin: isMobile ? '0 16px' : '0 auto',
                  padding: isMobile ? '32px 21px 47px' : '63px 104px 56px',
                  backgroundColor: '#fff',
                  zIndex: 1,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // лёгкая тень
                }}
              >
                <Typography
                  variant='h4'
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: isMobile ? '46px' : '74px',
                    marginBottom: '48px',
                    lineHeight: '116%',
                    letterSpacing: '-0.06em',
                    textTransform: 'capitalize',
                    textAlign: 'center',
                    color: '#000',
                  }}
                >
                  Work with Us
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  sx={{
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '160%',
                    textAlign: 'center',
                    marginBottom: '48px',
                    color: '#000',
                  }}
                >
                  Fill in the form below to send us a message.
                </Typography>

                {/* Name */}
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                  <Field
                    name='name'
                    as={TextField}
                    label='Name'
                    placeholder='ENTER YOUR NAME'
                    fullWidth
                    variant='outlined'
                    error={touched.name && Boolean(errors.name)}
                    helperText={<ErrorMessage name='name' />}
                    InputProps={{ sx: inputStyles }}
                  />
                </Box>

                {/* Email */}
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                  <Field
                    name='email'
                    as={TextField}
                    label='Email'
                    placeholder='ENTER YOUR EMAIL'
                    fullWidth
                    variant='outlined'
                    error={touched.email && Boolean(errors.email)}
                    helperText={<ErrorMessage name='email' />}
                    InputProps={{ sx: inputStyles }}
                  />
                </Box>

                {/* Phone */}
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                  <Field
                    name='phone'
                    as={TextField}
                    label='Phone Number'
                    placeholder='ENTER YOUR PHONE NUMBER'
                    fullWidth
                    variant='outlined'
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={<ErrorMessage name='phone' />}
                    InputProps={{ sx: inputStyles }}
                  />
                </Box>

                {/* Message */}
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                  <Field
                    name='message'
                    as={TextField}
                    label='Message'
                    placeholder='TYPE YOUR MESSAGE'
                    fullWidth
                    multiline
                    rows={4}
                    variant='outlined'
                    error={touched.message && Boolean(errors.message)}
                    helperText={<ErrorMessage name='message' />}
                    InputProps={{ sx: inputStyles }}
                  />
                </Box>

                {/* Submit button */}
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  variant='contained'
                  fullWidth
                  sx={{
                    borderRadius: '44px',
                    padding: '21px',
                    width: '185px',
                    fontWeight: '700',
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    color: '#fff',
                    backgroundColor: '#ea580c',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#d0d0d1',
                      color: '#ea580c',
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Form>
          </>
        )}
      </Formik>

      {/* Popup */}
      <Popup open={isPopupOpen} onClose={closePopup} />

      {/* ReCAPTCHA */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey='6LftVi4qAAAAAByBISv3BEum4huw5LT-hmThKpU9'
        size='invisible'
      />
    </>
  );
};

export default MyForm;