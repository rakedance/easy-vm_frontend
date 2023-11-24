import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';

import { useModalStore } from '../../store/modalStore';

export const AuthModal = () => {
  const {isOpen, title, changeModal} = useModalStore();

  const handleClose = () => {
    changeModal(false, title);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {email: '', password: ''};

         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         if (!values.password) {
          errors.password = 'Required';
         }

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
       }) => (
         <form onSubmit={handleSubmit}>
          <TextField
          margin='dense'
          error={Boolean(errors.email) && touched.email}
          helperText={errors.email}
            fullWidth
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <TextField
          error={Boolean(errors.password) && touched.password}
          helperText={errors.password}
            fullWidth
            margin='dense'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
         </form>
       )}
     </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>{title}</Button>
        </DialogActions>
      </Dialog>
  );
}
